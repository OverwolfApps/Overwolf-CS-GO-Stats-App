!function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document)
			throw new Error("jQuery requires a window with a document");
		return b(a)
	}
	 : b(a)
}
("undefined" != typeof window ? window : this, function (a, b) {
	function c(a) {
		var b = "length" in a && a.length,
		c = _.type(a);
		return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	function d(a, b, c) {
		if (_.isFunction(b))
			return _.grep(a, function (a, d) {
				return !!b.call(a, d, a) !== c
			});
		if (b.nodeType)
			return _.grep(a, function (a) {
				return a === b !== c
			});
		if ("string" == typeof b) {
			if (ha.test(b))
				return _.filter(b, a, c);
			b = _.filter(b, a)
		}
		return _.grep(a, function (a) {
			return U.call(b, a) >= 0 !== c
		})
	}
	function e(a, b) {
		for (; (a = a[b]) && 1 !== a.nodeType; );
		return a
	}
	function f(a) {
		var b = oa[a] = {};
		return _.each(a.match(na) || [], function (a, c) {
			b[c] = !0
		}),
		b
	}
	function g() {
		Z.removeEventListener("DOMContentLoaded", g, !1),
		a.removeEventListener("load", g, !1),
		_.ready()
	}
	function h() {
		Object.defineProperty(this.cache = {}, 0, {
			get : function () {
				return {}

			}
		}),
		this.expando = _.expando + h.uid++
	}
	function i(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
				} catch (e) {}

				sa.set(a, b, c)
			} else
				c = void 0;
		return c
	}
	function j() {
		return !0
	}
	function k() {
		return !1
	}
	function l() {
		try {
			return Z.activeElement
		} catch (a) {}

	}
	function m(a, b) {
		return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function n(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
		a
	}
	function o(a) {
		var b = Ka.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"),
		a
	}
	function p(a, b) {
		for (var c = 0, d = a.length; d > c; c++)
			ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
	}
	function q(a, b) {
		var c,
		d,
		e,
		f,
		g,
		h,
		i,
		j;
		if (1 === b.nodeType) {
			if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
				delete g.handle,
				g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++)
						_.event.add(b, e, j[e][c])
			}
			sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
		}
	}
	function r(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
	}
	function s(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}
	function t(b, c) {
		var d,
		e = _(c.createElement(b)).appendTo(c.body),
		f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
		return e.detach(),
		f
	}
	function u(a) {
		var b = Z,
		c = Oa[a];
		return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c),
		c
	}
	function v(a, b, c) {
		var d,
		e,
		f,
		g,
		h = a.style;
		return c = c || Ra(a),
		c && (g = c.getPropertyValue(b) || c[b]),
		c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
		void 0 !== g ? g + "" : g
	}
	function w(a, b) {
		return {
			get : function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	function x(a, b) {
		if (b in a)
			return b;
		for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
			if (b = Xa[e] + c, b in a)
				return b;
		return d
	}
	function y(a, b, c) {
		var d = Ta.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function z(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
			"margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
		return g
	}
	function A(a, b, c) {
		var d = !0,
		e = "width" === b ? a.offsetWidth : a.offsetHeight,
		f = Ra(a),
		g = "border-box" === _.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e))
				return e;
			d = g && (Y.boxSizingReliable() || e === a.style[b]),
			e = parseFloat(e) || 0
		}
		return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	function B(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
			d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
		for (g = 0; h > g; g++)
			d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	function C(a, b, c, d, e) {
		return new C.prototype.init(a, b, c, d, e)
	}
	function D() {
		return setTimeout(function () {
			Ya = void 0
		}),
		Ya = _.now()
	}
	function E(a, b) {
		var c,
		d = 0,
		e = {
			height : a
		};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b)
			c = wa[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a),
		e
	}
	function F(a, b, c) {
		for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a))
				return d
	}
	function G(a, b, c) {
		var d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l = this,
		m = {},
		n = a.style,
		o = a.nodeType && xa(a),
		p = ra.get(a, "fxshow");
		c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
				h.unqueued || i()
			}), h.unqueued++, l.always(function () {
				l.always(function () {
					h.unqueued--,
					_.queue(a, "fx").length || h.empty.fire()
				})
			})),
		1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")),
		c.overflow && (n.overflow = "hidden", l.always(function () {
				n.overflow = c.overflow[0],
				n.overflowX = c.overflow[1],
				n.overflowY = c.overflow[2]
			}));
		for (d in b)
			if (e = b[d], $a.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
					if ("show" !== e || !p || void 0 === p[d])
						continue;
					o = !0
				}
				m[d] = p && p[d] || _.style(a, d)
			} else
				j = void 0;
		if (_.isEmptyObject(m))
			"inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
		else {
			p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}),
			f && (p.hidden = !o),
			o ? _(a).show() : l.done(function () {
				_(a).hide()
			}),
			l.done(function () {
				var b;
				ra.remove(a, "fxshow");
				for (b in m)
					_.style(a, b, m[b])
			});
			for (d in m)
				g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}
	function H(a, b) {
		var c,
		d,
		e,
		f,
		g;
		for (c in a)
			if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
				f = g.expand(f),
				delete a[d];
				for (c in f)
					c in a || (a[c] = f[c], b[c] = e)
			} else
				b[d] = e
	}
	function I(a, b, c) {
		var d,
		e,
		f = 0,
		g = bb.length,
		h = _.Deferred().always(function () {
				delete i.elem
			}),
		i = function () {
			if (e)
				return !1;
			for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
				j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]),
			1 > f && i ? c : (h.resolveWith(a, [j]), !1)
		},
		j = h.promise({
				elem : a,
				props : _.extend({}, b),
				opts : _.extend(!0, {
					specialEasing : {}

				}, c),
				originalProperties : b,
				originalOptions : c,
				startTime : Ya || D(),
				duration : c.duration,
				tweens : [],
				createTween : function (b, c) {
					var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d),
					d
				},
				stop : function (b) {
					var c = 0,
					d = b ? j.tweens.length : 0;
					if (e)
						return this;
					for (e = !0; d > c; c++)
						j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
					this
				}
			}),
		k = j.props;
		for (H(k, j.opts.specialEasing); g > f; f++)
			if (d = bb[f].call(j, a, k, j.opts))
				return d;
		return _.map(k, F, j),
		_.isFunction(j.opts.start) && j.opts.start.call(a, j),
		_.fx.timer(_.extend(i, {
				elem : a,
				anim : j,
				queue : j.opts.queue
			})),
		j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	function J(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d,
			e = 0,
			f = b.toLowerCase().match(na) || [];
			if (_.isFunction(c))
				for (; d = f[e++]; )
					"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function K(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0,
			_.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}),
			i
		}
		var f = {},
		g = a === tb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}
	function L(a, b) {
		var c,
		d,
		e = _.ajaxSettings.flatOptions || {};
		for (c in b)
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && _.extend(!0, a, d),
		a
	}
	function M(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if (i[0]in c)
			f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}
	function N(a, b, c, d) {
		var e,
		f,
		g,
		h,
		i,
		j = {},
		k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters)
				j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f; )
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f)
					f = i;
				else if ("*" !== i && i !== f) {
					if (g = j[i + " " + f] || j["* " + f], !g)
						for (e in j)
							if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
								g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
								break
							}
					if (g !== !0)
						if (g && a["throws"])
							b = g(b);
						else
							try {
								b = g(b)
							} catch (l) {
								return {
									state : "parsererror",
									error : g ? l : "No conversion from " + i + " to " + f
								}
							}
				}
		return {
			state : "success",
			data : b
		}
	}
	function O(a, b, c, d) {
		var e;
		if (_.isArray(b))
			_.each(b, function (b, e) {
				c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
			});
		else if (c || "object" !== _.type(b))
			d(a, b);
		else
			for (e in b)
				O(a + "[" + e + "]", b[e], c, d)
	}
	function P(a) {
		return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var Q = [],
	R = Q.slice,
	S = Q.concat,
	T = Q.push,
	U = Q.indexOf,
	V = {},
	W = V.toString,
	X = V.hasOwnProperty,
	Y = {},
	Z = a.document,
	$ = "2.1.4",
	_ = function (a, b) {
		return new _.fn.init(a, b)
	},
	aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	ba = /^-ms-/,
	ca = /-([\da-z])/gi,
	da = function (a, b) {
		return b.toUpperCase()
	};
	_.fn = _.prototype = {
		jquery : $,
		constructor : _,
		selector : "",
		length : 0,
		toArray : function () {
			return R.call(this)
		},
		get : function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
		},
		pushStack : function (a) {
			var b = _.merge(this.constructor(), a);
			return b.prevObject = this,
			b.context = this.context,
			b
		},
		each : function (a, b) {
			return _.each(this, a, b)
		},
		map : function (a) {
			return this.pushStack(_.map(this, function (b, c) {
					return a.call(b, c, b)
				}))
		},
		slice : function () {
			return this.pushStack(R.apply(this, arguments))
		},
		first : function () {
			return this.eq(0)
		},
		last : function () {
			return this.eq(-1)
		},
		eq : function (a) {
			var b = this.length,
			c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end : function () {
			return this.prevObject || this.constructor(null)
		},
		push : T,
		sort : Q.sort,
		splice : Q.splice
	},
	_.extend = _.fn.extend = function () {
		var a,
		b,
		c,
		d,
		e,
		f,
		g = arguments[0] || {},
		h = 1,
		i = arguments.length,
		j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a)
					c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	},
	_.extend({
		expando : "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
		isReady : !0,
		error : function (a) {
			throw new Error(a)
		},
		noop : function () {},
		isFunction : function (a) {
			return "function" === _.type(a)
		},
		isArray : Array.isArray,
		isWindow : function (a) {
			return null != a && a === a.window
		},
		isNumeric : function (a) {
			return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject : function (a) {
			return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject : function (a) {
			var b;
			for (b in a)
				return !1;
			return !0
		},
		type : function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
		},
		globalEval : function (a) {
			var b,
			c = eval;
			a = _.trim(a),
			a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase : function (a) {
			return a.replace(ba, "ms-").replace(ca, da)
		},
		nodeName : function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each : function (a, b, d) {
			var e,
			f = 0,
			g = a.length,
			h = c(a);
			if (d) {
				if (h)
					for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else
					for (f in a)
						if (e = b.apply(a[f], d), e === !1)
							break
			} else if (h)
				for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else
				for (f in a)
					if (e = b.call(a[f], f, a[f]), e === !1)
						break;
			return a
		},
		trim : function (a) {
			return null == a ? "" : (a + "").replace(aa, "")
		},
		makeArray : function (a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
			d
		},
		inArray : function (a, b, c) {
			return null == b ? -1 : U.call(b, a, c)
		},
		merge : function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++)
				a[e++] = b[d];
			return a.length = e,
			a
		},
		grep : function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
				d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map : function (a, b, d) {
			var e,
			f = 0,
			g = a.length,
			h = c(a),
			i = [];
			if (h)
				for (; g > f; f++)
					e = b(a[f], f, d), null != e && i.push(e);
			else
				for (f in a)
					e = b(a[f], f, d), null != e && i.push(e);
			return S.apply([], i)
		},
		guid : 1,
		proxy : function (a, b) {
			var c,
			d,
			e;
			return "string" == typeof b && (c = a[b], b = a, a = c),
			_.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
				return a.apply(b || this, d.concat(R.call(arguments)))
			}, e.guid = a.guid = a.guid || _.guid++, e) : void 0
		},
		now : Date.now,
		support : Y
	}),
	_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		V["[object " + b + "]"] = b.toLowerCase()
	});
	var ea = function (a) {
		function b(a, b, c, d) {
			var e,
			f,
			g,
			h,
			i,
			j,
			l,
			n,
			o,
			p;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
				return c;
			if (!d && I) {
				if (11 !== h && (e = sa.exec(a)))
					if (g = e[1]) {
						if (9 === h) {
							if (f = b.getElementById(g), !f || !f.parentNode)
								return c;
							if (f.id === g)
								return c.push(f), c
						} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
							return c.push(f), c
					} else {
						if (e[2])
							return $.apply(c, b.getElementsByTagName(a)), c;
						if ((g = e[3]) && v.getElementsByClassName)
							return $.apply(c, b.getElementsByClassName(g)), c
					}
				if (v.qsa && (!J || !J.test(a))) {
					if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
							j[i] = n + m(j[i]);
						o = ta.test(a) && k(b.parentNode) || b,
						p = j.join(",")
					}
					if (p)
						try {
							return $.apply(c, o.querySelectorAll(p)),
							c
						} catch (q) {}

					finally {
						l || b.removeAttribute("id")
					}
				}
			}
			return B(a.replace(ia, "$1"), b, c, d)
		}
		function c() {
			function a(c, d) {
				return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
				a[c + " "] = d
			}
			var b = [];
			return a
		}
		function d(a) {
			return a[N] = !0,
			a
		}
		function e(a) {
			var b = G.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			}
			finally {
				b.parentNode && b.parentNode.removeChild(b),
				b = null
			}
		}
		function f(a, b) {
			for (var c = a.split("|"), d = a.length; d--; )
				w.attrHandle[c[d]] = b
		}
		function g(a, b) {
			var c = b && a,
			d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
			if (d)
				return d;
			if (c)
				for (; c = c.nextSibling; )
					if (c === b)
						return -1;
			return a ? 1 : -1
		}
		function h(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}
		function i(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}
		function j(a) {
			return d(function (b) {
				return b = +b,
				d(function (c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--; )
						c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}
		function k(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		function l() {}

		function m(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++)
				d += a[b].value;
			return d
		}
		function n(a, b, c) {
			var d = b.dir,
			e = c && "parentNode" === d,
			f = Q++;
			return b.first ? function (b, c, f) {
				for (; b = b[d]; )
					if (1 === b.nodeType || e)
						return a(b, c, f)
			}
			 : function (b, c, g) {
				var h,
				i,
				j = [P, f];
				if (g) {
					for (; b = b[d]; )
						if ((1 === b.nodeType || e) && a(b, c, g))
							return !0
				} else
					for (; b = b[d]; )
						if (1 === b.nodeType || e) {
							if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
								return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g))
								return !0
						}
			}
		}
		function o(a) {
			return a.length > 1 ? function (b, c, d) {
				for (var e = a.length; e--; )
					if (!a[e](b, c, d))
						return !1;
				return !0
			}
			 : a[0]
		}
		function p(a, c, d) {
			for (var e = 0, f = c.length; f > e; e++)
				b(a, c[e], d);
			return d
		}
		function q(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
				(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}
		function r(a, b, c, e, f, g) {
			return e && !e[N] && (e = r(e)),
			f && !f[N] && (f = r(f, g)),
			d(function (d, g, h, i) {
				var j,
				k,
				l,
				m = [],
				n = [],
				o = g.length,
				r = d || p(b || "*", h.nodeType ? [h] : h, []),
				s = !a || !d && b ? r : q(r, m, a, h, i),
				t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e)
					for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
						(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = t.length; k--; )
								(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--; )
							(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else
					t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
			})
		}
		function s(a) {
			for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
						return a === b
					}, g, !0), j = n(function (a) {
						return aa(b, a) > -1
					}, g, !0), k = [function (a, c, d) {
						var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
						return b = null,
						e
					}
				]; e > h; h++)
				if (c = w.relative[a[h].type])
					k = [n(o(k), c)];
				else {
					if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
						for (d = ++h; e > d && !w.relative[a[d].type]; d++);
						return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
									value : " " === a[h - 2].type ? "*" : ""
								})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
					}
					k.push(c)
				}
			return o(k)
		}
		function t(a, c) {
			var e = c.length > 0,
			f = a.length > 0,
			g = function (d, g, h, i, j) {
				var k,
				l,
				m,
				n = 0,
				o = "0",
				p = d && [],
				r = [],
				s = C,
				t = d || f && w.find.TAG("*", j),
				u = P += null == s ? 1 : Math.random() || .1,
				v = t.length;
				for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
					if (f && k) {
						for (l = 0; m = a[l++]; )
							if (m(k, g, h)) {
								i.push(k);
								break
							}
						j && (P = u)
					}
					e && ((k = !m && k) && n--, d && p.push(k))
				}
				if (n += o, e && o !== n) {
					for (l = 0; m = c[l++]; )
						m(p, r, g, h);
					if (d) {
						if (n > 0)
							for (; o--; )
								p[o] || r[o] || (r[o] = Y.call(i));
						r = q(r)
					}
					$.apply(i, r),
					j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
				}
				return j && (P = u, C = s),
				p
			};
			return e ? d(g) : g
		}
		var u,
		v,
		w,
		x,
		y,
		z,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N = "sizzle" + 1 * new Date,
		O = a.document,
		P = 0,
		Q = 0,
		R = c(),
		S = c(),
		T = c(),
		U = function (a, b) {
			return a === b && (E = !0),
			0
		},
		V = 1 << 31,
		W = {}

		.hasOwnProperty,
		X = [],
		Y = X.pop,
		Z = X.push,
		$ = X.push,
		_ = X.slice,
		aa = function (a, b) {
			for (var c = 0, d = a.length; d > c; c++)
				if (a[c] === b)
					return c;
			return -1
		},
		ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		ca = "[\\x20\\t\\r\\n\\f]",
		da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		ea = da.replace("w", "w#"),
		fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
		ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
		ha = new RegExp(ca + "+", "g"),
		ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
		ja = new RegExp("^" + ca + "*," + ca + "*"),
		ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
		la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
		ma = new RegExp(ga),
		na = new RegExp("^" + ea + "$"),
		oa = {
			ID : new RegExp("^#(" + da + ")"),
			CLASS : new RegExp("^\\.(" + da + ")"),
			TAG : new RegExp("^(" + da.replace("w", "w*") + ")"),
			ATTR : new RegExp("^" + fa),
			PSEUDO : new RegExp("^" + ga),
			CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
			bool : new RegExp("^(?:" + ba + ")$", "i"),
			needsContext : new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
		},
		pa = /^(?:input|select|textarea|button)$/i,
		qa = /^h\d$/i,
		ra = /^[^{]+\{\s*\[native \w/,
		sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		ta = /[+~]/,
		ua = /'|\\/g,
		va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
		wa = function (a, b, c) {
			var d = "0x" + b - 65536;
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
		},
		xa = function () {
			F()
		};
		try {
			$.apply(X = _.call(O.childNodes), O.childNodes),
			X[O.childNodes.length].nodeType
		} catch (ya) {
			$ = {
				apply : X.length ? function (a, b) {
					Z.apply(a, _.call(b))
				}
				 : function (a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++]; );
					a.length = c - 1
				}
			}
		}
		v = b.support = {},
		y = b.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		},
		F = b.setDocument = function (a) {
			var b,
			c,
			d = a ? a.ownerDocument || a : O;
			return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
						return a.className = "i",
						!a.getAttribute("className")
					}), v.getElementsByTagName = e(function (a) {
						return a.appendChild(d.createComment("")),
						!a.getElementsByTagName("*").length
					}), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
						return H.appendChild(a).id = N,
						!d.getElementsByName || !d.getElementsByName(N).length
					}), v.getById ? (w.find.ID = function (a, b) {
					if ("undefined" != typeof b.getElementById && I) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, w.filter.ID = function (a) {
					var b = a.replace(va, wa);
					return function (a) {
						return a.getAttribute("id") === b
					}
				}) : (delete w.find.ID, w.filter.ID = function (a) {
					var b = a.replace(va, wa);
					return function (a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), w.find.TAG = v.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
			}
				 : function (a, b) {
				var c,
				d = [],
				e = 0,
				f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++]; )
						1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, w.find.CLASS = v.getElementsByClassName && function (a, b) {
				return I ? b.getElementsByClassName(a) : void 0
			}, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
						H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
						a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
						a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
						a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
						a.querySelectorAll(":checked").length || J.push(":checked"),
						a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
					}), e(function (a) {
						var b = d.createElement("input");
						b.setAttribute("type", "hidden"),
						a.appendChild(b).setAttribute("name", "D"),
						a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
						a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
						a.querySelectorAll("*,:x"),
						J.push(",.*:")
					})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
					v.disconnectedMatch = L.call(a, "div"),
					L.call(a, "[s!='']:x"),
					K.push("!=", ga)
				}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			}
				 : function (a, b) {
				if (b)
					for (; b = b.parentNode; )
						if (b === a)
							return !0;
				return !1
			}, U = b ? function (a, b) {
				if (a === b)
					return E = !0, 0;
				var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
			}
				 : function (a, b) {
				if (a === b)
					return E = !0, 0;
				var c,
				e = 0,
				f = a.parentNode,
				h = b.parentNode,
				i = [a],
				j = [b];
				if (!f || !h)
					return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
				if (f === h)
					return g(a, b);
				for (c = a; c = c.parentNode; )
					i.unshift(c);
				for (c = b; c = c.parentNode; )
					j.unshift(c);
				for (; i[e] === j[e]; )
					e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, d) : G
		},
		b.matches = function (a, c) {
			return b(a, null, null, c)
		},
		b.matchesSelector = function (a, c) {
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
				try {
					var d = L.call(a, c);
					if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
						return d
				} catch (e) {}

			return b(c, G, null, [a]).length > 0
		},
		b.contains = function (a, b) {
			return (a.ownerDocument || a) !== G && F(a),
			M(a, b)
		},
		b.attr = function (a, b) {
			(a.ownerDocument || a) !== G && F(a);
			var c = w.attrHandle[b.toLowerCase()],
			d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		},
		b.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		},
		b.uniqueSort = function (a) {
			var b,
			c = [],
			d = 0,
			e = 0;
			if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
				for (; b = a[e++]; )
					b === a[e] && (d = c.push(e));
				for (; d--; )
					a.splice(c[d], 1)
			}
			return D = null,
			a
		},
		x = b.getText = function (a) {
			var b,
			c = "",
			d = 0,
			e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent)
						return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling)
						c += x(a)
				} else if (3 === e || 4 === e)
					return a.nodeValue
			} else
				for (; b = a[d++]; )
					c += x(b);
			return c
		},
		w = b.selectors = {
			cacheLength : 50,
			createPseudo : d,
			match : oa,
			attrHandle : {},
			find : {},
			relative : {
				">" : {
					dir : "parentNode",
					first : !0
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : !0
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				ATTR : function (a) {
					return a[1] = a[1].replace(va, wa),
					a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
					"~=" === a[2] && (a[3] = " " + a[3] + " "),
					a.slice(0, 4)
				},
				CHILD : function (a) {
					return a[1] = a[1].toLowerCase(),
					"nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] =  + (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =  + (a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
					a
				},
				PSEUDO : function (a) {
					var b,
					c = !a[6] && a[2];
					return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter : {
				TAG : function (a) {
					var b = a.replace(va, wa).toLowerCase();
					return "*" === a ? function () {
						return !0
					}
					 : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS : function (a) {
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR : function (a, c, d) {
					return function (e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD : function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					g = "last" !== a.slice(-4),
					h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					}
					 : function (b, c, i) {
						var j,
						k,
						l,
						m,
						n,
						o,
						p = f !== g ? "nextSibling" : "previousSibling",
						q = b.parentNode,
						r = h && b.nodeName.toLowerCase(),
						s = !i && !h;
						if (q) {
							if (f) {
								for (; p; ) {
									for (l = b; l = l[p]; )
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
											return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [P, n, m];
										break
									}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
								m = j[1];
							else
								for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); );
							return m -= e,
							m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO : function (a, c) {
					var e,
					f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
							for (var d, e = f(a, c), g = e.length; g--; )
								d = aa(a, e[g]), a[d] = !(b[d] = e[g])
						}) : function (a) {
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos : {
				not : d(function (a) {
					var b = [],
					c = [],
					e = A(a.replace(ia, "$1"));
					return e[N] ? d(function (a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--; )
							(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, d, f) {
						return b[0] = a,
						e(b, null, f, c),
						b[0] = null,
						!c.pop()
					}
				}),
				has : d(function (a) {
					return function (c) {
						return b(a, c).length > 0
					}
				}),
				contains : d(function (a) {
					return a = a.replace(va, wa),
					function (b) {
						return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
					}
				}),
				lang : d(function (a) {
					return na.test(a || "") || b.error("unsupported lang: " + a),
					a = a.replace(va, wa).toLowerCase(),
					function (b) {
						var c;
						do
							if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
								return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						while ((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}),
				target : function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root : function (a) {
					return a === H
				},
				focus : function (a) {
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled : function (a) {
					return a.disabled === !1
				},
				disabled : function (a) {
					return a.disabled === !0
				},
				checked : function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected : function (a) {
					return a.parentNode && a.parentNode.selectedIndex,
					a.selected === !0
				},
				empty : function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6)
							return !1;
					return !0
				},
				parent : function (a) {
					return !w.pseudos.empty(a)
				},
				header : function (a) {
					return qa.test(a.nodeName)
				},
				input : function (a) {
					return pa.test(a.nodeName)
				},
				button : function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text : function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first : j(function () {
					return [0]
				}),
				last : j(function (a, b) {
					return [b - 1]
				}),
				eq : j(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even : j(function (a, b) {
					for (var c = 0; b > c; c += 2)
						a.push(c);
					return a
				}),
				odd : j(function (a, b) {
					for (var c = 1; b > c; c += 2)
						a.push(c);
					return a
				}),
				lt : j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0; )
						a.push(d);
					return a
				}),
				gt : j(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b; )
						a.push(d);
					return a
				})
			}
		},
		w.pseudos.nth = w.pseudos.eq;
		for (u in {
			radio : !0,
			checkbox : !0,
			file : !0,
			password : !0,
			image : !0
		})
			w.pseudos[u] = h(u);
		for (u in {
			submit : !0,
			reset : !0
		})
			w.pseudos[u] = i(u);
		return l.prototype = w.filters = w.pseudos,
		w.setFilters = new l,
		z = b.tokenize = function (a, c) {
			var d,
			e,
			f,
			g,
			h,
			i,
			j,
			k = S[a + " "];
			if (k)
				return c ? 0 : k.slice(0);
			for (h = a, i = [], j = w.preFilter; h; ) {
				(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
				d = !1,
				(e = ka.exec(h)) && (d = e.shift(), f.push({
						value : d,
						type : e[0].replace(ia, " ")
					}), h = h.slice(d.length));
				for (g in w.filter)
					!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
							value : d,
							type : g,
							matches : e
						}), h = h.slice(d.length));
				if (!d)
					break
			}
			return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
		},
		A = b.compile = function (a, b) {
			var c,
			d = [],
			e = [],
			f = T[a + " "];
			if (!f) {
				for (b || (b = z(a)), c = b.length; c--; )
					f = s(b[c]), f[N] ? d.push(f) : e.push(f);
				f = T(a, t(e, d)),
				f.selector = a
			}
			return f
		},
		B = b.select = function (a, b, c, d) {
			var e,
			f,
			g,
			h,
			i,
			j = "function" == typeof a && a,
			l = !d && z(a = j.selector || a);
			if (c = c || [], 1 === l.length) {
				if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
					if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)
						return c;
					j && (b = b.parentNode),
					a = a.slice(f.shift().value.length)
				}
				for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
					if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
						if (f.splice(e, 1), a = d.length && m(f), !a)
							return $.apply(c, d), c;
						break
					}
			}
			return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
			c
		},
		v.sortStable = N.split("").sort(U).join("") === N,
		v.detectDuplicates = !!E,
		F(),
		v.sortDetached = e(function (a) {
				return 1 & a.compareDocumentPosition(G.createElement("div"))
			}),
		e(function (a) {
			return a.innerHTML = "<a href='#'></a>",
			"#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}),
		v.attributes && e(function (a) {
			return a.innerHTML = "<input/>",
			a.firstChild.setAttribute("value", ""),
			"" === a.firstChild.getAttribute("value")
		}) || f("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}),
		e(function (a) {
			return null == a.getAttribute("disabled")
		}) || f(ba, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}),
		b
	}
	(a);
	_.find = ea,
	_.expr = ea.selectors,
	_.expr[":"] = _.expr.pseudos,
	_.unique = ea.uniqueSort,
	_.text = ea.getText,
	_.isXMLDoc = ea.isXML,
	_.contains = ea.contains;
	var fa = _.expr.match.needsContext,
	ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	ha = /^.[^:#\[\.,]*$/;
	_.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"),
		1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
				return 1 === a.nodeType
			}))
	},
	_.fn.extend({
		find : function (a) {
			var b,
			c = this.length,
			d = [],
			e = this;

			if ("string" != typeof a)
				return this.pushStack(_(a).filter(function () {
						for (b = 0; c > b; b++)
							if (_.contains(e[b], this))
								return !0
					}));
			for (b = 0; c > b; b++)
				_.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? _.unique(d) : d),
			d.selector = this.selector ? this.selector + " " + a : a,
			d
		},
		filter : function (a) {
			return this.pushStack(d(this, a || [], !1))
		},
		not : function (a) {
			return this.pushStack(d(this, a || [], !0))
		},
		is : function (a) {
			return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
		}
	});
	var ia,
	ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	ka = _.fn.init = function (a, b) {
		var c,
		d;
		if (!a)
			return this;
		if ("string" == typeof a) {
			if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b)
				return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
					for (c in b)
						_.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			return d = Z.getElementById(c[2]),
			d && d.parentNode && (this.length = 1, this[0] = d),
			this.context = Z,
			this.selector = a,
			this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
	};
	ka.prototype = _.fn,
	ia = _(Z);
	var la = /^(?:parents|prev(?:Until|All))/,
	ma = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	_.extend({
		dir : function (a, b, c) {
			for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
				if (1 === a.nodeType) {
					if (e && _(a).is(c))
						break;
					d.push(a)
				}
			return d
		},
		sibling : function (a, b) {
			for (var c = []; a; a = a.nextSibling)
				1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}),
	_.fn.extend({
		has : function (a) {
			var b = _(a, this),
			c = b.length;
			return this.filter(function () {
				for (var a = 0; c > a; a++)
					if (_.contains(this, b[a]))
						return !0
			})
		},
		closest : function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? _.unique(f) : f)
		},
		index : function (a) {
			return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add : function (a, b) {
			return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
		},
		addBack : function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}),
	_.each({
		parent : function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents : function (a) {
			return _.dir(a, "parentNode")
		},
		parentsUntil : function (a, b, c) {
			return _.dir(a, "parentNode", c)
		},
		next : function (a) {
			return e(a, "nextSibling")
		},
		prev : function (a) {
			return e(a, "previousSibling")
		},
		nextAll : function (a) {
			return _.dir(a, "nextSibling")
		},
		prevAll : function (a) {
			return _.dir(a, "previousSibling")
		},
		nextUntil : function (a, b, c) {
			return _.dir(a, "nextSibling", c)
		},
		prevUntil : function (a, b, c) {
			return _.dir(a, "previousSibling", c)
		},
		siblings : function (a) {
			return _.sibling((a.parentNode || {}).firstChild, a)
		},
		children : function (a) {
			return _.sibling(a.firstChild)
		},
		contents : function (a) {
			return a.contentDocument || _.merge([], a.childNodes)
		}
	}, function (a, b) {
		_.fn[a] = function (c, d) {
			var e = _.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c),
			d && "string" == typeof d && (e = _.filter(d, e)),
			this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()),
			this.pushStack(e)
		}
	});
	var na = /\S+/g,
	oa = {};
	_.Callbacks = function (a) {
		a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
		var b,
		c,
		d,
		e,
		g,
		h,
		i = [],
		j = !a.once && [],
		k = function (f) {
			for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
				if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
					b = !1;
					break
				}
			d = !1,
			i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
		},
		l = {
			add : function () {
				if (i) {
					var c = i.length;
					!function f(b) {
						_.each(b, function (b, c) {
							var d = _.type(c);
							"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
						})
					}
					(arguments),
					d ? g = i.length : b && (e = c, k(b))
				}
				return this
			},
			remove : function () {
				return i && _.each(arguments, function (a, b) {
					for (var c; (c = _.inArray(b, i, c)) > -1; )
						i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
				}),
				this
			},
			has : function (a) {
				return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
			},
			empty : function () {
				return i = [],
				g = 0,
				this
			},
			disable : function () {
				return i = j = b = void 0,
				this
			},
			disabled : function () {
				return !i
			},
			lock : function () {
				return j = void 0,
				b || l.disable(),
				this
			},
			locked : function () {
				return !j
			},
			fireWith : function (a, b) {
				return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)),
				this
			},
			fire : function () {
				return l.fireWith(this, arguments),
				this
			},
			fired : function () {
				return !!c
			}
		};
		return l
	},
	_.extend({
		Deferred : function (a) {
			var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
			c = "pending",
			d = {
				state : function () {
					return c
				},
				always : function () {
					return e.done(arguments).fail(arguments),
					this
				},
				then : function () {
					var a = arguments;
					return _.Deferred(function (c) {
						_.each(b, function (b, f) {
							var g = _.isFunction(a[b]) && a[b];
							e[f[1]](function () {
								var a = g && g.apply(this, arguments);
								a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
							})
						}),
						a = null
					}).promise()
				},
				promise : function (a) {
					return null != a ? _.extend(a, d) : d
				}
			},
			e = {};
			return d.pipe = d.then,
			_.each(b, function (a, f) {
				var g = f[2],
				h = f[3];
				d[f[1]] = g.add,
				h && g.add(function () {
					c = h
				}, b[1^a][2].disable, b[2][2].lock),
				e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments),
					this
				},
				e[f[0] + "With"] = g.fireWith
			}),
			d.promise(e),
			a && a.call(e, e),
			e
		},
		when : function (a) {
			var b,
			c,
			d,
			e = 0,
			f = R.call(arguments),
			g = f.length,
			h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
			i = 1 === h ? a : _.Deferred(),
			j = function (a, c, d) {
				return function (e) {
					c[a] = this,
					d[a] = arguments.length > 1 ? R.call(arguments) : e,
					d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
				}
			};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
					f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f),
			i.promise()
		}
	});
	var pa;
	_.fn.ready = function (a) {
		return _.ready.promise().done(a),
		this
	},
	_.extend({
		isReady : !1,
		readyWait : 1,
		holdReady : function (a) {
			a ? _.readyWait++ : _.ready(!0)
		},
		ready : function (a) {
			(a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
		}
	}),
	_.ready.promise = function (b) {
		return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))),
		pa.promise(b)
	},
	_.ready.promise();
	var qa = _.access = function (a, b, c, d, e, f, g) {
		var h = 0,
		i = a.length,
		j = null == c;
		if ("object" === _.type(c)) {
			e = !0;
			for (h in c)
				_.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
						return j.call(_(a), c)
					})), b))
			for (; i > h; h++)
				b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	_.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	},
	h.uid = 1,
	h.accepts = _.acceptData,
	h.prototype = {
		key : function (a) {
			if (!h.accepts(a))
				return 0;
			var b = {},
			c = a[this.expando];
			if (!c) {
				c = h.uid++;
				try {
					b[this.expando] = {
						value : c
					},
					Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c,
					_.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}),
			c
		},
		set : function (a, b, c) {
			var d,
			e = this.key(a),
			f = this.cache[e];
			if ("string" == typeof b)
				f[b] = c;
			else if (_.isEmptyObject(f))
				_.extend(this.cache[e], b);
			else
				for (d in b)
					f[d] = b[d];
			return f
		},
		get : function (a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access : function (a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove : function (a, b) {
			var c,
			d,
			e,
			f = this.key(a),
			g = this.cache[f];
			if (void 0 === b)
				this.cache[f] = {};
			else {
				_.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])),
				c = d.length;
				for (; c--; )
					delete g[d[c]]
			}
		},
		hasData : function (a) {
			return !_.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard : function (a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var ra = new h,
	sa = new h,
	ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	ua = /([A-Z])/g;
	_.extend({
		hasData : function (a) {
			return sa.hasData(a) || ra.hasData(a)
		},
		data : function (a, b, c) {
			return sa.access(a, b, c)
		},
		removeData : function (a, b) {
			sa.remove(a, b)
		},
		_data : function (a, b, c) {
			return ra.access(a, b, c)
		},
		_removeData : function (a, b) {
			ra.remove(a, b)
		}
	}),
	_.fn.extend({
		data : function (a, b) {
			var c,
			d,
			e,
			f = this[0],
			g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
					for (c = g.length; c--; )
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
					ra.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				sa.set(this, a)
			}) : qa(this, function (b) {
				var c,
				d = _.camelCase(a);
				if (f && void 0 === b) {
					if (c = sa.get(f, a), void 0 !== c)
						return c;
					if (c = sa.get(f, d), void 0 !== c)
						return c;
					if (c = i(f, d, void 0), void 0 !== c)
						return c
				} else
					this.each(function () {
						var c = sa.get(this, d);
						sa.set(this, d, b),
						-1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
					})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData : function (a) {
			return this.each(function () {
				sa.remove(this, a)
			})
		}
	}),
	_.extend({
		queue : function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue : function (a, b) {
			b = b || "fx";
			var c = _.queue(a, b),
			d = c.length,
			e = c.shift(),
			f = _._queueHooks(a, b),
			g = function () {
				_.dequeue(a, b)
			};
			"inprogress" === e && (e = c.shift(), d--),
			e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
			!d && f && f.empty.fire()
		},
		_queueHooks : function (a, b) {
			var c = b + "queueHooks";
			return ra.get(a, c) || ra.access(a, c, {
				empty : _.Callbacks("once memory").add(function () {
					ra.remove(a, [b + "queue", c])
				})
			})
		}
	}),
	_.fn.extend({
		queue : function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--),
			arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = _.queue(this, a, b);
				_._queueHooks(this, a),
				"fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
			})
		},
		dequeue : function (a) {
			return this.each(function () {
				_.dequeue(this, a)
			})
		},
		clearQueue : function (a) {
			return this.queue(a || "fx", [])
		},
		promise : function (a, b) {
			var c,
			d = 1,
			e = _.Deferred(),
			f = this,
			g = this.length,
			h = function () {
				--d || e.resolveWith(f, [f])
			};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
				c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(),
			e.promise(b)
		}
	});
	var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	wa = ["Top", "Right", "Bottom", "Left"],
	xa = function (a, b) {
		return a = b || a,
		"none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
	},
	ya = /^(?:checkbox|radio)$/i;
	!function () {
		var a = Z.createDocumentFragment(),
		b = a.appendChild(Z.createElement("div")),
		c = Z.createElement("input");
		c.setAttribute("type", "radio"),
		c.setAttribute("checked", "checked"),
		c.setAttribute("name", "t"),
		b.appendChild(c),
		Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
		b.innerHTML = "<textarea>x</textarea>",
		Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}
	();
	var za = "undefined";
	Y.focusinBubbles = "onfocusin" in a;
	var Aa = /^key/,
	Ba = /^(?:mouse|pointer|contextmenu)|click/,
	Ca = /^(?:focusinfocus|focusoutblur)$/,
	Da = /^([^.]*)(?:\.(.+)|)$/;
	_.event = {
		global : {},
		add : function (a, b, c, d, e) {
			var f,
			g,
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q = ra.get(a);
			if (q)
				for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
						return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
					}), b = (b || "").match(na) || [""], j = b.length; j--; )
					h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
								type : n,
								origType : p,
								data : d,
								handler : c,
								guid : c.guid,
								selector : e,
								needsContext : e && _.expr.match.needsContext.test(e),
								namespace : o.join(".")
							}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
		},
		remove : function (a, b, c, d, e) {
			var f,
			g,
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q = ra.hasData(a) && ra.get(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(na) || [""], j = b.length; j--; )
					if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
							k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
					} else
						for (n in i)
							_.event.remove(a, n + b[j], c, d, !0);
				_.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
			}
		},
		trigger : function (b, c, d, e) {
			var f,
			g,
			h,
			i,
			j,
			k,
			l,
			m = [d || Z],
			n = X.call(b, "type") ? b.type : b,
			o = X.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
				if (!e && !l.noBubble && !_.isWindow(d)) {
					for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
						m.push(g), h = g;
					h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
					b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = n,
				e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)),
				b.result
			}
		},
		dispatch : function (a) {
			a = _.event.fix(a);
			var b,
			c,
			d,
			e,
			f,
			g = [],
			h = R.call(arguments),
			i = (ra.get(this, "events") || {})[a.type] || [],
			j = _.event.special[a.type] || {};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
				for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
					for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
						(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a),
				a.result
			}
		},
		handlers : function (a, b) {
			var c,
			d,
			e,
			f,
			g = [],
			h = b.delegateCount,
			i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++)
							f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem : i,
							handlers : d
						})
					}
			return h < b.length && g.push({
				elem : this,
				handlers : b.slice(h)
			}),
			g
		},
		props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
				a
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter : function (a, b) {
				var c,
				d,
				e,
				f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
				a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
				a
			}
		},
		fix : function (a) {
			if (a[_.expando])
				return a;
			var b,
			c,
			d,
			e = a.type,
			f = a,
			g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; )
				c = d[b], a[c] = f[c];
			return a.target || (a.target = Z),
			3 === a.target.nodeType && (a.target = a.target.parentNode),
			g.filter ? g.filter(a, f) : a
		},
		special : {
			load : {
				noBubble : !0
			},
			focus : {
				trigger : function () {
					return this !== l() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType : "focusin"
			},
			blur : {
				trigger : function () {
					return this === l() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType : "focusout"
			},
			click : {
				trigger : function () {
					return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default : function (a) {
					return _.nodeName(a.target, "a")
				}
			},
			beforeunload : {
				postDispatch : function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate : function (a, b, c, d) {
			var e = _.extend(new _.Event, c, {
					type : a,
					isSimulated : !0,
					originalEvent : {}

				});
			d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
			e.isDefaultPrevented() && c.preventDefault()
		}
	},
	_.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	},
	_.Event = function (a, b) {
		return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
	},
	_.Event.prototype = {
		isDefaultPrevented : k,
		isPropagationStopped : k,
		isImmediatePropagationStopped : k,
		preventDefault : function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = j,
			a && a.preventDefault && a.preventDefault()
		},
		stopPropagation : function () {
			var a = this.originalEvent;
			this.isPropagationStopped = j,
			a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation : function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = j,
			a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
			this.stopPropagation()
		}
	},
	_.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout",
		pointerenter : "pointerover",
		pointerleave : "pointerout"
	}, function (a, b) {
		_.event.special[a] = {
			delegateType : b,
			bindType : b,
			handle : function (a) {
				var c,
				d = this,
				e = a.relatedTarget,
				f = a.handleObj;
				return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
				c
			}
		}
	}),
	Y.focusinBubbles || _.each({
		focus : "focusin",
		blur : "focusout"
	}, function (a, b) {
		var c = function (a) {
			_.event.simulate(b, a.target, _.event.fix(a), !0)
		};
		_.event.special[b] = {
			setup : function () {
				var d = this.ownerDocument || this,
				e = ra.access(d, b);
				e || d.addEventListener(a, c, !0),
				ra.access(d, b, (e || 0) + 1)
			},
			teardown : function () {
				var d = this.ownerDocument || this,
				e = ra.access(d, b) - 1;
				e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
			}
		}
	}),
	_.fn.extend({
		on : function (a, b, c, d, e) {
			var f,
			g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a)
					this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
				d = k;
			else if (!d)
				return this;
			return 1 === e && (f = d, d = function (a) {
				return _().off(a),
				f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = _.guid++)),
			this.each(function () {
				_.event.add(this, a, d, c, b)
			})
		},
		one : function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off : function (a, b, c) {
			var d,
			e;
			if (a && a.preventDefault && a.handleObj)
				return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a)
					this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
			c === !1 && (c = k),
			this.each(function () {
				_.event.remove(this, a, c, b)
			})
		},
		trigger : function (a, b) {
			return this.each(function () {
				_.event.trigger(a, b, this)
			})
		},
		triggerHandler : function (a, b) {
			var c = this[0];
			return c ? _.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	Fa = /<([\w:]+)/,
	Ga = /<|&#?\w+;/,
	Ha = /<(?:script|style|link)/i,
	Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Ja = /^$|\/(?:java|ecma)script/i,
	Ka = /^true\/(.*)/,
	La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	Ma = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		thead : [1, "<table>", "</table>"],
		col : [2, "<table><colgroup>", "</colgroup></table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default : [0, "", ""]
	};
	Ma.optgroup = Ma.option,
	Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead,
	Ma.th = Ma.td,
	_.extend({
		clone : function (a, b, c) {
			var d,
			e,
			f,
			g,
			h = a.cloneNode(!0),
			i = _.contains(a.ownerDocument, a);
			if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
				for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
					s(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
						q(f[d], g[d]);
				else
					q(a, h);
			return g = r(h, "script"),
			g.length > 0 && p(g, !i && r(a, "script")),
			h
		},
		buildFragment : function (a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === _.type(e))
						_.merge(l, e.nodeType ? [e] : e);
					else if (Ga.test(e)) {
						for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--; )
							f = f.lastChild;
						_.merge(l, f.childNodes),
						f = k.firstChild,
						f.textContent = ""
					} else
						l.push(b.createTextNode(e));
			for (k.textContent = "", m = 0; e = l[m++]; )
				if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
					for (j = 0; e = f[j++]; )
						Ja.test(e.type || "") && c.push(e);
			return k
		},
		cleanData : function (a) {
			for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
					if (b.events)
						for (d in b.events)
							f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
					ra.cache[e] && delete ra.cache[e]
				}
				delete sa.cache[c[sa.expando]]
			}
		}
	}),
	_.fn.extend({
		text : function (a) {
			return qa(this, function (a) {
				return void 0 === a ? _.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append : function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend : function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = m(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before : function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after : function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove : function (a, b) {
			for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
				b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty : function () {
			for (var a, b = 0; null != (a = this[b]); b++)
				1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
			return this
		},
		clone : function (a, b) {
			return a = null == a ? !1 : a,
			b = null == b ? a : b,
			this.map(function () {
				return _.clone(this, a, b)
			})
		},
		html : function (a) {
			return qa(this, function (a) {
				var b = this[0] || {},
				c = 0,
				d = this.length;
				if (void 0 === a && 1 === b.nodeType)
					return b.innerHTML;
				if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Ea, "<$1></$2>");
					try {
						for (; d > c; c++)
							b = this[c] || {},
						1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}

				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith : function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode,
				_.cleanData(r(this)),
				a && a.replaceChild(b, this)
			}),
			a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach : function (a) {
			return this.remove(a, !0)
		},
		domManip : function (a, b) {
			a = S.apply([], a);
			var c,
			d,
			e,
			f,
			g,
			h,
			i = 0,
			j = this.length,
			k = this,
			l = j - 1,
			m = a[0],
			p = _.isFunction(m);
			if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
				return this.each(function (c) {
					var d = k.eq(c);
					p && (a[0] = m.call(this, c, d.html())),
					d.domManip(a, b)
				});
			if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
					g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
				if (f)
					for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
						g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
			}
			return this
		}
	}),
	_.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (a, b) {
		_.fn[a] = function (a) {
			for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
				c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var Na,
	Oa = {},
	Pa = /^margin/,
	Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
	Ra = function (b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
	};
	!function () {
		function b() {
			g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
			g.innerHTML = "",
			e.appendChild(f);
			var b = a.getComputedStyle(g, null);
			c = "1%" !== b.top,
			d = "4px" === b.width,
			e.removeChild(f)
		}
		var c,
		d,
		e = Z.documentElement,
		f = Z.createElement("div"),
		g = Z.createElement("div");
		g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
				pixelPosition : function () {
					return b(),
					c
				},
				boxSizingReliable : function () {
					return null == d && b(),
					d
				},
				reliableMarginRight : function () {
					var b,
					c = g.appendChild(Z.createElement("div"));
					return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
					c.style.marginRight = c.style.width = "0",
					g.style.width = "1px",
					e.appendChild(f),
					b = !parseFloat(a.getComputedStyle(c, null).marginRight),
					e.removeChild(f),
					g.removeChild(c),
					b
				}
			}))
	}
	(),
	_.swap = function (a, b, c, d) {
		var e,
		f,
		g = {};
		for (f in b)
			g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b)
			a.style[f] = g[f];
		return e
	};
	var Sa = /^(none|table(?!-c[ea]).+)/,
	Ta = new RegExp("^(" + va + ")(.*)$", "i"),
	Ua = new RegExp("^([+-])=(" + va + ")", "i"),
	Va = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	Wa = {
		letterSpacing : "0",
		fontWeight : "400"
	},
	Xa = ["Webkit", "O", "Moz", "ms"];
	_.extend({
		cssHooks : {
			opacity : {
				get : function (a, b) {
					if (b) {
						var c = v(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber : {
			columnCount : !0,
			fillOpacity : !0,
			flexGrow : !0,
			flexShrink : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			order : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {
			"float" : "cssFloat"
		},
		style : function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				f,
				g,
				h = _.camelCase(b),
				i = a.style;
				return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
				g = _.cssHooks[b] || _.cssHooks[h],
				void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css : function (a, b, c, d) {
			var e,
			f,
			g,
			h = _.camelCase(b);
			return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
			g = _.cssHooks[b] || _.cssHooks[h],
			g && "get" in g && (e = g.get(a, !0, c)),
			void 0 === e && (e = v(a, b, d)),
			"normal" === e && b in Wa && (e = Wa[b]),
			"" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
		}
	}),
	_.each(["height", "width"], function (a, b) {
		_.cssHooks[b] = {
			get : function (a, c, d) {
				return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
					return A(a, b, d)
				}) : A(a, b, d) : void 0
			},
			set : function (a, c, d) {
				var e = d && Ra(a);
				return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}),
	_.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
			return b ? _.swap(a, {
				display : "inline-block"
			}, v, [a, "marginRight"]) : void 0
		}),
	_.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function (a, b) {
		_.cssHooks[a + b] = {
			expand : function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
					e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		},
		Pa.test(a) || (_.cssHooks[a + b].set = y)
	}),
	_.fn.extend({
		css : function (a, b) {
			return qa(this, function (a, b, c) {
				var d,
				e,
				f = {},
				g = 0;
				if (_.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++)
						f[b[g]] = _.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show : function () {
			return B(this, !0)
		},
		hide : function () {
			return B(this)
		},
		toggle : function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				xa(this) ? _(this).show() : _(this).hide()
			})
		}
	}),
	_.Tween = C,
	C.prototype = {
		constructor : C,
		init : function (a, b, c, d, e, f) {
			this.elem = a,
			this.prop = c,
			this.easing = e || "swing",
			this.options = b,
			this.start = this.now = this.cur(),
			this.end = d,
			this.unit = f || (_.cssNumber[c] ? "" : "px")
		},
		cur : function () {
			var a = C.propHooks[this.prop];
			return a && a.get ? a.get(this) : C.propHooks._default.get(this)
		},
		run : function (a) {
			var b,
			c = C.propHooks[this.prop];
			return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
			this.now = (this.end - this.start) * b + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			c && c.set ? c.set(this) : C.propHooks._default.set(this),
			this
		}
	},
	C.prototype.init.prototype = C.prototype,
	C.propHooks = {
		_default : {
			get : function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set : function (a) {
				_.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	},
	C.propHooks.scrollTop = C.propHooks.scrollLeft = {
		set : function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	},
	_.easing = {
		linear : function (a) {
			return a
		},
		swing : function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	},
	_.fx = C.prototype.init,
	_.fx.step = {};
	var Ya,
	Za,
	$a = /^(?:toggle|show|hide)$/,
	_a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
	ab = /queueHooks$/,
	bb = [G],
	cb = {
		"*" : [function (a, b) {
				var c = this.createTween(a, b),
				d = c.cur(),
				e = _a.exec(b),
				f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
				g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
				h = 1,
				i = 20;
				if (g && g[3] !== f) {
					f = f || g[3],
					e = e || [],
					g = +d || 1;
					do
						h = h || ".5", g /= h, _.style(c.elem, a, g + f);
					while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
				c
			}
		]
	};
	_.Animation = _.extend(I, {
			tweener : function (a, b) {
				_.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++)
					c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
			},
			prefilter : function (a, b) {
				b ? bb.unshift(a) : bb.push(a)
			}
		}),
	_.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? _.extend({}, a) : {
			complete : c || !c && b || _.isFunction(a) && a,
			duration : a,
			easing : c && b || b && !_.isFunction(b) && b
		};
		return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
		(null == d.queue || d.queue === !0) && (d.queue = "fx"),
		d.old = d.complete,
		d.complete = function () {
			_.isFunction(d.old) && d.old.call(this),
			d.queue && _.dequeue(this, d.queue)
		},
		d
	},
	_.fn.extend({
		fadeTo : function (a, b, c, d) {
			return this.filter(xa).css("opacity", 0).show().end().animate({
				opacity : b
			}, a, c, d)
		},
		animate : function (a, b, c, d) {
			var e = _.isEmptyObject(a),
			f = _.speed(b, c, d),
			g = function () {
				var b = I(this, _.extend({}, a), f);
				(e || ra.get(this, "finish")) && b.stop(!0)
			};
			return g.finish = g,
			e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop : function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop,
				b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0),
			b && a !== !1 && this.queue(a || "fx", []),
			this.each(function () {
				var b = !0,
				e = null != a && a + "queueHooks",
				f = _.timers,
				g = ra.get(this);
				if (e)
					g[e] && g[e].stop && d(g[e]);
				else
					for (e in g)
						g[e] && g[e].stop && ab.test(e) && d(g[e]);
				for (e = f.length; e--; )
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && _.dequeue(this, a)
			})
		},
		finish : function (a) {
			return a !== !1 && (a = a || "fx"),
			this.each(function () {
				var b,
				c = ra.get(this),
				d = c[a + "queue"],
				e = c[a + "queueHooks"],
				f = _.timers,
				g = d ? d.length : 0;
				for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0),
					b = f.length; b--; )
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++)
					d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}),
	_.each(["toggle", "show", "hide"], function (a, b) {
		var c = _.fn[b];
		_.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
		}
	}),
	_.each({
		slideDown : E("show"),
		slideUp : E("hide"),
		slideToggle : E("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (a, b) {
		_.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}),
	_.timers = [],
	_.fx.tick = function () {
		var a,
		b = 0,
		c = _.timers;
		for (Ya = _.now(); b < c.length; b++)
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		c.length || _.fx.stop(),
		Ya = void 0
	},
	_.fx.timer = function (a) {
		_.timers.push(a),
		a() ? _.fx.start() : _.timers.pop()
	},
	_.fx.interval = 13,
	_.fx.start = function () {
		Za || (Za = setInterval(_.fx.tick, _.fx.interval))
	},
	_.fx.stop = function () {
		clearInterval(Za),
		Za = null
	},
	_.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	},
	_.fn.delay = function (a, b) {
		return a = _.fx ? _.fx.speeds[a] || a : a,
		b = b || "fx",
		this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {
				clearTimeout(d)
			}
		})
	},
	function () {
		var a = Z.createElement("input"),
		b = Z.createElement("select"),
		c = b.appendChild(Z.createElement("option"));
		a.type = "checkbox",
		Y.checkOn = "" !== a.value,
		Y.optSelected = c.selected,
		b.disabled = !0,
		Y.optDisabled = !c.disabled,
		a = Z.createElement("input"),
		a.value = "t",
		a.type = "radio",
		Y.radioValue = "t" === a.value
	}
	();
	var db,
	eb,
	fb = _.expr.attrHandle;
	_.fn.extend({
		attr : function (a, b) {
			return qa(this, _.attr, a, b, arguments.length > 1)
		},
		removeAttr : function (a) {
			return this.each(function () {
				_.removeAttr(this, a)
			})
		}
	}),
	_.extend({
		attr : function (a, b, c) {
			var d,
			e,
			f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f)
				return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
		},
		removeAttr : function (a, b) {
			var c,
			d,
			e = 0,
			f = b && b.match(na);
			if (f && 1 === a.nodeType)
				for (; c = f[e++]; )
					d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks : {
			type : {
				set : function (a, b) {
					if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b),
						c && (a.value = c),
						b
					}
				}
			}
		}
	}),
	eb = {
		set : function (a, b, c) {
			return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c),
			c
		}
	},
	_.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = fb[b] || _.find.attr;
		fb[b] = function (a, b, d) {
			var e,
			f;
			return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f),
			e
		}
	});
	var gb = /^(?:input|select|textarea|button)$/i;
	_.fn.extend({
		prop : function (a, b) {
			return qa(this, _.prop, a, b, arguments.length > 1)
		},
		removeProp : function (a) {
			return this.each(function () {
				delete this[_.propFix[a] || a]
			})
		}
	}),
	_.extend({
		propFix : {
			"for" : "htmlFor",
			"class" : "className"
		},
		prop : function (a, b, c) {
			var d,
			e,
			f,
			g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g)
				return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks : {
			tabIndex : {
				get : function (a) {
					return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}),
	Y.optSelected || (_.propHooks.selected = {
			get : function (a) {
				var b = a.parentNode;
				return b && b.parentNode && b.parentNode.selectedIndex,
				null
			}
		}),
	_.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		_.propFix[this.toLowerCase()] = this
	});
	var hb = /[\t\r\n\f]/g;
	_.fn.extend({
		addClass : function (a) {
			var b,
			c,
			d,
			e,
			f,
			g,
			h = "string" == typeof a && a,
			i = 0,
			j = this.length;
			if (_.isFunction(a))
				return this.each(function (b) {
					_(this).addClass(a.call(this, b, this.className))
				});
			if (h)
				for (b = (a || "").match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
						for (f = 0; e = b[f++]; )
							d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = _.trim(d),
						c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass : function (a) {
			var b,
			c,
			d,
			e,
			f,
			g,
			h = 0 === arguments.length || "string" == typeof a && a,
			i = 0,
			j = this.length;
			if (_.isFunction(a))
				return this.each(function (b) {
					_(this).removeClass(a.call(this, b, this.className))
				});
			if (h)
				for (b = (a || "").match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
						for (f = 0; e = b[f++]; )
							for (; d.indexOf(" " + e + " ") >= 0; )
								d = d.replace(" " + e + " ", " ");
						g = a ? _.trim(d) : "",
						c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass : function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function (c) {
				_(this).toggleClass(a.call(this, c, this.className, b), b)
			}
				 : function () {
				if ("string" === c)
					for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; )
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
			})
		},
		hasClass : function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0)
					return !0;
			return !1
		}
	});
	var ib = /\r/g;
	_.fn.extend({
		val : function (a) {
			var b,
			c,
			d,
			e = this[0]; {
				if (arguments.length)
					return d = _.isFunction(a), this.each(function (c) {
						var e;
						1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
											return null == a ? "" : a + ""
										})), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
					});
				if (e)
					return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
			}
		}
	}),
	_.extend({
		valHooks : {
			option : {
				get : function (a) {
					var b = _.find.attr(a, "value");
					return null != b ? b : _.trim(_.text(a))
				}
			},
			select : {
				get : function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
							if (b = _(c).val(), f)
								return b;
							g.push(b)
						}
					return g
				},
				set : function (a, b) {
					for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
						d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1),
					f
				}
			}
		}
	}),
	_.each(["radio", "checkbox"], function () {
		_.valHooks[this] = {
			set : function (a, b) {
				return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
			}
		},
		Y.checkOn || (_.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}),
	_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		_.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}),
	_.fn.extend({
		hover : function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind : function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind : function (a, b) {
			return this.off(a, null, b)
		},
		delegate : function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate : function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var jb = _.now(),
	kb = /\?/;
	_.parseJSON = function (a) {
		return JSON.parse(a + "")
	},
	_.parseXML = function (a) {
		var b,
		c;
		if (!a || "string" != typeof a)
			return null;
		try {
			c = new DOMParser,
			b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a),
		b
	};
	var lb = /#.*$/,
	mb = /([?&])_=[^&]*/,
	nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	pb = /^(?:GET|HEAD)$/,
	qb = /^\/\//,
	rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	sb = {},
	tb = {},
	ub = "*/".concat("*"),
	vb = a.location.href,
	wb = rb.exec(vb.toLowerCase()) || [];
	_.extend({
		active : 0,
		lastModified : {},
		etag : {},
		ajaxSettings : {
			url : vb,
			type : "GET",
			isLocal : ob.test(wb[1]),
			global : !0,
			processData : !0,
			async : !0,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			accepts : {
				"*" : ub,
				text : "text/plain",
				html : "text/html",
				xml : "application/xml, text/xml",
				json : "application/json, text/javascript"
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText",
				json : "responseJSON"
			},
			converters : {
				"* text" : String,
				"text html" : !0,
				"text json" : _.parseJSON,
				"text xml" : _.parseXML
			},
			flatOptions : {
				url : !0,
				context : !0
			}
		},
		ajaxSetup : function (a, b) {
			return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
		},
		ajaxPrefilter : J(sb),
		ajaxTransport : J(tb),
		ajax : function (a, b) {
			function c(a, b, c, g) {
				var i,
				k,
				r,
				s,
				u,
				w = b;
				2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0),
			b = b || {};
			var d,
			e,
			f,
			g,
			h,
			i,
			j,
			k,
			l = _.ajaxSetup({}, b),
			m = l.context || l,
			n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
			o = _.Deferred(),
			p = _.Callbacks("once memory"),
			q = l.statusCode || {},
			r = {},
			s = {},
			t = 0,
			u = "canceled",
			v = {
				readyState : 0,
				getResponseHeader : function (a) {
					var b;
					if (2 === t) {
						if (!g)
							for (g = {}; b = nb.exec(f); )
								g[b[1].toLowerCase()] = b[2];
						b = g[a.toLowerCase()]
					}
					return null == b ? null : b
				},
				getAllResponseHeaders : function () {
					return 2 === t ? f : null
				},
				setRequestHeader : function (a, b) {
					var c = a.toLowerCase();
					return t || (a = s[c] = s[c] || a, r[a] = b),
					this
				},
				overrideMimeType : function (a) {
					return t || (l.mimeType = a),
					this
				},
				statusCode : function (a) {
					var b;
					if (a)
						if (2 > t)
							for (b in a)
								q[b] = [q[b], a[b]];
						else
							v.always(a[v.status]);
					return this
				},
				abort : function (a) {
					var b = a || u;
					return d && d.abort(b),
					c(0, b),
					this
				}
			};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t)
				return v;
			j = _.event && l.global,
			j && 0 === _.active++ && _.event.trigger("ajaxStart"),
			l.type = l.type.toUpperCase(),
			l.hasContent = !pb.test(l.type),
			e = l.url,
			l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
			l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
			(l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
			v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
			for (k in l.headers)
				v.setRequestHeader(k, l.headers[k]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
				return v.abort();
			u = "abort";
			for (k in {
				success : 1,
				error : 1,
				complete : 1
			})
				v[k](l[k]);
			if (d = K(tb, l, b, v)) {
				v.readyState = 1,
				j && n.trigger("ajaxSend", [v, l]),
				l.async && l.timeout > 0 && (h = setTimeout(function () {
							v.abort("timeout")
						}, l.timeout));
				try {
					t = 1,
					d.send(r, c)
				} catch (w) {
					if (!(2 > t))
						throw w;
					c(-1, w)
				}
			} else
				c(-1, "No Transport");
			return v
		},
		getJSON : function (a, b, c) {
			return _.get(a, b, c, "json")
		},
		getScript : function (a, b) {
			return _.get(a, void 0, b, "script")
		}
	}),
	_.each(["get", "post"], function (a, b) {
		_[b] = function (a, c, d, e) {
			return _.isFunction(c) && (e = e || d, d = c, c = void 0),
			_.ajax({
				url : a,
				type : b,
				dataType : e,
				data : c,
				success : d
			})
		}
	}),
	_._evalUrl = function (a) {
		return _.ajax({
			url : a,
			type : "GET",
			dataType : "script",
			async : !1,
			global : !1,
			"throws" : !0
		})
	},
	_.fn.extend({
		wrapAll : function (a) {
			var b;
			return _.isFunction(a) ? this.each(function (b) {
				_(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
						for (var a = this; a.firstElementChild; )
							a = a.firstElementChild;
						return a
					}).append(this)), this)
		},
		wrapInner : function (a) {
			return this.each(_.isFunction(a) ? function (b) {
				_(this).wrapInner(a.call(this, b))
			}
				 : function () {
				var b = _(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap : function (a) {
			var b = _.isFunction(a);
			return this.each(function (c) {
				_(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				_.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
			}).end()
		}
	}),
	_.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	},
	_.expr.filters.visible = function (a) {
		return !_.expr.filters.hidden(a)
	};
	var xb = /%20/g,
	yb = /\[\]$/,
	zb = /\r?\n/g,
	Ab = /^(?:submit|button|image|reset|file)$/i,
	Bb = /^(?:input|select|textarea|keygen)/i;
	_.param = function (a, b) {
		var c,
		d = [],
		e = function (a, b) {
			b = _.isFunction(b) ? b() : null == b ? "" : b,
			d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
			_.each(a, function () {
				e(this.name, this.value)
			});
		else
			for (c in a)
				O(c, a[c], b, e);
		return d.join("&").replace(xb, "+")
	},
	_.fn.extend({
		serialize : function () {
			return _.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				var a = _.prop(this, "elements");
				return a ? _.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
			}).map(function (a, b) {
				var c = _(this).val();
				return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
					return {
						name : b.name,
						value : a.replace(zb, "\r\n")
					}
				}) : {
					name : b.name,
					value : c.replace(zb, "\r\n")
				}
			}).get()
		}
	}),
	_.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (a) {}

	};
	var Cb = 0,
	Db = {},
	Eb = {
		0 : 200,
		1223 : 204
	},
	Fb = _.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Db)
			Db[a]()
	}),
	Y.cors = !!Fb && "withCredentials" in Fb,
	Y.ajax = Fb = !!Fb,
	_.ajaxTransport(function (a) {
		var b;
		return Y.cors || Fb && !a.crossDomain ? {
			send : function (c, d) {
				var e,
				f = a.xhr(),
				g = ++Cb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields)
						f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
				a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c)
					f.setRequestHeader(e, c[e]);
				b = function (a) {
					return function () {
						b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
								text : f.responseText
							}
								 : void 0, f.getAllResponseHeaders()))
					}
				},
				f.onload = b(),
				f.onerror = b("error"),
				b = Db[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b)
						throw h
				}
			},
			abort : function () {
				b && b()
			}
		}
		 : void 0
	}),
	_.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /(?:java|ecma)script/
		},
		converters : {
			"text script" : function (a) {
				return _.globalEval(a),
				a
			}
		}
	}),
	_.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1),
		a.crossDomain && (a.type = "GET")
	}),
	_.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b,
			c;
			return {
				send : function (d, e) {
					b = _("<script>").prop({
							async : !0,
							charset : a.scriptCharset,
							src : a.url
						}).on("load error", c = function (a) {
							b.remove(),
							c = null,
							a && e("error" === a.type ? 404 : 200, a.type)
						}),
					Z.head.appendChild(b[0])
				},
				abort : function () {
					c && c()
				}
			}
		}
	});
	var Gb = [],
	Hb = /(=)\?(?=&|$)|\?\?/;
	_.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			var a = Gb.pop() || _.expando + "_" + jb++;
			return this[a] = !0,
			a
		}
	}),
	_.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		f,
		g,
		h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || _.error(e + " was not called"),
			g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
				a[e] = f,
				b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)),
				g && _.isFunction(f) && f(g[0]),
				g = f = void 0
			}), "script") : void 0
	}),
	_.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a)
			return null;
		"boolean" == typeof b && (c = b, b = !1),
		b = b || Z;
		var d = ga.exec(a),
		e = !c && [];
		return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
	};
	var Ib = _.fn.load;
	_.fn.load = function (a, b, c) {
		if ("string" != typeof a && Ib)
			return Ib.apply(this, arguments);
		var d,
		e,
		f,
		g = this,
		h = a.indexOf(" ");
		return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)),
		_.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
		g.length > 0 && _.ajax({
			url : a,
			type : e,
			dataType : "html",
			data : b
		}).done(function (a) {
			f = arguments,
			g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a])
		}),
		this
	},
	_.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		_.fn[b] = function (a) {
			return this.on(b, a)
		}
	}),
	_.expr.filters.animated = function (a) {
		return _.grep(_.timers, function (b) {
			return a === b.elem
		}).length
	};
	var Jb = a.document.documentElement;
	_.offset = {
		setOffset : function (a, b, c) {
			var d,
			e,
			f,
			g,
			h,
			i,
			j,
			k = _.css(a, "position"),
			l = _(a),
			m = {};
			"static" === k && (a.style.position = "relative"),
			h = l.offset(),
			f = _.css(a, "top"),
			i = _.css(a, "left"),
			j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
			j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
			_.isFunction(b) && (b = b.call(a, c, h)),
			null != b.top && (m.top = b.top - h.top + g),
			null != b.left && (m.left = b.left - h.left + e),
			"using" in b ? b.using.call(a, m) : l.css(m)
		}
	},
	_.fn.extend({
		offset : function (a) {
			if (arguments.length)
				return void 0 === a ? this : this.each(function (b) {
					_.offset.setOffset(this, a, b)
				});
			var b,
			c,
			d = this[0],
			e = {
				top : 0,
				left : 0
			},
			f = d && d.ownerDocument;
			if (f)
				return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
					top : e.top + c.pageYOffset - b.clientTop,
					left : e.left + c.pageXOffset - b.clientLeft
				}) : e
		},
		position : function () {
			if (this[0]) {
				var a,
				b,
				c = this[0],
				d = {
					top : 0,
					left : 0
				};
				return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
					top : b.top - d.top - _.css(c, "marginTop", !0),
					left : b.left - d.left - _.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent : function () {
			return this.map(function () {
				for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
					a = a.offsetParent;
				return a || Jb
			})
		}
	}),
	_.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function (b, c) {
		var d = "pageYOffset" === c;
		_.fn[b] = function (e) {
			return qa(this, function (b, e, f) {
				var g = P(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}),
	_.each(["top", "left"], function (a, b) {
		_.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
				return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
			})
	}),
	_.each({
		Height : "height",
		Width : "width"
	}, function (a, b) {
		_.each({
			padding : "inner" + a,
			content : b,
			"" : "outer" + a
		}, function (c, d) {
			_.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
				g = c || (d === !0 || e === !0 ? "margin" : "border");
				return qa(this, function (b, c, d) {
					var e;
					return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}),
	_.fn.size = function () {
		return this.length
	},
	_.fn.andSelf = _.fn.addBack,
	"function" == typeof define && define.amd && define("jquery", [], function () {
		return _
	});
	var Kb = a.jQuery,
	Lb = a.$;
	return _.noConflict = function (b) {
		return a.$ === _ && (a.$ = Lb),
		b && a.jQuery === _ && (a.jQuery = Kb),
		_
	},
	typeof b === za && (a.jQuery = a.$ = _),
	_
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def : "easeOutQuad",
	swing : function (a, b, c, d, e) {
		return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
	},
	easeInQuad : function (a, b, c, d, e) {
		return d * (b /= e) * b + c
	},
	easeOutQuad : function (a, b, c, d, e) {
		return -d * (b /= e) * (b - 2) + c
	},
	easeInOutQuad : function (a, b, c, d, e) {
		return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
	},
	easeInCubic : function (a, b, c, d, e) {
		return d * (b /= e) * b * b + c
	},
	easeOutCubic : function (a, b, c, d, e) {
		return d * ((b = b / e - 1) * b * b + 1) + c
	},
	easeInOutCubic : function (a, b, c, d, e) {
		return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
	},
	easeInQuart : function (a, b, c, d, e) {
		return d * (b /= e) * b * b * b + c
	},
	easeOutQuart : function (a, b, c, d, e) {
		return -d * ((b = b / e - 1) * b * b * b - 1) + c
	},
	easeInOutQuart : function (a, b, c, d, e) {
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
	},
	easeInQuint : function (a, b, c, d, e) {
		return d * (b /= e) * b * b * b * b + c
	},
	easeOutQuint : function (a, b, c, d, e) {
		return d * ((b = b / e - 1) * b * b * b * b + 1) + c
	},
	easeInOutQuint : function (a, b, c, d, e) {
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
	},
	easeInSine : function (a, b, c, d, e) {
		return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
	},
	easeOutSine : function (a, b, c, d, e) {
		return d * Math.sin(b / e * (Math.PI / 2)) + c
	},
	easeInOutSine : function (a, b, c, d, e) {
		return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
	},
	easeInExpo : function (a, b, c, d, e) {
		return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
	},
	easeOutExpo : function (a, b, c, d, e) {
		return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
	},
	easeInOutExpo : function (a, b, c, d, e) {
		return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
	},
	easeInCirc : function (a, b, c, d, e) {
		return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
	},
	easeOutCirc : function (a, b, c, d, e) {
		return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
	},
	easeInOutCirc : function (a, b, c, d, e) {
		return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
	},
	easeInElastic : function (a, b, c, d, e) {
		var f = 1.70158,
		g = 0,
		h = d;
		if (0 == b)
			return c;
		if (1 == (b /= e))
			return c + d;
		if (g || (g = .3 * e), h < Math.abs(d)) {
			h = d;
			var f = g / 4
		} else
			var f = g / (2 * Math.PI) * Math.asin(d / h);
		return  - (h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
	},
	easeOutElastic : function (a, b, c, d, e) {
		var f = 1.70158,
		g = 0,
		h = d;
		if (0 == b)
			return c;
		if (1 == (b /= e))
			return c + d;
		if (g || (g = .3 * e), h < Math.abs(d)) {
			h = d;
			var f = g / 4
		} else
			var f = g / (2 * Math.PI) * Math.asin(d / h);
		return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
	},
	easeInOutElastic : function (a, b, c, d, e) {
		var f = 1.70158,
		g = 0,
		h = d;
		if (0 == b)
			return c;
		if (2 == (b /= e / 2))
			return c + d;
		if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
			h = d;
			var f = g / 4
		} else
			var f = g / (2 * Math.PI) * Math.asin(d / h);
		return 1 > b ?  - .5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
	},
	easeInBack : function (a, b, c, d, e, f) {
		return void 0 == f && (f = 1.70158),
		d * (b /= e) * b * ((f + 1) * b - f) + c
	},
	easeOutBack : function (a, b, c, d, e, f) {
		return void 0 == f && (f = 1.70158),
		d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
	},
	easeInOutBack : function (a, b, c, d, e, f) {
		return void 0 == f && (f = 1.70158),
		(b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
	},
	easeInBounce : function (a, b, c, d, e) {
		return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
	},
	easeOutBounce : function (a, b, c, d, e) {
		return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
	},
	easeInOutBounce : function (a, b, c, d, e) {
		return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
	}
}), function (a) {
	function b() {
		c && (f(b), a.fx.tick())
	}
	for (var c, d = 0, e = ["webkit", "moz"], f = window.requestAnimationFrame, g = window.cancelAnimationFrame; d < e.length && !f; d++)
		f = window[e[d] + "RequestAnimationFrame"], g = g || window[e[d] + "CancelAnimationFrame"] || window[e[d] + "CancelRequestAnimationFrame"];
	f ? (window.requestAnimationFrame = f, window.cancelAnimationFrame = g, a.fx.timer = function (d) {
		d() && a.timers.push(d) && !c && (c = !0, b())
	}, a.fx.stop = function () {
		c = !1
	}) : (window.requestAnimationFrame = function (a) {
		var b = (new Date).getTime(),
		c = Math.max(0, 16 - (b - d)),
		e = window.setTimeout(function () {
				a(b + c)
			}, c);
		return d = b + c,
		e
	}, window.cancelAnimationFrame = function (a) {
		clearTimeout(a)
	})
}
(jQuery), function (a, b) {
	"use strict";
	function c() {
		return b
	}
	"function" == typeof define && define.amd ? define("tinysort", c) : a.tinysort = b
}
(this, function () {
	"use strict";
	function a(a, d) {
		function h() {
			0 === arguments.length ? q({}) : b(arguments, function (a) {
				q(z(a) ? {
					selector : a
				}
					 : a)
			}),
			n = G.length
		}
		function q(a) {
			var b = !!a.selector,
			d = b && ":" === a.selector[0],
			e = c(a || {}, p);
			G.push(c({
					hasSelector : b,
					hasAttr : !(e.attr === g || "" === e.attr),
					hasData : e.data !== g,
					hasFilter : d,
					sortReturnNumber : "asc" === e.order ? 1 : -1
				}, e))
		}
		function r() {
			b(a, function (a, b) {
				B ? B !== a.parentNode && (H = !1) : B = a.parentNode;
				var c = G[0],
				d = c.hasFilter,
				e = c.selector,
				f = !e || d && a.matchesSelector(e) || e && a.querySelector(e),
				g = f ? E : F,
				h = {
					elm : a,
					pos : b,
					posn : g.length
				};
				D.push(h),
				g.push(h)
			}),
			A = E.slice(0)
		}
		function s() {
			E.sort(t)
		}
		function t(a, c) {
			var d = 0;
			for (0 !== o && (o = 0); 0 === d && n > o; ) {
				var g = G[o],
				h = g.ignoreDashes ? l : k;
				if (b(m, function (a) {
						var b = a.prepare;
						b && b(g)
					}), g.sortFunction)
					d = g.sortFunction(a, c);
				else if ("rand" == g.order)
					d = Math.random() < .5 ? 1 : -1;
				else {
					var i = f,
					p = y(a, g),
					q = y(c, g),
					r = "" === p || p === e,
					s = "" === q || q === e;
					if (p === q)
						d = 0;
					else if (g.emptyEnd && (r || s))
						d = r && s ? 0 : r ? 1 : -1;
					else {
						if (!g.forceStrings) {
							var t = z(p) ? p && p.match(h) : f,
							u = z(q) ? q && q.match(h) : f;
							if (t && u) {
								var v = p.substr(0, p.length - t[0].length),
								w = q.substr(0, q.length - u[0].length);
								v == w && (i = !f, p = j(t[0]), q = j(u[0]))
							}
						}
						d = p === e || q === e ? 0 : q > p ? -1 : p > q ? 1 : 0
					}
				}
				b(m, function (a) {
					var b = a.sort;
					b && (d = b(g, i, p, q, d))
				}),
				d *= g.sortReturnNumber,
				0 === d && o++
			}
			return 0 === d && (d = a.pos > c.pos ? 1 : -1),
			d
		}
		function u() {
			var a = E.length === D.length;
			if (H && a)
				I ? E.forEach(function (a, b) {
					a.elm.style.order = b
				}) : B.appendChild(v());
			else {
				var b = G[0],
				c = b.place,
				d = "org" === c,
				e = "start" === c,
				f = "end" === c,
				g = "first" === c,
				h = "last" === c;
				if (d)
					E.forEach(w), E.forEach(function (a, b) {
						x(A[b], a.elm)
					});
				else if (e || f) {
					var i = A[e ? 0 : A.length - 1],
					j = i.elm.parentNode,
					k = e ? j.firstChild : j.lastChild;
					k !== i.elm && (i = {
							elm : k
						}),
					w(i),
					f && j.appendChild(i.ghost),
					x(i, v())
				} else if (g || h) {
					var l = A[g ? 0 : A.length - 1];
					x(w(l), v())
				}
			}
		}
		function v() {
			return E.forEach(function (a) {
				C.appendChild(a.elm)
			}),
			C
		}
		function w(a) {
			var b = a.elm,
			c = i.createElement("div");
			return a.ghost = c,
			b.parentNode.insertBefore(c, b),
			a
		}
		function x(a, b) {
			var c = a.ghost,
			d = c.parentNode;
			d.insertBefore(b, c),
			d.removeChild(c),
			delete a.ghost
		}
		function y(a, b) {
			var c,
			d = a.elm;
			return b.selector && (b.hasFilter ? d.matchesSelector(b.selector) || (d = g) : d = d.querySelector(b.selector)),
			b.hasAttr ? c = d.getAttribute(b.attr) : b.useVal ? c = d.value || d.getAttribute("value") : b.hasData ? c = d.getAttribute("data-" + b.data) : d && (c = d.textContent),
			z(c) && (b.cases || (c = c.toLowerCase()), c = c.replace(/\s+/g, " ")),
			c
		}
		function z(a) {
			return "string" == typeof a
		}
		z(a) && (a = i.querySelectorAll(a)),
		0 === a.length && console.warn("No elements to sort");
		var A,
		B,
		C = i.createDocumentFragment(),
		D = [],
		E = [],
		F = [],
		G = [],
		H = !0,
		I = a.length && (d === e || d.useFlex !== !1) && -1 !== getComputedStyle(a[0].parentNode, null).display.indexOf("flex");
		return h.apply(g, Array.prototype.slice.call(arguments, 1)),
		r(),
		s(),
		u(),
		E.map(function (a) {
			return a.elm
		})
	}
	function b(a, b) {
		for (var c, d = a.length, e = d; e--; )
			c = d - e - 1, b(a[c], c)
	}
	function c(a, b, c) {
		for (var d in b)
			(c || a[d] === e) && (a[d] = b[d]);
		return a
	}
	function d(a, b, c) {
		m.push({
			prepare : a,
			sort : b,
			sortBy : c
		})
	}
	var e,
	f = !1,
	g = null,
	h = window,
	i = h.document,
	j = parseFloat,
	k = /(-?\d+\.?\d*)\s*$/g,
	l = /(\d+\.?\d*)\s*$/g,
	m = [],
	n = 0,
	o = 0,
	p = {
		selector : g,
		order : "asc",
		attr : g,
		data : g,
		useVal : f,
		place : "org",
		returns : f,
		cases : f,
		forceStrings : f,
		ignoreDashes : f,
		sortFunction : g,
		useFlex : f,
		emptyEnd : f
	};
	return h.Element && function (a) {
		a.matchesSelector = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector || function (a) {
			for (var b = this, c = (b.parentNode || b.document).querySelectorAll(a), d = -1; c[++d] && c[d] != b; );
			return !!c[d]
		}
	}
	(Element.prototype),
	c(d, {
		loop : b
	}),
	c(a, {
		plugin : d,
		defaults : p
	})
}
	());
var bigInt = function (a) {
	"use strict";
	function b(a, b) {
		this.value = a,
		this.sign = b,
		this.isSmall = !1
	}
	function c(a) {
		this.value = a,
		this.sign = 0 > a,
		this.isSmall = !0
	}
	function d(a) {
		return a > -Q && Q > a
	}
	function e(a) {
		return 1e7 > a ? [a] : 1e14 > a ? [a % 1e7, Math.floor(a / 1e7)] : [a % 1e7, Math.floor(a / 1e7) % 1e7, Math.floor(a / 1e14)]
	}
	function f(a) {
		g(a);
		var b = a.length;
		if (4 > b && z(a, R) < 0)
			switch (b) {
			case 0:
				return 0;
			case 1:
				return a[0];
			case 2:
				return a[0] + a[1] * O;
			default:
				return a[0] + (a[1] + a[2] * O) * O
			}
		return a
	}
	function g(a) {
		for (var b = a.length; 0 === a[--b]; );
		a.length = b + 1
	}
	function h(a) {
		for (var b = new Array(a), c = -1; ++c < a; )
			b[c] = 0;
		return b
	}
	function i(a) {
		return a > 0 ? Math.floor(a) : Math.ceil(a)
	}
	function j(a, b) {
		var c,
		d,
		e = a.length,
		f = b.length,
		g = new Array(e),
		h = 0,
		i = O;
		for (d = 0; f > d; d++)
			c = a[d] + b[d] + h, h = c >= i ? 1 : 0, g[d] = c - h * i;
		for (; e > d; )
			c = a[d] + h, h = c === i ? 1 : 0, g[d++] = c - h * i;
		return h > 0 && g.push(h),
		g
	}
	function k(a, b) {
		return a.length >= b.length ? j(a, b) : j(b, a)
	}
	function l(a, b) {
		var c,
		d,
		e = a.length,
		f = new Array(e),
		g = O;
		for (d = 0; e > d; d++)
			c = a[d] - g + b, b = Math.floor(c / g), f[d] = c - b * g, b += 1;
		for (; b > 0; )
			f[d++] = b % g, b = Math.floor(b / g);
		return f
	}
	function m(a, b) {
		var c,
		d,
		e = a.length,
		f = b.length,
		h = new Array(e),
		i = 0,
		j = O;
		for (c = 0; f > c; c++)
			d = a[c] - i - b[c], 0 > d ? (d += j, i = 1) : i = 0, h[c] = d;
		for (c = f; e > c; c++) {
			if (d = a[c] - i, !(0 > d)) {
				h[c++] = d;
				break
			}
			d += j,
			h[c] = d
		}
		for (; e > c; c++)
			h[c] = a[c];
		return g(h),
		h
	}
	function n(a, d, e) {
		var g;
		return z(a, d) >= 0 ? g = m(a, d) : (g = m(d, a), e = !e),
		g = f(g),
		"number" == typeof g ? (e && (g = -g), new c(g)) : new b(g, e)
	}
	function o(a, d, e) {
		var g,
		h,
		i = a.length,
		j = new Array(i),
		k = -d,
		l = O;
		for (g = 0; i > g; g++)
			h = a[g] + k, k = Math.floor(h / l), h %= l, j[g] = 0 > h ? h + l : h;
		return j = f(j),
		"number" == typeof j ? (e && (j = -j), new c(j)) : new b(j, e)
	}
	function p(a, b) {
		var c,
		d,
		e,
		f,
		i,
		j = a.length,
		k = b.length,
		l = j + k,
		m = h(l),
		n = O;
		for (e = 0; j > e; ++e) {
			f = a[e];
			for (var o = 0; k > o; ++o)
				i = b[o], c = f * i + m[e + o], d = Math.floor(c / n), m[e + o] = c - d * n, m[e + o + 1] += d
		}
		return g(m),
		m
	}
	function q(a, b) {
		var c,
		d,
		e = a.length,
		f = new Array(e),
		g = O,
		h = 0;
		for (d = 0; e > d; d++)
			c = a[d] * b + h, h = Math.floor(c / g), f[d] = c - h * g;
		for (; h > 0; )
			f[d++] = h % g, h = Math.floor(h / g);
		return f
	}
	function r(a, b) {
		for (var c = []; b-- > 0; )
			c.push(0);
		return c.concat(a)
	}
	function s(a, b) {
		var c = Math.max(a.length, b.length);
		if (400 >= c)
			return p(a, b);
		c = Math.ceil(c / 2);
		var d = a.slice(c),
		e = a.slice(0, c),
		f = b.slice(c),
		g = b.slice(0, c),
		h = s(e, g),
		i = s(d, f),
		j = s(k(e, d), k(g, f));
		return k(k(h, r(m(m(j, h), i), c)), r(i, 2 * c))
	}
	function t(a, c, d) {
		return O > a ? new b(q(c, a), d) : new b(p(c, e(a)), d)
	}
	function u(a) {
		var b,
		c,
		d,
		e,
		f,
		i = a.length,
		j = h(i + i),
		k = O;
		for (d = 0; i > d; d++) {
			e = a[d];
			for (var l = 0; i > l; l++)
				f = a[l], b = e * f + j[d + l], c = Math.floor(b / k), j[d + l] = b - c * k, j[d + l + 1] += c
		}
		return g(j),
		j
	}
	function v(a, b) {
		var c,
		d,
		e,
		g,
		i,
		j,
		k,
		l = a.length,
		m = b.length,
		n = O,
		o = h(b.length),
		p = b[m - 1],
		r = Math.ceil(n / (2 * p)),
		s = q(a, r),
		t = q(b, r);
		for (s.length <= l && s.push(0), t.push(0), p = t[m - 1], d = l - m; d >= 0; d--) {
			for (c = n - 1, s[d + m] !== p && (c = Math.floor((s[d + m] * n + s[d + m - 1]) / p)), e = 0, g = 0, j = t.length, i = 0; j > i; i++)
				e += c * t[i], k = Math.floor(e / n), g += s[d + i] - (e - k * n), e = k, 0 > g ? (s[d + i] = g + n, g = -1) : (s[d + i] = g, g = 0);
			for (; 0 !== g; ) {
				for (c -= 1, e = 0, i = 0; j > i; i++)
					e += s[d + i] - n + t[i], 0 > e ? (s[d + i] = e + n, e = 0) : (s[d + i] = e, e = 1);
				g += e
			}
			o[d] = c
		}
		return s = x(s, r)[0],
		[f(o), f(s)]
	}
	function w(a, b) {
		for (var c, d, e, g, h, i = a.length, j = b.length, k = [], l = [], n = O; i; )
			if (l.unshift(a[--i]), z(l, b) < 0)
				k.push(0);
			else {
				d = l.length,
				e = l[d - 1] * n + l[d - 2],
				g = b[j - 1] * n + b[j - 2],
				d > j && (e = (e + 1) * n),
				c = Math.ceil(e / g);
				do {
					if (h = q(b, c), z(h, l) <= 0)
						break;
					c--
				} while (c);
				k.push(c),
				l = m(l, h)
			}
		return k.reverse(),
		[f(k), f(l)]
	}
	function x(a, b) {
		var c,
		d,
		e,
		f,
		g = a.length,
		j = h(g),
		k = O;
		for (e = 0, c = g - 1; c >= 0; --c)
			f = e * k + a[c], d = i(f / b), e = f - d * b, j[c] = 0 | d;
		return [j, 0 | e]
	}
	function y(a, d) {
		var g,
		h,
		j = N(d),
		k = a.value,
		l = j.value;
		if (0 === l)
			throw new Error("Cannot divide by zero");
		if (a.isSmall)
			return j.isSmall ? [new c(i(k / l)), new c(k % l)] : [Z[0], a];
		if (j.isSmall) {
			if (1 === l)
				return [a, Z[0]];
			if (-1 == l)
				return [a.negate(), Z[0]];
			var m = Math.abs(l);
			if (O > m) {
				g = x(k, m),
				h = f(g[0]);
				var n = g[1];
				return a.sign && (n = -n),
				"number" == typeof h ? (a.sign !== j.sign && (h = -h), [new c(h), new c(n)]) : [new b(h, a.sign !== j.sign), new c(n)]
			}
			l = e(m)
		}
		var o = z(k, l);
		if (-1 === o)
			return [Z[0], a];
		if (0 === o)
			return [Z[a.sign === j.sign ? 1 : -1], Z[0]];
		g = k.length + l.length <= 200 ? v(k, l) : w(k, l),
		h = g[0];
		var p = a.sign !== j.sign,
		q = g[1],
		r = a.sign;
		return "number" == typeof h ? (p && (h = -h), h = new c(h)) : h = new b(h, p),
		"number" == typeof q ? (r && (q = -q), q = new c(q)) : q = new b(q, r),
		[h, q]
	}
	function z(a, b) {
		if (a.length !== b.length)
			return a.length > b.length ? 1 : -1;
		for (var c = a.length - 1; c >= 0; c--)
			if (a[c] !== b[c])
				return a[c] > b[c] ? 1 : -1;

		return 0
	}
	function A(a) {
		var b = a.abs();
		return b.isUnit() ? !1 : b.equals(2) || b.equals(3) || b.equals(5) ? !0 : b.isEven() || b.isDivisibleBy(3) || b.isDivisibleBy(5) ? !1 : b.lesser(25) ? !0 : void 0
	}
	function B(a) {
		return ("number" == typeof a || "string" == typeof a) && +Math.abs(a) <= O || a instanceof b && a.value.length <= 1
	}
	function C(a, b, c) {
		b = N(b);
		for (var d = a.isNegative(), e = b.isNegative(), f = d ? a.not() : a, g = e ? b.not() : b, h = [], i = [], j = !1, k = !1; !j || !k; )
			f.isZero() ? (j = !0, h.push(d ? 1 : 0)) : h.push(d ? f.isEven() ? 1 : 0 : f.isEven() ? 0 : 1), g.isZero() ? (k = !0, i.push(e ? 1 : 0)) : i.push(e ? g.isEven() ? 1 : 0 : g.isEven() ? 0 : 1), f = f.over(2), g = g.over(2);
		for (var l = [], m = 0; m < h.length; m++)
			l.push(c(h[m], i[m]));
		for (var n = bigInt(l.pop()).negate().times(bigInt(2).pow(l.length)); l.length; )
			n = n.add(bigInt(l.pop()).times(bigInt(2).pow(l.length)));
		return n
	}
	function D(a) {
		var b = a.value,
		c = "number" == typeof b ? b | W : b[0] + b[1] * O | X;
		return c & -c
	}
	function E(a, b) {
		return a = N(a),
		b = N(b),
		a.greater(b) ? a : b
	}
	function F(a, b) {
		return a = N(a),
		b = N(b),
		a.lesser(b) ? a : b
	}
	function G(a, b) {
		if (a = N(a).abs(), b = N(b).abs(), a.equals(b))
			return a;
		if (a.isZero())
			return b;
		if (b.isZero())
			return a;
		for (var c, d, e = Z[1]; a.isEven() && b.isEven(); )
			c = Math.min(D(a), D(b)), a = a.divide(c), b = b.divide(c), e = e.multiply(c);
		for (; a.isEven(); )
			a = a.divide(D(a));
		do {
			for (; b.isEven(); )
				b = b.divide(D(b));
			a.greater(b) && (d = b, b = a, a = d),
			b = b.subtract(a)
		} while (!b.isZero());
		return e.isUnit() ? a : a.multiply(e)
	}
	function H(a, b) {
		return a = N(a).abs(),
		b = N(b).abs(),
		a.divide(G(a, b)).multiply(b)
	}
	function I(a, d) {
		a = N(a),
		d = N(d);
		var e = F(a, d),
		g = E(a, d),
		h = g.subtract(e);
		if (h.isSmall)
			return e.add(Math.round(Math.random() * h));
		for (var j = h.value.length - 1, k = [], l = !0, m = j; m >= 0; m--) {
			var n = l ? h.value[m] : O,
			o = i(Math.random() * n);
			k.unshift(o),
			n > o && (l = !1)
		}
		return k = f(k),
		e.add("number" == typeof k ? new c(k) : new b(k, !1))
	}
	function J(a) {
		var b = a.value;
		return "number" == typeof b && (b = [b]),
		1 === b.length && b[0] <= 35 ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(b[0]) : "<" + b + ">"
	}
	function K(a, b) {
		if (b = bigInt(b), b.isZero()) {
			if (a.isZero())
				return "0";
			throw new Error("Cannot convert nonzero numbers to base 0.")
		}
		if (b.equals(-1))
			return a.isZero() ? "0" : a.isNegative() ? new Array(1 - a).join("10") : "1" + new Array(+a).join("01");
		var c = "";
		if (a.isNegative() && b.isPositive() && (c = "-", a = a.abs()), b.equals(1))
			return a.isZero() ? "0" : c + new Array(+a + 1).join(1);
		for (var d, e = [], f = a; f.isNegative() || f.compareAbs(b) >= 0; ) {
			d = f.divmod(b),
			f = d.quotient;
			var g = d.remainder;
			g.isNegative() && (g = b.minus(g).abs(), f = f.next()),
			e.push(J(g))
		}
		return e.push(J(f)),
		c + e.reverse().join("")
	}
	function L(a) {
		if (d(+a)) {
			var e = +a;
			if (e === i(e))
				return new c(e);
			throw "Invalid integer: " + a
		}
		var f = "-" === a[0];
		f && (a = a.slice(1));
		var h = a.split(/e/i);
		if (h.length > 2)
			throw new Error("Invalid integer: " + k.join("e"));
		if (2 === h.length) {
			var j = h[1];
			if ("+" === j[0] && (j = j.slice(1)), j = +j, j !== i(j) || !d(j))
				throw new Error("Invalid integer: " + j + " is not a valid exponent.");
			var k = h[0],
			l = k.indexOf(".");
			if (l >= 0 && (j -= k.length - l - 1, k = k.slice(0, l) + k.slice(l + 1)), 0 > j)
				throw new Error("Cannot include negative exponent part for integers");
			k += new Array(j + 1).join("0"),
			a = k
		}
		var m = /^([0-9][0-9]*)$/.test(a);
		if (!m)
			throw new Error("Invalid integer: " + a);
		for (var n = [], o = a.length, p = P, q = o - p; o > 0; )
			n.push(+a.slice(q, o)), q -= p, 0 > q && (q = 0), o -= p;
		return g(n),
		new b(n, f)
	}
	function M(a) {
		return d(a) ? new c(a) : L(a.toString())
	}
	function N(a) {
		return "number" == typeof a ? M(a) : "string" == typeof a ? L(a) : a
	}
	var O = 1e7,
	P = 7,
	Q = 9007199254740992,
	R = e(Q),
	S = Math.log(Q);
	b.prototype.add = function (a) {
		var c = N(a);
		if (this.sign !== c.sign)
			return this.subtract(c.negate());
		var d = this.value,
		e = c.value;
		return c.isSmall ? new b(l(d, Math.abs(e)), this.sign) : new b(k(d, e), this.sign)
	},
	b.prototype.plus = b.prototype.add,
	c.prototype.add = function (a) {
		var f = N(a),
		g = this.value;
		if (0 > g !== f.sign)
			return this.subtract(f.negate());
		var h = f.value;
		if (f.isSmall) {
			if (d(g + h))
				return new c(g + h);
			h = e(Math.abs(h))
		}
		return new b(l(h, Math.abs(g)), 0 > g)
	},
	c.prototype.plus = c.prototype.add,
	b.prototype.subtract = function (a) {
		var b = N(a);
		if (this.sign !== b.sign)
			return this.add(b.negate());
		var c = this.value,
		d = b.value;
		return b.isSmall ? o(c, Math.abs(d), this.sign) : n(c, d, this.sign)
	},
	b.prototype.minus = b.prototype.subtract,
	c.prototype.subtract = function (a) {
		var b = N(a),
		d = this.value;
		if (0 > d !== b.sign)
			return this.add(b.negate());
		var e = b.value;
		return b.isSmall ? new c(d - e) : o(e, Math.abs(d), d >= 0)
	},
	c.prototype.minus = c.prototype.subtract,
	b.prototype.negate = function () {
		return new b(this.value, !this.sign)
	},
	c.prototype.negate = function () {
		var a = this.sign,
		b = new c(-this.value);
		return b.sign = !a,
		b
	},
	b.prototype.abs = function () {
		return new b(this.value, !1)
	},
	c.prototype.abs = function () {
		return new c(Math.abs(this.value))
	},
	b.prototype.multiply = function (a) {
		var c,
		d = N(a),
		f = this.value,
		g = d.value,
		h = this.sign !== d.sign;
		if (d.isSmall) {
			if (0 === g)
				return Z[0];
			if (1 === g)
				return this;
			if (-1 === g)
				return this.negate();
			if (c = Math.abs(g), O > c)
				return new b(q(f, c), h);
			g = e(c)
		}
		return f.length + g.length > 4e3 ? new b(s(f, g), h) : new b(p(f, g), h)
	},
	b.prototype.times = b.prototype.multiply,
	c.prototype._multiplyBySmall = function (a) {
		return d(a.value * this.value) ? new c(a.value * this.value) : t(Math.abs(a.value), e(Math.abs(this.value)), this.sign !== a.sign)
	},
	b.prototype._multiplyBySmall = function (a) {
		return 0 === a.value ? Z[0] : 1 === a.value ? this : -1 === a.value ? this.negate() : t(Math.abs(a.value), this.value, this.sign !== a.sign)
	},
	c.prototype.multiply = function (a) {
		return N(a)._multiplyBySmall(this)
	},
	c.prototype.times = c.prototype.multiply,
	b.prototype.square = function () {
		return new b(u(this.value), !1)
	},
	c.prototype.square = function () {
		var a = this.value * this.value;
		return d(a) ? new c(a) : new b(u(e(Math.abs(this.value))), !1)
	},
	b.prototype.divmod = function (a) {
		var b = y(this, a);
		return {
			quotient : b[0],
			remainder : b[1]
		}
	},
	c.prototype.divmod = b.prototype.divmod,
	b.prototype.divide = function (a) {
		return y(this, a)[0]
	},
	c.prototype.over = c.prototype.divide = b.prototype.over = b.prototype.divide,
	b.prototype.mod = function (a) {
		return y(this, a)[1]
	},
	c.prototype.remainder = c.prototype.mod = b.prototype.remainder = b.prototype.mod,
	b.prototype.pow = function (a) {
		var b,
		e,
		f,
		g = N(a),
		h = this.value,
		j = g.value;
		if (0 === j)
			return Z[1];
		if (0 === h)
			return Z[0];
		if (1 === h)
			return Z[1];
		if (-1 === h)
			return g.isEven() ? Z[1] : Z[-1];
		if (g.sign)
			return Z[0];
		if (!g.isSmall)
			throw new Error("The exponent " + g.toString() + " is too large.");
		if (this.isSmall && d(b = Math.pow(h, j)))
			return new c(i(b));
		for (e = this, f = Z[1]; ; ) {
			if (j & !0 && (f = f.times(e), --j), 0 === j)
				break;
			j /= 2,
			e = e.square()
		}
		return f
	},
	c.prototype.pow = b.prototype.pow,
	b.prototype.modPow = function (a, b) {
		if (a = N(a), b = N(b), b.isZero())
			throw new Error("Cannot take modPow with modulus 0");
		for (var c = Z[1], d = this.mod(b); a.isPositive(); ) {
			if (d.isZero())
				return Z[0];
			a.isOdd() && (c = c.multiply(d).mod(b)),
			a = a.divide(2),
			d = d.square().mod(b)
		}
		return c
	},
	c.prototype.modPow = b.prototype.modPow,
	b.prototype.compareAbs = function (a) {
		var b = N(a),
		c = this.value,
		d = b.value;
		return b.isSmall ? 1 : z(c, d)
	},
	c.prototype.compareAbs = function (a) {
		var b = N(a),
		c = Math.abs(this.value),
		d = b.value;
		return b.isSmall ? (d = Math.abs(d), c === d ? 0 : c > d ? 1 : -1) : -1
	},
	b.prototype.compare = function (a) {
		if (a === 1 / 0)
			return -1;
		if (a ===  - (1 / 0))
			return 1;
		var b = N(a),
		c = this.value,
		d = b.value;
		return this.sign !== b.sign ? b.sign ? 1 : -1 : b.isSmall ? this.sign ? -1 : 1 : z(c, d) * (this.sign ? -1 : 1)
	},
	b.prototype.compareTo = b.prototype.compare,
	c.prototype.compare = function (a) {
		if (a === 1 / 0)
			return -1;
		if (a ===  - (1 / 0))
			return 1;
		var b = N(a),
		c = this.value,
		d = b.value;
		return b.isSmall ? c == d ? 0 : c > d ? 1 : -1 : 0 > c !== b.sign ? 0 > c ? -1 : 1 : 0 > c ? 1 : -1
	},
	c.prototype.compareTo = c.prototype.compare,
	b.prototype.equals = function (a) {
		return 0 === this.compare(a)
	},
	c.prototype.eq = c.prototype.equals = b.prototype.eq = b.prototype.equals,
	b.prototype.notEquals = function (a) {
		return 0 !== this.compare(a)
	},
	c.prototype.neq = c.prototype.notEquals = b.prototype.neq = b.prototype.notEquals,
	b.prototype.greater = function (a) {
		return this.compare(a) > 0
	},
	c.prototype.gt = c.prototype.greater = b.prototype.gt = b.prototype.greater,
	b.prototype.lesser = function (a) {
		return this.compare(a) < 0
	},
	c.prototype.lt = c.prototype.lesser = b.prototype.lt = b.prototype.lesser,
	b.prototype.greaterOrEquals = function (a) {
		return this.compare(a) >= 0
	},
	c.prototype.geq = c.prototype.greaterOrEquals = b.prototype.geq = b.prototype.greaterOrEquals,
	b.prototype.lesserOrEquals = function (a) {
		return this.compare(a) <= 0
	},
	c.prototype.leq = c.prototype.lesserOrEquals = b.prototype.leq = b.prototype.lesserOrEquals,
	b.prototype.isEven = function () {
		return 0 === (1 & this.value[0])
	},
	c.prototype.isEven = function () {
		return 0 === (1 & this.value)
	},
	b.prototype.isOdd = function () {
		return 1 === (1 & this.value[0])
	},
	c.prototype.isOdd = function () {
		return 1 === (1 & this.value)
	},
	b.prototype.isPositive = function () {
		return !this.sign
	},
	c.prototype.isPositive = function () {
		return this.value > 0
	},
	b.prototype.isNegative = function () {
		return this.sign
	},
	c.prototype.isNegative = function () {
		return this.value < 0
	},
	b.prototype.isUnit = function () {
		return !1
	},
	c.prototype.isUnit = function () {
		return 1 === Math.abs(this.value)
	},
	b.prototype.isZero = function () {
		return !1
	},
	c.prototype.isZero = function () {
		return 0 === this.value
	},
	b.prototype.isDivisibleBy = function (a) {
		var b = N(a),
		c = b.value;
		return 0 === c ? !1 : 1 === c ? !0 : 2 === c ? this.isEven() : this.mod(b).equals(Z[0])
	},
	c.prototype.isDivisibleBy = b.prototype.isDivisibleBy,
	b.prototype.isPrime = function () {
		var b = A(this);
		if (b !== a)
			return b;
		for (var c, d, e, f, g = this.abs(), h = g.prev(), i = [2, 3, 5, 7, 11, 13, 17, 19], j = h; j.isEven(); )
			j = j.divide(2);
		for (e = 0; e < i.length; e++)
			if (f = bigInt(i[e]).modPow(j, g), !f.equals(Z[1]) && !f.equals(h)) {
				for (d = !0, c = j; d && c.lesser(h); c = c.multiply(2))
					f = f.square().mod(g), f.equals(h) && (d = !1);
				if (d)
					return !1
			}
		return !0
	},
	c.prototype.isPrime = b.prototype.isPrime,
	b.prototype.isProbablePrime = function (b) {
		var c = A(this);
		if (c !== a)
			return c;
		for (var d = this.abs(), e = b === a ? 5 : b, f = 0; e > f; f++) {
			var g = bigInt.randBetween(2, d.minus(2));
			if (!g.modPow(d.prev(), d).isUnit())
				return !1
		}
		return !0
	},
	c.prototype.isProbablePrime = b.prototype.isProbablePrime,
	b.prototype.next = function () {
		var a = this.value;
		return this.sign ? o(a, 1, this.sign) : new b(l(a, 1), this.sign)
	},
	c.prototype.next = function () {
		var a = this.value;
		return Q > a + 1 ? new c(a + 1) : new b(R, !1)
	},
	b.prototype.prev = function () {
		var a = this.value;
		return this.sign ? new b(l(a, 1), !0) : o(a, 1, this.sign)
	},
	c.prototype.prev = function () {
		var a = this.value;
		return a - 1 > -Q ? new c(a - 1) : new b(R, !0)
	};
	for (var T = [1]; T[T.length - 1] <= O; )
		T.push(2 * T[T.length - 1]);
	var U = T.length,
	V = T[U - 1];
	b.prototype.shiftLeft = function (a) {
		if (!B(a))
			throw new Error(String(a) + " is too large for shifting.");
		if (a = +a, 0 > a)
			return this.shiftRight(-a);
		for (var b = this; a >= U; )
			b = b.multiply(V), a -= U - 1;
		return b.multiply(T[a])
	},
	c.prototype.shiftLeft = b.prototype.shiftLeft,
	b.prototype.shiftRight = function (a) {
		var b;
		if (!B(a))
			throw new Error(String(a) + " is too large for shifting.");
		if (a = +a, 0 > a)
			return this.shiftLeft(-a);
		for (var c = this; a >= U; ) {
			if (c.isZero())
				return c;
			b = y(c, V),
			c = b[1].isNegative() ? b[0].prev() : b[0],
			a -= U - 1
		}
		return b = y(c, T[a]),
		b[1].isNegative() ? b[0].prev() : b[0]
	},
	c.prototype.shiftRight = b.prototype.shiftRight,
	b.prototype.not = function () {
		return this.negate().prev()
	},
	c.prototype.not = b.prototype.not,
	b.prototype.and = function (a) {
		return C(this, a, function (a, b) {
			return a & b
		})
	},
	c.prototype.and = b.prototype.and,
	b.prototype.or = function (a) {
		return C(this, a, function (a, b) {
			return a | b
		})
	},
	c.prototype.or = b.prototype.or,
	b.prototype.xor = function (a) {
		return C(this, a, function (a, b) {
			return a^b
		})
	},
	c.prototype.xor = b.prototype.xor;
	var W = 1 << 30,
	X = (O & -O) * (O & -O) | W,
	Y = function (a, b) {
		var d = Z[0],
		e = Z[1],
		f = a.length;
		if (b >= 2 && 36 >= b && f <= S / Math.log(b))
			return new c(parseInt(a, b));
		b = N(b);
		var g,
		h = [],
		i = "-" === a[0];
		for (g = i ? 1 : 0; g < a.length; g++) {
			var j = a[g].toLowerCase(),
			k = j.charCodeAt(0);
			if (k >= 48 && 57 >= k)
				h.push(N(j));
			else if (k >= 97 && 122 >= k)
				h.push(N(j.charCodeAt(0) - 87));
			else {
				if ("<" !== j)
					throw new Error(j + " is not a valid character");
				var l = g;
				do
					g++;
				while (">" !== a[g]);
				h.push(N(a.slice(l + 1, g)))
			}
		}
		for (h.reverse(), g = 0; g < h.length; g++)
			d = d.add(h[g].times(e)), e = e.times(b);
		return i ? d.negate() : d
	};
	b.prototype.toString = function (b) {
		if (b === a && (b = 10), 10 !== b)
			return K(this, b);
		for (var c, d = this.value, e = d.length, f = String(d[--e]), g = "0000000"; --e >= 0; )
			c = String(d[e]), f += g.slice(c.length) + c;
		var h = this.sign ? "-" : "";
		return h + f
	},
	c.prototype.toString = function (b) {
		return b === a && (b = 10),
		10 != b ? K(this, b) : String(this.value)
	},
	b.prototype.valueOf = function () {
		return +this.toString()
	},
	b.prototype.toJSNumber = b.prototype.valueOf,
	c.prototype.valueOf = function () {
		return this.value
	},
	c.prototype.toJSNumber = c.prototype.valueOf;
	for (var Z = function (a, b) {
		return "undefined" == typeof a ? Z[0] : "undefined" != typeof b ? 10 === +b ? N(a) : Y(a, b) : N(a)
	}, $ = 0; 1e3 > $; $++)
		Z[$] = new c($), $ > 0 && (Z[-$] = new c(-$));
	return Z.one = Z[1],
	Z.zero = Z[0],
	Z.minusOne = Z[-1],
	Z.max = E,
	Z.min = F,
	Z.gcd = G,
	Z.lcm = H,
	Z.isInstance = function (a) {
		return a instanceof b || a instanceof c
	},
	Z.randBetween = I,
	Z
}
();
"undefined" != typeof module && module.hasOwnProperty("exports") && (module.exports = bigInt);
var SteamIDConverter = {
	BASE_NUM : bigInt("76561197960265728"),
	REGEX_STEAMID64 : /^[0-9]{17}$/,
	REGEX_STEAMID : /^STEAM_[0-5]:[01]:\d+$/,
	REGEX_STEAMID3 : /^\[U:1:[0-9]+\]$/,
	toSteamID64 : function (a) {
		if (!a || "string" != typeof a)
			return !1;
		if (this.isSteamID3(a))
			a = this.fromSteamID3(a);
		else if (!this.isSteamID(a))
			throw new TypeError("Parameter must be a SteamID (e.g. STEAM_0:1:912783)");
		var b = a.split(":"),
		c = this.BASE_NUM,
		d = b[2],
		e = b[1];
		return d && e ? c.plus(2 * d).plus(e).toString() : !1
	},
	toSteamID : function (a) {
		if (!a || "string" != typeof a)
			return !1;
		if (this.isSteamID3(a))
			return this.fromSteamID3(a);
		if (!this.isSteamID64(a))
			throw new TypeError("Parameter must be a SteamID64 (e.g. 76561190000000000)");
		var b = this.BASE_NUM,
		c = bigInt(a),
		d = c.mod(2).toString();
		return c = c.minus(d).minus(b),
		1 > c ? !1 : "STEAM_0:" + d + ":" + c.divide(2).toString()
	},
	toSteamID3 : function (a) {
		if (!a || "string" != typeof a)
			return !1;
		this.isSteamID(a) || (a = this.toSteamID(a));
		var b = a.split(":");
		return "[U:1:" + (parseInt(b[1]) + 2 * parseInt(b[2])) + "]"
	},
	fromSteamID3 : function (a) {
		var b = a.split(":"),
		c = b[2].substring(0, b[2].length - 1);
		return "STEAM_0:" + c % 2 + ":" + Math.floor(c / 2)
	},
	isSteamID : function (a) {
		return a && "string" == typeof a ? this.REGEX_STEAMID.test(a) : !1
	},
	isSteamID64 : function (a) {
		return a && "string" == typeof a ? this.REGEX_STEAMID64.test(a) : !1
	},
	isSteamID3 : function (a) {
		return a && "string" == typeof a ? this.REGEX_STEAMID3.test(a) : !1
	},
	profileURL : function (a) {
		return this.isSteamID64(a) || (a = this.toSteamID64(a)),
		"http://steamcommunity.com/profiles/" + a
	}
};
!function (a, b) {
	"object" == typeof exports && exports ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : (a.Mustache = {}, b(Mustache))
}
(this, function (a) {
	function b(a) {
		return "function" == typeof a
	}
	function c(a) {
		return p(a) ? "array" : typeof a
	}
	function d(a) {
		return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
	}
	function e(a, b) {
		return null != a && "object" == typeof a && b in a
	}
	function f(a, b) {
		return q.call(a, b)
	}
	function g(a) {
		return !f(r, a)
	}
	function h(a) {
		return String(a).replace(/[&<>"'\/]/g, function (a) {
			return s[a]
		})
	}
	function i(b, c) {
		function e() {
			if (r && !s)
				for (; q.length; )
					delete o[q.pop()];
			else
				q = [];
			r = !1,
			s = !1
		}
		function f(a) {
			if ("string" == typeof a && (a = a.split(u, 2)), !p(a) || 2 !== a.length)
				throw new Error("Invalid tags: " + a);
			h = new RegExp(d(a[0]) + "\\s*"),
			i = new RegExp("\\s*" + d(a[1])),
			m = new RegExp("\\s*" + d("}" + a[1]))
		}
		if (!b)
			return [];
		var h,
		i,
		m,
		n = [],
		o = [],
		q = [],
		r = !1,
		s = !1;
		f(c || a.tags);
		for (var y, z, A, B, C, D, E = new l(b); !E.eos(); ) {
			if (y = E.pos, A = E.scanUntil(h))
				for (var F = 0, G = A.length; G > F; ++F)
					B = A.charAt(F), g(B) ? q.push(o.length) : s = !0, o.push(["text", B, y, y + 1]), y += 1, "\n" === B && e();
			if (!E.scan(h))
				break;
			if (r = !0, z = E.scan(x) || "name", E.scan(t), "=" === z ? (A = E.scanUntil(v), E.scan(v), E.scanUntil(i)) : "{" === z ? (A = E.scanUntil(m), E.scan(w), E.scanUntil(i), z = "&") : A = E.scanUntil(i), !E.scan(i))
				throw new Error("Unclosed tag at " + E.pos);
			if (C = [z, A, y, E.pos], o.push(C), "#" === z || "^" === z)
				n.push(C);
			else if ("/" === z) {
				if (D = n.pop(), !D)
					throw new Error('Unopened section "' + A + '" at ' + y);
				if (D[1] !== A)
					throw new Error('Unclosed section "' + D[1] + '" at ' + y)
			} else
				"name" === z || "{" === z || "&" === z ? s = !0 : "=" === z && f(A)
		}
		if (D = n.pop())
			throw new Error('Unclosed section "' + D[1] + '" at ' + E.pos);
		return k(j(o))
	}
	function j(a) {
		for (var b, c, d = [], e = 0, f = a.length; f > e; ++e)
			b = a[e], b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (d.push(b), c = b));
		return d
	}
	function k(a) {
		for (var b, c, d = [], e = d, f = [], g = 0, h = a.length; h > g; ++g)
			switch (b = a[g], b[0]) {
			case "#":
			case "^":
				e.push(b),
				f.push(b),
				e = b[4] = [];
				break;
			case "/":
				c = f.pop(),
				c[5] = b[2],
				e = f.length > 0 ? f[f.length - 1][4] : d;
				break;
			default:
				e.push(b)
			}
		return d
	}
	function l(a) {
		this.string = a,
		this.tail = a,
		this.pos = 0
	}
	function m(a, b) {
		this.view = a,
		this.cache = {
			"." : this.view
		},
		this.parent = b
	}
	function n() {
		this.cache = {}

	}
	var o = Object.prototype.toString,
	p = Array.isArray || function (a) {
		return "[object Array]" === o.call(a)
	},
	q = RegExp.prototype.test,
	r = /\S/,
	s = {
		"&" : "&amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'"' : "&quot;",
		"'" : "&#39;",
		"/" : "&#x2F;"
	},
	t = /\s*/,
	u = /\s+/,
	v = /\s*=/,
	w = /\s*\}/,
	x = /#|\^|\/|>|\{|&|=|!/;
	l.prototype.eos = function () {
		return "" === this.tail
	},
	l.prototype.scan = function (a) {
		var b = this.tail.match(a);
		if (!b || 0 !== b.index)
			return "";
		var c = b[0];
		return this.tail = this.tail.substring(c.length),
		this.pos += c.length,
		c
	},
	l.prototype.scanUntil = function (a) {
		var b,
		c = this.tail.search(a);
		switch (c) {
		case -1:
			b = this.tail,
			this.tail = "";
			break;
		case 0:
			b = "";
			break;
		default:
			b = this.tail.substring(0, c),
			this.tail = this.tail.substring(c)
		}
		return this.pos += b.length,
		b
	},
	m.prototype.push = function (a) {
		return new m(a, this)
	},
	m.prototype.lookup = function (a) {
		var c,
		d = this.cache;
		if (d.hasOwnProperty(a))
			c = d[a];
		else {
			for (var f, g, h = this, i = !1; h; ) {
				if (a.indexOf(".") > 0)
					for (c = h.view, f = a.split("."), g = 0; null != c && g < f.length; )
						g === f.length - 1 && (i = e(c, f[g])), c = c[f[g++]];
				else
					c = h.view[a], i = e(h.view, a);
				if (i)
					break;
				h = h.parent
			}
			d[a] = c
		}
		return b(c) && (c = c.call(this.view)),
		c
	},
	n.prototype.clearCache = function () {
		this.cache = {}

	},
	n.prototype.parse = function (a, b) {
		var c = this.cache,
		d = c[a];
		return null == d && (d = c[a] = i(a, b)),
		d
	},
	n.prototype.render = function (a, b, c) {
		var d = this.parse(a),
		e = b instanceof m ? b : new m(b);
		return this.renderTokens(d, e, c, a)
	},
	n.prototype.renderTokens = function (a, b, c, d) {
		for (var e, f, g, h = "", i = 0, j = a.length; j > i; ++i)
			g = void 0, e = a[i], f = e[0], "#" === f ? g = this.renderSection(e, b, c, d) : "^" === f ? g = this.renderInverted(e, b, c, d) : ">" === f ? g = this.renderPartial(e, b, c, d) : "&" === f ? g = this.unescapedValue(e, b) : "name" === f ? g = this.escapedValue(e, b) : "text" === f && (g = this.rawValue(e)), void 0 !== g && (h += g);
		return h
	},
	n.prototype.renderSection = function (a, c, d, e) {
		function f(a) {
			return g.render(a, c, d)
		}
		var g = this,
		h = "",
		i = c.lookup(a[1]);
		if (i) {
			if (p(i))
				for (var j = 0, k = i.length; k > j; ++j)
					h += this.renderTokens(a[4], c.push(i[j]), d, e);
			else if ("object" == typeof i || "string" == typeof i || "number" == typeof i)
				h += this.renderTokens(a[4], c.push(i), d, e);
			else if (b(i)) {
				if ("string" != typeof e)
					throw new Error("Cannot use higher-order sections without the original template");
				i = i.call(c.view, e.slice(a[3], a[5]), f),
				null != i && (h += i)
			} else
				h += this.renderTokens(a[4], c, d, e);
			return h
		}
	},
	n.prototype.renderInverted = function (a, b, c, d) {
		var e = b.lookup(a[1]);
		return !e || p(e) && 0 === e.length ? this.renderTokens(a[4], b, c, d) : void 0
	},
	n.prototype.renderPartial = function (a, c, d) {
		if (d) {
			var e = b(d) ? d(a[1]) : d[a[1]];
			return null != e ? this.renderTokens(this.parse(e), c, d, e) : void 0
		}
	},
	n.prototype.unescapedValue = function (a, b) {
		var c = b.lookup(a[1]);
		return null != c ? c : void 0
	},
	n.prototype.escapedValue = function (b, c) {
		var d = c.lookup(b[1]);
		return null != d ? a.escape(d) : void 0
	},
	n.prototype.rawValue = function (a) {
		return a[1]
	},
	a.name = "mustache.js",
	a.version = "2.1.2",
	a.tags = ["{{", "}}"];
	var y = new n;
	a.clearCache = function () {
		return y.clearCache()
	},
	a.parse = function (a, b) {
		return y.parse(a, b)
	},
	a.render = function (a, b, d) {
		if ("string" != typeof a)
			throw new TypeError('Invalid template! Template should be a "string" but "' + c(a) + '" was given as the first argument for mustache#render(template, view, partials)');
		return y.render(a, b, d)
	},
	a.to_html = function (c, d, e, f) {
		var g = a.render(c, d, e);
		return b(f) ? void f(g) : g
	},
	a.escape = h,
	a.Scanner = l,
	a.Context = m,
	a.Writer = n
}), function () {
	function a(a) {
		this._value = a
	}
	function b(a, b, c, d) {
		var e,
		f,
		g = Math.pow(10, b);
		return f = (c(a * g) / g).toFixed(b),
		d && (e = new RegExp("0{1," + d + "}$"), f = f.replace(e, "")),
		f
	}
	function c(a, b, c) {
		var d;
		return d = b.indexOf("$") > -1 ? e(a, b, c) : b.indexOf("%") > -1 ? f(a, b, c) : b.indexOf(":") > -1 ? g(a, b) : i(a._value, b, c)
	}
	function d(a, b) {
		var c,
		d,
		e,
		f,
		g,
		i = b,
		j = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
		k = !1;
		if (b.indexOf(":") > -1)
			a._value = h(b);
		else if (b === q)
			a._value = 0;
		else {
			for ("." !== o[p].delimiters.decimal && (b = b.replace(/\./g, "").replace(o[p].delimiters.decimal, ".")), c = new RegExp("[^a-zA-Z]" + o[p].abbreviations.thousand + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), d = new RegExp("[^a-zA-Z]" + o[p].abbreviations.million + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), e = new RegExp("[^a-zA-Z]" + o[p].abbreviations.billion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), f = new RegExp("[^a-zA-Z]" + o[p].abbreviations.trillion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), g = 0; g <= j.length && !(k = b.indexOf(j[g]) > -1 ? Math.pow(1024, g + 1) : !1); g++);
			a._value = (k ? k : 1) * (i.match(c) ? Math.pow(10, 3) : 1) * (i.match(d) ? Math.pow(10, 6) : 1) * (i.match(e) ? Math.pow(10, 9) : 1) * (i.match(f) ? Math.pow(10, 12) : 1) * (b.indexOf("%") > -1 ? .01 : 1) * ((b.split("-").length + Math.min(b.split("(").length - 1, b.split(")").length - 1)) % 2 ? 1 : -1) * Number(b.replace(/[^0-9\.]+/g, "")),
			a._value = k ? Math.ceil(a._value) : a._value
		}
		return a._value
	}
	function e(a, b, c) {
		var d,
		e,
		f = b.indexOf("$"),
		g = b.indexOf("("),
		h = b.indexOf("-"),
		j = "";
		return b.indexOf(" $") > -1 ? (j = " ", b = b.replace(" $", "")) : b.indexOf("$ ") > -1 ? (j = " ", b = b.replace("$ ", "")) : b = b.replace("$", ""),
		e = i(a._value, b, c),
		1 >= f ? e.indexOf("(") > -1 || e.indexOf("-") > -1 ? (e = e.split(""), d = 1, (g > f || h > f) && (d = 0), e.splice(d, 0, o[p].currency.symbol + j), e = e.join("")) : e = o[p].currency.symbol + j + e : e.indexOf(")") > -1 ? (e = e.split(""), e.splice(-1, 0, j + o[p].currency.symbol), e = e.join("")) : e = e + j + o[p].currency.symbol,
		e
	}
	function f(a, b, c) {
		var d,
		e = "",
		f = 100 * a._value;
		return b.indexOf(" %") > -1 ? (e = " ", b = b.replace(" %", "")) : b = b.replace("%", ""),
		d = i(f, b, c),
		d.indexOf(")") > -1 ? (d = d.split(""), d.splice(-1, 0, e + "%"), d = d.join("")) : d = d + e + "%",
		d
	}
	function g(a) {
		var b = Math.floor(a._value / 60 / 60),
		c = Math.floor((a._value - 60 * b * 60) / 60),
		d = Math.round(a._value - 60 * b * 60 - 60 * c);
		return b + ":" + (10 > c ? "0" + c : c) + ":" + (10 > d ? "0" + d : d)
	}
	function h(a) {
		var b = a.split(":"),
		c = 0;
		return 3 === b.length ? (c += 60 * Number(b[0]) * 60, c += 60 * Number(b[1]), c += Number(b[2])) : 2 === b.length && (c += 60 * Number(b[0]), c += Number(b[1])),
		Number(c)
	}
	function i(a, c, d) {
		var e,
		f,
		g,
		h,
		i,
		j,
		k = !1,
		l = !1,
		m = !1,
		n = "",
		r = !1,
		s = !1,
		t = !1,
		u = !1,
		v = !1,
		w = "",
		x = "",
		y = Math.abs(a),
		z = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
		A = "",
		B = !1;
		if (0 === a && null !== q)
			return q;
		if (c.indexOf("(") > -1 ? (k = !0, c = c.slice(1, -1)) : c.indexOf("+") > -1 && (l = !0, c = c.replace(/\+/g, "")), c.indexOf("a") > -1 && (r = c.indexOf("aK") >= 0, s = c.indexOf("aM") >= 0, t = c.indexOf("aB") >= 0, u = c.indexOf("aT") >= 0, v = r || s || t || u, c.indexOf(" a") > -1 ? (n = " ", c = c.replace(" a", "")) : c = c.replace("a", ""), y >= Math.pow(10, 12) && !v || u ? (n += o[p].abbreviations.trillion, a /= Math.pow(10, 12)) : y < Math.pow(10, 12) && y >= Math.pow(10, 9) && !v || t ? (n += o[p].abbreviations.billion, a /= Math.pow(10, 9)) : y < Math.pow(10, 9) && y >= Math.pow(10, 6) && !v || s ? (n += o[p].abbreviations.million, a /= Math.pow(10, 6)) : (y < Math.pow(10, 6) && y >= Math.pow(10, 3) && !v || r) && (n += o[p].abbreviations.thousand, a /= Math.pow(10, 3))), c.indexOf("b") > -1)
			for (c.indexOf(" b") > -1 ? (w = " ", c = c.replace(" b", "")) : c = c.replace("b", ""), g = 0; g <= z.length; g++)
				if (e = Math.pow(1024, g), f = Math.pow(1024, g + 1), a >= e && f > a) {
					w += z[g],
					e > 0 && (a /= e);
					break
				}
		return c.indexOf("o") > -1 && (c.indexOf(" o") > -1 ? (x = " ", c = c.replace(" o", "")) : c = c.replace("o", ""), x += o[p].ordinal(a)),
		c.indexOf("[.]") > -1 && (m = !0, c = c.replace("[.]", ".")),
		h = a.toString().split(".")[0],
		i = c.split(".")[1],
		j = c.indexOf(","),
		i ? (i.indexOf("[") > -1 ? (i = i.replace("]", ""), i = i.split("["), A = b(a, i[0].length + i[1].length, d, i[1].length)) : A = b(a, i.length, d), h = A.split(".")[0], A = A.split(".")[1].length ? o[p].delimiters.decimal + A.split(".")[1] : "", m && 0 === Number(A.slice(1)) && (A = "")) : h = b(a, null, d),
		h.indexOf("-") > -1 && (h = h.slice(1), B = !0),
		j > -1 && (h = h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o[p].delimiters.thousands)),
		0 === c.indexOf(".") && (h = ""),
		(k && B ? "(" : "") + (!k && B ? "-" : "") + (!B && l ? "+" : "") + h + A + (x ? x : "") + (n ? n : "") + (w ? w : "") + (k && B ? ")" : "")
	}
	function j(a, b) {
		o[a] = b
	}
	function k(a) {
		var b = a.toString().split(".");
		return b.length < 2 ? 1 : Math.pow(10, b[1].length)
	}
	function l() {
		var a = Array.prototype.slice.call(arguments);
		return a.reduce(function (a, b) {
			var c = k(a),
			d = k(b);
			return c > d ? c : d
		},  - (1 / 0))
	}
	var m,
	n = "1.5.3",
	o = {},
	p = "en",
	q = null,
	r = "0,0",
	s = "undefined" != typeof module && module.exports;
	m = function (b) {
		return m.isNumeral(b) ? b = b.value() : 0 === b || "undefined" == typeof b ? b = 0 : Number(b) || (b = m.fn.unformat(b)),
		new a(Number(b))
	},
	m.version = n,
	m.isNumeral = function (b) {
		return b instanceof a
	},
	m.language = function (a, b) {
		if (!a)
			return p;
		if (a && !b) {
			if (!o[a])
				throw new Error("Unknown language : " + a);
			p = a
		}
		return (b || !o[a]) && j(a, b),
		m
	},
	m.languageData = function (a) {
		if (!a)
			return o[p];
		if (!o[a])
			throw new Error("Unknown language : " + a);
		return o[a]
	},
	m.language("en", {
		delimiters : {
			thousands : ",",
			decimal : "."
		},
		abbreviations : {
			thousand : "k",
			million : "m",
			billion : "b",
			trillion : "t"
		},
		ordinal : function (a) {
			var b = a % 10;
			return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"
		},
		currency : {
			symbol : "$"
		}
	}),
	m.zeroFormat = function (a) {
		q = "string" == typeof a ? a : null
	},
	m.defaultFormat = function (a) {
		r = "string" == typeof a ? a : "0.0"
	},
	"function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (a, b) {
		"use strict";
		if (null === this || "undefined" == typeof this)
			throw new TypeError("Array.prototype.reduce called on null or undefined");
		if ("function" != typeof a)
			throw new TypeError(a + " is not a function");
		var c,
		d,
		e = this.length >>> 0,
		f = !1;
		for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c)
			this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0));
		if (!f)
			throw new TypeError("Reduce of empty array with no initial value");
		return d
	}),
	m.fn = a.prototype = {
		clone : function () {
			return m(this)
		},
		format : function (a, b) {
			return c(this, a ? a : r, void 0 !== b ? b : Math.round)
		},
		unformat : function (a) {
			return "[object Number]" === Object.prototype.toString.call(a) ? a : d(this, a ? a : r)
		},
		value : function () {
			return this._value
		},
		valueOf : function () {
			return this._value
		},
		set : function (a) {
			return this._value = Number(a),
			this
		},
		add : function (a) {
			function b(a, b) {
				return a + c * b
			}
			var c = l.call(null, this._value, a);
			return this._value = [this._value, a].reduce(b, 0) / c,
			this
		},
		subtract : function (a) {
			function b(a, b) {
				return a - c * b
			}
			var c = l.call(null, this._value, a);
			return this._value = [a].reduce(b, this._value * c) / c,
			this
		},
		multiply : function (a) {
			function b(a, b) {
				var c = l(a, b);
				return a * c * b * c / (c * c)
			}
			return this._value = [this._value, a].reduce(b, 1),
			this
		},
		divide : function (a) {
			function b(a, b) {
				var c = l(a, b);
				return a * c / (b * c)
			}
			return this._value = [this._value, a].reduce(b),
			this
		},
		difference : function (a) {
			return Math.abs(m(this._value).subtract(a).value())
		}
	},
	s && (module.exports = m),
	"undefined" == typeof ender && (this.numeral = m),
	"function" == typeof define && define.amd && define([], function () {
		return m
	})
}
.call(this);