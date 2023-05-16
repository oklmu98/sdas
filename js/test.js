(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		5557: function(a, b, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return c(550)
			}])
		},
		6587: function(c, b, a) {
			"use strict";
			a.d(b, {
				Z: function() {
					return e
				}
			});
			var d = a(5893);

			function e(e) {
				var f = e.changeType,
					a = "from-blue-600 to-blue-400",
					c = f.toString().toLowerCase(),
					b = "New";
				"i" == c ? (a = "from-green-700 to-green-500", b = "Improved") : "f" == c ? (a = "from-yellow-600 to-yellow-400", b = "Fixed") : "r" == c && (a = "from-red-600 to-red-400", b = "Removed");
				var g = "".concat(a, " bg-gradient-to-br px-3 py-1 rounded-xl text-gray-100 tracking-tighter font-extrabold uppercase text-xs md:text-sm 2xl:text-base");
				return (0, d.jsx)("div", {
					className: g,
					children: b
				})
			}
		},
		1766: function(c, b, a) {
			"use strict";
			a.d(b, {
				Z: function() {
					return e
				}
			});
			var d = a(5893);

			function e(a) {
				var b = a.children,
					c = a.cn;
				return (0, d.jsx)("div", {
					className: "flex flex-col items-center w-full h-full min-h-screen py-20 ".concat(c || ""),
					children: b
				})
			}
		},
		2751: function(h, b, a) {
			"use strict";
			a.d(b, {
				Z: function() {
					return o
				}
			});
			var c, d = a(7568),
				e = a(4051),
				f = a.n(e),
				i = a(5893),
				g = a(9008),
				j = a.n(g),
				k = a(6925),
				l = a(7294),
				m = a(3299),
				n = (c = (0, d.Z)(f().mark(function a(b) {
					var c, d;
					return f().wrap(function(a) {
						for (;;) switch (a.prev = a.next) {
							case 0:
								if (a.prev = 0, null !== localStorage.getItem("hasConfig")) {
									a.next = 9;
									break
								}
								return a.next = 4, fetch("/api/config/get", {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify({
										email: b
									})
								});
							case 4:
								return c = a.sent, a.next = 7, c.json();
							case 7:
								d = a.sent, 200 === c.status && d.success ? (void 0 !== d.config.tabName && localStorage.setItem("title", d.config.tabName), void 0 !== d.config.icon && localStorage.setItem("icon", d.config.icon), localStorage.setItem("hasConfig", !0), console.log("Config loaded successfully")) : localStorage.setItem("hasConfig", !1);
							case 9:
								a.next = 14;
								break;
							case 11:
								a.prev = 11, a.t0 = a.catch(0), console.log("Error:", a.t0);
							case 14:
							case "end":
								return a.stop()
						}
					}, a, null, [
						[0, 11]
					])
				})), function(a) {
					return c.apply(this, arguments)
				});

			function o(o) {
				var a = o.title,
					d = (0, m.useSession)(),
					p = d.data,
					q = d.status,
					e = (0, l.useState)(""),
					b = e[0],
					r = e[1],
					f = (0, l.useState)(""),
					c = f[0],
					s = f[1],
					g = (0, l.useState)(""),
					h = g[0],
					t = g[1];
				return (0, l.useEffect)(function() {
					r(window.location.hostname.replace("www", "https://www"))
				}, []), (0, l.useEffect)(function() {
					"authenticated" === q && (null === localStorage.getItem("hasConfig") ? n(p.user.email).then(function() {
						null !== localStorage.getItem("icon") && (s(localStorage.getItem("icon")), document.querySelectorAll("link[rel=icon]").forEach(function(a) {
							return a.href = c
						})), null !== localStorage.getItem("title") && t(localStorage.getItem("title"))
					}) : "true" === localStorage.getItem("hasConfig") && (null !== localStorage.getItem("icon") && s(localStorage.getItem("icon")), null !== localStorage.getItem("title") && t(localStorage.getItem("title"))))
				}, [q, c, h, p]), (0, i.jsx)(i.Fragment, {
					children: (0, i.jsxs)(j(), {
						children: [(0, i.jsx)("title", {
							children: h || (a ? "".concat(a, " | ").concat(k.Z.title) : k.Z.title)
						}), (0, i.jsx)("link", {
							rel: "apple-touch-icon",
							sizes: "180x180",
							href: "/favicon/apple-touch-icon.png",
							id: "icon"
						}), (0, i.jsx)("link", {
							rel: "icon",
							type: "image/png",
							sizes: "32x32",
							href: c || "/favicon/favicon-32x32.png",
							id: "icon"
						}), (0, i.jsx)("link", {
							rel: "icon",
							type: "image/png",
							sizes: "16x16",
							href: c || "/favicon/favicon-16x16.png",
							id: "icon"
						}), (0, i.jsx)("link", {
							rel: "manifest",
							href: "/favicon/site.webmanifest"
						}), (0, i.jsx)("meta", {
							name: "viewport",
							content: "initial-scale=1.0, width=device-width"
						}), (0, i.jsx)("meta", {
							name: "title",
							content: a ? "".concat(a, " | ").concat(k.Z.title) : k.Z.title
						}), (0, i.jsx)("meta", {
							name: "theme-color",
							content: k.Z.themeColor
						}), (0, i.jsx)("meta", {
							name: "description",
							content: k.Z.desc
						}), (0, i.jsx)("meta", {
							property: "og:type",
							content: "website"
						}), (0, i.jsx)("meta", {
							property: "og:url",
							content: b
						}), (0, i.jsx)("meta", {
							property: "og:title",
							content: a ? "".concat(a, " | ").concat(k.Z.title) : k.Z.title
						}), (0, i.jsx)("meta", {
							property: "og:description",
							content: k.Z.desc
						}), (0, i.jsx)("meta", {
							property: "og:image",
							content: "".concat(b, "/img/preview.png")
						}), (0, i.jsx)("meta", {
							property: "twitter:card",
							content: "summary_large_image"
						}), (0, i.jsx)("meta", {
							property: "twitter:url",
							content: b
						}), (0, i.jsx)("meta", {
							property: "twitter:title",
							content: a ? "".concat(a, " | ").concat(k.Z.title) : k.Z.title
						}), (0, i.jsx)("meta", {
							property: "twitter:description",
							content: k.Z.desc
						}), (0, i.jsx)("meta", {
							property: "twitter:image",
							content: "".concat(b, "/img/preview.png")
						}), (0, i.jsx)("meta", {
							charset: "UTF-8"
						})]
					})
				})
			}
		},
		550: function(i, c, a) {
			"use strict";
			a.r(c), a.d(c, {
				default: function() {
					return O
				}
			});
			var j = a(5893),
				e = a(1664),
				k = a.n(e);

			function l(a) {
				var b = a.children,
					c = a.cn;
				return (0, j.jsx)(j.Fragment, {
					children: (0, j.jsx)("div", {
						className: "flex flex-col w-full min-h-screen h-auto lg:min-h-0 lg:h-[80vh] py-20 ".concat(c),
						children: b
					})
				})
			}
			var m = a(1766),
				n = a(3510),
				o = a(3025),
				p = a(6587),
				f = a(7484),
				d = a.n(f);

			function q() {
				var b = d()(o.V[0].date),
					a = o.V[0].changes,
					c = o.V[0].games,
					e = n.Z.filter(function(a) {
						return c.includes(a.name)
					}).reverse();
				return (0, j.jsxs)("div", {
					className: "flex flex-col gap-y-6",
					children: [(0, j.jsxs)("div", {
						className: "flex flex-col gap-y-2",
						children: [(0, j.jsx)("h1", {
							className: "text-black dark:text-white text-2xl md:text-3xl 2xl:text-4xl tracking-tighter font-bold text-start",
							children: "Version ".concat(o.V[0].version)
						}), (0, j.jsx)("div", {
							className: "flex flex-col",
							children: (0, j.jsx)("h2", {
								className: "text-gray-900 dark:text-gray-300 text-lg md:text-xl 2xl:text-2xl tracking-tighter font-semibold text-start",
								children: b.format("dddd, MMMM D, YYYY")
							})
						})]
					}), (0, j.jsxs)("div", {
						className: "flex flex-col gap-y-6",
						children: [void 0 !== a && a.map(function(a, b) {
							var c = a.label,
								d = a.detail;
							return (0, j.jsxs)("div", {
								className: "flex flex-row gap-x-2 2xl:gap-x-3 items-center",
								children: [(0, j.jsx)(p.Z, {
									changeType: c
								}), (0, j.jsx)("p", {
									className: "text-gray-900 dark:text-gray-300 text-sm md:text-base 2xl:text-lg tracking-tighter font-semibold",
									children: d
								})]
							}, b)
						}), void 0 !== c && e.map(function(a) {
							return (0, j.jsxs)("div", {
								className: "flex flex-row gap-x-2 2xl:gap-x-3 items-center",
								children: [(0, j.jsx)(p.Z, {
									changeType: "n"
								}), (0, j.jsxs)("p", {
									className: "text-gray-900 dark:text-gray-300 text-sm md:text-base 2xl:text-lg tracking-tighter font-semibold",
									children: ["Added ", a.name]
								})]
							}, a.name)
						})]
					})]
				})
			}
			a(5054), d().locale("en"), d()().format();
			var r = [{
					name: "Radon Games",
					blurb: "Radon games has over 250 Flash, HTML, and WebGl unblocked games for you to play for free!",
					link: "radon.games",
					image: "radon.png"
				}, {
					name: "Aerial",
					blurb: "Aerial is creating a brand new game-changing experience in the online game industry. Check us out and have a great time on the site!",
					link: "www.newaerial.net",
					image: "aerial.png"
				}, {
					name: "IR unblocked",
					blurb: "IRunblocked has tons of unblocked games, scripts, movies, and more cool things you can explore!",
					link: "irunblocked.xyz",
					image: "irunblocked.png"
				}, {
					name: "Kazwire",
					blurb: "From the gaming classics to the internet, access YouTube, TikTok, and even your favorite games freely and securely.",
					link: "kazwire.com",
					image: "kazwire.png"
				}, {
					name: "PhantomGames",
					blurb: "Where simplicity and unblocked fun collide!",
					link: "phantom.delusionz.xyz",
					image: "phantomgames.png"
				}, {
					name: "This could be you!",
					blurb: "We're open to new partners! If you're interested in becoming a partner and get featured here, join our Discord for more info.",
					link: "discord.gg/yXJgyuByYZ",
					image: "partner.gif"
				}, ],
				g = a(5675),
				s = a.n(g),
				t = a(162);

			function u() {
				return (0, j.jsx)("div", {
					className: "w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
					children: r.map(function(a, b) {
						return (0, j.jsx)("a", {
							href: "https://".concat(a.link),
							target: "_blank",
							rel: "noreferrer",
							children: (0, j.jsxs)("div", {
								className: "relative w-full h-72 shadow-lg shadow-gray-600 dark:shadow-gray-900 rounded-xl overflow-hidden hover:translate-y-[-0.125rem] transition-[3s] ease-linear cursor-pointer",
								children: [(0, j.jsx)(t.Z, {}), (0, j.jsx)(s(), {
									alt: "WebLFG Partner ".concat(a.name),
									src: "/img/partners/".concat(a.image),
									title: "WebLFG Partner ".concat(a.name),
									layout: "fill",
									objectFit: "cover",
									objectPosition: "center center",
									draggable: "false"
								}), (0, j.jsx)("div", {
									className: "bg-gradient-to-b from-transparent to-gray-900 absolute inset-0",
									children: (0, j.jsxs)("div", {
										className: "absolute bottom-0 p-4",
										children: [(0, j.jsx)("h1", {
											className: "text-lg text-white md:text-xl 2xl:text-2xl font-extrabold tracking-tight",
											children: a.name
										}), (0, j.jsx)("h2", {
											className: "text-xs text-gray-300 md:text-sm 2xl:text-base font-normal tracking-tighter 2xl:leading-6",
											children: a.blurb
										})]
									})
								}), (0, j.jsx)("div", {
									className: "absolute inset-0 w-full h-full border-transparent border-[3px] hover:border-primary rounded-xl ease-linear transition"
								})]
							})
						}, b)
					})
				})
			}
			var v = a(2751),
				w = a(9815),
				x = a(7294),
				y = a(6010),
				z = a(7037),
				A = [{
					title: "WebLFG is an incredible place to de-stress and have fun",
					author: "sir hype",
					body: "My friends and I absolutely love this site. It's a great site with an even better community.",
					rating: 5
				}, {
					title: "WebLFG is a great website to play your favorite games",
					author: "W1nter",
					body: "It is very easy to play any game you want, especially if you join the Discord server. Owner is very active and bugs are fixed very fast!",
					rating: 5
				}, {
					title: "WebLFG is one of my favorite sites to visit",
					author: "Ducxify",
					body: "When I'm bored I go on WebLFG because there's frequent updates so it never runs out of games to play. Whether you like FPS, rhythm, or strategy games, WebLFG has it all.",
					rating: 5
				}, {
					title: "WebLFG is one of my favorite websites to use",
					author: "BECKIRAM",
					body: "Whenever I am bored at school, I use WebLFG. It has some of the best games like the Pokemon Series and Retro Bowl (personal favorite). Recommend it to anyone that faces the same boredom that I do at school!",
					rating: 5
				}, {
					title: "This website is the go to when bored in school",
					author: "Tacocat",
					body: "I've been using it for a while and personally recommend minesweeper :)",
					rating: 5
				}, {
					title: "WebLFG is a great place to add a little more fun to your day",
					author: "Alpha",
					body: "This website provides a vast variety of games and receives constant updates and improvements, so any bugs or issues get fixed immediately. Make sure to try out WebLFG today!",
					rating: 5
				}, {
					title: "WebLFG offers so many diverse games",
					author: "Flamesawoken",
					body: "I use WebLFG everyday when I'm in school because of its diverse games that it offers. The website design is simple but nice and it is very easy to use. I would 10/10 recommend this website to those who are looking for fun.",
					rating: 5
				}, {
					title: "Real talk WebLFG is such a good website",
					author: "Locklyn",
					body: "They listen to their community about what games people want. As someone whos suggested games for this website is super nice as I can play the games I want at school.",
					rating: 5
				}, {
					title: "WebLFG is a great site",
					author: "uwaaa",
					body: "WebLFG is a great site to come to when you have some extra time to spare, and it has a large variety of games!! :>",
					rating: 5
				}, {
					title: "WebLFG is the best game website to play at school",
					author: "puffl",
					body: "You can play fun games such as Drift Hunters, Cookie Clicker, and even Super Mario 64! Make sure to have fun and not get caught!",
					rating: 5
				}, {
					title: "WebLFG is where you can have fun with your friends",
					author: "GS Jowell",
					body: "WebLFG is an unblocked game website where you and your friends can play and have fun. Me and my friends absolutely love this app and maybe you will too!",
					rating: 5
				}, {
					title: "This website is my go to for when I am stressed and bored",
					author: "vkwc",
					body: "The developers clearly listen to their community's input as they make great changes to the interface. From past experience, there is no website better than this as there are too many great aspects.",
					rating: 5
				}, ],
				B = a(1799),
				C = a(9396),
				D = a(9534);

			function E(a) {
				return (0, j.jsx)("svg", (0, C.Z)((0, B.Z)({
					viewBox: "0 0 20 20",
					"aria-hidden": "true"
				}, a), {
					children: (0, j.jsx)("path", {
						d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					})
				}))
			}

			function F(c) {
				for (var d = c.rating, b = [], a = 0; a < 5; a++) b.push((0, j.jsx)(E, {
					className: (0, y.Z)("h-5 w-5", d > a ? "fill-primary" : "fill-gray-300")
				}, a));
				return (0, j.jsx)("div", {
					className: "flex",
					children: b
				})
			}
			var G = a(6925);

			function H(a) {
				var b = a.title,
					c = a.body,
					d = a.author,
					e = a.rating,
					f = a.className,
					g = (0, D.Z)(a, ["title", "body", "author", "rating", "className"]),
					h = (0, x.useMemo)(function() {
						var a = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s", ];
						return a[Math.floor(Math.random() * a.length)]
					}, []);
				return (0, j.jsx)("figure", (0, C.Z)((0, B.Z)({
					className: (0, y.Z)("animate-fade-in rounded-3xl bg-gray-100 dark:bg-lighter p-6 opacity-0 shadow-lg shadow-gray-900/5 border-2 border-transparent hover:border-primary transition-colors ease-in-out duration-300", f),
					style: {
						animationDelay: h
					}
				}, g), {
					children: (0, j.jsxs)("a", {
						href: "https://discord.gg/".concat(G.Z.discord),
						target: "_blank",
						rel: "noreferrer",
						children: [(0, j.jsxs)("blockquote", {
							className: "text-gray-900 dark:text-gray-100",
							children: [(0, j.jsx)(F, {
								rating: e
							}), (0, j.jsxs)("p", {
								className: "mt-4 text-lg font-semibold leading-6 tracking-tight",
								children: ["\u201C", b, "\u201D"]
							}), (0, j.jsx)("p", {
								className: "mt-3 text-base leading-7 tracking-tight",
								children: c
							})]
						}), (0, j.jsxs)("figcaption", {
							className: "mt-3 text-sm tracking-tight text-gray-600 dark:text-gray-300 inline-flex gap-x-2 items-center",
							children: [(0, j.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								className: "w-6 h-auto inline-block",
								fill: "none",
								viewBox: "0 0 71 55",
								children: [(0, j.jsx)("g", {
									clipPath: "url(#clip0)",
									children: (0, j.jsx)("path", {
										className: "fill-[#5865F2]",
										d: "M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"
									})
								}), (0, j.jsx)("defs", {
									children: (0, j.jsx)("clipPath", {
										id: "clip0",
										children: (0, j.jsx)("path", {
											className: "fill-[#5865F2]",
											d: "M0 0H71V55H0z"
										})
									})
								})]
							}), d]
						})]
					})
				}))
			}

			function I(a) {
				var f = a.className,
					b = a.reviews,
					c = a.reviewClassName,
					k = void 0 === c ? function() {} : c,
					d = a.msPerPixel,
					g = (0, x.useRef)(),
					e = (0, x.useState)(0),
					h = e[0],
					l = e[1],
					i = "".concat(h * (void 0 === d ? 0 : d), "ms");
				return (0, x.useEffect)(function() {
					var a = new window.ResizeObserver(function() {
						l(g.current.offsetHeight)
					});
					return a.observe(g.current),
						function() {
							a.disconnect()
						}
				}, []), (0, j.jsx)("div", {
					ref: g,
					className: (0, y.Z)("animate-marquee space-y-8 py-4", f),
					style: {
						"--marquee-duration": i
					},
					children: b.concat(b).map(function(c, a) {
						return (0, j.jsx)(H, (0, B.Z)({
							"aria-hidden": a >= b.length,
							className: k(a % b.length)
						}, c), a)
					})
				})
			}

			function J(d, e) {
				for (var a = [], b = 0; b < d.length; b++) {
					var c = b % e;
					a[c] || (a[c] = []), a[c].push(d[b])
				}
				return a
			}

			function K() {
				var b = (0, x.useRef)(),
					c = (0, z.Y)(b, {
						once: !0,
						amount: .4
					}),
					a = J(A, 3);
				return a = [a[0], a[1], J(a[2], 2)], (0, j.jsxs)("div", {
					ref: b,
					className: "relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3",
					children: [c && (0, j.jsxs)(j.Fragment, {
						children: [(0, j.jsx)(I, {
							reviews: (0, w.Z)(a[0]).concat((0, w.Z)(a[2].flat()), (0, w.Z)(a[1])),
							reviewClassName: function(b) {
								return (0, y.Z)(b >= a[0].length + a[2][0].length && "md:hidden", b >= a[0].length && "lg:hidden")
							},
							msPerPixel: 10
						}), (0, j.jsx)(I, {
							reviews: (0, w.Z)(a[1]).concat((0, w.Z)(a[2][1])),
							className: "hidden md:block",
							reviewClassName: function(b) {
								return b >= a[1].length && "lg:hidden"
							},
							msPerPixel: 15
						}), (0, j.jsx)(I, {
							reviews: a[2].flat(),
							className: "hidden lg:block",
							msPerPixel: 10
						})]
					}), (0, j.jsx)("div", {
						className: "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-darker"
					}), (0, j.jsx)("div", {
						className: "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-darker"
					})]
				})
			}
			var h = a(5152),
				b = a.n(h),
				L = b()(function() {
					return a.e(759).then(a.bind(a, 759))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [759]
						}
					},
					ssr: !1
				}),
				M = b()(function() {
					return a.e(296).then(a.bind(a, 8296))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [8296]
						}
					},
					ssr: !1
				}),
				N = b()(function() {
					return a.e(308).then(a.bind(a, 5308))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [5308]
						}
					},
					ssr: !1
				});

			function O() {
				return (0, j.jsxs)(j.Fragment, {
					children: [(0, j.jsx)(v.Z, {}), (0, j.jsx)(l, {
						cn: "items-center justify-center",
						children: (0, j.jsxs)("div", {
							className: "flex flex-col lg:flex-row items-center gap-y-12 justify-center sm:px-5 pt-10 max-w-7xl",
							children: [(0, j.jsxs)("div", {
								className: "flex flex-col sm:items-center lg:items-start max-w-lg sm:max-w-2xl mx-auto px-5",
								children: [(0, j.jsx)("span", {
									className: "block w-full text-4xl sm:text-6xl font-extrabold tracking-tight text-left sm:text-center lg:text-left",
									children: "Free games"
								}), (0, j.jsx)("span", {
									className: "block w-full text-4xl sm:text-6xl font-extrabold tracking-tight text-primary pb-3 sm:pb-5 text-left sm:text-center lg:text-left",
									children: "all in one place"
								}), (0, j.jsx)("p", {
									className: "w-full text-base sm:text-xl lg:text-lg xl:text-xl text-gray-900 dark:text-gray-300 text-left sm:text-center pb-6 sm:pb-8 lg:text-left",
									children: "From internet classics to present-day favorites, it's online entertainment right at your fingertips."
								}), (0, j.jsx)(k(), {
									href: "/games",
									children: (0, j.jsx)("span", {
										className: "w-min whitespace-nowrap px-6 py-3 bg-primary text-white rounded-md font-semibold shadow-lg hover:bg-opacity-80 transition hover:translate-y-[-0.125rem] duration-200 cursor-pointer ease-linear",
										children: "Start Playing Now"
									})
								})]
							}), (0, j.jsx)(M, {})]
						})
					}), (0, j.jsx)(m.Z, {
						cn: "bg-gray-50 dark:bg-darker justify-center",
						children: (0, j.jsxs)("div", {
							className: "flex flex-col w-full max-w-7xl gap-y-12 2xl:gap-y-24 p-5 items-center",
							children: [(0, j.jsxs)("div", {
								className: "flex flex-col gap-y-2 sm:gap-y-4 text-center max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-none",
								children: [(0, j.jsx)("h1", {
									className: "text-4xl md:text-5xl 2xl:text-6xl tracking-tighter font-extrabold",
									children: "What is WebLFG?"
								}), (0, j.jsxs)("p", {
									className: "text-base md:text-lg 2xl:text-xl text-gray-900 dark:text-gray-300 leading-relaxed md:leading-loose tracking-tighter font-normal max-w-4xl",
									children: ["We know. You want games, we have them. A centralized hub for some of the most popular and promising games on the internet for completely free. Functioning as an archive, locked behind absolutely zero paywalls, it really doesn't get much better than this. Check out our collection of", " ", (0, j.jsx)("span", {
										className: "font-bold text-primary",
										children: n.Z.length
									}), " ", "games; the options are endless. What are you waiting for?"]
								})]
							}), (0, j.jsxs)("div", {
								className: "flex flex-col w-full gap-y-8 items-center",
								children: [(0, j.jsxs)("div", {
									className: "flex flex-col gap-y-2",
									children: [(0, j.jsx)("h1", {
										className: "text-4xl md:text-5xl 2xl:text-6xl tracking-tighter font-extrabold text-center",
										children: "Today's Picks"
									}), (0, j.jsx)(N, {})]
								}), (0, j.jsx)(L, {})]
							})]
						})
					}), (0, j.jsx)(m.Z, {
						cn: "bg-gray-100 dark:bg-dark justify-center",
						children: (0, j.jsxs)("div", {
							className: "flex flex-col w-full max-w-7xl gap-y-6 p-5 items-center",
							children: [(0, j.jsx)("h1", {
								className: "text-4xl md:text-5xl 2xl:text-6xl tracking-tighter font-extrabold text-center",
								children: "Latest Update"
							}), (0, j.jsx)(k(), {
								href: "/changelog",
								children: (0, j.jsx)("div", {
									className: "w-full h-full bg-gray-50 dark:bg-darker p-8 rounded-xl shadow-lg cursor-pointer",
									children: (0, j.jsx)(q, {})
								})
							})]
						})
					}), (0, j.jsx)(m.Z, {
						cn: "bg-gray-50 dark:bg-darker justify-center",
						children: (0, j.jsxs)("div", {
							className: "w-full h-full max-w-7xl p-5 flex flex-col gap-y-8 items-center",
							children: [(0, j.jsxs)("div", {
								className: "flex flex-col items-center gap-y-2",
								children: [(0, j.jsx)("h1", {
									className: "text-2xl md:text-3xl 2xl:text-4xl tracking-tighter font-extrabold text-center",
									children: "Not convinced?"
								}), (0, j.jsx)("h2", {
									className: "text-md md:text-lg 2xl:text-xl tracking-tighter text-center text-gray-400",
									children: "Here's what the community has to say about WebLFG"
								})]
							}), (0, j.jsx)(K, {})]
						})
					}), (0, j.jsx)(m.Z, {
						cn: "bg-gray-100 dark:bg-dark justify-center",
						children: (0, j.jsxs)("div", {
							className: "w-full h-full max-w-7xl p-5 flex flex-col gap-y-8 items-center",
							children: [(0, j.jsx)("h1", {
								className: "text-4xl md:text-5xl 2xl:text-6xl tracking-tighter font-extrabold text-center",
								children: "Our Partners"
							}), (0, j.jsx)(u, {})]
						})
					})]
				})
			}
		}
	},
	function(a) {
		a.O(0, [669, 500, 774, 888, 179], function() {
			var b;
			return a(a.s = 5557)
		}), _N_E = a.O()
	}
])