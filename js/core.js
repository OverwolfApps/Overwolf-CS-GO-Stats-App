$(function() {

"use strict";

//
// Globals
//
var cfg = {
	site : 'http://csgo-stats.com/',
	//site : 'http://188.166.8.233/',
	game_id : 77641,
	team : {
		ct: 'Counter-Terrorists',
		t:  'Terrorists'
	},
	hotkey : {
		show : null,
		share : null
	},
	hotkey_none : 'Unassigned',
	size : {
		width  : 800,
		height : 480
	},
	size_ingame : {
		width  : 880,
		height : 540,
		//height : 610
	},
	size_wide : {
		width  : 1310,
		height : 540,
		//height : 610
	}
};

//
// Main app
//

var app = (function() {

var templates	= {},
	upd_def		= {
		id		: 0,
		drawn	: false,
		data	: {},
		sorted	: {},
		prev	: {},
		loading	: [],
		count	: {
			total	 : 0,
			for_load : 0
		}
	},
	sorted_by	= null,
	upd			= JSON.parse(JSON.stringify(upd_def)),
	cache		= {},
	cache_time	= 5 * 60 * 1000, // 5 mins
	cache_interval = null,
	notice_init	= false,
	players_cont = $('#players'),
	chatting = false,
	section,
	had_updates = false,
	plugin_started = false;

function main_init() {

	overwolf.windows.onMainWindowRestored.addListener(function() {

		window_adjust();
	});

	overwolf.windows.onStateChanged.addListener(function(e) {

		var status = in_game() ? 'in game' : 'on desktop';

		if ( e.window_state === 'normal' || e.window_state === 'opened' )
			ga('send', 'event', 'main', 'App shown '+ status);
		else if ( e.window_state === 'minimized' )
			ga('send', 'event', 'main', 'App minimized '+ status);
		else if ( e.window_state === 'closed' )
			ga('send', 'event', 'main', 'App closed '+ status);
	});

	overwolf.games.getRunningGameInfo(function(gameInfo) {

		if ( gameInfo && gameInfo.isInFocus && gameInfo.id == cfg.game_id )
			in_game(true);
		else
			in_game(false);
	});

	overwolf.games.onGameInfoUpdated.addListener(function(e) {

		if ( e && e.gameInfo && e.gameInfo.isInFocus && e.gameInfo.id == cfg.game_id )
			in_game(true);
		else
			in_game(false);
	});

	overwolf.windows.getCurrentWindow(function(w) {
		$('#minimize').click(function() {
			overwolf.windows.minimize(w.window.id);
		});
		$('#close').click(function() {
			overwolf.windows.close(w.window.id);
		});
	});

	$('[data-section-open]').click(function(e) {
		e.preventDefault();
		set_section($(this).data('section-open'));
	});

	$(window).load(function() {
		setTimeout(function() {
			$('body').removeClass('app-loading').addClass('app-loaded');
		}, 2000);
	});

	$('#wrap').on('click', 'a[target="_blank"]', function() {
		ga('send', 'event', 'main', 'Link clicked: '+ this.hostname);
	});

	$('#app-wrap').mousedown(function(e) {
		if ( ! in_game() && ! $(e.target).parents().add(e.target).is('a, button, input, label, :input') ) {
			overwolf.windows.getCurrentWindow(function(w) {
				overwolf.windows.dragMove(w.window.id);
			});
		}
	});

	players_cont.find('[data-sort]').click(function() {
		sort.sort($(this).data('sort'));
	});

	UserVoice.push(['set', {
		accent_color: '#00b5f4',
		screenshot_enabled: false,
		forum_id: 321354,
		menu_enabled: true,
		position: 'left'
	}]);

	UserVoice.push(['addTrigger', '#feedback', { mode: 'contact' }]);

	options();
	set_section('home');

	auth.init();
	share.init();
	site.init();

	update_hotkeys();
	setInterval(update_hotkeys, 3000);

	draw_stats();

	overwolf.games.getRunningGameInfo(function(gameInfo) {
		setTimeout(function() {
			if ( gameInfo && gameInfo.id == cfg.game_id )
				plugin_start();
		}, 5000);
	});

	overwolf.games.onGameLaunched.addListener(function() {
		overwolf.games.getRunningGameInfo(function(gameInfo) {
			setTimeout(function() {
				console.log(gameInfo);
				if ( gameInfo && gameInfo.id == cfg.game_id)
					plugin_start();
			}, 5100);
		});
	});

	overwolf.games.events.onInfoUpdates.addListener(on_info_update);

	ga('send', 'event', 'main', 'App started');
}

function plugin_start() {
	overwolfInternal.game.loadPlugin(function(e) {
		console.log('Plugin loaded:', e);
	});
}

function on_info_update(data) {
	for ( var i in data.info ) {
		if ( data.info[i].category == 'csgo_players' && data.info[i].key == 'players_list' )
			on_players_update(JSON.parse(data.info[i].value));

		if ( data.info[i].category == 'steam' && data.info[i].key == 'player_steam_id' )
			auth.on_auth(data.info[i].value);
	}
}

function set_section(set) {
	if ( set !== section ) {

		$('[data-section-open="'+ set +'"]').addClass('active');
		$('[data-section-open]:not([data-section-open="'+ set +'"])').removeClass('active');
		$('body').attr('data-section', set);

		section = set;
	}
}

var in_game = (function(set) {

	var status;

	return function(set) {

		if ( set !== status && set === true ) {

			status = true;
			ingame_changed(true);

		} else if ( set !== status && set === false ) {

			status = false;
			ingame_changed(false);
		}

		return status;
	};
})();

var site = (function() {

	var	cont = $('#site-cont'),
		frame = $('#site'),
		shown;

	function init() {
		hide(true, true);

		$('#wrap').on('click', '.view-site', function(e) {
			show($(this).data('url'));
			return false;
		});

		$(window).click(function() {
			if ( shown )
				hide();
		});
	}

	function show(url, immediate) {
		url = cfg.site + url + '/';

		if ( url != frame.attr('src') )
			frame.attr('src', url);

		if ( ! shown ) {

			if ( immediate ) {
				cont.show().css({opacity: 1});
				frame.css({right: 0});
				shown = true;
			} else {
				setTimeout(function() {
					if ( ! shown ) {
						cont.stop().show().animate({opacity: 1}, 200);
						frame.stop().animate({right: 0}, 200);
						shown = true;
					}
				}, 200);
			}
		}
	}

	function hide(immediate, init) {
		if ( init || shown ) {
			shown = false;

			if ( immediate ) {
				cont.css({opacity: 0}).hide();
				frame.css({right: -100});
			} else {
				cont.stop().animate({opacity: 0}, 200, function() {
					$(this).hide();
				});
				frame.stop().animate({right: -100}, 200);
			}
		}
	}

	return {
		init : init,
		show : show,
		hide : hide
	};
})();

var share = (function() {

	var silence = false,
		silence_time = 120 * 1000,
		silence_timeout,
		sort_names = {
			kdr			: 'K/D',
			kills		: 'kills',
			win_perc	: 'win %',
			time_played	: 'play time'
		};

	function init() {
		overwolf.settings.registerHotKey('share_csgo_stats', function(e) {
			if ( e.status == 'success' )
				share();
		});
	}

	function share() {

		if ( ! in_game() || ! sorted_by || $.isEmptyObject(upd.sorted) )
			return;

		console.log(silence);

		if ( silence )
			return show_notice({message: 'You can only share stats every 2 minutes'}, 'generic');

		silence = true;

		clearTimeout(silence_timeout);
		silence_timeout = setTimeout(function() {
			silence = false;
		}, silence_time);

		var team,
			players,
			p,
			n,
			stat,
			name;

		var	message_start = 'Top players by total '+ sort_names[sorted_by] + ':',
			messages = {},
			message_end = 'Get ingame app at CSGO-STATS.COM';

		for ( team in upd.sorted ) {
			n = 0;
			messages[team] = team.toUpperCase() +': ';

			players = upd.sorted[team].slice(0, 3);

			for ( p in players ) {
				if ( players[p].profile && players[p].stats && players[p].stats[sorted_by] ) {
					n++;
					stat = format_stat(players[p].stats[sorted_by], sorted_by);
					name = players[p].profile.personaname || '';

					messages[team] += n +'.'+ name +' ('+ stat +') ';
				}
			}
		}

		chat(message_start, function() {
			chat(messages.ct, function() {
				chat(messages.t, function() {
					chat(message_end);
					show_notice({message: 'Shared top players by '+ sort_names[sorted_by] +' in chat'}, 'generic');
				});
			});
		});
	}

	function chat(message, callback) {

		var wait = 100;

		overwolf.utils.sendKeyStroke('y');

		setTimeout(function() {
			overwolf.utils.placeOnClipboard(message);

			setTimeout(function() {
				overwolf.utils.sendKeyStroke('Ctrl+v');

				setTimeout(function() {
					overwolf.utils.sendKeyStroke('Enter');
					console.log(message);

					if ( callback !== undefined )
						setTimeout(callback, 500);
				}, wait);
			}, wait);
		}, wait);
	}

	return {
		init : init,
		share : share
	};
})();

function update_hotkey(id) {
	overwolf.settings.getHotKey(id+'_csgo_stats', function(data) {

		var key = cfg.hotkey_none;

		if ( data.status == 'success' && data.hotkey )
			key = data.hotkey;

		if ( key === cfg.hotkey[id] )
			return;

		cfg.hotkey[id] = key;

		$('.hotkey-'+ id).text(key);
		$('.option-hotkey-'+ id).html(app.render('options-hotkey-'+ id, key));

		ui.tooltip.refresh();
	});
}

function update_hotkeys() {

	for (var id in cfg.hotkey) {
		update_hotkey(id);
	}
}

function window_adjust() {

	var	width 	= cfg.size.width,
		height 	= cfg.size.height,
		min_width  = width,
		min_height = height,
		view_w	= window.screen.width - 40,
		view_h	= window.screen.height - 40;

	overwolf.games.getRunningGameInfo(function(gameInfo) {

		if ( gameInfo && gameInfo.isInFocus && gameInfo.id == cfg.game_id ) {

			view_w = gameInfo.width - 40;
			view_h = gameInfo.height - 40;

			width  = cfg.size_ingame.width;
			height = cfg.size_ingame.height;

			min_width  = width;
			min_height = height;

			if ( section == 'players' ) {

				var height_rows = 0;

				players_cont.find('.team').each(function() {
					height_rows += parseInt($(this).css('padding-top'));
					height_rows += parseInt($(this).css('padding-bottom'));
				});

				players_cont.find('.players').each(function() {
					height_rows += parseInt($(this).css('padding-bottom'));
				});

				players_cont.find('.player').each(function() {
					height_rows += $(this).outerHeight();
				});

				if ( (upd.count.total >= 24 && cfg.size_wide.width < view_w) || (cfg.size_wide.width < view_w && height_rows > view_h) ) {

					players_cont.addClass('columns');
					width = cfg.size_wide.width;
					min_width = width;

				} else {

					players_cont.removeClass('columns');
					height = height_rows;

				}
			}

			width = Math.min(Math.max(width, min_width), view_w);
			height = Math.min(Math.max(height, min_height), view_h);
		}

		$('#wrap').height(height);
		players_cont.find('.players').scrollTop(0);

		overwolf.windows.getCurrentWindow(function(w) {

			width += 40;
			height += 40;
			view_w += 40;
			view_h += 40;

			var	left = parseInt(Math.max((view_w / 2) - (width / 2), 0)),
				top	 = parseInt(Math.max((view_h / 2) - (height / 2), 0));

			if ( w.window.width !== width || w.window.height !== height )
				overwolf.windows.changeSize(w.window.id, width, height);

			if ( w.window.top !== top || w.window.left !== left )
				overwolf.windows.changePosition(w.window.id, left, top);
		});
	});
}

function ingame_changed( status ) {

	if ( status ) {

		set_section('players');

		$('body').attr('data-game', 'in');

	} else {

		set_section('home');
		$('body').attr('data-game', 'out');

		site.hide(true);
	}

	window_adjust();
}

function on_match_start() {

	cache = {};

	on_load_all(upd.id);

	if ( cache_interval !== null )
		clearInterval(cache_interval);

	cache_interval = setInterval(function() {
		cache = {};
	}, cache_time);

	console.log('match start, clearing cache');
}

function on_players_update(data) {

	var prev_id = upd.id,
		prev_data = JSON.parse(JSON.stringify(upd.data));

	upd = JSON.parse(JSON.stringify(upd_def));
	upd.id = prev_id + 1;
	upd.prev = prev_data;

	/* if ( ! data || ! data.players || data.players.length === 0 ) {

		cache = {};

		on_load_all(upd.id);

		if ( cache_interval !== null )
			clearInterval(cache_interval);

		cache_interval = setInterval(function() {
			cache = {};
		}, cache_time);

		console.log('update', upd.id, ': 0 players');
		return;
	}*/

	had_updates = true;

	var dbug = [];

	var id,
		curr,
		team;

	for ( id in data.players ) {

		dbug.push(data.players[id].steamId +': '+ data.players[id].team);

		if ( data.players[id].steamId !== 0 && ! upd.data.hasOwnProperty(data.players[id].steamId) ) {

			curr = data.players[id];

			upd.data[curr.steamId] = {};
			upd.data[curr.steamId].steamid = curr.steamId;

			upd.count.total++;

			if ( curr.team === cfg.team.ct )
				upd.data[curr.steamId].team = 'ct';
			else if ( curr.team === cfg.team.t )
				upd.data[curr.steamId].team = 't';

			if ( upd.count.hasOwnProperty(upd.data[curr.steamId].team) )
				upd.count[upd.data[curr.steamId].team]++;
			else
				upd.count[upd.data[curr.steamId].team] = 1;
		}
	}

	console.log('raw update data', upd.id, ': ', dbug.length, 'players', upd);
	//console.log(dbug.join('\r\n'));

	ga('send', 'event', 'main', 'Players list update');

	if ( upd.count.total > 0 ) {

		if ( upd.prev && ! $.isEmptyObject(upd.prev) )
			players_cont.attr('data-status', 'updating');
		else
			players_cont.attr('data-status', 'loading');

		ui.loading.start(players_cont.find('.progress'));

		for ( id in upd.data ) {
			if ( cache.hasOwnProperty(id) ) {

				team = upd.data[id].team;

				upd.data[id] = cache[id];
				upd.data[id].team = team;

			} else {

				upd.loading.push(id);

				upd.count.for_load++;

				load_player(id, upd.id);
			}
		}
	}

	on_load_all(upd.id);
}

function load_player(id, upd_id) {
	$.ajax({url: cfg.site +'o/'+ id +'/'})
	.always(function(data, status) {
		on_load(data, status, id, upd_id);
	});
}

function on_load(data, status, id, upd_id) {

	var loading_indexof = upd.loading.indexOf(id),
		team;

	if ( loading_indexof !== -1 )
		upd.loading.splice(loading_indexof, 1);

	if ( status === 'success' && data && ! $.isEmptyObject(data) ) {

		id = data.profile.steamid;

		if ( upd.data.hasOwnProperty(id) ) {

			team = upd.data[id].team;

			upd.data[id] = data;
			upd.data[id].steamid = id;
			upd.data[id].team = team;
		}

		if ( ! cache.hasOwnProperty(id) )
			cache[id] = JSON.parse(JSON.stringify(upd.data[id]));

		if ( ! $.isEmptyObject(upd.prev) ) {
			show_notice(upd.data[id], 'player');
			//console.log('show_notice player');
		}

		//console.log('success:', data.profile.personaname, id, 'req:', upd_id, upd.data[id]);

	} else {
		console.log('fail:', id, 'req:', upd_id, 'xhr status:', status, upd.data[id]);
	}

	if ( upd.id === upd_id && upd.count.for_load > 0 )
		ui.loading.set((1 - (upd.loading.length / upd.count.for_load)));

	on_load_all(upd_id);
}

function on_load_all(upd_id) {

	if ( upd.id === upd_id && upd.drawn === false && upd.loading.length === 0 ) {

		console.log('fully loaded req', upd_id, ', run draw_stats()');

		draw_stats();

		setTimeout(function() {
			if ( upd.count.total > 0 )
				send_referral();
		}, 60 * 1000);

		if ( $.isEmptyObject(upd.prev) && ! $.isEmptyObject(upd.data) ) {
			show_notice(upd.count, 'multiple');
			//console.log('show_notice multiple');
		}
	}
}

function draw_stats() {

	var	user	 = get_opt('user-data'),
		player	 = {},
		rendered = {},
		id;

	if ( upd.count.total > 0 ) {

		players_cont.attr('data-status', 'success');
		ui.loading.stop();
		upd.drawn = true;

		for ( id in upd.data ) {

			if ( upd.data[id] && ! $.isEmptyObject(upd.data[id]) ) {

				player = JSON.parse(JSON.stringify(upd.data[id]));

				if ( user && player.profile.steamid === user.profile.steamid )
					player.is_user = true;

				if ( player.stats )
					player.stats = format_stats(player.stats);

				if ( ! rendered.hasOwnProperty(player.team) )
					rendered[player.team] = '';

				rendered[player.team] += render('player', player);

			} else {
				//console.log('empty data', id, JSON.stringify(upd.data[id]));
			}
		}

		for ( id in rendered ) {
			players_cont.find('.team.'+ id +' .players').html(rendered[id]);
		}

		sort.init();

	} else {

		players_cont.attr('data-status', 'empty').find('.team .players').empty();

	}

	if ( upd.count.total >= 14 )
		players_cont.addClass('large-teams');
	else
		players_cont.removeClass('large-teams');

	window_adjust();
	ui.tooltip.refresh();
}

function format_stat(stat, name) {

	if ( name == 'time_played' ) {

		stat = numeral(Math.floor(stat)).format('0,0') +'h';

	} else if ( ! isNaN(stat) ) {

		stat = numeral(stat).format('0,0[.][00]');

		if ( name == 'win_perc' )
			stat += '%';
	}

	return stat;
}

function format_stats(stats) {

	for ( var name in stats ) {
		stats[name] = format_stat(stats[name], name);
	}

	return stats;
}

var sort = (function() {

	function init() {

		sorted_by = null;

		for ( var id in upd.data ) {

			if ( ! upd.sorted.hasOwnProperty(upd.data[id].team) )
				upd.sorted[upd.data[id].team] = [];

			if ( ! upd.data[id].profile || $.isEmptyObject(upd.data[id].profile) )
				return;

			var el = $('#player-'+ upd.data[id].steamid);

			if ( ! el.length )
				return;

			var data = upd.data[id];

			data.el = el[0];
			data.order = 0;
			data.height = el.outerHeight(true);

			upd.sorted[upd.data[id].team].push(data);
		}

		sort_all(get_opt('stats-sort') || 'kdr', true);
	}

	function sort_all(set, no_anim) {

		if ( sorted_by === set )
			return;

		sorted_by = set;

		if ( get_opt('stats-sort') != sorted_by )
			ga('send', 'event', 'main', 'Players sorted sorted_by '+ sorted_by);

		set_opt('stats-sort', sorted_by);

		players_cont.find('[data-sort='+ sorted_by +']').addClass('active');
		players_cont.find('[data-sort]:not([data-sort='+ sorted_by +'])').removeClass('active');

		for ( var team in upd.sorted ) {
			sort_team(team, no_anim);
		}

		players_cont.find('.players').scrollTop(0);
	}

	function sort_team(team, no_anim) {

		upd.sorted[team].sort(function(a, b) {

			if ((! a && ! b) || (! a.stats && ! b.stats))
				return 0;

			if (! a || ! a.stats)
				return 1;

			if (! b || ! b.stats)
				return -1;

			a = parseFloat(a.stats[sorted_by]);
			b = parseFloat(b.stats[sorted_by]);

			if (a < b)
				return 1;

			if (a > b)
				return -1;

			return 0;
		});

		upd.sorted[team].forEach(function(v, i) {

			if ( no_anim ) {
				v.el.style.order = i;
				v.order = i;
			} else {
				$(v.el).stop().animate({
					top: ((i - v.order) * v.height)
				}, 400, function() {
					this.style.top = '';
					this.style.order = i;
					v.order = i;
				});
			}

			$(v.el).find('.stat.'+ sorted_by)
				.addClass('active')
				.siblings('.stat')
				.removeClass('active');
		});
	}

	return {
		init	: init,
		sort	: sort_all
	};
})();

function options() {

	var	form = $('form[action=options]');

	form.find('input[type=checkbox]').each(function() {

		var stored = get_opt(this.name);

		if ( stored === null )
			set_opt(this.name, this.checked);
		else
			this.checked = stored;
	});

	form.find('input[type=checkbox]').on('change', function(e) {
		set_opt(this.name, this.checked);
	});

	form.on('submit', function() {
		return false;
	});
}

var auth = (function() {

	var inited = false;

	function init() {

		if ( inited )
			return;

		var data = get_opt('user-data');

		if ( ! data && $.isEmptyObject(data) )
			return;

		$('.auth-user')
			.html(render('user', data))
			.attr('data-status', 'success');

		inited = true;
	}

	function on_auth(id) {
		id = parseInt(id);

		if ( id % 2 === 0 )
			id = '0:'+ Math.floor(id / 2);
		else
			id = '1:'+ Math.floor(id / 2);

		id = 'STEAM_0:'+ id;

		if ( SteamIDConverter.isSteamID(id) ) {
			id = SteamIDConverter.toSteamID64(id);

			console.log('User SteamID:', id);

			$.ajax({url: cfg.site +'o/'+ id +'/'}).done(done);
		} else {
			done();
		}
	}

	function done(data) {
		if ( data && ! $.isEmptyObject(data) )
			success(data);
		else
			fail();
	}

	function success(data) {

		var old = get_opt('user-data');

		if ( old && ! $.isEmptyObject(old) && data.profile.steamid == old.profile.steamid )
			return;

		data.profile.url = cfg.site + data.profile.steamid + '/';

		set_opt('user-data', data);

		$('.auth-user')
			.html(render('user', data))
			.attr('data-status', 'success');
	}

	function fail() {
		set_opt('user-data', null);
		$('.auth-user .profile').empty();
	}

	return {
		init : init,
		on_auth : on_auth
	};
})();


function send_referral() {
	var user = get_opt('user-data');

	if ( ! user || $.isEmptyObject(user) || get_opt('r-sent') || ! user.profile || ! user.profile.steamid )
		return false;

	console.log('sending r');

	$.post(cfg.site +'o/r/', { steamid: user.profile.steamid }, function() {
		set_opt('r-sent', true);
	});
}

function show_notice(input, intent) {

	var data = JSON.parse(JSON.stringify(input));

	//if ( ! notice_init ) {
		overwolf.windows.obtainDeclaredWindow('notice', function(result) {
			overwolf.windows.restore(result.window.id);
			//console.log(result.window);
		});

		notice_init = true;
	//}

	data.intent = intent;
	data.time = Date.now();

	localStorage.setItem('show-notice', JSON.stringify(data));
}

function render(template, data) {

	if ( ! templates.hasOwnProperty(template) ) {

		var template_el = $('#tpl-'+ template);

		if ( ! template_el.length )
			return;

		templates[template] = template_el.html();
		Mustache.parse(templates[template]);
	}

	return Mustache.render(templates[template], data || {});
}

function set_opt(option, value) {
	localStorage.setItem('opt-'+ option, JSON.stringify(value));
}

function get_opt(option) {
	return JSON.parse(localStorage.getItem('opt-'+ option) || null);
}

// URL Cleanup
function cleanup( input ) {

	var	remove = [
			'https://www.',
			'https://',
			'http://www.',
			'http://',
			'steamcommunity.com/id/',
			'steamcommunity.com/profiles/',
			'/'
		],
		rgxp = /[^a-z0-9_\-\/,]/gi;

	input = input.toString();
	input = $.trim( input );

	for (var i in input) {
		input = input.split(remove[i]).join('');
	}

	input = input.replace(rgxp, '');

	return input;
}

function init() {

	if ( $('body.app-index').length )
		main_init();

	if ( $('body.app-notice').length )
		notice.init();

	ui.init();

	/*setInterval(function() {
		console.log($('body').height());
	}, 1000);*/
}

return {
	init	: init,
	main_init : main_init,
	render	: render,
	set_opt	: set_opt,
	get_opt	: get_opt,
	auth	: auth,
	cleanup	: cleanup
};
})(); // app


//
// Notice window
//

var notice = (function() {

var	notices_cont = $('#notices-list'),
	silence = false,
	silence_time = 1000,
	silence_mul_time = silence_time * 20,
	timeout;

function init() {

	overwolf.games.getRunningGameInfo(window_adjust);

	overwolf.games.onGameInfoUpdated.addListener(function(e) {
		window_adjust(e.gameInfo);
	});

	window.addEventListener('storage', function(e) {
		console.log(e);
		if ( e.key === 'show-notice' )
			show(JSON.parse(e.newValue));
	});

	notices_cont.on('animationEnd webkitAnimationEnd', 'li', function(e) {
		if ( e.originalEvent.animationName == 'notice-fadeout' )
			$(this).remove();
		else if ( e.originalEvent.animationName == 'notice-fadein' && ! $(this).hasClass('fadeout') )
			$(this).addClass('fadeout');
	});
}

function show(data) {

	if ( ! data || $.isEmptyObject(data) )
		return;

	if ( data.intent == 'player' && ( $('.player-'+ data.steamid).length || data.is_private ) )
		return;

	if ( silence && data.intent == 'player' )
		return;

	var time = silence_time;

	if ( data.intent == 'multiple' ) {
		time = silence_mul_time;
		notices_cont.children('li').addClass('fadeout');
	}

	if ( data.intent == 'player' && data.stats )
		data.stats.time_played = Math.floor(data.stats.time_played);

	silence = true;
	console.log('muted');

	clearTimeout(timeout);
	timeout = setTimeout(function(argument) {
		silence = false;
		console.log('unmuted');
	}, time);

	if ( data.intent == 'generic' ) {
		notices_cont.prepend(app.render('generic-notice', data.message));
		ga('send', 'event', 'notices', 'Notice: '+ data.message);
	} else {
		overwolf.settings.getHotKey('show_csgo_stats', function(hotkey) {
			if ( hotkey.status === 'success' )
				data.hotkey = hotkey.hotkey;

			if ( cfg.team.hasOwnProperty(data.team) )
				data.team_text = cfg.team[data.team];

			ga('send', 'event', 'notices', 'Notice: '+ data.intent);

			notices_cont.prepend(app.render(data.intent +'-notice', data));
		});
	}
}

function window_adjust(gameInfo) {
	if ( ! gameInfo || ! gameInfo.isInFocus )
		return;

	overwolf.windows.getCurrentWindow(function(w) {
		var	screen_w = gameInfo.width,
			screen_h = gameInfo.height,
			id		= w.window.id,
			top		= parseInt(screen_h * 0.3),
			win_h	= screen_h - top,
			win_w	= 310,
			left	= screen_w - win_w - 15;

		overwolf.windows.changePosition(id, left, top);
		overwolf.windows.changeSize(w.window.id, win_w, win_h);
	});
}

return {
	init : init,
	show : show
};
})(); // notice


//
// Controls, forms, sorting, buttons etc.
//

var ui = (function() {

var tooltip = (function() {

	if ( ! $('#tip-container').length )
		$('body').append('<div id="tip-container"><i id="tip-arrow"></i><div class="tip-content"></div></div>');

	var	targ = '[data-tip]',
		cont = $('#tip-container'),
		arrow = $('#tip-arrow'),
		curr = 0;

	$(window).on('scroll resize', function() {
		hide();
	});

	function show(el) {

		el = $(el);

		if ( ! $(el).data('curr-id') || $(el).data('curr-id') !== curr ) {

			curr++;
			$(el).data('curr-id', curr);

			if ( ! $(el).data('tip') )
				cont.find('.tip-content').html($(el).children('[data-tip-content]').clone().removeAttr('data-tip-content'));
			else
				cont.find('.tip-content').text($(el).data('tip'));

			cont.css({ top: 0, left: 0 });
		}

		var scroll_top		= $(window).scrollTop(),
			scroll_left		= $(window).scrollLeft(),
			window_width	= $(window).width(),
			window_height	= $(window).height();

		var el_top	= $(el).offset().top,
			el_left	= $(el).offset().left,
			el_width	= $(el).outerWidth(),
			el_height	= $(el).outerHeight();

		var tip_width	= cont.outerWidth(true),
			tip_height	= cont.outerHeight(true);

		var vert = {
			bottom	: el_top + el_height,
			top		: el_top - tip_height
		};

		var hor = {
			left	: el_left,
			center	: el_left + (el_width / 2) - (tip_width / 2),
			right	: el_left + el_width - tip_width
		};

		var args = {
			vert : $(el).data('vert') || 'bottom',
			hor  : $(el).data('hor')  || 'center'
		};

		var set_top = vert[args.vert],
			set_left = hor[args.hor],
			arr_v = args.vert,
			arr_h = args.hor;

		if ( arr_v == 'bottom' )
			arr_v = 'top';
		else if ( arr_v == 'top' )
			arr_v = 'bottom';

		if ( args.vert == 'bottom' && vert.bottom + tip_height > scroll_top + window_height ) {
			set_top = vert.top;
			args.vert = 'top';
			arr_v = 'bottom';
		} else if ( args.vert == 'top' && vert.top < scroll_top ) {
			set_top = vert.bottom;
			args.vert = 'bottom';
			arr_v = 'top';
		}

		if ( set_left + tip_width > scroll_left + window_width ) {
			set_left = scroll_left + window_width - tip_width;
			arr_h = 'center';
		} else if ( set_left < scroll_left ) {
			set_left = 0;
			arr_h = 'center';
		}

		set_top  = Math.floor(set_top);
		set_left = Math.floor(set_left);

		cont
			.removeClass('top bottom')
			.addClass(args.vert)
			.css({
				top: set_top,
				left: set_left
			})
			.addClass('visible');

		arrow
			.removeClass()
			.addClass(arr_v)
			.addClass(arr_h);
	}

	function hide() {
		cont.removeClass('visible');
	}

	function refresh() {

		cont.removeClass('visible');

		if ( ! $(targ).length )
			return;

		$(targ).each(function() {

			if ( $(this).data('tip-bound') )
				return;

			$(this)
				.hover(function() {
					show(this);
				}, hide)
				.data('tip-bound', true);
		});
	}

	return {
		refresh : refresh,
		show : show,
		hide : hide
	};
})(); // tooltip

var loading = (function() {

	var cfg = {
		trick_interval	: 800,
		trick_val		: 0.025,
		inc				: 0.1
	};

	var cont,
		bar,
		text,
		interval,
		running = false,
		value = 0;

	function start(el) {

		if ( el ) {
			cont = el;
			bar = cont.find('.bar');
			text = cont.find('.percent');
		}

		running = true;
		value = 0;
		bar.stop().css('width', '');

		cont.addClass('running').removeClass('finished');

		interval = setInterval(function(argument) {
			if ( running )
				trick();
		}, cfg.trick_interval);

		trick();
	}

	function stop() {

		running = false;
		clearInterval(interval);

		if ( value !== 1 )
			value = 1;

		update(true);
	}

	function set(val) {
		value = Math.min(Math.max(val, 0), 1);

		if ( value === 1 )
			stop();
		else
			update();
	}

	function inc(val) {
		val = val || cfg.inc;

		set(Math.min(value + val, 1 - cfg.trick_val));
	}

	function trick() {
		inc(cfg.trick_val * (0.5 + (Math.random() * 0.5)));
	}

	function update(stop) {
		text.text(Math.round(value * 100) +'%');
		bar.stop().animate({width: (Math.round(value * 1000) / 10) +'%'}, 350,
		function() {
			if ( stop )
				cont.addClass('finished').removeClass('running');
		});
	}

	return {
		start	: start,
		stop	: stop,
		set		: set,
		inc		: inc
	};
})(); // loading

function load_svg() {
	$.get('img/res.svg', function(data) {
		$('body').prepend('<div id="svg-container" hidden>'+ data +'</div>');
	});
}

function init() {

	jQuery.easing.def = 'easeInOutQuad';

	load_svg();
}

return {
	tooltip	 : tooltip,
	loading	 : loading,
	init 	 : init
};
})(); // ui

app.init();

});
