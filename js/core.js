$(function () {
	"use strict";
	var a = {
		site : "http://csgo-stats.com/",
		game_id : 77641,
		team : {
			ct : "Counter-Terrorists",
			t : "Terrorists"
		},
		hotkey : {
			show : null,
			share : null
		},
		hotkey_none : "Unassigned",
		size : {
			width : 800,
			height : 480
		},
		size_ingame : {
			width : 880,
			height : 540
		},
		size_wide : {
			width : 1310,
			height : 540
		}
	},
	b = function () {
		function e() {
			overwolf.windows.onMainWindowRestored.addListener(function () {
				k()
			}),
			overwolf.windows.onStateChanged.addListener(function (a) {
				var b = M() ? "in game" : "on desktop";
				"normal" === a.window_state || "opened" === a.window_state ? ga("send", "event", "main", "App shown " + b) : "minimized" === a.window_state ? ga("send", "event", "main", "App minimized " + b) : "closed" === a.window_state && ga("send", "event", "main", "App closed " + b)
			}),
			overwolf.games.getRunningGameInfo(function (b) {
				M(b && b.isInFocus && b.id == a.game_id ? !0 : !1)
			}),
			overwolf.games.onGameInfoUpdated.addListener(function (b) {
				M(b && b.gameInfo && b.gameInfo.isInFocus && b.gameInfo.id == a.game_id ? !0 : !1)
			}),
			overwolf.windows.getCurrentWindow(function (a) {
				$("#minimize").click(function () {
					overwolf.windows.minimize(a.window.id)
				}),
				$("#close").click(function () {
					overwolf.windows.close(a.window.id)
				})
			}),
			$("[data-section-open]").click(function (a) {
				a.preventDefault(),
				h($(this).data("section-open"))
			}),
			$(window).load(function () {
				setTimeout(function () {
					$("body").removeClass("app-loading").addClass("app-loaded")
				}, 2e3)
			}),
			$("#wrap").on("click", 'a[target="_blank"]', function () {
				ga("send", "event", "main", "Link clicked: " + this.hostname)
			}),
			$("#app-wrap").mousedown(function (a) {
				M() || $(a.target).parents().add(a.target).is("a, button, input, label, :input") || overwolf.windows.getCurrentWindow(function (a) {
					overwolf.windows.dragMove(a.window.id)
				})
			}),
			K.find("[data-sort]").click(function () {
				P.sort($(this).data("sort"))
			}),
			UserVoice.push(["set", {
						accent_color : "#00b5f4",
						screenshot_enabled : !1,
						forum_id : 321354,
						menu_enabled : !0,
						position : "left"
					}
				]),
			UserVoice.push(["addTrigger", "#feedback", {
						mode : "contact"
					}
				]),
			t(),
			h("home"),
			Q.init(),
			O.init(),
			N.init(),
			j(),
			setInterval(j, 3e3),
			q(),
			overwolf.games.getRunningGameInfo(function (b) {
				setTimeout(function () {
					b && b.id == a.game_id && f()
				}, 5e3)
			}),
			overwolf.games.onGameLaunched.addListener(function () {
				overwolf.games.getRunningGameInfo(function (b) {
					setTimeout(function () {
						console.log(b),
						b && b.id == a.game_id && f()
					}, 5100)
				})
			}),
			overwolf.games.events.onInfoUpdates.addListener(g),
			ga("send", "event", "main", "App started")
		}
		function f() {
			overwolfInternal.game.loadPlugin(function (a) {
				console.log("Plugin loaded:", a)
			})
		}
		function g(a) {
			for (var b in a.info)
				"csgo_players" == a.info[b].category && "players_list" == a.info[b].key && m(JSON.parse(a.info[b].value)), "steam" == a.info[b].category && "player_steam_id" == a.info[b].key && Q.on_auth(a.info[b].value)
		}
		function h(a) {
			a !== B && ($('[data-section-open="' + a + '"]').addClass("active"), $('[data-section-open]:not([data-section-open="' + a + '"])').removeClass("active"), $("body").attr("data-section", a), B = a)
		}
		function i(c) {
			overwolf.settings.getHotKey(c + "_csgo_stats", function (e) {
				var f = a.hotkey_none;
				"success" == e.status && e.hotkey && (f = e.hotkey),
				f !== a.hotkey[c] && (a.hotkey[c] = f, $(".hotkey-" + c).text(f), $(".option-hotkey-" + c).html(b.render("options-hotkey-" + c, f)), d.tooltip.refresh())
			})
		}
		function j() {
			for (var b in a.hotkey)
				i(b)
		}
		function k() {
			var b = a.size.width,
			c = a.size.height,
			d = b,
			e = c,
			f = window.screen.width - 40,
			g = window.screen.height - 40;
			overwolf.games.getRunningGameInfo(function (h) {
				if (h && h.isInFocus && h.id == a.game_id) {
					if (f = h.width - 40, g = h.height - 40, b = a.size_ingame.width, c = a.size_ingame.height, d = b, e = c, "players" == B) {
						var i = 0;
						K.find(".team").each(function () {
							i += parseInt($(this).css("padding-top")),
							i += parseInt($(this).css("padding-bottom"))
						}),
						K.find(".players").each(function () {
							i += parseInt($(this).css("padding-bottom"))
						}),
						K.find(".player").each(function () {
							i += $(this).outerHeight()
						}),
						F.count.total >= 24 && a.size_wide.width < f || a.size_wide.width < f && i > g ? (K.addClass("columns"), b = a.size_wide.width, d = b) : (K.removeClass("columns"), c = i)
					}
					b = Math.min(Math.max(b, d), f),
					c = Math.min(Math.max(c, e), g)
				}
				$("#wrap").height(c),
				K.find(".players").scrollTop(0),
				overwolf.windows.getCurrentWindow(function (a) {
					b += 40,
					c += 40,
					f += 40,
					g += 40;
					var d = parseInt(Math.max(f / 2 - b / 2, 0)),
					e = parseInt(Math.max(g / 2 - c / 2, 0));
					(a.window.width !== b || a.window.height !== c) && overwolf.windows.changeSize(a.window.id, b, c),
					(a.window.top !== e || a.window.left !== d) && overwolf.windows.changePosition(a.window.id, d, e)
				})
			})
		}
		function l(a) {
			a ? (h("players"), $("body").attr("data-game", "in")) : (h("home"), $("body").attr("data-game", "out"), N.hide(!0)),
			k()
		}
		function m(b) {
			var c = F.id,
			e = JSON.parse(JSON.stringify(F.data));
			if (F = JSON.parse(JSON.stringify(D)), F.id = c + 1, F.prev = e, !b || !b.players || 0 === b.players.length)
				return G = {},
			p(F.id),
			null !== I && clearInterval(I),
			I = setInterval(function () {
					G = {}

				}, H),
			void console.log("update", F.id, ": 0 players");
			L = !0;
			var f,
			g,
			h,
			i = [];
			for (f in b.players)
				i.push(b.players[f].steamId + ": " + b.players[f].team), 0 === b.players[f].steamId || F.data.hasOwnProperty(b.players[f].steamId) || (g = b.players[f], F.data[g.steamId] = {}, F.data[g.steamId].steamid = g.steamId, F.count.total++, g.team === a.team.ct ? F.data[g.steamId].team = "ct" : g.team === a.team.t && (F.data[g.steamId].team = "t"), F.count.hasOwnProperty(F.data[g.steamId].team) ? F.count[F.data[g.steamId].team]++ : F.count[F.data[g.steamId].team] = 1);
			if (console.log("raw update data", F.id, ": ", i.length, "players", F), ga("send", "event", "main", "Players list update"), F.count.total > 0) {
				F.prev && !$.isEmptyObject(F.prev) ? K.attr("data-status", "updating") : K.attr("data-status", "loading"),
				d.loading.start(K.find(".progress"));
				for (f in F.data)
					G.hasOwnProperty(f) ? (h = F.data[f].team, F.data[f] = G[f], F.data[f].team = h) : (F.loading.push(f), F.count.for_load++, n(f, F.id))
			}
			p(F.id)
		}
		function n(b, c) {
			$.ajax({
				url : a.site + "o/" + b + "/"
			}).always(function (a, d) {
				o(a, d, b, c)
			})
		}
		function o(a, b, c, e) {
			var f,
			g = F.loading.indexOf(c);
			-1 !== g && F.loading.splice(g, 1),
			"success" === b && a && !$.isEmptyObject(a) ? (c = a.profile.steamid, F.data.hasOwnProperty(c) && (f = F.data[c].team, F.data[c] = a, F.data[c].steamid = c, F.data[c].team = f), G.hasOwnProperty(c) || (G[c] = JSON.parse(JSON.stringify(F.data[c]))), $.isEmptyObject(F.prev) || v(F.data[c], "player")) : console.log("fail:", c, "req:", e, "xhr status:", b, F.data[c]),
			F.id === e && F.count.for_load > 0 && d.loading.set(1 - F.loading.length / F.count.for_load),
			p(e)
		}
		function p(a) {
			F.id === a && F.drawn === !1 && 0 === F.loading.length && (console.log("fully loaded req", a, ", run draw_stats()"), q(), setTimeout(function () {
					F.count.total > 0 && u()
				}, 6e4), $.isEmptyObject(F.prev) && !$.isEmptyObject(F.data) && v(F.count, "multiple"))
		}
		function q() {
			var a,
			b = y("user-data"),
			c = {},
			e = {};
			if (F.count.total > 0) {
				K.attr("data-status", "success"),
				d.loading.stop(),
				F.drawn = !0;
				for (a in F.data)
					F.data[a] && !$.isEmptyObject(F.data[a]) && (c = JSON.parse(JSON.stringify(F.data[a])), b && c.profile.steamid === b.profile.steamid && (c.is_user = !0), c.stats && (c.stats = s(c.stats)), e.hasOwnProperty(c.team) || (e[c.team] = ""), e[c.team] += w("player", c));
				for (a in e)
					K.find(".team." + a + " .players").html(e[a]);
				P.init()
			} else
				K.attr("data-status", "empty").find(".team .players").empty();
			F.count.total >= 14 ? K.addClass("large-teams") : K.removeClass("large-teams"),
			k(),
			d.tooltip.refresh()
		}
		function r(a, b) {
			return "time_played" == b ? a = numeral(Math.floor(a)).format("0,0") + "h" : isNaN(a) || (a = numeral(a).format("0,0[.][00]"), "win_perc" == b && (a += "%")),
			a
		}
		function s(a) {
			for (var b in a)
				a[b] = r(a[b], b);
			return a
		}
		function t() {
			var a = $("form[action=options]");
			a.find("input[type=checkbox]").each(function () {
				var a = y(this.name);
				null === a ? x(this.name, this.checked) : this.checked = a
			}),
			a.find("input[type=checkbox]").on("change", function () {
				x(this.name, this.checked)
			}),
			a.on("submit", function () {
				return !1
			})
		}
		function u() {
			var b = y("user-data");
			return b && !$.isEmptyObject(b) && !y("r-sent") && b.profile && b.profile.steamid ? (console.log("sending r"), void $.post(a.site + "o/r/", {
					steamid : b.profile.steamid
				}, function () {
					x("r-sent", !0)
				})) : !1
		}
		function v(a, b) {
			var c = JSON.parse(JSON.stringify(a));
			overwolf.windows.obtainDeclaredWindow("notice", function (a) {
				overwolf.windows.restore(a.window.id)
			}),
			J = !0,
			c.intent = b,
			c.time = Date.now(),
			localStorage.setItem("show-notice", JSON.stringify(c))
		}
		function w(a, b) {
			if (!C.hasOwnProperty(a)) {
				var c = $("#tpl-" + a);
				if (!c.length)
					return;
				C[a] = c.html(),
				Mustache.parse(C[a])
			}
			return Mustache.render(C[a], b || {})
		}
		function x(a, b) {
			localStorage.setItem("opt-" + a, JSON.stringify(b))
		}
		function y(a) {
			return JSON.parse(localStorage.getItem("opt-" + a) || null)
		}
		function z(a) {
			var b = ["https://www.", "https://", "http://www.", "http://", "steamcommunity.com/id/", "steamcommunity.com/profiles/", "/"],
			c = /[^a-z0-9_\-\/,]/gi;
			a = a.toString(),
			a = $.trim(a);
			for (var d in a)
				a = a.split(b[d]).join("");
			return a = a.replace(c, "")
		}
		function A() {
			$("body.app-index").length && e(),
			$("body.app-notice").length && c.init(),
			d.init()
		}
		var B,
		C = {},
		D = {
			id : 0,
			drawn : !1,
			data : {},
			sorted : {},
			prev : {},
			loading : [],
			count : {
				total : 0,
				for_load : 0
			}
		},
		E = null,
		F = JSON.parse(JSON.stringify(D)),
		G = {},
		H = 3e5,
		I = null,
		J = !1,
		K = $("#players"),
		L = !1,
		M = function () {
			var a;
			return function (b) {
				return b !== a && b === !0 ? (a = !0, l(!0)) : b !== a && b === !1 && (a = !1, l(!1)),
				a
			}
		}
		(),
		N = function () {
			function b() {
				d(!0, !0),
				$("#wrap").on("click", ".view-site", function () {
					return c($(this).data("url")),
					!1
				}),
				$(window).click(function () {
					e && d()
				})
			}
			function c(b, c) {
				b = a.site + b + "/",
				b != g.attr("src") && g.attr("src", b),
				e || (c ? (f.show().css({
							opacity : 1
						}), g.css({
							right : 0
						}), e = !0) : setTimeout(function () {
						e || (f.stop().show().animate({
								opacity : 1
							}, 200), g.stop().animate({
								right : 0
							}, 200), e = !0)
					}, 200))
			}
			function d(a, b) {
				(b || e) && (e = !1, a ? (f.css({
							opacity : 0
						}).hide(), g.css({
							right : -100
						})) : (f.stop().animate({
							opacity : 0
						}, 200, function () {
							$(this).hide()
						}), g.stop().animate({
							right : -100
						}, 200)))
			}
			var e,
			f = $("#site-cont"),
			g = $("#site");
			return {
				init : b,
				show : c,
				hide : d
			}
		}
		(),
		O = function () {
			function a() {
				overwolf.settings.registerHotKey("share_csgo_stats", function (a) {
					"success" == a.status && b()
				})
			}
			function b() {
				if (M() && E && !$.isEmptyObject(F.sorted)) {
					if (console.log(e), e)
						return v({
							message : "You can only share stats every 2 minutes"
						}, "generic");
					e = !0,
					clearTimeout(d),
					d = setTimeout(function () {
							e = !1
						}, f);
					var a,
					b,
					h,
					i,
					j,
					k,
					l = "Top players by total " + g[E] + ":",
					m = {},
					n = "Get ingame app at CSGO-STATS.COM";
					for (a in F.sorted) {
						i = 0,
						m[a] = a.toUpperCase() + ": ",
						b = F.sorted[a].slice(0, 3);
						for (h in b)
							b[h].profile && b[h].stats && b[h].stats[E] && (i++, j = r(b[h].stats[E], E), k = b[h].profile.personaname || "", m[a] += i + "." + k + " (" + j + ") ")
					}
					c(l, function () {
						c(m.ct, function () {
							c(m.t, function () {
								c(n),
								v({
									message : "Shared top players by " + g[E] + " in chat"
								}, "generic")
							})
						})
					})
				}
			}
			function c(a, b) {
				var c = 100;
				overwolf.utils.sendKeyStroke("y"),
				setTimeout(function () {
					overwolf.utils.placeOnClipboard(a),
					setTimeout(function () {
						overwolf.utils.sendKeyStroke("Ctrl+v"),
						setTimeout(function () {
							overwolf.utils.sendKeyStroke("Enter"),
							console.log(a),
							setTimeout(function () {
								void 0 !== b && b()
							}, 500)
						}, c)
					}, c)
				}, c)
			}
			var d,
			e = !1,
			f = 12e4,
			g = {
				kdr : "K/D",
				kills : "kills",
				win_perc : "win %",
				time_played : "play time"
			};
			return {
				init : a,
				share : b
			}
		}
		(),
		P = function () {
			function a() {
				E = null;
				for (var a in F.data) {
					if (F.sorted.hasOwnProperty(F.data[a].team) || (F.sorted[F.data[a].team] = []), !F.data[a].profile || $.isEmptyObject(F.data[a].profile))
						return;
					var c = $("#player-" + F.data[a].steamid);
					if (!c.length)
						return;
					var d = F.data[a];
					d.el = c[0],
					d.order = 0,
					d.height = c.outerHeight(!0),
					F.sorted[F.data[a].team].push(d)
				}
				b(y("stats-sort") || "kdr", !0)
			}
			function b(a, b) {
				if (E !== a) {
					E = a,
					y("stats-sort") != E && ga("send", "event", "main", "Players sorted sorted_by " + E),
					x("stats-sort", E),
					K.find("[data-sort=" + E + "]").addClass("active"),
					K.find("[data-sort]:not([data-sort=" + E + "])").removeClass("active");
					for (var d in F.sorted)
						c(d, b);
					K.find(".players").scrollTop(0)
				}
			}
			function c(a, b) {
				F.sorted[a].sort(function (a, b) {
					return !a && !b || !a.stats && !b.stats ? 0 : a && a.stats ? b && b.stats ? (a = parseFloat(a.stats[E]), b = parseFloat(b.stats[E]), b > a ? 1 : a > b ? -1 : 0) : -1 : 1
				}),
				F.sorted[a].forEach(function (a, c) {
					b ? (a.el.style.order = c, a.order = c) : $(a.el).stop().animate({
						top : (c - a.order) * a.height
					}, 400, function () {
						this.style.top = "",
						this.style.order = c,
						a.order = c
					}),
					$(a.el).find(".stat." + E).addClass("active").siblings(".stat").removeClass("active")
				})
			}
			return {
				init : a,
				sort : b
			}
		}
		(),
		Q = function () {
			function b() {
				if (!g) {
					var a = y("user-data");
					(a || !$.isEmptyObject(a)) && ($(".auth-user").html(w("user", a)).attr("data-status", "success"), g = !0)
				}
			}
			function c(b) {
				b = parseInt(b),
				b = b % 2 === 0 ? "0:" + Math.floor(b / 2) : "1:" + Math.floor(b / 2),
				b = "STEAM_0:" + b,
				SteamIDConverter.isSteamID(b) ? (b = SteamIDConverter.toSteamID64(b), console.log("User SteamID:", b), $.ajax({
						url : a.site + "o/" + b + "/"
					}).done(d)) : d()
			}
			function d(a) {
				a && !$.isEmptyObject(a) ? e(a) : f()
			}
			function e(b) {
				var c = y("user-data");
				(!c || $.isEmptyObject(c) || b.profile.steamid != c.profile.steamid) && (b.profile.url = a.site + b.profile.steamid + "/", x("user-data", b), $(".auth-user").html(w("user", b)).attr("data-status", "success"))
			}
			function f() {
				x("user-data", null),
				$(".auth-user .profile").empty()
			}
			var g = !1;
			return {
				init : b,
				on_auth : c
			}
		}
		();
		return {
			init : A,
			main_init : e,
			render : w,
			set_opt : x,
			get_opt : y,
			auth : Q,
			cleanup : z
		}
	}
	(),
	c = function () {
		function c() {
			overwolf.games.getRunningGameInfo(e),
			overwolf.games.onGameInfoUpdated.addListener(function (a) {
				e(a.gameInfo)
			}),
			window.addEventListener("storage", function (a) {
				console.log(a),
				"show-notice" === a.key && d(JSON.parse(a.newValue))
			}),
			g.on("animationEnd webkitAnimationEnd", "li", function (a) {
				"notice-fadeout" == a.originalEvent.animationName ? $(this).remove() : "notice-fadein" != a.originalEvent.animationName || $(this).hasClass("fadeout") || $(this).addClass("fadeout")
			})
		}
		function d(c) {
			if (c && !$.isEmptyObject(c) && !("player" == c.intent && ($(".player-" + c.steamid).length || c.is_private) || h && "player" == c.intent)) {
				var d = i;
				"multiple" == c.intent && (d = j, g.children("li").addClass("fadeout")),
				"player" == c.intent && c.stats && (c.stats.time_played = Math.floor(c.stats.time_played)),
				h = !0,
				console.log("muted"),
				clearTimeout(f),
				f = setTimeout(function () {
						h = !1,
						console.log("unmuted")
					}, d),
				"generic" == c.intent ? (g.prepend(b.render("generic-notice", c.message)), ga("send", "event", "notices", "Notice: " + c.message)) : overwolf.settings.getHotKey("show_csgo_stats", function (d) {
					"success" === d.status && (c.hotkey = d.hotkey),
					a.team.hasOwnProperty(c.team) && (c.team_text = a.team[c.team]),
					ga("send", "event", "notices", "Notice: " + c.intent),
					g.prepend(b.render(c.intent + "-notice", c))
				})
			}
		}
		function e(a) {
			a && a.isInFocus && overwolf.windows.getCurrentWindow(function (b) {
				var c = a.width,
				d = a.height,
				e = b.window.id,
				f = parseInt(.3 * d),
				g = d - f,
				h = 310,
				i = c - h - 15;
				overwolf.windows.changePosition(e, i, f),
				overwolf.windows.changeSize(b.window.id, h, g)
			})
		}
		var f,
		g = $("#notices-list"),
		h = !1,
		i = 1e3,
		j = 20 * i;
		return {
			init : c,
			show : d
		}
	}
	(),
	d = function () {
		function a() {
			$.get("img/res.svg", function (a) {
				$("body").prepend('<div id="svg-container" hidden>' + a + "</div>")
			})
		}
		function b() {
			jQuery.easing.def = "easeInOutQuad",
			a()
		}
		var c = function () {
			function a(a) {
				a = $(a),
				$(a).data("curr-id") && $(a).data("curr-id") === g || (g++, $(a).data("curr-id", g), $(a).data("tip") ? e.find(".tip-content").text($(a).data("tip")) : e.find(".tip-content").html($(a).children("[data-tip-content]").clone().removeAttr("data-tip-content")), e.css({
						top : 0,
						left : 0
					}));
				var b = $(window).scrollTop(),
				c = $(window).scrollLeft(),
				d = $(window).width(),
				h = $(window).height(),
				i = $(a).offset().top,
				j = $(a).offset().left,
				k = $(a).outerWidth(),
				l = $(a).outerHeight(),
				m = e.outerWidth(!0),
				n = e.outerHeight(!0),
				o = {
					bottom : i + l,
					top : i - n
				},
				p = {
					left : j,
					center : j + k / 2 - m / 2,
					right : j + k - m
				},
				q = {
					vert : $(a).data("vert") || "bottom",
					hor : $(a).data("hor") || "center"
				},
				r = o[q.vert],
				s = p[q.hor],
				t = q.vert,
				u = q.hor;
				"bottom" == t ? t = "top" : "top" == t && (t = "bottom"),
				"bottom" == q.vert && o.bottom + n > b + h ? (r = o.top, q.vert = "top", t = "bottom") : "top" == q.vert && o.top < b && (r = o.bottom, q.vert = "bottom", t = "top"),
				s + m > c + d ? (s = c + d - m, u = "center") : c > s && (s = 0, u = "center"),
				r = Math.floor(r),
				s = Math.floor(s),
				e.removeClass("top bottom").addClass(q.vert).css({
					top : r,
					left : s
				}).addClass("visible"),
				f.removeClass().addClass(t).addClass(u)
			}
			function b() {
				e.removeClass("visible")
			}
			function c() {
				e.removeClass("visible"),
				$(d).length && $(d).each(function () {
					$(this).data("tip-bound") || $(this).hover(function () {
						a(this)
					}, b).data("tip-bound", !0)
				})
			}
			$("#tip-container").length || $("body").append('<div id="tip-container"><i id="tip-arrow"></i><div class="tip-content"></div></div>');
			var d = "[data-tip]",
			e = $("#tip-container"),
			f = $("#tip-arrow"),
			g = 0;
			return $(window).on("scroll resize", function () {
				b()
			}), {
				refresh : c,
				show : a,
				hide : b
			}
		}
		(),
		d = function () {
			function a(a) {
				a && (g = a, h = g.find(".bar"), i = g.find(".percent")),
				l = !0,
				m = 0,
				h.stop().css("width", ""),
				g.addClass("running").removeClass("finished"),
				j = setInterval(function () {
						l && e()
					}, k.trick_interval),
				e()
			}
			function b() {
				l = !1,
				clearInterval(j),
				1 !== m && (m = 1),
				f(!0)
			}
			function c(a) {
				m = Math.min(Math.max(a, 0), 1),
				1 === m ? b() : f()
			}
			function d(a) {
				a = a || k.inc,
				c(Math.min(m + a, 1 - k.trick_val))
			}
			function e() {
				d(k.trick_val * (.5 + .5 * Math.random()))
			}
			function f(a) {
				i.text(Math.round(100 * m) + "%"),
				h.stop().animate({
					width : Math.round(1e3 * m) / 10 + "%"
				}, 350, function () {
					a && g.addClass("finished").removeClass("running")
				})
			}
			var g,
			h,
			i,
			j,
			k = {
				trick_interval : 800,
				trick_val : .025,
				inc : .1
			},
			l = !1,
			m = 0;
			return {
				start : a,
				stop : b,
				set : c,
				inc : d
			}
		}
		();
		return {
			tooltip : c,
			loading : d,
			init : b
		}
	}
	();
	b.init()
});