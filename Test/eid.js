https://hackernoon.com/how-to-use-javascript-libraries-in-angular-2-apps-ff274ba601af
https://www.jvandemo.com/how-to-properly-integrate-non-angularjs-libraries-in-your-angularjs-application/



function createCookie(a, b, c) {
    if (c) {
        var d = new Date;
        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
        var e = "; expires=" + d.toGMTString()
    } else var e = "";
    document.cookie = a + "=" + b + e + "; path=/"
}

function readCookie(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
            " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
    }
    return null
}

function removeCookie(a) {
    createCookie(a, "", -1)
}

function Queue() {
    var a = [],
        b = 0;
    this.getLength = function() {
        return a.length - b
    }, this.isEmpty = function() {
        return 0 == a.length
    }, this.enqueue = function(b) {
        a.push(b)
    }, this.dequeue = function() {
        if (0 != a.length) {
            var c = a[b];
            return 2 * ++b >= a.length && (a = a.slice(b), b = 0), c
        }
    }, this.peek = function() {
        return 0 < a.length ? a[b] : void 0
    }
}

function flattenRsa(a) {
    var b = {};
    return b.e = a.e, b.n = a.n.toString(16), b.p = a.p.toString(16), b.q = a.q.toString(16), b.d = a.d.toString(16), b.coeff = a.coeff.toString(16), b.dmp1 = a.dmp1.toString(16), b.dmq1 = a.dmq1.toString(16), b
}

function recoverRsa(a) {
    var b = new RSAKey;
    return b.e = a.e, b.n = new BigInteger(a.n, 16), b.p = new BigInteger(a.p, 16), b.q = new BigInteger(a.q, 16), b.d = new BigInteger(a.d, 16), b.coeff = new BigInteger(a.coeff, 16), b.dmp1 = new BigInteger(a.dmp1, 16), b.dmq1 = new BigInteger(a.dmq1, 16), b
}! function() {
    "use strict";

    function a() {
        var a, b, c, d = (m.appVersion, m.userAgent),
            e = m.appName,
            f = "" + parseFloat(m.appVersion),
            g = parseInt(m.appVersion, 10);
        if (p) {
            e = "Opera";
            try {
                f = m.userAgent.split("OPR/")[1].split(" ")[0], g = f.split(".")[0]
            } catch (h) {
                f = "0.0.0.0", g = 0
            }
        } else t ? (b = d.indexOf("MSIE"), e = "IE", f = d.substring(b + 5)) : s ? (b = d.indexOf("Chrome"), e = "Chrome", f = d.substring(b + 7)) : r ? (b = d.indexOf("Safari"), e = "Safari", f = d.substring(b + 7), -1 !== (b = d.indexOf("Version")) && (f = d.substring(b + 8))) : q ? (b = d.indexOf("Firefox"), e = "Firefox", f = d.substring(b + 8)) : (a = d.lastIndexOf(" ") + 1) < (b = d.lastIndexOf("/")) && (e = d.substring(a, b), f = d.substring(b + 1), e.toLowerCase() === e.toUpperCase() && (e = m.appName));
        return o && (e = "Edge", f = parseInt(m.userAgent.match(/Edge\/(\d+).(\d+)$/)[2], 10).toString()), -1 !== (c = f.indexOf(";")) && (f = f.substring(0, c)), -1 !== (c = f.indexOf(" ")) && (f = f.substring(0, c)), g = parseInt("" + f, 10), isNaN(g) && (f = "" + parseFloat(m.appVersion), g = parseInt(m.appVersion, 10)), {
            fullVersion: f,
            version: g,
            name: e,
            isPrivateBrowsing: !1
        }
    }

    function b(a, b) {
        var c = 0,
            d = 50,
            e = !1,
            f = window.setInterval(function() {
                a() && (window.clearInterval(f), b(e)), c++ > d && (window.clearInterval(f), e = !0, b(e))
            }, 10)
    }

    function c(a) {
        var b = a.toLowerCase();
        if (0 === b.indexOf("msie") && 0 === b.indexOf("trident")) return !1;
        var c = /(?:msie|rv:)\s?([\d\.]+)/.exec(b);
        return !!(c && parseInt(c[1], 10) >= 10)
    }

    function d(a) {
        var d;
        try {
            if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(window.TEMPORARY, 1, function() {
                d = !1
            }, function() {
                d = !0
            });
            else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                var e;
                try {
                    e = window.indexedDB.open("test"), e.onerror = function() {
                        return !0
                    }
                } catch (f) {
                    d = !0
                }
                "undefined" == typeof d && b(function() {
                    return "done" === e.readyState
                }, function(a) {
                    a || (d = !e.result)
                })
            } else if (c(window.navigator.userAgent)) {
                d = !1;
                try {
                    window.indexedDB || (d = !0)
                } catch (f) {
                    d = !0
                }
            } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                try {
                    window.localStorage.setItem("test", 1)
                } catch (f) {
                    d = !0
                }
                "undefined" == typeof d && (d = !1, window.localStorage.removeItem("test"))
            }
        } catch (f) {
            d = !1
        }
        b(function() {
            return "undefined" != typeof d
        }, function() {
            a(d)
        })
    }

    function e() {
        var a = "-",
            b = m.appVersion,
            c = m.userAgent,
            d = a,
            e = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
        for (var f in e) {
            var g = e[f];
            if (g.r.test(c)) {
                d = g.s;
                break
            }
        }
        var h = a;
        switch (/Windows/.test(d) && (/Windows (.*)/.test(d) && (h = /Windows (.*)/.exec(d)[1]), d = "Windows"), d) {
            case "Mac OS X":
                /Mac OS X (10[\.\_\d]+)/.test(c) && (h = /Mac OS X (10[\.\_\d]+)/.exec(c)[1]);
                break;
            case "Android":
                /Android ([\.\_\d]+)/.test(c) && (h = /Android ([\.\_\d]+)/.exec(c)[1]);
                break;
            case "iOS":
                /OS (\d+)_(\d+)_?(\d+)?/.test(c) && (h = /OS (\d+)_(\d+)_?(\d+)?/.exec(b), h = h[1] + "." + h[2] + "." + (0 | h[3]))
        }
        return {
            osName: d,
            osVersion: h
        }
    }

    function f(a) {
        a = (a || m.userAgent).toLowerCase();
        var b = a.match(/android\s([0-9\.]*)/);
        return !!b && b[1]
    }

    function g(a) {
        K.isWebRTCSupported && (K.isORTCSupported || h(function(b) {
            a(b.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/) ? "Local: " + b : "Public: " + b)
        }))
    }

    function h(a) {
        function b(b) {
            var d = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
                e = d.exec(b);
            if (!e) return void console.warn("Could not match IP address in", b);
            var f = e[1];
            void 0 === c[f] && a(f), c[f] = !0
        }
        var c = {},
            d = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
            e = !!window.webkitRTCPeerConnection;
        if (!d) {
            var f = document.getElementById("iframe");
            if (!f) throw "NOTE: you need to have an iframe in the page right above the script tag.";
            var g = f.contentWindow;
            d = g.RTCPeerConnection || g.mozRTCPeerConnection || g.webkitRTCPeerConnection, e = !!g.webkitRTCPeerConnection
        }
        if (d) {
            var h, i = {
                optional: [{
                    RtpDataChannels: !0
                }]
            };
            e && (h = {
                iceServers: [{
                    urls: "stun:stun.services.mozilla.com"
                }]
            }, "undefined" != typeof K && K.browser.isFirefox && K.browser.version <= 38 && (h[0] = {
                url: h[0].urls
            }));
            var j = new d(h, i);
            j.onicecandidate = function(a) {
                a.candidate && b(a.candidate.candidate)
            }, j.createDataChannel(""), j.createOffer(function(a) {
                j.setLocalDescription(a, function() {}, function() {})
            }, function() {}), setTimeout(function() {
                var a = j.localDescription.sdp.split("\n");
                a.forEach(function(a) {
                    0 === a.indexOf("a=candidate:") && b(a)
                })
            }, 1e3)
        }
    }

    function i(a) {
        if (!E) return void(a && a());
        if (!m.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources && (m.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)), !m.enumerateDevices && m.enumerateDevices && (m.enumerateDevices = m.enumerateDevices.bind(m)), !m.enumerateDevices) return void(a && a());
        A = [], B = [], C = [], D = [], I = !1, J = !1;
        var b = {};
        m.enumerateDevices(function(c) {
            c.forEach(function(a) {
                var c = {};
                for (var d in a) try {
                    "function" != typeof a[d] && (c[d] = a[d])
                } catch (e) {}
                b[c.deviceId + c.label] || ("audio" === c.kind && (c.kind = "audioinput"), "video" === c.kind && (c.kind = "videoinput"), c.deviceId || (c.deviceId = c.id), c.id || (c.id = c.deviceId), c.label ? ("videoinput" !== c.kind || J || (J = !0), "audioinput" !== c.kind || I || (I = !0)) : (c.label = "Please invoke getUserMedia once.", K.browser.isChrome && K.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || "") && document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (c.label = "HTTPs is required to get label of this " + c.kind + " device.")), "audioinput" === c.kind && (F = !0, -1 === B.indexOf(c) && B.push(c)), "audiooutput" === c.kind && (G = !0, -1 === C.indexOf(c) && C.push(c)), "videoinput" === c.kind && (H = !0, -1 === D.indexOf(c) && D.push(c)), A.push(c), b[c.deviceId + c.label] = c)
            }), "undefined" != typeof K && (K.MediaDevices = A, K.hasMicrophone = F, K.hasSpeakers = G, K.hasWebcam = H, K.isWebsiteHasWebcamPermissions = J, K.isWebsiteHasMicrophonePermissions = I, K.audioInputDevices = B, K.audioOutputDevices = C, K.videoInputDevices = D), a && a()
        })
    }
    var j = "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
        k = "object" == typeof process && "object" == typeof process.versions && process.versions.node;
    if (k) {
        var l = process.versions.node.toString().replace("v", "");
        j = "Nodejs/" + l + " (NodeOS) AppleWebKit/" + l + " (KHTML, like Gecko) Nodejs/" + l + " Nodejs/" + l
    }! function(a) {
        "undefined" == typeof window && ("undefined" == typeof window && "undefined" != typeof global ? (global.navigator = {
            userAgent: j,
            getUserMedia: function() {}
        }, a.window = global) : "undefined" == typeof window, "undefined" == typeof document && (a.document = {}, document.createElement = document.captureStream = document.mozCaptureStream = function() {
            return {}
        }), "undefined" == typeof location && (a.location = {
            protocol: "file:",
            href: "",
            hash: ""
        }), "undefined" == typeof screen && (a.screen = {
            width: 0,
            height: 0
        }))
    }("undefined" != typeof global ? global : window);
    var m = window.navigator;
    "undefined" != typeof m ? ("undefined" != typeof m.webkitGetUserMedia && (m.getUserMedia = m.webkitGetUserMedia), "undefined" != typeof m.mozGetUserMedia && (m.getUserMedia = m.mozGetUserMedia)) : m = {
        getUserMedia: function() {},
        userAgent: j
    };
    var n = !!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(m.userAgent || ""),
        o = !(-1 === m.userAgent.indexOf("Edge") || !m.msSaveOrOpenBlob && !m.msSaveBlob),
        p = !!window.opera || m.userAgent.indexOf(" OPR/") >= 0,
        q = "undefined" != typeof window.InstallTrigger,
        r = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        s = !!window.chrome && !p,
        t = !!document.documentMode && !o,
        u = {
            Android: function() {
                return m.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return m.userAgent.match(/BlackBerry|BB10/i)
            },
            iOS: function() {
                return m.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return m.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return m.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return u.Android() || u.BlackBerry() || u.iOS() || u.Opera() || u.Windows()
            },
            getOsName: function() {
                var a = "Unknown OS";
                return u.Android() && (a = "Android"), u.BlackBerry() && (a = "BlackBerry"), u.iOS() && (a = "iOS"), u.Opera() && (a = "Opera Mini"), u.Windows() && (a = "Windows"), a
            }
        },
        v = "Unknown OS",
        w = "Unknown OS Version",
        x = e();
    x && x.osName && "-" != x.osName ? (v = x.osName, w = x.osVersion) : u.any() && (v = u.getOsName(), "Android" == v && (w = f()));
    var k = "object" == typeof process && "object" == typeof process.versions && process.versions.node;
    "Unknown OS" === v && k && (v = "Nodejs", w = process.versions.node.toString().replace("v", ""));
    var y = !1,
        z = !1;
    ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach(function(a) {
        !y && a in document.createElement("canvas") && (y = !0), !z && a in document.createElement("video") && (z = !0)
    });
    var A = [],
        B = [],
        C = [],
        D = [];
    m.mediaDevices && m.mediaDevices.enumerateDevices && (m.enumerateDevices = function(a) {
        m.mediaDevices.enumerateDevices().then(a)["catch"](function() {
            a([])
        })
    });
    var E = !1;
    "undefined" != typeof MediaStreamTrack && "getSources" in MediaStreamTrack ? E = !0 : m.mediaDevices && m.mediaDevices.enumerateDevices && (E = !0);
    var F = !1,
        G = !1,
        H = !1,
        I = !1,
        J = !1;
    i();
    var K = window.DetectRTC || {};
    K.browser = a(), d(function(a) {
        K.browser.isPrivateBrowsing = !!a
    }), K.browser["is" + K.browser.name] = !0, K.osName = v, K.osVersion = w;
    var L = ("object" == typeof process && "object" == typeof process.versions && process.versions["node-webkit"], !1);
    ["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function(a) {
        L || a in window && (L = !0)
    }), K.isWebRTCSupported = L, K.isORTCSupported = "undefined" != typeof RTCIceGatherer;
    var M = !1;
    K.browser.isChrome && K.browser.version >= 35 ? M = !0 : K.browser.isFirefox && K.browser.version >= 34 && (M = !0), /^(https:|chrome-extension:)$/g.test(location.protocol || "") || (document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (M = !1), K.browser.isFirefox && (M = !1)), K.isScreenCapturingSupported = M;
    var N = {
        isSupported: !1,
        isCreateMediaStreamSourceSupported: !1
    };
    ["AudioContext", "webkitAudioContext", "mozAudioContext", "msAudioContext"].forEach(function(a) {
        N.isSupported || a in window && (N.isSupported = !0, window[a] && "createMediaStreamSource" in window[a].prototype && (N.isCreateMediaStreamSourceSupported = !0))
    }), K.isAudioContextSupported = N.isSupported, K.isCreateMediaStreamSourceSupported = N.isCreateMediaStreamSourceSupported;
    var O = !1;
    K.browser.isChrome && K.browser.version > 31 && (O = !0), K.isRtpDataChannelsSupported = O;
    var P = !1;
    K.browser.isFirefox && K.browser.version > 28 ? P = !0 : K.browser.isChrome && K.browser.version > 25 ? P = !0 : K.browser.isOpera && K.browser.version >= 11 && (P = !0), K.isSctpDataChannelsSupported = P, K.isMobileDevice = n;
    var Q = !1;
    m.getUserMedia ? Q = !0 : m.mediaDevices && m.mediaDevices.getUserMedia && (Q = !0), K.browser.isChrome && K.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || "") && document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (Q = "Requires HTTPs"), "Nodejs" === K.osName && (Q = !1), K.isGetUserMediaSupported = Q;
    var R = "";
    if (screen.width) {
        var S = screen.width ? screen.width : "",
            T = screen.height ? screen.height : "";
        R += "" + S + " x " + T
    }
    K.displayResolution = R, K.isCanvasSupportsStreamCapturing = y, K.isVideoSupportsStreamCapturing = z, "Chrome" == K.browser.name && K.browser.version >= 53 && (K.isCanvasSupportsStreamCapturing || (K.isCanvasSupportsStreamCapturing = "Requires chrome flag: enable-experimental-web-platform-features"), K.isVideoSupportsStreamCapturing || (K.isVideoSupportsStreamCapturing = "Requires chrome flag: enable-experimental-web-platform-features")), K.DetectLocalIPAddress = g, K.isWebSocketsSupported = "WebSocket" in window && 2 === window.WebSocket.CLOSING, K.isWebSocketsBlocked = !K.isWebSocketsSupported, "Nodejs" === K.osName && (K.isWebSocketsSupported = !0, K.isWebSocketsBlocked = !1), K.checkWebSocketsSupport = function(a) {
        a = a || function() {};
        try {
            var b = new WebSocket("wss://echo.websocket.org:443/");
            b.onopen = function() {
                K.isWebSocketsBlocked = !1, a(), b.close(), b = null
            }, b.onerror = function() {
                K.isWebSocketsBlocked = !0, a()
            }
        } catch (c) {
            K.isWebSocketsBlocked = !0, a()
        }
    }, K.load = function(a) {
        a = a || function() {}, i(a)
    }, K.MediaDevices = A, K.hasMicrophone = F, K.hasSpeakers = G, K.hasWebcam = H, K.isWebsiteHasWebcamPermissions = J, K.isWebsiteHasMicrophonePermissions = I, K.audioInputDevices = B, K.audioOutputDevices = C, K.videoInputDevices = D;
    var U = !1;
    "setSinkId" in document.createElement("video") && (U = !0), K.isSetSinkIdSupported = U;
    var V = !1;
    K.browser.isFirefox && "undefined" != typeof mozRTCPeerConnection ? "getSenders" in mozRTCPeerConnection.prototype && (V = !0) : K.browser.isChrome && "undefined" != typeof webkitRTCPeerConnection && "getSenders" in webkitRTCPeerConnection.prototype && (V = !0), K.isRTPSenderReplaceTracksSupported = V;
    var W = !1;
    K.browser.isFirefox && K.browser.version > 38 && (W = !0), K.isRemoteStreamProcessingSupported = W;
    var X = !1;
    "undefined" != typeof MediaStreamTrack && "applyConstraints" in MediaStreamTrack.prototype && (X = !0), K.isApplyConstraintsSupported = X;
    var Y = !1;
    K.browser.isFirefox && K.browser.version >= 43 && (Y = !0), K.isMultiMonitorScreenCapturingSupported = Y, K.isPromisesSupported = !!("Promise" in window), "undefined" == typeof K && (window.DetectRTC = {});
    var Z = window.MediaStream;
    "undefined" == typeof Z && "undefined" != typeof webkitMediaStream && (Z = webkitMediaStream), K.MediaStream = "undefined" != typeof Z ? Object.keys(Z.prototype) : !1, K.MediaStreamTrack = "undefined" != typeof MediaStreamTrack ? Object.keys(MediaStreamTrack.prototype) : !1;
    var $ = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    K.RTCPeerConnection = "undefined" != typeof $ ? Object.keys($.prototype) : !1, window.DetectRTC = K, "undefined" != typeof module && (module.exports = K), "function" == typeof define && define.amd && define("DetectRTC", [], function() {
        return K
    })
}(),
function(a) {
    var b, c, d, e, f = 1,
        g = this,
        h = !1,
        i = "postMessage",
        j = "addEventListener",
        k = g[i];
    a[i] = function(b, c, d) {
        c && (b = "string" == typeof b ? b : a.param(b), d = d || parent, k ? d[i](b, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (d.location = c.replace(/#.*$/, "") + "#" + +new Date + f++ + "&" + b))
    }, a.receiveMessage = e = function(f, i, l) {
        k ? (f && (d && e(), d = function(b) {
            return "string" == typeof i && b.origin !== i || a.isFunction(i) && i(b.origin) === h ? h : void f(b)
        }), g[j] ? g[f ? j : "removeEventListener"]("message", d, h) : g[f ? "attachEvent" : "detachEvent"]("onmessage", d)) : (b && clearInterval(b), b = null, f && (l = "number" == typeof i ? i : "number" == typeof l ? l : 100, b = setInterval(function() {
            var a = document.location.hash,
                b = /^#?\d+&/;
            a !== c && b.test(a) && (c = a, f({
                data: a.replace(b, "")
            }))
        }, l)))
    }
}(jQuery),
function(a) {
    "use strict";
    var b = 360,
        c = {
            seconds: 10,
            color: "rgba(255, 255, 255, 0.8)",
            height: null,
            width: null,
            elementID: null
        },
        d = 40,
        e = "pie_timer",
        f = "pie_timer",
        g = 3 * Math.PI / 2,
        h = Math.PI / 180,
        i = function(a, c, d) {
            null === c.width && (c.width = a.width()), null === c.height && (c.height = a.height()), this.settings = c, this.jquery_object = a, this.interval_id = null, this.current_value = b, this.initial_time = new Date, this.accrued_time = 0, this.callback = d, this.is_paused = !0, this.is_reversed = "undefined" != typeof c.is_reversed ? c.is_reversed : !1, this.jquery_object.html('<canvas class="' + e + '" width="' + c.width + '" height="' + c.height + '"></canvas>'), this.canvas = this.jquery_object.children("." + e)[0], this.pieSeconds = this.settings.seconds
        };
    i.prototype = {
        start: function(c) {
            this.is_paused && (this.initial_time = c ? new Date - 1e3 * c : new Date - this.accrued_time, this.current_value <= 0 && (this.current_value = b), this.interval_id = setInterval(a.proxy(this.run_timer, this), d), this.is_paused = !1)
        },
        pause: function() {
            this.is_paused || (this.accrued_time = new Date - this.initial_time, clearInterval(this.interval_id), this.is_paused = !0)
        },
        run_timer: function() {
            if (this.canvas.getContext) {
                if (this.elapsed_time = (new Date - this.initial_time) / 1e3, this.current_value = b * Math.max(0, this.settings.seconds - this.elapsed_time) / this.settings.seconds, this.settings.elementID) {
                    var c = Math.ceil(this.current_value / b * this.settings.seconds);
                    this.pieSeconds !== c && (this.pieSeconds = c, a("#" + this.settings.elementID).html(this.pieSeconds))
                }
                if (this.current_value <= 0) clearInterval(this.interval_id), this.canvas.width = this.settings.width, a.isFunction(this.callback) && this.callback.call(), this.is_paused = !0;
                else {
                    this.canvas.width = this.settings.width;
                    var d = this.canvas.getContext("2d"),
                        e = [this.canvas.width, this.canvas.height],
                        f = Math.min(e[0], e[1]) / 2,
                        i = [e[0] / 2, e[1] / 2],
                        j = this.is_reversed;
                    d.beginPath(), d.moveTo(i[0], i[1]);
                    var k = g;
                    d.arc(i[0], i[1], f, j ? k - (360 - this.current_value) * h : k - this.current_value * h, k, j), d.closePath(), d.fillStyle = this.settings.color, d.fill()
                }
            }
        }
    };
    var j = function(b, d) {
            var e = a.extend({}, c, b);
            return this.each(function() {
                var b = a(this),
                    c = new i(b, e, d);
                b.data(f, c)
            })
        },
        k = function(b) {
            b in i.prototype || a.error("Method " + b + " does not exist on jQuery.pietimer");
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    e = d.data(f);
                return e ? void e[b].apply(e, c) : !0
            })
        };
    a.fn.pietimer = function(a) {
        return "object" != typeof a && a ? k.apply(this, arguments) : j.apply(this, arguments)
    }
}(jQuery),
function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.kurentoUtils = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function(b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            function d(a) {
                a && w.error(a)
            }

            function e(a) {
                a.stop && a.stop()
            }

            function f(a) {
                a.getTracks().forEach(e)
            }

            function g(a, b) {
                var c = [];
                return a.addEventListener("signalingstatechange", function() {
                        if ("stable" === this.signalingState)
                            for (; c.length;) {
                                var a = c.shift();
                                this.addIceCandidate(a.candidate, a.callback, a.callback)
                            }
                    }),
                    function(d, e) {
                        switch (e = e || b, a.signalingState) {
                            case "closed":
                                e(new Error("PeerConnection object is closed"));
                                break;
                            case "stable":
                                if (a.remoteDescription) {
                                    a.addIceCandidate(d, e, e);
                                    break
                                }
                            default:
                                c.push({
                                    candidate: d,
                                    callback: e
                                })
                        }
                    }
            }

            function h(a) {
                var b = a.indexOf("a=ssrc-group:FID");
                return b > 0 ? a.slice(0, b) : a
            }

            function i(a) {
                var b = a.getVideoTracks();
                if (!b.length) return w.warn("No video tracks available in the video stream"), "";
                var c = ["a=x-google-flag:conference", "a=ssrc-group:SIM 1 2 3", "a=ssrc:1 cname:localVideo", "a=ssrc:1 msid:" + a.id + " " + b[0].id, "a=ssrc:1 mslabel:" + a.id, "a=ssrc:1 label:" + b[0].id, "a=ssrc:2 cname:localVideo", "a=ssrc:2 msid:" + a.id + " " + b[0].id, "a=ssrc:2 mslabel:" + a.id, "a=ssrc:2 label:" + b[0].id, "a=ssrc:3 cname:localVideo", "a=ssrc:3 msid:" + a.id + " " + b[0].id, "a=ssrc:3 mslabel:" + a.id, "a=ssrc:3 label:" + b[0].id];
                return c.push(""), c.join("\n")
            }

            function j(a, b, c) {
                function e() {
                    if (p) {
                        var a = z.getRemoteStreams()[0];
                        p.pause(), p.srcObject = a, p.load()
                    }
                }

                function f(a) {
                    return L && ("Chrome" === B.name || "Chromium" === B.name ? (w.info("Adding multicast info"), a = new RTCSessionDescription({
                        type: a.type,
                        sdp: h(a.sdp) + i(q)
                    })) : w.warn("Simulcast is only available in Chrome browser.")), a
                }

                function k() {
                    "closed" === z.signalingState && c('The peer connection object is in "closed" state. This is most likely due to an invocation of the dispose method before accepting in the dialogue'), q && o && n.showLocalVideo(), q && z.addStream(q), s && z.addStream(s);
                    var b = A.getBrowser();
                    "sendonly" !== a || "Chrome" !== b.name && "Chromium" !== b.name || 39 !== b.major || (a = "sendrecv"), c()
                }

                function l(a) {
                    void 0 === a && (a = y), navigator.mediaDevices.getUserMedia(a).then(function(a) {
                        q = a, k()
                    })["catch"](c)
                }
                if (!(this instanceof j)) return new j(a, b, c);
                j.super_.call(this), b instanceof Function && (c = b, b = void 0), b = b || {}, c = (c || d).bind(this);
                var m, n = this,
                    o = b.localVideo,
                    p = b.remoteVideo,
                    q = b.videoStream,
                    s = b.audioStream,
                    x = b.mediaConstraints,
                    z = (b.connectionConstraints, b.peerConnection),
                    E = b.sendSource || "webcam",
                    F = b.dataChannelConfig,
                    G = b.dataChannels || !1,
                    H = r.v4(),
                    I = b.configuration,
                    J = b.onicecandidate;
                J && this.on("icecandidate", J);
                var K = b.oncandidategatheringdone;
                K && this.on("candidategatheringdone", K);
                var L = b.simulcast,
                    M = b.multistream,
                    N = new v.Interop,
                    O = [],
                    P = !1;
                if (Object.defineProperties(this, {
                        peerConnection: {
                            get: function() {
                                return z
                            }
                        },
                        id: {
                            value: b.id || H,
                            writable: !1
                        },
                        remoteVideo: {
                            get: function() {
                                return p
                            }
                        },
                        localVideo: {
                            get: function() {
                                return o
                            }
                        },
                        dataChannel: {
                            get: function() {
                                return m
                            }
                        },
                        currentFrame: {
                            get: function() {
                                if (p) {
                                    if (p.readyState < p.HAVE_CURRENT_DATA) throw new Error("No video stream data available");
                                    var a = document.createElement("canvas");
                                    return a.width = p.videoWidth, a.height = p.videoHeight, a.getContext("2d").drawImage(p, 0, 0), a
                                }
                            }
                        }
                    }), !z && (z = new RTCPeerConnection(I), G && !m)) {
                    var Q = "WebRtcPeer-" + n.id,
                        R = void 0;
                    F && (Q = F.id || Q, R = F.options), m = z.createDataChannel(Q, R), F && (m.onopen = F.onopen, m.onclose = F.onclose, m.onmessage = F.onmessage, m.onbufferedamountlow = F.onbufferedamountlow, m.onerror = F.onerror || d)
                }
                z.addEventListener("icecandidate", function(a) {
                    var b = a.candidate;
                    if (t.listenerCount(n, "icecandidate") || t.listenerCount(n, "candidategatheringdone"))
                        if (b) {
                            var c;
                            c = M && C ? N.candidateToUnifiedPlan(b) : b, n.emit("icecandidate", c), P = !1
                        } else P || (n.emit("candidategatheringdone"), P = !0);
                    else P || (O.push(b), b || (P = !0))
                }), z.ontrack = b.onaddstream, z.onnegotiationneeded = b.onnegotiationneeded, this.on("newListener", function(a, b) {
                    if ("icecandidate" === a || "candidategatheringdone" === a)
                        for (; O.length;) {
                            var c = O.shift();
                            !c == ("candidategatheringdone" === a) && b(c)
                        }
                });
                var S = g(z);
                this.addIceCandidate = function(a, b) {
                    var c;
                    c = M && C ? N.candidateToPlanB(a) : new RTCIceCandidate(a), b = (b || d).bind(this), S(c, b)
                }, this.generateOffer = function(b) {
                    b = b.bind(this);
                    var c = !0,
                        d = !0;
                    x && (c = "boolean" == typeof x.audio ? x.audio : !0, d = "boolean" == typeof x.video ? x.video : !0);
                    var e = {
                            offerToReceiveAudio: "sendonly" !== a && c,
                            offerToReceiveVideo: "sendonly" !== a && d
                        },
                        g = e;
                    z.createOffer(g).then(function(a) {
                        return a = f(a), z.setLocalDescription(a)
                    }).then(function() {
                        var a = z.localDescription;
                        M && C && (a = N.toUnifiedPlan(a), w.info("offer::origPlanB->UnifiedPlan", D(a))), b(null, a.sdp, n.processAnswer.bind(n))
                    })["catch"](b)
                }, this.getLocalSessionDescriptor = function() {
                    return z.localDescription
                }, this.getRemoteSessionDescriptor = function() {
                    return z.remoteDescription
                }, this.showLocalVideo = function() {
                    o.srcObject = q, o.muted = !0
                }, this.send = function(a) {
                    m && "open" === m.readyState ? m.send(a) : w.warn("Trying to send data over a non-existing or closed data channel")
                }, this.processAnswer = function(a, b) {
                    b = (b || d).bind(this);
                    var c = new RTCSessionDescription({
                        type: "answer",
                        sdp: a
                    });
                    if (M && C) {
                        var f = N.toPlanB(c);
                        w.info("asnwer::planB", D(f)), c = f
                    }
                    return "closed" === z.signalingState ? b("PeerConnection is closed") : void z.setRemoteDescription(c, function() {
                        e(), b()
                    }, b)
                }, this.processOffer = function(a, b) {
                    b = b.bind(this);
                    var c = new RTCSessionDescription({
                        type: "offer",
                        sdp: a
                    });
                    if (M && C) {
                        var d = N.toPlanB(c);
                        w.info("offer::planB", D(d)), c = d
                    }
                    return w.info("SDP offer received, setting remote description"), "closed" === z.signalingState ? b("PeerConnection is closed") : void z.setRemoteDescription(c).then(function() {
                        return e()
                    }).then(function() {
                        return z.createAnswer()
                    }).then(function(a) {
                        return a = f(a), w.info("Created SDP answer"), z.setLocalDescription(a)
                    }).then(function() {
                        var a = z.localDescription;
                        M && C && (a = N.toUnifiedPlan(a), w.info("answer::origPlanB->UnifiedPlan", D(a))), w.info("Local description set", a.sdp), b(null, a.sdp)
                    })["catch"](b)
                }, "recvonly" === a || q || s ? setTimeout(k, 0) : "webcam" === E ? l(x) : getScreenConstraints(E, function(a, b) {
                    return a ? c(a) : (constraints = [x], constraints.unshift(b), void l(u.apply(void 0, constraints)))
                }, H), this.on("_dispose", function() {
                    o && (o.pause(), o.src = "", o.load(), o.muted = !1), p && (p.pause(), p.src = "", p.load()), n.removeAllListeners(), void 0 !== window.cancelChooseDesktopMedia && window.cancelChooseDesktopMedia(H)
                })
            }

            function k(a) {
                var b = "get" + a + "Tracks";
                return {
                    enumerable: !0,
                    get: function() {
                        if (this.peerConnection) {
                            var a = this.peerConnection.getLocalStreams();
                            if (a.length) {
                                for (var c, d = 0; c = a[d]; d++)
                                    for (var e, f = c[b](), g = 0; e = f[g]; g++)
                                        if (!e.enabled) return !1;
                                return !0
                            }
                        }
                    },
                    set: function(a) {
                        function c(b) {
                            b.enabled = a
                        }
                        this.peerConnection.getLocalStreams().forEach(function(a) {
                            a[b]().forEach(c)
                        })
                    }
                }
            }

            function l(a, b) {
                return this instanceof l ? void l.super_.call(this, "recvonly", a, b) : new l(a, b)
            }

            function m(a, b) {
                return this instanceof m ? void m.super_.call(this, "sendonly", a, b) : new m(a, b)
            }

            function n(a, b) {
                return this instanceof n ? void n.super_.call(this, "sendrecv", a, b) : new n(a, b)
            }

            function o(a, b) {
                return s(a, b)
            }
            var p = (a("freeice"), a("inherits")),
                q = a("ua-parser-js"),
                r = a("uuid"),
                s = a("hark"),
                t = a("events").EventEmitter,
                u = a("merge").recursive.bind(void 0, !0),
                v = a("sdp-translator"),
                w = window.Logger || console;
            try {
                a("kurento-browser-extensions")
            } catch (x) {
                "undefined" == typeof getScreenConstraints && (w.warn("screen sharing is not available"), getScreenConstraints = function(a, b) {
                    b(new Error("This library is not enabled for screen sharing"))
                })
            }
            var y = {
                    audio: !0,
                    video: {
                        width: 640,
                        framerate: 15
                    }
                },
                z = window && window.navigator ? window.navigator.userAgent : "",
                A = new q(z),
                B = A.getBrowser(),
                C = !1;
            ("Chrome" === B.name || "Chromium" === B.name) && (w.info(B.name + ": using SDP PlanB"), C = !0);
            var D = function(a) {
                return "undefined" == typeof a || null === a ? "" : "type: " + a.type + "\r\n" + a.sdp
            };
            p(j, t), Object.defineProperties(j.prototype, {
                enabled: {
                    enumerable: !0,
                    get: function() {
                        return this.audioEnabled && this.videoEnabled
                    },
                    set: function(a) {
                        this.audioEnabled = this.videoEnabled = a
                    }
                },
                audioEnabled: k("Audio"),
                videoEnabled: k("Video")
            }), j.prototype.getLocalStream = function(a) {
                return this.peerConnection ? this.peerConnection.getLocalStreams()[a || 0] : void 0
            }, j.prototype.getRemoteStream = function(a) {
                return this.peerConnection ? this.peerConnection.getRemoteStreams()[a || 0] : void 0
            }, j.prototype.dispose = function(a) {
                w.info("Disposing WebRtcPeer");
                var b = this.peerConnection,
                    c = this.dataChannel;
                try {
                    if (c) {
                        if ("closed" === c.signalingState) return;
                        c.close()
                    }
                    if (b) {
                        if ("closed" === b.signalingState) return;
                        a && b.getLocalStreams().forEach(f), b.close()
                    }
                } catch (d) {
                    w.warn("Exception disposing webrtc peer " + d)
                }
                this.emit("_dispose")
            }, p(l, j), p(m, j), p(n, j), c.bufferizeCandidates = g, c.WebRtcPeerRecvonly = l, c.WebRtcPeerSendonly = m, c.WebRtcPeerSendrecv = n, c.hark = o
        }, {
            events: 4,
            freeice: 5,
            hark: 8,
            inherits: 9,
            "kurento-browser-extensions": 10,
            merge: 11,
            "sdp-translator": 18,
            "ua-parser-js": 21,
            uuid: 23
        }],
        2: [function(a, b) {
            window.addEventListener && (b.exports = a("./index"))
        }, {
            "./index": 3
        }],
        3: [function(a, b, c) {
            var d = a("./WebRtcPeer");
            c.WebRtcPeer = d
        }, {
            "./WebRtcPeer": 1
        }],
        4: [function(a, b) {
            function c() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function d(a) {
                return "function" == typeof a
            }

            function e(a) {
                return "number" == typeof a
            }

            function f(a) {
                return "object" == typeof a && null !== a
            }

            function g(a) {
                return void 0 === a
            }
            b.exports = c, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._maxListeners = void 0, c.defaultMaxListeners = 10, c.prototype.setMaxListeners = function(a) {
                if (!e(a) || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
                return this._maxListeners = a, this
            }, c.prototype.emit = function(a) {
                var b, c, e, h, i, j;
                if (this._events || (this._events = {}), "error" === a && (!this._events.error || f(this._events.error) && !this._events.error.length)) {
                    if (b = arguments[1], b instanceof Error) throw b;
                    var k = new Error('Uncaught, unspecified "error" event. (' + b + ")");
                    throw k.context = b, k
                }
                if (c = this._events[a], g(c)) return !1;
                if (d(c)) switch (arguments.length) {
                    case 1:
                        c.call(this);
                        break;
                    case 2:
                        c.call(this, arguments[1]);
                        break;
                    case 3:
                        c.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        h = Array.prototype.slice.call(arguments, 1), c.apply(this, h)
                } else if (f(c))
                    for (h = Array.prototype.slice.call(arguments, 1), j = c.slice(), e = j.length, i = 0; e > i; i++) j[i].apply(this, h);
                return !0
            }, c.prototype.addListener = function(a, b) {
                var e;
                if (!d(b)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, d(b.listener) ? b.listener : b), this._events[a] ? f(this._events[a]) ? this._events[a].push(b) : this._events[a] = [this._events[a], b] : this._events[a] = b, f(this._events[a]) && !this._events[a].warned && (e = g(this._maxListeners) ? c.defaultMaxListeners : this._maxListeners, e && e > 0 && this._events[a].length > e && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), "function" == typeof console.trace && console.trace())), this
            }, c.prototype.on = c.prototype.addListener, c.prototype.once = function(a, b) {
                function c() {
                    this.removeListener(a, c), e || (e = !0, b.apply(this, arguments))
                }
                if (!d(b)) throw TypeError("listener must be a function");
                var e = !1;
                return c.listener = b, this.on(a, c), this
            }, c.prototype.removeListener = function(a, b) {
                var c, e, g, h;
                if (!d(b)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[a]) return this;
                if (c = this._events[a], g = c.length, e = -1, c === b || d(c.listener) && c.listener === b) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, b);
                else if (f(c)) {
                    for (h = g; h-- > 0;)
                        if (c[h] === b || c[h].listener && c[h].listener === b) {
                            e = h;
                            break
                        }
                    if (0 > e) return this;
                    1 === c.length ? (c.length = 0, delete this._events[a]) : c.splice(e, 1), this._events.removeListener && this.emit("removeListener", a, b)
                }
                return this
            }, c.prototype.removeAllListeners = function(a) {
                var b, c;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a], this;
                if (0 === arguments.length) {
                    for (b in this._events) "removeListener" !== b && this.removeAllListeners(b);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (c = this._events[a], d(c)) this.removeListener(a, c);
                else if (c)
                    for (; c.length;) this.removeListener(a, c[c.length - 1]);
                return delete this._events[a], this
            }, c.prototype.listeners = function(a) {
                var b;
                return b = this._events && this._events[a] ? d(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
            }, c.prototype.listenerCount = function(a) {
                if (this._events) {
                    var b = this._events[a];
                    if (d(b)) return 1;
                    if (b) return b.length
                }
                return 0
            }, c.listenerCount = function(a, b) {
                return a.listenerCount(b)
            }
        }, {}],
        5: [function(a, b) {
            "use strict"; {
                var c = a("normalice");
                b.exports = function(b) {
                    function d(a, b) {
                        for (var d, e = [], g = [].concat(f[a]); g.length && e.length < b;) d = Math.random() * g.length | 0, e = e.concat(g.splice(d, 1));
                        return e.map(function(b) {
                            return "string" == typeof b || b instanceof String ? c(a + ":" + b) : b
                        })
                    }
                    var e, f = {
                            stun: (b || {}).stun || a("./stun.json"),
                            turn: (b || {}).turn || a("./turn.json")
                        },
                        g = (b || {}).stunCount || 2,
                        h = (b || {}).turnCount || 0;
                    return e = [].concat(d("stun", g)), h && (e = e.concat(d("turn", h))), e
                }
            }
        }, {
            "./stun.json": 6,
            "./turn.json": 7,
            normalice: 12
        }],
        6: [function(a, b) {
            b.exports = ["stun.l.google.com:19302", "stun1.l.google.com:19302", "stun2.l.google.com:19302", "stun3.l.google.com:19302", "stun4.l.google.com:19302", "stun.ekiga.net", "stun.ideasip.com", "stun.schlund.de", "stun.stunprotocol.org:3478", "stun.voiparound.com", "stun.voipbuster.com", "stun.voipstunt.com", "stun.voxgratia.org", "stun.services.mozilla.com"];

        }, {}],
        7: [function(a, b) {
            b.exports = [{
                url: "turn:34.250.21.99:3478",
                urls: ["turn:34.250.21.99:3478"],
                username: "kurento",
                credential: "kurento"
            }]
        }, {}],
        8: [function(a, b) {
            function c(a, b) {
                var c = -(1 / 0);
                a.getFloatFrequencyData(b);
                for (var d = 4, e = b.length; e > d; d++) b[d] > c && b[d] < 0 && (c = b[d]);
                return c
            }
            var d = a("wildemitter"),
                e = window.AudioContext || window.webkitAudioContext,
                f = null;
            b.exports = function(a, b) {
                var g = new d;
                if (!e) return g;
                var b = b || {},
                    h = b.smoothing || .1,
                    i = b.interval || 50,
                    j = b.threshold,
                    k = b.play,
                    l = b.history || 10,
                    m = !0;
                f || (f = new e);
                var n, o, p;
                p = f.createAnalyser(), p.fftSize = 512, p.smoothingTimeConstant = h, o = new Float32Array(p.fftSize), a.jquery && (a = a[0]), a instanceof HTMLAudioElement || a instanceof HTMLVideoElement ? (n = f.createMediaElementSource(a), "undefined" == typeof k && (k = !0), j = j || -50) : (n = f.createMediaStreamSource(a), j = j || -50), n.connect(p), k && p.connect(f.destination), g.speaking = !1, g.setThreshold = function(a) {
                    j = a
                }, g.setInterval = function(a) {
                    i = a
                }, g.stop = function() {
                    m = !1, g.emit("volume_change", -100, j), g.speaking && (g.speaking = !1, g.emit("stopped_speaking"))
                }, g.speakingHistory = [];
                for (var q = 0; l > q; q++) g.speakingHistory.push(0);
                var r = function() {
                    setTimeout(function() {
                        if (m) {
                            var a = c(p, o);
                            g.emit("volume_change", a, j);
                            var b = 0;
                            if (a > j && !g.speaking) {
                                for (var d = g.speakingHistory.length - 3; d < g.speakingHistory.length; d++) b += g.speakingHistory[d];
                                b >= 2 && (g.speaking = !0, g.emit("speaking"))
                            } else if (j > a && g.speaking) {
                                for (var d = 0; d < g.speakingHistory.length; d++) b += g.speakingHistory[d];
                                0 == b && (g.speaking = !1, g.emit("stopped_speaking"))
                            }
                            g.speakingHistory.shift(), g.speakingHistory.push(0 + (a > j)), r()
                        }
                    }, i)
                };
                return r(), g
            }
        }, {
            wildemitter: 24
        }],
        9: [function(a, b) {
            b.exports = "function" == typeof Object.create ? function(a, b) {
                a.super_ = b, a.prototype = Object.create(b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : function(a, b) {
                a.super_ = b;
                var c = function() {};
                c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
            }
        }, {}],
        10: [function() {}, {}],
        11: [function(a, b) {
            ! function(a) {
                function c(a, b) {
                    if ("object" !== e(a)) return b;
                    for (var d in b) a[d] = "object" === e(a[d]) && "object" === e(b[d]) ? c(a[d], b[d]) : b[d];
                    return a
                }

                function d(a, b, d) {
                    var g = d[0],
                        h = d.length;
                    (a || "object" !== e(g)) && (g = {});
                    for (var i = 0; h > i; ++i) {
                        var j = d[i],
                            k = e(j);
                        if ("object" === k)
                            for (var l in j) {
                                var m = a ? f.clone(j[l]) : j[l];
                                g[l] = b ? c(g[l], m) : m
                            }
                    }
                    return g
                }

                function e(a) {
                    return {}.toString.call(a).slice(8, -1).toLowerCase()
                }
                var f = function(a) {
                        return d(a === !0, !1, arguments)
                    },
                    g = "merge";
                f.recursive = function(a) {
                    return d(a === !0, !0, arguments)
                }, f.clone = function(a) {
                    var b, c, d = a,
                        g = e(a);
                    if ("array" === g)
                        for (d = [], c = a.length, b = 0; c > b; ++b) d[b] = f.clone(a[b]);
                    else if ("object" === g) {
                        d = {};
                        for (b in a) d[b] = f.clone(a[b])
                    }
                    return d
                }, a ? b.exports = f : window[g] = f
            }("object" == typeof b && b && "object" == typeof b.exports && b.exports)
        }, {}],
        12: [function(a, b) {
            var c = ["stun:", "turn:"];
            b.exports = function(a) {
                var b, d, e = (a || {}).url || a,
                    f = {};
                return "string" == typeof e || e instanceof String ? (e = e.trim(), (b = c[c.indexOf(e.slice(0, 5))]) ? (e = e.slice(5), d = e.split("@"), f.username = a.username, f.credential = a.credential, d.length > 1 && (e = d[1], d = d[0].split(":"), f.username = d[0], f.credential = (a || {}).credential || d[1] || ""), f.url = b + e, f.urls = [f.url], f) : a) : a
            }
        }, {}],
        13: [function(a, b) {
            var c = b.exports = {
                v: [{
                    name: "version",
                    reg: /^(\d*)$/
                }],
                o: [{
                    name: "origin",
                    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                    names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                    format: "%s %s %d %s IP%d %s"
                }],
                s: [{
                    name: "name"
                }],
                i: [{
                    name: "description"
                }],
                u: [{
                    name: "uri"
                }],
                e: [{
                    name: "email"
                }],
                p: [{
                    name: "phone"
                }],
                z: [{
                    name: "timezones"
                }],
                r: [{
                    name: "repeats"
                }],
                t: [{
                    name: "timing",
                    reg: /^(\d*) (\d*)/,
                    names: ["start", "stop"],
                    format: "%d %d"
                }],
                c: [{
                    name: "connection",
                    reg: /^IN IP(\d) (\S*)/,
                    names: ["version", "ip"],
                    format: "IN IP%d %s"
                }],
                b: [{
                    push: "bandwidth",
                    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                    names: ["type", "limit"],
                    format: "%s:%s"
                }],
                m: [{
                    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
                    names: ["type", "port", "protocol", "payloads"],
                    format: "%s %d %s %s"
                }],
                a: [{
                    push: "rtp",
                    reg: /^rtpmap:(\d*) ([\w\-]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                    names: ["payload", "codec", "rate", "encoding"],
                    format: function(a) {
                        return a.encoding ? "rtpmap:%d %s/%s/%s" : a.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                    }
                }, {
                    push: "fmtp",
                    reg: /^fmtp:(\d*) ([\S| ]*)/,
                    names: ["payload", "config"],
                    format: "fmtp:%d %s"
                }, {
                    name: "control",
                    reg: /^control:(.*)/,
                    format: "control:%s"
                }, {
                    name: "rtcp",
                    reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                    names: ["port", "netType", "ipVer", "address"],
                    format: function(a) {
                        return null != a.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                    }
                }, {
                    push: "rtcpFbTrrInt",
                    reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                    names: ["payload", "value"],
                    format: "rtcp-fb:%d trr-int %d"
                }, {
                    push: "rtcpFb",
                    reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                    names: ["payload", "type", "subtype"],
                    format: function(a) {
                        return null != a.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                    }
                }, {
                    push: "ext",
                    reg: /^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,
                    names: ["value", "uri", "config"],
                    format: function(a) {
                        return null != a.config ? "extmap:%s %s %s" : "extmap:%s %s"
                    }
                }, {
                    push: "crypto",
                    reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                    names: ["id", "suite", "config", "sessionConfig"],
                    format: function(a) {
                        return null != a.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                    }
                }, {
                    name: "setup",
                    reg: /^setup:(\w*)/,
                    format: "setup:%s"
                }, {
                    name: "mid",
                    reg: /^mid:([^\s]*)/,
                    format: "mid:%s"
                }, {
                    name: "msid",
                    reg: /^msid:(.*)/,
                    format: "msid:%s"
                }, {
                    name: "ptime",
                    reg: /^ptime:(\d*)/,
                    format: "ptime:%d"
                }, {
                    name: "maxptime",
                    reg: /^maxptime:(\d*)/,
                    format: "maxptime:%d"
                }, {
                    name: "direction",
                    reg: /^(sendrecv|recvonly|sendonly|inactive)/
                }, {
                    name: "icelite",
                    reg: /^(ice-lite)/
                }, {
                    name: "iceUfrag",
                    reg: /^ice-ufrag:(\S*)/,
                    format: "ice-ufrag:%s"
                }, {
                    name: "icePwd",
                    reg: /^ice-pwd:(\S*)/,
                    format: "ice-pwd:%s"
                }, {
                    name: "fingerprint",
                    reg: /^fingerprint:(\S*) (\S*)/,
                    names: ["type", "hash"],
                    format: "fingerprint:%s %s"
                }, {
                    push: "candidates",
                    reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,
                    names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation"],
                    format: function(a) {
                        var b = "candidate:%s %d %s %d %s %d typ %s";
                        return b += null != a.raddr ? " raddr %s rport %d" : "%v%v", b += null != a.tcptype ? " tcptype %s" : "%v", null != a.generation && (b += " generation %d"), b
                    }
                }, {
                    name: "endOfCandidates",
                    reg: /^(end-of-candidates)/
                }, {
                    name: "remoteCandidates",
                    reg: /^remote-candidates:(.*)/,
                    format: "remote-candidates:%s"
                }, {
                    name: "iceOptions",
                    reg: /^ice-options:(\S*)/,
                    format: "ice-options:%s"
                }, {
                    push: "ssrcs",
                    reg: /^ssrc:(\d*) ([\w_]*):(.*)/,
                    names: ["id", "attribute", "value"],
                    format: "ssrc:%d %s:%s"
                }, {
                    push: "ssrcGroups",
                    reg: /^ssrc-group:(\w*) (.*)/,
                    names: ["semantics", "ssrcs"],
                    format: "ssrc-group:%s %s"
                }, {
                    name: "msidSemantic",
                    reg: /^msid-semantic:\s?(\w*) (\S*)/,
                    names: ["semantic", "token"],
                    format: "msid-semantic: %s %s"
                }, {
                    push: "groups",
                    reg: /^group:(\w*) (.*)/,
                    names: ["type", "mids"],
                    format: "group:%s %s"
                }, {
                    name: "rtcpMux",
                    reg: /^(rtcp-mux)/
                }, {
                    name: "rtcpRsize",
                    reg: /^(rtcp-rsize)/
                }, {
                    push: "invalid",
                    names: ["value"]
                }]
            };
            Object.keys(c).forEach(function(a) {
                var b = c[a];
                b.forEach(function(a) {
                    a.reg || (a.reg = /(.*)/), a.format || (a.format = "%s")
                })
            })
        }, {}],
        14: [function(a, b, c) {
            var d = a("./parser"),
                e = a("./writer");
            c.write = e, c.parse = d.parse, c.parseFmtpConfig = d.parseFmtpConfig, c.parsePayloads = d.parsePayloads, c.parseRemoteCandidates = d.parseRemoteCandidates
        }, {
            "./parser": 15,
            "./writer": 16
        }],
        15: [function(a, b, c) {
            var d = function(a) {
                    return String(Number(a)) === a ? Number(a) : a
                },
                e = function(a, b, c, e) {
                    if (e && !c) b[e] = d(a[1]);
                    else
                        for (var f = 0; f < c.length; f += 1) null != a[f + 1] && (b[c[f]] = d(a[f + 1]))
                },
                f = function(a, b, c) {
                    var d = a.name && a.names;
                    a.push && !b[a.push] ? b[a.push] = [] : d && !b[a.name] && (b[a.name] = {});
                    var f = a.push ? {} : d ? b[a.name] : b;
                    e(c.match(a.reg), f, a.names, a.name), a.push && b[a.push].push(f)
                },
                g = a("./grammar"),
                h = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            c.parse = function(a) {
                var b = {},
                    c = [],
                    d = b;
                return a.split(/(\r\n|\r|\n)/).filter(h).forEach(function(a) {
                    var b = a[0],
                        e = a.slice(2);
                    "m" === b && (c.push({
                        rtp: [],
                        fmtp: []
                    }), d = c[c.length - 1]);
                    for (var h = 0; h < (g[b] || []).length; h += 1) {
                        var i = g[b][h];
                        if (i.reg.test(e)) return f(i, d, e)
                    }
                }), b.media = c, b
            };
            var i = function(a, b) {
                var c = b.split("=");
                return 2 === c.length && (a[c[0]] = d(c[1])), a
            };
            c.parseFmtpConfig = function(a) {
                return a.split(/\;\s?/).reduce(i, {})
            }, c.parsePayloads = function(a) {
                return a.split(" ").map(Number)
            }, c.parseRemoteCandidates = function(a) {
                for (var b = [], c = a.split(" ").map(d), e = 0; e < c.length; e += 3) b.push({
                    component: c[e],
                    ip: c[e + 1],
                    port: c[e + 2]
                });
                return b
            }
        }, {
            "./grammar": 13
        }],
        16: [function(a, b) {
            var c = a("./grammar"),
                d = /%[sdv%]/g,
                e = function(a) {
                    var b = 1,
                        c = arguments,
                        e = c.length;
                    return a.replace(d, function(a) {
                        if (b >= e) return a;
                        var d = c[b];
                        switch (b += 1, a) {
                            case "%%":
                                return "%";
                            case "%s":
                                return String(d);
                            case "%d":
                                return Number(d);
                            case "%v":
                                return ""
                        }
                    })
                },
                f = function(a, b, c) {
                    var d = b.format instanceof Function ? b.format(b.push ? c : c[b.name]) : b.format,
                        f = [a + "=" + d];
                    if (b.names)
                        for (var g = 0; g < b.names.length; g += 1) {
                            var h = b.names[g];
                            f.push(b.name ? c[b.name][h] : c[b.names[g]])
                        } else f.push(c[b.name]);
                    return e.apply(null, f)
                },
                g = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                h = ["i", "c", "b", "a"];
            b.exports = function(a, b) {
                b = b || {}, null == a.version && (a.version = 0), null == a.name && (a.name = " "), a.media.forEach(function(a) {
                    null == a.payloads && (a.payloads = "")
                });
                var d = b.outerOrder || g,
                    e = b.innerOrder || h,
                    i = [];
                return d.forEach(function(b) {
                    c[b].forEach(function(c) {
                        c.name in a && null != a[c.name] ? i.push(f(b, c, a)) : c.push in a && null != a[c.push] && a[c.push].forEach(function(a) {
                            i.push(f(b, c, a))
                        })
                    })
                }), a.media.forEach(function(a) {
                    i.push(f("m", c.m[0], a)), e.forEach(function(b) {
                        c[b].forEach(function(c) {
                            c.name in a && null != a[c.name] ? i.push(f(b, c, a)) : c.push in a && null != a[c.push] && a[c.push].forEach(function(a) {
                                i.push(f(b, c, a))
                            })
                        })
                    })
                }), i.join("\r\n") + "\r\n"
            }
        }, {
            "./grammar": 13
        }],
        17: [function(a, b) {
            b.exports = function c(a) {
                if (!a) return !1;
                if (this.length != a.length) return !1;
                for (var b = 0, d = this.length; d > b; b++)
                    if (this[b] instanceof Array && a[b] instanceof Array) {
                        if (!c.apply(this[b], [a[b]])) return !1
                    } else if (this[b] != a[b]) return !1;
                return !0
            }
        }, {}],
        18: [function(a, b, c) {
            c.Interop = a("./interop")
        }, {
            "./interop": 19
        }],
        19: [function(a, b) {
            "use strict";

            function c() {
                this.cache = {
                    mlB2UMap: {},
                    mlU2BMap: {}
                }
            }

            function d(a) {
                "undefined" != typeof a.setup && ("active" === a.setup ? a.setup = "passive" : "passive" === a.setup && (a.setup = "active"))
            }
            var e = a("./transform"),
                f = a("./array-equals");
            b.exports = c, c.prototype.candidateToUnifiedPlan = function(a) {
                var b = new RTCIceCandidate(a);
                return b.sdpMLineIndex = this.cache.mlB2UMap[b.sdpMLineIndex], b
            }, c.prototype.candidateToPlanB = function(a) {
                var b = new RTCIceCandidate(a);
                if (0 === b.sdpMid.indexOf("audio")) b.sdpMid = "audio";
                else {
                    if (0 !== b.sdpMid.indexOf("video")) throw new Error("candidate with " + b.sdpMid + " not allowed");
                    b.sdpMid = "video"
                }
                return b.sdpMLineIndex = this.cache.mlU2BMap[b.sdpMLineIndex], b
            }, c.prototype.getFirstSendingIndexFromAnswer = function(a) {
                if (!this.cache.answer) return null;
                var b = e.parse(this.cache.answer);
                if (b && b.media && Array.isArray(b.media))
                    for (var c = 0; c < b.media.length; c++)
                        if (b.media[c].type == a && (!b.media[c].direction || "sendrecv" === b.media[c].direction || "sendonly" === b.media[c].direction)) return c;
                return null
            }, c.prototype.toPlanB = function(a) {
                var b = this;
                if ("object" != typeof a || null === a || "string" != typeof a.sdp) return console.warn("An empty description was passed as an argument."), a;
                var c = e.parse(a.sdp);
                if ("undefined" == typeof c.media || !Array.isArray(c.media) || 0 === c.media.length) return console.warn("The description has no media."), a;
                if (c.media.length <= 3 && c.media.every(function(a) {
                        return -1 !== ["video", "audio", "data"].indexOf(a.mid)
                    })) return console.warn("This description does not look like Unified Plan."), a;
                for (var d = a.sdp, f = !1, g = 0; g < c.media.length; g++) {
                    var h = c.media[g];
                    h.rtp.forEach(function(a) {
                        if ("NULL" === a.codec) {
                            f = !0;
                            var c = e.parse(b.cache.offer);
                            a.codec = c.media[g].rtp[0].codec
                        }
                    })
                }
                f && (d = e.write(c)), this.cache[a.type] = d;
                var i = c.media;
                c.media = [];
                var j = {},
                    k = [];
                i.forEach(function(a) {
                    if (("string" != typeof a.rtcpMux || "rtcp-mux" !== a.rtcpMux) && "inactive" !== a.direction) throw new Error("Cannot convert to Plan B because m-lines without the rtcp-mux attribute were found.");
                    if (("undefined" == typeof j[a.type] || "inactive" === j[a.type].direction) && (j[a.type] = a), a.protocol != j[a.type].protocol) throw new Error("Cannot convert to Plan B because m-lines have different protocols and this library does not have support for that");
                    if (a.payloads != j[a.type].payloads) throw new Error("Cannot convert to Plan B because m-lines have different payloads and this library does not have support for that")
                }), i.forEach(function(a) {
                    return "application" === a.type ? (c.media.push(a), void k.push(a.mid)) : ("object" == typeof a.sources && Object.keys(a.sources).forEach(function(b) {
                        "object" != typeof j[a.type].sources && (j[a.type].sources = {}), j[a.type].sources[b] = a.sources[b], "undefined" != typeof a.msid && (j[a.type].sources[b].msid = a.msid)
                    }), "undefined" != typeof a.ssrcGroups && Array.isArray(a.ssrcGroups) && ("undefined" != typeof j[a.type].ssrcGroups && Array.isArray(j[a.type].ssrcGroups) || (j[a.type].ssrcGroups = []), j[a.type].ssrcGroups = j[a.type].ssrcGroups.concat(a.ssrcGroups)), void(j[a.type] === a && (a.mid = a.type, delete a.bundleOnly, delete a.msid, a.type == i[0].type ? (k.unshift(a.type), c.media.unshift(a)) : (k.push(a.type), c.media.push(a)))))
                }), "undefined" != typeof c.groups && c.groups.some(function(a) {
                    return "BUNDLE" === a.type ? (a.mids = k.join(" "), !0) : void 0
                }), c.msidSemantic = {
                    semantic: "WMS",
                    token: "*"
                };
                var l = e.write(c);
                return new RTCSessionDescription({
                    type: a.type,
                    sdp: l
                })
            }, c.prototype.toUnifiedPlan = function(a) {
                var b = this;
                if ("object" != typeof a || null === a || "string" != typeof a.sdp) return console.warn("An empty description was passed as an argument."), a;
                var c = e.parse(a.sdp);
                if ("undefined" == typeof c.media || !Array.isArray(c.media) || 0 === c.media.length) return console.warn("The description has no media."), a;
                if (c.media.length > 3 || !c.media.every(function(a) {
                        return -1 !== ["video", "audio", "data"].indexOf(a.mid)
                    })) return console.warn("This description does not look like Plan B."), a;
                var g = [];
                c.media.forEach(function(a) {
                    g.push(a.mid)
                });
                var h = !1;
                if ("undefined" != typeof c.groups && Array.isArray(c.groups) && (h = c.groups.every(function(a) {
                        return "BUNDLE" !== a.type || f.apply(a.mids.sort(), [g.sort()])
                    })), !h) {
                    var i = !1;
                    if (c.media.forEach(function(a) {
                            "inactive" !== a.direction && (i = !0)
                        }), i) throw new Error("Cannot convert to Unified Plan because m-lines that are not bundled were found.")
                }
                var j;
                if ("answer" === a.type) j = "offer";
                else {
                    if ("offer" !== a.type) throw new Error("Type '" + a.type + "' not supported.");
                    j = "answer"
                }
                var k;
                "undefined" != typeof this.cache[j] && (k = e.parse(this.cache[j]));
                var l, m, n, o, p = {
                        audio: {},
                        video: {}
                    },
                    q = {},
                    r = 0,
                    s = 0,
                    t = {},
                    u = {},
                    v = {},
                    w = {};
                if (c.media.forEach(function(c) {
                        if (("string" != typeof c.rtcpMux || "rtcp-mux" !== c.rtcpMux) && "inactive" !== c.direction) throw new Error("Cannot convert to Unified Plan because m-lines without the rtcp-mux attribute were found.");
                        if ("application" === c.type) return void(q[c.mid] = c);
                        var d = c.sources,
                            e = c.ssrcGroups,
                            f = c.port;
                        if ("undefined" != typeof c.candidates && (l = "undefined" != typeof l ? l.concat(c.candidates) : c.candidates), "undefined" != typeof m && "undefined" != typeof c.iceUfrag && m != c.iceUfrag) throw new Error("Only BUNDLE supported, iceUfrag must be the same for all m-lines.\n	Last iceUfrag: " + m + "\n	New iceUfrag: " + c.iceUfrag);
                        if ("undefined" != typeof c.iceUfrag && (m = c.iceUfrag), "undefined" != typeof n && "undefined" != typeof c.icePwd && n != c.icePwd) throw new Error("Only BUNDLE supported, icePwd must be the same for all m-lines.\n	Last icePwd: " + n + "\n	New icePwd: " + c.icePwd);
                        if ("undefined" != typeof c.icePwd && (n = c.icePwd), "undefined" != typeof o && "undefined" != typeof c.fingerprint && (o.type != c.fingerprint.type || o.hash != c.fingerprint.hash)) throw new Error("Only BUNDLE supported, fingerprint must be the same for all m-lines.\n	Last fingerprint: " + JSON.stringify(o) + "\n	New fingerprint: " + JSON.stringify(c.fingerprint));
                        "undefined" != typeof c.fingerprint && (o = c.fingerprint), u[c.type] = c.payloads, v[c.type] = c.rtcpFb, w[c.type] = c.rtp;
                        var g = {};
                        "undefined" != typeof e && Array.isArray(e) && e.forEach(function(a) {
                            "undefined" != typeof a.ssrcs && Array.isArray(a.ssrcs) && a.ssrcs.forEach(function(b) {
                                "undefined" == typeof g[b] && (g[b] = []), g[b].push(a)
                            })
                        });
                        var h = {};
                        if ("object" == typeof d) delete c.sources, delete c.ssrcGroups, delete c.candidates, delete c.iceUfrag, delete c.icePwd, delete c.fingerprint, delete c.port, delete c.mid, Object.keys(d).forEach(function(e) {
                            var i;
                            return "offer" !== a.type || d[e].msid ? ("undefined" != typeof g[e] && Array.isArray(g[e]) && g[e].some(function(a) {
                                return a.ssrcs.some(function(a) {
                                    return "object" == typeof h[a] ? (i = h[a], !0) : void 0
                                })
                            }), void("object" == typeof i ? (i.sources[e] = d[e], delete d[e].msid) : (i = Object.create(c), h[e] = i, "undefined" != typeof d[e].msid && (i.msid = d[e].msid, delete d[e].msid), i.sources = {}, i.sources[e] = d[e], i.ssrcGroups = g[e], "undefined" != typeof k && "undefined" != typeof k.media && Array.isArray(k.media) && k.media.forEach(function(a) {
                                "object" == typeof a.sources && Object.keys(a.sources).forEach(function(b) {
                                    b === e && (i.mid = a.mid)
                                })
                            }), "undefined" == typeof i.mid && (i.mid = [c.type, "-", e].join("")), i.candidates = l, i.iceUfrag = m, i.icePwd = n, i.fingerprint = o, i.port = f, q[i.mid] = i, t[s] = i.sources, b.cache.mlU2BMap[s] = r, "undefined" == typeof b.cache.mlB2UMap[r] && (b.cache.mlB2UMap[r] = s), s++))) : void(p[c.type][e] = d[e])
                        });
                        else {
                            var i = c;
                            i.candidates = l, i.iceUfrag = m, i.icePwd = n, i.fingerprint = o, i.port = f, q[i.mid] = i, b.cache.mlU2BMap[s] = r, "undefined" == typeof b.cache.mlB2UMap[r] && (b.cache.mlB2UMap[r] = s)
                        }
                        r++
                    }), c.media = [], g = [], "answer" === a.type)
                    for (var x = 0; x < k.media.length; x++) {
                        var y = k.media[x];
                        delete y.msid, delete y.sources, delete y.ssrcGroups, "undefined" == typeof t[x] ? y.direction && "sendrecv" !== y.direction ? "sendonly" === y.direction && (y.direction = "inactive") : y.direction = "recvonly" : y.direction && "sendrecv" !== y.direction ? "recvonly" === y.direction && (y.direction = "sendonly") : y.direction = "sendrecv", y.sources = t[x], y.candidates = l, y.iceUfrag = m, y.icePwd = n, y.fingerprint = o, y.rtp = w[y.type], y.payloads = u[y.type], y.rtcpFb = v[y.type], c.media.push(y), "string" == typeof y.mid && g.push(y.mid)
                    } else "undefined" != typeof k && "undefined" != typeof k.media && Array.isArray(k.media) && k.media.forEach(function(a) {
                        g.push(a.mid), "undefined" != typeof q[a.mid] ? c.media.push(q[a.mid]) : (delete a.msid, delete a.sources, delete a.ssrcGroups, a.direction && "sendrecv" !== a.direction || (a.direction = "sendonly"), a.direction && "recvonly" !== a.direction || (a.direction = "inactive"), d(a), c.media.push(a))
                    }), Object.keys(q).forEach(function(a) {
                        if (-1 === g.indexOf(a))
                            if (g.push(a), "recvonly" === q[a].direction) {
                                var b = !1;
                                c.media.some(function(c) {
                                    return "sendrecv" !== c.direction && "sendonly" !== c.direction || c.type !== q[a].type ? void 0 : (Object.keys(q[a].sources).forEach(function(b) {
                                        c.sources[b] = q[a].sources[b]
                                    }), b = !0, !0)
                                }), b || c.media.push(q[a])
                            } else c.media.push(q[a])
                    });
                ["audio", "video"].forEach(function(a) {
                    if (c && c.media && Array.isArray(c.media)) {
                        var d = null;
                        if (Object.keys(p[a]).length > 0 && (d = b.getFirstSendingIndexFromAnswer(a), null === d))
                            for (var e = 0; e < c.media.length; e++)
                                if (c.media[e].type === a) {
                                    d = e;
                                    break
                                }
                        if (d && c.media.length > d) {
                            var f = c.media[d];
                            Object.keys(p[a]).forEach(function(b) {
                                f.sources && f.sources[b] && console.warn("Replacing an existing SSRC."), f.sources || (f.sources = {}), f.sources[b] = p[a][b]
                            })
                        }
                    }
                }), "undefined" != typeof c.groups && c.groups.some(function(a) {
                    return "BUNDLE" === a.type ? (a.mids = g.join(" "), !0) : void 0
                }), c.msidSemantic = {
                    semantic: "WMS",
                    token: "*"
                };
                var z = e.write(c);
                return this.cache[a.type] = z, new RTCSessionDescription({
                    type: a.type,
                    sdp: z
                })
            }
        }, {
            "./array-equals": 17,
            "./transform": 20
        }],
        20: [function(a, b, c) {
            var d = a("sdp-transform");
            c.write = function(a, b) {
                return "undefined" != typeof a && "undefined" != typeof a.media && Array.isArray(a.media) && a.media.forEach(function(a) {
                    "undefined" != typeof a.sources && 0 !== Object.keys(a.sources).length && (a.ssrcs = [], Object.keys(a.sources).forEach(function(b) {
                        var c = a.sources[b];
                        Object.keys(c).forEach(function(d) {
                            a.ssrcs.push({
                                id: b,
                                attribute: d,
                                value: c[d]
                            })
                        })
                    }), delete a.sources), "undefined" != typeof a.ssrcGroups && Array.isArray(a.ssrcGroups) && a.ssrcGroups.forEach(function(a) {
                        "undefined" != typeof a.ssrcs && Array.isArray(a.ssrcs) && (a.ssrcs = a.ssrcs.join(" "))
                    })
                }), "undefined" != typeof a && "undefined" != typeof a.groups && Array.isArray(a.groups) && a.groups.forEach(function(a) {
                    "undefined" != typeof a.mids && Array.isArray(a.mids) && (a.mids = a.mids.join(" "))
                }), d.write(a, b)
            }, c.parse = function(a) {
                var b = d.parse(a);
                return "undefined" != typeof b && "undefined" != typeof b.media && Array.isArray(b.media) && b.media.forEach(function(a) {
                    "undefined" != typeof a.ssrcs && Array.isArray(a.ssrcs) && (a.sources = {}, a.ssrcs.forEach(function(b) {
                        a.sources[b.id] || (a.sources[b.id] = {}), a.sources[b.id][b.attribute] = b.value
                    }), delete a.ssrcs), "undefined" != typeof a.ssrcGroups && Array.isArray(a.ssrcGroups) && a.ssrcGroups.forEach(function(a) {
                        "string" == typeof a.ssrcs && (a.ssrcs = a.ssrcs.split(" "))
                    })
                }), "undefined" != typeof b && "undefined" != typeof b.groups && Array.isArray(b.groups) && b.groups.forEach(function(a) {
                    "string" == typeof a.mids && (a.mids = a.mids.split(" "))
                }), b
            }
        }, {
            "sdp-transform": 14
        }],
        21: [function(b, c, d) {
            ! function(b, e) {
                "use strict";
                var f = "0.7.12",
                    g = "",
                    h = "?",
                    i = "function",
                    j = "undefined",
                    k = "object",
                    l = "string",
                    m = "major",
                    n = "model",
                    o = "name",
                    p = "type",
                    q = "vendor",
                    r = "version",
                    s = "architecture",
                    t = "console",
                    u = "mobile",
                    v = "tablet",
                    w = "smarttv",
                    x = "wearable",
                    y = "embedded",
                    z = {
                        extend: function(a, b) {
                            var c = {};
                            for (var d in a) c[d] = b[d] && b[d].length % 2 === 0 ? b[d].concat(a[d]) : a[d];
                            return c
                        },
                        has: function(a, b) {
                            return "string" == typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : !1
                        },
                        lowerize: function(a) {
                            return a.toLowerCase()
                        },
                        major: function(a) {
                            return typeof a === l ? a.replace(/[^\d\.]/g, "").split(".")[0] : e
                        },
                        trim: function(a) {
                            return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    A = {
                        rgx: function() {
                            for (var a, b, c, d, f, g, h, l = 0, m = arguments; l < m.length && !g;) {
                                var n = m[l],
                                    o = m[l + 1];
                                if (typeof a === j) {
                                    a = {};
                                    for (d in o) o.hasOwnProperty(d) && (f = o[d], typeof f === k ? a[f[0]] = e : a[f] = e)
                                }
                                for (b = c = 0; b < n.length && !g;)
                                    if (g = n[b++].exec(this.getUA()))
                                        for (d = 0; d < o.length; d++) h = g[++c], f = o[d], typeof f === k && f.length > 0 ? 2 == f.length ? a[f[0]] = typeof f[1] == i ? f[1].call(this, h) : f[1] : 3 == f.length ? a[f[0]] = typeof f[1] !== i || f[1].exec && f[1].test ? h ? h.replace(f[1], f[2]) : e : h ? f[1].call(this, h, f[2]) : e : 4 == f.length && (a[f[0]] = h ? f[3].call(this, h.replace(f[1], f[2])) : e) : a[f] = h ? h : e;
                                l += 2
                            }
                            return a
                        },
                        str: function(a, b) {
                            for (var c in b)
                                if (typeof b[c] === k && b[c].length > 0) {
                                    for (var d = 0; d < b[c].length; d++)
                                        if (z.has(b[c][d], a)) return c === h ? e : c
                                } else if (z.has(b[c], a)) return c === h ? e : c;
                            return a
                        }
                    },
                    B = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2000: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    C = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [o, r],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [o, "Opera Mini"], r
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [o, "Opera"], r
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                            [o, r],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [o, "IE"], r
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [o, r],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [o, "Yandex"], r
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [o, /_/g, " "], r
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [o, "WeChat"], r
                            ],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [r, [o, "MIUI Browser"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [o, /(.+)/, "$1 WebView"], r
                            ],
                            [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [r, [o, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [o, r],
                            [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [o, "UCBrowser"], r
                            ],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [o, "Dolphin"], r
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [o, "Chrome"], r
                            ],
                            [/;fbav\/([\w\.]+);/i],
                            [r, [o, "Facebook"]],
                            [/fxios\/([\w\.-]+)/i],
                            [r, [o, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [r, [o, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [r, o],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [o, [r, A.str, B.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [o, r],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [o, "Netscape"], r
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [o, r]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [s, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [s, z.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [s, "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [s, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [s, /ower/, "", z.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [s, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                [s, z.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [n, q, [p, v]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [n, [q, "Apple"],
                                [p, v]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [n, "Apple TV"],
                                [q, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [q, n, [p, v]],
                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                            [n, [q, "Amazon"],
                                [p, v]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                            [
                                [n, A.str, B.device.amazon.model],
                                [q, "Amazon"],
                                [p, u]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [n, q, [p, u]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [n, [q, "Apple"],
                                [p, u]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [q, n, [p, u]],
                            [/\(bb10;\s(\w+)/i],
                            [n, [q, "BlackBerry"],
                                [p, u]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                            [n, [q, "Asus"],
                                [p, v]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [q, "Sony"],
                                [n, "Xperia Tablet"],
                                [p, v]
                            ],
                            [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                            [
                                [q, "Sony"],
                                [n, "Xperia Phone"],
                                [p, u]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [q, n, [p, t]],
                            [/android.+;\s(shield)\sbuild/i],
                            [n, [q, "Nvidia"],
                                [p, t]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [n, [q, "Sony"],
                                [p, t]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [q, A.str, B.device.sprint.vendor],
                                [n, A.str, B.device.sprint.model],
                                [p, u]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [q, n, [p, v]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                            [q, [n, /_/g, " "],
                                [p, u]
                            ],
                            [/(nexus\s9)/i],
                            [n, [q, "HTC"],
                                [p, v]
                            ],
                            [/(nexus\s6p)/i],
                            [n, [q, "Huawei"],
                                [p, u]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [q, n, [p, u]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [n, [q, "Microsoft"],
                                [p, t]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [n, /\./g, " "],
                                [q, "Microsoft"],
                                [p, u]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [n, [q, "Motorola"],
                                [p, u]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [n, [q, "Motorola"],
                                [p, v]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [q, z.trim],
                                [n, z.trim],
                                [p, w]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [n, /^/, "SmartTV"],
                                [q, "Samsung"],
                                [p, w]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [n, [q, "Sharp"],
                                [p, w]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [q, "Samsung"], n, [p, v]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [q, [p, w], n],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                            [
                                [q, "Samsung"], n, [p, u]
                            ],
                            [/sie-(\w+)*/i],
                            [n, [q, "Siemens"],
                                [p, u]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                            [
                                [q, "Nokia"], n, [p, u]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [n, [q, "Acer"],
                                [p, v]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [q, "LG"], n, [p, v]
                            ],
                            [/(lg) netcast\.tv/i],
                            [q, n, [p, w]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                            [n, [q, "LG"],
                                [p, u]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [n, [q, "Lenovo"],
                                [p, v]
                            ],
                            [/linux;.+((jolla));/i],
                            [q, n, [p, u]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [q, n, [p, x]],
                            [/android.+;\s(glass)\s\d/i],
                            [n, [q, "Google"],
                                [p, x]
                            ],
                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                            [
                                [n, /_/g, " "],
                                [q, "Xiaomi"],
                                [p, u]
                            ],
                            [/android.+a000(1)\s+build/i],
                            [n, [q, "OnePlus"],
                                [p, u]
                            ],
                            [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [p, z.lowerize], q, n
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [r, [o, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [o, r],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [r, o]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [o, r],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [o, [r, A.str, B.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [o, "Windows"],
                                [r, A.str, B.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [o, "BlackBerry"], r
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            [o, r],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [o, "Symbian"], r
                            ],
                            [/\((series40);/i],
                            [o],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [o, "Firefox OS"], r
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            [o, r],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [o, "Chromium OS"], r
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [o, "Solaris"], r
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [o, r],
                            [/(haiku)\s(\w+)/i],
                            [o, r],
                            [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [o, "iOS"],
                                [r, /_/g, "."]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [o, "Mac OS"],
                                [r, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            [o, r]
                        ]
                    },
                    D = function(a, c) {
                        if (!(this instanceof D)) return new D(a, c).getResult();
                        var d = a || (b && b.navigator && b.navigator.userAgent ? b.navigator.userAgent : g),
                            e = c ? z.extend(C, c) : C;
                        return this.getBrowser = function() {
                            var a = A.rgx.apply(this, e.browser);
                            return a.major = z.major(a.version), a
                        }, this.getCPU = function() {
                            return A.rgx.apply(this, e.cpu)
                        }, this.getDevice = function() {
                            return A.rgx.apply(this, e.device)
                        }, this.getEngine = function() {
                            return A.rgx.apply(this, e.engine)
                        }, this.getOS = function() {
                            return A.rgx.apply(this, e.os)
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return d
                        }, this.setUA = function(a) {
                            return d = a, this
                        }, this
                    };
                D.VERSION = f, D.BROWSER = {
                    NAME: o,
                    MAJOR: m,
                    VERSION: r
                }, D.CPU = {
                    ARCHITECTURE: s
                }, D.DEVICE = {
                    MODEL: n,
                    VENDOR: q,
                    TYPE: p,
                    CONSOLE: t,
                    MOBILE: u,
                    SMARTTV: w,
                    TABLET: v,
                    WEARABLE: x,
                    EMBEDDED: y
                }, D.ENGINE = {
                    NAME: o,
                    VERSION: r
                }, D.OS = {
                    NAME: o,
                    VERSION: r
                }, typeof d !== j ? (typeof c !== j && c.exports && (d = c.exports = D), d.UAParser = D) : typeof a === i && a.amd ? a(function() {
                    return D
                }) : b.UAParser = D;
                var E = b.jQuery || b.Zepto;
                if (typeof E !== j) {
                    var F = new D;
                    E.ua = F.getResult(), E.ua.get = function() {
                        return F.getUA()
                    }, E.ua.set = function(a) {
                        F.setUA(a);
                        var b = F.getResult();
                        for (var c in b) E.ua[c] = b[c]
                    }
                }
            }("object" == typeof window ? window : this)
        }, {}],
        22: [function(a, b) {
            (function(a) {
                var c, d = a.crypto || a.msCrypto;
                if (d && d.getRandomValues) {
                    var e = new Uint8Array(16);
                    c = function() {
                        return d.getRandomValues(e), e
                    }
                }
                if (!c) {
                    var f = new Array(16);
                    c = function() {
                        for (var a, b = 0; 16 > b; b++) 0 === (3 & b) && (a = 4294967296 * Math.random()), f[b] = a >>> ((3 & b) << 3) & 255;
                        return f;

                    }
                }
                b.exports = c
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        23: [function(a, b) {
            function c(a, b, c) {
                var d = b && c || 0,
                    e = 0;
                for (b = b || [], a.toLowerCase().replace(/[0-9a-f]{2}/g, function(a) {
                        16 > e && (b[d + e++] = i[a])
                    }); 16 > e;) b[d + e++] = 0;
                return b
            }

            function d(a, b) {
                var c = b || 0,
                    d = h;
                return d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]]
            }

            function e(a, b, c) {
                var e = b && c || 0,
                    f = b || [];
                a = a || {};
                var g = void 0 !== a.clockseq ? a.clockseq : m,
                    h = void 0 !== a.msecs ? a.msecs : (new Date).getTime(),
                    i = void 0 !== a.nsecs ? a.nsecs : o + 1,
                    j = h - n + (i - o) / 1e4;
                if (0 > j && void 0 === a.clockseq && (g = g + 1 & 16383), (0 > j || h > n) && void 0 === a.nsecs && (i = 0), i >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                n = h, o = i, m = g, h += 122192928e5;
                var k = (1e4 * (268435455 & h) + i) % 4294967296;
                f[e++] = k >>> 24 & 255, f[e++] = k >>> 16 & 255, f[e++] = k >>> 8 & 255, f[e++] = 255 & k;
                var p = h / 4294967296 * 1e4 & 268435455;
                f[e++] = p >>> 8 & 255, f[e++] = 255 & p, f[e++] = p >>> 24 & 15 | 16, f[e++] = p >>> 16 & 255, f[e++] = g >>> 8 | 128, f[e++] = 255 & g;
                for (var q = a.node || l, r = 0; 6 > r; r++) f[e + r] = q[r];
                return b ? b : d(f)
            }

            function f(a, b, c) {
                var e = b && c || 0;
                "string" == typeof a && (b = "binary" == a ? new Array(16) : null, a = null), a = a || {};
                var f = a.random || (a.rng || g)();
                if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, b)
                    for (var h = 0; 16 > h; h++) b[e + h] = f[h];
                return b || d(f)
            }
            for (var g = a("./rng"), h = [], i = {}, j = 0; 256 > j; j++) h[j] = (j + 256).toString(16).substr(1), i[h[j]] = j;
            var k = g(),
                l = [1 | k[0], k[1], k[2], k[3], k[4], k[5]],
                m = 16383 & (k[6] << 8 | k[7]),
                n = 0,
                o = 0,
                p = f;
            p.v1 = e, p.v4 = f, p.parse = c, p.unparse = d, b.exports = p
        }, {
            "./rng": 22
        }],
        24: [function(a, b) {
            function c() {}
            b.exports = c, c.mixin = function(a) {
                var b = a.prototype || a;
                b.isWildEmitter = !0, b.on = function(a) {
                    this.callbacks = this.callbacks || {};
                    var b = 3 === arguments.length,
                        c = b ? arguments[1] : void 0,
                        d = b ? arguments[2] : arguments[1];
                    return d._groupName = c, (this.callbacks[a] = this.callbacks[a] || []).push(d), this
                }, b.once = function(a) {
                    function b() {
                        c.off(a, b), f.apply(this, arguments)
                    }
                    var c = this,
                        d = 3 === arguments.length,
                        e = d ? arguments[1] : void 0,
                        f = d ? arguments[2] : arguments[1];
                    return this.on(a, e, b), this
                }, b.releaseGroup = function(a) {
                    this.callbacks = this.callbacks || {};
                    var b, c, d, e;
                    for (b in this.callbacks)
                        for (e = this.callbacks[b], c = 0, d = e.length; d > c; c++) e[c]._groupName === a && (e.splice(c, 1), c--, d--);
                    return this
                }, b.off = function(a, b) {
                    this.callbacks = this.callbacks || {};
                    var c, d = this.callbacks[a];
                    return d ? 1 === arguments.length ? (delete this.callbacks[a], this) : (c = d.indexOf(b), d.splice(c, 1), 0 === d.length && delete this.callbacks[a], this) : this
                }, b.emit = function(a) {
                    this.callbacks = this.callbacks || {};
                    var b, c, d, e = [].slice.call(arguments, 1),
                        f = this.callbacks[a],
                        g = this.getWildcardCallbacks(a);
                    if (f)
                        for (d = f.slice(), b = 0, c = d.length; c > b && d[b]; ++b) d[b].apply(this, e);
                    if (g)
                        for (c = g.length, d = g.slice(), b = 0, c = d.length; c > b && d[b]; ++b) d[b].apply(this, [a].concat(e));
                    return this
                }, b.getWildcardCallbacks = function(a) {
                    this.callbacks = this.callbacks || {};
                    var b, c, d = [];
                    for (b in this.callbacks) c = b.split("*"), ("*" === b || 2 === c.length && a.slice(0, c[0].length) === c[0]) && (d = d.concat(this.callbacks[b]));
                    return d
                }
            }, c.mixin(c)
        }, {}]
    }, {}, [2])(2)
}),
function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.adapter = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b) {
            "use strict";

            function c(a, b, c, d) {
                var e = h.writeRtpDescription(a.kind, b);
                if (e += h.writeIceParameters(a.iceGatherer.getLocalParameters()), e += h.writeDtlsParameters(a.dtlsTransport.getLocalParameters(), "offer" === c ? "actpass" : "active"), e += "a=mid:" + a.mid + "\r\n", e += a.direction ? "a=" + a.direction + "\r\n" : a.rtpSender && a.rtpReceiver ? "a=sendrecv\r\n" : a.rtpSender ? "a=sendonly\r\n" : a.rtpReceiver ? "a=recvonly\r\n" : "a=inactive\r\n", a.rtpSender) {
                    var f = "msid:" + d.id + " " + a.rtpSender.track.id + "\r\n";
                    e += "a=" + f, e += "a=ssrc:" + a.sendEncodingParameters[0].ssrc + " " + f, a.sendEncodingParameters[0].rtx && (e += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " " + f, e += "a=ssrc-group:FID " + a.sendEncodingParameters[0].ssrc + " " + a.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                }
                return e += "a=ssrc:" + a.sendEncodingParameters[0].ssrc + " cname:" + h.localCName + "\r\n", a.rtpSender && a.sendEncodingParameters[0].rtx && (e += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " cname:" + h.localCName + "\r\n"), e
            }

            function d(a, b) {
                var c = !1;
                return a = JSON.parse(JSON.stringify(a)), a.filter(function(a) {
                    if (a && (a.urls || a.url)) {
                        var d = a.urls || a.url;
                        a.url && !a.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                        var e = "string" == typeof d;
                        return e && (d = [d]), d = d.filter(function(a) {
                            var d = 0 === a.indexOf("turn:") && -1 !== a.indexOf("transport=udp") && -1 === a.indexOf("turn:[") && !c;
                            return d ? (c = !0, !0) : 0 === a.indexOf("stun:") && b >= 14393 && -1 === a.indexOf("?transport=udp")
                        }), delete a.url, a.urls = e ? d[0] : d, !!d.length
                    }
                    return !1
                })
            }

            function e(a, b) {
                var c = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: []
                    },
                    d = function(a, b) {
                        a = parseInt(a, 10);
                        for (var c = 0; c < b.length; c++)
                            if (b[c].payloadType === a || b[c].preferredPayloadType === a) return b[c]
                    },
                    e = function(a, b, c, e) {
                        var f = d(a.parameters.apt, c),
                            g = d(b.parameters.apt, e);
                        return f && g && f.name.toLowerCase() === g.name.toLowerCase()
                    };
                return a.codecs.forEach(function(d) {
                    for (var f = 0; f < b.codecs.length; f++) {
                        var g = b.codecs[f];
                        if (d.name.toLowerCase() === g.name.toLowerCase() && d.clockRate === g.clockRate) {
                            if ("rtx" === d.name.toLowerCase() && d.parameters && g.parameters.apt && !e(d, g, a.codecs, b.codecs)) continue;
                            g = JSON.parse(JSON.stringify(g)), g.numChannels = Math.min(d.numChannels, g.numChannels), c.codecs.push(g), g.rtcpFeedback = g.rtcpFeedback.filter(function(a) {
                                for (var b = 0; b < d.rtcpFeedback.length; b++)
                                    if (d.rtcpFeedback[b].type === a.type && d.rtcpFeedback[b].parameter === a.parameter) return !0;
                                return !1
                            });
                            break
                        }
                    }
                }), a.headerExtensions.forEach(function(a) {
                    for (var d = 0; d < b.headerExtensions.length; d++) {
                        var e = b.headerExtensions[d];
                        if (a.uri === e.uri) {
                            c.headerExtensions.push(e);
                            break
                        }
                    }
                }), c
            }

            function f(a, b, c) {
                return -1 !== {
                    offer: {
                        setLocalDescription: ["stable", "have-local-offer"],
                        setRemoteDescription: ["stable", "have-remote-offer"]
                    },
                    answer: {
                        setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                        setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
                    }
                }[b][a].indexOf(c)
            }

            function g(a, b) {
                var c = a.getRemoteCandidates().find(function(a) {
                    return b.foundation === a.foundation && b.ip === a.ip && b.port === a.port && b.priority === a.priority && b.protocol === a.protocol && b.type === a.type
                });
                return c || a.addRemoteCandidate(b), !c
            }
            var h = a("sdp");
            b.exports = function(a, b) {
                var i = function(c) {
                    var e = this,
                        f = document.createDocumentFragment();
                    if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(a) {
                            e[a] = f[a].bind(f)
                        }), this.onicecandidate = null, this.onaddstream = null, this.ontrack = null, this.onremovestream = null, this.onsignalingstatechange = null, this.oniceconnectionstatechange = null, this.onicegatheringstatechange = null, this.onnegotiationneeded = null, this.ondatachannel = null, this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this.localDescription = null, this.remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.iceGatheringState = "new", c = JSON.parse(JSON.stringify(c || {})), this.usingBundle = "max-bundle" === c.bundlePolicy, "negotiate" === c.rtcpMuxPolicy) {
                        var g = new Error("rtcpMuxPolicy 'negotiate' is not supported");
                        throw g.name = "NotSupportedError", g
                    }
                    switch (c.rtcpMuxPolicy || (c.rtcpMuxPolicy = "require"), c.iceTransportPolicy) {
                        case "all":
                        case "relay":
                            break;
                        default:
                            c.iceTransportPolicy = "all"
                    }
                    switch (c.bundlePolicy) {
                        case "balanced":
                        case "max-compat":
                        case "max-bundle":
                            break;
                        default:
                            c.bundlePolicy = "balanced"
                    }
                    if (c.iceServers = d(c.iceServers || [], b), this._iceGatherers = [], c.iceCandidatePoolSize)
                        for (var i = c.iceCandidatePoolSize; i > 0; i--) this._iceGatherers = new a.RTCIceGatherer({
                            iceServers: c.iceServers,
                            gatherPolicy: c.iceTransportPolicy
                        });
                    else c.iceCandidatePoolSize = 0;
                    this._config = c, this.transceivers = [], this._sdpSessionId = h.generateSessionId(), this._sdpSessionVersion = 0
                };
                return i.prototype._emitGatheringStateChange = function() {
                    var a = new Event("icegatheringstatechange");
                    this.dispatchEvent(a), "function" == typeof this.onicegatheringstatechange && this.onicegatheringstatechange(a)
                }, i.prototype.getConfiguration = function() {
                    return this._config
                }, i.prototype.getLocalStreams = function() {
                    return this.localStreams
                }, i.prototype.getRemoteStreams = function() {
                    return this.remoteStreams
                }, i.prototype._createTransceiver = function(a) {
                    var b = this.transceivers.length > 0,
                        c = {
                            track: null,
                            iceGatherer: null,
                            iceTransport: null,
                            dtlsTransport: null,
                            localCapabilities: null,
                            remoteCapabilities: null,
                            rtpSender: null,
                            rtpReceiver: null,
                            kind: a,
                            mid: null,
                            sendEncodingParameters: null,
                            recvEncodingParameters: null,
                            stream: null,
                            wantReceive: !0
                        };
                    if (this.usingBundle && b) c.iceTransport = this.transceivers[0].iceTransport, c.dtlsTransport = this.transceivers[0].dtlsTransport;
                    else {
                        var d = this._createIceAndDtlsTransports();
                        c.iceTransport = d.iceTransport, c.dtlsTransport = d.dtlsTransport
                    }
                    return this.transceivers.push(c), c
                }, i.prototype.addTrack = function(b, c) {
                    for (var d, e = 0; e < this.transceivers.length; e++) this.transceivers[e].track || this.transceivers[e].kind !== b.kind || (d = this.transceivers[e]);
                    return d || (d = this._createTransceiver(b.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(c) && this.localStreams.push(c), d.track = b, d.stream = c, d.rtpSender = new a.RTCRtpSender(b, d.dtlsTransport), d.rtpSender
                }, i.prototype.addStream = function(a) {
                    var c = this;
                    if (b >= 15025) a.getTracks().forEach(function(b) {
                        c.addTrack(b, a)
                    });
                    else {
                        var d = a.clone();
                        a.getTracks().forEach(function(a, b) {
                            var c = d.getTracks()[b];
                            a.addEventListener("enabled", function(a) {
                                c.enabled = a.enabled
                            })
                        }), d.getTracks().forEach(function(a) {
                            c.addTrack(a, d)
                        })
                    }
                }, i.prototype.removeStream = function(a) {
                    var b = this.localStreams.indexOf(a);
                    b > -1 && (this.localStreams.splice(b, 1), this._maybeFireNegotiationNeeded())
                }, i.prototype.getSenders = function() {
                    return this.transceivers.filter(function(a) {
                        return !!a.rtpSender
                    }).map(function(a) {
                        return a.rtpSender
                    })
                }, i.prototype.getReceivers = function() {
                    return this.transceivers.filter(function(a) {
                        return !!a.rtpReceiver
                    }).map(function(a) {
                        return a.rtpReceiver
                    })
                }, i.prototype._createIceGatherer = function(b, c) {
                    var d = this;
                    if (c && b > 0) return this.transceivers[0].iceGatherer;
                    if (this._iceGatherers.length) return this._iceGatherers.shift();
                    var e = new a.RTCIceGatherer({
                        iceServers: this._config.iceServers,
                        gatherPolicy: this._config.iceTransportPolicy
                    });
                    return Object.defineProperty(e, "state", {
                        value: "new",
                        writable: !0
                    }), this.transceivers[b].candidates = [], this.transceivers[b].bufferCandidates = function(a) {
                        var c = !a.candidate || 0 === Object.keys(a.candidate).length;
                        e.state = c ? "completed" : "gathering", null !== d.transceivers[b].candidates && d.transceivers[b].candidates.push(a.candidate)
                    }, e.addEventListener("localcandidate", this.transceivers[b].bufferCandidates), e
                }, i.prototype._gather = function(b, c) {
                    var d = this,
                        e = this.transceivers[c].iceGatherer;
                    if (!e.onlocalcandidate) {
                        var f = this.transceivers[c].candidates;
                        this.transceivers[c].candidates = null, e.removeEventListener("localcandidate", this.transceivers[c].bufferCandidates), e.onlocalcandidate = function(a) {
                            if (!(d.usingBundle && c > 0)) {
                                var f = new Event("icecandidate");
                                f.candidate = {
                                    sdpMid: b,
                                    sdpMLineIndex: c
                                };
                                var g = a.candidate,
                                    i = !g || 0 === Object.keys(g).length;
                                i ? ("new" === e.state || "gathering" === e.state) && (e.state = "completed") : ("new" === e.state && (e.state = "gathering"), g.component = 1, f.candidate.candidate = h.writeCandidate(g));
                                var j = h.splitSections(d.localDescription.sdp);
                                j[f.candidate.sdpMLineIndex + 1] += i ? "a=end-of-candidates\r\n" : "a=" + f.candidate.candidate + "\r\n", d.localDescription.sdp = j.join("");
                                var k = d.transceivers.every(function(a) {
                                    return a.iceGatherer && "completed" === a.iceGatherer.state
                                });
                                "gathering" !== d.iceGatheringState && (d.iceGatheringState = "gathering", d._emitGatheringStateChange()), i || (d.dispatchEvent(f), "function" == typeof d.onicecandidate && d.onicecandidate(f)), k && (d.dispatchEvent(new Event("icecandidate")), "function" == typeof d.onicecandidate && d.onicecandidate(new Event("icecandidate")), d.iceGatheringState = "complete", d._emitGatheringStateChange())
                            }
                        }, a.setTimeout(function() {
                            f.forEach(function(a) {
                                var b = new Event("RTCIceGatherEvent");
                                b.candidate = a, e.onlocalcandidate(b)
                            })
                        }, 0)
                    }
                }, i.prototype._createIceAndDtlsTransports = function() {
                    var b = this,
                        c = new a.RTCIceTransport(null);
                    c.onicestatechange = function() {
                        b._updateConnectionState()
                    };
                    var d = new a.RTCDtlsTransport(c);
                    return d.ondtlsstatechange = function() {
                        b._updateConnectionState()
                    }, d.onerror = function() {
                        Object.defineProperty(d, "state", {
                            value: "failed",
                            writable: !0
                        }), b._updateConnectionState()
                    }, {
                        iceTransport: c,
                        dtlsTransport: d
                    }
                }, i.prototype._disposeIceAndDtlsTransports = function(a) {
                    var b = this.transceivers[a].iceGatherer;
                    b && (delete b.onlocalcandidate, delete this.transceivers[a].iceGatherer);
                    var c = this.transceivers[a].iceTransport;
                    c && (delete c.onicestatechange, delete this.transceivers[a].iceTransport);
                    var d = this.transceivers[a].dtlsTransport;
                    d && (delete d.ondtlsstatechange, delete d.onerror, delete this.transceivers[a].dtlsTransport)
                }, i.prototype._transceive = function(a, c, d) {
                    var f = e(a.localCapabilities, a.remoteCapabilities);
                    c && a.rtpSender && (f.encodings = a.sendEncodingParameters, f.rtcp = {
                        cname: h.localCName,
                        compound: a.rtcpParameters.compound
                    }, a.recvEncodingParameters.length && (f.rtcp.ssrc = a.recvEncodingParameters[0].ssrc), a.rtpSender.send(f)), d && a.rtpReceiver && f.codecs.length > 0 && ("video" === a.kind && a.recvEncodingParameters && 15019 > b && a.recvEncodingParameters.forEach(function(a) {
                        delete a.rtx
                    }), f.encodings = a.recvEncodingParameters, f.rtcp = {
                        cname: a.rtcpParameters.cname,
                        compound: a.rtcpParameters.compound
                    }, a.sendEncodingParameters.length && (f.rtcp.ssrc = a.sendEncodingParameters[0].ssrc), a.rtpReceiver.receive(f))
                }, i.prototype.setLocalDescription = function(a) {
                    var b = this,
                        c = arguments;
                    if (!f("setLocalDescription", a.type, this.signalingState)) return new Promise(function(d, e) {
                        var f = new Error("Can not set local " + a.type + " in state " + b.signalingState);
                        f.name = "InvalidStateError", c.length > 2 && "function" == typeof c[2] && c[2].apply(null, [f]), e(f)
                    });
                    var d, g;
                    if ("offer" === a.type) d = h.splitSections(a.sdp), g = d.shift(), d.forEach(function(a, c) {
                        var d = h.parseRtpParameters(a);
                        b.transceivers[c].localCapabilities = d
                    }), this.transceivers.forEach(function(a, c) {
                        b._gather(a.mid, c)
                    });
                    else if ("answer" === a.type) {
                        d = h.splitSections(b.remoteDescription.sdp), g = d.shift();
                        var i = h.matchPrefix(g, "a=ice-lite").length > 0;
                        d.forEach(function(a, c) {
                            var d = b.transceivers[c],
                                f = d.iceGatherer,
                                j = d.iceTransport,
                                k = d.dtlsTransport,
                                l = d.localCapabilities,
                                m = d.remoteCapabilities,
                                n = h.isRejected(a) && 1 === !h.matchPrefix(a, "a=bundle-only").length;
                            if (!n && !d.isDatachannel) {
                                var o = h.getIceParameters(a, g),
                                    p = h.getDtlsParameters(a, g);
                                i && (p.role = "server"), b.usingBundle && 0 !== c || (b._gather(d.mid, c), "new" === j.state && j.start(f, o, i ? "controlling" : "controlled"), "new" === k.state && k.start(p));
                                var q = e(l, m);
                                b._transceive(d, q.codecs.length > 0, !1)
                            }
                        })
                    }
                    switch (this.localDescription = {
                        type: a.type,
                        sdp: a.sdp
                    }, a.type) {
                        case "offer":
                            this._updateSignalingState("have-local-offer");
                            break;
                        case "answer":
                            this._updateSignalingState("stable");
                            break;
                        default:
                            throw new TypeError('unsupported type "' + a.type + '"')
                    }
                    var j = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1];
                    return new Promise(function(a) {
                        j && j.apply(null), a()
                    })
                }, i.prototype.setRemoteDescription = function(c) {
                    var d = this,
                        e = arguments;
                    if (!f("setRemoteDescription", c.type, this.signalingState)) return new Promise(function(a, b) {
                        var f = new Error("Can not set remote " + c.type + " in state " + d.signalingState);
                        f.name = "InvalidStateError", e.length > 2 && "function" == typeof e[2] && e[2].apply(null, [f]), b(f)
                    });
                    var i = {};
                    this.remoteStreams.forEach(function(a) {
                        i[a.id] = a
                    });
                    var j = [],
                        k = h.splitSections(c.sdp),
                        l = k.shift(),
                        m = h.matchPrefix(l, "a=ice-lite").length > 0,
                        n = h.matchPrefix(l, "a=group:BUNDLE ").length > 0;
                    this.usingBundle = n;
                    var o = h.matchPrefix(l, "a=ice-options:")[0];
                    switch (this.canTrickleIceCandidates = o ? o.substr(14).split(" ").indexOf("trickle") >= 0 : !1, k.forEach(function(e, f) {
                        var k = h.splitLines(e),
                            o = h.getKind(e),
                            p = h.isRejected(e) && 1 === !h.matchPrefix(e, "a=bundle-only").length,
                            q = k[0].substr(2).split(" ")[2],
                            r = h.getDirection(e, l),
                            s = h.parseMsid(e),
                            t = h.getMid(e) || h.generateIdentifier();
                        if ("application" === o && "DTLS/SCTP" === q) return void(d.transceivers[f] = {
                            mid: t,
                            isDatachannel: !0
                        });
                        var u, v, w, x, y, z, A, B, C, D, E, F = h.parseRtpParameters(e);
                        p || (D = h.getIceParameters(e, l), E = h.getDtlsParameters(e, l), E.role = "client"), A = h.parseRtpEncodingParameters(e);
                        var G = h.parseRtcpParameters(e),
                            H = h.matchPrefix(e, "a=end-of-candidates", l).length > 0,
                            I = h.matchPrefix(e, "a=candidate:").map(function(a) {
                                return h.parseCandidate(a)
                            }).filter(function(a) {
                                return 1 === a.component
                            });
                        if (("offer" === c.type || "answer" === c.type) && !p && n && f > 0 && d.transceivers[f] && (d._disposeIceAndDtlsTransports(f), d.transceivers[f].iceGatherer = d.transceivers[0].iceGatherer, d.transceivers[f].iceTransport = d.transceivers[0].iceTransport, d.transceivers[f].dtlsTransport = d.transceivers[0].dtlsTransport, d.transceivers[f].rtpSender && d.transceivers[f].rtpSender.setTransport(d.transceivers[0].dtlsTransport), d.transceivers[f].rtpReceiver && d.transceivers[f].rtpReceiver.setTransport(d.transceivers[0].dtlsTransport)), "offer" !== c.type || p) "answer" !== c.type || p || (u = d.transceivers[f], v = u.iceGatherer, w = u.iceTransport, x = u.dtlsTransport, y = u.rtpReceiver, z = u.sendEncodingParameters, B = u.localCapabilities, d.transceivers[f].recvEncodingParameters = A, d.transceivers[f].remoteCapabilities = F, d.transceivers[f].rtcpParameters = G, I.length && (!m && !H || n && 0 !== f || "new" !== w.state ? I.forEach(function(a) {
                            g(u.iceTransport, a)
                        }) : w.setRemoteCandidates(I)), n && 0 !== f || ("new" === w.state && w.start(v, D, "controlling"), "new" === x.state && x.start(E)), d._transceive(u, "sendrecv" === r || "recvonly" === r, "sendrecv" === r || "sendonly" === r), !y || "sendrecv" !== r && "sendonly" !== r ? delete u.rtpReceiver : (C = y.track, s ? (i[s.stream] || (i[s.stream] = new a.MediaStream), i[s.stream].addTrack(C), j.push([C, y, i[s.stream]])) : (i["default"] || (i["default"] = new a.MediaStream), i["default"].addTrack(C), j.push([C, y, i["default"]]))));
                        else {
                            if (u = d.transceivers[f] || d._createTransceiver(o), u.mid = t, u.iceGatherer || (u.iceGatherer = d._createIceGatherer(f, n)), I.length && "new" === u.iceTransport.state && (!H || n && 0 !== f ? I.forEach(function(a) {
                                    g(u.iceTransport, a)
                                }) : u.iceTransport.setRemoteCandidates(I)), B = a.RTCRtpReceiver.getCapabilities(o), 15019 > b && (B.codecs = B.codecs.filter(function(a) {
                                    return "rtx" !== a.name
                                })), z = [{
                                    ssrc: 1001 * (2 * f + 2)
                                }], "sendrecv" === r || "sendonly" === r) {
                                var J = !u.rtpReceiver;
                                if (y = u.rtpReceiver || new a.RTCRtpReceiver(u.dtlsTransport, o), J) {
                                    var K;
                                    C = y.track, s ? (i[s.stream] || (i[s.stream] = new a.MediaStream, Object.defineProperty(i[s.stream], "id", {
                                        get: function() {
                                            return s.stream
                                        }
                                    })), Object.defineProperty(C, "id", {
                                        get: function() {
                                            return s.track
                                        }
                                    }), K = i[s.stream]) : (i["default"] || (i["default"] = new a.MediaStream), K = i["default"]), K.addTrack(C), j.push([C, y, K])
                                }
                            }
                            u.localCapabilities = B, u.remoteCapabilities = F, u.rtpReceiver = y, u.rtcpParameters = G, u.sendEncodingParameters = z, u.recvEncodingParameters = A, d._transceive(d.transceivers[f], !1, "sendrecv" === r || "sendonly" === r)
                        }
                    }), this.remoteDescription = {
                        type: c.type,
                        sdp: c.sdp
                    }, c.type) {
                        case "offer":
                            this._updateSignalingState("have-remote-offer");
                            break;
                        case "answer":
                            this._updateSignalingState("stable");
                            break;
                        default:
                            throw new TypeError('unsupported type "' + c.type + '"')
                    }
                    return Object.keys(i).forEach(function(b) {
                        var c = i[b];
                        if (c.getTracks().length) {
                            if (-1 === d.remoteStreams.indexOf(c)) {
                                d.remoteStreams.push(c);
                                var e = new Event("addstream");
                                e.stream = c, a.setTimeout(function() {
                                    d.dispatchEvent(e), "function" == typeof d.onaddstream && d.onaddstream(e)
                                })
                            }
                            j.forEach(function(b) {
                                var e = b[0],
                                    f = b[1];
                                if (c.id === b[2].id) {
                                    var g = new Event("track");
                                    g.track = e, g.receiver = f, g.transceiver = {
                                        receiver: f
                                    }, g.streams = [c], a.setTimeout(function() {
                                        d.dispatchEvent(g), "function" == typeof d.ontrack && d.ontrack(g)
                                    })
                                }
                            })
                        }
                    }), a.setTimeout(function() {
                        d && d.transceivers && d.transceivers.forEach(function(a) {
                            a.iceTransport && "new" === a.iceTransport.state && a.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), a.iceTransport.addRemoteCandidate({}))
                        })
                    }, 4e3), new Promise(function(a) {
                        e.length > 1 && "function" == typeof e[1] && e[1].apply(null), a()
                    })
                }, i.prototype.close = function() {
                    this.transceivers.forEach(function(a) {
                        a.iceTransport && a.iceTransport.stop(), a.dtlsTransport && a.dtlsTransport.stop(), a.rtpSender && a.rtpSender.stop(), a.rtpReceiver && a.rtpReceiver.stop()
                    }), this._updateSignalingState("closed")
                }, i.prototype._updateSignalingState = function(a) {
                    this.signalingState = a;
                    var b = new Event("signalingstatechange");
                    this.dispatchEvent(b), "function" == typeof this.onsignalingstatechange && this.onsignalingstatechange(b)
                }, i.prototype._maybeFireNegotiationNeeded = function() {
                    var b = this;
                    "stable" === this.signalingState && this.needNegotiation !== !0 && (this.needNegotiation = !0, a.setTimeout(function() {
                        if (b.needNegotiation !== !1) {
                            b.needNegotiation = !1;
                            var a = new Event("negotiationneeded");
                            b.dispatchEvent(a), "function" == typeof b.onnegotiationneeded && b.onnegotiationneeded(a)
                        }
                    }, 0))
                }, i.prototype._updateConnectionState = function() {
                    var a, b = this,
                        c = {
                            "new": 0,
                            closed: 0,
                            connecting: 0,
                            checking: 0,
                            connected: 0,
                            completed: 0,
                            disconnected: 0,
                            failed: 0
                        };
                    if (this.transceivers.forEach(function(a) {
                            c[a.iceTransport.state]++, c[a.dtlsTransport.state]++
                        }), c.connected += c.completed, a = "new", c.failed > 0 ? a = "failed" : c.connecting > 0 || c.checking > 0 ? a = "connecting" : c.disconnected > 0 ? a = "disconnected" : c["new"] > 0 ? a = "new" : (c.connected > 0 || c.completed > 0) && (a = "connected"), a !== b.iceConnectionState) {
                        b.iceConnectionState = a;
                        var d = new Event("iceconnectionstatechange");
                        this.dispatchEvent(d), "function" == typeof this.oniceconnectionstatechange && this.oniceconnectionstatechange(d)
                    }
                }, i.prototype.createOffer = function() {
                    var d, e = this,
                        f = arguments;
                    1 === arguments.length && "function" != typeof arguments[0] ? d = arguments[0] : 3 === arguments.length && (d = arguments[2]);
                    var g = this.transceivers.filter(function(a) {
                            return "audio" === a.kind
                        }).length,
                        i = this.transceivers.filter(function(a) {
                            return "video" === a.kind
                        }).length;
                    if (d) {
                        if (d.mandatory || d.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                        void 0 !== d.offerToReceiveAudio && (g = d.offerToReceiveAudio === !0 ? 1 : d.offerToReceiveAudio === !1 ? 0 : d.offerToReceiveAudio), void 0 !== d.offerToReceiveVideo && (i = d.offerToReceiveVideo === !0 ? 1 : d.offerToReceiveVideo === !1 ? 0 : d.offerToReceiveVideo)
                    }
                    for (this.transceivers.forEach(function(a) {
                            "audio" === a.kind ? (g--, 0 > g && (a.wantReceive = !1)) : "video" === a.kind && (i--, 0 > i && (a.wantReceive = !1))
                        }); g > 0 || i > 0;) g > 0 && (this._createTransceiver("audio"), g--), i > 0 && (this._createTransceiver("video"), i--);
                    var j = h.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
                    this.transceivers.forEach(function(c, d) {
                        var f = c.track,
                            g = c.kind,
                            i = h.generateIdentifier();
                        c.mid = i, c.iceGatherer || (c.iceGatherer = e._createIceGatherer(d, e.usingBundle));
                        var j = a.RTCRtpSender.getCapabilities(g);
                        15019 > b && (j.codecs = j.codecs.filter(function(a) {
                            return "rtx" !== a.name
                        })), j.codecs.forEach(function(a) {
                            "H264" === a.name && void 0 === a.parameters["level-asymmetry-allowed"] && (a.parameters["level-asymmetry-allowed"] = "1")
                        });
                        var k = [{
                            ssrc: 1001 * (2 * d + 1)
                        }];
                        f && b >= 15019 && "video" === g && (k[0].rtx = {
                            ssrc: 1001 * (2 * d + 1) + 1
                        }), c.wantReceive && (c.rtpReceiver = new a.RTCRtpReceiver(c.dtlsTransport, g)), c.localCapabilities = j, c.sendEncodingParameters = k
                    }), "max-compat" !== this._config.bundlePolicy && (j += "a=group:BUNDLE " + this.transceivers.map(function(a) {
                        return a.mid
                    }).join(" ") + "\r\n"), j += "a=ice-options:trickle\r\n", this.transceivers.forEach(function(a, b) {
                        j += c(a, a.localCapabilities, "offer", a.stream), j += "a=rtcp-rsize\r\n", !a.iceGatherer || "new" === e.iceGatheringState || 0 !== b && e.usingBundle || (a.iceGatherer.getLocalCandidates().forEach(function(a) {
                            a.component = 1, j += "a=" + h.writeCandidate(a) + "\r\n"
                        }), "completed" === a.iceGatherer.state && (j += "a=end-of-candidates\r\n"))
                    });
                    var k = new a.RTCSessionDescription({
                        type: "offer",
                        sdp: j
                    });
                    return new Promise(function(a) {
                        return f.length > 0 && "function" == typeof f[0] ? (f[0].apply(null, [k]), void a()) : void a(k)
                    })
                }, i.prototype.createAnswer = function() {
                    var d = arguments,
                        f = h.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
                    this.usingBundle && (f += "a=group:BUNDLE " + this.transceivers.map(function(a) {
                        return a.mid
                    }).join(" ") + "\r\n");
                    var g = h.splitSections(this.remoteDescription.sdp).length - 1;
                    this.transceivers.forEach(function(a, d) {
                        if (!(d + 1 > g)) {
                            if (a.isDatachannel) return void(f += "m=application 0 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=mid:" + a.mid + "\r\n");
                            if (a.stream) {
                                var h;
                                "audio" === a.kind ? h = a.stream.getAudioTracks()[0] : "video" === a.kind && (h = a.stream.getVideoTracks()[0]), h && b >= 15019 && "video" === a.kind && (a.sendEncodingParameters[0].rtx = {
                                    ssrc: 1001 * (2 * d + 2) + 1
                                })
                            }
                            var i = e(a.localCapabilities, a.remoteCapabilities),
                                j = i.codecs.filter(function(a) {
                                    return "rtx" === a.name.toLowerCase()
                                }).length;
                            !j && a.sendEncodingParameters[0].rtx && delete a.sendEncodingParameters[0].rtx, f += c(a, i, "answer", a.stream), a.rtcpParameters && a.rtcpParameters.reducedSize && (f += "a=rtcp-rsize\r\n")
                        }
                    });
                    var i = new a.RTCSessionDescription({
                        type: "answer",
                        sdp: f
                    });
                    return new Promise(function(a) {
                        return d.length > 0 && "function" == typeof d[0] ? (d[0].apply(null, [i]), void a()) : void a(i)
                    })
                }, i.prototype.addIceCandidate = function(a) {
                    var b, c;
                    if (a && "" !== a.candidate) {
                        if (!a.sdpMLineIndex && !a.sdpMid) throw new TypeError("sdpMLineIndex or sdpMid required");
                        if (this.remoteDescription) {
                            var d = a.sdpMLineIndex;
                            if (a.sdpMid)
                                for (var e = 0; e < this.transceivers.length; e++)
                                    if (this.transceivers[e].mid === a.sdpMid) {
                                        d = e;
                                        break
                                    }
                            var f = this.transceivers[d];
                            if (f) {
                                if (f.isDatachannel) return Promise.resolve();
                                var i = Object.keys(a.candidate).length > 0 ? h.parseCandidate(a.candidate) : {};
                                if ("tcp" === i.protocol && (0 === i.port || 9 === i.port)) return Promise.resolve();
                                if (i.component && 1 !== i.component) return Promise.resolve();
                                if ((0 === d || d > 0 && f.iceTransport !== this.transceivers[0].iceTransport) && (g(f.iceTransport, i) || (b = new Error("Can not add ICE candidate"), b.name = "OperationError")), !b) {
                                    var j = a.candidate.trim();
                                    0 === j.indexOf("a=") && (j = j.substr(2)), c = h.splitSections(this.remoteDescription.sdp), c[d + 1] += "a=" + (i.type ? j : "end-of-candidates") + "\r\n", this.remoteDescription.sdp = c.join("")
                                }
                            } else b = new Error("Can not add ICE candidate"), b.name = "OperationError"
                        } else b = new Error("Can not add ICE candidate without a remote description"), b.name = "InvalidStateError"
                    } else
                        for (var k = 0; k < this.transceivers.length && (this.transceivers[k].isDatachannel || (this.transceivers[k].iceTransport.addRemoteCandidate({}), c = h.splitSections(this.remoteDescription.sdp), c[k + 1] += "a=end-of-candidates\r\n", this.remoteDescription.sdp = c.join(""), !this.usingBundle)); k++);
                    var l = arguments;
                    return new Promise(function(a, c) {
                        b ? (l.length > 2 && "function" == typeof l[2] && l[2].apply(null, [b]), c(b)) : (l.length > 1 && "function" == typeof l[1] && l[1].apply(null), a())
                    })
                }, i.prototype.getStats = function() {
                    var a = [];
                    this.transceivers.forEach(function(b) {
                        ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(c) {
                            b[c] && a.push(b[c].getStats())
                        })
                    });
                    var b = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1],
                        c = function(a) {
                            return {
                                inboundrtp: "inbound-rtp",
                                outboundrtp: "outbound-rtp",
                                candidatepair: "candidate-pair",
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[a.type] || a.type
                        };
                    return new Promise(function(d) {
                        var e = new Map;
                        Promise.all(a).then(function(a) {
                            a.forEach(function(a) {
                                Object.keys(a).forEach(function(b) {
                                    a[b].type = c(a[b]), e.set(b, a[b])
                                })
                            }), b && b.apply(null, e), d(e)
                        })
                    })
                }, i
            }
        }, {
            sdp: 2
        }],
        2: [function(a, b) {
            "use strict";
            var c = {};
            c.generateIdentifier = function() {
                return Math.random().toString(36).substr(2, 10)
            }, c.localCName = c.generateIdentifier(), c.splitLines = function(a) {
                return a.trim().split("\n").map(function(a) {
                    return a.trim()
                })
            }, c.splitSections = function(a) {
                var b = a.split("\nm=");
                return b.map(function(a, b) {
                    return (b > 0 ? "m=" + a : a).trim() + "\r\n"
                })
            }, c.matchPrefix = function(a, b) {
                return c.splitLines(a).filter(function(a) {
                    return 0 === a.indexOf(b)
                })
            }, c.parseCandidate = function(a) {
                var b;
                b = 0 === a.indexOf("a=candidate:") ? a.substring(12).split(" ") : a.substring(10).split(" ");
                for (var c = {
                        foundation: b[0],
                        component: parseInt(b[1], 10),
                        protocol: b[2].toLowerCase(),
                        priority: parseInt(b[3], 10),
                        ip: b[4],
                        port: parseInt(b[5], 10),
                        type: b[7]
                    }, d = 8; d < b.length; d += 2) switch (b[d]) {
                    case "raddr":
                        c.relatedAddress = b[d + 1];
                        break;
                    case "rport":
                        c.relatedPort = parseInt(b[d + 1], 10);
                        break;
                    case "tcptype":
                        c.tcpType = b[d + 1];
                        break;
                    case "ufrag":
                        c.ufrag = b[d + 1], c.usernameFragment = b[d + 1];
                        break;
                    default:
                        c[b[d]] = b[d + 1]
                }
                return c
            }, c.writeCandidate = function(a) {
                var b = [];
                b.push(a.foundation), b.push(a.component), b.push(a.protocol.toUpperCase()), b.push(a.priority), b.push(a.ip), b.push(a.port);
                var c = a.type;
                return b.push("typ"), b.push(c), "host" !== c && a.relatedAddress && a.relatedPort && (b.push("raddr"), b.push(a.relatedAddress), b.push("rport"), b.push(a.relatedPort)), a.tcpType && "tcp" === a.protocol.toLowerCase() && (b.push("tcptype"), b.push(a.tcpType)), a.ufrag && (b.push("ufrag"), b.push(a.ufrag)), "candidate:" + b.join(" ")
            }, c.parseIceOptions = function(a) {
                return a.substr(14).split(" ")
            }, c.parseRtpMap = function(a) {
                var b = a.substr(9).split(" "),
                    c = {
                        payloadType: parseInt(b.shift(), 10)
                    };
                return b = b[0].split("/"), c.name = b[0], c.clockRate = parseInt(b[1], 10), c.numChannels = 3 === b.length ? parseInt(b[2], 10) : 1, c
            }, c.writeRtpMap = function(a) {
                var b = a.payloadType;
                return void 0 !== a.preferredPayloadType && (b = a.preferredPayloadType), "a=rtpmap:" + b + " " + a.name + "/" + a.clockRate + (1 !== a.numChannels ? "/" + a.numChannels : "") + "\r\n"
            }, c.parseExtmap = function(a) {
                var b = a.substr(9).split(" ");
                return {
                    id: parseInt(b[0], 10),
                    direction: b[0].indexOf("/") > 0 ? b[0].split("/")[1] : "sendrecv",
                    uri: b[1]
                }
            }, c.writeExtmap = function(a) {
                return "a=extmap:" + (a.id || a.preferredId) + (a.direction && "sendrecv" !== a.direction ? "/" + a.direction : "") + " " + a.uri + "\r\n"
            }, c.parseFmtp = function(a) {
                for (var b, c = {}, d = a.substr(a.indexOf(" ") + 1).split(";"), e = 0; e < d.length; e++) b = d[e].trim().split("="), c[b[0].trim()] = b[1];
                return c
            }, c.writeFmtp = function(a) {
                var b = "",
                    c = a.payloadType;
                if (void 0 !== a.preferredPayloadType && (c = a.preferredPayloadType), a.parameters && Object.keys(a.parameters).length) {
                    var d = [];
                    Object.keys(a.parameters).forEach(function(b) {
                        d.push(b + "=" + a.parameters[b])
                    }), b += "a=fmtp:" + c + " " + d.join(";") + "\r\n"
                }
                return b
            }, c.parseRtcpFb = function(a) {
                var b = a.substr(a.indexOf(" ") + 1).split(" ");
                return {
                    type: b.shift(),
                    parameter: b.join(" ")
                }
            }, c.writeRtcpFb = function(a) {
                var b = "",
                    c = a.payloadType;
                return void 0 !== a.preferredPayloadType && (c = a.preferredPayloadType), a.rtcpFeedback && a.rtcpFeedback.length && a.rtcpFeedback.forEach(function(a) {
                    b += "a=rtcp-fb:" + c + " " + a.type + (a.parameter && a.parameter.length ? " " + a.parameter : "") + "\r\n"
                }), b
            }, c.parseSsrcMedia = function(a) {
                var b = a.indexOf(" "),
                    c = {
                        ssrc: parseInt(a.substr(7, b - 7), 10)
                    },
                    d = a.indexOf(":", b);
                return d > -1 ? (c.attribute = a.substr(b + 1, d - b - 1), c.value = a.substr(d + 1)) : c.attribute = a.substr(b + 1), c
            }, c.getMid = function(a) {
                var b = c.matchPrefix(a, "a=mid:")[0];
                return b ? b.substr(6) : void 0
            }, c.parseFingerprint = function(a) {
                var b = a.substr(14).split(" ");
                return {
                    algorithm: b[0].toLowerCase(),
                    value: b[1]
                }
            }, c.getDtlsParameters = function(a, b) {
                var d = c.matchPrefix(a + b, "a=fingerprint:");
                return {
                    role: "auto",
                    fingerprints: d.map(c.parseFingerprint)
                }
            }, c.writeDtlsParameters = function(a, b) {
                var c = "a=setup:" + b + "\r\n";
                return a.fingerprints.forEach(function(a) {
                    c += "a=fingerprint:" + a.algorithm + " " + a.value + "\r\n"
                }), c
            }, c.getIceParameters = function(a, b) {
                var d = c.splitLines(a);
                d = d.concat(c.splitLines(b));
                var e = {
                    usernameFragment: d.filter(function(a) {
                        return 0 === a.indexOf("a=ice-ufrag:")
                    })[0].substr(12),
                    password: d.filter(function(a) {
                        return 0 === a.indexOf("a=ice-pwd:")
                    })[0].substr(10)
                };
                return e
            }, c.writeIceParameters = function(a) {
                return "a=ice-ufrag:" + a.usernameFragment + "\r\na=ice-pwd:" + a.password + "\r\n"
            }, c.parseRtpParameters = function(a) {
                for (var b = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: []
                    }, d = c.splitLines(a), e = d[0].split(" "), f = 3; f < e.length; f++) {
                    var g = e[f],
                        h = c.matchPrefix(a, "a=rtpmap:" + g + " ")[0];

                    if (h) {
                        var i = c.parseRtpMap(h),
                            j = c.matchPrefix(a, "a=fmtp:" + g + " ");
                        switch (i.parameters = j.length ? c.parseFmtp(j[0]) : {}, i.rtcpFeedback = c.matchPrefix(a, "a=rtcp-fb:" + g + " ").map(c.parseRtcpFb), b.codecs.push(i), i.name.toUpperCase()) {
                            case "RED":
                            case "ULPFEC":
                                b.fecMechanisms.push(i.name.toUpperCase())
                        }
                    }
                }
                return c.matchPrefix(a, "a=extmap:").forEach(function(a) {
                    b.headerExtensions.push(c.parseExtmap(a))
                }), b
            }, c.writeRtpDescription = function(a, b) {
                var d = "";
                d += "m=" + a + " ", d += b.codecs.length > 0 ? "9" : "0", d += " UDP/TLS/RTP/SAVPF ", d += b.codecs.map(function(a) {
                    return void 0 !== a.preferredPayloadType ? a.preferredPayloadType : a.payloadType
                }).join(" ") + "\r\n", d += "c=IN IP4 0.0.0.0\r\n", d += "a=rtcp:9 IN IP4 0.0.0.0\r\n", b.codecs.forEach(function(a) {
                    d += c.writeRtpMap(a), d += c.writeFmtp(a), d += c.writeRtcpFb(a)
                });
                var e = 0;
                return b.codecs.forEach(function(a) {
                    a.maxptime > e && (e = a.maxptime)
                }), e > 0 && (d += "a=maxptime:" + e + "\r\n"), d += "a=rtcp-mux\r\n", b.headerExtensions.forEach(function(a) {
                    d += c.writeExtmap(a)
                }), d
            }, c.parseRtpEncodingParameters = function(a) {
                var b, d = [],
                    e = c.parseRtpParameters(a),
                    f = -1 !== e.fecMechanisms.indexOf("RED"),
                    g = -1 !== e.fecMechanisms.indexOf("ULPFEC"),
                    h = c.matchPrefix(a, "a=ssrc:").map(function(a) {
                        return c.parseSsrcMedia(a)
                    }).filter(function(a) {
                        return "cname" === a.attribute
                    }),
                    i = h.length > 0 && h[0].ssrc,
                    j = c.matchPrefix(a, "a=ssrc-group:FID").map(function(a) {
                        var b = a.split(" ");
                        return b.shift(), b.map(function(a) {
                            return parseInt(a, 10)
                        })
                    });
                j.length > 0 && j[0].length > 1 && j[0][0] === i && (b = j[0][1]), e.codecs.forEach(function(a) {
                    if ("RTX" === a.name.toUpperCase() && a.parameters.apt) {
                        var c = {
                            ssrc: i,
                            codecPayloadType: parseInt(a.parameters.apt, 10),
                            rtx: {
                                ssrc: b
                            }
                        };
                        d.push(c), f && (c = JSON.parse(JSON.stringify(c)), c.fec = {
                            ssrc: b,
                            mechanism: g ? "red+ulpfec" : "red"
                        }, d.push(c))
                    }
                }), 0 === d.length && i && d.push({
                    ssrc: i
                });
                var k = c.matchPrefix(a, "b=");
                return k.length && (k = 0 === k[0].indexOf("b=TIAS:") ? parseInt(k[0].substr(7), 10) : 0 === k[0].indexOf("b=AS:") ? 1e3 * parseInt(k[0].substr(5), 10) * .95 - 16e3 : void 0, d.forEach(function(a) {
                    a.maxBitrate = k
                })), d
            }, c.parseRtcpParameters = function(a) {
                var b = {},
                    d = c.matchPrefix(a, "a=ssrc:").map(function(a) {
                        return c.parseSsrcMedia(a)
                    }).filter(function(a) {
                        return "cname" === a.attribute
                    })[0];
                d && (b.cname = d.value, b.ssrc = d.ssrc);
                var e = c.matchPrefix(a, "a=rtcp-rsize");
                b.reducedSize = e.length > 0, b.compound = 0 === e.length;
                var f = c.matchPrefix(a, "a=rtcp-mux");
                return b.mux = f.length > 0, b
            }, c.parseMsid = function(a) {
                var b, d = c.matchPrefix(a, "a=msid:");
                if (1 === d.length) return b = d[0].substr(7).split(" "), {
                    stream: b[0],
                    track: b[1]
                };
                var e = c.matchPrefix(a, "a=ssrc:").map(function(a) {
                    return c.parseSsrcMedia(a)
                }).filter(function(a) {
                    return "msid" === a.attribute
                });
                return e.length > 0 ? (b = e[0].value.split(" "), {
                    stream: b[0],
                    track: b[1]
                }) : void 0
            }, c.generateSessionId = function() {
                return Math.random().toString().substr(2, 21)
            }, c.writeSessionBoilerplate = function(a, b) {
                var d, e = void 0 !== b ? b : 2;
                return d = a ? a : c.generateSessionId(), "v=0\r\no=thisisadapterortc " + d + " " + e + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
            }, c.writeMediaSection = function(a, b, d, e) {
                var f = c.writeRtpDescription(a.kind, b);
                if (f += c.writeIceParameters(a.iceGatherer.getLocalParameters()), f += c.writeDtlsParameters(a.dtlsTransport.getLocalParameters(), "offer" === d ? "actpass" : "active"), f += "a=mid:" + a.mid + "\r\n", f += a.direction ? "a=" + a.direction + "\r\n" : a.rtpSender && a.rtpReceiver ? "a=sendrecv\r\n" : a.rtpSender ? "a=sendonly\r\n" : a.rtpReceiver ? "a=recvonly\r\n" : "a=inactive\r\n", a.rtpSender) {
                    var g = "msid:" + e.id + " " + a.rtpSender.track.id + "\r\n";
                    f += "a=" + g, f += "a=ssrc:" + a.sendEncodingParameters[0].ssrc + " " + g, a.sendEncodingParameters[0].rtx && (f += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " " + g, f += "a=ssrc-group:FID " + a.sendEncodingParameters[0].ssrc + " " + a.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                }
                return f += "a=ssrc:" + a.sendEncodingParameters[0].ssrc + " cname:" + c.localCName + "\r\n", a.rtpSender && a.sendEncodingParameters[0].rtx && (f += "a=ssrc:" + a.sendEncodingParameters[0].rtx.ssrc + " cname:" + c.localCName + "\r\n"), f
            }, c.getDirection = function(a, b) {
                for (var d = c.splitLines(a), e = 0; e < d.length; e++) switch (d[e]) {
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                        return d[e].substr(2)
                }
                return b ? c.getDirection(b) : "sendrecv"
            }, c.getKind = function(a) {
                var b = c.splitLines(a),
                    d = b[0].split(" ");
                return d[0].substr(2)
            }, c.isRejected = function(a) {
                return "0" === a.split(" ", 2)[1]
            }, c.parseMLine = function(a) {
                var b = c.splitLines(a),
                    d = b[0].split(" ");
                return {
                    kind: d[0].substr(2),
                    port: parseInt(d[1], 10),
                    protocol: d[2],
                    fmt: d.slice(3).join(" ")
                }
            }, "object" == typeof b && (b.exports = c)
        }, {}],
        3: [function(a, b) {
            (function(c) {
                "use strict";
                var d = a("./adapter_factory.js");
                b.exports = d({
                    window: c.window
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./adapter_factory.js": 4
        }],
        4: [function(a, b) {
            "use strict";
            var c = a("./utils");
            b.exports = function(b, d) {
                var e = b && b.window,
                    f = {
                        shimChrome: !0,
                        shimFirefox: !0,
                        shimEdge: !0,
                        shimSafari: !0
                    };
                for (var g in d) hasOwnProperty.call(d, g) && (f[g] = d[g]);
                var h = c.log,
                    i = c.detectBrowser(e),
                    j = {
                        browserDetails: i,
                        extractVersion: c.extractVersion,
                        disableLog: c.disableLog,
                        disableWarnings: c.disableWarnings
                    },
                    k = a("./chrome/chrome_shim") || null,
                    l = a("./edge/edge_shim") || null,
                    m = a("./firefox/firefox_shim") || null,
                    n = a("./safari/safari_shim") || null,
                    o = a("./common_shim") || null;
                switch (i.browser) {
                    case "chrome":
                        if (!k || !k.shimPeerConnection || !f.shimChrome) return h("Chrome shim is not included in this adapter release."), j;
                        h("adapter.js shimming chrome."), j.browserShim = k, o.shimCreateObjectURL(e), k.shimGetUserMedia(e), k.shimMediaStream(e), k.shimSourceObject(e), k.shimPeerConnection(e), k.shimOnTrack(e), k.shimAddTrackRemoveTrack(e), k.shimGetSendersWithDtmf(e), o.shimRTCIceCandidate(e);
                        break;
                    case "firefox":
                        if (!m || !m.shimPeerConnection || !f.shimFirefox) return h("Firefox shim is not included in this adapter release."), j;
                        h("adapter.js shimming firefox."), j.browserShim = m, o.shimCreateObjectURL(e), m.shimGetUserMedia(e), m.shimSourceObject(e), m.shimPeerConnection(e), m.shimOnTrack(e), o.shimRTCIceCandidate(e);
                        break;
                    case "edge":
                        if (!l || !l.shimPeerConnection || !f.shimEdge) return h("MS edge shim is not included in this adapter release."), j;
                        h("adapter.js shimming edge."), j.browserShim = l, o.shimCreateObjectURL(e), l.shimGetUserMedia(e), l.shimPeerConnection(e), l.shimReplaceTrack(e);
                        break;
                    case "safari":
                        if (!n || !f.shimSafari) return h("Safari shim is not included in this adapter release."), j;
                        h("adapter.js shimming safari."), j.browserShim = n, o.shimCreateObjectURL(e), n.shimRTCIceServerUrls(e), n.shimCallbacksAPI(e), n.shimLocalStreamsAPI(e), n.shimRemoteStreamsAPI(e), n.shimTrackEventTransceiver(e), n.shimGetUserMedia(e), o.shimRTCIceCandidate(e);
                        break;
                    default:
                        h("Unsupported browser!")
                }
                return j
            }
        }, {
            "./chrome/chrome_shim": 5,
            "./common_shim": 7,
            "./edge/edge_shim": 8,
            "./firefox/firefox_shim": 10,
            "./safari/safari_shim": 12,
            "./utils": 13
        }],
        5: [function(a, b) {
            "use strict";
            var c = a("../utils.js"),
                d = c.log,
                e = {
                    shimMediaStream: function(a) {
                        a.MediaStream = a.MediaStream || a.webkitMediaStream
                    },
                    shimOnTrack: function(a) {
                        if ("object" == typeof a && a.RTCPeerConnection && !("ontrack" in a.RTCPeerConnection.prototype)) {
                            Object.defineProperty(a.RTCPeerConnection.prototype, "ontrack", {
                                get: function() {
                                    return this._ontrack
                                },
                                set: function(a) {
                                    this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = a)
                                }
                            });
                            var b = a.RTCPeerConnection.prototype.setRemoteDescription;
                            a.RTCPeerConnection.prototype.setRemoteDescription = function() {
                                var c = this;
                                return c._ontrackpoly || (c._ontrackpoly = function(b) {
                                    b.stream.addEventListener("addtrack", function(d) {
                                        var e;
                                        e = a.RTCPeerConnection.prototype.getReceivers ? c.getReceivers().find(function(a) {
                                            return a.track && a.track.id === d.track.id
                                        }) : {
                                            track: d.track
                                        };
                                        var f = new Event("track");
                                        f.track = d.track, f.receiver = e, f.transceiver = {
                                            receiver: e
                                        }, f.streams = [b.stream], c.dispatchEvent(f)
                                    }), b.stream.getTracks().forEach(function(d) {
                                        var e;
                                        e = a.RTCPeerConnection.prototype.getReceivers ? c.getReceivers().find(function(a) {
                                            return a.track && a.track.id === d.id
                                        }) : {
                                            track: d
                                        };
                                        var f = new Event("track");
                                        f.track = d, f.receiver = e, f.transceiver = {
                                            receiver: e
                                        }, f.streams = [b.stream], c.dispatchEvent(f)
                                    })
                                }, c.addEventListener("addstream", c._ontrackpoly)), b.apply(c, arguments)
                            }
                        }
                    },
                    shimGetSendersWithDtmf: function(a) {
                        if ("object" == typeof a && a.RTCPeerConnection && !("getSenders" in a.RTCPeerConnection.prototype) && "createDTMFSender" in a.RTCPeerConnection.prototype) {
                            var b = function(a, b) {
                                return {
                                    track: b,
                                    get dtmf() {
                                        return void 0 === this._dtmf && (this._dtmf = "audio" === b.kind ? a.createDTMFSender(b) : null), this._dtmf
                                    },
                                    _pc: a
                                }
                            };
                            if (!a.RTCPeerConnection.prototype.getSenders) {
                                a.RTCPeerConnection.prototype.getSenders = function() {
                                    return this._senders = this._senders || [], this._senders.slice()
                                };
                                var c = a.RTCPeerConnection.prototype.addTrack;
                                a.RTCPeerConnection.prototype.addTrack = function(a) {
                                    var d = this,
                                        e = c.apply(d, arguments);
                                    return e || (e = b(d, a), d._senders.push(e)), e
                                };
                                var d = a.RTCPeerConnection.prototype.removeTrack;
                                a.RTCPeerConnection.prototype.removeTrack = function(a) {
                                    var b = this;
                                    d.apply(b, arguments);
                                    var c = b._senders.indexOf(a); - 1 !== c && b._senders.splice(c, 1)
                                }
                            }
                            var e = a.RTCPeerConnection.prototype.addStream;
                            a.RTCPeerConnection.prototype.addStream = function(a) {
                                var c = this;
                                c._senders = c._senders || [], e.apply(c, [a]), a.getTracks().forEach(function(a) {
                                    c._senders.push(b(c, a))
                                })
                            };
                            var f = a.RTCPeerConnection.prototype.removeStream;
                            a.RTCPeerConnection.prototype.removeStream = function(a) {
                                var b = this;
                                b._senders = b._senders || [], f.apply(b, [b._streams[a.id] || a]), a.getTracks().forEach(function(a) {
                                    var c = b._senders.find(function(b) {
                                        return b.track === a
                                    });
                                    c && b._senders.splice(b._senders.indexOf(c), 1)
                                })
                            }
                        } else if ("object" == typeof a && a.RTCPeerConnection && "getSenders" in a.RTCPeerConnection.prototype && "createDTMFSender" in a.RTCPeerConnection.prototype && a.RTCRtpSender && !("dtmf" in a.RTCRtpSender.prototype)) {
                            var g = a.RTCPeerConnection.prototype.getSenders;
                            a.RTCPeerConnection.prototype.getSenders = function() {
                                var a = this,
                                    b = g.apply(a, []);
                                return b.forEach(function(b) {
                                    b._pc = a
                                }), b
                            }, Object.defineProperty(a.RTCRtpSender.prototype, "dtmf", {
                                get: function() {
                                    return void 0 === this._dtmf && (this._dtmf = "audio" === this.track.kind ? this._pc.createDTMFSender(this.track) : null), this._dtmf
                                }
                            })
                        }
                    },
                    shimSourceObject: function(a) {
                        var b = a && a.URL;
                        "object" == typeof a && (!a.HTMLMediaElement || "srcObject" in a.HTMLMediaElement.prototype || Object.defineProperty(a.HTMLMediaElement.prototype, "srcObject", {
                            get: function() {
                                return this._srcObject
                            },
                            set: function(a) {
                                var c = this;
                                return this._srcObject = a, this.src && b.revokeObjectURL(this.src), a ? (this.src = b.createObjectURL(a), a.addEventListener("addtrack", function() {
                                    c.src && b.revokeObjectURL(c.src), c.src = b.createObjectURL(a)
                                }), void a.addEventListener("removetrack", function() {
                                    c.src && b.revokeObjectURL(c.src), c.src = b.createObjectURL(a)
                                })) : void(this.src = "")
                            }
                        }))
                    },
                    shimAddTrackRemoveTrack: function(a) {
                        function b(a, b) {
                            var c = b.sdp;
                            return Object.keys(a._reverseStreams || []).forEach(function(b) {
                                var d = a._reverseStreams[b],
                                    e = a._streams[d.id];
                                c = c.replace(new RegExp(e.id, "g"), d.id)
                            }), new RTCSessionDescription({
                                type: b.type,
                                sdp: c
                            })
                        }

                        function d(a, b) {
                            var c = b.sdp;
                            return Object.keys(a._reverseStreams || []).forEach(function(b) {
                                var d = a._reverseStreams[b],
                                    e = a._streams[d.id];
                                c = c.replace(new RegExp(d.id, "g"), e.id)
                            }), new RTCSessionDescription({
                                type: b.type,
                                sdp: c
                            })
                        }
                        var e = c.detectBrowser(a);
                        if (!(a.RTCPeerConnection.prototype.addTrack && e.version >= 62)) {
                            var f = a.RTCPeerConnection.prototype.getLocalStreams;
                            a.RTCPeerConnection.prototype.getLocalStreams = function() {
                                var a = this,
                                    b = f.apply(this);
                                return a._reverseStreams = a._reverseStreams || {}, b.map(function(b) {
                                    return a._reverseStreams[b.id]
                                })
                            };
                            var g = a.RTCPeerConnection.prototype.addStream;
                            a.RTCPeerConnection.prototype.addStream = function(b) {
                                var c = this;
                                if (c._streams = c._streams || {}, c._reverseStreams = c._reverseStreams || {}, b.getTracks().forEach(function(a) {
                                        var b = c.getSenders().find(function(b) {
                                            return b.track === a
                                        });
                                        if (b) throw new DOMException("Track already exists.", "InvalidAccessError")
                                    }), !c._reverseStreams[b.id]) {
                                    var d = new a.MediaStream(b.getTracks());
                                    c._streams[b.id] = d, c._reverseStreams[d.id] = b, b = d
                                }
                                g.apply(c, [b])
                            };
                            var h = a.RTCPeerConnection.prototype.removeStream;
                            a.RTCPeerConnection.prototype.removeStream = function(a) {
                                var b = this;
                                b._streams = b._streams || {}, b._reverseStreams = b._reverseStreams || {}, h.apply(b, [b._streams[a.id] || a]), delete b._reverseStreams[b._streams[a.id] ? b._streams[a.id].id : a.id], delete b._streams[a.id]
                            }, a.RTCPeerConnection.prototype.addTrack = function(b, c) {
                                var d = this;
                                if ("closed" === d.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                var e = [].slice.call(arguments, 1);
                                if (1 !== e.length || !e[0].getTracks().find(function(a) {
                                        return a === b
                                    })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                                var f = d.getSenders().find(function(a) {
                                    return a.track === b
                                });
                                if (f) throw new DOMException("Track already exists.", "InvalidAccessError");
                                d._streams = d._streams || {}, d._reverseStreams = d._reverseStreams || {};
                                var g = d._streams[c.id];
                                if (g) g.addTrack(b), Promise.resolve().then(function() {
                                    d.dispatchEvent(new Event("negotiationneeded"))
                                });
                                else {
                                    var h = new a.MediaStream([b]);
                                    d._streams[c.id] = h, d._reverseStreams[h.id] = c, d.addStream(h)
                                }
                                return d.getSenders().find(function(a) {
                                    return a.track === b
                                })
                            }, ["createOffer", "createAnswer"].forEach(function(c) {
                                var d = a.RTCPeerConnection.prototype[c];
                                a.RTCPeerConnection.prototype[c] = function() {
                                    var a = this,
                                        c = arguments,
                                        e = arguments.length && "function" == typeof arguments[0];
                                    return e ? d.apply(a, [function(d) {
                                        var e = b(a, d);
                                        c[0].apply(null, [e])
                                    }, function(a) {
                                        c[1] && c[1].apply(null, a)
                                    }, arguments[2]]) : d.apply(a, arguments).then(function(c) {
                                        return b(a, c)
                                    })
                                }
                            });
                            var i = a.RTCPeerConnection.prototype.setLocalDescription;
                            a.RTCPeerConnection.prototype.setLocalDescription = function() {
                                var a = this;
                                return arguments.length && arguments[0].type ? (arguments[0] = d(a, arguments[0]), i.apply(a, arguments)) : i.apply(a, arguments)
                            };
                            var j = Object.getOwnPropertyDescriptor(a.RTCPeerConnection.prototype, "localDescription");
                            Object.defineProperty(a.RTCPeerConnection.prototype, "localDescription", {
                                get: function() {
                                    var a = this,
                                        c = j.get.apply(this);
                                    return "" === c.type ? c : b(a, c)
                                }
                            }), a.RTCPeerConnection.prototype.removeTrack = function(a) {
                                var b = this;
                                if ("closed" === b.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                                if (!a._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                                var c = a._pc === b;
                                if (!c) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                                b._streams = b._streams || {};
                                var d;
                                Object.keys(b._streams).forEach(function(c) {
                                    var e = b._streams[c].getTracks().find(function(b) {
                                        return a.track === b
                                    });
                                    e && (d = b._streams[c])
                                }), d && (1 === d.getTracks().length ? b.removeStream(d) : d.removeTrack(a.track), b.dispatchEvent(new Event("negotiationneeded")))
                            }
                        }
                    },
                    shimPeerConnection: function(a) {
                        var b = c.detectBrowser(a);
                        if (a.RTCPeerConnection) {
                            var e = a.RTCPeerConnection;
                            a.RTCPeerConnection = function(a, b) {
                                if (a && a.iceServers) {
                                    for (var d = [], f = 0; f < a.iceServers.length; f++) {
                                        var g = a.iceServers[f];
                                        !g.hasOwnProperty("urls") && g.hasOwnProperty("url") ? (c.deprecated("RTCIceServer.url", "RTCIceServer.urls"), g = JSON.parse(JSON.stringify(g)), g.urls = g.url, d.push(g)) : d.push(a.iceServers[f])
                                    }
                                    a.iceServers = d
                                }
                                return new e(a, b)
                            }, a.RTCPeerConnection.prototype = e.prototype, Object.defineProperty(a.RTCPeerConnection, "generateCertificate", {
                                get: function() {
                                    return e.generateCertificate
                                }
                            })
                        } else a.RTCPeerConnection = function(b, c) {
                            return d("PeerConnection"), b && b.iceTransportPolicy && (b.iceTransports = b.iceTransportPolicy), new a.webkitRTCPeerConnection(b, c)
                        }, a.RTCPeerConnection.prototype = a.webkitRTCPeerConnection.prototype, a.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(a.RTCPeerConnection, "generateCertificate", {
                            get: function() {
                                return a.webkitRTCPeerConnection.generateCertificate
                            }
                        });
                        var f = a.RTCPeerConnection.prototype.getStats;
                        a.RTCPeerConnection.prototype.getStats = function(a, b, c) {
                            var d = this,
                                e = arguments;
                            if (arguments.length > 0 && "function" == typeof a) return f.apply(this, arguments);
                            if (0 === f.length && (0 === arguments.length || "function" != typeof arguments[0])) return f.apply(this, []);
                            var g = function(a) {
                                    var b = {},
                                        c = a.result();
                                    return c.forEach(function(a) {
                                        var c = {
                                            id: a.id,
                                            timestamp: a.timestamp,
                                            type: {
                                                localcandidate: "local-candidate",
                                                remotecandidate: "remote-candidate"
                                            }[a.type] || a.type
                                        };
                                        a.names().forEach(function(b) {
                                            c[b] = a.stat(b)
                                        }), b[c.id] = c
                                    }), b
                                },
                                h = function(a) {
                                    return new Map(Object.keys(a).map(function(b) {
                                        return [b, a[b]]
                                    }))
                                };
                            if (arguments.length >= 2) {
                                var i = function(a) {
                                    e[1](h(g(a)))
                                };
                                return f.apply(this, [i, arguments[0]])
                            }
                            return new Promise(function(a, b) {
                                f.apply(d, [function(b) {
                                    a(h(g(b)))
                                }, b])
                            }).then(b, c)
                        }, b.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(b) {
                            var c = a.RTCPeerConnection.prototype[b];
                            a.RTCPeerConnection.prototype[b] = function() {
                                var a = arguments,
                                    b = this,
                                    d = new Promise(function(d, e) {
                                        c.apply(b, [a[0], d, e])
                                    });
                                return a.length < 2 ? d : d.then(function() {
                                    a[1].apply(null, [])
                                }, function(b) {
                                    a.length >= 3 && a[2].apply(null, [b])
                                })
                            }
                        }), b.version < 52 && ["createOffer", "createAnswer"].forEach(function(b) {
                            var c = a.RTCPeerConnection.prototype[b];
                            a.RTCPeerConnection.prototype[b] = function() {
                                var a = this;
                                if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                                    var b = 1 === arguments.length ? arguments[0] : void 0;
                                    return new Promise(function(d, e) {
                                        c.apply(a, [d, e, b])
                                    })
                                }
                                return c.apply(this, arguments)
                            }
                        }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(b) {
                            var c = a.RTCPeerConnection.prototype[b];
                            a.RTCPeerConnection.prototype[b] = function() {
                                return arguments[0] = new("addIceCandidate" === b ? a.RTCIceCandidate : a.RTCSessionDescription)(arguments[0]), c.apply(this, arguments)
                            }
                        });
                        var g = a.RTCPeerConnection.prototype.addIceCandidate;
                        a.RTCPeerConnection.prototype.addIceCandidate = function() {
                            return arguments[0] ? g.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                        }
                    }
                };
            b.exports = {
                shimMediaStream: e.shimMediaStream,
                shimOnTrack: e.shimOnTrack,
                shimAddTrackRemoveTrack: e.shimAddTrackRemoveTrack,
                shimGetSendersWithDtmf: e.shimGetSendersWithDtmf,
                shimSourceObject: e.shimSourceObject,
                shimPeerConnection: e.shimPeerConnection,
                shimGetUserMedia: a("./getusermedia")
            }
        }, {
            "../utils.js": 13,
            "./getusermedia": 6
        }],
        6: [function(a, b) {
            "use strict";
            var c = a("../utils.js"),
                d = c.log;
            b.exports = function(a) {
                var b = (c.detectBrowser(a), a && a.navigator),
                    e = function(a) {
                        if ("object" != typeof a || a.mandatory || a.optional) return a;
                        var b = {};
                        return Object.keys(a).forEach(function(c) {
                            if ("require" !== c && "advanced" !== c && "mediaSource" !== c) {
                                var d = "object" == typeof a[c] ? a[c] : {
                                    ideal: a[c]
                                };
                                void 0 !== d.exact && "number" == typeof d.exact && (d.min = d.max = d.exact);
                                var e = function(a, b) {
                                    return a ? a + b.charAt(0).toUpperCase() + b.slice(1) : "deviceId" === b ? "sourceId" : b
                                };
                                if (void 0 !== d.ideal) {
                                    b.optional = b.optional || [];
                                    var f = {};
                                    "number" == typeof d.ideal ? (f[e("min", c)] = d.ideal, b.optional.push(f), f = {}, f[e("max", c)] = d.ideal, b.optional.push(f)) : (f[e("", c)] = d.ideal, b.optional.push(f))
                                }
                                void 0 !== d.exact && "number" != typeof d.exact ? (b.mandatory = b.mandatory || {}, b.mandatory[e("", c)] = d.exact) : ["min", "max"].forEach(function(a) {
                                    void 0 !== d[a] && (b.mandatory = b.mandatory || {}, b.mandatory[e(a, c)] = d[a])
                                })
                            }
                        }), a.advanced && (b.optional = (b.optional || []).concat(a.advanced)), b
                    },
                    f = function(a, c) {
                        if (a = JSON.parse(JSON.stringify(a)), a && "object" == typeof a.audio) {
                            var f = function(a, b, c) {
                                b in a && !(c in a) && (a[c] = a[b], delete a[b])
                            };
                            a = JSON.parse(JSON.stringify(a)), f(a.audio, "autoGainControl", "googAutoGainControl"), f(a.audio, "noiseSuppression", "googNoiseSuppression"), a.audio = e(a.audio)
                        }
                        if (a && "object" == typeof a.video) {
                            var g = a.video.facingMode;
                            g = g && ("object" == typeof g ? g : {
                                ideal: g
                            });
                            var h = !0;
                            if (!(!g || "user" !== g.exact && "environment" !== g.exact && "user" !== g.ideal && "environment" !== g.ideal || b.mediaDevices.getSupportedConstraints && b.mediaDevices.getSupportedConstraints().facingMode && !h)) {
                                delete a.video.facingMode;
                                var i;
                                if ("environment" === g.exact || "environment" === g.ideal ? i = ["back", "rear"] : ("user" === g.exact || "user" === g.ideal) && (i = ["front"]), i) return b.mediaDevices.enumerateDevices().then(function(b) {
                                    b = b.filter(function(a) {
                                        return "videoinput" === a.kind
                                    });
                                    var f = b.find(function(a) {
                                        return i.some(function(b) {
                                            return -1 !== a.label.toLowerCase().indexOf(b)
                                        })
                                    });
                                    return !f && b.length && -1 !== i.indexOf("back") && (f = b[b.length - 1]), f && (a.video.deviceId = g.exact ? {
                                        exact: f.deviceId
                                    } : {
                                        ideal: f.deviceId
                                    }), a.video = e(a.video), d("chrome: " + JSON.stringify(a)), c(a)
                                })
                            }
                            a.video = e(a.video)
                        }
                        return d("chrome: " + JSON.stringify(a)), c(a)
                    },
                    g = function(a) {
                        return {
                            name: {
                                PermissionDeniedError: "NotAllowedError",
                                InvalidStateError: "NotReadableError",
                                DevicesNotFoundError: "NotFoundError",
                                ConstraintNotSatisfiedError: "OverconstrainedError",
                                TrackStartError: "NotReadableError",
                                MediaDeviceFailedDueToShutdown: "NotReadableError",
                                MediaDeviceKillSwitchOn: "NotReadableError"
                            }[a.name] || a.name,
                            message: a.message,
                            constraint: a.constraintName,
                            toString: function() {
                                return this.name + (this.message && ": ") + this.message
                            }
                        }
                    },
                    h = function(a, c, d) {
                        f(a, function(a) {
                            b.webkitGetUserMedia(a, c, function(a) {
                                d && d(g(a))
                            })
                        })
                    };
                b.getUserMedia = h;
                var i = function(a) {
                    return new Promise(function(c, d) {
                        b.getUserMedia(a, c, d)
                    })
                };
                if (b.mediaDevices || (b.mediaDevices = {
                        getUserMedia: i,
                        enumerateDevices: function() {
                            return new Promise(function(b) {
                                var c = {
                                    audio: "audioinput",
                                    video: "videoinput"
                                };
                                return a.MediaStreamTrack.getSources(function(a) {
                                    b(a.map(function(a) {
                                        return {
                                            label: a.label,
                                            kind: c[a.kind],
                                            deviceId: a.id,
                                            groupId: ""
                                        }
                                    }))
                                })
                            })
                        },
                        getSupportedConstraints: function() {
                            return {
                                deviceId: !0,
                                echoCancellation: !0,
                                facingMode: !0,
                                frameRate: !0,
                                height: !0,
                                width: !0
                            }
                        }
                    }), b.mediaDevices.getUserMedia) {
                    var j = b.mediaDevices.getUserMedia.bind(b.mediaDevices);
                    b.mediaDevices.getUserMedia = function(a) {
                        return f(a, function(a) {
                            return j(a).then(function(b) {
                                if (a.audio && !b.getAudioTracks().length || a.video && !b.getVideoTracks().length) throw b.getTracks().forEach(function(a) {
                                    a.stop()
                                }), new DOMException("", "NotFoundError");
                                return b
                            }, function(a) {
                                return Promise.reject(g(a))
                            })
                        })
                    }
                } else b.mediaDevices.getUserMedia = function(a) {
                    return i(a)
                };
                "undefined" == typeof b.mediaDevices.addEventListener && (b.mediaDevices.addEventListener = function() {
                    d("Dummy mediaDevices.addEventListener called.")
                }), "undefined" == typeof b.mediaDevices.removeEventListener && (b.mediaDevices.removeEventListener = function() {
                    d("Dummy mediaDevices.removeEventListener called.")
                })
            }
        }, {
            "../utils.js": 13
        }],
        7: [function(a, b) {
            "use strict";

            function c(a, b, c) {
                if (a.RTCPeerConnection) {
                    var d = a.RTCPeerConnection.prototype,
                        e = d.addEventListener;
                    d.addEventListener = function(a, d) {
                        if (a !== b) return e.apply(this, arguments);
                        var f = function(a) {
                            d(c(a))
                        };
                        return this._eventMap = this._eventMap || {}, this._eventMap[d] = f, e.apply(this, [a, f])
                    };
                    var f = d.removeEventListener;
                    d.removeEventListener = function(a, c) {
                        if (a !== b || !this._eventMap || !this._eventMap[c]) return f.apply(this, arguments);
                        var d = this._eventMap[c];
                        return delete this._eventMap[c], f.apply(this, [a, d])
                    }, Object.defineProperty(d, "on" + b, {
                        get: function() {
                            return this["_on" + b]
                        },
                        set: function(a) {
                            this["_on" + b] && (this.removeEventListener(b, this["_on" + b]), delete this["_on" + b]), a && this.addEventListener(b, this["_on" + b] = a)
                        }
                    })
                }
            }
            var d = a("sdp"),
                e = a("./utils");
            b.exports = {
                shimRTCIceCandidate: function(a) {
                    if (!(a.RTCIceCandidate && "foundation" in a.RTCIceCandidate.prototype)) {
                        var b = a.RTCIceCandidate;
                        a.RTCIceCandidate = function(a) {
                            "object" == typeof a && a.candidate && 0 === a.candidate.indexOf("a=") && (a = JSON.parse(JSON.stringify(a)), a.candidate = a.candidate.substr(2));
                            var c = new b(a),
                                e = d.parseCandidate(a.candidate),
                                f = Object.assign(c, e);
                            return f.toJSON = function() {
                                return {
                                    candidate: f.candidate,
                                    sdpMid: f.sdpMid,
                                    sdpMLineIndex: f.sdpMLineIndex,
                                    usernameFragment: f.usernameFragment
                                }
                            }, f
                        }, c(a, "icecandidate", function(b) {
                            return b.candidate && Object.defineProperty(b, "candidate", {
                                value: new a.RTCIceCandidate(b.candidate),
                                writable: "false"
                            }), b
                        })
                    }
                },
                shimCreateObjectURL: function(a) {
                    var b = a && a.URL;
                    if (!("object" == typeof a && a.HTMLMediaElement && "srcObject" in a.HTMLMediaElement.prototype && b.createObjectURL && b.revokeObjectURL)) return void 0;
                    var c = b.createObjectURL.bind(b),
                        d = b.revokeObjectURL.bind(b),
                        f = new Map,
                        g = 0;
                    b.createObjectURL = function(a) {
                        if ("getTracks" in a) {
                            var b = "polyblob:" + ++g;
                            return f.set(b, a), e.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), b
                        }
                        return c(a)
                    }, b.revokeObjectURL = function(a) {
                        d(a), f["delete"](a)
                    };
                    var h = Object.getOwnPropertyDescriptor(a.HTMLMediaElement.prototype, "src");
                    Object.defineProperty(a.HTMLMediaElement.prototype, "src", {
                        get: function() {
                            return h.get.apply(this)
                        },
                        set: function(a) {
                            return this.srcObject = f.get(a) || null, h.set.apply(this, [a])
                        }
                    });
                    var i = a.HTMLMediaElement.prototype.setAttribute;
                    a.HTMLMediaElement.prototype.setAttribute = function() {
                        return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = f.get(arguments[1]) || null), i.apply(this, arguments)
                    }
                }
            }
        }, {
            "./utils": 13,
            sdp: 2
        }],
        8: [function(a, b) {
            "use strict";
            var c = a("../utils"),
                d = a("rtcpeerconnection-shim");
            b.exports = {
                shimGetUserMedia: a("./getusermedia"),
                shimPeerConnection: function(a) {
                    var b = c.detectBrowser(a);
                    if (a.RTCIceGatherer && (a.RTCIceCandidate || (a.RTCIceCandidate = function(a) {
                            return a
                        }), a.RTCSessionDescription || (a.RTCSessionDescription = function(a) {
                            return a
                        }), b.version < 15025)) {
                        var e = Object.getOwnPropertyDescriptor(a.MediaStreamTrack.prototype, "enabled");
                        Object.defineProperty(a.MediaStreamTrack.prototype, "enabled", {
                            set: function(a) {
                                e.set.call(this, a);
                                var b = new Event("enabled");
                                b.enabled = a, this.dispatchEvent(b)
                            }
                        })
                    }!a.RTCRtpSender || "dtmf" in a.RTCRtpSender.prototype || Object.defineProperty(a.RTCRtpSender.prototype, "dtmf", {
                        get: function() {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new a.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                        }
                    }), a.RTCPeerConnection = d(a, b.version)
                },
                shimReplaceTrack: function(a) {
                    !a.RTCRtpSender || "replaceTrack" in a.RTCRtpSender.prototype || (a.RTCRtpSender.prototype.replaceTrack = a.RTCRtpSender.prototype.setTrack)
                }
            }
        }, {
            "../utils": 13,
            "./getusermedia": 9,
            "rtcpeerconnection-shim": 1
        }],
        9: [function(a, b) {
            "use strict";
            b.exports = function(a) {
                var b = a && a.navigator,
                    c = function(a) {
                        return {
                            name: {
                                PermissionDeniedError: "NotAllowedError"
                            }[a.name] || a.name,
                            message: a.message,
                            constraint: a.constraint,
                            toString: function() {
                                return this.name
                            }
                        }
                    },
                    d = b.mediaDevices.getUserMedia.bind(b.mediaDevices);
                b.mediaDevices.getUserMedia = function(a) {
                    return d(a)["catch"](function(a) {
                        return Promise.reject(c(a))
                    })
                }
            }
        }, {}],
        10: [function(a, b) {
            "use strict";
            var c = a("../utils"),
                d = {
                    shimOnTrack: function(a) {
                        "object" != typeof a || !a.RTCPeerConnection || "ontrack" in a.RTCPeerConnection.prototype || Object.defineProperty(a.RTCPeerConnection.prototype, "ontrack", {
                            get: function() {
                                return this._ontrack
                            },
                            set: function(a) {
                                this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = a), this.addEventListener("addstream", this._ontrackpoly = function(a) {
                                    a.stream.getTracks().forEach(function(b) {
                                        var c = new Event("track");
                                        c.track = b, c.receiver = {
                                            track: b
                                        }, c.transceiver = {
                                            receiver: c.receiver
                                        }, c.streams = [a.stream], this.dispatchEvent(c)
                                    }.bind(this))
                                }.bind(this))
                            }
                        }), "object" == typeof a && a.RTCTrackEvent && "receiver" in a.RTCTrackEvent.prototype && !("transceiver" in a.RTCTrackEvent.prototype) && Object.defineProperty(a.RTCTrackEvent.prototype, "transceiver", {
                            get: function() {
                                return {
                                    receiver: this.receiver
                                }
                            }
                        })
                    },
                    shimSourceObject: function(a) {
                        "object" == typeof a && (!a.HTMLMediaElement || "srcObject" in a.HTMLMediaElement.prototype || Object.defineProperty(a.HTMLMediaElement.prototype, "srcObject", {
                            get: function() {
                                return this.mozSrcObject
                            },
                            set: function(a) {
                                this.mozSrcObject = a
                            }
                        }))
                    },
                    shimPeerConnection: function(a) {
                        var b = c.detectBrowser(a);
                        if ("object" == typeof a && (a.RTCPeerConnection || a.mozRTCPeerConnection)) {
                            a.RTCPeerConnection || (a.RTCPeerConnection = function(c, d) {
                                if (b.version < 38 && c && c.iceServers) {
                                    for (var e = [], f = 0; f < c.iceServers.length; f++) {
                                        var g = c.iceServers[f];
                                        if (g.hasOwnProperty("urls"))
                                            for (var h = 0; h < g.urls.length; h++) {
                                                var i = {
                                                    url: g.urls[h]
                                                };
                                                0 === g.urls[h].indexOf("turn") && (i.username = g.username, i.credential = g.credential), e.push(i)
                                            } else e.push(c.iceServers[f])
                                    }
                                    c.iceServers = e
                                }
                                return new a.mozRTCPeerConnection(c, d)
                            }, a.RTCPeerConnection.prototype = a.mozRTCPeerConnection.prototype, a.mozRTCPeerConnection.generateCertificate && Object.defineProperty(a.RTCPeerConnection, "generateCertificate", {
                                get: function() {
                                    return a.mozRTCPeerConnection.generateCertificate
                                }
                            }), a.RTCSessionDescription = a.mozRTCSessionDescription, a.RTCIceCandidate = a.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(b) {
                                var c = a.RTCPeerConnection.prototype[b];
                                a.RTCPeerConnection.prototype[b] = function() {
                                    return arguments[0] = new("addIceCandidate" === b ? a.RTCIceCandidate : a.RTCSessionDescription)(arguments[0]), c.apply(this, arguments)
                                }
                            });
                            var d = a.RTCPeerConnection.prototype.addIceCandidate;
                            a.RTCPeerConnection.prototype.addIceCandidate = function() {
                                return arguments[0] ? d.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                            };
                            var e = function(a) {
                                    var b = new Map;
                                    return Object.keys(a).forEach(function(c) {
                                        b.set(c, a[c]), b[c] = a[c]
                                    }), b
                                },
                                f = {
                                    inboundrtp: "inbound-rtp",
                                    outboundrtp: "outbound-rtp",
                                    candidatepair: "candidate-pair",
                                    localcandidate: "local-candidate",
                                    remotecandidate: "remote-candidate"
                                },
                                g = a.RTCPeerConnection.prototype.getStats;
                            a.RTCPeerConnection.prototype.getStats = function(a, c, d) {
                                return g.apply(this, [a || null]).then(function(a) {
                                    if (b.version < 48 && (a = e(a)), b.version < 53 && !c) try {
                                        a.forEach(function(a) {
                                            a.type = f[a.type] || a.type
                                        })
                                    } catch (d) {
                                        if ("TypeError" !== d.name) throw d;
                                        a.forEach(function(b, c) {
                                            a.set(c, Object.assign({}, b, {
                                                type: f[b.type] || b.type
                                            }))
                                        })
                                    }
                                    return a
                                }).then(c, d)
                            }
                        }
                    }
                };
            b.exports = {
                shimOnTrack: d.shimOnTrack,
                shimSourceObject: d.shimSourceObject,
                shimPeerConnection: d.shimPeerConnection,
                shimGetUserMedia: a("./getusermedia")
            }
        }, {
            "../utils": 13,
            "./getusermedia": 11
        }],
        11: [function(a, b) {
            "use strict";
            var c = a("../utils"),
                d = c.log;
            b.exports = function(a) {
                var b = c.detectBrowser(a),
                    e = a && a.navigator,
                    f = a && a.MediaStreamTrack,
                    g = function(a) {
                        return {
                            name: {
                                InternalError: "NotReadableError",
                                NotSupportedError: "TypeError",
                                PermissionDeniedError: "NotAllowedError",
                                SecurityError: "NotAllowedError"
                            }[a.name] || a.name,
                            message: {
                                "The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."
                            }[a.message] || a.message,
                            constraint: a.constraint,
                            toString: function() {
                                return this.name + (this.message && ": ") + this.message
                            }
                        }
                    },
                    h = function(a, c, f) {
                        var h = function(a) {
                            if ("object" != typeof a || a.require) return a;
                            var b = [];
                            return Object.keys(a).forEach(function(c) {
                                if ("require" !== c && "advanced" !== c && "mediaSource" !== c) {
                                    var d = a[c] = "object" == typeof a[c] ? a[c] : {
                                        ideal: a[c]
                                    };
                                    if ((void 0 !== d.min || void 0 !== d.max || void 0 !== d.exact) && b.push(c), void 0 !== d.exact && ("number" == typeof d.exact ? d.min = d.max = d.exact : a[c] = d.exact, delete d.exact), void 0 !== d.ideal) {
                                        a.advanced = a.advanced || [];
                                        var e = {};
                                        e[c] = "number" == typeof d.ideal ? {
                                            min: d.ideal,
                                            max: d.ideal
                                        } : d.ideal, a.advanced.push(e), delete d.ideal, Object.keys(d).length || delete a[c]
                                    }
                                }
                            }), b.length && (a.require = b), a
                        };
                        return a = JSON.parse(JSON.stringify(a)), b.version < 38 && (d("spec: " + JSON.stringify(a)), a.audio && (a.audio = h(a.audio)), a.video && (a.video = h(a.video)), d("ff37: " + JSON.stringify(a))), e.mozGetUserMedia(a, c, function(a) {
                            f(g(a))
                        })
                    },
                    i = function(a) {
                        return new Promise(function(b, c) {
                            h(a, b, c)
                        })
                    };
                if (e.mediaDevices || (e.mediaDevices = {
                        getUserMedia: i,
                        addEventListener: function() {},
                        removeEventListener: function() {}
                    }), e.mediaDevices.enumerateDevices = e.mediaDevices.enumerateDevices || function() {
                        return new Promise(function(a) {
                            var b = [{
                                kind: "audioinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }, {
                                kind: "videoinput",
                                deviceId: "default",
                                label: "",
                                groupId: ""
                            }];
                            a(b)
                        })
                    }, b.version < 41) {
                    var j = e.mediaDevices.enumerateDevices.bind(e.mediaDevices);
                    e.mediaDevices.enumerateDevices = function() {
                        return j().then(void 0, function(a) {
                            if ("NotFoundError" === a.name) return [];
                            throw a
                        })
                    }
                }
                if (b.version < 49) {
                    var k = e.mediaDevices.getUserMedia.bind(e.mediaDevices);
                    e.mediaDevices.getUserMedia = function(a) {
                        return k(a).then(function(b) {
                            if (a.audio && !b.getAudioTracks().length || a.video && !b.getVideoTracks().length) throw b.getTracks().forEach(function(a) {
                                a.stop()
                            }), new DOMException("The object can not be found here.", "NotFoundError");
                            return b
                        }, function(a) {
                            return Promise.reject(g(a))
                        })
                    }
                }
                if (!(b.version > 55 && "autoGainControl" in e.mediaDevices.getSupportedConstraints())) {
                    var l = function(a, b, c) {
                            b in a && !(c in a) && (a[c] = a[b], delete a[b])
                        },
                        m = e.mediaDevices.getUserMedia.bind(e.mediaDevices);
                    if (e.mediaDevices.getUserMedia = function(a) {
                            return "object" == typeof a && "object" == typeof a.audio && (a = JSON.parse(JSON.stringify(a)), l(a.audio, "autoGainControl", "mozAutoGainControl"), l(a.audio, "noiseSuppression", "mozNoiseSuppression")), m(a)
                        }, f && f.prototype.getSettings) {
                        var n = f.prototype.getSettings;
                        f.prototype.getSettings = function() {
                            var a = n.apply(this, arguments);
                            return l(a, "mozAutoGainControl", "autoGainControl"), l(a, "mozNoiseSuppression", "noiseSuppression"), a
                        }
                    }
                    if (f && f.prototype.applyConstraints) {
                        var o = f.prototype.applyConstraints;
                        f.prototype.applyConstraints = function(a) {
                            return "audio" === this.kind && "object" == typeof a && (a = JSON.parse(JSON.stringify(a)), l(a, "autoGainControl", "mozAutoGainControl"), l(a, "noiseSuppression", "mozNoiseSuppression")), o.apply(this, [a])
                        }
                    }
                }
                e.getUserMedia = function(a, d, f) {
                    return b.version < 44 ? h(a, d, f) : (c.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), void e.mediaDevices.getUserMedia(a).then(d, f))
                }
            }
        }, {
            "../utils": 13
        }],
        12: [function(a, b) {
            "use strict";
            var c = a("../utils"),
                d = {
                    shimLocalStreamsAPI: function(a) {
                        if ("object" == typeof a && a.RTCPeerConnection) {
                            if ("getLocalStreams" in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.getLocalStreams = function() {
                                    return this._localStreams || (this._localStreams = []), this._localStreams
                                }), "getStreamById" in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.getStreamById = function(a) {
                                    var b = null;
                                    return this._localStreams && this._localStreams.forEach(function(c) {
                                        c.id === a && (b = c)
                                    }), this._remoteStreams && this._remoteStreams.forEach(function(c) {
                                        c.id === a && (b = c)
                                    }), b
                                }), !("addStream" in a.RTCPeerConnection.prototype)) {
                                var b = a.RTCPeerConnection.prototype.addTrack;
                                a.RTCPeerConnection.prototype.addStream = function(a) {
                                    this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(a) && this._localStreams.push(a);
                                    var c = this;
                                    a.getTracks().forEach(function(d) {
                                        b.call(c, d, a)
                                    })
                                }, a.RTCPeerConnection.prototype.addTrack = function(a, c) {
                                    c && (this._localStreams ? -1 === this._localStreams.indexOf(c) && this._localStreams.push(c) : this._localStreams = [c]), b.call(this, a, c)
                                }
                            }
                            "removeStream" in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.removeStream = function(a) {
                                this._localStreams || (this._localStreams = []);
                                var b = this._localStreams.indexOf(a);
                                if (-1 !== b) {
                                    this._localStreams.splice(b, 1);
                                    var c = this,
                                        d = a.getTracks();
                                    this.getSenders().forEach(function(a) {
                                        -1 !== d.indexOf(a.track) && c.removeTrack(a)
                                    })
                                }
                            })
                        }
                    },
                    shimRemoteStreamsAPI: function(a) {
                        "object" == typeof a && a.RTCPeerConnection && ("getRemoteStreams" in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.getRemoteStreams = function() {
                            return this._remoteStreams ? this._remoteStreams : []
                        }), "onaddstream" in a.RTCPeerConnection.prototype || Object.defineProperty(a.RTCPeerConnection.prototype, "onaddstream", {
                            get: function() {
                                return this._onaddstream
                            },
                            set: function(a) {
                                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = a), this.addEventListener("track", this._onaddstreampoly = function(a) {
                                    var b = a.streams[0];
                                    if (this._remoteStreams || (this._remoteStreams = []), !(this._remoteStreams.indexOf(b) >= 0)) {
                                        this._remoteStreams.push(b);
                                        var c = new Event("addstream");
                                        c.stream = a.streams[0], this.dispatchEvent(c)
                                    }
                                }.bind(this))
                            }
                        }))
                    },
                    shimCallbacksAPI: function(a) {
                        if ("object" == typeof a && a.RTCPeerConnection) {
                            var b = a.RTCPeerConnection.prototype,
                                c = b.createOffer,
                                d = b.createAnswer,
                                e = b.setLocalDescription,
                                f = b.setRemoteDescription,
                                g = b.addIceCandidate;
                            b.createOffer = function(a, b) {
                                var d = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    e = c.apply(this, [d]);
                                return b ? (e.then(a, b), Promise.resolve()) : e
                            }, b.createAnswer = function(a, b) {
                                var c = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    e = d.apply(this, [c]);
                                return b ? (e.then(a, b), Promise.resolve()) : e
                            };
                            var h = function(a, b, c) {
                                var d = e.apply(this, [a]);
                                return c ? (d.then(b, c), Promise.resolve()) : d
                            };
                            b.setLocalDescription = h, h = function(a, b, c) {
                                var d = f.apply(this, [a]);
                                return c ? (d.then(b, c), Promise.resolve()) : d
                            }, b.setRemoteDescription = h, h = function(a, b, c) {
                                var d = g.apply(this, [a]);
                                return c ? (d.then(b, c), Promise.resolve()) : d
                            }, b.addIceCandidate = h
                        }
                    },
                    shimGetUserMedia: function(a) {
                        var b = a && a.navigator;
                        b.getUserMedia || (b.webkitGetUserMedia ? b.getUserMedia = b.webkitGetUserMedia.bind(b) : b.mediaDevices && b.mediaDevices.getUserMedia && (b.getUserMedia = function(a, c, d) {
                            b.mediaDevices.getUserMedia(a).then(c, d)
                        }.bind(b)))
                    },
                    shimRTCIceServerUrls: function(a) {
                        var b = a.RTCPeerConnection;
                        a.RTCPeerConnection = function(a, d) {
                            if (a && a.iceServers) {
                                for (var e = [], f = 0; f < a.iceServers.length; f++) {
                                    var g = a.iceServers[f];
                                    !g.hasOwnProperty("urls") && g.hasOwnProperty("url") ? (c.deprecated("RTCIceServer.url", "RTCIceServer.urls"), g = JSON.parse(JSON.stringify(g)), g.urls = g.url, delete g.url, e.push(g)) : e.push(a.iceServers[f])
                                }
                                a.iceServers = e
                            }
                            return new b(a, d)
                        }, a.RTCPeerConnection.prototype = b.prototype, "generateCertificate" in a.RTCPeerConnection && Object.defineProperty(a.RTCPeerConnection, "generateCertificate", {
                            get: function() {
                                return b.generateCertificate
                            }
                        })
                    },
                    shimTrackEventTransceiver: function(a) {
                        "object" == typeof a && a.RTCPeerConnection && "receiver" in a.RTCTrackEvent.prototype && !a.RTCTransceiver && Object.defineProperty(a.RTCTrackEvent.prototype, "transceiver", {
                            get: function() {
                                return {
                                    receiver: this.receiver
                                }
                            }
                        })
                    }
                };
            b.exports = {
                shimCallbacksAPI: d.shimCallbacksAPI,
                shimLocalStreamsAPI: d.shimLocalStreamsAPI,
                shimRemoteStreamsAPI: d.shimRemoteStreamsAPI,
                shimGetUserMedia: d.shimGetUserMedia,
                shimRTCIceServerUrls: d.shimRTCIceServerUrls,
                shimTrackEventTransceiver: d.shimTrackEventTransceiver
            }
        }, {
            "../utils": 13
        }],
        13: [function(a, b) {
            "use strict";
            var c = !0,
                d = !0,
                e = {
                    disableLog: function(a) {
                        return "boolean" != typeof a ? new Error("Argument type: " + typeof a + ". Please use a boolean.") : (c = a, a ? "adapter.js logging disabled" : "adapter.js logging enabled")
                    },
                    disableWarnings: function(a) {
                        return "boolean" != typeof a ? new Error("Argument type: " + typeof a + ". Please use a boolean.") : (d = !a, "adapter.js deprecation warnings " + (a ? "disabled" : "enabled"))
                    },
                    log: function() {
                        if ("object" == typeof window) {
                            if (c) return;
                            "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                        }
                    },
                    deprecated: function(a, b) {
                        d && console.warn(a + " is deprecated, please use " + b + " instead.")
                    },
                    extractVersion: function(a, b, c) {
                        var d = a.match(b);
                        return d && d.length >= c && parseInt(d[c], 10)
                    },
                    detectBrowser: function(a) {
                        var b = a && a.navigator,
                            c = {};
                        if (c.browser = null, c.version = null, "undefined" == typeof a || !a.navigator) return c.browser = "Not a browser.", c;
                        if (b.mozGetUserMedia) c.browser = "firefox", c.version = this.extractVersion(b.userAgent, /Firefox\/(\d+)\./, 1);
                        else if (b.webkitGetUserMedia)
                            if (a.webkitRTCPeerConnection) c.browser = "chrome", c.version = this.extractVersion(b.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                            else {
                                if (!b.userAgent.match(/Version\/(\d+).(\d+)/)) return c.browser = "Unsupported webkit-based browser with GUM support but no WebRTC support.", c;
                                c.browser = "safari", c.version = this.extractVersion(b.userAgent, /AppleWebKit\/(\d+)\./, 1)
                            }
                        else if (b.mediaDevices && b.userAgent.match(/Edge\/(\d+).(\d+)$/)) c.browser = "edge", c.version = this.extractVersion(b.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                        else {
                            if (!b.mediaDevices || !b.userAgent.match(/AppleWebKit\/(\d+)\./)) return c.browser = "Not a supported browser.", c;
                            c.browser = "safari", c.version = this.extractVersion(b.userAgent, /AppleWebKit\/(\d+)\./, 1)
                        }
                        return c
                    }
                };
            b.exports = {
                log: e.log,
                deprecated: e.deprecated,
                disableLog: e.disableLog,
                disableWarnings: e.disableWarnings,
                extractVersion: e.extractVersion,
                shimCreateObjectURL: e.shimCreateObjectURL,
                detectBrowser: e.detectBrowser.bind(e)
            }
        }, {}]
    }, {}, [3])(3)
}),
function() {
    function a(a, b) {
        B[y] = a, B[y + 1] = b, y += 2, 2 === y && w()
    }

    function b(a) {
        return "function" == typeof a
    }

    function c() {
        return function() {
            process.nextTick(g)
        }
    }

    function d() {
        var a = 0,
            b = new A(g),
            c = document.createTextNode("");
        return b.observe(c, {
                characterData: !0
            }),
            function() {
                c.data = a = ++a % 2
            }
    }

    function e() {
        var a = new MessageChannel;
        return a.port1.onmessage = g,
            function() {
                a.port2.postMessage(0)
            }
    }

    function f() {
        return function() {
            setTimeout(g, 1)
        }
    }

    function g() {
        for (var a = 0; y > a; a += 2) B[a](B[a + 1]), B[a] = void 0, B[a + 1] = void 0;
        y = 0
    }

    function h() {}

    function i(a, b, c, d) {
        try {
            a.call(b, c, d)
        } catch (e) {
            return e
        }
    }

    function j(b, c, d) {
        a(function(a) {
            var b = !1,
                e = i(d, c, function(d) {
                    b || (b = !0, c !== d ? l(a, d) : n(a, d))
                }, function(c) {
                    b || (b = !0, o(a, c))
                });
            !b && e && (b = !0, o(a, e))
        }, b)
    }

    function k(a, b) {
        1 === b.a ? n(a, b.b) : 2 === a.a ? o(a, b.b) : p(b, void 0, function(b) {
            l(a, b)
        }, function(b) {
            o(a, b)
        })
    }

    function l(a, c) {
        if (a === c) o(a, new TypeError("You cannot resolve a promise with itself"));
        else if ("function" == typeof c || "object" == typeof c && null !== c)
            if (c.constructor === a.constructor) k(a, c);
            else {
                var d;
                try {
                    d = c.then
                } catch (e) {
                    C.error = e, d = C
                }
                d === C ? o(a, C.error) : void 0 === d ? n(a, c) : b(d) ? j(a, c, d) : n(a, c)
            }
        else n(a, c)
    }

    function m(a) {
        a.f && a.f(a.b), q(a)
    }

    function n(b, c) {
        void 0 === b.a && (b.b = c, b.a = 1, 0 !== b.e.length && a(q, b))
    }

    function o(b, c) {
        void 0 === b.a && (b.a = 2, b.b = c, a(m, b))
    }

    function p(b, c, d, e) {
        var f = b.e,
            g = f.length;
        b.f = null, f[g] = c, f[g + 1] = d, f[g + 2] = e, 0 === g && b.a && a(q, b)
    }

    function q(a) {
        var b = a.e,
            c = a.a;
        if (0 !== b.length) {
            for (var d, e, f = a.b, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? s(c, d, e, f) : e(f);
            a.e.length = 0
        }
    }

    function r() {
        this.error = null
    }

    function s(a, c, d, e) {
        var f, g, h, i, j = b(d);
        if (j) {
            try {
                f = d(e)
            } catch (k) {
                D.error = k, f = D
            }
            if (f === D ? (i = !0, g = f.error, f = null) : h = !0, c === f) return void o(c, new TypeError("A promises callback cannot return that same promise."))
        } else f = e, h = !0;
        void 0 === c.a && (j && h ? l(c, f) : i ? o(c, g) : 1 === a ? n(c, f) : 2 === a && o(c, f))
    }

    function t(a, b) {
        try {
            b(function(b) {
                l(a, b)
            }, function(b) {
                o(a, b)
            })
        } catch (c) {
            o(a, c)
        }
    }

    function u(a, b, c, d) {
        this.n = a, this.c = new a(h, d), this.i = c, this.o(b) ? (this.m = b, this.d = this.length = b.length, this.l(), 0 === this.length ? n(this.c, this.b) : (this.length = this.length || 0, this.k(), 0 === this.d && n(this.c, this.b))) : o(this.c, this.p())
    }

    function v(a) {
        if (E++, this.b = this.a = void 0, this.e = [], h !== a) {
            if (!b(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof v)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            t(this, a)
        }
    }
    var w, x = Array.isArray ? Array.isArray : function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        y = 0,
        z = "undefined" != typeof window ? window : {},
        A = z.MutationObserver || z.WebKitMutationObserver,
        z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        B = Array(1e3);
    w = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? c() : A ? d() : z ? e() : f();
    var C = new r,
        D = new r;
    u.prototype.o = function(a) {
        return x(a)
    }, u.prototype.p = function() {
        return Error("Array Methods must be provided an Array")
    }, u.prototype.l = function() {
        this.b = Array(this.length)
    }, u.prototype.k = function() {
        for (var a = this.length, b = this.c, c = this.m, d = 0; void 0 === b.a && a > d; d++) this.j(c[d], d)
    }, u.prototype.j = function(a, b) {
        var c = this.n;
        "object" == typeof a && null !== a ? a.constructor === c && void 0 !== a.a ? (a.f = null, this.g(a.a, b, a.b)) : this.q(c.resolve(a), b) : (this.d--, this.b[b] = this.h(a))
    }, u.prototype.g = function(a, b, c) {
        var d = this.c;
        void 0 === d.a && (this.d--, this.i && 2 === a ? o(d, c) : this.b[b] = this.h(c)), 0 === this.d && n(d, this.b)
    }, u.prototype.h = function(a) {
        return a
    }, u.prototype.q = function(a, b) {
        var c = this;
        p(a, void 0, function(a) {
            c.g(1, b, a)
        }, function(a) {
            c.g(2, b, a)
        })
    };
    var E = 0;
    v.all = function(a, b) {
        return new u(this, a, !0, b).c
    }, v.race = function(a, b) {
        function c(a) {
            l(e, a)
        }

        function d(a) {
            o(e, a)
        }
        var e = new this(h, b);
        if (!x(a)) return o(e, new TypeError("You must pass an array to race.")), e;
        for (var f = a.length, g = 0; void 0 === e.a && f > g; g++) p(this.resolve(a[g]), void 0, c, d);
        return e
    }, v.resolve = function(a, b) {
        if (a && "object" == typeof a && a.constructor === this) return a;
        var c = new this(h, b);
        return l(c, a), c
    }, v.reject = function(a, b) {
        var c = new this(h, b);
        return o(c, a), c
    }, v.prototype = {
        constructor: v,
        then: function(b, c) {
            var d = this.a;
            if (1 === d && !b || 2 === d && !c) return this;
            var e = new this.constructor(h),
                f = this.b;
            if (d) {
                var g = arguments[d - 1];
                a(function() {
                    s(d, e, g, f)
                })
            } else p(this, e, b, c);
            return e
        },
        "catch": function(a) {
            return this.then(null, a)
        }
    };
    var F = {
        Promise: v,
        polyfill: function() {
            var a;
            a = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self, "Promise" in a && "resolve" in a.Promise && "reject" in a.Promise && "all" in a.Promise && "race" in a.Promise && function() {
                var c;
                return new a.Promise(function(a) {
                    c = a
                }), b(c)
            }() || (a.Promise = v)
        }
    };
    "function" == typeof define && define.amd ? define(function() {
        return F
    }) : "undefined" != typeof module && module.exports ? module.exports = F : "undefined" != typeof this && (this.ES6Promise = F)
}.call(this), window.Promise || (window.Promise = ES6Promise.Promise),
    function(a) {
        "use strict";

        function b(a) {
            switch (typeof a) {
                case "undefined":
                    return "undefined";
                case "boolean":
                    return "boolean";
                case "number":
                    return "number";
                case "string":
                    return "string";
                default:
                    return null === a ? "null" : "object"
            }
        }

        function c(a) {
            return Object.prototype.toString.call(a).replace(/^\[object *|\]$/g, "")
        }

        function d(a) {
            return "function" == typeof a
        }

        function e(a) {
            if (null === a || a === D) throw TypeError();
            return Object(a)
        }

        function f(a) {
            return a >> 0
        }

        function g(a) {
            return a >>> 0
        }

        function h(a) {
            function b(b) {
                Object.defineProperty(a, b, {
                    get: function() {
                        return a._getter(b)
                    },
                    set: function(c) {
                        a._setter(b, c)
                    },
                    enumerable: !0,
                    configurable: !1
                })
            }
            if (a.length > E) throw RangeError("Array too large for polyfill");
            var c;
            for (c = 0; c < a.length; c += 1) b(c)
        }

        function i(a, b) {
            var c = 32 - b;
            return a << c >> c
        }

        function j(a, b) {
            var c = 32 - b;
            return a << c >>> c
        }

        function k(a) {
            return [255 & a]
        }

        function l(a) {
            return i(a[0], 8)
        }

        function m(a) {
            return [255 & a]
        }

        function n(a) {
            return j(a[0], 8)
        }

        function o(a) {
            return a = M(Number(a)), [0 > a ? 0 : a > 255 ? 255 : 255 & a]
        }

        function p(a) {
            return [a >> 8 & 255, 255 & a]
        }

        function q(a) {
            return i(a[0] << 8 | a[1], 16)
        }

        function r(a) {
            return [a >> 8 & 255, 255 & a]
        }

        function s(a) {
            return j(a[0] << 8 | a[1], 16)
        }

        function t(a) {
            return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
        }

        function u(a) {
            return i(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
        }

        function v(a) {
            return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
        }

        function w(a) {
            return j(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
        }

        function x(a, b, c) {
            function d(a) {
                var b = H(a),
                    c = a - b;
                return .5 > c ? b : c > .5 ? b + 1 : b % 2 ? b + 1 : b
            }
            var e, f, g, h, i, j, k, l = (1 << b - 1) - 1;
            for (a !== a ? (f = (1 << b) - 1, g = L(2, c - 1), e = 0) : a === 1 / 0 || a === -(1 / 0) ? (f = (1 << b) - 1, g = 0, e = 0 > a ? 1 : 0) : 0 === a ? (f = 0, g = 0, e = 1 / a === -(1 / 0) ? 1 : 0) : (e = 0 > a, a = G(a), a >= L(2, 1 - l) ? (f = K(H(I(a) / F), 1023), g = d(a / L(2, f) * L(2, c)), g / L(2, c) >= 2 && (f += 1, g = 1), f > l ? (f = (1 << b) - 1, g = 0) : (f += l, g -= L(2, c))) : (f = 0, g = d(a / L(2, 1 - l - c)))), i = [], h = c; h; h -= 1) i.push(g % 2 ? 1 : 0), g = H(g / 2);
            for (h = b; h; h -= 1) i.push(f % 2 ? 1 : 0), f = H(f / 2);
            for (i.push(e ? 1 : 0), i.reverse(), j = i.join(""), k = []; j.length;) k.push(parseInt(j.substring(0, 8), 2)), j = j.substring(8);
            return k
        }

        function y(a, b, c) {
            var d, e, f, g, h, i, j, k, l = [];
            for (d = a.length; d; d -= 1)
                for (f = a[d - 1], e = 8; e; e -= 1) l.push(f % 2 ? 1 : 0), f >>= 1;
            return l.reverse(), g = l.join(""), h = (1 << b - 1) - 1, i = parseInt(g.substring(0, 1), 2) ? -1 : 1, j = parseInt(g.substring(1, 1 + b), 2), k = parseInt(g.substring(1 + b), 2), j === (1 << b) - 1 ? 0 !== k ? 0 / 0 : i * (1 / 0) : j > 0 ? i * L(2, j - h) * (1 + k / L(2, c)) : 0 !== k ? i * L(2, -(h - 1)) * (k / L(2, c)) : 0 > i ? -0 : 0
        }

        function z(a) {
            return y(a, 11, 52)
        }

        function A(a) {
            return x(a, 11, 52)
        }

        function B(a) {
            return y(a, 8, 23)
        }

        function C(a) {
            return x(a, 8, 23)
        }
        var D = void 0,
            E = 1e5,
            F = Math.LN2,
            G = Math.abs,
            H = Math.floor,
            I = Math.log,
            J = Math.max,
            K = Math.min,
            L = Math.pow,
            M = Math.round;
        ! function() {
            var a = Object.defineProperty,
                b = ! function() {
                    try {
                        return Object.defineProperty({}, "x", {})
                    } catch (a) {
                        return !1
                    }
                }();
            (!a || b) && (Object.defineProperty = function(b, c, d) {
                if (a) try {
                    return a(b, c, d)
                } catch (e) {}
                if (b !== Object(b)) throw TypeError("Object.defineProperty called on non-object");
                return Object.prototype.__defineGetter__ && "get" in d && Object.prototype.__defineGetter__.call(b, c, d.get), Object.prototype.__defineSetter__ && "set" in d && Object.prototype.__defineSetter__.call(b, c, d.set), "value" in d && (b[c] = d.value), b
            })
        }(),
        function() {
            function i(a) {
                if (a = f(a), 0 > a) throw RangeError("ArrayBuffer size is not a small enough positive integer.");
                Object.defineProperty(this, "byteLength", {
                    value: a
                }), Object.defineProperty(this, "_bytes", {
                    value: Array(a)
                });
                for (var b = 0; a > b; b += 1) this._bytes[b] = 0
            }

            function j() {
                if (!arguments.length || "object" != typeof arguments[0]) return function(a) {
                    if (a = f(a), 0 > a) throw RangeError("length is not a small enough positive integer.");
                    Object.defineProperty(this, "length", {
                        value: a
                    }), Object.defineProperty(this, "byteLength", {
                        value: a * this.BYTES_PER_ELEMENT
                    }), Object.defineProperty(this, "buffer", {
                        value: new i(this.byteLength)
                    }), Object.defineProperty(this, "byteOffset", {
                        value: 0
                    })
                }.apply(this, arguments);
                if (arguments.length >= 1 && "object" === b(arguments[0]) && arguments[0] instanceof j) return function(a) {
                    if (this.constructor !== a.constructor) throw TypeError();
                    var b = a.length * this.BYTES_PER_ELEMENT;
                    Object.defineProperty(this, "buffer", {
                        value: new i(b)
                    }), Object.defineProperty(this, "byteLength", {
                        value: b
                    }), Object.defineProperty(this, "byteOffset", {
                        value: 0
                    }), Object.defineProperty(this, "length", {
                        value: a.length
                    });
                    for (var c = 0; c < this.length; c += 1) this._setter(c, a._getter(c))
                }.apply(this, arguments);
                if (arguments.length >= 1 && "object" === b(arguments[0]) && !(arguments[0] instanceof j) && !(arguments[0] instanceof i || "ArrayBuffer" === c(arguments[0]))) return function(a) {
                    var b = a.length * this.BYTES_PER_ELEMENT;
                    Object.defineProperty(this, "buffer", {
                        value: new i(b)
                    }), Object.defineProperty(this, "byteLength", {
                        value: b
                    }), Object.defineProperty(this, "byteOffset", {
                        value: 0
                    }), Object.defineProperty(this, "length", {
                        value: a.length
                    });
                    for (var c = 0; c < this.length; c += 1) {
                        var d = a[c];
                        this._setter(c, Number(d))
                    }
                }.apply(this, arguments);
                if (arguments.length >= 1 && "object" === b(arguments[0]) && (arguments[0] instanceof i || "ArrayBuffer" === c(arguments[0]))) return function(a, b, c) {
                    if (b = g(b), b > a.byteLength) throw RangeError("byteOffset out of range");
                    if (b % this.BYTES_PER_ELEMENT) throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
                    if (c === D) {
                        var d = a.byteLength - b;
                        if (d % this.BYTES_PER_ELEMENT) throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
                        c = d / this.BYTES_PER_ELEMENT
                    } else c = g(c), d = c * this.BYTES_PER_ELEMENT;
                    if (b + d > a.byteLength) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
                    Object.defineProperty(this, "buffer", {
                        value: a
                    }), Object.defineProperty(this, "byteLength", {
                        value: d
                    }), Object.defineProperty(this, "byteOffset", {
                        value: b
                    }), Object.defineProperty(this, "length", {
                        value: c
                    })
                }.apply(this, arguments);
                throw TypeError()
            }

            function x(a, b, c) {
                var d = function() {
                    Object.defineProperty(this, "constructor", {
                        value: d
                    }), j.apply(this, arguments), h(this)
                };
                "__proto__" in d ? d.__proto__ = j : (d.from = j.from, d.of = j.of), d.BYTES_PER_ELEMENT = a;
                var e = function() {};
                return e.prototype = y, d.prototype = new e, Object.defineProperty(d.prototype, "BYTES_PER_ELEMENT", {
                    value: a
                }), Object.defineProperty(d.prototype, "_pack", {
                    value: b
                }), Object.defineProperty(d.prototype, "_unpack", {
                    value: c
                }), d
            }
            a.ArrayBuffer = a.ArrayBuffer || i, Object.defineProperty(j, "from", {
                value: function(a) {
                    return new this(a)
                }
            }), Object.defineProperty(j, "of", {
                value: function() {
                    return new this(arguments)
                }
            });
            var y = {};
            j.prototype = y, Object.defineProperty(j.prototype, "_getter", {
                value: function(a) {
                    if (arguments.length < 1) throw SyntaxError("Not enough arguments");
                    if (a = g(a), a >= this.length) return D;
                    var b, c, d = [];
                    for (b = 0, c = this.byteOffset + a * this.BYTES_PER_ELEMENT; b < this.BYTES_PER_ELEMENT; b += 1, c += 1) d.push(this.buffer._bytes[c]);
                    return this._unpack(d)
                }
            }), Object.defineProperty(j.prototype, "get", {
                value: j.prototype._getter
            }), Object.defineProperty(j.prototype, "_setter", {
                value: function(a, b) {
                    if (arguments.length < 2) throw SyntaxError("Not enough arguments");
                    if (a = g(a), !(a >= this.length)) {
                        var c, d, e = this._pack(b);
                        for (c = 0, d = this.byteOffset + a * this.BYTES_PER_ELEMENT; c < this.BYTES_PER_ELEMENT; c += 1, d += 1) this.buffer._bytes[d] = e[c]
                    }
                }
            }), Object.defineProperty(j.prototype, "constructor", {
                value: j
            }), Object.defineProperty(j.prototype, "copyWithin", {
                value: function(a, b) {
                    var c = arguments[2],
                        d = e(this),
                        h = d.length,
                        i = g(h);
                    i = J(i, 0);
                    var j, k = f(a);
                    j = 0 > k ? J(i + k, 0) : K(k, i);
                    var l, m = f(b);
                    l = 0 > m ? J(i + m, 0) : K(m, i);
                    var n;
                    n = c === D ? i : f(c);
                    var o;
                    o = 0 > n ? J(i + n, 0) : K(n, i);
                    var p, q = K(o - l, i - j);
                    for (j > l && l + q > j ? (p = -1, l = l + q - 1, j = j + q - 1) : p = 1; q > 0;) d._setter(j, d._getter(l)), l += p, j += p, q -= 1;
                    return d
                }
            }), Object.defineProperty(j.prototype, "every", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    for (var e = arguments[1], f = 0; c > f; f++)
                        if (!a.call(e, b._getter(f), f, b)) return !1;
                    return !0
                }
            }), Object.defineProperty(j.prototype, "fill", {
                value: function(a) {
                    var b = arguments[1],
                        c = arguments[2],
                        d = e(this),
                        h = d.length,
                        i = g(h);
                    i = J(i, 0);
                    var j, k = f(b);
                    j = 0 > k ? J(i + k, 0) : K(k, i);
                    var l;
                    l = c === D ? i : f(c);
                    var m;
                    for (m = 0 > l ? J(i + l, 0) : K(l, i); m > j;) d._setter(j, a), j += 1;
                    return d
                }
            }), Object.defineProperty(j.prototype, "filter", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    for (var e = [], f = arguments[1], h = 0; c > h; h++) {
                        var i = b._getter(h);
                        a.call(f, i, h, b) && e.push(i)
                    }
                    return new this.constructor(e)
                }
            }), Object.defineProperty(j.prototype, "find", {
                value: function(a) {
                    var b = e(this),
                        c = b.length,
                        f = g(c);
                    if (!d(a)) throw TypeError();
                    for (var h = arguments.length > 1 ? arguments[1] : D, i = 0; f > i;) {
                        var j = b._getter(i),
                            k = a.call(h, j, i, b);
                        if (Boolean(k)) return j;
                        ++i
                    }
                    return D
                }
            }), Object.defineProperty(j.prototype, "findIndex", {
                value: function(a) {
                    var b = e(this),
                        c = b.length,
                        f = g(c);
                    if (!d(a)) throw TypeError();
                    for (var h = arguments.length > 1 ? arguments[1] : D, i = 0; f > i;) {
                        var j = b._getter(i),
                            k = a.call(h, j, i, b);
                        if (Boolean(k)) return i;
                        ++i
                    }
                    return -1
                }
            }), Object.defineProperty(j.prototype, "forEach", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    for (var e = arguments[1], f = 0; c > f; f++) a.call(e, b._getter(f), f, b)
                }
            }), Object.defineProperty(j.prototype, "indexOf", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (0 === c) return -1;
                    var d = 0;
                    if (arguments.length > 0 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * H(G(d)))), d >= c) return -1;
                    for (var e = d >= 0 ? d : J(c - G(d), 0); c > e; e++)
                        if (b._getter(e) === a) return e;
                    return -1
                }
            }), Object.defineProperty(j.prototype, "join", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    for (var b = Object(this), c = g(b.length), d = Array(c), e = 0; c > e; ++e) d[e] = b._getter(e);
                    return d.join(a === D ? "," : a)
                }
            }), Object.defineProperty(j.prototype, "lastIndexOf", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (0 === c) return -1;
                    var d = c;
                    arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * H(G(d))));
                    for (var e = d >= 0 ? K(d, c - 1) : c - G(d); e >= 0; e--)
                        if (b._getter(e) === a) return e;
                    return -1
                }
            }), Object.defineProperty(j.prototype, "map", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    var e = [];
                    e.length = c;
                    for (var f = arguments[1], h = 0; c > h; h++) e[h] = a.call(f, b._getter(h), h, b);
                    return new this.constructor(e)
                }
            }), Object.defineProperty(j.prototype, "reduce", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    if (0 === c && 1 === arguments.length) throw TypeError();
                    var e, f = 0;
                    for (e = arguments.length >= 2 ? arguments[1] : b._getter(f++); c > f;) e = a.call(D, e, b._getter(f), f, b), f++;
                    return e
                }
            }), Object.defineProperty(j.prototype, "reduceRight", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    if (0 === c && 1 === arguments.length) throw TypeError();
                    var e, f = c - 1;
                    for (e = arguments.length >= 2 ? arguments[1] : b._getter(f--); f >= 0;) e = a.call(D, e, b._getter(f), f, b), f--;
                    return e
                }
            }), Object.defineProperty(j.prototype, "reverse", {
                value: function() {
                    if (this === D || null === this) throw TypeError();
                    for (var a = Object(this), b = g(a.length), c = H(b / 2), d = 0, e = b - 1; c > d; ++d, --e) {
                        var f = a._getter(d);
                        a._setter(d, a._getter(e)), a._setter(e, f)
                    }
                    return a
                }
            }), Object.defineProperty(j.prototype, "set", {
                value: function() {
                    if (arguments.length < 1) throw SyntaxError("Not enough arguments");
                    var a, b, c, d, e, f, h, i, j, k;
                    if ("object" == typeof arguments[0] && arguments[0].constructor === this.constructor) {
                        if (a = arguments[0], c = g(arguments[1]), c + a.length > this.length) throw RangeError("Offset plus length of array is out of range");
                        if (i = this.byteOffset + c * this.BYTES_PER_ELEMENT, j = a.length * this.BYTES_PER_ELEMENT, a.buffer === this.buffer) {
                            for (k = [], e = 0, f = a.byteOffset; j > e; e += 1, f += 1) k[e] = a.buffer._bytes[f];
                            for (e = 0, h = i; j > e; e += 1, h += 1) this.buffer._bytes[h] = k[e]
                        } else
                            for (e = 0, f = a.byteOffset, h = i; j > e; e += 1, f += 1, h += 1) this.buffer._bytes[h] = a.buffer._bytes[f]
                    } else {
                        if ("object" != typeof arguments[0] || "undefined" == typeof arguments[0].length) throw TypeError("Unexpected argument type(s)");
                        if (b = arguments[0], d = g(b.length), c = g(arguments[1]), c + d > this.length) throw RangeError("Offset plus length of array is out of range");
                        for (e = 0; d > e; e += 1) f = b[e], this._setter(c + e, Number(f))
                    }
                }
            }), Object.defineProperty(j.prototype, "slice", {
                value: function(a, b) {
                    for (var c = e(this), d = c.length, h = g(d), i = f(a), j = 0 > i ? J(h + i, 0) : K(i, h), k = b === D ? h : f(b), l = 0 > k ? J(h + k, 0) : K(k, h), m = l - j, n = c.constructor, o = new n(m), p = 0; l > j;) {
                        var q = c._getter(j);
                        o._setter(p, q), ++j, ++p
                    }
                    return o
                }
            }), Object.defineProperty(j.prototype, "some", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    var b = Object(this),
                        c = g(b.length);
                    if (!d(a)) throw TypeError();
                    for (var e = arguments[1], f = 0; c > f; f++)
                        if (a.call(e, b._getter(f), f, b)) return !0;
                    return !1
                }
            }), Object.defineProperty(j.prototype, "sort", {
                value: function(a) {
                    if (this === D || null === this) throw TypeError();
                    for (var b = Object(this), c = g(b.length), d = Array(c), e = 0; c > e; ++e) d[e] = b._getter(e);
                    for (a ? d.sort(a) : d.sort(), e = 0; c > e; ++e) b._setter(e, d[e]);
                    return b
                }
            }), Object.defineProperty(j.prototype, "subarray", {
                value: function(a, b) {
                    function c(a, b, c) {
                        return b > a ? b : a > c ? c : a
                    }
                    a = f(a), b = f(b), arguments.length < 1 && (a = 0), arguments.length < 2 && (b = this.length), 0 > a && (a = this.length + a), 0 > b && (b = this.length + b), a = c(a, 0, this.length), b = c(b, 0, this.length);
                    var d = b - a;
                    return 0 > d && (d = 0), new this.constructor(this.buffer, this.byteOffset + a * this.BYTES_PER_ELEMENT, d)
                }
            });
            var E = x(1, k, l),
                F = x(1, m, n),
                I = x(1, o, n),
                L = x(2, p, q),
                M = x(2, r, s),
                N = x(4, t, u),
                O = x(4, v, w),
                P = x(4, C, B),
                Q = x(8, A, z);
            a.Int8Array = a.Int8Array || E, a.Uint8Array = a.Uint8Array || F, a.Uint8ClampedArray = a.Uint8ClampedArray || I, a.Int16Array = a.Int16Array || L, a.Uint16Array = a.Uint16Array || M, a.Int32Array = a.Int32Array || N, a.Uint32Array = a.Uint32Array || O, a.Float32Array = a.Float32Array || P, a.Float64Array = a.Float64Array || Q
        }(),
        function() {
            function b(a, b) {
                return d(a.get) ? a.get(b) : a[b]
            }

            function e(a, b, d) {
                if (!(a instanceof ArrayBuffer || "ArrayBuffer" === c(a))) throw TypeError();
                if (b = g(b), b > a.byteLength) throw RangeError("byteOffset out of range");
                if (d = d === D ? a.byteLength - b : g(d), b + d > a.byteLength) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
                Object.defineProperty(this, "buffer", {
                    value: a
                }), Object.defineProperty(this, "byteLength", {
                    value: d
                }), Object.defineProperty(this, "byteOffset", {
                    value: b
                })
            }

            function f(a) {
                return function(c, d) {
                    if (c = g(c), c + a.BYTES_PER_ELEMENT > this.byteLength) throw RangeError("Array index out of range");
                    c += this.byteOffset;
                    for (var e = new Uint8Array(this.buffer, c, a.BYTES_PER_ELEMENT), f = [], h = 0; h < a.BYTES_PER_ELEMENT; h += 1) f.push(b(e, h));
                    return Boolean(d) === Boolean(i) && f.reverse(), b(new a(new Uint8Array(f).buffer), 0)
                }
            }

            function h(a) {
                return function(c, d, e) {
                    if (c = g(c), c + a.BYTES_PER_ELEMENT > this.byteLength) throw RangeError("Array index out of range");
                    var f, h, j = new a([d]),
                        k = new Uint8Array(j.buffer),
                        l = [];
                    for (f = 0; f < a.BYTES_PER_ELEMENT; f += 1) l.push(b(k, f));
                    Boolean(e) === Boolean(i) && l.reverse(), h = new Uint8Array(this.buffer, c, a.BYTES_PER_ELEMENT), h.set(l)
                }
            }
            var i = function() {
                var a = new Uint16Array([4660]),
                    c = new Uint8Array(a.buffer);
                return 18 === b(c, 0)
            }();
            Object.defineProperty(e.prototype, "getUint8", {
                value: f(Uint8Array)
            }), Object.defineProperty(e.prototype, "getInt8", {
                value: f(Int8Array)
            }), Object.defineProperty(e.prototype, "getUint16", {
                value: f(Uint16Array)
            }), Object.defineProperty(e.prototype, "getInt16", {
                value: f(Int16Array)
            }), Object.defineProperty(e.prototype, "getUint32", {
                value: f(Uint32Array)
            }), Object.defineProperty(e.prototype, "getInt32", {
                value: f(Int32Array)
            }), Object.defineProperty(e.prototype, "getFloat32", {
                value: f(Float32Array)
            }), Object.defineProperty(e.prototype, "getFloat64", {
                value: f(Float64Array)
            }), Object.defineProperty(e.prototype, "setUint8", {
                value: h(Uint8Array)
            }), Object.defineProperty(e.prototype, "setInt8", {
                value: h(Int8Array)
            }), Object.defineProperty(e.prototype, "setUint16", {
                value: h(Uint16Array)
            }), Object.defineProperty(e.prototype, "setInt16", {
                value: h(Int16Array)
            }), Object.defineProperty(e.prototype, "setUint32", {
                value: h(Uint32Array)
            }), Object.defineProperty(e.prototype, "setInt32", {
                value: h(Int32Array)
            }), Object.defineProperty(e.prototype, "setFloat32", {
                value: h(Float32Array)
            }), Object.defineProperty(e.prototype, "setFloat64", {
                value: h(Float64Array)
            }), a.DataView = a.DataView || e
        }()
    }(this),
    function(a) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
        else if ("function" == typeof define && define.amd) define([], a);
        else {
            var b;
            b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.PriorityQueue = a()
        }
    }(function() {
        return function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(k.exports, function(a) {
                        var c = b[g][1][a];
                        return e(c ? c : a)
                    }, k, k.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function(a, b) {
                var c, d, e, f, g, h = {}.hasOwnProperty,
                    i = function(a, b) {
                        function c() {
                            this.constructor = a
                        }
                        for (var d in b) h.call(b, d) && (a[d] = b[d]);
                        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                    };
                c = a("./PriorityQueue/AbstractPriorityQueue"), d = a("./PriorityQueue/ArrayStrategy"), f = a("./PriorityQueue/BinaryHeapStrategy"), e = a("./PriorityQueue/BHeapStrategy"), g = function(a) {
                    function b(a) {
                        a || (a = {}), a.strategy || (a.strategy = f), a.comparator || (a.comparator = function(a, b) {
                            return (a || 0) - (b || 0)
                        }), b.__super__.constructor.call(this, a)
                    }
                    return i(b, a), b
                }(c), g.ArrayStrategy = d, g.BinaryHeapStrategy = f, g.BHeapStrategy = e, b.exports = g
            }, {
                "./PriorityQueue/AbstractPriorityQueue": 2,
                "./PriorityQueue/ArrayStrategy": 3,
                "./PriorityQueue/BHeapStrategy": 4,
                "./PriorityQueue/BinaryHeapStrategy": 5
            }],
            2: [function(a, b) {
                var c;
                b.exports = c = function() {
                    function a(a) {
                        if (null == (null != a ? a.strategy : void 0)) throw "Must pass options.strategy, a strategy";
                        if (null == (null != a ? a.comparator : void 0)) throw "Must pass options.comparator, a comparator";
                        this.priv = new a.strategy(a), this.length = 0
                    }
                    return a.prototype.queue = function(a) {
                        return this.length++, void this.priv.queue(a)
                    }, a.prototype.dequeue = function() {
                        if (!this.length) throw "Empty queue";
                        return this.length--, this.priv.dequeue()
                    }, a.prototype.peek = function() {
                        if (!this.length) throw "Empty queue";
                        return this.priv.peek()
                    }, a.prototype.clear = function() {
                        return this.length = 0, this.priv.clear()
                    }, a
                }()
            }, {}],
            3: [function(a, b) {
                var c, d;
                d = function(a, b, c) {
                    var d, e, f;
                    for (e = 0, d = a.length; d > e;) f = e + d >>> 1, c(a[f], b) >= 0 ? e = f + 1 : d = f;
                    return e
                }, b.exports = c = function() {
                    function a(a) {
                        var b;
                        this.options = a, this.comparator = this.options.comparator, this.data = (null != (b = this.options.initialValues) ? b.slice(0) : void 0) || [], this.data.sort(this.comparator).reverse()
                    }
                    return a.prototype.queue = function(a) {
                        var b;
                        return b = d(this.data, a, this.comparator), void this.data.splice(b, 0, a)
                    }, a.prototype.dequeue = function() {
                        return this.data.pop()
                    }, a.prototype.peek = function() {
                        return this.data[this.data.length - 1]
                    }, a.prototype.clear = function() {
                        return void(this.data.length = 0)
                    }, a
                }()
            }, {}],
            4: [function(a, b) {
                var c;
                b.exports = c = function() {
                    function a(a) {
                        var b, c, d, e, f, g, h, i, j;
                        for (this.comparator = (null != a ? a.comparator : void 0) || function(a, b) {
                                return a - b
                            }, this.pageSize = (null != a ? a.pageSize : void 0) || 512, this.length = 0, d = 0; 1 << d < this.pageSize;) d += 1;
                        if (1 << d !== this.pageSize) throw "pageSize must be a power of two";
                        for (this._shift = d, this._emptyMemoryPageTemplate = b = [], c = f = 0, i = this.pageSize; i >= 0 ? i > f : f > i; c = i >= 0 ? ++f : --f) b.push(null);
                        if (this._memory = [], this._mask = this.pageSize - 1, a.initialValues)
                            for (j = a.initialValues, g = 0, h = j.length; h > g; g++) e = j[g], this.queue(e)
                    }
                    return a.prototype.queue = function(a) {
                        return this.length += 1, this._write(this.length, a), void this._bubbleUp(this.length, a)
                    }, a.prototype.dequeue = function() {
                        var a, b;
                        return a = this._read(1), b = this._read(this.length), this.length -= 1, this.length > 0 && (this._write(1, b), this._bubbleDown(1, b)), a
                    }, a.prototype.peek = function() {
                        return this._read(1)
                    }, a.prototype.clear = function() {
                        return this.length = 0, void(this._memory.length = 0)
                    }, a.prototype._write = function(a, b) {
                        var c;
                        for (c = a >> this._shift; c >= this._memory.length;) this._memory.push(this._emptyMemoryPageTemplate.slice(0));
                        return this._memory[c][a & this._mask] = b
                    }, a.prototype._read = function(a) {
                        return this._memory[a >> this._shift][a & this._mask]
                    }, a.prototype._bubbleUp = function(a, b) {
                        var c, d, e, f;
                        for (c = this.comparator; a > 1 && (d = a & this._mask, a < this.pageSize || d > 3 ? e = a & ~this._mask | d >> 1 : 2 > d ? (e = a - this.pageSize >> this._shift, e += e & ~(this._mask >> 1), e |= this.pageSize >> 1) : e = a - 2, f = this._read(e), !(c(f, b) < 0));) this._write(e, b), this._write(a, f), a = e;
                        return void 0
                    }, a.prototype._bubbleDown = function(a, b) {
                        var c, d, e, f, g;
                        for (g = this.comparator; a < this.length;)
                            if (a > this._mask && !(a & this._mask - 1) ? c = d = a + 2 : a & this.pageSize >> 1 ? (c = (a & ~this._mask) >> 1, c |= a & this._mask >> 1, c = c + 1 << this._shift, d = c + 1) : (c = a + (a & this._mask), d = c + 1), c !== d && d <= this.length)
                                if (e = this._read(c), f = this._read(d), g(e, b) < 0 && g(e, f) <= 0) this._write(c, b), this._write(a, e), a = c;
                                else {
                                    if (!(g(f, b) < 0)) break;
                                    this._write(d, b), this._write(a, f), a = d
                                }
                        else {
                            if (!(c <= this.length)) break;
                            if (e = this._read(c), !(g(e, b) < 0)) break;
                            this._write(c, b), this._write(a, e), a = c
                        }
                        return void 0
                    }, a
                }()
            }, {}],
            5: [function(a, b) {
                var c;
                b.exports = c = function() {
                    function a(a) {
                        var b;
                        this.comparator = (null != a ? a.comparator : void 0) || function(a, b) {
                            return a - b
                        }, this.length = 0, this.data = (null != (b = a.initialValues) ? b.slice(0) : void 0) || [], this._heapify()
                    }
                    return a.prototype._heapify = function() {
                        var a, b, c;
                        if (this.data.length > 0)
                            for (a = b = 1, c = this.data.length; c >= 1 ? c > b : b > c; a = c >= 1 ? ++b : --b) this._bubbleUp(a);
                        return void 0
                    }, a.prototype.queue = function(a) {
                        return this.data.push(a), void this._bubbleUp(this.data.length - 1)
                    }, a.prototype.dequeue = function() {
                        var a, b;
                        return b = this.data[0], a = this.data.pop(), this.data.length > 0 && (this.data[0] = a, this._bubbleDown(0)), b
                    }, a.prototype.peek = function() {
                        return this.data[0]
                    }, a.prototype.clear = function() {
                        return this.length = 0, void(this.data.length = 0)
                    }, a.prototype._bubbleUp = function(a) {
                        for (var b, c; a > 0 && (b = a - 1 >>> 1, this.comparator(this.data[a], this.data[b]) < 0);) c = this.data[b], this.data[b] = this.data[a], this.data[a] = c, a = b;
                        return void 0
                    }, a.prototype._bubbleDown = function(a) {
                        var b, c, d, e, f;
                        for (b = this.data.length - 1;;) {
                            if (c = (a << 1) + 1, e = c + 1, d = a, b >= c && this.comparator(this.data[c], this.data[d]) < 0 && (d = c), b >= e && this.comparator(this.data[e], this.data[d]) < 0 && (d = e), d === a) break;
                            f = this.data[d], this.data[d] = this.data[a], this.data[a] = f, a = d
                        }
                        return void 0
                    }, a
                }()
            }, {}]
        }, {}, [1])(1)
    }), ! function(a) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
        else if ("function" == typeof define && define.amd) define([], a);
        else {
            var b;
            "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.SockJS = a()
        }
    }(function() {
            var a;
            return function b(a, c, d) {
                function e(g, h) {
                    if (!c[g]) {
                        if (!a[g]) {
                            var i = "function" == typeof require && require;
                            if (!h && i) return i(g, !0);
                            if (f) return f(g, !0);
                            var j = new Error("Cannot find module '" + g + "'");
                            throw j.code = "MODULE_NOT_FOUND", j
                        }
                        var k = c[g] = {
                            exports: {}
                        };
                        a[g][0].call(k.exports, function(b) {
                            var c = a[g][1][b];
                            return e(c ? c : b)
                        }, k, k.exports, b, a, c, d)
                    }
                    return c[g].exports
                }
                for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
                return e
            }({
                    1: [function(a, b) {
                        (function(c) {
                            "use strict";
                            var d = a("./transport-list");
                            b.exports = a("./main")(d), "_sockjs_onload" in c && setTimeout(c._sockjs_onload, 1)
                        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./main": 14,
                        "./transport-list": 16
                    }],
                    2: [function(a, b) {
                        "use strict";

                        function c() {
                            e.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
                        }
                        var d = a("inherits"),
                            e = a("./event");
                        d(c, e), b.exports = c
                    }, {
                        "./event": 4,
                        inherits: 57
                    }],
                    3: [function(a, b) {
                        "use strict";

                        function c() {
                            e.call(this)
                        }
                        var d = a("inherits"),
                            e = a("./eventtarget");
                        d(c, e), c.prototype.removeAllListeners = function(a) {
                            a ? delete this._listeners[a] : this._listeners = {}
                        }, c.prototype.once = function(a, b) {
                            function c() {
                                d.removeListener(a, c), e || (e = !0, b.apply(this, arguments))
                            }
                            var d = this,
                                e = !1;
                            this.on(a, c)
                        }, c.prototype.emit = function(a) {
                            var b = this._listeners[a];
                            if (b)
                                for (var c = Array.prototype.slice.call(arguments, 1), d = 0; d < b.length; d++) b[d].apply(this, c)
                        }, c.prototype.on = c.prototype.addListener = e.prototype.addEventListener, c.prototype.removeListener = e.prototype.removeEventListener, b.exports.EventEmitter = c
                    }, {
                        "./eventtarget": 5,
                        inherits: 57
                    }],
                    4: [function(a, b) {
                        "use strict";

                        function c(a) {
                            this.type = a
                        }
                        c.prototype.initEvent = function(a, b, c) {
                            return this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = +new Date, this
                        }, c.prototype.stopPropagation = function() {}, c.prototype.preventDefault = function() {}, c.CAPTURING_PHASE = 1, c.AT_TARGET = 2, c.BUBBLING_PHASE = 3, b.exports = c
                    }, {}],
                    5: [function(a, b) {
                        "use strict";

                        function c() {
                            this._listeners = {}
                        }
                        c.prototype.addEventListener = function(a, b) {
                            a in this._listeners || (this._listeners[a] = []);
                            var c = this._listeners[a]; - 1 === c.indexOf(b) && (c = c.concat([b])), this._listeners[a] = c
                        }, c.prototype.removeEventListener = function(a, b) {
                            var c = this._listeners[a];
                            if (c) {
                                var d = c.indexOf(b);
                                return -1 !== d ? void(c.length > 1 ? this._listeners[a] = c.slice(0, d).concat(c.slice(d + 1)) : delete this._listeners[a]) : void 0
                            }
                        }, c.prototype.dispatchEvent = function(a) {
                            var b = a.type,
                                c = Array.prototype.slice.call(arguments, 0);
                            if (this["on" + b] && this["on" + b].apply(this, c), b in this._listeners)
                                for (var d = this._listeners[b], e = 0; e < d.length; e++) d[e].apply(this, c)
                        }, b.exports = c
                    }, {}],
                    6: [function(a, b) {
                        "use strict";

                        function c(a) {
                            e.call(this), this.initEvent("message", !1, !1), this.data = a
                        }
                        var d = a("inherits"),
                            e = a("./event");
                        d(c, e), b.exports = c
                    }, {
                        "./event": 4,
                        inherits: 57
                    }],
                    7: [function(a, b) {
                        "use strict";

                        function c(a) {
                            this._transport = a, a.on("message", this._transportMessage.bind(this)), a.on("close", this._transportClose.bind(this))
                        }
                        var d = a("json3"),
                            e = a("./utils/iframe");
                        c.prototype._transportClose = function(a, b) {
                            e.postMessage("c", d.stringify([a, b]))
                        }, c.prototype._transportMessage = function(a) {
                            e.postMessage("t", a)
                        }, c.prototype._send = function(a) {
                            this._transport.send(a)
                        }, c.prototype._close = function() {
                            this._transport.close(), this._transport.removeAllListeners()
                        }, b.exports = c
                    }, {
                        "./utils/iframe": 47,
                        json3: 58
                    }],
                    8: [function(a, b) {
                        (function(c) {
                            "use strict";
                            var d = a("./utils/url"),
                                e = a("./utils/event"),
                                f = a("json3"),
                                g = a("./facade"),
                                h = a("./info-iframe-receiver"),
                                i = a("./utils/iframe"),
                                j = a("./location"),
                                k = function() {};
                            "production" !== c.env.NODE_ENV && (k = a("debug")("sockjs-client:iframe-bootstrap")), b.exports = function(a, b) {
                                var c = {};
                                b.forEach(function(a) {
                                    a.facadeTransport && (c[a.facadeTransport.transportName] = a.facadeTransport)
                                }), c[h.transportName] = h;
                                var l;
                                a.bootstrap_iframe = function() {
                                    var b;
                                    i.currentWindowId = j.hash.slice(1);
                                    var h = function(e) {
                                        if (e.source === parent && ("undefined" == typeof l && (l = e.origin), e.origin === l)) {
                                            var h;
                                            try {
                                                h = f.parse(e.data)
                                            } catch (m) {
                                                return void k("bad json", e.data)
                                            }
                                            if (h.windowId === i.currentWindowId) switch (h.type) {
                                                case "s":
                                                    var n;
                                                    try {
                                                        n = f.parse(h.data)
                                                    } catch (m) {
                                                        k("bad json", h.data);
                                                        break
                                                    }
                                                    var o = n[0],
                                                        p = n[1],
                                                        q = n[2],
                                                        r = n[3];
                                                    if (k(o, p, q, r), o !== a.version) throw new Error('Incompatibile SockJS! Main site uses: "' + o + '", the iframe: "' + a.version + '".');
                                                    if (!d.isOriginEqual(q, j.href) || !d.isOriginEqual(r, j.href)) throw new Error("Can't connect to different domain from within an iframe. (" + j.href + ", " + q + ", " + r + ")");
                                                    b = new g(new c[p](q, r));
                                                    break;
                                                case "m":
                                                    b._send(h.data);
                                                    break;
                                                case "c":
                                                    b && b._close(), b = null
                                            }
                                        }
                                    };
                                    e.attachEvent("message", h), i.postMessage("s")
                                }
                            }
                        }).call(this, {
                            env: {}
                        })
                    }, {
                        "./facade": 7,
                        "./info-iframe-receiver": 10,
                        "./location": 13,
                        "./utils/event": 46,
                        "./utils/iframe": 47,
                        "./utils/url": 52,
                        debug: 54,
                        json3: 58
                    }],
                    9: [function(a, b) {
                        (function(c) {
                            "use strict";

                            function d(a, b) {
                                e.call(this);
                                var c = this,
                                    d = +new Date;
                                this.xo = new b("GET", a), this.xo.once("finish", function(a, b) {
                                    var e, f;
                                    if (200 === a) {
                                        if (f = +new Date - d, b) try {
                                            e = g.parse(b)
                                        } catch (j) {
                                            i("bad json", b)
                                        }
                                        h.isObject(e) || (e = {})
                                    }
                                    c.emit("finish", e, f), c.removeAllListeners()
                                })
                            }
                            var e = a("events").EventEmitter,
                                f = a("inherits"),
                                g = a("json3"),
                                h = a("./utils/object"),
                                i = function() {};
                            "production" !== c.env.NODE_ENV && (i = a("debug")("sockjs-client:info-ajax")), f(d, e), d.prototype.close = function() {
                                this.removeAllListeners(), this.xo.close()
                            }, b.exports = d
                        }).call(this, {
                            env: {}
                        })
                    }, {
                        "./utils/object": 49,
                        debug: 54,
                        events: 3,
                        inherits: 57,
                        json3: 58
                    }],
                    10: [function(a, b) {
                        "use strict";

                        function c(a, b) {
                            var c = this;
                            e.call(this), this.ir = new h(b, g), this.ir.once("finish", function(a, b) {
                                c.ir = null, c.emit("message", f.stringify([a, b]))
                            })
                        }
                        var d = a("inherits"),
                            e = a("events").EventEmitter,
                            f = a("json3"),
                            g = a("./transport/sender/xhr-local"),
                            h = a("./info-ajax");
                        d(c, e), c.transportName = "iframe-info-receiver", c.prototype.close = function() {
                            this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
                        }, b.exports = c
                    }, {
                        "./info-ajax": 9,
                        "./transport/sender/xhr-local": 37,
                        events: 3,
                        inherits: 57,
                        json3: 58
                    }],
                    11: [function(a, b) {
                        (function(c, d) {
                            "use strict";

                            function e(a) {
                                var b = this;
                                f.call(this);
                                var c = function() {
                                    var c = b.ifr = new j(k.transportName, a, a);
                                    c.once("message", function(a) {
                                        if (a) {
                                            var c;
                                            try {
                                                c = h.parse(a)
                                            } catch (d) {
                                                return l("bad json", a), b.emit("finish"), void b.close()
                                            }
                                            var e = c[0],
                                                f = c[1];
                                            b.emit("finish", e, f)
                                        }
                                        b.close()
                                    }), c.once("close", function() {
                                        b.emit("finish"), b.close()
                                    })
                                };
                                d.document.body ? c() : i.attachEvent("load", c)
                            }
                            var f = a("events").EventEmitter,
                                g = a("inherits"),
                                h = a("json3"),
                                i = a("./utils/event"),
                                j = a("./transport/iframe"),
                                k = a("./info-iframe-receiver"),
                                l = function() {};
                            "production" !== c.env.NODE_ENV && (l = a("debug")("sockjs-client:info-iframe")), g(e, f), e.enabled = function() {
                                return j.enabled()
                            }, e.prototype.close = function() {
                                this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                            }, b.exports = e
                        }).call(this, {
                            env: {}
                        }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./info-iframe-receiver": 10,
                        "./transport/iframe": 22,
                        "./utils/event": 46,
                        debug: 54,
                        events: 3,
                        inherits: 57,
                        json3: 58
                    }],
                    12: [function(a, b) {
                        (function(c) {
                            "use strict";

                            function d(a, b) {
                                n(a);
                                var c = this;
                                e.call(this), setTimeout(function() {
                                    c.doXhr(a, b)
                                }, 0)
                            }
                            var e = a("events").EventEmitter,
                                f = a("inherits"),
                                g = a("./utils/url"),
                                h = a("./transport/sender/xdr"),
                                i = a("./transport/sender/xhr-cors"),
                                j = a("./transport/sender/xhr-local"),
                                k = a("./transport/sender/xhr-fake"),
                                l = a("./info-iframe"),
                                m = a("./info-ajax"),
                                n = function() {};
                            "production" !== c.env.NODE_ENV && (n = a("debug")("sockjs-client:info-receiver")), f(d, e), d._getReceiver = function(a, b) {
                                return b.sameOrigin ? new m(a, j) : i.enabled ? new m(a, i) : h.enabled && b.sameScheme ? new m(a, h) : l.enabled() ? new l(a) : new m(a, k)
                            }, d.prototype.doXhr = function(a, b) {
                                var c = this,
                                    e = g.addPath(a, "/info");
                                n("doXhr", e), this.xo = d._getReceiver(e, b), this.timeoutRef = setTimeout(function() {
                                    n("timeout"), c._cleanup(!1), c.emit("finish")
                                }, d.timeout), this.xo.once("finish", function(a, b) {
                                    n("finish", a, b), c._cleanup(!0), c.emit("finish", a, b)
                                })
                            }, d.prototype._cleanup = function(a) {
                                n("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !a && this.xo && this.xo.close(), this.xo = null
                            }, d.prototype.close = function() {
                                n("close"), this.removeAllListeners(), this._cleanup(!1)
                            }, d.timeout = 8e3, b.exports = d
                        }).call(this, {
                            env: {}
                        })
                    }, {
                        "./info-ajax": 9,
                        "./info-iframe": 11,
                        "./transport/sender/xdr": 34,
                        "./transport/sender/xhr-cors": 35,
                        "./transport/sender/xhr-fake": 36,
                        "./transport/sender/xhr-local": 37,
                        "./utils/url": 52,
                        debug: 54,
                        events: 3,
                        inherits: 57
                    }],
                    13: [function(a, b) {
                        (function(a) {
                            "use strict";
                            b.exports = a.location || {
                                origin: "http://localhost:80",
                                protocol: "http",
                                host: "localhost",
                                port: 80,
                                href: "http://localhost/",
                                hash: ""
                            }
                        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    14: [function(a, b) {
                        (function(c, d) {
                            "use strict";

                            function e(a, b, c) {
                                if (!(this instanceof e)) return new e(a, b, c);
                                if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                                s.call(this), this.readyState = e.CONNECTING, this.extensions = "", this.protocol = "", c = c || {}, c.protocols_whitelist && q.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = c.transports, this._server = c.server || j.numberString(1e3);
                                var d = new g(a);
                                if (!d.host || !d.protocol) throw new SyntaxError("The URL '" + a + "' is invalid");
                                if (d.hash) throw new SyntaxError("The URL must not contain a fragment");
                                if ("http:" !== d.protocol && "https:" !== d.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + d.protocol + "' is not allowed.");
                                var f = "https:" === d.protocol;
                                if ("https" === t.protocol && !f) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                                b ? Array.isArray(b) || (b = [b]) : b = [];
                                var h = b.sort();
                                h.forEach(function(a, b) {
                                    if (!a) throw new SyntaxError("The protocols entry '" + a + "' is invalid.");
                                    if (b < h.length - 1 && a === h[b + 1]) throw new SyntaxError("The protocols entry '" + a + "' is duplicated.")
                                });
                                var i = l.getOrigin(t.href);
                                this._origin = i ? i.toLowerCase() : null, d.set("pathname", d.pathname.replace(/\/+$/, "")), this.url = d.href, x("using url", this.url), this._urlInfo = {
                                    nullOrigin: !p.hasDomain(),
                                    sameOrigin: l.isOriginEqual(this.url, t.href),
                                    sameScheme: l.isSchemeEqual(this.url, t.href)
                                }, this._ir = new w(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                            }

                            function f(a) {
                                return 1e3 === a || a >= 3e3 && 4999 >= a
                            }
                            a("./shims");
                            var g = a("url-parse"),
                                h = a("inherits"),
                                i = a("json3"),
                                j = a("./utils/random"),
                                k = a("./utils/escape"),
                                l = a("./utils/url"),
                                m = a("./utils/event"),
                                n = a("./utils/transport"),
                                o = a("./utils/object"),
                                p = a("./utils/browser"),
                                q = a("./utils/log"),
                                r = a("./event/event"),
                                s = a("./event/eventtarget"),
                                t = a("./location"),
                                u = a("./event/close"),
                                v = a("./event/trans-message"),
                                w = a("./info-receiver"),
                                x = function() {};
                            "production" !== c.env.NODE_ENV && (d.dbg = a("debug"), x = d.dbg("sockjs-client:main"));
                            var y;
                            h(e, s), e.prototype.close = function(a, b) {
                                if (a && !f(a)) throw new Error("InvalidAccessError: Invalid code");
                                if (b && b.length > 123) throw new SyntaxError("reason argument has an invalid length");
                                if (this.readyState !== e.CLOSING && this.readyState !== e.CLOSED) {
                                    var c = !0;
                                    this._close(a || 1e3, b || "Normal closure", c)
                                }
                            }, e.prototype.send = function(a) {
                                if ("string" != typeof a && (a = "" + a), this.readyState === e.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                                this.readyState === e.OPEN && this._transport.send(k.quote(a))
                            }, e.version = a("./version"), e.CONNECTING = 0, e.OPEN = 1, e.CLOSING = 2, e.CLOSED = 3, e.prototype._receiveInfo = function(a, b) {
                                if (x("_receiveInfo", b), this._ir = null, !a) return void this._close(1002, "Cannot connect to server");
                                this._rto = this.countRTO(b), this._transUrl = a.base_url ? a.base_url : this.url, a = o.extend(a, this._urlInfo), x("info", a);
                                var c = y.filterToEnabled(this._transportsWhitelist, a);
                                this._transports = c.main, x(this._transports.length + " enabled transports"), this._connect()
                            }, e.prototype._connect = function() {
                                for (var a = this._transports.shift(); a; a = this._transports.shift()) {
                                    if (x("attempt", a.transportName), a.needBody && (!d.document.body || "undefined" != typeof d.document.readyState && "complete" !== d.document.readyState && "interactive" !== d.document.readyState)) return x("waiting for body"), this._transports.unshift(a), void m.attachEvent("load", this._connect.bind(this));
                                    var b = this._rto * a.roundTrips || 5e3;
                                    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), b), x("using timeout", b);
                                    var c = l.addPath(this._transUrl, "/" + this._server + "/" + j.string(8));
                                    x("transport url", c);
                                    var e = new a(c, this._transUrl);
                                    return e.on("message", this._transportMessage.bind(this)), e.once("close", this._transportClose.bind(this)), e.transportName = a.transportName, void(this._transport = e)
                                }
                                this._close(2e3, "All transports failed", !1)
                            }, e.prototype._transportTimeout = function() {
                                x("_transportTimeout"), this.readyState === e.CONNECTING && this._transportClose(2007, "Transport timed out")
                            }, e.prototype._transportMessage = function(a) {
                                x("_transportMessage", a);
                                var b, c = this,
                                    d = a.slice(0, 1),
                                    e = a.slice(1);
                                switch (d) {
                                    case "o":
                                        return void this._open();
                                    case "h":
                                        return this.dispatchEvent(new r("heartbeat")), void x("heartbeat", this.transport)
                                }
                                if (e) try {
                                    b = i.parse(e)
                                } catch (f) {
                                    x("bad json", e)
                                }
                                if ("undefined" == typeof b) return void x("empty payload", e);
                                switch (d) {
                                    case "a":
                                        Array.isArray(b) && b.forEach(function(a) {
                                            x("message", c.transport, a), c.dispatchEvent(new v(a))
                                        });
                                        break;
                                    case "m":
                                        x("message", this.transport, b), this.dispatchEvent(new v(b));
                                        break;
                                    case "c":
                                        Array.isArray(b) && 2 === b.length && this._close(b[0], b[1], !0)
                                }
                            }, e.prototype._transportClose = function(a, b) {
                                return x("_transportClose", this.transport, a, b), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), f(a) || 2e3 === a || this.readyState !== e.CONNECTING ? void this._close(a, b) : void this._connect()
                            }, e.prototype._open = function() {
                                x("_open", this._transport.transportName, this.readyState), this.readyState === e.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = e.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new r("open")), x("connected", this.transport)) : this._close(1006, "Server lost session")
                            }, e.prototype._close = function(a, b, c) {
                                x("_close", this.transport, a, b, c, this.readyState);
                                var d = !1;
                                if (this._ir && (d = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === e.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                                this.readyState = e.CLOSING, setTimeout(function() {
                                    this.readyState = e.CLOSED, d && this.dispatchEvent(new r("error"));
                                    var f = new u("close");
                                    f.wasClean = c || !1, f.code = a || 1e3, f.reason = b, this.dispatchEvent(f), this.onmessage = this.onclose = this.onerror = null, x("disconnected")
                                }.bind(this), 0)
                            }, e.prototype.countRTO = function(a) {
                                return a > 100 ? 4 * a : 300 + a
                            }, b.exports = function(b) {
                                return y = n(b), a("./iframe-bootstrap")(e, b), e
                            }
                        }).call(this, {
                            env: {}
                        }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./event/close": 2,
                        "./event/event": 4,
                        "./event/eventtarget": 5,
                        "./event/trans-message": 6,
                        "./iframe-bootstrap": 8,
                        "./info-receiver": 12,
                        "./location": 13,
                        "./shims": 15,
                        "./utils/browser": 44,
                        "./utils/escape": 45,
                        "./utils/event": 46,
                        "./utils/log": 48,
                        "./utils/object": 49,
                        "./utils/random": 50,
                        "./utils/transport": 51,
                        "./utils/url": 52,
                        "./version": 53,
                        debug: 54,
                        inherits: 57,
                        json3: 58,
                        "url-parse": 59
                    }],
                    15: [function() {
                        "use strict";

                        function a(a) {
                            var b = +a;
                            return b !== b ? b = 0 : 0 !== b && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))), b
                        }

                        function b(a) {
                            return a >>> 0
                        }

                        function c() {}
                        var d, e = Array.prototype,
                            f = Object.prototype,
                            g = Function.prototype,
                            h = String.prototype,
                            i = e.slice,
                            j = f.toString,
                            k = function(a) {
                                return "[object Function]" === f.toString.call(a)
                            },
                            l = function(a) {
                                return "[object Array]" === j.call(a)
                            },
                            m = function(a) {
                                return "[object String]" === j.call(a)
                            },
                            n = Object.defineProperty && function() {
                                try {
                                    return Object.defineProperty({}, "x", {}), !0
                                } catch (a) {
                                    return !1
                                }
                            }();
                        d = n ? function(a, b, c, d) {
                            !d && b in a || Object.defineProperty(a, b, {
                                configurable: !0,
                                enumerable: !1,
                                writable: !0,
                                value: c
                            })
                        } : function(a, b, c, d) {
                            !d && b in a || (a[b] = c)
                        };
                        var o = function(a, b, c) {
                                for (var e in b) f.hasOwnProperty.call(b, e) && d(a, e, b[e], c)
                            },
                            p = function(a) {
                                if (null == a) throw new TypeError("can't convert " + a + " to object");
                                return Object(a)
                            };
                        o(g, {
                            bind: function(a) {
                                var b = this;
                                if (!k(b)) throw new TypeError("Function.prototype.bind called on incompatible " + b);
                                for (var d = i.call(arguments, 1), e = function() {
                                        if (this instanceof j) {
                                            var c = b.apply(this, d.concat(i.call(arguments)));
                                            return Object(c) === c ? c : this
                                        }
                                        return b.apply(a, d.concat(i.call(arguments)))
                                    }, f = Math.max(0, b.length - d.length), g = [], h = 0; f > h; h++) g.push("$" + h);
                                var j = Function("binder", "return function (" + g.join(",") + "){ return binder.apply(this, arguments); }")(e);
                                return b.prototype && (c.prototype = b.prototype, j.prototype = new c, c.prototype = null), j
                            }
                        }), o(Array, {
                            isArray: l
                        });
                        var q = Object("a"),
                            r = "a" !== q[0] || !(0 in q),
                            s = function(a) {
                                var b = !0,
                                    c = !0;
                                return a && (a.call("foo", function(a, c, d) {
                                    "object" != typeof d && (b = !1)
                                }), a.call([1], function() {
                                    c = "string" == typeof this
                                }, "x")), !!a && b && c
                            };
                        o(e, {
                            forEach: function(a) {
                                var b = p(this),
                                    c = r && m(this) ? this.split("") : b,
                                    d = arguments[1],
                                    e = -1,
                                    f = c.length >>> 0;
                                if (!k(a)) throw new TypeError;
                                for (; ++e < f;) e in c && a.call(d, c[e], e, b)
                            }
                        }, !s(e.forEach));
                        var t = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                        o(e, {
                            indexOf: function(b) {
                                var c = r && m(this) ? this.split("") : p(this),
                                    d = c.length >>> 0;
                                if (!d) return -1;
                                var e = 0;
                                for (arguments.length > 1 && (e = a(arguments[1])), e = e >= 0 ? e : Math.max(0, d + e); d > e; e++)
                                    if (e in c && c[e] === b) return e;
                                return -1
                            }
                        }, t);
                        var u = h.split;
                        2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
                            var a = void 0 === /()??/.exec("")[1];
                            h.split = function(c, d) {
                                var f = this;
                                if (void 0 === c && 0 === d) return [];
                                if ("[object RegExp]" !== j.call(c)) return u.call(this, c, d);
                                var g, h, i, k, l = [],
                                    m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.extended ? "x" : "") + (c.sticky ? "y" : ""),
                                    n = 0;
                                for (c = new RegExp(c.source, m + "g"), f += "", a || (g = new RegExp("^" + c.source + "$(?!\\s)", m)), d = void 0 === d ? -1 >>> 0 : b(d);
                                    (h = c.exec(f)) && (i = h.index + h[0].length, !(i > n && (l.push(f.slice(n, h.index)), !a && h.length > 1 && h[0].replace(g, function() {
                                        for (var a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (h[a] = void 0)
                                    }), h.length > 1 && h.index < f.length && e.push.apply(l, h.slice(1)), k = h[0].length, n = i, l.length >= d)));) c.lastIndex === h.index && c.lastIndex++;
                                return n === f.length ? (k || !c.test("")) && l.push("") : l.push(f.slice(n)), l.length > d ? l.slice(0, d) : l
                            }
                        }() : "0".split(void 0, 0).length && (h.split = function(a, b) {
                            return void 0 === a && 0 === b ? [] : u.call(this, a, b)
                        });
                        var v = "	\n\
                        f\ r Â áš€ á Žâ€€ â€ â€‚ â€ ƒâ€„ â€… â€† â€‡ â€ ˆâ€‰ â€ Šâ€¯ â Ÿã€€\ u2028\ u2029\ ufeff ",w="
                        â€‹ ",x=" ["+v+"]
                        ",y=new RegExp(" ^ "+x+x+" * "),z=new RegExp(x+x+" * $ "),A=h.trim&&(v.trim()||!w.trim());o(h,{trim:function(){if(void 0===this||null===this)throw new TypeError("
                        can 't convert "+this+" to object");return String(this).replace(y,"").replace(z,"")}},A);var B=h.substr,C="".substr&&"b"!=="0b".substr(-1);o(h,{substr:function(a,b){return B.call(this,0>a&&(a=this.length+a)<0?0:a,b)}},C)},{}],16:[function(a,b){"use strict";b.exports=[a("./transport/websocket"),a("./transport/xhr-streaming"),a("./transport/xdr-streaming"),a("./transport/eventsource"),a("./transport/lib/iframe-wrap")(a("./transport/eventsource")),a("./transport/htmlfile"),a("./transport/lib/iframe-wrap")(a("./transport/htmlfile")),a("./transport/xhr-polling"),a("./transport/xdr-polling"),a("./transport/lib/iframe-wrap")(a("./transport/xhr-polling")),a("./transport/jsonp-polling")]},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(a,b){(function(c,d){"use strict";function e(a,b,c,d){k(a,b);var e=this;f.call(this),setTimeout(function(){e._start(a,b,c,d)},0)}var f=a("events").EventEmitter,g=a("inherits"),h=a("../../utils/event"),i=a("../../utils/url"),j=d.XMLHttpRequest,k=function(){};"production"!==c.env.NODE_ENV&&(k=a("debug")("sockjs-client:browser:xhr")),g(e,f),e.prototype._start=function(a,b,c,d){var f=this;try{this.xhr=new j}catch(g){}if(!this.xhr)return k("no xhr"),this.emit("finish",0,"no xhr support"),void this._cleanup();b=i.addQuery(b,"t="+ +new Date),this.unloadRef=h.unloadAdd(function(){k("unload cleanup"),f._cleanup(!0)});try{this.xhr.open(a,b,!0),this.timeout&&"timeout"in this.xhr&&(this.xhr.timeout=this.timeout,this.xhr.ontimeout=function(){k("xhr timeout"),f.emit("finish",0,""),f._cleanup(!1)})}catch(l){return k("exception",l),this.emit("finish",0,""),void this._cleanup(!1)}if(d&&d.noCredentials||!e.supportsCORS||(k("withCredentials"),this.xhr.withCredentials="true"),d&&d.headers)for(var m in d.headers)this.xhr.setRequestHeader(m,d.headers[m]);this.xhr.onreadystatechange=function(){if(f.xhr){var a,b,c=f.xhr;switch(k("readyState",c.readyState),c.readyState){case 3:try{b=c.status,a=c.responseText}catch(d){}k("status",b),1223===b&&(b=204),200===b&&a&&a.length>0&&(k("chunk"),f.emit("chunk",b,a));break;case 4:b=c.status,k("status",b),1223===b&&(b=204),(12005===b||12029===b)&&(b=0),k("finish",b,c.responseText),f.emit("finish",b,c.responseText),f._cleanup(!1)}}};try{f.xhr.send(c)}catch(l){f.emit("finish",0,""),f._cleanup(!1)}},e.prototype._cleanup=function(a){if(k("cleanup"),this.xhr){if(this.removeAllListeners(),h.unloadDel(this.unloadRef),this.xhr.onreadystatechange=function(){},this.xhr.ontimeout&&(this.xhr.ontimeout=null),a)try{this.xhr.abort()}catch(b){}this.unloadRef=this.xhr=null}},e.prototype.close=function(){k("close"),this._cleanup(!0)},e.enabled=!!j;var l=["Active"].concat("Object").join("X");!e.enabled&&l in d&&(k("overriding xmlhttprequest"),j=function(){try{return new d[l]("Microsoft.XMLHTTP")}catch(a){return null}},e.enabled=!!new j);var m=!1;try{m="withCredentials"in new j}catch(n){}e.supportsCORS=m,b.exports=e}).call(this,{env:{}},"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/event":46,"../../utils/url":52,debug:54,events:3,inherits:57}],18:[function(a,b){(function(a){b.exports=a.EventSource}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(a,b){(function(a){b.exports=a.WebSocket||a.MozWebSocket}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(a,b){"use strict";function c(a){if(!c.enabled())throw new Error("Transport created when disabled");e.call(this,a,"/eventsource",f,g)}var d=a("inherits"),e=a("./lib/ajax-based"),f=a("./receiver/eventsource"),g=a("./sender/xhr-cors"),h=a("eventsource");d(c,e),c.enabled=function(){return!!h},c.transportName="eventsource",c.roundTrips=2,b.exports=c},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,eventsource:18,inherits:57}],21:[function(a,b){"use strict";function c(a){if(!e.enabled)throw new Error("Transport created when disabled");g.call(this,a,"/htmlfile",e,f)}var d=a("inherits"),e=a("./receiver/htmlfile"),f=a("./sender/xhr-local"),g=a("./lib/ajax-based");d(c,g),c.enabled=function(a){return e.enabled&&a.sameOrigin},c.transportName="htmlfile",c.roundTrips=2,b.exports=c},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,inherits:57}],22:[function(a,b){(function(c){"use strict";function d(a,b,c){if(!d.enabled())throw new Error("Transport created when disabled");g.call(this);var e=this;this.origin=i.getOrigin(c),this.baseUrl=c,this.transUrl=b,this.transport=a,this.windowId=l.string(8);var f=i.addPath(c,"/iframe.html")+"#"+this.windowId;m(a,b,f),this.iframeObj=j.createIframe(f,function(a){m("err callback"),e.emit("close",1006,"Unable to load an iframe ("+a+")"),e.close()}),this.onmessageCallback=this._message.bind(this),k.attachEvent("message",this.onmessageCallback)}var e=a("inherits"),f=a("json3"),g=a("events").EventEmitter,h=a("../version"),i=a("../utils/url"),j=a("../utils/iframe"),k=a("../utils/event"),l=a("../utils/random"),m=function(){};"production"!==c.env.NODE_ENV&&(m=a("debug")("sockjs-client:transport:iframe")),e(d,g),d.prototype.close=function(){if(m("close"),this.removeAllListeners(),this.iframeObj){k.detachEvent("message",this.onmessageCallback);try{this.postMessage("c")}catch(a){}this.iframeObj.cleanup(),this.iframeObj=null,this.onmessageCallback=this.iframeObj=null}},d.prototype._message=function(a){if(m("message",a.data),!i.isOriginEqual(a.origin,this.origin))return void m("not same origin",a.origin,this.origin);var b;try{b=f.parse(a.data)}catch(c){return void m("bad json",a.data)}if(b.windowId!==this.windowId)return void m("mismatched window id",b.windowId,this.windowId);switch(b.type){case"s":this.iframeObj.loaded(),this.postMessage("s",f.stringify([h,this.transport,this.transUrl,this.baseUrl]));break;case"t":this.emit("message",b.data);break;case"c":var d;try{d=f.parse(b.data)}catch(c){return void m("bad json",b.data)}this.emit("close",d[0],d[1]),this.close()}},d.prototype.postMessage=function(a,b){m("postMessage",a,b),this.iframeObj.post(f.stringify({windowId:this.windowId,type:a,data:b||""}),this.origin)},d.prototype.send=function(a){m("send",a),this.postMessage("m",a)},d.enabled=function(){return j.iframeEnabled},d.transportName="iframe",d.roundTrips=2,b.exports=d}).call(this,{env:{}})},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,debug:54,events:3,inherits:57,json3:58}],23:[function(a,b){(function(c){"use strict";function d(a){if(!d.enabled())throw new Error("Transport created when disabled");f.call(this,a,"/jsonp",h,g)}var e=a("inherits"),f=a("./lib/sender-receiver"),g=a("./receiver/jsonp"),h=a("./sender/jsonp");e(d,f),d.enabled=function(){return!!c.document},d.transportName="jsonp-polling",d.roundTrips=1,d.needBody=!0,b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,inherits:57}],24:[function(a,b){(function(c){"use strict";function d(a){return function(b,c,d){i("create ajax sender",b,c);var e={};"string"==typeof c&&(e.headers={"Content-type":"text/plain"});var f=g.addPath(b,"/xhr_send"),h=new a("POST",f,c,e);return h.once("finish",function(a){return i("finish",a),h=null,200!==a&&204!==a?d(new Error("http status "+a)):void d()}),function(){i("abort"),h.close(),h=null;var a=new Error("Aborted");a.code=1e3,d(a)}}}function e(a,b,c,e){h.call(this,a,b,d(e),c,e)}var f=a("inherits"),g=a("../../utils/url"),h=a("./sender-receiver"),i=function(){};"production"!==c.env.NODE_ENV&&(i=a("debug")("sockjs-client:ajax-based")),f(e,h),b.exports=e}).call(this,{env:{}})},{"../../utils/url":52,"./sender-receiver":28,debug:54,inherits:57}],25:[function(a,b){(function(c){"use strict";function d(a,b){g(a),f.call(this),this.sendBuffer=[],this.sender=b,this.url=a}var e=a("inherits"),f=a("events").EventEmitter,g=function(){};"production"!==c.env.NODE_ENV&&(g=a("debug")("sockjs-client:buffered-sender")),e(d,f),d.prototype.send=function(a){g("send",a),this.sendBuffer.push(a),this.sendStop||this.sendSchedule()},d.prototype.sendScheduleWait=function(){g("sendScheduleWait");var a,b=this;this.sendStop=function(){g("sendStop"),b.sendStop=null,clearTimeout(a)},a=setTimeout(function(){g("timeout"),b.sendStop=null,b.sendSchedule()},25)},d.prototype.sendSchedule=function(){g("sendSchedule",this.sendBuffer.length);var a=this;if(this.sendBuffer.length>0){var b="["+this.sendBuffer.join(",")+"]";this.sendStop=this.sender(this.url,b,function(b){a.sendStop=null,b?(g("error",b),a.emit("close",b.code||1006,"Sending error: "+b),a._cleanup()):a.sendScheduleWait()}),this.sendBuffer=[]}},d.prototype._cleanup=function(){g("_cleanup"),this.removeAllListeners()},d.prototype.stop=function(){g("stop"),this._cleanup(),this.sendStop&&(this.sendStop(),this.sendStop=null)},b.exports=d}).call(this,{env:{}})},{debug:54,events:3,inherits:57}],26:[function(a,b){(function(c){"use strict";var d=a("inherits"),e=a("../iframe"),f=a("../../utils/object");b.exports=function(a){function b(b,c){e.call(this,a.transportName,b,c)}return d(b,e),b.enabled=function(b,d){if(!c.document)return!1;var g=f.extend({},d);return g.sameOrigin=!0,a.enabled(g)&&e.enabled()},b.transportName="iframe-"+a.transportName,b.needBody=!0,b.roundTrips=e.roundTrips+a.roundTrips-1,b.facadeTransport=a,b}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/object":49,"../iframe":22,inherits:57}],27:[function(a,b){(function(c){"use strict";function d(a,b,c){g(b),f.call(this),this.Receiver=a,this.receiveUrl=b,this.AjaxObject=c,this._scheduleReceiver()}var e=a("inherits"),f=a("events").EventEmitter,g=function(){};"production"!==c.env.NODE_ENV&&(g=a("debug")("sockjs-client:polling")),e(d,f),d.prototype._scheduleReceiver=function(){g("_scheduleReceiver");var a=this,b=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);b.on("message",function(b){g("message",b),a.emit("message",b)}),b.once("close",function(c,d){
                        g("close", c, d, a.pollIsClosing), a.poll = b = null, a.pollIsClosing || ("network" === d ? a._scheduleReceiver() : (a.emit("close", c || 1006, d), a.removeAllListeners()))
                    })
                }, d.prototype.abort = function() {
                    g("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
                }, b.exports = d
            }).call(this, {
            env: {}
        })
    }, {
        debug: 54,
        events: 3,
        inherits: 57
    }], 28: [function(a, b) {
    (function(c) {
        "use strict";

        function d(a, b, c, d, e) {
            var j = f.addPath(a, b);
            i(j);
            var k = this;
            g.call(this, a, c), this.poll = new h(d, j, e), this.poll.on("message", function(a) {
                i("poll message", a), k.emit("message", a)
            }), this.poll.once("close", function(a, b) {
                i("poll close", a, b), k.poll = null, k.emit("close", a, b), k.close()
            })
        }
        var e = a("inherits"),
            f = a("../../utils/url"),
            g = a("./buffered-sender"),
            h = a("./polling"),
            i = function() {};
        "production" !== c.env.NODE_ENV && (i = a("debug")("sockjs-client:sender-receiver")), e(d, g), d.prototype.close = function() {
            i("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null), this.stop()
        }, b.exports = d
    }).call(this, {
        env: {}
    })
}, {
    "../../utils/url": 52,
    "./buffered-sender": 25,
    "./polling": 27,
    debug: 54,
    inherits: 57
}], 29: [function(a, b) {
    (function(c) {
        "use strict";

        function d(a) {
            h(a), f.call(this);
            var b = this,
                c = this.es = new g(a);
            c.onmessage = function(a) {
                h("message", a.data), b.emit("message", decodeURI(a.data))
            }, c.onerror = function(a) {
                h("error", c.readyState, a);
                var d = 2 !== c.readyState ? "network" : "permanent";
                b._cleanup(), b._close(d)
            }
        }
        var e = a("inherits"),
            f = a("events").EventEmitter,
            g = a("eventsource"),
            h = function() {};
        "production" !== c.env.NODE_ENV && (h = a("debug")("sockjs-client:receiver:eventsource")), e(d, f), d.prototype.abort = function() {
            h("abort"), this._cleanup(), this._close("user")
        }, d.prototype._cleanup = function() {
            h("cleanup");
            var a = this.es;
            a && (a.onmessage = a.onerror = null, a.close(), this.es = null)
        }, d.prototype._close = function(a) {
            h("close", a);
            var b = this;
            setTimeout(function() {
                b.emit("close", null, a), b.removeAllListeners()
            }, 200)
        }, b.exports = d
    }).call(this, {
        env: {}
    })
}, {
    debug: 54,
    events: 3,
    eventsource: 18,
    inherits: 57
}], 30: [function(a, b) {
    (function(c, d) {
        "use strict";

        function e(a) {
            k(a), i.call(this);
            var b = this;
            g.polluteGlobalNamespace(), this.id = "a" + j.string(6), a = h.addQuery(a, "c=" + decodeURIComponent(g.WPrefix + "." + this.id)), k("using htmlfile", e.htmlfileEnabled);
            var c = e.htmlfileEnabled ? g.createHtmlfile : g.createIframe;
            d[g.WPrefix][this.id] = {
                start: function() {
                    k("start"), b.iframeObj.loaded()
                },
                message: function(a) {
                    k("message", a), b.emit("message", a)
                },
                stop: function() {
                    k("stop"), b._cleanup(), b._close("network")
                }
            }, this.iframeObj = c(a, function() {
                k("callback"), b._cleanup(), b._close("permanent")
            })
        }
        var f = a("inherits"),
            g = a("../../utils/iframe"),
            h = a("../../utils/url"),
            i = a("events").EventEmitter,
            j = a("../../utils/random"),
            k = function() {};
        "production" !== c.env.NODE_ENV && (k = a("debug")("sockjs-client:receiver:htmlfile")), f(e, i), e.prototype.abort = function() {
            k("abort"), this._cleanup(), this._close("user")
        }, e.prototype._cleanup = function() {
            k("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete d[g.WPrefix][this.id]
        }, e.prototype._close = function(a) {
            k("_close", a), this.emit("close", null, a), this.removeAllListeners()
        }, e.htmlfileEnabled = !1;
        var l = ["Active"].concat("Object").join("X");
        if (l in d) try {
            e.htmlfileEnabled = !!new d[l]("htmlfile")
        } catch (m) {}
        e.enabled = e.htmlfileEnabled || g.iframeEnabled, b.exports = e
    }).call(this, {
        env: {}
    }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "../../utils/iframe": 47,
    "../../utils/random": 50,
    "../../utils/url": 52,
    debug: 54,
    events: 3,
    inherits: 57
}], 31: [function(a, b) {
    (function(c, d) {
        "use strict";

        function e(a) {
            l(a);
            var b = this;
            k.call(this), f.polluteGlobalNamespace(), this.id = "a" + g.string(6);
            var c = i.addQuery(a, "c=" + encodeURIComponent(f.WPrefix + "." + this.id));
            d[f.WPrefix][this.id] = this._callback.bind(this), this._createScript(c), this.timeoutId = setTimeout(function() {
                l("timeout"), b._abort(new Error("JSONP script loaded abnormally (timeout)"))
            }, e.timeout)
        }
        var f = a("../../utils/iframe"),
            g = a("../../utils/random"),
            h = a("../../utils/browser"),
            i = a("../../utils/url"),
            j = a("inherits"),
            k = a("events").EventEmitter,
            l = function() {};
        "production" !== c.env.NODE_ENV && (l = a("debug")("sockjs-client:receiver:jsonp")), j(e, k), e.prototype.abort = function() {
            if (l("abort"), d[f.WPrefix][this.id]) {
                var a = new Error("JSONP user aborted read");
                a.code = 1e3, this._abort(a)
            }
        }, e.timeout = 35e3, e.scriptErrorTimeout = 1e3, e.prototype._callback = function(a) {
            l("_callback", a), this._cleanup(), this.aborting || (a && (l("message", a), this.emit("message", a)), this.emit("close", null, "network"), this.removeAllListeners())
        }, e.prototype._abort = function(a) {
            l("_abort", a), this._cleanup(), this.aborting = !0, this.emit("close", a.code, a.message), this.removeAllListeners()
        }, e.prototype._cleanup = function() {
            if (l("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                var a = this.script;
                a.parentNode.removeChild(a), a.onreadystatechange = a.onerror = a.onload = a.onclick = null, this.script = null
            }
            delete d[f.WPrefix][this.id]
        }, e.prototype._scriptError = function() {
            l("_scriptError");
            var a = this;
            this.errorTimer || (this.errorTimer = setTimeout(function() {
                a.loadedOkay || a._abort(new Error("JSONP script loaded abnormally (onerror)"))
            }, e.scriptErrorTimeout))
        }, e.prototype._createScript = function(a) {
            l("_createScript", a);
            var b, c = this,
                e = this.script = d.document.createElement("script");
            if (e.id = "a" + g.string(8), e.src = a, e.type = "text/javascript", e.charset = "UTF-8", e.onerror = this._scriptError.bind(this), e.onload = function() {
                    l("onload"), c._abort(new Error("JSONP script loaded abnormally (onload)"))
                }, e.onreadystatechange = function() {
                    if (l("onreadystatechange", e.readyState), /loaded|closed/.test(e.readyState)) {
                        if (e && e.htmlFor && e.onclick) {
                            c.loadedOkay = !0;
                            try {
                                e.onclick()
                            } catch (a) {}
                        }
                        e && c._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                    }
                }, "undefined" == typeof e.async && d.document.attachEvent)
                if (h.isOpera()) b = this.script2 = d.document.createElement("script"), b.text = "try{var a = document.getElementById('" + e.id + "'); if(a)a.onerror();}catch(x){};", e.async = b.async = !1;
                else {
                    try {
                        e.htmlFor = e.id, e.event = "onclick"
                    } catch (f) {}
                    e.async = !0
                }
            "undefined" != typeof e.async && (e.async = !0);
            var i = d.document.getElementsByTagName("head")[0];
            i.insertBefore(e, i.firstChild), b && i.insertBefore(b, i.firstChild)
        }, b.exports = e
    }).call(this, {
        env: {}
    }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "../../utils/browser": 44,
    "../../utils/iframe": 47,
    "../../utils/random": 50,
    "../../utils/url": 52,
    debug: 54,
    events: 3,
    inherits: 57
}], 32: [function(a, b) {
    (function(c) {
        "use strict";

        function d(a, b) {
            g(a), f.call(this);
            var c = this;
            this.bufferPosition = 0, this.xo = new b("POST", a, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(a, b) {
                g("finish", a, b), c._chunkHandler(a, b), c.xo = null;
                var d = 200 === a ? "network" : "permanent";
                g("close", d), c.emit("close", null, d), c._cleanup()
            })
        }
        var e = a("inherits"),
            f = a("events").EventEmitter,
            g = function() {};
        "production" !== c.env.NODE_ENV && (g = a("debug")("sockjs-client:receiver:xhr")), e(d, f), d.prototype._chunkHandler = function(a, b) {
            if (g("_chunkHandler", a), 200 === a && b)
                for (var c = -1;; this.bufferPosition += c + 1) {
                    var d = b.slice(this.bufferPosition);
                    if (c = d.indexOf("\n"), -1 === c) break;
                    var e = d.slice(0, c);
                    e && (g("message", e), this.emit("message", e))
                }
        }, d.prototype._cleanup = function() {
            g("_cleanup"), this.removeAllListeners()
        }, d.prototype.abort = function() {
            g("abort"), this.xo && (this.xo.close(), g("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup()
        }, b.exports = d
    }).call(this, {
        env: {}
    })
}, {
    debug: 54,
    events: 3,
    inherits: 57
}], 33: [function(a, b) {
    (function(c, d) {
        "use strict";

        function e(a) {
            i("createIframe", a);
            try {
                return d.document.createElement('<iframe name="' + a + '">')
            } catch (b) {
                var c = d.document.createElement("iframe");
                return c.name = a, c
            }
        }

        function f() {
            i("createForm"), j = d.document.createElement("form"), j.style.display = "none", j.style.position = "absolute", j.method = "POST", j.enctype = "application/x-www-form-urlencoded", j.acceptCharset = "UTF-8", k = d.document.createElement("textarea"), k.name = "d", j.appendChild(k), d.document.body.appendChild(j)
        }
        var g = a("../../utils/random"),
            h = a("../../utils/url"),
            i = function() {};
        "production" !== c.env.NODE_ENV && (i = a("debug")("sockjs-client:sender:jsonp"));
        var j, k;
        b.exports = function(a, b, c) {
            i(a, b), j || f();
            var d = "a" + g.string(8);
            j.target = d, j.action = h.addQuery(h.addPath(a, "/jsonp_send"), "i=" + d);
            var l = e(d);
            l.id = d, l.style.display = "none", j.appendChild(l);
            try {
                k.value = b
            } catch (m) {}
            j.submit();
            var n = function(a) {
                i("completed", d, a), l.onerror && (l.onreadystatechange = l.onerror = l.onload = null, setTimeout(function() {
                    i("cleaning up", d), l.parentNode.removeChild(l), l = null
                }, 500), k.value = "", c(a))
            };
            return l.onerror = function() {
                    i("onerror", d), n()
                }, l.onload = function() {
                    i("onload", d), n()
                }, l.onreadystatechange = function(a) {
                    i("onreadystatechange", d, l.readyState, a), "complete" === l.readyState && n()
                },
                function() {
                    i("aborted", d), n(new Error("Aborted"))
                }
        }
    }).call(this, {
        env: {}
    }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "../../utils/random": 50,
    "../../utils/url": 52,
    debug: 54
}], 34: [function(a, b) {
    (function(c, d) {
        "use strict";

        function e(a, b, c) {
            k(a, b);
            var d = this;
            f.call(this), setTimeout(function() {
                d._start(a, b, c)
            }, 0)
        }
        var f = a("events").EventEmitter,
            g = a("inherits"),
            h = a("../../utils/event"),
            i = a("../../utils/browser"),
            j = a("../../utils/url"),
            k = function() {};
        "production" !== c.env.NODE_ENV && (k = a("debug")("sockjs-client:sender:xdr")), g(e, f), e.prototype._start = function(a, b, c) {
            k("_start");
            var e = this,
                f = new d.XDomainRequest;
            b = j.addQuery(b, "t=" + +new Date), f.onerror = function() {
                k("onerror"), e._error()
            }, f.ontimeout = function() {
                k("ontimeout"), e._error()
            }, f.onprogress = function() {
                k("progress", f.responseText), e.emit("chunk", 200, f.responseText)
            }, f.onload = function() {
                k("load"), e.emit("finish", 200, f.responseText), e._cleanup(!1)
            }, this.xdr = f, this.unloadRef = h.unloadAdd(function() {
                e._cleanup(!0)
            });
            try {
                this.xdr.open(a, b), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(c)
            } catch (g) {
                this._error()
            }
        }, e.prototype._error = function() {
            this.emit("finish", 0, ""), this._cleanup(!1)
        }, e.prototype._cleanup = function(a) {
            if (k("cleanup", a), this.xdr) {
                if (this.removeAllListeners(), h.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, a) try {
                    this.xdr.abort()
                } catch (b) {}
                this.unloadRef = this.xdr = null
            }
        }, e.prototype.close = function() {
            k("close"), this._cleanup(!0)
        }, e.enabled = !(!d.XDomainRequest || !i.hasDomain()), b.exports = e
    }).call(this, {
        env: {}
    }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "../../utils/browser": 44,
    "../../utils/event": 46,
    "../../utils/url": 52,
    debug: 54,
    events: 3,
    inherits: 57
}], 35: [function(a, b) {
    "use strict";

    function c(a, b, c, d) {
        e.call(this, a, b, c, d)
    }
    var d = a("inherits"),
        e = a("../driver/xhr");
    d(c, e), c.enabled = e.enabled && e.supportsCORS, b.exports = c
}, {
    "../driver/xhr": 17,
    inherits: 57
}], 36: [function(a, b) {
    "use strict";

    function c() {
        var a = this;
        d.call(this), this.to = setTimeout(function() {
            a.emit("finish", 200, "{}")
        }, c.timeout)
    }
    var d = a("events").EventEmitter,
        e = a("inherits");
    e(c, d), c.prototype.close = function() {
        clearTimeout(this.to)
    }, c.timeout = 2e3, b.exports = c
}, {
    events: 3,
    inherits: 57
}], 37: [function(a, b) {
    "use strict";

    function c(a, b, c) {
        e.call(this, a, b, c, {
            noCredentials: !0
        })
    }
    var d = a("inherits"),
        e = a("../driver/xhr");
    d(c, e), c.enabled = e.enabled, b.exports = c
}, {
    "../driver/xhr": 17,
    inherits: 57
}], 38: [function(a, b) {
    (function(c) {
        "use strict";

        function d(a) {
            if (!d.enabled()) throw new Error("Transport created when disabled");
            h.call(this), j("constructor", a);
            var b = this,
                c = f.addPath(a, "/websocket");
            c = "https" === c.slice(0, 5) ? "wss" + c.slice(5) : "ws" + c.slice(4), this.url = c, this.ws = new i(this.url), this.ws.onmessage = function(a) {
                j("message event", a.data), b.emit("message", a.data)
            }, this.unloadRef = e.unloadAdd(function() {
                j("unload"), b.ws.close()
            }), this.ws.onclose = function(a) {
                j("close event", a.code, a.reason), b.emit("close", a.code, a.reason), b._cleanup()
            }, this.ws.onerror = function(a) {
                j("error event", a), b.emit("close", 1006, "WebSocket connection broken"), b._cleanup()
            }
        }
        var e = a("../utils/event"),
            f = a("../utils/url"),
            g = a("inherits"),
            h = a("events").EventEmitter,
            i = a("./driver/websocket"),
            j = function() {};
        "production" !== c.env.NODE_ENV && (j = a("debug")("sockjs-client:websocket")), g(d, h), d.prototype.send = function(a) {
            var b = "[" + a + "]";
            j("send", b), this.ws.send(b)
        }, d.prototype.close = function() {
            j("close"), this.ws && this.ws.close(), this._cleanup()
        }, d.prototype._cleanup = function() {
            j("_cleanup");
            var a = this.ws;
            a && (a.onmessage = a.onclose = a.onerror = null), e.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
        }, d.enabled = function() {
            return j("enabled"), !!i
        }, d.transportName = "websocket", d.roundTrips = 2, b.exports = d
    }).call(this, {
        env: {}
    })
}, {
    "../utils/event": 46,
    "../utils/url": 52,
    "./driver/websocket": 19,
    debug: 54,
    events: 3,
    inherits: 57
}], 39: [function(a, b) {
    "use strict";

    function c(a) {
        if (!h.enabled) throw new Error("Transport created when disabled");
        e.call(this, a, "/xhr", g, h)
    }
    var d = a("inherits"),
        e = a("./lib/ajax-based"),
        f = a("./xdr-streaming"),
        g = a("./receiver/xhr"),
        h = a("./sender/xdr");
    d(c, e), c.enabled = f.enabled, c.transportName = "xdr-polling", c.roundTrips = 2, b.exports = c
}, {
    "./lib/ajax-based": 24,
    "./receiver/xhr": 32,
    "./sender/xdr": 34,
    "./xdr-streaming": 40,
    inherits: 57
}], 40: [function(a, b) {
    "use strict";

    function c(a) {
        if (!g.enabled) throw new Error("Transport created when disabled");
        e.call(this, a, "/xhr_streaming", f, g)
    }
    var d = a("inherits"),
        e = a("./lib/ajax-based"),
        f = a("./receiver/xhr"),
        g = a("./sender/xdr");
    d(c, e), c.enabled = function(a) {
        return a.cookie_needed || a.nullOrigin ? !1 : g.enabled && a.sameScheme
    }, c.transportName = "xdr-streaming", c.roundTrips = 2, b.exports = c
}, {
    "./lib/ajax-based": 24,
    "./receiver/xhr": 32,
    "./sender/xdr": 34,
    inherits: 57
}], 41: [function(a, b) {
    "use strict";

    function c(a) {
        if (!h.enabled && !g.enabled) throw new Error("Transport created when disabled");
        e.call(this, a, "/xhr", f, g)
    }
    var d = a("inherits"),
        e = a("./lib/ajax-based"),
        f = a("./receiver/xhr"),
        g = a("./sender/xhr-cors"),
        h = a("./sender/xhr-local");
    d(c, e), c.enabled = function(a) {
        return a.nullOrigin ? !1 : h.enabled && a.sameOrigin ? !0 : g.enabled
    }, c.transportName = "xhr-polling", c.roundTrips = 2, b.exports = c
}, {
    "./lib/ajax-based": 24,
    "./receiver/xhr": 32,
    "./sender/xhr-cors": 35,
    "./sender/xhr-local": 37,
    inherits: 57
}], 42: [function(a, b) {
    (function(c) {
        "use strict";

        function d(a) {
            if (!i.enabled && !h.enabled) throw new Error("Transport created when disabled");
            f.call(this, a, "/xhr_streaming", g, h)
        }
        var e = a("inherits"),
            f = a("./lib/ajax-based"),
            g = a("./receiver/xhr"),
            h = a("./sender/xhr-cors"),
            i = a("./sender/xhr-local"),
            j = a("../utils/browser");
        e(d, f), d.enabled = function(a) {
            return a.nullOrigin ? !1 : j.isOpera() ? !1 : h.enabled
        }, d.transportName = "xhr-streaming", d.roundTrips = 2, d.needBody = !!c.document, b.exports = d
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "../utils/browser": 44,
    "./lib/ajax-based": 24,
    "./receiver/xhr": 32,
    "./sender/xhr-cors": 35,
    "./sender/xhr-local": 37,
    inherits: 57
}], 43: [function(a, b) {
    (function(a) {
        "use strict";
        b.exports.randomBytes = a.crypto && a.crypto.getRandomValues ? function(b) {
            var c = new Uint8Array(b);
            return a.crypto.getRandomValues(c), c
        } : function(a) {
            for (var b = new Array(a), c = 0; a > c; c++) b[c] = Math.floor(256 * Math.random());
            return b
        }
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {}], 44: [function(a, b) {
    (function(a) {
        "use strict";
        b.exports = {
            isOpera: function() {
                return a.navigator && /opera/i.test(a.navigator.userAgent)
            },
            isKonqueror: function() {
                return a.navigator && /konqueror/i.test(a.navigator.userAgent)
            },
            hasDomain: function() {
                if (!a.document) return !0;
                try {
                    return !!a.document.domain
                } catch (b) {
                    return !1
                }
            }
        }
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {}], 45: [function(a, b) {
    "use strict";
    var c, d = a("json3"),
        e = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        f = function(a) {
            var b, c = {},
                d = [];
            for (b = 0; 65536 > b; b++) d.push(String.fromCharCode(b));
            return a.lastIndex = 0, d.join("").replace(a, function(a) {
                return c[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
            }), a.lastIndex = 0, c
        };
    b.exports = {
        quote: function(a) {
            var b = d.stringify(a);
            return e.lastIndex = 0, e.test(b) ? (c || (c = f(e)), b.replace(e, function(a) {
                return c[a]
            })) : b
        }
    }
}, {
    json3: 58
}], 46: [function(a, b) {
    (function(c) {
        "use strict";
        var d = a("./random"),
            e = {},
            f = !1;
        b.exports = {
            attachEvent: function(a, b) {
                "undefined" != typeof c.addEventListener ? c.addEventListener(a, b, !1) : c.document && c.attachEvent && (c.document.attachEvent("on" + a, b), c.attachEvent("on" + a, b))
            },
            detachEvent: function(a, b) {
                "undefined" != typeof c.addEventListener ? c.removeEventListener(a, b, !1) : c.document && c.detachEvent && (c.document.detachEvent("on" + a, b), c.detachEvent("on" + a, b))
            },
            unloadAdd: function(a) {
                var b = d.string(8);
                return e[b] = a, f && setTimeout(this.triggerUnloadCallbacks, 0), b
            },
            unloadDel: function(a) {
                a in e && delete e[a]
            },
            triggerUnloadCallbacks: function() {
                for (var a in e) e[a](), delete e[a]
            }
        };
        var g = function() {
            f || (f = !0, b.exports.triggerUnloadCallbacks())
        };
        b.exports.attachEvent("unload", g)
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "./random": 50
}], 47: [function(a, b) {
    (function(c, d) {
        "use strict";
        var e = a("./event"),
            f = a("json3"),
            g = a("./browser"),
            h = function() {};
        "production" !== c.env.NODE_ENV && (h = a("debug")("sockjs-client:utils:iframe")), b.exports = {
            WPrefix: "_jp",
            currentWindowId: null,
            polluteGlobalNamespace: function() {
                b.exports.WPrefix in d || (d[b.exports.WPrefix] = {})
            },
            postMessage: function(a, c) {
                d.parent !== d ? d.parent.postMessage(f.stringify({
                    windowId: b.exports.currentWindowId,
                    type: a,
                    data: c || ""
                }), "*") : h("Cannot postMessage, no parent window.", a, c)
            },
            createIframe: function(a, b) {
                var c, f, g = d.document.createElement("iframe"),
                    i = function() {
                        h("unattach"), clearTimeout(c);
                        try {
                            g.onload = null
                        } catch (a) {}
                        g.onerror = null
                    },
                    j = function() {
                        h("cleanup"), g && (i(), setTimeout(function() {
                            g && g.parentNode.removeChild(g), g = null
                        }, 0), e.unloadDel(f))
                    },
                    k = function(a) {
                        h("onerror", a), g && (j(), b(a))
                    },
                    l = function(a, b) {
                        h("post", a, b);
                        try {
                            g && g.contentWindow && setTimeout(function() {
                                g.contentWindow.postMessage(a, b)
                            }, 0)
                        } catch (c) {}
                    };
                return g.src = a, g.style.display = "none", g.style.position = "absolute", g.onerror = function() {
                    k("onerror")
                }, g.onload = function() {
                    h("onload"), clearTimeout(c), c = setTimeout(function() {
                        k("onload timeout")
                    }, 2e3)
                }, d.document.body.appendChild(g), c = setTimeout(function() {
                    k("timeout")
                }, 15e3), f = e.unloadAdd(j), {
                    post: l,
                    cleanup: j,
                    loaded: i
                }
            },
            createHtmlfile: function(a, c) {
                var f, g, i, j = ["Active"].concat("Object").join("X"),
                    k = new d[j]("htmlfile"),
                    l = function() {
                        clearTimeout(f), i.onerror = null
                    },
                    m = function() {
                        k && (l(), e.unloadDel(g), i.parentNode.removeChild(i), i = k = null, CollectGarbage())
                    },
                    n = function(a) {
                        h("onerror", a), k && (m(), c(a))
                    },
                    o = function(a, b) {
                        try {
                            i && i.contentWindow && setTimeout(function() {
                                i.contentWindow.postMessage(a, b)
                            }, 0)
                        } catch (c) {}
                    };
                k.open(), k.write('<html><script>document.domain="' + d.document.domain + '";</script></html>'), k.close(), k.parentWindow[b.exports.WPrefix] = d[b.exports.WPrefix];
                var p = k.createElement("div");
                return k.body.appendChild(p), i = k.createElement("iframe"), p.appendChild(i), i.src = a, i.onerror = function() {
                    n("onerror")
                }, f = setTimeout(function() {
                    n("timeout")
                }, 15e3), g = e.unloadAdd(m), {
                    post: o,
                    cleanup: m,
                    loaded: l
                }
            }
        }, b.exports.iframeEnabled = !1, d.document && (b.exports.iframeEnabled = ("function" == typeof d.postMessage || "object" == typeof d.postMessage) && !g.isKonqueror())
    }).call(this, {
        env: {}
    }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "./browser": 44,
    "./event": 46,
    debug: 54,
    json3: 58
}], 48: [function(a, b) {
    (function(a) {
        "use strict";
        var c = {};
        ["log", "debug", "warn"].forEach(function(b) {
            var d = a.console && a.console[b] && a.console[b].apply;
            c[b] = d ? function() {
                return a.console[b].apply(a.console, arguments)
            } : "log" === b ? function() {} : c.log
        }), b.exports = c
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {}], 49: [function(a, b) {
    "use strict";
    b.exports = {
        isObject: function(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        },
        extend: function(a) {
            if (!this.isObject(a)) return a;
            for (var b, c, d = 1, e = arguments.length; e > d; d++) {
                b = arguments[d];
                for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            return a
        }
    }
}, {}], 50: [function(a, b) {
    "use strict";
    var c = a("crypto"),
        d = "abcdefghijklmnopqrstuvwxyz012345";
    b.exports = {
        string: function(a) {
            for (var b = d.length, e = c.randomBytes(a), f = [], g = 0; a > g; g++) f.push(d.substr(e[g] % b, 1));
            return f.join("")
        },
        number: function(a) {
            return Math.floor(Math.random() * a)
        },
        numberString: function(a) {
            var b = ("" + (a - 1)).length,
                c = new Array(b + 1).join("0");
            return (c + this.number(a)).slice(-b)
        }
    }
}, {
    crypto: 43
}], 51: [function(a, b) {
    (function(c) {
        "use strict";
        var d = function() {};
        "production" !== c.env.NODE_ENV && (d = a("debug")("sockjs-client:utils:transport")), b.exports = function(a) {
            return {
                filterToEnabled: function(b, c) {
                    var e = {
                        main: [],
                        facade: []
                    };
                    return b ? "string" == typeof b && (b = [b]) : b = [], a.forEach(function(a) {
                        return a ? "websocket" === a.transportName && c.websocket === !1 ? void d("disabled from server", "websocket") : b.length && -1 === b.indexOf(a.transportName) ? void d("not in whitelist", a.transportName) : void(a.enabled(c) ? (d("enabled", a.transportName), e.main.push(a), a.facadeTransport && e.facade.push(a.facadeTransport)) : d("disabled", a.transportName)) : void 0
                    }), e
                }
            }
        }
    }).call(this, {
        env: {}
    })
}, {
    debug: 54
}], 52: [function(a, b) {
    (function(c) {
        "use strict";
        var d = a("url-parse"),
            e = function() {};
        "production" !== c.env.NODE_ENV && (e = a("debug")("sockjs-client:utils:url")), b.exports = {
            getOrigin: function(a) {
                if (!a) return null;
                var b = new d(a);
                if ("file:" === b.protocol) return null;
                var c = b.port;
                return c || (c = "https:" === b.protocol ? "443" : "80"), b.protocol + "//" + b.hostname + ":" + c
            },
            isOriginEqual: function(a, b) {
                var c = this.getOrigin(a) === this.getOrigin(b);
                return e("same", a, b, c), c
            },
            isSchemeEqual: function(a, b) {
                return a.split(":")[0] === b.split(":")[0]
            },
            addPath: function(a, b) {
                var c = a.split("?");
                return c[0] + b + (c[1] ? "?" + c[1] : "")
            },
            addQuery: function(a, b) {
                return a + (-1 === a.indexOf("?") ? "?" + b : "&" + b)
            }
        }
    }).call(this, {
        env: {}
    })
}, {
    debug: 54,
    "url-parse": 59
}], 53: [function(a, b) {
    b.exports = "1.0.0"
}, {}], 54: [function(a, b, c) {
    function d() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
    }

    function e() {
        var a = arguments,
            b = this.useColors;
        if (a[0] = (b ? "%c" : "") + this.namespace + (b ? " %c" : " ") + a[0] + (b ? "%c " : " ") + "+" + c.humanize(this.diff), !b) return a;
        var d = "color: " + this.color;
        a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
        var e = 0,
            f = 0;
        return a[0].replace(/%[a-z%]/g, function(a) {
            "%%" !== a && (e++, "%c" === a && (f = e))
        }), a.splice(f, 0, d), a
    }

    function f() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function g(a) {
        try {
            null == a ? j.removeItem("debug") : j.debug = a
        } catch (b) {}
    }

    function h() {
        var a;
        try {
            a = j.debug
        } catch (b) {}
        return a
    }

    function i() {
        try {
            return window.localStorage
        } catch (a) {}
    }
    c = b.exports = a("./debug"), c.log = f, c.formatArgs = e, c.save = g, c.load = h, c.useColors = d;
    var j;
    j = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : i(), c.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], c.formatters.j = function(a) {
        return JSON.stringify(a)
    }, c.enable(h())
}, {
    "./debug": 55
}], 55: [function(a, b, c) {
    function d() {
        return c.colors[k++ % c.colors.length]
    }

    function e(a) {
        function b() {}

        function e() {
            var a = e,
                b = +new Date,
                f = b - (j || b);
            a.diff = f, a.prev = j, a.curr = b, j = b, null == a.useColors && (a.useColors = c.useColors()), null == a.color && a.useColors && (a.color = d());
            var g = Array.prototype.slice.call(arguments);
            g[0] = c.coerce(g[0]), "string" != typeof g[0] && (g = ["%o"].concat(g));
            var h = 0;
            g[0] = g[0].replace(/%([a-z%])/g, function(b, d) {
                if ("%%" === b) return b;
                h++;
                var e = c.formatters[d];
                if ("function" == typeof e) {
                    var f = g[h];
                    b = e.call(a, f), g.splice(h, 1), h--
                }
                return b
            }), "function" == typeof c.formatArgs && (g = c.formatArgs.apply(a, g));
            var i = e.log || c.log || console.log.bind(console);
            i.apply(a, g)
        }
        b.enabled = !1, e.enabled = !0;
        var f = c.enabled(a) ? e : b;
        return f.namespace = a, f
    }

    function f(a) {
        c.save(a);
        for (var b = (a || "").split(/[\s,]+/), d = b.length, e = 0; d > e; e++) b[e] && (a = b[e].replace(/\*/g, ".*?"), "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$")))
    }

    function g() {
        c.enable("")
    }

    function h(a) {
        var b, d;
        for (b = 0, d = c.skips.length; d > b; b++)
            if (c.skips[b].test(a)) return !1;
        for (b = 0, d = c.names.length; d > b; b++)
            if (c.names[b].test(a)) return !0;
        return !1
    }

    function i(a) {
        return a instanceof Error ? a.stack || a.message : a
    }
    c = b.exports = e, c.coerce = i, c.disable = g, c.enable = f, c.enabled = h, c.humanize = a("ms"), c.names = [], c.skips = [], c.formatters = {};
    var j, k = 0
}, {
    ms: 56
}], 56: [function(a, b) {
    function c(a) {
        var b = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
        if (b) {
            var c = parseFloat(b[1]),
                d = (b[2] || "ms").toLowerCase();
            switch (d) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return c * k;
                case "days":
                case "day":
                case "d":
                    return c * j;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return c * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return c * h;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return c * g;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return c
            }
        }
    }

    function d(a) {
        return a >= j ? Math.round(a / j) + "d" : a >= i ? Math.round(a / i) + "h" : a >= h ? Math.round(a / h) + "m" : a >= g ? Math.round(a / g) + "s" : a + "ms"
    }

    function e(a) {
        return f(a, j, "day") || f(a, i, "hour") || f(a, h, "minute") || f(a, g, "second") || a + " ms"
    }

    function f(a, b, c) {
        return b > a ? void 0 : 1.5 * b > a ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
    }
    var g = 1e3,
        h = 60 * g,
        i = 60 * h,
        j = 24 * i,
        k = 365.25 * j;
    b.exports = function(a, b) {
        return b = b || {}, "string" == typeof a ? c(a) : b["long"] ? e(a) : d(a)
    }
}, {}], 57: [function(a, b) {
    b.exports = "function" == typeof Object.create ? function(a, b) {
        a.super_ = b, a.prototype = Object.create(b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : function(a, b) {
        a.super_ = b;
        var c = function() {};
        c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
    }
}, {}], 58: [function(b, c, d) {
    (function(b) {
        (function() {
            function e(a, b) {
                function c(a) {
                    if (c[a] !== q) return c[a];
                    var e;
                    if ("bug-string-char-index" == a) e = "a" != "a" [0];
                    else if ("json" == a) e = c("json-stringify") && c("json-parse");
                    else {
                        var g, h = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == a) {
                            var i = b.stringify,
                                k = "function" == typeof i && t;
                            if (k) {
                                (g = function() {
                                    return 1
                                }).toJSON = g;
                                try {
                                    k = "0" === i(0) && "0" === i(new d) && '""' == i(new f) && i(s) === q && i(q) === q && i() === q && "1" === i(g) && "[1]" == i([g]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                                        a: [g, !0, !1, null, "\x00\b\n\f\r	"]
                                    }) == h && "1" === i(null, g) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
                                } catch (l) {
                                    k = !1
                                }
                            }
                            e = k
                        }
                        if ("json-parse" == a) {
                            var m = b.parse;
                            if ("function" == typeof m) try {
                                if (0 === m("0") && !m(!1)) {
                                    g = m(h);
                                    var n = 5 == g.a.length && 1 === g.a[0];
                                    if (n) {
                                        try {
                                            n = !m('"	"')
                                        } catch (l) {}
                                        if (n) try {
                                            n = 1 !== m("01")
                                        } catch (l) {}
                                        if (n) try {
                                            n = 1 !== m("1.")
                                        } catch (l) {}
                                    }
                                }
                            } catch (l) {
                                n = !1
                            }
                            e = n
                        }
                    }
                    return c[a] = !!e
                }
                a || (a = i.Object()), b || (b = i.Object());
                var d = a.Number || i.Number,
                    f = a.String || i.String,
                    h = a.Object || i.Object,
                    j = a.Date || i.Date,
                    k = a.SyntaxError || i.SyntaxError,
                    l = a.TypeError || i.TypeError,
                    m = a.Math || i.Math,
                    n = a.JSON || i.JSON;
                "object" == typeof n && n && (b.stringify = n.stringify, b.parse = n.parse);
                var o, p, q, r = h.prototype,
                    s = r.toString,
                    t = new j(-0xc782b5b800cec);
                try {
                    t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
                } catch (u) {}
                if (!c("json")) {
                    var v = "[object Function]",
                        w = "[object Date]",
                        x = "[object Number]",
                        y = "[object String]",
                        z = "[object Array]",
                        A = "[object Boolean]",
                        B = c("bug-string-char-index");
                    if (!t) var C = m.floor,
                        D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        E = function(a, b) {
                            return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
                        };
                    if ((o = r.hasOwnProperty) || (o = function(a) {
                            var b, c = {};
                            return (c.__proto__ = null, c.__proto__ = {
                                toString: 1
                            }, c).toString != s ? o = function(a) {
                                var b = this.__proto__,
                                    c = a in (this.__proto__ = null, this);
                                return this.__proto__ = b, c
                            } : (b = c.constructor, o = function(a) {
                                var c = (this.constructor || b).prototype;
                                return a in this && !(a in c && this[a] === c[a])
                            }), c = null, o.call(this, a)
                        }), p = function(a, b) {
                            var c, d, e, f = 0;
                            (c = function() {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, d = new c;
                            for (e in d) o.call(d, e) && f++;
                            return c = d = null, f ? p = 2 == f ? function(a, b) {
                                var c, d = {},
                                    e = s.call(a) == v;
                                for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                            } : function(a, b) {
                                var c, d, e = s.call(a) == v;
                                for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                                (d || o.call(a, c = "constructor")) && b(c)
                            } : (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
                                var c, e, f = s.call(a) == v,
                                    h = !f && "function" != typeof a.constructor && g[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                                for (c in a) f && "prototype" == c || !h.call(a, c) || b(c);
                                for (e = d.length; c = d[--e]; h.call(a, c) && b(c));
                            }), p(a, b)
                        }, !c("json-stringify")) {
                        var F = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            },
                            G = "000000",
                            H = function(a, b) {
                                return (G + (b || 0)).slice(-a)
                            },
                            I = "\\u00",
                            J = function(a) {
                                for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                                    var g = a.charCodeAt(c);
                                    switch (g) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            b += F[g];
                                            break;
                                        default:
                                            if (32 > g) {
                                                b += I + H(2, g.toString(16));
                                                break
                                            }
                                            b += e ? f[c] : a.charAt(c)
                                    }
                                }
                                return b + '"'
                            },
                            K = function(a, b, c, d, e, f, g) {
                                var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
                                try {
                                    h = b[a]
                                } catch (M) {}
                                if ("object" == typeof h && h)
                                    if (i = s.call(h), i != w || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
                                    else if (h > -1 / 0 && 1 / 0 > h) {
                                    if (E) {
                                        for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                                        for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                                        m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                                    } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                                    h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
                                } else h = null;
                                if (c && (h = c.call(b, a, h)), null === h) return "null";
                                if (i = s.call(h), i == A) return "" + h;
                                if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                                if (i == y) return J("" + h);
                                if ("object" == typeof h) {
                                    for (G = g.length; G--;)
                                        if (g[G] === h) throw l();
                                    if (g.push(h), B = [], I = f, f += e, i == z) {
                                        for (F = 0, G = h.length; G > F; F++) D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                                        L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                                    } else p(d || h, function(a) {
                                        var b = K(a, h, c, d, e, f, g);
                                        b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                                    }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                                    return g.pop(), L
                                }
                            };
                        b.stringify = function(a, b, c) {
                            var d, e, f, h;
                            if (g[typeof b] && b)
                                if ((h = s.call(b)) == v) e = b;
                                else if (h == z) {
                                f = {};
                                for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (f[i] = 1));
                            }
                            if (c)
                                if ((h = s.call(c)) == x) {
                                    if ((c -= c % 1) > 0)
                                        for (d = "", c > 10 && (c = 10); d.length < c; d += " ");
                                } else h == y && (d = c.length <= 10 ? c : c.slice(0, 10));
                            return K("", (i = {}, i[""] = a, i), e, f, d, "", [])
                        }
                    }
                    if (!c("json-parse")) {
                        var L, M, N = f.fromCharCode,
                            O = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "	",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            },
                            P = function() {
                                throw L = M = null, k()
                            },
                            Q = function() {
                                for (var a, b, c, d, e, f = M, g = f.length; g > L;) switch (e = f.charCodeAt(L)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        L++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return a = B ? f.charAt(L) : f[L], L++, a;
                                    case 34:
                                        for (a = "@", L++; g > L;)
                                            if (e = f.charCodeAt(L), 32 > e) P();
                                            else if (92 == e) switch (e = f.charCodeAt(++L)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                a += O[e], L++;
                                                break;
                                            case 117:
                                                for (b = ++L, c = L + 4; c > L; L++) e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                                                a += N("0x" + f.slice(b, L));
                                                break;
                                            default:
                                                P()
                                        } else {
                                            if (34 == e) break;
                                            for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++L);
                                            a += f.slice(b, L)
                                        }
                                        if (34 == f.charCodeAt(L)) return L++, a;
                                        P();
                                    default:
                                        if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                                            for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                                            if (46 == f.charCodeAt(L)) {
                                                for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                                c == L && P(), L = c
                                            }
                                            if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                                                for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                                c == L && P(), L = c
                                            }
                                            return +f.slice(b, L)
                                        }
                                        if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;
                                        if ("false" == f.slice(L, L + 5)) return L += 5, !1;
                                        if ("null" == f.slice(L, L + 4)) return L += 4, null;
                                        P()
                                }
                                return "$"
                            },
                            R = function(a) {
                                var b, c;
                                if ("$" == a && P(), "string" == typeof a) {
                                    if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                                    if ("[" == a) {
                                        for (b = []; a = Q(), "]" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                                        return b
                                    }
                                    if ("{" == a) {
                                        for (b = {}; a = Q(), "}" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                                        return b
                                    }
                                    P()
                                }
                                return a
                            },
                            S = function(a, b, c) {
                                var d = T(a, b, c);
                                d === q ? delete a[b] : a[b] = d
                            },
                            T = function(a, b, c) {
                                var d, e = a[b];
                                if ("object" == typeof e && e)
                                    if (s.call(e) == z)
                                        for (d = e.length; d--;) S(e, d, c);
                                    else p(e, function(a) {
                                        S(e, a, c)
                                    });
                                return c.call(a, b, e)
                            };
                        b.parse = function(a, b) {
                            var c, d;
                            return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
                        }
                    }
                }
                return b.runInContext = e, b
            }
            var f = "function" == typeof a && a.amd,
                g = {
                    "function": !0,
                    object: !0
                },
                h = g[typeof d] && d && !d.nodeType && d,
                i = g[typeof window] && window || this,
                j = h && g[typeof c] && c && !c.nodeType && "object" == typeof b && b;
            if (!j || j.global !== j && j.window !== j && j.self !== j || (i = j), h && !f) e(i, h);
            else {
                var k = i.JSON,
                    l = i.JSON3,
                    m = !1,
                    n = e(i, i.JSON3 = {
                        noConflict: function() {
                            return m || (m = !0, i.JSON = k, i.JSON3 = l, k = l = null), n
                        }
                    });
                i.JSON = {
                    parse: n.parse,
                    stringify: n.stringify
                }
            }
            f && a(function() {
                return n
            })
        }).call(this)
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {}], 59: [function(a, b) {
    "use strict";

    function c(a, b, i) {
        if (!(this instanceof c)) return new c(a, b, i);
        var j, k, l, m, n = g.test(a),
            o = typeof b,
            p = this,
            q = 0;
        for ("object" !== o && "string" !== o && (i = b, b = null), i && "function" != typeof i && (i = f.parse), b = e(b); q < h.length; q++) k = h[q], j = k[0], m = k[1], j !== j ? p[m] = a : "string" == typeof j ? ~(l = a.indexOf(j)) && ("number" == typeof k[2] ? (p[m] = a.slice(0, l), a = a.slice(l + k[2])) : (p[m] = a.slice(l), a = a.slice(0, l))) : (l = j.exec(a)) && (p[m] = l[1], a = a.slice(0, a.length - l[0].length)), p[m] = p[m] || (k[3] || "port" === m && n ? b[m] || "" : ""), k[4] && (p[m] = p[m].toLowerCase());
        i && (p.query = i(p.query)), d(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", p.auth && (k = p.auth.split(":"), p.username = k[0] || "", p.password = k[1] || ""), p.href = p.toString()
    }
    var d = a("requires-port"),
        e = a("./lolcation"),
        f = a("querystringify"),
        g = /^\/(?!\/)/,
        h = [
            ["#", "hash"],
            ["?", "query"],
            ["//", "protocol", 2, 1, 1],
            ["/", "pathname"],
            ["@", "auth", 1],
            [0 / 0, "host", void 0, 1, 1],
            [/\:(\d+)$/, "port"],
            [0 / 0, "hostname", void 0, 1, 1]
        ];
    c.prototype.set = function(a, b, c) {
        var e = this;
        return "query" === a ? ("string" == typeof b && (b = (c || f.parse)(b)), e[a] = b) : "port" === a ? (e[a] = b, d(b, e.protocol) ? b && (e.host = e.hostname + ":" + b) : (e.host = e.hostname, e[a] = "")) : "hostname" === a ? (e[a] = b, e.port && (b += ":" + e.port), e.host = b) : "host" === a ? (e[a] = b, /\:\d+/.test(b) && (b = b.split(":"), e.hostname = b[0], e.port = b[1])) : e[a] = b, e.href = e.toString(), e
    }, c.prototype.toString = function(a) {
        a && "function" == typeof a || (a = f.stringify);
        var b, c = this,
            d = c.protocol + "//";
        return c.username && (d += c.username, c.password && (d += ":" + c.password), d += "@"), d += c.hostname, c.port && (d += ":" + c.port), d += c.pathname, c.query && (b = "object" == typeof c.query ? a(c.query) : c.query, d += ("?" === b.charAt(0) ? "" : "?") + b), c.hash && (d += c.hash), d
    }, c.qs = f, c.location = e, b.exports = c
}, {
    "./lolcation": 60,
    querystringify: 61,
    "requires-port": 62
}], 60: [function(a, b) {
    (function(c) {
        "use strict";
        var d, e = {
            hash: 1,
            query: 1
        };
        b.exports = function(b) {
            b = b || c.location || {}, d = d || a("./");
            var f, g = {},
                h = typeof b;
            if ("blob:" === b.protocol) g = new d(unescape(b.pathname), {});
            else if ("string" === h) {
                g = new d(b, {});
                for (f in e) delete g[f]
            } else if ("object" === h)
                for (f in b) f in e || (g[f] = b[f]);
            return g
        }
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
}, {
    "./": 59
}], 61: [function(a, b, c) {
    "use strict";

    function d(a) {
        for (var b, c = /([^=?&]+)=([^&]*)/g, d = {}; b = c.exec(a); d[decodeURIComponent(b[1])] = decodeURIComponent(b[2]));
        return d
    }

    function e(a, b) {
        b = b || "";
        var c = [];
        "string" != typeof b && (b = "?");
        for (var d in a) f.call(a, d) && c.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
        return c.length ? b + c.join("&") : ""
    }
    var f = Object.prototype.hasOwnProperty;
    c.stringify = e, c.parse = d
}, {}], 62: [function(a, b) {
    "use strict";
    b.exports = function(a, b) {
        if (b = b.split(":")[0], a = +a, !a) return !1;
        switch (b) {
            case "http":
            case "ws":
                return 80 !== a;
            case "https":
            case "wss":
                return 443 !== a;
            case "ftp":
                return 22 !== a;
            case "gopher":
                return 70 !== a;
            case "file":
                return !1
        }
        return 0 !== a
    }
}, {}]
}, {}, [1])(1)
}),
function() {
    var a, b, c, d, e = {}.hasOwnProperty,
        f = [].slice;
    a = {
        LF: "\n",
        NULL: "\x00"
    }, c = function() {
        function b(a, b, c) {
            this.command = a, this.headers = null != b ? b : {}, this.body = null != c ? c : ""
        }
        var c;
        return b.prototype.toString = function() {
            var c, d, f, g, h;
            c = [this.command], f = this.headers["content-length"] === !1 ? !0 : !1, f && delete this.headers["content-length"], h = this.headers;
            for (d in h) e.call(h, d) && (g = h[d], c.push("" + d + ":" + g));
            return this.body && !f && c.push("content-length:" + b.sizeOfUTF8(this.body)), c.push(a.LF + this.body), c.join(a.LF)
        }, b.sizeOfUTF8 = function(a) {
            return a ? encodeURI(a).match(/%..|./g).length : 0
        }, c = function(c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            for (g = c.search(RegExp("" + a.LF + a.LF)), h = c.substring(0, g).split(a.LF), f = h.shift(), i = {}, o = function(a) {
                    return a.replace(/^\s+|\s+$/g, "")
                }, s = h.reverse(), p = 0, r = s.length; r > p; p++) m = s[p], k = m.indexOf(":"), i[o(m.substring(0, k))] = o(m.substring(k + 1));
            if (d = "", n = g + 2, i["content-length"]) l = parseInt(i["content-length"]), d = ("" + c).substring(n, n + l);
            else
                for (e = null, j = q = n, t = c.length;
                    (t >= n ? t > q : q > t) && (e = c.charAt(j), e !== a.NULL); j = t >= n ? ++q : --q) d += e;
            return new b(f, i, d)
        }, b.unmarshall = function(b) {
            var d, e, f, g;
            return e = b.split(RegExp("" + a.NULL + a.LF + "*")), g = {
                frames: [],
                partial: ""
            }, g.frames = function() {
                var a, b, f, g;
                for (f = e.slice(0, -1), g = [], a = 0, b = f.length; b > a; a++) d = f[a], g.push(c(d));
                return g
            }(), f = e.slice(-1)[0], f === a.LF || -1 !== f.search(RegExp("" + a.NULL + a.LF + "*$")) ? g.frames.push(c(f)) : g.partial = f, g
        }, b.marshall = function(c, d, e) {
            var f;
            return f = new b(c, d, e), f.toString() + a.NULL
        }, b
    }(), b = function() {
        function b(a) {
            this.ws = a, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = !1, this.heartbeat = {
                outgoing: 1e4,
                incoming: 1e4
            }, this.maxWebSocketFrameSize = 16384, this.subscriptions = {}, this.partialData = ""
        }
        var e;
        return b.prototype.debug = function(a) {
            var b;
            return "undefined" != typeof window && null !== window && null != (b = window.console) ? b.log(a) : void 0
        }, e = function() {
            return Date.now ? Date.now() : (new Date).valueOf
        }, b.prototype._transmit = function(a, b, d) {
            var e;
            for (e = c.marshall(a, b, d), "function" == typeof this.debug && this.debug(">>> " + e);;) {
                if (!(e.length > this.maxWebSocketFrameSize)) return this.ws.send(e);
                this.ws.send(e.substring(0, this.maxWebSocketFrameSize)), e = e.substring(this.maxWebSocketFrameSize), "function" == typeof this.debug && this.debug("remaining = " + e.length)
            }
        }, b.prototype._setupHeartbeat = function(b) {
            var c, f, g, h, i, j;
            if ((i = b.version) === d.VERSIONS.V1_1 || i === d.VERSIONS.V1_2) return j = function() {
                var a, c, d, e;
                for (d = b["heart-beat"].split(","), e = [], a = 0, c = d.length; c > a; a++) h = d[a], e.push(parseInt(h));
                return e
            }(), f = j[0], c = j[1], 0 !== this.heartbeat.outgoing && 0 !== c && (g = Math.max(this.heartbeat.outgoing, c), "function" == typeof this.debug && this.debug("send PING every " + g + "ms"), this.pinger = d.setInterval(g, function(b) {
                return function() {
                    return b.ws.send(a.LF), "function" == typeof b.debug ? b.debug(">>> PING") : void 0
                }
            }(this))), 0 !== this.heartbeat.incoming && 0 !== f ? (g = Math.max(this.heartbeat.incoming, f), "function" == typeof this.debug && this.debug("check PONG every " + g + "ms"), this.ponger = d.setInterval(g, function(a) {
                return function() {
                    var b;
                    b = e() - a.serverActivity, b > 2 * g && ("function" == typeof a.debug && a.debug("did not receive server activity for the last " + b + "ms"), 1 === a.ws.readyState && (a.ws.onclose({
                        code: "HEALTH_CHECK"
                    }), a.ws.close()))
                }
            }(this))) : void 0
        }, b.prototype._parseConnect = function() {
            var a, b, c, d, e;
            switch (a = 1 <= arguments.length ? f.call(arguments, 0) : [], e = {}, a.length) {
                case 2:
                    e = a[0], b = a[1];
                    break;
                case 3:
                    a[1] instanceof Function ? (e = a[0], b = a[1], c = a[2]) : (e.login = a[0], e.passcode = a[1], b = a[2]);
                    break;
                case 4:
                    a[1] instanceof Function ? (e = a[0], b = a[1], c = a[2], d = a[3]) : (e.login = a[0], e.passcode = a[1], b = a[2], c = a[3]);
                    break;
                default:
                    e.login = a[0], e.passcode = a[1], b = a[2], c = a[3], e.host = a[4]
            }
            return [e, b, c, d]
        }, b.prototype.connect = function() {
            var b, g, h, i, j;
            return b = 1 <= arguments.length ? f.call(arguments, 0) : [], j = this._parseConnect.apply(this, b), i = j[0], this.connectCallback = j[1], g = j[2], h = j[3], "function" == typeof this.debug && this.debug("Opening Web Socket..."), this.ws.onmessage = function(b) {
                return function(d) {
                    var f, h, i, j, k, l, m, n, o, p, q, r, s;
                    if (j = "undefined" != typeof ArrayBuffer && d.data instanceof ArrayBuffer ? (f = new Uint8Array(d.data), "function" == typeof b.debug ? b.debug("--- got data length: " + f.length) : void 0, function() {
                            var a, b, c;
                            for (c = [], a = 0, b = f.length; b > a; a++) h = f[a], c.push(String.fromCharCode(h));
                            return c
                        }().join("")) : d.data, b.serverActivity = e(), j === a.LF) return void("function" == typeof b.debug && b.debug("<<< PONG"));
                    for ("function" == typeof b.debug && b.debug("<<< " + j), o = c.unmarshall(b.partialData + j), b.partialData = o.partial, r = o.frames, s = [], p = 0, q = r.length; q > p; p++) switch (k = r[p], k.command) {
                        case "CONNECTED":
                            "function" == typeof b.debug && b.debug("connected to server " + k.headers.server), b.connected = !0, b._setupHeartbeat(k.headers), s.push("function" == typeof b.connectCallback ? b.connectCallback(k) : void 0);
                            break;
                        case "MESSAGE":
                            n = k.headers.subscription, m = b.subscriptions[n] || b.onreceive, m ? (i = b, l = k.headers["message-id"], k.ack = function(a) {
                                return null == a && (a = {}), i.ack(l, n, a)
                            }, k.nack = function(a) {
                                return null == a && (a = {}), i.nack(l, n, a)
                            }, s.push(m(k))) : s.push("function" == typeof b.debug ? b.debug("Unhandled received MESSAGE: " + k) : void 0);
                            break;
                        case "RECEIPT":
                            s.push("function" == typeof b.onreceipt ? b.onreceipt(k) : void 0);
                            break;
                        case "ERROR":
                            s.push("function" == typeof g ? g(k) : void 0);
                            break;
                        default:
                            s.push("function" == typeof b.debug ? b.debug("Unhandled frame: " + k) : void 0)
                    }
                    return s
                }
            }(this), this.ws.onclose = function(a) {
                return function(b) {
                    if (a.ws.onclose = !1, a._cleanUp(), b) {
                        if ("HEALTH_CHECK" == b.code) {
                            var c = "Connection to " + a.ws.url + " close due to failed Health Check";
                            return "function" == typeof a.debug && a.debug(c), "function" == typeof g ? g(b) : void 0
                        }
                        if (1001 == b.code) {
                            var c = "Connection to " + a.ws.url + " aborted on client side";
                            return "function" == typeof a.debug && a.debug(c), "function" == typeof g ? g({
                                code: 1001,
                                msg: c
                            }) : void 0
                        }
                        if (1e3 != b.code) {
                            var c = "Whoops! Lost connection to " + a.ws.url;
                            return "function" == typeof a.debug && a.debug(c), "function" == typeof g ? g({
                                code: b.code,
                                msg: c
                            }) : void 0
                        }
                        return "function" == typeof a.debug && a.debug("Connection closed from server"), "function" == typeof h ? h() : void 0
                    }
                    var c = "Connection to " + a.ws.url + " lost";
                    return "function" == typeof a.debug && a.debug(c), "function" == typeof g ? g({
                        code: null
                    }) : void 0
                }
            }(this), this.ws.onopen = function(a) {
                return function() {
                    return "function" == typeof a.debug && a.debug("Web Socket Opened..."), i["accept-version"] = d.VERSIONS.supportedVersions(), i["heart-beat"] = [a.heartbeat.outgoing, a.heartbeat.incoming].join(","), a._transmit("CONNECT", i)
                }
            }(this)
        }, b.prototype.disconnect = function(a, b, c) {
            return null == b && (b = {}), this._transmit("DISCONNECT", b), this.ws.onclose = null, this._cleanUp(), this.ws.close(c ? c : 1e3), "function" == typeof a ? a() : void 0
        }, b.prototype._cleanUp = function() {
            return this.connected = !1, this.pinger && d.clearInterval(this.pinger), this.ponger ? d.clearInterval(this.ponger) : void 0
        }, b.prototype.send = function(a, b, c) {
            return null == b && (b = {}), null == c && (c = ""), b.destination = a, this._transmit("SEND", b, c)
        }, b.prototype.subscribe = function(a, b, c) {
            var d;
            return null == c && (c = {}), c.id || (c.id = "sub-" + this.counter++), c.destination = a, this.subscriptions[c.id] = b, this._transmit("SUBSCRIBE", c), d = this, {
                id: c.id,
                unsubscribe: function() {
                    return d.unsubscribe(c.id)
                }
            }
        }, b.prototype.unsubscribe = function(a) {
            return delete this.subscriptions[a], this._transmit("UNSUBSCRIBE", {
                id: a
            })
        }, b.prototype.begin = function(a) {
            var b, c;
            return c = a || "tx-" + this.counter++, this._transmit("BEGIN", {
                transaction: c
            }), b = this, {
                id: c,
                commit: function() {
                    return b.commit(c)
                },
                abort: function() {
                    return b.abort(c)
                }
            }
        }, b.prototype.commit = function(a) {
            return this._transmit("COMMIT", {
                transaction: a
            })
        }, b.prototype.abort = function(a) {
            return this._transmit("ABORT", {
                transaction: a
            })
        }, b.prototype.ack = function(a, b, c) {
            return null == c && (c = {}), c["message-id"] = a, c.subscription = b, this._transmit("ACK", c)
        }, b.prototype.nack = function(a, b, c) {
            return null == c && (c = {}), c["message-id"] = a, c.subscription = b, this._transmit("NACK", c)
        }, b
    }(), d = {
        VERSIONS: {
            V1_0: "1.0",
            V1_1: "1.1",
            V1_2: "1.2",
            supportedVersions: function() {
                return "1.1,1.0"
            }
        },
        client: function(a, c) {
            var e, f;
            return null == c && (c = ["v10.stomp", "v11.stomp"]), e = d.WebSocketClass || WebSocket, f = new e(a, c), new b(f)
        },
        over: function(a) {
            return new b(a)
        },
        Frame: c
    }, "undefined" != typeof exports && null !== exports && (exports.Stomp = d), "undefined" != typeof window && null !== window ? (d.setInterval = function(a, b) {
        return window.setInterval(b, a)
    }, d.clearInterval = function(a) {
        return window.clearInterval(a)
    }, window.Stomp = d) : exports || (self.Stomp = d)
}.call(this),
    function(a) {
        function b(a, b) {
            return new Promise(function(d, e) {
                c(l.stream).then(function() {
                    return f(l.currentCamera, l.requestAudio, a, b)
                }).then(function(a) {
                    return l.setCameraAndStream(a, l.currentCamera)
                }).then(d, e)
            })
        }

        function c(a) {
            return new Promise(function(b) {
                a ? $(l.video).hide(0, function() {
                    a.getTracks().forEach(function(a) {
                        a.stop()
                    }), b()
                }) : b()
            })
        }

        function d() {
            return new Promise(function(a, b) {
                e().then(function(b) {
                    var c = EID.Util.isTouchDevice() && b.length > 1;
                    a({
                        cameras: b,
                        isMultiCameraDevice: c
                    })
                }, b)
            })
        }

        function e() {
            return new Promise(function(a, b) {
                navigator.mediaDevices.enumerateDevices().then(function(c) {
                    for (var d = [], e = 0; e !== c.length; ++e) "videoinput" === c[e].kind && d.push(c[e]);
                    d.length ? a(d) : b(k.errors.noCamera)
                })["catch"](b)
            })
        }

        function f(a, b, c, d) {
            return new Promise(function(e, f) {
                var g = {
                        audio: DetectRTC.audioInputDevices.length > 0 && b,
                        video: {
                            facingMode: "front" == a ? "user" : "environment"
                        }
                    },
                    h = {};
                c && (h.min = c), d && (h.exact = d), jQuery.isEmptyObject(h) || (g.video.width = h, l.ratio && g.video.width.exact && (g.video.height = {
                    min: g.video.width.exact / l.ratio
                })), navigator.mediaDevices.getUserMedia(g).then(e, function(a) {
                    f("PermissionDeniedError" == a.name ? k.errors.cameraPermissionDenied : "OverconstrainedError" == a.name || "ConstraintNotSatisfiedError" == a.name ? k.errors.cameraResolutionTooLow : k.errors.cameraUnavailable)
                })
            })
        }

        function g(a, b, c, d) {
            var e = document.createElement("video");
            return e.muted = !0, e.setAttribute("autoplay", "autoplay"), DetectRTC.browser.isSafari && e.setAttribute("playsinline", ""), e.style.width = "" + a + "px", e.style.height = "" + b + "px", (1 != c || 1 != d) && (e.style.webkitTransformOrigin = "0px 0px", e.style.mozTransformOrigin = "0px 0px", e.style.msTransformOrigin = "0px 0px", e.style.oTransformOrigin = "0px 0px", e.style.transformOrigin = "0px 0px", e.style.webkitTransform = "scaleX(" + c + ") scaleY(" + d + ")", e.style.mozTransform = "scaleX(" + c + ") scaleY(" + d + ")", e.style.msTransform = "scaleX(" + c + ") scaleY(" + d + ")", e.style.oTransform = "scaleX(" + c + ") scaleY(" + d + ")", e.style.transform = "scaleX(" + c + ") scaleY(" + d + ")", e.style.position = "absolute", e.style.top = "0", e.style.left = "0"), e
        }

        function h(a, b) {
            return new Promise(function(c, d) {
                var g, h, k, l;
                f(a, b).then(function(a) {
                    return g = a, k = i(g.getAudioTracks()), e()
                }).then(function(a) {
                    return h = a, l = EID.Util.isTouchDevice() && h.length > 1, j(g)
                }).then(function(a) {
                    c({
                        resolution: a,
                        cameras: h,
                        stream: g,
                        hasAudio: k,
                        isMultiCameraDevice: l
                    })
                }, d)
            })
        }

        function i(a) {
            if (!a) return !1;
            for (var b = 0; b < a.length; b++)
                if (a[b].enabled && "live" == a[b].readyState) return !0;
            return !1
        }

        function j(a) {
            return new Promise(function(b, c) {
                function d() {
                    var a = {
                        width: e.videoWidth,
                        height: e.videoHeight
                    };
                    2 == a.width || 2 == a.height ? c(k.errors.cameraUnavailable) : b(a), e.removeEventListener("resize", d), $(e).remove()
                }
                var e = document.createElement("video");
                e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", $("body").append(e), e.setAttribute("autoplay", "autoplay"), e.muted = !0, e.addEventListener("resize", d), e.srcObject = a
            })
        }
        var k = null,
            l = (DetectRTC.browser.isFirefox ? [640] : [640], {
                version: "1.0.2",
                protocol: location.protocol.match(/https/i) ? "https" : "http",
                swfURL: "",
                loaded: !1,
                live: !1,
                userMedia: !0,
                supported: !0,
                resolution: null,
                ratio: null,
                cameras: {
                    front: null,
                    back: null
                },
                isMultiCameraDevice: null,
                hasAudio: null,
                video: null,
                stream: null,
                currentCamera: null,
                requestAudio: !0,
                cameraWidth: null,
                params: {
                    width: 0,
                    height: 0,
                    dest_width: 0,
                    dest_height: 0,
                    image_format: "jpeg",
                    jpeg_quality: 90,
                    force_flash: !1,
                    flip_horiz: !1,
                    fps: 30
                },
                hooks: {},
                init: function() {
                    var b = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                    a.URL = a.URL || a.webkitURL || a.mozURL || a.msURL, this.userMedia = this.userMedia && !!b && !!a.URL, this.supported = this.userMedia, navigator.userAgent.match(/Firefox\D+(\d+)/) && parseInt(RegExp.$1, 10) < 21 && (this.userMedia = null)
                },
                attach: function(b, c, e) {
                    if (this.supported) {
                        if ("string" == typeof b && (b = document.getElementById(b) || document.querySelector(b)), !b) return this.dispatch("error", "Could not locate DOM element to attach to.");
                        this.container = b, b.innerHTML = "";
                        var f = document.createElement("div");
                        b.appendChild(f), this.peg = f, void 0 != e && (this.requestAudio = e), this.params.width || (this.params.width = b.clientWidth), this.params.height || (this.params.height = b.clientHeight), this.params.dest_width || (this.params.dest_width = this.params.width), this.params.dest_height || (this.params.dest_height = this.params.height), this.params.force_flash && (this.userMedia = null), "number" != typeof this.params.fps && (this.params.fps = 30);
                        var i = this.params.width / this.params.dest_width,
                            j = this.params.height / this.params.dest_height;
                        if (this.userMedia) {
                            b.style.overflow = "hidden";
                            var m = this;
                            d().then(function(a) {
                                return m.isMultiCameraDevice = a.isMultiCameraDevice, c = m.isMultiCameraDevice ? c : "front", h(c, l.requestAudio)
                            }).then(function(a) {
                                m.hasAudio = a.hasAudio, m.cameras = a.cameras;
                                var d = g(m.params.width, m.params.height, i, j);
                                return b.appendChild(d), m.video = d, m.setCameraAndStream(a.stream, c)
                            }).then(function() {
                                m.loaded = !0, m.live = !0, m.dispatch("load"), m.dispatch("live")
                            }, function(a) {
                                m.dispatch("error", a)
                            })
                        } else {
                            a.Webcam = l;
                            var n = document.createElement("div");
                            n.innerHTML = this.getSWFHTML(), b.appendChild(n), l.currentCamera = "front"
                        }
                        if (this.params.crop_width && this.params.crop_height) {
                            var o = Math.floor(this.params.crop_width * i),
                                p = Math.floor(this.params.crop_height * j);
                            b.style.width = "" + o + "px", b.style.height = "" + p + "px", b.style.overflow = "hidden", b.scrollLeft = Math.floor(this.params.width / 2 - o / 2), b.scrollTop = Math.floor(this.params.height / 2 - p / 2)
                        } else b.style.width = "" + this.params.width + "px", b.style.height = "" + this.params.height + "px"
                    } else this.dispatch("error", k.errors.notSupported)
                },
                reset: function() {
                    if (this.preview_active && this.unfreeze(), this.unflip(), this.userMedia) try {
                        c(this.stream)
                    } catch (a) {}
                    this.container && (this.container.innerHTML = "", delete this.container), this.loaded = !1, this.live = !1, this.params = {
                        width: 0,
                        height: 0,
                        dest_width: 0,
                        dest_height: 0,
                        image_format: "jpeg",
                        jpeg_quality: 90,
                        force_flash: !1,
                        flip_horiz: !1,
                        fps: 30
                    }
                },
                set: function() {
                    if (1 == arguments.length)
                        for (var a in arguments[0]) this.params[a] = arguments[0][a];
                    else this.params[arguments[0]] = arguments[1]
                },
                setVideoId: function(a) {
                    k = a
                },
                on: function(a, b) {
                    a = a.replace(/^on/i, "").toLowerCase(), this.hooks[a] || (this.hooks[a] = []), this.hooks[a].push(b)
                },
                off: function(a, b) {
                    if (a = a.replace(/^on/i, "").toLowerCase(), this.hooks[a])
                        if (b) {
                            var c = this.hooks[a].indexOf(b);
                            c > -1 && this.hooks[a].splice(c, 1)
                        } else this.hooks[a] = []
                },
                dispatch: function() {
                    var b = arguments[0].replace(/^on/i, "").toLowerCase(),
                        c = Array.prototype.slice.call(arguments, 1);
                    if (this.hooks[b] && this.hooks[b].length) {
                        for (var d = 0, e = this.hooks[b].length; e > d; d++) {
                            var f = this.hooks[b][d];
                            "function" == typeof f ? f.apply(this, c) : "object" == typeof f && 2 == f.length ? f[0][f[1]].apply(f[0], c) : a[f] && a[f].apply(a, c)
                        }
                        return !0
                    }
                    return "error" == b && alert("Webcam.js Error: " + c[0]), !1
                },
                setSWFLocation: function(a) {
                    this.swfURL = a
                },
                detectFlash: function() {
                    var b = "Shockwave Flash",
                        c = "ShockwaveFlash.ShockwaveFlash",
                        d = "application/x-shockwave-flash",
                        e = a,
                        f = navigator,
                        g = !1;
                    if ("undefined" != typeof f.plugins && "object" == typeof f.plugins[b]) {
                        var h = f.plugins[b].description;
                        h && "undefined" != typeof f.mimeTypes && f.mimeTypes[d] && f.mimeTypes[d].enabledPlugin && (g = !0)
                    } else if ("undefined" != typeof e.ActiveXObject) try {
                        var i = new ActiveXObject(c);
                        if (i) {
                            var j = i.GetVariable("$version");
                            j && (g = !0)
                        }
                    } catch (k) {}
                    return g
                },
                getSWFHTML: function() {
                    var a = "";
                    if (location.protocol.match(/file/)) return this.dispatch("error", "Flash does not work from local disk.  Please run from a web server."), '<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>';
                    if (!this.detectFlash()) return this.dispatch("error", "Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again."), '<h3 style="color:red">ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).</h3>';
                    if (!this.swfURL) {
                        for (var b = "", c = document.getElementsByTagName("script"), d = 0, e = c.length; e > d; d++) {
                            var f = c[d].getAttribute("src");
                            f && f.match(/\/webcam(\.min)?\.js/) && (b = f.replace(/\/webcam(\.min)?\.js.*$/, ""), d = e)
                        }
                        this.swfURL = b ? b + "/webcam.swf" : "webcam.swf"
                    }
                    var g = "";
                    for (var h in this.params) g && (g += "&"), g += h + "=" + escape(this.params[h]);
                    return a += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="' + this.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this.params.width + '" height="' + this.params.height + '" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + this.swfURL + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + g + '"/><embed id="webcam_movie_embed" src="' + this.swfURL + '" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + this.params.width + '" height="' + this.params.height + '" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + g + '"></embed></object>'
                },
                getMovie: function() {
                    if (!this.loaded) return this.dispatch("error", "Flash Movie is not loaded yet");
                    var a = document.getElementById("webcam_movie_obj");
                    return a && a._snap || (a = document.getElementById("webcam_movie_embed")), a || this.dispatch("error", "Cannot locate Flash movie in DOM"), a
                },
                freeze: function() {
                    var a = this,
                        b = this.params;
                    this.preview_active && this.unfreeze();
                    var c = this.params.width / this.params.dest_width,
                        d = this.params.height / this.params.dest_height;
                    this.unflip();
                    var e = b.crop_width,
                        f = b.crop_height;
                    delete b.crop_width, delete b.crop_height;
                    var g = b.crop_width || b.dest_width,
                        h = b.crop_height || b.dest_height,
                        i = document.createElement("canvas");
                    i.width = g, i.height = h;
                    var j = i.getContext("2d");
                    this.preview_canvas = i, this.preview_context = j, (1 != c || 1 != d) && (i.style.webkitTransformOrigin = "0px 0px", i.style.mozTransformOrigin = "0px 0px", i.style.msTransformOrigin = "0px 0px", i.style.oTransformOrigin = "0px 0px", i.style.transformOrigin = "0px 0px", i.style.webkitTransform = "scaleX(" + c + ") scaleY(" + d + ")", i.style.mozTransform = "scaleX(" + c + ") scaleY(" + d + ")", i.style.msTransform = "scaleX(" + c + ") scaleY(" + d + ")", i.style.oTransform = "scaleX(" + c + ") scaleY(" + d + ")", i.style.transform = "scaleX(" + c + ") scaleY(" + d + ")"), this.snap(function() {
                        i.style.position = "absolute", i.style.left = "" + a.container.scrollLeft + "px", i.style.top = "" + a.container.scrollTop + "px", i.style["z-index"] = 1e3, a.container.insertBefore(i, a.peg), a.container.style.overflow = "hidden", a.preview_active = !0, b.crop_width = e, b.crop_height = f
                    }, i)
                },
                unfreeze: function() {
                    this.preview_active && (this.container.removeChild(this.preview_canvas), delete this.preview_context, delete this.preview_canvas, this.preview_active = !1, this.flip())
                },
                flip: function() {
                    if (this.params.flip_horiz && this.video) {
                        var a = this.video.style;
                        a.webkitTransform = "scaleX(-1)", a.mozTransform = "scaleX(-1)", a.msTransform = "scaleX(-1)", a.oTransform = "scaleX(-1)", a.transform = "scaleX(-1)", a.filter = "FlipH", a.msFilter = "FlipH"
                    }
                },
                unflip: function() {
                    if (this.params.flip_horiz && this.video) {
                        var a = this.video.style;
                        a.webkitTransform = "scaleX(1)", a.mozTransform = "scaleX(1)", a.msTransform = "scaleX(1)", a.oTransform = "scaleX(1)", a.transform = "scaleX(1)", a.filter = "", a.msFilter = ""
                    }
                },
                savePreview: function(a, b) {
                    var c = this.params,
                        d = this.preview_canvas,
                        e = this.preview_context;
                    if (b) {
                        var f = b.getContext("2d");
                        f.drawImage(d, 0, 0)
                    }
                    a(b ? null : d.toDataURL("image/" + c.image_format, c.jpeg_quality / 100), d, e), this.unfreeze()
                },
                snap: function(a, b, c, d, e) {
                    var f = this.params;
                    if (!this.loaded) return this.dispatch("error", "Webcam is not loaded yet");
                    if (!this.live) return this.dispatch("error", "Webcam is not live yet");
                    if (!d) return this.dispatch("error", "Please provide a callback function or canvas to snap()");
                    if (this.preview_active) return this.savePreview(d, e), null;
                    var g = document.createElement("canvas");
                    g.width = a, g.height = b;
                    var h = g.getContext("2d");
                    DetectRTC.isMobileDevice && DetectRTC.browser.isFirefox && (h.translate(0, b), h.scale(1, -1));
                    var i = function() {
                        if (this.src && this.width && this.height && h.drawImage(this, 0, 0, f.dest_width, f.dest_height), e) {
                            var a = e.getContext("2d");
                            a.drawImage(g, 0, 0)
                        }
                        d(e ? null : g.toDataURL("image/" + f.image_format, c / 100), g, h)
                    };
                    if (this.userMedia) h.drawImage(this.video, 0, 0, a, b), i();
                    else {
                        var j = this.getMovie()._snap(),
                            k = new Image;
                        k.onload = i, k.src = "data:image/png;base64," + j
                    }
                    return null
                },
                configure: function(a) {
                    a || (a = "camera"), this.getMovie()._configure(a)
                },
                flashNotify: function(a, b) {
                    switch (a) {
                        case "flashLoadComplete":
                            this.loaded = !0, this.dispatch("load");
                            break;
                        case "cameraLive":
                            this.live = !0, this.dispatch("live"), this.flip();
                            break;
                        case "error":
                            this.dispatch("error", b)
                    }
                },
                b64ToUint6: function(a) {
                    return a > 64 && 91 > a ? a - 65 : a > 96 && 123 > a ? a - 71 : a > 47 && 58 > a ? a + 4 : 43 === a ? 62 : 47 === a ? 63 : 0
                },
                base64DecToArr: function(a, b) {
                    for (var c, d, e = a.replace(/[^A-Za-z0-9\+\/]/g, ""), f = e.length, g = b ? Math.ceil((3 * f + 1 >> 2) / b) * b : 3 * f + 1 >> 2, h = new Uint8Array(g), i = 0, j = 0, k = 0; f > k; k++)
                        if (d = 3 & k, i |= this.b64ToUint6(e.charCodeAt(k)) << 18 - 6 * d, 3 === d || f - k === 1) {
                            for (c = 0; 3 > c && g > j; c++, j++) h[j] = i >>> (16 >>> c & 24) & 255;
                            i = 0
                        }
                    return h
                },
                upload: function(a, b, c) {
                    c && l.on("uploadComplete", c);
                    var d = "webcam",
                        e = "";
                    if (!a.match(/^data\:image\/(\w+)/)) throw "Cannot locate image format in Data URI";
                    e = RegExp.$1;
                    var f = a.replace(/^data\:image\/\w+\;base64\,/, ""),
                        g = new XMLHttpRequest;
                    g.open("POST", b, !0), g.upload && g.upload.addEventListener && g.upload.addEventListener("progress", function(a) {
                        if (a.lengthComputable) {
                            var b = a.loaded / a.total;
                            l.dispatch("uploadProgress", b, a)
                        }
                    }, !1), g.onload = function() {
                        l.dispatch("uploadComplete", g.status, g.responseText, g.statusText)
                    };
                    var h = new Blob([this.base64DecToArr(f)], {
                            type: "image/" + e
                        }),
                        i = new FormData;
                    i.append(d, h, d + "." + e.replace(/e/, "")), g.send(i)
                },
                switchToCamera: function(a) {
                    return new Promise(function(b, d) {
                        a != l.currentCamera && l.isMultiCameraDevice ? c(l.stream).then(function() {
                            return f(a, l.requestAudio)
                        }).then(function(b) {
                            return l.setCameraAndStream(b, a)
                        }).then(b, d) : b()
                    })
                },
                increaseStreamWidth: function(a) {
                    return b(a, null)
                },
                setCameraAndStream: function(a, b) {
                    return new Promise(function(c) {
                        function d() {
                            EID.Log.debug("Camera changed to: " + b), l.resolution = {
                                width: l.video.videoWidth,
                                height: l.video.videoHeight
                            }, l.ratio = l.resolution.width / l.resolution.height, l.video.removeEventListener("loadeddata", d), c()
                        }
                        l.video.addEventListener("loadeddata", d), l.video.srcObject = a, DetectRTC.browser.isSafari || l.video.play(), l.stream = a, l.currentCamera = b, $(l.video).show(0), "front" == b ? l.flip() : l.unflip()
                    })
                }
            });
        l.init(), "function" == typeof define && define.amd ? define(function() {
            return l
        }) : "object" == typeof module && module.exports ? module.exports = l : a.Webcam = l
    }(window);
var EID = function(a) {
        function b(b) {
            return new Promise(function(h, j) {
                $(document).ready(function() {
                    a.Log.info("eID: initializing eID"), i.eidApi = b.eidApi ? b.eidApi : EID.Config.API_ENDPOINT, i.eidApi = "/" == i.eidApi.charAt(i.eidApi.length - 1) ? i.eidApi : i.eidApi + "/", i.apiVersion = a.Util.getApiVersion(), i.scriptsLocation = a.Util.getScriptsLocation(), a.ApiRestClient.init({
                        token: b.token
                    }), a.ApiVideoIdClient.init({
                        token: b.token
                    }), d().then(function() {
                        return e(b)
                    }).then(function() {
                        return f()
                    }).then(function() {
                        return g()
                    }).then(function() {
                        return c(b)
                    }).then(function() {
                        a.Log.info("eID: initialized"), h()
                    }, j)
                })
            })
        }

        function c(b) {
            return new Promise(function(c, d) {
                try {
                    b || (b = {}), i.proxyEndpoint = "/" == b.proxyEndpoint.charAt(b.proxyEndpoint.length - 1) ? b.proxyEndpoint : b.proxyEndpoint + "/", i.videoIdLiveEndpoint = a.eidApi + "videoid_stream", a.keyLength = void 0 != b.keyLength ? b.keyLength : a.Util.isWorkerCompatible() && !a.Util.isSafari() ? 2048 : 1024, a.RsaUtil.destroy().then(function() {
                        return a.RsaUtil.initRsa()
                    }).then(function() {
                        a.Log.info("eID: RSA initialized"), i.isInitialized = a.RsaUtil.isInitialized, c()
                    }, function(a) {
                        d(a)
                    })
                } catch (e) {
                    d(e)
                }
            })
        }

        function d() {
            return new Promise(function(b, c) {
                $.getScript(a.cryptoLibUrl, function(d, e) {
                    "error" == e || "timeout" == e || "parsererror" == e ? c() : (a.Log.info("eID: external scripts loaded"), b())
                })
            })
        }

        function e(b) {
            function c(b) {
                $.each(b, function(d, e) {
                    a.Util.isObject(e) ? c(e) : b[d] = e.replace(new RegExp("\n", "g"), "<br />")
                })
            }
            return new Promise(function(d, e) {
                var f = b.lang ? b.lang : "es";
                $.get(a.videoUIMessagesLocation + f).done(function(b) {
                    var e = b;
                    c(e), i.videoUIMessages = e, a.Log.info("eID: Video UI messages loaded"), d()
                }).fail(function(a) {
                    e(a)
                })
            })
        }

        function f() {
            return new Promise(function(b, c) {
                $.get(a.videoIdTypesLocation).done(function(c) {
                    var d = c;
                    i.idTypes = d, a.Log.info("eID: Id Types messages loaded"), b()
                }).fail(c)
            })
        }

        function g() {
            return new Promise(function(b, c) {
                $.get(a.iceServersLocation).done(function(c) {
                    for (var d = c, e = 0; e < d.length; e++) - 1 != d[e].url.indexOf("stun:") && i.stunServers.push({
                        url: d[e].url,
                        urls: [d[e].url]
                    }), -1 != d[e].url.indexOf("turn:") && i.turnServers.push({
                        url: d[e].url,
                        urls: [d[e].url],
                        username: d[e].username,
                        credential: d[e].password
                    });
                    a.Log.trace("eID: Ice Servers Loaded"), a.Log.trace(i.stunServers), a.Log.trace(i.turnServers), b()
                }).fail(c)
            })
        }

        function h(a, b) {
            var c = CryptoJS.SHA256(a + ":" + b);
            return c.toString(CryptoJS.enc.Hex)
        }
        var i = {
            isInitialized: !1,
            token: "",
            apiVersion: "",
            proxyEndpoint: "",
            eidApi: "",
            scriptsLocation: "",
            videoIdLiveEndpoint: "",
            videoUIMessages: null,
            idTypes: null,
            stunServers: [],
            turnServers: []
        };
        return a.init = function(c) {
            return c = c || {}, a.Validators.validateInitializationParams(c), a.Validators.init(i), b(c)
        }, a.issueCertificate = function(b, c, d) {
            a.Validators.validateEIDInitialization(), a.Validators.validateIssueCertificateParams("EID.issueCertificate", b);
            var e, f, g, i;
            return new Promise(function(j, k) {
                a.RsaUtil.generateKeys(a.keyLength, a.exponent).then(function(c) {
                    return e = c.n, a.ApiRestClient.getCSRHash({
                        hexModulus: e,
                        keyLength: "LENGTH_" + a.keyLength,
                        identityId: b.identityId
                    })
                }).then(function(b) {
                    return a.RsaUtil.signHash(b.csrHash)
                }).then(function(c) {
                    return f = c, g = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex), a.RsaUtil.encryptPK(h(b.pin, g))
                }).then(function(c) {
                    return i = CryptoJS.HmacSHA256(b.identityId, b.pin).toString(), a.ApiRestClient.issueCertificate({
                        hexModulus: e,
                        csrHashSign: f,
                        privateKey: c,
                        keyLength: "LENGTH_" + a.keyLength,
                        identityId: b.identityId,
                        salt: g,
                        hmacKey: i
                    })
                }).then(function(a) {
                    j(a), c && c(a)
                }).then(void 0, function(a) {
                    k(a), d && d(a)
                })
            })
        }, a.sign = function(b, c, d) {
            a.Validators.validateEIDInitialization(), a.Validators.validateSignParams("EID.sign", b);
            var e, f;
            return new Promise(function(g, i) {
                var j = CryptoJS.HmacSHA256(b.identityId, b.pin).toString(),
                    k = CryptoJS.HmacSHA256("documentId=" + b.documentId + "&identityId=" + b.identityId, j).toString();
                a.ApiRestClient.requestAdvancedSign(b.documentId, b.identityId, k).then(function(c) {
                    return f = c.documentHash, e = c.signatureRequest.requestId, a.RsaUtil.decryptPK(c.privateKey, h(b.pin, c.salt))
                }).then(function() {
                    return a.RsaUtil.signHash(f)
                }).then(function(b) {
                    return a.ApiRestClient.advancedSignFile(e, b)
                }).then(function(a) {
                    a.document = a.documents[0].signedDocument, delete a.documents, g(a), c && c(a)
                }).then(void 0, function(a) {
                    i(a), d && d(a)
                })
            })
        }, a.certId = function(b, c, d) {
            function e(a, b) {
                var c = new RegExp(b + "=([^&#]*)"),
                    d = c.exec(a);
                return null === d ? "" : decodeURIComponent(d[1].replace(/\+/g, " "))
            }
            return a.Validators.validateEIDInitialization(), new Promise(function(b, f) {
                var g, h = a.eidApi.substr(0, a.eidApi.indexOf("/", 10)),
                    i = h + "/public/front/hidden-frame#" + encodeURIComponent(document.location.href);
                $.receiveMessage(function(h) {
                    var j = e(h.data, "event");
                    switch (j) {
                        case "load":
                            a.ApiRestClient.requestQualifiedExtractionToken().then(function(a) {
                                $.postMessage({
                                    event: "handleToken",
                                    token: a.token
                                }, i, g.contentWindow)
                            });
                            break;
                        case "person-creation":
                            var k = e(h.data, "result");
                            if ("success" == k) {
                                var l = {
                                    id: e(h.data, "id"),
                                    nif: e(h.data, "nif"),
                                    email: e(h.data, "email"),
                                    firstName: e(h.data, "firstName"),
                                    lastName1: e(h.data, "lastName1"),
                                    lastName2: e(h.data, "lastName2"),
                                    phone: e(h.data, "phone")
                                };
                                b(l), c && c(l)
                            } else f({
                                code: e(h.data, "code"),
                                message: e(h.data, "message")
                            }), d && d({
                                code: e(h.data, "code"),
                                message: e(h.data, "message")
                            });
                            $(g).remove()
                    }
                }, h), g = $('<iframe id="hiddenFrame" src="' + i + '" style="display: none;"></iframe>').appendTo("body").get(0)
            })
        }, a.videoId = function(b, c) {
            return a.Validators.validateEIDInitialization(), new a.VideoID(b, c)
        }, a.videoScan = function(b, c) {
            return a.Validators.validateEIDInitialization(), new a.VideoScan(b, c)
        }, a.videoIdAttended = function(b, c) {
            return a.Validators.validateEIDInitialization(), new a.videoIDAttended(b, c)
        }, a.verify = function(b, c, d) {
            a.Validators.validateEIDInitialization();
            var e, f, g;
            return new Promise(function(i, j) {
                var k = CryptoJS.HmacSHA256(b.verifier.id, b.verifier.pin).toString(),
                    l = CryptoJS.HmacSHA256("videoId=" + b.videoId + "&verifierId=" + b.verifier.id, k).toString();
                a.ApiRestClient.requestVideoVerification(b.videoId, b.verifier.id, b.verification.data, b.verification.validations, l).then(function(c) {
                    return e = c.verificationId, g = c.signatureRequest.documentHash, f = c.signatureRequest.signatureRequest.requestId, a.RsaUtil.decryptPK(c.signatureRequest.privateKey, h(b.verifier.pin, c.signatureRequest.salt))
                }).then(function() {
                    return a.RsaUtil.signHash(g)
                }).then(function(b) {
                    return a.ApiRestClient.verifyVideo(e, b)
                }).then(function(a) {
                    i(a), c && c(a)
                }).then(void 0, function(a) {
                    j(a), d && d(a)
                })
            })
        }, Object.defineProperty(a, "proxyEndpoint", {
            get: function() {
                return i.proxyEndpoint
            }
        }), Object.defineProperty(a, "eidApi", {
            get: function() {
                return i.eidApi
            }
        }), Object.defineProperty(a, "apiVersion", {
            get: function() {
                return i.apiVersion
            }
        }), Object.defineProperty(a, "videoIdLiveEndpoint", {
            get: function() {
                return i.videoIdLiveEndpoint
            }
        }), Object.defineProperty(a, "eidLibUrl", {
            get: function() {
                return i.scriptsLocation + "eid.js"
            }
        }), Object.defineProperty(a, "cryptoLibUrl", {
            get: function() {
                return i.scriptsLocation + "eid.crypto.js"
            }
        }), Object.defineProperty(a, "workerUrl", {
            get: function() {
                return i.scriptsLocation + "eid.rsaWorker.js"
            }
        }), Object.defineProperty(a, "webcamSwfUrl", {
            get: function() {
                return i.scriptsLocation + "webcam.swf"
            }
        }), Object.defineProperty(a, "imagesLocation", {
            get: function() {
                return i.scriptsLocation + "images/"
            }
        }), Object.defineProperty(a, "iceServersLocation", {
            get: function() {
                return i.eidApi + "ice-server"
            }
        }), Object.defineProperty(a, "videoUIMessagesLocation", {
            get: function() {
                return i.eidApi + "videoid.messages/"
            }
        }), Object.defineProperty(a, "videoIdTypesLocation", {
            get: function() {
                return i.eidApi + "videoid.idtypes/"
            }
        }), Object.defineProperty(a, "videoUIMessages", {
            get: function() {
                return i.videoUIMessages
            }
        }), Object.defineProperty(a, "idTypes", {
            get: function() {
                return i.idTypes
            }
        }), Object.defineProperty(a, "stunServers", {
            get: function() {
                return i.stunServers
            }
        }), Object.defineProperty(a, "turnServers", {
            get: function() {
                return i.turnServers
            }
        }), Object.defineProperty(a, "isInitialized", {
            get: function() {
                return i.isInitialized
            }
        }), a
    }(EID || {}),
    EID = function(a) {
        var b = {
                keyLength: 1024,
                exponent: "10001",
                possibleKeyLengths: [512, 1024, 2048, 4096]
            },
            c = {
                Passport: "Passport",
                IdCard: "IdCard",
                DriverLicense: "DriverLicense"
            };
        return Object.defineProperty(a, "keyLength", {
            get: function() {
                return b.keyLength
            },
            set: function(a) {
                if (-1 == b.possibleKeyLengths.indexOf(a)) throw "Invalid Key Length. Accepted values are: " + b.possibleKeyLengths.toString();
                b.keyLength = a
            }
        }), Object.defineProperty(a, "possibleKeyLengths", {
            value: b.possibleKeyLengths
        }), Object.defineProperty(a, "exponent", {
            value: b.exponent
        }), Object.defineProperty(a, "documentType", {
            value: c
        }), a
    }(EID || {});
EID.ApiRestClient = function(a) {
    function b(b) {
        return new Promise(function(c, e) {
            void 0 == b.dataType && (b.dataType = "json"), "POST" == b.type && (b.contentType = "application/json", b.data = JSON.stringify(b.data)), d.token && (b.headers = {
                Authorization: "Bearer " + d.token
            }), b.url = a.proxyEndpoint + b.url, EID.Util.delay(EID.Util.isSafari() ? 1 : 0).then(function() {
                jQuery.ajax(b).done(function(a) {
                    c(a)
                }).fail(function(a) {
                    var b = {
                        code: a.status,
                        error: a.responseJSON
                    };
                    e(b)
                })
            }, e)
        })
    }
    var c = {},
        d = {
            token: ""
        };
    return c.init = function(a) {
        d.token = a.token
    }, c.getCSRHash = function(a) {
        return b({
            data: a,
            type: "POST",
            url: "certificates/request"
        })
    }, c.issueCertificate = function(a) {
        return b({
            data: a,
            type: "POST",
            url: "certificates"
        })
    }, c.requestAdvancedSign = function(a, c, d) {
        return b({
            data: {
                documentsId: [a],
                identityId: c,
                hmac: d
            },
            type: "POST",
            url: "signatures/request/advanced"
        })
    }, c.advancedSignFile = function(a, c) {
        return b({
            data: {
                requestId: a,
                signature: c
            },
            type: "POST",
            url: "signatures/sign/advanced"
        })
    }, c.requestVideoScan = function(a) {
        return b({
            data: {
                securityFeaturesRequired: !!a
            },
            type: "POST",
            url: "videoscan.request"
        })
    }, c.requestUnattendedVideo = function(a) {
        return b({
            data: {
                process: "Unattended",
                securityFeaturesRequired: !!a
            },
            type: "POST",
            url: "videoid.request"
        })
    }, c.requestAttendedVideo = function(a, c) {
        return b({
            data: {
                process: "Attended",
                rauthorityId: a,
                securityFeaturesRequired: !!c
            },
            type: "POST",
            url: "videoid.request"
        })
    }, c.requestQualifiedExtractionToken = function() {
        return b({
            type: "POST",
            url: "jsclient/tokens"
        })
    }, c.requestVideoVerification = function(a, c, d, e, f) {
        return b({
            data: {
                verifierId: c,
                signatureHmac: f,
                data: d,
                validations: e
            },
            type: "POST",
            url: "videos/" + a + "/verification_request"
        })
    }, c.verifyVideo = function(a, c) {
        return b({
            data: {
                signature: c
            },
            type: "POST",
            url: "videos/" + a + "/verify"
        })
    }, c
}(EID), EID.Config = function() {
    function a(a) {
        return -1 == a.indexOf("_VALUE")
    }
    var b = {
        API_ENDPOINT: "https://etrust-live.electronicid.eu/v2",
        JS_ENDPOINT: "https://etrust-live.electronicid.eu/js/v2/",
        ENVIRONMENT: "live",
        VERSION: "2",
        DEFAULT_PROTOCOL: "ADHOC",
        DISABLE_AUDIO: "false"
    };
    return {
        API_ENDPOINT: a(b.API_ENDPOINT) ? b.API_ENDPOINT : "",
        JS_ENDPOINT: a(b.JS_ENDPOINT) ? b.JS_ENDPOINT : "",
        ENVIRONMENT: a(b.ENVIRONMENT) ? b.ENVIRONMENT : "",
        VERSION: a(b.VERSION) ? b.VERSION : "",
        DEFAULT_PROTOCOL: a(b.DEFAULT_PROTOCOL) ? b.DEFAULT_PROTOCOL : "WEBRTC",
        DISABLE_AUDIO: a(b.DISABLE_AUDIO) ? b.DISABLE_AUDIO : ""
    }
}(EID || {}), EID.Log = function() {
    var a = {},
        b = {
            ERROR: 0,
            WARN: 1,
            INFO: 2,
            DEBUG: 3,
            TRACE: 4
        },
        c = "ERROR";
    return a.trace = function(a) {
        b[c] >= b.TRACE && console.debug(a)
    }, a.debug = function(a) {
        b[c] >= b.DEBUG && console.debug(a)
    }, a.info = function(a) {
        b[c] >= b.INFO && console.info(a)
    }, a.warn = function(a) {
        b[c] >= b.WARN && console.warn(a)
    }, a.error = function(a) {
        b[c] >= b.ERROR && console.error(a)
    }, Object.defineProperty(a, "level", {
        get: function() {
            return c
        },
        set: function(a) {
            return c = a
        }
    }), a
}(EID), EID.RsaUtil = function(a) {
    function b() {
        return new Promise(function(b, e) {
            try {
                jQuery.get(a.workerUrl).done(function(a) {
                    var e = new Blob([a], {
                            type: "text/javascript"
                        }),
                        f = URL.createObjectURL(e);
                    l = new Worker(f), l.addEventListener("message", c, !1), l.addEventListener("error", d, !1), b()
                }).fail(function() {
                    e()
                })
            } catch (f) {
                e(f)
            }
        })
    }

    function c(a) {
        var b = a.data.result,
            c = a.data.action;
        if ("success" == b) switch (c) {
            case "init":
                p = !0, m();
                break;
            case "generate":
                m(a.data.rsa);
                break;
            case "sign":
                m(a.data.signatureHex);
                break;
            case "encryptPK":
                m(a.data.privateKey);
                break;
            case "decryptPK":
                m()
        } else "failure" == b && n({
            origin: "rsa",
            error: a.data.action,
            message: a.data.message
        })
    }

    function d() {}

    function e() {
        if (!o.isInitialized) throw "RSA must be initialized before calling any of its methods"
    }

    function f(a) {
        var b, c = new Array(a);
        if (window.crypto && window.crypto.getRandomValues) b = new Uint32Array(a / 2), window.crypto.getRandomValues(b);
        else {
            b = new Array(a / 2);
            for (var d = 0; a / 2 > d; d++) b[d] = isaac.rand()
        }
        for (var d = 0, e = 0; a / 2 > d; d++) c[e++] = b[d] >> 8 & 255, c[e++] = b[d] >> 16 & 255;
        var f = (new Date).getTime();
        return c[0] ^= 255 & f, c[1] ^= f >> 8 & 255, c[2] ^= f >> 16 & 255, c[3] ^= f >> 24 & 255, c
    }

    function g(a, b) {
        try {
            k = new RSAKey, k.generate(a, b), m(flattenRsa(k))
        } catch (c) {
            n({
                origin: "rsa",
                error: "generate",
                message: c.message
            })
        }
    }

    function h(a) {
        try {
            var b = k.signWithMessageHash(a, "sha512");
            m(b)
        } catch (c) {
            n({
                origin: "rsa",
                error: "sign",
                message: c.message
            })
        }
    }

    function i(a) {
        try {
            k.isPrivate = !0;
            var b = KEYUTIL.getPEM(k, "PKCS1PRV"),
                c = CryptoJS.AES.encrypt(b, a);
            m(c.toString())
        } catch (d) {
            n({
                origin: "rsa",
                error: "encryptPK",
                message: d.message
            })
        }
    }

    function j(a, b) {
        try {
            var c = CryptoJS.AES.decrypt(a, b),
                d = c.toString(CryptoJS.enc.Utf8);
            k = KEYUTIL.getKey(d), m()
        } catch (e) {
            n({
                origin: "rsa",
                error: "decryptPK",
                message: e.message
            })
        }
    }
    var k, l, m, n, o = {},
        p = !1;
    return o.initRsa = function() {
        if (p) throw "RSA has already been initialized";
        return new Promise(function(c, d) {
            m = c, n = d;
            var e = f(256);
            a.Util.isWorkerCompatible() ? b().then(function() {
                l.postMessage({
                    action: "init",
                    rng_pool: e,
                    cryptoLibUrl: a.cryptoLibUrl
                })
            }, function() {
                rng_pool = e, p = !0, c()
            }) : (rng_pool = e, p = !0, c())
        })
    }, o.destroy = function() {
        return new Promise(function(a) {
            l && l.postMessage({
                action: "stop"
            }), k = null, l = null, p = !1, rng_pool = null, m = null, n = null, a()
        })
    }, o.generateKeys = function(a, b) {
        return e(), new Promise(function(c, d) {
            m = c, n = d, l ? l.postMessage({
                action: "generate",
                longKeyBits: a,
                exponent: b
            }) : g(a, b)
        })
    }, o.signHash = function(a) {
        return e(), new Promise(function(b, c) {
            m = b, n = c, l ? l.postMessage({
                action: "sign",
                hash: a
            }) : h(a)
        })
    }, o.encryptPK = function(a) {
        return e(), new Promise(function(b, c) {
            m = b, n = c, l ? l.postMessage({
                action: "encryptPK",
                pin: a
            }) : i(a)
        })
    }, o.decryptPK = function(a, b) {
        return e(), new Promise(function(c, d) {
            m = c, n = d, l ? l.postMessage({
                action: "decryptPK",
                privateKey: a,
                pin: b
            }) : j(a, b)
        })
    }, Object.defineProperty(o, "modulus", {
        get: function() {
            return k ? k.n.toString(16) : null
        }
    }), Object.defineProperty(o, "isInitialized", {
        get: function() {
            return p
        }
    }), o
}(EID), EID.Util = function(a, b) {
    function c(a) {
        return {}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
    }

    function d(a) {
        return void 0 != a && "string" == c(a)
    }

    function e(a) {
        return void 0 != a && "object" == c(a)
    }

    function f(a) {
        return void 0 != a && "function" == c(a)
    }

    function g() {
        return "undefined" != typeof Worker
    }

    function h() {
        return DetectRTC.browser.isSafari
    }

    function i() {
        var a = !1;
        return function(b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(navigator.userAgent || navigator.vendor || b.opera), a
    }

    function j() {
        return "ontouchstart" in b || navigator.maxTouchPoints
    }

    function k() {
        return b.location.origin ? b.location.origin : b.location.protocol + "//" + b.location.hostname + (b.location.port ? ":" + b.location.port : "")
    }

    function l() {
        if (EID.Config.JS_ENDPOINT) return EID.Config.JS_ENDPOINT;
        var a = $("script[src*='eid.js']").attr("src");
        return a.substring(0, a.lastIndexOf("/") + 1)
    }

    function m() {
        return a.eidApi.substring(a.eidApi.lastIndexOf("/", a.eidApi.length - 2) + 1, a.eidApi.length - 1)
    }

    function n() {
        function a() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return (a() + a() + "-" + a() + "-4" + a().substr(0, 3) + "-" + a() + "-" + a() + a() + a()).toLowerCase()
    }

    function o(b) {
        for (var c = 0; c < a.idTypes.length; c++)
            if (a.idTypes[c].id == b) return a.idTypes[c];
        return null
    }

    function p(a, b) {
        function c(a, b) {
            for (var c, d = []; a.length && d.length < b;) c = Math.floor(3 * Math.random()), d.push(a.splice(c, 1)[0]);
            return d
        }
        var d = [];
        return d = d.concat(c(EID.stunServers.slice(), a)), d = d.concat(c(EID.turnServers.slice(), b))
    }

    function q() {
        return null != t.any() ? null != t.Android() ? "Android" : null != t.BlackBerry() ? "BlackBerry" : null != t.iOS() ? "iOS" : null != t.Opera() ? "Opera" : null != t.Windows() ? "Windows" : "Mobile" : "Desktop"
    }

    function r() {
        return DetectRTC.audioInputDevices.length > 0
    }

    function s(a) {
        return new Promise(function(b) {
            setTimeout(b, 1e3 * a)
        })
    }
    var t = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        }
    };
    return {
        typeOf: c,
        isString: d,
        isObject: e,
        isFunction: f,
        isWorkerCompatible: g,
        isSafari: h,
        isMobileDevice: i,
        isTouchDevice: j,
        getLocation: k,
        getScriptsLocation: l,
        getApiVersion: m,
        generateUUID: n,
        getIdType: o,
        getIceServers: p,
        getDeviceType: q,
        hasAudioInputDevices: r,
        delay: s
    }
}(EID, window), EID.Validators = function(a) {
    function b(a, b, c, d) {
        if (!d) {
            if (!c) throw a + ": " + b + " invalid. Must be present.";
            if (!EID.Util.isObject(c)) throw a + ": " + b + " invalid. Must be an object."
        }
    }

    function c(a, b, c, d) {
        if (!d) {
            if (!c) throw a + ": " + b + " invalid. Must be present.";
            if (!EID.Util.isFunction(c)) throw a + ": " + b + " invalid. Must be a function."
        }
    }

    function d(a, b, c, d) {
        if (!d) {
            if (!c) throw a + ": " + b + " invalid. Must be present.";
            if ("string" != EID.Util.typeOf(c) || !c.length) throw a + ": " + b + " invalid. Must be a string."
        }
    }
    var e = {},
        f = {};
    return e.init = function(a) {
        f = a
    }, e.validateEIDInitialization = function() {
        if (!f.isInitialized) throw "EID must be initialized before calling any of its methods"
    }, e.validateInitializationParams = function(b) {
        if ("undefined" != typeof b) {
            if (!EID.Util.isObject(b)) throw "EID.init must be called with a valid collection of initialization parameters";
            if (d("EID initialization", "proxyEndpoint", b.proxyEndpoint), void 0 != b.keyLength && -1 == a.possibleKeyLengths.indexOf(b.keyLength)) throw "Invalid Key Length. Accepted values are: " + a.possibleKeyLengths.toString()
        }
    }, e.validateGeneralMethodParams = function(a, d) {
        b(a, "params", d), c(a, "successCallback", d.successCallback, !0), c(a, "failureCallback", d.failureCallback, !0)
    }, e.validateIssueCertificateParams = function(a, b) {
        e.validateGeneralMethodParams(a, b), d(a, "pin", b.pin), d(a, "identityId", b.identityId)
    }, e.validateSignParams = function(a, b) {
        e.validateGeneralMethodParams(a, b), d(a, "pin", b.pin), d(a, "identityId", b.identityId), d(a, "documentId", b.documentId)
    }, e
}(EID), EID.AdhocStreamer = function(a) {
    var b = 7,
        c = a.Util.isMobileDevice() ? 80 : 90,
        d = a.Util.isMobileDevice() ? 60 : 95,
        e = a.Util.isMobileDevice() ? 40 : 85;
    return function(f, g, h) {
        function i() {
            return new Promise(function(a) {
                k();
                var b = l.framesToSend,
                    c = setInterval(function() {
                        if (99 > o) {
                            var d = b ? (b - l.framesToSend) / b : 1;
                            o = Math.round(99 * d), k()
                        } else clearInterval(c), u.opInterval = null, a()
                    }, 100);
                u.opInterval = c
            })
        }

        function j() {
            return new Promise(function(a, b) {
                l.commit(n).then(function(b) {
                    a(b)
                }, b)
            })
        }

        function k(a) {
            a && (o += a), h.status.show(h.messages.saving + " - " + o + "%")
        }
        var l = EID.ApiVideoIdClient,
            m = this,
            n = 0,
            o = 0,
            p = null,
            q = !1,
            r = null,
            s = null,
            t = e,
            u = null,
            v = {
                commit: {
                    resolve: null,
                    reject: null,
                    opInterval: null
                }
            },
            w = null;
        g.maxAllowedWidth = 1 / 0, m.turnOn = function(a) {
            return g.turnOn(a, !1)
        }, m.turnOff = function() {
            return g.turnOff()
        }, m.changeCamera = function(a) {
            return new Promise(function(b, c) {
                g.canSwitchToCamera(a) ? (x(), g.switchToCamera(a).then(function() {
                    y(), b(a)
                }, c)) : b(g.currentCamera)
            })
        }, m.start = function() {
            return new Promise(function(c) {
                a.Log.debug("Starting Adhoc Streamer"), u = null, v = {
                    commit: {
                        resolve: null,
                        reject: null,
                        opInterval: null
                    }
                }, n = o = 0, r = s = null, t = e, w = null, p = setInterval(z, 1e3 / b), c()
            })
        }, m.stop = function() {
            return new Promise(function(a, b) {
                if (u = v.commit, u.resolve = a, u.reject = b, r) b(r);
                else {
                    clearInterval(p), z(!0);
                    var c = j();
                    w.then(i).then(function() {
                        return c
                    }).then(a, b)
                }
            })
        }, m.interrupt = function(a) {
            return new Promise(function(b) {
                clearInterval(p), u && (u.reject(error), clearInterval(u.opInterval)), l.stop(), a && g.turnOff(), b()
            })
        }, m.sendScanFrame = function() {
            q = !0
        };
        var x = function() {
                clearInterval(p)
            },
            y = function() {
                p = setInterval(z, 1e3 / b)
            },
            z = function(b) {
                function f() {
                    var a = 2,
                        b = 5;
                    t = l.framesToSend <= 7 ? t + a > d ? d : t + a : e > t - b ? e : t - b
                }
                r || (w = new Promise(function(d, e) {
                    f();
                    var h = {
                        quality: t
                    };
                    q && (h.takeHighQualityFrame = !0, h.highQuality = c), g.snap(h).then(function(a) {
                        n++, l.append({
                            image: a,
                            index: n,
                            lastFrame: b,
                            scanningFrame: q
                        }), q = !1, d()
                    }).then(void 0, function(b) {
                        a.Log.debug("frame snap ERROR: " + n), r = b, clearInterval(p), l.disconnect(), e()
                    })
                }))
            };
        Object.defineProperty(m, "protocol", {
            get: function() {
                return "Adhoc"
            }
        }), Object.defineProperty(m, "previewSize", {
            get: function() {
                return g.previewSize
            }
        }), Object.defineProperty(m, "snapSize", {
            get: function() {
                return g.snapSize
            }
        }), Object.defineProperty(m, "resolution", {
            get: function() {
                return g.resolution
            }
        })
    }
}(EID, EID.ApiVideoIdClient), EID.ApiVideoIdClient = function(a, b) {
    function c(c) {
        K = b.client(ka), K.heartbeat.outgoing = 2e3, K.heartbeat.incoming = 2e3, "TRACE" != a.Log.level && (K.debug = !1), K.connect({
            videoId: la,
            userType: "USER",
            videoType: I
        }, function() {
            d(c)
        }, e, f)
    }

    function d(a) {
        setTimeout(function() {
            fa && ra.triggerHandler({
                type: U.reconnected
            }), da = !0, ea = !1, ia = !0, fa = !1, clearTimeout(ja), ja = null
        }, 500), K.subscribe(S.event, function(a) {
            var b = JSON.parse(a.body),
                c = pa[b.type];
            c ? c(b) : pa["default"](b)
        }), a && a()
    }

    function e(b) {
        1001 == b.code && (ea = !0), ea || (a.Log.debug("Connection lost"), da = !1, fa || (fa = !0), ia && (a.Log.debug("Reattempting connections in " + ga + " seconds"), ra.triggerHandler({
            type: U.reconnecting
        }), setTimeout(c, 1e3 * ga), ja || (ja = setTimeout(function() {
            da || (ia = !1, ra.triggerHandler(U.failed, [V.connectionLost]))
        }, 1e3 * ha))))
    }

    function f() {
        O || !P ? (da = !1, ia = !1, O || ra.triggerHandler(U.failed, [V.connectionLost])) : null != M && (M({
            id: la
        }), M = null, ra.triggerHandler({
            type: U.finished,
            video: {
                id: la
            }
        }))
    }

    function g(a) {
        L(a.data)
    }

    function h() {
        P = !0, C(), M && (M({
            id: la
        }), M = null), ra.triggerHandler({
            type: U.finished,
            video: {
                id: la
            }
        })
    }

    function i(a) {
        O = !0, ra.triggerHandler(U.failed, [a.data])
    }

    function j(a) {
        ra.triggerHandler(U.rtc.iceCandidateReceived, [a.data])
    }

    function k(a) {
        ra.triggerHandler(U.rtc.rtcConnectionEstablished, [a.data])
    }

    function l(a) {
        ra.triggerHandler(U.rtc.sdpAnswer, [a.data])
    }

    function m() {
        ra.triggerHandler({
            type: U.scanFrameRequested
        })
    }

    function n() {
        ra.triggerHandler(U.startScanning, [qa.face]), X = !0
    }

    function o() {
        ra.triggerHandler({
            type: U.faceScanned
        }), X = !1
    }

    function p() {
        ra.triggerHandler(U.startScanning, ["TD3" == H ? qa.passport : qa.idCardFront]), X = !0
    }

    function q() {
        ra.triggerHandler({
            type: U.idCard.frontScanned
        }), X = !1
    }

    function r() {
        ra.triggerHandler(U.startScanning, [qa.idCardBack]), X = !0
    }

    function s() {
        ra.triggerHandler({
            type: U.idCard.backScanned
        }), X = !1
    }

    function t() {
        ra.triggerHandler({
            type: U.passport.scanned
        }), X = !1
    }

    function u(a) {
        Z++;
        var b = a.data;
        ra.triggerHandler(b.succeeded ? {
            type: U.document.detected,
            imageSize: b.imageSize,
            detectedCoords: b.coordinates,
            fitness: b.fitness
        } : {
            type: U.document.notDetected
        })
    }

    function v(a) {
        Z++;
        var b = a.data;
        ra.triggerHandler(b.succeeded ? {
            type: U.faceDetected,
            imageSize: b.imageSize,
            detectedCoords: b.coordinates,
            fitness: b.fitness
        } : {
            type: U.faceNotDetected
        })
    }

    function w(a) {
        (X || "MinFpsExceeded" == a.type || "ConnectionLost" == a.type) && ra.triggerHandler({
            type: U.notification,
            notification: a
        })
    }

    function x() {}

    function y(a, b) {
        return {
            errorId: EID.Util.generateUUID(),
            date: (new Date).getTime(),
            error: a,
            message: b
        }
    }

    function z(a) {
        J.send(a, {}), X = !0
    }

    function A() {
        removeCookie(oa)
    }

    function B() {
        W = setInterval(D, 50)
    }

    function C() {
        W && (clearInterval(W), W = null)
    }

    function D() {
        if (da && F() && !K.ws.bufferedAmount) {
            var b;
            _ ? (b = _, _ = null) : E() ? (b = ca.pop(), b.detectionFrame = !0, Y++, aa = Date.now()) : b = ca.shift(), J.sendFrame(b), a.Log.trace("Frame sent, " + J.framesToSend + " to send. FrameId: " + b.index + " - " + R.stream)
        }
    }

    function E() {
        return X && Date.now() - aa > ba
    }

    function F() {
        return ca.length || _
    }
    var G, H, I, J = {},
        K = null,
        L = null,
        M = null,
        N = null,
        O = !1,
        P = !1,
        Q = {
            token: ""
        },
        R = {
            stream: "/videoId.frame",
            rtc: {
                sdpOffer: "/conference.connectUser",
                iceCandidate: "/conference.addIceCandidate"
            },
            VideoID: {
                start: "/videoId.startScanning",
                stop: "/videoId.stopScanning",
                scanFront: "/videoId.scanFront",
                scanBack: "/videoId.scanBack",
                scanFace: "/videoId.scanFace"
            },
            VideoScan: {
                start: "/videoScan.startScanning",
                stop: "/videoScan.stopScanning",
                scanFront: "/videoScan.scanFront",
                scanBack: "/videoScan.scanBack",
                scanFace: "/videoScan.scanFace"
            }
        },
        S = {
            event: "/user/videoId.event"
        },
        T = {
            VideoID: "VideoID",
            VideoScan: "VideoScan"
        },
        U = {
            faceDetected: "faceDetected.videoId",
            faceNotDetected: "faceNotDetected.videoId",
            faceScanned: "faceScanned.videoId",
            document: {
                detected: "tdDetected.videoId",
                notDetected: "tdNotDetected.videoId"
            },
            idCard: {
                frontScanned: "idCardFrontScanned.videoId",
                backScanned: "idCardBackScanned.videoId"
            },
            passport: {
                scanned: "passportScanned.videoId"
            },
            rtc: {
                iceCandidateSent: "iceCandidateSent.videoId",
                iceCandidateReceived: "iceCandidateReceived.videoId",
                candidateGatheringDone: "candidateGatheringDone.videoId",
                rtcConnectionEstablished: "rtcConnectionEstablished.videoId",
                sdpAnswer: "sdpAnswer.videoId"
            },
            startScanning: "startScanning.videoId",
            scanFrameRequested: "scanFrameRequested.videoId",
            notification: "notification.videoId",
            finished: "finished.videoId",
            failed: "failed.videoId",
            reconnecting: "reconnecting.videoId",
            reconnected: "reconnected.videoId"
        },
        V = {
            generic: y("VideoID.Error", "An error has occurred"),
            connectingError: y("VideoID.ConnectingError", "Error establishing connection"),
            connectionLost: y("ConnectionLost", "Connection Lost"),
            notSupported: y("VideoID.NotSupported", "Video ID not supported"),
            noCamera: y("Camera.NotFound", "Camera not found"),
            noMicrophone: y("Microphone.NotFound", "Microphone not found"),
            microphonePermissionDenied: y("Microphone.PermissionDenied", "Microphone permission denied"),
            cameraPermissionDenied: y("Camera.PermissionDenied", "Camera permission denied"),
            cameraResolutionTooLow: y("CameraResolution.TooLow", "Camera resolution too low"),
            cameraUnavailable: y("Camera.Unavailable", "Camera unavailable")
        },
        W = null,
        X = !1,
        Y = 0,
        Z = 0,
        _ = null,
        aa = 0,
        ba = 300,
        ca = [],
        da = !1,
        ea = !1,
        fa = !1,
        ga = 1.5,
        ha = 30,
        ia = !0,
        ja = null,
        ka = "",
        la = "",
        ma = "",
        na = "videoid",
        oa = "mesosphere_server_id",
        pa = {
            "default": w,
            VideoIDStarted: g,
            VideoScanStarted: g,
            VideoIDCompleted: h,
            VideoScanCompleted: h,
            VideoIDFailed: i,
            VideoScanFailed: i,
            IceCandidateFound: j,
            RTCConnectionEstablished: k,
            SdpAnswerGenerated: l,
            ScanFrameRequested: m,
            FaceScanningStarted: n,
            FrontScanningStarted: p,
            BackScanningStarted: r,
            FaceScanned: o,
            TD1FrontScanned: q,
            TD1BackScanned: s,
            TD2FrontScanned: q,
            TD2BackScanned: s,
            TD3FrontScanned: t,
            LicenseFrontScanned: q,
            LicenseBackScanned: s,
            EULicenseFrontScanned: q,
            EULicenseBackScanned: s,
            RectDetectionAttempted: u,
            FaceDetectionAttempted: v,
            FaceStartScanning: x,
            TD1FrontStartScanning: x,
            TD1BackStartScanning: x,
            TD2FrontStartScanning: x,
            TD2BackStartScanning: x,
            TD3FrontStartScanning: x,
            LicenseFrontStartScanning: x,
            LicenseBackStartScanning: x,
            EULicenseFrontStartScanning: x,
            EULicenseBackStartScanning: x
        },
        qa = {
            face: "FACE",
            idCardFront: "FRONT",
            idCardBack: "BACK",
            passport: "PASSPORT"
        },
        ra = $(window);
    return J.init = function(b) {
        Q.token = b.token, ma = readCookie(na), ma || (ma = a.Util.generateUUID(), createCookie(na, ma, 1e4))
    }, J.connectVideo = function(b, d) {
        return new Promise(function(e, f) {
            N = f, I = b;
            var g = I == T.VideoScan ? a.ApiRestClient.requestVideoScan(d) : a.ApiRestClient.requestUnattendedVideo(d);
            g.then(function(b) {
                la = b.id, ka = (a.videoIdLiveEndpoint + "?videoId=" + la).replace("https", "wss").replace("http", "ws"), c(e)
            })["catch"](function(b) {
                N("string" == a.Util.typeOf(b) ? b : b.error && a.Util.isObject(b.error) && b.error.errorId ? b.error : b.code >= 400 && b.code < 500 ? "Error establishing connection. Have you correctly set up the proxy connection to eID services?" : b)
            })
        })
    }, J.connectVideoAttended = function(b, d) {
        return new Promise(function(e, f) {
            N = f, I = T.VideoID, a.ApiRestClient.requestAttendedVideo(b, d).then(function(b) {
                la = b.id, ka = (a.videoIdLiveEndpoint + "?videoId=" + la).replace("https", "wss").replace("http", "ws"), c(function() {
                    e(la)
                })
            })["catch"](function(b) {
                N("string" == a.Util.typeOf(b) ? b : b.error && a.Util.isObject(b.error) && b.error.errorId ? b.error : b.code >= 400 && b.code < 500 ? "Error establishing connection. Have you correctly set up the proxy connection to eID services?" : b)
            })
        })
    }, J.start = function(a, b) {
        return new Promise(function(c, d) {
            N = d, L = c, _ = null, Y = Z = aa = 0, ca = [], B(), G = b, H = G.icao;
            var e = R[I].start;
            K.send(e, {}, JSON.stringify(a))
        })
    }, J.append = function(a) {
        a.scanningFrame ? _ = a : ca.push(a)
    }, J.send = function(a, b, c) {
        K.send(a, c ? c : {}, JSON.stringify(b))
    }, J.sendFrame = function(a) {
        K.send(R.stream, {}, JSON.stringify(a))
    }, J.commit = function() {
        return new Promise(function(a, b) {
            N = b, M = a
        })
    }, J.abort = function() {
        return J.disconnect(1001)
    }, J.disconnect = function(a) {
        return new Promise(function(b, c) {
            N = c, ea = !0, C(), A(), K ? K.disconnect(function() {
                da = !1, b()
            }, {}, a) : b()
        })
    }, J.stop = function() {
        return new Promise(function(a, b) {
            N = b, C(), A()
        })
    }, J.sendSdpOffer = function(a, b) {
        J.send(R.rtc.sdpOffer, {
            sdpOffer: a,
            profile: b
        })
    }, J.sendIceCandidate = function(a) {
        J.send(R.rtc.iceCandidate, {
            candidate: a
        }), ra.triggerHandler(U.rtc.iceCandidateSent, [a])
    }, J.startFrontScanning = function() {
        z(R[I].scanFront)
    }, J.startBackScanning = function() {
        z(R[I].scanBack)
    }, J.startFaceScanning = function() {
        z(R[I].scanFace)
    }, J.failedVideo = function(a, b) {
        var c = EID.Util.isObject(a) ? a : y(a, b);
        return ra.triggerHandler(U.failed, [c]), c
    }, Object.defineProperty(J, "videoType", {
        get: function() {
            return T
        }
    }), Object.defineProperty(J, "phases", {
        get: function() {
            return qa
        }
    }), Object.defineProperty(J, "events", {
        get: function() {
            return U
        }
    }), Object.defineProperty(J, "errors", {
        get: function() {
            return V
        }
    }), Object.defineProperty(J, "framesToSend", {
        get: function() {
            return ca.length + (_ ? 1 : 0)
        }
    }), J
}(EID, Stomp), EID.AttendedRecorder = function(a, b) {
    var c = 90,
        d = "front",
        e = $(window),
        f = "200px",
        g = 7;
    return function(h, i) {
        function j() {
            function a() {
                var a = m[0];
                a.addEventListener("resize", function b() {
                    i.notification.clear(), m.show(), a.removeEventListener("resize", b)
                })
            }
            return new Promise(function(b) {
                n && n.remove(), n = $('<div id="eid-agent-video-container"> </div>').css({
                    position: "absolute",
                    right: "50%",
                    top: "50%",
                    transform: "translateX(50%) translateY(-50%)"
                }), n.width(t.previewSize.width), n.height(t.previewSize.height), m = $('<video id="eid-agent-video" autoplay></video>').css({
                    transform: "scale(-1, 1)",
                    display: "block",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    "max-width": f
                }), m.hide(), a(), t.cameraRatio > 1 ? x.width = t.previewSize.width / 4 : x.height = t.previewSize.height / 4, m.width(x.width), m.height(x.height), r.append(n), n.append(m), b()
            })
        }

        function k() {
            l().then(function(a) {
                b.sendFrame({
                    image: a,
                    scanningFrame: !0
                })
            })
        }

        function l() {
            return new Promise(function(a) {
                t.snap({
                    takeHighQualityFrame: !0,
                    highQuality: c
                }).then(a)
            })
        } {
            var m, n, o, p, q = this,
                r = $(h),
                s = new EID.Notifier(i),
                t = new a.Webcam(h, i),
                u = new EID.RCTStreamer(h, t, i),
                v = "",
                w = "videoid",
                x = {
                    width: "auto",
                    height: "auto"
                },
                y = {
                    width: "auto",
                    height: "auto"
                };
            ! function() {
                v = readCookie(w), v || (v = a.Util.generateUUID(), createCookie(w, v, 1e4))
            }()
        }
        q.turnOn = function() {
            return u.turnOn(d, !0)
        }, q.turnOff = function() {
            return u.turnOff()
        }, q.start = function(c, d) {
            function e() {
                return new Promise(function(a, b) {
                    t.isLive ? a() : u.turnOn().then(a, b)
                })
            }

            function f() {
                return new Promise(function(a, e) {
                    var f;
                    t.adjustScanSizeToIdType(d).then(function() {
                        return $.extend(c, {
                            protocol: u.protocol,
                            width: u.snapSize.width,
                            height: u.snapSize.height,
                            fps: g,
                            userEnvironment: {
                                client: "eid.js",
                                version: "2.2.2",
                                platform: navigator.userAgent,
                                device: {
                                    id: v,
                                    type: EID.Util.getDeviceType()
                                },
                                webcam: {
                                    front: {
                                        width: u.resolution.width,
                                        height: u.resolution.height
                                    },
                                    back: {
                                        width: u.resolution.width,
                                        height: u.resolution.height
                                    }
                                }
                            }
                        }), b.start(c, d)
                    }).then(function(a) {
                        return f = a, j()
                    }).then(function() {
                        return u.start(m[0])
                    }).then(function() {
                        a(f)
                    }, e)
                })
            }

            function h() {
                return new Promise(function(b) {
                    i.activeUI.startingTimer ? i.startingTimer.start(i.config.startingTimer.time).then(b) : a.Util.delay(1).then(b)
                })
            }
            return new Promise(function(d, g) {
                var j;
                e().then(function() {
                    i.clear(), i.show(), s.attachNotificationListeners(), z(), j = h()
                }).then(function() {
                    return b.connectVideoAttended(c.rauthorityId, c.securityFeaturesRequired)
                }).then(function(a) {
                    return o = a, f()
                }).then(function(a) {
                    return i.status.clear(), p = i.scale(u.snapSize, a.roi, !1), i.updateIdFrame(p), j
                }).then(function() {
                    i.notification.show(i.messages.waiting), b.commit().then(d)
                }, function(b) {
                    a.Log.error(b), g(b), i.startingTimer.clear(), q.interrupt(!0, !0), i.status.showError(i.messages.errors[b.error] ? i.messages.errors[b.error] : i.messages.errors["VideoID.ConnectingError"])
                })
            })
        }, q.interrupt = function(a, c) {
            return new Promise(function(d) {
                u.interrupt(a).then(function() {
                    c && b.disconnect(), d()
                })
            })
        }, q.changeCamera = function(a) {
            return u.changeCamera(a)
        };
        var z = function() {
            e.on(b.events.reconnecting, function() {
                i.clear(), s.showNotification(i.messages.notifications.ConnectionLost, 30)
            }), e.on(b.events.reconnected, function() {
                i.clear()
            }), e.on(b.events.scanFrameRequested, function() {
                k()
            }), e.on(b.events.startScanning, function() {
                m.height() > t.previewSize.height - p.p3.y ? y.height = t.previewSize.height - p.p3.y : y = x, m.width(y.width), m.height(y.height)
            }), e.on(b.events.faceScanned + " " + b.events.idCard.frontScanned + " " + b.events.idCard.backScanned + " " + b.events.passport.scanned, function() {
                m.width(x.width), m.height(x.height)
            })
        };
        Object.defineProperty(q, "resolution", {
            get: function() {
                return t.resolution
            }
        })
    }
}(EID, EID.ApiVideoIdClient), EID.Notifier = function(a) {
    return function(b) {
        var c = this,
            d = $(window);
        c.attachNotificationListeners = function() {
            d.on(a.events.notification, function(a) {
                var d = a.notification;
                c.showNotification(b.messages.notifications[d.type], 3)
            })
        }, c.detachNotificationListeners = function() {
            d.off(a.events.notification)
        }, c.showNotification = function(a, c) {
            b.notification.warn(a, c)
        }
    }
}(EID.ApiVideoIdClient), EID.RCTStreamer = function(a, b) {
    var c = 90,
        d = 4e3,
        e = 15e3,
        f = 200,
        g = /[0-9a-f]{4}:[0-9a-f]{4}/i,
        h = $(window);
    return function(i, j, k) {
        function l() {
            return new Promise(function(c, d) {
                function e() {
                    function b() {
                        k = setTimeout(function() {
                            a.Log.trace("Candidate exchanged in last interval: " + (v ? "true" : "false")), v ? (v = !1, b()) : (i(), g())
                        }, f)
                    }
                    k || (j(), a.Log.trace("Starting checking Candidate Exchange"), b())
                }

                function g() {
                    k && (a.Log.trace("Stopping checking Candidate Exchange"), clearInterval(k), k = void 0)
                }

                function i() {
                    l || (a.Log.trace("No candidate exchanged in a while. Scheduling a connection timeout..."),
                        l = setTimeout(function() {
                            p || v || d(b.errors.connectingError), l = null
                        }, y))
                }

                function j() {
                    l && (clearTimeout(l), l = null)
                }
                a.Log.debug("Starting negotiation");
                var k, l, p = !1;
                w = !1, x = [], h.off(b.events.rtc.iceCandidateReceived), h.on(b.events.rtc.iceCandidateReceived, function(b, c) {
                    a.Log.debug(c), t.addIceCandidate(c, function(b) {
                        return b ? a.Log.debug("Error adding candidate: " + b) : void 0
                    }), v = !0, k || e()
                }), h.off(b.events.rtc.iceCandidateSent), h.on(b.events.rtc.iceCandidateSent, function() {
                    v = !0, k || e()
                }), h.off(b.events.rtc.rtcConnectionEstablished), h.on(b.events.rtc.rtcConnectionEstablished, function() {
                    a.Log.debug("RTC Connection Established"), p = !0, j(), g(), c()
                }), m().then(function(a) {
                    return t = a, n()
                }).then(function(a) {
                    return o(a)
                }).then(function() {
                    w = !0, q()
                }, d)
            })
        }

        function m() {
            return new Promise(function(b, c) {
                t && t.dispose();
                var d = a.Util.getIceServers(1, 1);
                a.Log.trace("Using Ice Servers: "), a.Log.trace(d);
                var e = {
                    videoStream: j.stream,
                    onicecandidate: p,
                    configuration: {
                        iceServers: d
                    }
                };
                s && (e.remoteVideo = s);
                var f = s ? kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv : kurentoUtils.WebRtcPeer.WebRtcPeerSendonly;
                f(e, function(a) {
                    a ? c(a) : b(this)
                })
            })
        }

        function n() {
            return new Promise(function(b, c) {
                a.Log.debug("Generating SDPOffer"), t.generateOffer(function(d, e) {
                    d ? c(d) : (a.Log.debug(e), b(e))
                })
            })
        }

        function o(c) {
            return new Promise(function(d, e) {
                h.one(b.events.rtc.sdpAnswer, function(b, c) {
                    a.Log.debug(c), t.processAnswer(c, function(b) {
                        b ? (a.Log.debug(b), e(b)) : d()
                    })
                }), b.sendSdpOffer(c, j.hasAudio ? "VIDEO" : "VIDEO_ONLY")
            })
        }

        function p(c) {
            return g.test(c.candidate) ? void a.Log.trace("Discarding IPV6 candidate") : void(w ? (a.Log.debug(c), b.sendIceCandidate(c)) : (a.Log.debug("Queueing candidate"), x.push(c)))
        }

        function q() {
            a.Log.debug("Sending queued candidates: " + x.length), x.forEach(function(c) {
                a.Log.debug(c), b.sendIceCandidate(c)
            })
        }

        function r() {
            return new Promise(function(a) {
                j.snap({
                    takeHighQualityFrame: !0,
                    highQuality: c
                }).then(a)
            })
        }
        var s, t, u = this,
            v = !0,
            w = !1,
            x = [],
            y = k ? e : d;
        j.maxAllowedWidth = 640, u.turnOn = function(a, b) {
            return j.turnOn(a, b)
        }, u.turnOff = function() {
            return new Promise(function(a) {
                t && (t.dispose(), t = null), j.turnOff().then(a)
            })
        }, u.changeCamera = function(a) {
            return new Promise(function(b, c) {
                j.canSwitchToCamera(a) ? j.switchToCamera(a).then(function() {
                    return l()
                }).then(function() {
                    b(a)
                }, c) : b(j.currentCamera)
            })
        }, u.start = function(b) {
            return a.Log.debug("Starting RTC Streamer"), s = b, l()
        }, u.stop = function() {
            return b.sendFrame({
                lastFrame: !0
            }), b.commit()
        }, u.interrupt = function() {
            return u.turnOff()
        }, u.sendScanFrame = function() {
            r().then(function(a) {
                b.sendFrame({
                    image: a,
                    scanningFrame: !0
                })
            })
        }, u.destroy = function() {
            h.off(b.events.rtc.iceCandidateSent), h.off(b.events.rtc.iceCandidateReceived), h.off(b.events.rtc.rtcConnectionEstablished), h.off(b.events.rtc.sdpAnswer), t && (t.dispose(), t = null)
        }, Object.defineProperty(u, "protocol", {
            get: function() {
                return "WebRTC"
            }
        }), Object.defineProperty(u, "previewSize", {
            get: function() {
                return j.previewSize
            }
        }), Object.defineProperty(u, "snapSize", {
            get: function() {
                return j.resolution
            }
        }), Object.defineProperty(u, "resolution", {
            get: function() {
                return j.resolution
            }
        })
    }
}(EID, EID.ApiVideoIdClient), EID.Recorder = function(a, b) {
    var c = 7,
        d = $(window);
    return function(e, f, g) {
        function h() {
            return new EID.AdhocStreamer(e, o, f)
        }

        function i() {
            return new EID.RCTStreamer(e, o, f)
        } {
            var j = this,
                k = null,
                l = "",
                m = "videoid",
                n = new EID.Notifier(f),
                o = new a.Webcam(e, f),
                p = !DetectRTC.isWebRTCSupported || g.forceAdhoc || "ADHOC" == EID.Config.DEFAULT_PROTOCOL ? h() : i();
            ! function() {
                l = readCookie(m), l || (l = a.Util.generateUUID(), createCookie(m, l, 1e4))
            }()
        }
        j.turnOn = function(a) {
            return f.clear(), p.turnOn(a)
        }, j.turnOff = function() {
            return p.turnOff()
        }, j.changeCamera = function(a) {
            return p.changeCamera(a)
        }, j.start = function(d, e, g) {
            function i() {
                return new Promise(function(a, b) {
                    o.isLive ? a() : p.turnOn().then(a, b)
                })
            }

            function k() {
                return new Promise(function(a, f) {
                    o.adjustScanSizeToIdType(e).then(function() {
                        return s || (s = m()), $.extend(d, {
                            protocol: p.protocol,
                            width: p.snapSize.width,
                            height: p.snapSize.height,
                            fps: c,
                            userEnvironment: {
                                client: "eid.js",
                                version: "2.2.2",
                                platform: navigator.userAgent,
                                device: {
                                    id: l,
                                    type: EID.Util.getDeviceType()
                                },
                                webcam: {
                                    front: {
                                        width: p.resolution.width,
                                        height: p.resolution.height
                                    },
                                    back: {
                                        width: p.resolution.width,
                                        height: p.resolution.height
                                    }
                                }
                            }
                        }), b.start(d, e)
                    }).then(function(a) {
                        return t = a, r()
                    }).then(function() {
                        a(t)
                    }, f)
                })
            }

            function m() {
                return new Promise(function(b) {
                    f.activeUI.startingTimer ? f.startingTimer.start(f.config.startingTimer.time).then(b) : a.Util.delay(1).then(b)
                })
            }

            function r() {
                return new Promise(function(a, b) {
                    p.start().then(function(b) {
                        a(b)
                    }, function(c) {
                        "WebRTC" == p.protocol ? (p.destroy(), p = h(), k().then(a, b)) : b(c)
                    })
                })
            }
            var s, t;
            return "WebRTC" == p.protocol && "DriverLicense" == e.type && (p.destroy(), p = h()), new Promise(function(c, e) {
                i().then(function() {
                    return f.clear(), f.show(), n.attachNotificationListeners(), q(), b.connectVideo(g, d.securityFeaturesRequired)
                }).then(function() {
                    return k()
                }).then(function(a) {
                    return f.status.clear(), f.updateIdFrame(f.scale(p.snapSize, a.roi, !1)), s
                }).then(c, function(b) {
                    a.Log.error(b), e(b), f.startingTimer.clear(), j.interrupt(!0, !0), f.status.showError(f.messages.errors[b.error] ? f.messages.errors[b.error] : f.messages.errors["VideoID.ConnectingError"])
                })
            })
        }, j.stop = function() {
            return new Promise(function(a, c) {
                p.stop().then(function(c) {
                    k = c, n.detachNotificationListeners(), r(), b.stop(), setTimeout(function() {
                        f.status.clear(), a(c)
                    }, 400)
                }, function(a) {
                    n.detachNotificationListeners(), r(), b.stop(), f.activeUI.status && f.status.clear(), c(a)
                })
            })
        }, j.interrupt = function(a, c) {
            return new Promise(function(d) {
                p.interrupt(a).then(function() {
                    c && b.disconnect(), d()
                })
            })
        };
        var q = function() {
                d.on(b.events.reconnecting, function() {
                    f.clear(), n.showNotification(f.messages.notifications.ConnectionLost, 30)
                }), d.on(b.events.reconnected, function() {
                    f.clear()
                }), d.on(b.events.scanFrameRequested, function() {
                    p.sendScanFrame()
                })
            },
            r = function() {
                d.off(b.events.finished + " " + b.events.reconnecting + " " + b.events.reconnected + " " + b.events.scanFrameRequested)
            };
        Object.defineProperty(j, "video", {
            get: function() {
                return k
            }
        }), Object.defineProperty(j, "width", {
            get: function() {
                return p.previewSize.width
            }
        }), Object.defineProperty(j, "height", {
            get: function() {
                return p.previewSize.height
            }
        })
    }
}(EID, EID.ApiVideoIdClient), EID.Scanner = function(a) {
    return function(b, c, d, e) {
        function f(b) {
            return new Promise(function(c) {
                m ? m({
                    name: b.id == a.phases.passport ? a.phases.idCardFront : b.id,
                    "continue": c
                }) : c()
            })
        }

        function g(b, e, f) {
            return new Promise(function(g, i) {
                h(!0).then(function() {
                    return c.changeCamera(f)
                }).then(function(c) {
                    n = b, e = e && 150 >= e && e >= 0 ? e : 0, d.notification.show(n.defaultMessage), b.id !== a.phases.face && d.activeUI.documentFrame && (d.plotter.frameHole(!0), d.plotter.frameEdges()), p(n), r(n), n.detected = !1, n.scanning = !1, n.resolve = g, n.reject = i, n.scanningTime = e, n.camera = c, n.start()
                }, i)
            })
        }

        function h(b) {
            return new Promise(function(c, e) {
                if (n) {
                    if (n.scanned) b && n.resolve(), c();
                    else {
                        var f = a.failedVideo("Phase.NotScanned", n.id + ": couldn't perform scanning");
                        e(f)
                    }
                    q(n), s(n), d.clear()
                } else c()
            })
        }
        var i = this,
            j = $(window),
            k = $(b),
            l = null,
            m = null,
            n = null,
            o = {
                scanFace: {
                    id: a.phases.face,
                    defaultMessage: d.messages.scanningFace,
                    start: a.startFaceScanning,
                    detectedEvent: a.events.faceDetected,
                    notDetectedEvent: a.events.faceNotDetected,
                    scannedEvent: a.events.faceScanned
                },
                scanFront: {
                    id: a.phases.idCardFront,
                    defaultMessage: d.messages.scanningIdFront,
                    start: a.startFrontScanning,
                    detectedEvent: a.events.document.detected,
                    notDetectedEvent: a.events.document.notDetected,
                    scannedEvent: a.events.idCard.frontScanned
                },
                scanBack: {
                    id: a.phases.idCardBack,
                    defaultMessage: d.messages.scanningIdBack,
                    start: a.startBackScanning,
                    detectedEvent: a.events.document.detected,
                    notDetectedEvent: a.events.document.notDetected,
                    scannedEvent: a.events.idCard.backScanned
                },
                scanPassport: {
                    id: a.phases.passport,
                    defaultMessage: d.messages.scanningIdFront,
                    start: a.startFrontScanning,
                    detectedEvent: a.events.document.detected,
                    notDetectedEvent: a.events.document.notDetected,
                    scannedEvent: a.events.passport.scanned
                }
            };
        i.init = function(b, c) {
            n = null, l = b;
            var d = {
                resolve: null,
                reject: null,
                scanningTime: null,
                scanningTimeout: null,
                detected: !1,
                scanning: !1,
                scanned: !1,
                camera: null
            };
            c && (d.start = function() {}), $.extend(o.scanFace, d), $.extend(o.scanFront, d), $.extend(o.scanBack, d), $.extend(o.scanPassport, d), j.on(a.events.failed, function(a, b) {
                n && (n.scanningTimeout && clearTimeout(n.scanningTimeout), q(n), s(n), n.reject(b))
            }), j.on(a.events.startScanning, function(b, c) {
                e && (c == a.phases.face ? i.scanFace() : c == a.phases.idCardFront ? i.scanIdFront() : c == a.phases.idCardBack ? i.scanIdBack() : c == a.phases.passport && i.scanPassport())
            })
        }, i.on = function(a, b) {
            k.on(a, b)
        }, i.onVideoIDPhaseStarting = function(a) {
            if (!EID.Util.isFunction(a)) throw "onVideoIDPhaseStarting must receive a function";
            m = a
        }, i.scanFace = function(a, b, c) {
            return f(o.scanFace).then(function() {
                return c = EID.Util.isString(b) ? b : c ? c : "front", g(o.scanFace, a, c)
            })
        }, i.scanIdFront = function(a, b, c) {
            return f(o.scanFront).then(function() {
                return d.stepIntro.showIdFront()
            }).then(function() {
                return c = EID.Util.isString(b) ? b : c ? c : "back", g(o.scanFront, a, c)
            })
        }, i.scanIdBack = function(a, b, c) {
            return f(o.scanBack).then(function() {
                return d.stepIntro.showIdBack()
            }).then(function() {
                return c = EID.Util.isString(b) ? b : c ? c : "back", g(o.scanBack, a, c)
            })
        }, i.scanPassport = function(a, b, c) {
            return f(o.scanPassport).then(function() {
                return d.stepIntro.showIdFront()
            }).then(function() {
                return c = EID.Util.isString(b) ? b : c ? c : "back", g(o.scanPassport, a, c)
            })
        };
        var p = function(a) {
                a.consecutiveNotDetections = 0, j.on(a.detectedEvent, function(b) {
                    a.detected = !0, a.consecutiveNotDetections = 0;
                    var c = d.scale(b.imageSize, b.detectedCoords, "front" == n.camera);
                    k.triggerHandler(a.detectedEvent, [c]), "Ok" == b.fitness ? d.notification.hide() : "TooSmall" == b.fitness ? d.notification.show(n == o.scanFace ? d.messages.framing.smallFace : d.messages.framing.focus) : "NotFit" == b.fitness && d.notification.show(d.messages.framing.center), d.activeUI.documentFrame && n != o.scanFace && (d.plotter.stopEdgedBlink(), d.plotter.frameHole(!0), "Ok" == b.fitness ? d.plotter.frameEdges({
                        top: !0,
                        right: !0,
                        bottom: !0,
                        left: !0
                    }) : d.plotter.frameEdges()), d.activeUI.detectingFeedback.document && n != o.scanFace ? d.plotter.overlay(c) : d.activeUI.detectingFeedback.face && n == o.scanFace && d.plotter.corners(c, 20, null, !0)
                }), j.on(a.notDetectedEvent, function() {
                    a.consecutiveNotDetections++, k.triggerHandler(a.notDetectedEvent), !d.plotter.isBlinking && (d.activeUI.documentFrame || d.activeUI.detectingFeedback.document || d.activeUI.detectingFeedback.face) && d.plotter.clear(), d.activeUI.notification && (2 == a.consecutiveNotDetections && a.detected ? d.notification.hide() : a.consecutiveNotDetections > 4 && d.notification.show(n.defaultMessage)), !d.plotter.isBlinking && n != o.scanFace && d.activeUI.documentFrame && (d.plotter.frameHole(), d.plotter.frameEdges(), 7 == a.consecutiveNotDetections && d.plotter.startEdgedBlink())
                })
            },
            q = function(a) {
                j.off(a.detectedEvent), j.off(a.notDetectedEvent)
            },
            r = function(a) {
                a.scannedEvent && j.on(a.scannedEvent, function() {
                    s(a), d.notification.hide(), n.scanning || t(a)
                })
            },
            s = function(a) {
                a.scannedEvent && j.off(a.scannedEvent)
            },
            t = function() {
                return n.scanning = !0, new Promise(function(a) {
                    function b() {
                        a(), n.resolve(), k.triggerHandler(n.scannedEvent, [n.id]), n = null
                    }
                    d.activeUI.scanningTimer && d.scanningTimer.start(n.scanningTime), n.scanningTimeout = setTimeout(function() {
                        n.scanned = !0, h(!1).then(function() {
                            d.activeUI.scanningFeedback ? (d.scanningFeedback.showValid(), setTimeout(function() {
                                d.scanningFeedback.hide(), setTimeout(b, 750)
                            }, 1250)) : setTimeout(b, 750)
                        })
                    }, 1e3 * n.scanningTime)
                })
            }
    }
}(EID.ApiVideoIdClient), EID.Streamer = function() {
    return function() {
        var a = {};
        a.start = function() {}, a.stop = function() {}
    }
}(EID, EID.ApiVideoIdClient), EID.VideoID = function(a, b) {
    var c = 62,
        d = -3,
        e = $(window);
    return function(f, g) {
        function h(c) {
            c.minSimilarityLevel ? c.biometrics = {
                minSimilarityLevel: c.minSimilarityLevel
            } : g.minSimilarityLevel && (c.biometrics = {
                minSimilarityLevel: g.minSimilarityLevel
            });
            var d = a.Util.getIdType(c.idType);
            return m.init(d), l.start(c, d, b.videoType.VideoID)
        }

        function i() {
            return m.scanIdFront().then(m.scanIdBack).then(m.scanFace).then(l.stop)
        }

        function j() {
            return m.scanPassport().then(m.scanFace).then(l.stop)
        }
        g = g ? g : {};
        var k = new a.VideoUI(f, g.ui ? g.ui : {}),
            l = new a.Recorder(f, k, g),
            m = new a.Scanner(f, l, k, !1),
            n = {
                turnOn: l.turnOn,
                turnOff: l.turnOff,
                stopRecording: l.stop,
                scanFace: m.scanFace,
                scanIdFront: m.scanIdFront,
                scanIdBack: m.scanIdBack,
                scanPassport: m.scanPassport,
                on: m.on,
                onVideoIDPhaseStarting: m.onVideoIDPhaseStarting
            };
        return n.start = function(b) {
            function c() {
                return new Promise(function(c, d) {
                    function e(b) {
                        a.Log.error(b), l.interrupt(!0, !0), k.status.showError(k.messages.errors["VideoID.Error"]), k.show(), d(b)
                    }
                    b && b.idType ? c() : e("videoID.start() requires you to specify the idType")
                })
            }
            var d = a.Util.getIdType(b.idType);
            return c().then(function() {
                return h(b)
            }).then(function() {
                return d.type == EID.documentType.IdCard || d.type == EID.documentType.DriverLicense ? i() : d.type == EID.documentType.Passport ? j() : void 0
            })
        }, n.startRecording = function(a) {
            function b() {
                return new Promise(function(b, c) {
                    void 0 === a || a && a.idType ? b() : a && a.idDocument && a.idDocument.type ? a.idDocument.type != EID.documentType.Passport && a.idDocument.type != EID.documentType.IdCard ? c("Invalid document type. One of IdCard or Passport must be specified") : b() : c("videoID.startRecording() requires you to specify the document type to use (IdCard or Passport). Leave empty if you want to use default value (IdCard)")
                })
            }

            function e() {
                return void 0 === a || a.idDocument.type == EID.documentType.IdCard ? c : a.idDocument.type == EID.documentType.Passport ? d : void 0
            }
            return b().then(function() {
                return void 0 === a && (a = {
                    idDocument: {
                        type: EID.documentType.IdCard
                    }
                }), h(a.idType ? a : {
                    idType: e()
                })
            })
        }, e.on(b.events.failed, function(a, c) {
            l.interrupt(!0), k.clear({
                status: !0,
                notification: !0,
                scanningTimer: !0,
                detectingFeedback: !0,
                documentFrame: !0,
                scanningFeedback: !1
            });
            var d = k.messages.errors[c.error];
            d = d ? d : k.messages.errors[b.errors.generic.error], k.status.showError(d), k.show()
        }), Object.defineProperty(n, "video", {
            get: function() {
                return l.video
            }
        }), n
    }
}(EID, EID.ApiVideoIdClient), EID.videoIDAttended = function(a, b) {
    var c = $(window);
    return function(d, e) {
        function f(b) {
            b.minSimilarityLevel ? b.biometrics = {
                minSimilarityLevel: b.minSimilarityLevel
            } : e.minSimilarityLevel && (b.biometrics = {
                minSimilarityLevel: e.minSimilarityLevel
            });
            var c = a.Util.getIdType(b.idType);
            return i.init(c, !0), h.start(b, c)
        }
        var g = new a.VideoUI(d, e ? e.ui : {}),
            h = new a.AttendedRecorder(d, g, e),
            i = new a.Scanner(d, h, g, !0),
            j = {
                turnOn: h.turnOn,
                turnOff: h.turnOff
            };
        return j.start = function(b) {
            function c() {
                return new Promise(function(c, d) {
                    function e(b) {
                        a.Log.error(b), h.interrupt(!0, !0), g.status.showError(g.messages.errors["VideoID.Error"]), g.show(), d(b)
                    }
                    b && b.idType ? b.rauthorityId ? c() : e("start() requires you to specify the rauthorityId that will attend the video identification") : e("start() requires you to specify the idType")
                })
            }
            return c().then(function() {
                return f(b)
            })
        }, c.on(b.events.failed, function(a, c) {
            h.interrupt(), g.clear({
                status: !0,
                notification: !0,
                scanningTimer: !0,
                detectingFeedback: !0,
                documentFrame: !0,
                scanningFeedback: !1
            });
            var d = g.messages.errors[c.error];
            d = d ? d : g.messages.errors[b.errors.generic.error], g.status.showError(d), g.show()
        }), j
    }
}(EID, EID.ApiVideoIdClient), EID.VideoScan = function(a, b) {
    var c = $(window);
    return function(d, e) {
        function f(a, c) {
            return k.init(c), j.start(a, c, b.videoType.VideoScan)
        }

        function g() {
            return k.scanIdFront().then(k.scanIdBack).then(j.stop)
        }

        function h() {
            return k.scanPassport().then(j.stop)
        }
        e = e ? e : {};
        var i = new a.VideoUI(d, e.ui ? e.ui : {}),
            j = new a.Recorder(d, i, e),
            k = new a.Scanner(d, j, i, !1),
            l = {
                turnOn: j.turnOn,
                turnOff: j.turnOff,
                onVideoScanPhaseStarting: k.onVideoIDPhaseStarting
            };
        return l.start = function(b) {
            function c() {
                return new Promise(function(c, d) {
                    function e(b) {
                        a.Log.error(b), j.interrupt(!0, !0), i.status.showError(i.messages.errors["VideoID.Error"]), i.show(), d(b)
                    }
                    b && b.idType ? c() : e("videoScan.start() requires you to specify the idType")
                })
            }
            var d = a.Util.getIdType(b.idType);
            return c().then(function() {
                return f({
                    idType: b.idType
                }, d)
            }).then(function() {
                return d.type == EID.documentType.IdCard ? g() : d.type == EID.documentType.Passport ? h() : void 0
            })
        }, c.on(b.events.failed, function(a, c) {
            j.interrupt(!0), i.clear({
                status: !0,
                notification: !0,
                scanningTimer: !0,
                detectingFeedback: !0,
                documentFrame: !0,
                scanningFeedback: !1
            });
            var d = i.messages.errors[c.error];
            d = d ? d : i.messages.errors[b.errors.generic.error], i.status.showError(d), i.show()
        }), Object.defineProperty(l, "scan", {
            get: function() {
                return j.video
            }
        }), l
    }
}(EID, EID.ApiVideoIdClient), EID.VideoUI = function(a) {
    return function(b, c) {
        var d = this,
            e = null,
            f = null,
            g = null,
            h = null,
            i = {
                width: 0,
                height: 0
            },
            j = {
                width: 0,
                height: 0
            },
            k = null,
            l = null,
            m = null,
            n = null,
            o = null,
            p = null,
            q = null,
            r = null,
            s = null,
            t = {},
            u = function() {
                c = c || {};
                var b = {
                    enable: !0,
                    messages: a.videoUIMessages,
                    stepIntro: {
                        enable: !1
                    },
                    status: {
                        enable: !0,
                        style: {
                            "background-color": "rgba(51, 51, 51, 0.55)",
                            color: "#D8D8D8",
                            "font-size": "1rem",
                            "font-weight": 600
                        },
                        position: "bottom"
                    },
                    notification: {
                        enable: !0,
                        position: "center",
                        style: {
                            "background-color": "rgba(51, 51, 51, 0.55)",
                            color: "#D8D8D8",
                            "font-weight": 600,
                            "font-family": "Helvetica"
                        }
                    },
                    startingTimer: {
                        enable: !0,
                        time: 3,
                        style: {
                            "background-color": "rgba(51, 51, 51, 0.55)",
                            color: "#F8F8F8",
                            width: "250px",
                            height: "250px",
                            "font-size": "6rem"
                        },
                        position: "center"
                    },
                    connectingProgress: {
                        enable: !0,
                        style: {
                            "background-color": "rgba(51, 51, 51, 0.55)"
                        }
                    },
                    scanningTimer: {
                        enable: !1,
                        style: {
                            "background-color": "rgba(86, 188, 118, 0.35)",
                            color: "white",
                            width: "75px",
                            height: "75px",
                            "font-size": "2.5rem"
                        },
                        position: "top-right"
                    },
                    documentFrame: {
                        enable: !0
                    },
                    detectingFeedback: {
                        enable: !0,
                        face: !0,
                        document: !1,
                        style: {
                            "background-color": "rgba(86, 188, 118, 0.35)",
                            "border-color": "rgba(86, 188, 118, 1)"
                        }
                    },
                    scanningFeedback: {
                        enable: !0,
                        position: "center",
                        style: {
                            "background-color": "rgba(86, 188, 118, 0.95)"
                        }
                    }
                };
                return $.extend(!0, {}, b, c)
            }(),
            v = function(a) {
                var b = '<div class="progress-container"></div>',
                    c = '<div id="progress_' + Date.now() + '"></div>',
                    d = {
                        position: "absolute",
                        "z-index": 110,
                        width: "400px",
                        height: "400px"
                    },
                    e = {
                        width: "400px",
                        height: "400px",
                        position: "relative"
                    },
                    g = {
                        right: "50%",
                        top: "50%",
                        transform: "translateX(50%) translateY(-50%)"
                    },
                    h = $(b).css(d).css(g),
                    i = $(c).css(e);
                h.append(i), f.append(h), i.pietimer({
                    seconds: 5,
                    color: a["background-color"]
                });
                var j = null,
                    k = 0;
                this.progressTo = function(a) {
                    var b = a / 20;
                    return new Promise(function(c) {
                        h.show(), j ? (clearTimeout(j), i.pietimer("pause"), i.pietimer("start", k)) : i.pietimer("start"), j = setTimeout(function() {
                            i.pietimer("pause"), c(), 100 == a && h.hide()
                        }, 1e3 * (b - k)), k = b
                    })
                }, this.clear = function() {
                    h.hide()
                }
            },
            w = function(a, b) {
                var c = '<div class="pie-timer-container"></div>',
                    d = '<div id="pie-timer_' + Date.now() + '"></div>',
                    e = '<span class="pie-timer-counter"></span>',
                    g = {
                        position: "absolute",
                        "z-index": 110,
                        width: a.width,
                        height: a.height
                    },
                    h = {
                        width: "100%",
                        height: "100%",
                        position: "relative"
                    },
                    i = {
                        position: "absolute",
                        color: a.color,
                        "font-size": a["font-size"],
                        left: "50%",
                        top: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                        "text-shadow": "-1px 0px rgb(131, 131, 131), 0px 1px rgb(131, 131, 131), 1px 0px rgb(131, 131, 131), 0px -1px rgb(131, 131, 131)"
                    },
                    j = "center" == b ? {
                        right: "50%",
                        top: "50%",
                        transform: "translateX(50%) translateY(-50%)"
                    } : {
                        top: -1 != b.indexOf("top") ? "5px" : "auto",
                        bottom: -1 != b.indexOf("bottom") ? "5px" : "auto",
                        right: -1 != b.indexOf("right") ? "5px" : "auto",
                        left: -1 != b.indexOf("left") ? "5px" : "auto"
                    },
                    k = $(c).css(g).css(j),
                    l = $(e).css(i),
                    m = $(d).css(h);
                k.append(m), f.append(k), this.start = function(b) {
                    b = b ? Math.ceil(b) : 10, m.pietimer({
                        seconds: b,
                        color: a["background-color"],
                        height: m.height(),
                        width: m.width()
                    }, function() {
                        l.remove()
                    }), m.append(l), l.html(b), m.pietimer("start"), k.show();
                    var c = setInterval(function() {
                        b--, l.html(b), b || clearInterval(c)
                    }, 1e3);
                    return new Promise(function(a) {
                        setTimeout(a, 1e3 * b)
                    })
                }, this.clear = function() {
                    k.hide()
                }
            },
            x = function(a, b) {
                function c() {
                    j.text(""), i.hide()
                }

                function d(a, c, d) {
                    i.css(a), "center" != b && (c = c.split("<br /> ").join("")), j.html(c), i.show(), d && (n = !0, setTimeout(function() {
                        i.hide(), n = !1
                    }, d ? 1e3 * d : 0))
                }
                var e, g = '<div><p style="margin: 0; line-height: 1.5; font-size: ' + a["font-size"] + ';"></p></div>',
                    h = {
                        position: "absolute",
                        "text-align": "center",
                        "z-index": 160,
                        padding: "6px",
                        "text-shadow": "1px 1px #000"
                    };
                "center" == b ? (e = {
                    top: "50%",
                    right: "50%",
                    transform: "translateX(50%) translateY(-50%)"
                }, e.width = .95 * k.width + "px") : (e = "top" == b ? {
                    top: 0
                } : {
                    bottom: 0
                }, e.width = "100%");
                var i = $(g).css(h).css(a).css(e),
                    j = i.find("p"),
                    l = {
                        "background-color": a["background-color"] ? a["background-color"] : "rgba(51, 51, 51, 0.55)"
                    },
                    m = {
                        "background-color": "rgba(240, 173, 78, 0.70)"
                    };
                f.append(i);
                var n = !1;
                this.clear = function() {
                    c()
                }, this.hide = function() {
                    return new Promise(function(a) {
                        n || c(), a()
                    })
                }, this.show = function(a, b) {
                    return new Promise(function(c) {
                        n || d(l, a, b), c()
                    })
                }, this.warn = function(a, b) {
                    n || d(m, a, b)
                }, this.hide()
            },
            y = function(a, b) {
                var c = '<div><p style="margin:0"></p></div>',
                    d = {
                        position: "absolute",
                        right: "50%",
                        transform: "translateX(50%)",
                        "background-color": a["background-color"],
                        "border-top": "1px solid black",
                        "font-size": a["font-size"],
                        width: "100%",
                        "text-align": "center",
                        "z-index": 115,
                        "margin-bottom": 0,
                        padding: "6px 0"
                    },
                    e = $(c).css(d).css(a).css("top" == b ? {
                        top: 0
                    } : {
                        bottom: 0
                    }),
                    g = e.find("p"),
                    h = {
                        "background-color": a["background-color"] ? a["background-color"] : "rgba(51, 51, 51, 0.55)"
                    },
                    i = {
                        "background-color": "rgb(217, 83, 79)"
                    };
                f.append(e), this.clear = function() {
                    g.text(""), e.hide()
                }, this.show = function(a) {
                    e.css(h), g.html(a), e.show()
                }, this.showError = function(a, b) {
                    e.css(b ? {
                        "background-color": b
                    } : i), g.html(a), e.show()
                }, this.clear()
            },
            z = function(a, b) {
                var c = "<canvas id='scanning-feedback-canvas' width='140' height='140'></canvas>",
                    d = {
                        position: "absolute",
                        "z-index": 100
                    },
                    e = "center" == b ? {
                        right: "50%",
                        top: "50%",
                        transform: "translateX(50%) translateY(-50%)"
                    } : {
                        top: -1 != b.indexOf("top") ? "15px" : "auto",
                        bottom: -1 != b.indexOf("bottom") ? "15px" : "auto",
                        right: -1 != b.indexOf("right") ? "15px" : "auto",
                        left: -1 != b.indexOf("left") ? "15px" : "auto"
                    },
                    g = $(c).css(d).css(e);
                f.append(g);
                var h = 45,
                    i = 60,
                    j = 70,
                    k = 85,
                    l = 100,
                    m = 5,
                    n = 8,
                    o = 10,
                    p = document.getElementById("scanning-feedback-canvas").getContext("2d");
                p.lineWidth = n, this.hide = function() {
                    p.clearRect(0, 0, p.canvas.width, p.canvas.height)
                }, this.showValid = function() {
                    return new Promise(function(b) {
                        p.strokeStyle = a["background-color"], p.beginPath(), p.lineWidth = 5, p.arc(70, 70, 55, -2 * Math.PI / 7, Math.PI + 4 * (Math.PI / 7), !1), p.stroke(), p.lineWidth = n;
                        for (var c = h, d = i, e = j - c > k - d ? 1 : (j - c) / (k - d), f = j - c > k - d ? (k - d) / (j - c) : 1, g = j - c > k - d ? j - c : k - d, q = 0; g > q; q++) {
                            window.setTimeout(function() {
                                p.beginPath(), p.lineCap = "square", p.moveTo(h, i), p.lineTo(c, d), p.stroke(), c += e, d += f
                            }, 1 + q * o / 3)
                        }
                        for (var r = j + 6, s = k - 2, t = l - r > s - m ? 1 : (l - r) / (s - m), u = l - r > s - m ? (l - r) / (s - m) : 1, v = 1 + g * o / 3, w = l - r > s - m ? l - r : s - m, q = 0; w > q; q++) {
                            window.setTimeout(function() {
                                p.beginPath(), p.lineCap = "butt", p.moveTo(j - 2, k + 2), p.lineTo(r, s), p.stroke(), r += t, s -= u
                            }, v + q * o / 6)
                        }
                        b()
                    })
                }, this.showInvalid = function() {
                    p.strokeStyle = "rgba(255, 0, 0, 0.7)", p.lineWidth = 5, p.beginPath(), p.arc(70, 70, 55, 0, 2 * Math.PI, !1), p.stroke();
                    var a = 60,
                        b = 40,
                        c = 40;
                    p.beginPath();
                    for (var d = 1; a >= d; d++) setTimeout(function() {
                        p.moveTo(b, c), p.lineTo(++b, ++c), p.stroke()
                    }, 1 + d * o / 3);
                    var e = 1 + a * o / 3,
                        f = 100,
                        g = 40;
                    p.beginPath();
                    for (var d = 1; a >= d; d++) setTimeout(function() {
                        p.moveTo(f, g), p.lineTo(--f, ++g), p.stroke()
                    }, e + d * o / 3)
                }, this.hide()
            },
            A = function() {
                var b = 1,
                    c = .7,
                    d = "<div><img src='" + a.imagesLocation + "idFront.svg' class='eid-id-front' /><img src='" + a.imagesLocation + "idBack.svg' class='eid-id-back' /></div>",
                    e = {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        "z-index": 140,
                        "transform-style": "preserve-3d",
                        transition: "transform " + c + "s"
                    },
                    f = {
                        position: "absolute",
                        right: "50%",
                        top: "50%",
                        display: "block",
                        "object-fit": "cover",
                        "max-height": "100%",
                        transition: b + "s",
                        "backface-visibility": "hidden",
                        transform: "translateX(50%) translateY(-50%)"
                    },
                    h = {
                        width: "36%"
                    },
                    i = {
                        width: "100%"
                    },
                    j = {
                        transform: "rotateY(180deg)"
                    },
                    k = {
                        transform: "none"
                    },
                    l = $(d).css(e),
                    m = l.find(".eid-id-front").css(f).css(h),
                    n = l.find(".eid-id-back").css(f).css(h).css({
                        transform: "rotateY(180deg) translateX(-50%) translateY(-50%)"
                    });
                g.append(l), this.showFront = function() {
                    return new Promise(function(a) {
                        l.show(0, a)
                    })
                }, this.showBack = function() {
                    return new Promise(function(a) {
                        l.show(0), l.css(j), E(c).then(a)
                    })
                }, this.zoomFrontIn = function() {
                    return new Promise(function(a) {
                        m.css(i), E(b).then(a)
                    })
                }, this.zoomBackIn = function() {
                    return new Promise(function(a) {
                        n.css(i), E(b).then(a)
                    })
                }, this.hide = function() {
                    return new Promise(function(a) {
                        l.hide(0, a), l.css(k), m.css(h), n.css(h)
                    })
                }, this.hide(), Object.defineProperty(this, "idSize", {
                    get: function() {
                        var a = l.find("img");
                        return {
                            width: a.width(),
                            height: a.height()
                        }
                    }
                })
            },
            B = function() {
                function b(a, b, c) {
                    return new Promise(function(a) {
                        n.frameHole(!0), n.frameEdges(), m.show("Ejemplo").then(function() {
                            return E(1.6).then(m.hide)
                        }).then(function() {
                            return E(.5).then(b)
                        }).then(function() {
                            return E(.5).then(d.showAll)
                        }).then(function() {
                            return n.isBlinking = !0, n.frameEdgesBlink(1, {
                                color: .6,
                                "default": 0
                            })
                        }).then(function() {
                            return n.isBlinking = !1, d.hide(), E(.15).then(c)
                        }).then(function() {
                            return n.frameHole(!0), n.frameEdges({
                                top: !0,
                                right: !0,
                                bottom: !0,
                                left: !0
                            }), E(.5).then(r.showValid)
                        }).then(function() {
                            return E(1.5).then(s.hide)
                        }).then(function() {
                            return E(.4)
                        }).then(a)
                    })
                }
                var c = new A,
                    d = new a.VideoUI.Arrows(g, c, k);
                this.showIdFront = function() {
                    return b(u.messages.introIdFront, c.showFront, c.zoomFrontIn)
                }, this.showIdBack = function() {
                    return b(u.messages.introIdBack, c.showBack, c.zoomBackIn)
                }, this.hide = function() {
                    return new Promise(function(a) {
                        return n.frameHole(!0), n.frameEdges(), d.hide(), c.hide(), m.hide(), r.hide(), E(.1).then(a)
                    })
                }
            };
        d.hide = function() {
            f.hide()
        }, d.show = function() {
            f.show()
        }, d.clear = function(a) {
            a = a ? a : {
                stepIntro: !0,
                status: !0,
                notification: !0,
                scanningTimer: !0,
                detectingFeedback: !0,
                documentFrame: !0,
                scanningFeedback: !0
            }, d.activeUI.stepIntro && a.stepIntro && d.stepIntro.hide(), d.activeUI.status && a.status && d.status.clear(), d.activeUI.notification && a.notification && d.notification.clear(), d.activeUI.scanningTimer && a.scanningTimer && d.scanningTimer.clear(), d.activeUI.scanningFeedback && a.scanningFeedback && d.scanningFeedback.hide(), (d.activeUI.detectingFeedback.document || d.activeUI.detectingFeedback.face || d.activeUI.documentFrame) && (a.detectingFeedback || a.documentFrame) && d.plotter.clear(), n && d.plotter.isBlinking && (d.plotter.stopEdgedBlink(), d.plotter.clear())
        }, d.updateContainerSize = function(a) {
            i.width = a.width, i.height = a.height, e.width(i.width), e.height(i.height)
        }, d.updatePreviewSize = function(a) {
            j.width = a.width, j.height = a.height, f.width(j.width), f.height(j.height), n && n.relocate()
        }, d.updateIdFrame = function(a) {
            k = a, k.width = k.p2.x - k.p1.x, k.height = k.p3.y - k.p1.y, g.css({
                position: "absolute",
                left: k.p1.x,
                top: k.p1.y,
                width: k.width,
                height: k.height,
                perspective: k.width
            }), d.activeUI.stepIntro && (s = new B), (t.documentFrame || t.detectingFeedback.document || t.detectingFeedback.face) && n.updateIdFrame(k), t.notification && (u.notification.style["font-size"] = u.notification.style["font-size"] ? u.notification.style["font-size"] : "center" == u.notification.position ? .07 * k.width + "px" : "16px", m = new x(u.notification.style, u.notification.position))
        }, d.scale = function(a, b, c) {
            function d(a, b, c) {
                return c = c ? c : b, {
                    p1: {
                        x: Math.ceil(a.p1.x * b),
                        y: Math.ceil(a.p1.y * c)
                    },
                    p2: {
                        x: Math.ceil(a.p2.x * b),
                        y: Math.ceil(a.p2.y * c)
                    },
                    p3: {
                        x: Math.ceil(a.p3.x * b),
                        y: Math.ceil(a.p3.y * c)
                    },
                    p4: {
                        x: Math.ceil(a.p4.x * b),
                        y: Math.ceil(a.p4.y * c)
                    }
                }
            }

            function e(a) {
                a.p1.x = Math.abs(j.width - a.p1.x), a.p2.x = Math.abs(j.width - a.p2.x), a.p3.x = Math.abs(j.width - a.p3.x), a.p4.x = Math.abs(j.width - a.p4.x);
                var b = a.p1;
                return a.p1 = a.p2, a.p2 = b, b = a.p3, a.p3 = a.p4, a.p4 = b, a
            }
            var f = j.width / a.width,
                g = j.height / a.height,
                h = d(b, f, g);
            return c ? e(h) : h
        };
        var C = function() {
                var a = "<div id='id-frame-container'></div>",
                    b = {
                        position: "absolute"
                    };
                g = $(a).css(b), f.append(g)
            },
            D = (function() {
                h = $(b), e || (e = h.wrap("<div id='video-wrapper'></div>").parent().css({
                    position: "relative"
                }), f = $("<div id='video-ui-container'></div>").css({
                    display: "none",
                    position: "absolute",
                    right: "50%",
                    top: "50%",
                    transform: "translateX(50%) translateY(-50%)",
                    overflow: "hidden"
                }), e.append(f)), C();
                var c = {
                    width: h.width(),
                    height: h.height()
                };
                return d.updateContainerSize(c), d.updatePreviewSize(c), u.enable ? (t = {
                    stepIntro: u.stepIntro.enable,
                    status: u.status.enable,
                    notification: u.notification.enable,
                    startingTimer: !0,
                    connectingProgress: u.connectingProgress.enable,
                    scanningTimer: u.scanningTimer.enable,
                    documentFrame: u.documentFrame.enable,
                    detectingFeedback: {
                        document: u.detectingFeedback.enable && u.detectingFeedback.document,
                        face: u.detectingFeedback.enable && u.detectingFeedback.face
                    },
                    scanningFeedback: u.scanningFeedback.enable
                }, t.status && !l && (l = new y(u.status.style, u.status.position)), t.startingTimer && !o && (o = new w(u.startingTimer.style, u.startingTimer.position)), t.connectingProgress && !p && (p = new v(u.connectingProgress.style)), t.scanningTimer && !q && (q = new w(u.scanningTimer.style, u.scanningTimer.position)), (t.documentFrame || t.detectingFeedback.document || t.detectingFeedback.face) && !n && (n = new a.VideoUI.Plotter(f, k, u.detectingFeedback.style)), void(t.scanningFeedback && (r = new z(u.scanningFeedback.style, u.scanningFeedback.position)))) : void(t = {
                    stepIntro: !1,
                    status: !1,
                    notification: !1,
                    startingTimer: !1,
                    connectingProgress: !1,
                    scanningTimer: !1,
                    documentFrame: !1,
                    detectingFeedback: !1
                })
            }(), function() {
                return new Promise(function(a) {
                    a()
                })
            }),
            E = function(a) {
                return new Promise(function(b) {
                    setTimeout(b, 1e3 * a)
                })
            };
        Object.defineProperty(d, "config", {
            get: function() {
                return u
            }
        }), Object.defineProperty(d, "activeUI", {
            get: function() {
                return t
            }
        }), Object.defineProperty(d, "status", {
            get: function() {
                return l ? l : {
                    clear: D,
                    show: D,
                    showError: D
                }
            }
        }), Object.defineProperty(d, "notification", {
            get: function() {
                return m ? m : {
                    clear: D,
                    hide: D,
                    show: D,
                    warn: D
                }
            }
        }), Object.defineProperty(d, "plotter", {
            get: function() {
                return n
            }
        }), Object.defineProperty(d, "scanningFeedback", {
            get: function() {
                return r
            }
        }), Object.defineProperty(d, "startingTimer", {
            get: function() {
                return o ? o : {
                    start: D,
                    clear: D
                }
            }
        }), Object.defineProperty(d, "connectingProgress", {
            get: function() {
                return p
            }
        }), Object.defineProperty(d, "scanningTimer", {
            get: function() {
                return q ? q : {
                    start: D,
                    clear: D
                }
            }
        }), Object.defineProperty(d, "stepIntro", {
            get: function() {
                return s ? s : {
                    showIdFront: D,
                    showIdBack: D,
                    hide: D
                }
            }
        }), Object.defineProperty(d, "messages", {
            get: function() {
                return u.messages
            }
        })
    }
}(EID, EID.ApiVideoIdClient), EID.Webcam = function(a, b, c) {
    var d = "back";
    return function(e, f, g) {
        var h = this,
            i = ($(window), {
                width: null,
                height: null
            }),
            j = {
                width: null,
                height: null
            },
            k = {
                width: null,
                height: null
            },
            l = null,
            m = "true" != EID.Config.DISABLE_AUDIO,
            n = {
                TD1: DetectRTC.isMobileDevice ? 480 : 640,
                TD2: 640,
                TD3: 640,
                LICENSE: 640,
                EULICENSE: 640,
                "default": 640
            },
            o = function() {
                g = g || {};
                var a = {
                    image_format: "jpeg",
                    real_quality: 80,
                    force_flash: !1,
                    flip_horiz: !1,
                    fps: 10,
                    width: 320,
                    height: 240
                };
                return {
                    image_format: "png" == g.image_format ? "png" : a.image_format,
                    jpeg_quality: 100,
                    real_quality: void 0 == g.quality ? a.real_quality : g.quality,
                    force_flash: g.force_flash ? g.force_flash : a.force_flash,
                    flip_horiz: !0,
                    low_quality_width: 320
                }
            }();
        h.turnOn = function(a, b) {
            return new Promise(function(d, e) {
                b && !EID.Util.hasAudioInputDevices() ? e(c.failedVideo(c.errors.noMicrophone)) : p(a).then(function() {
                    b && !h.hasAudio ? e(c.failedVideo(c.errors.microphonePermissionDenied)) : d()
                }, e)
            })
        }, h.adjustScanSizeToIdType = function(a) {
            return new Promise(function(b, c) {
                var d = a.icao && n[a.icao] ? n[a.icao] : n["default"];
                q(d).then(r).then(s).then(b, c)
            })
        }, h.snap = function(b) {
            return new Promise(function(c, d) {
                a.off("error"), a.on("error", d);
                var e = b.takeHighQualityFrame && !a.isUsingFlash ? j.width : k.width,
                    f = b.takeHighQualityFrame && !a.isUsingFlash ? j.height : k.height,
                    g = b.takeHighQualityFrame && !a.isUsingFlash ? b.highQuality : b.quality;
                a.snap(e, f, g, function(a) {
                    c(a)
                })
            })
        }, h.turnOff = function() {
            return new Promise(function(b, c) {
                a.off("error"), a.on("error", c), a.reset(), b()
            })
        }, h.freeze = function() {
            a.freeze()
        }, h.unfreeze = function() {
            a.unfreeze()
        }, h.canSwitchToCamera = function(a) {
            return a && a != h.currentCamera && h.isMultiCameraDevice
        }, h.switchToCamera = function(b) {
            return new Promise(function(c, d) {
                b && b != h.currentCamera ? "front" != b && "back" != b ? d("Invalid camera: '" + b + "' requested. Valid values are: 'front' and 'back'") : a.switchToCamera(b).then(c, d) : c(b)
            })
        };
        var p = function(f) {
                return new Promise(function(g, h) {
                    function i() {
                        g()
                    }

                    function j(a) {
                        var b = c.failedVideo(a);
                        h(b)
                    }
                    a.off("error"), a.on("error", j), a.off("live"), a.on("live", i), a.set(o), a.setVideoId(c), a.setSWFLocation(b.webcamSwfUrl), a.attach(e, f ? f : d, m)
                })
            },
            q = function(b) {
                function c() {
                    return new Promise(function(c) {
                        var d = {
                            dest_width: b,
                            dest_height: Math.floor(b / h.cameraRatio)
                        };
                        d.dest_height = d.dest_height % 2 ? d.dest_height + 1 : d.dest_height, a.set(d), j = {
                            width: d.dest_width,
                            height: d.dest_height
                        };
                        var e = b / o.low_quality_width;
                        k = {
                            width: d.dest_width / e,
                            height: d.dest_height / e
                        }, c()
                    })
                }

                function d() {
                    return new Promise(function(a) {
                        var b = setInterval(function() {
                            h.resolution.width && h.resolution.height && (clearInterval(b), a())
                        }, 100)
                    })
                }
                return new Promise(function(e) {
                    d().then(function() {
                        a.isUsingFlash ? (a.set({
                            dest_width: h.resolution.width,
                            dest_height: h.resolution.height
                        }), k = h.resolution, e()) : b > h.resolution.width && l >= b ? a.increaseStreamWidth(b).then(c).then(e) : c().then(e)
                    })
                })
            },
            r = function() {
                return new Promise(function(a) {
                    var b = h.config.width / h.config.height;
                    i = h.cameraRatio < b ? {
                        width: h.config.height * h.cameraRatio,
                        height: h.config.height
                    } : {
                        width: h.config.width,
                        height: h.config.width / h.cameraRatio
                    }, f.updatePreviewSize(i), a()
                })
            },
            s = function() {
                return new Promise(function(b) {
                    a.set({
                        crop_width: a.params.dest_width,
                        crop_height: a.params.dest_height
                    }), b()
                })
            };
        Object.defineProperty(h, "config", {
            get: function() {
                return a.params
            }
        }), Object.defineProperty(h, "previewSize", {
            get: function() {
                return i
            }
        }), Object.defineProperty(h, "snapSize", {
            get: function() {
                return k
            }
        }), Object.defineProperty(h, "cropSize", {
            get: function() {
                return {
                    width: a.params.crop_width,
                    height: a.params.crop_height
                }
            }
        }), Object.defineProperty(h, "resolution", {
            get: function() {
                return {
                    width: a.userMedia ? a.video.videoWidth : a.getMovie()._width(),
                    height: a.userMedia ? a.video.videoHeight : a.getMovie()._height()
                }
            }
        }), Object.defineProperty(h, "cameraRatio", {
            get: function() {
                return h.resolution.width / h.resolution.height
            }
        }), Object.defineProperty(h, "cameras", {
            get: function() {
                return a.cameras
            }
        }), Object.defineProperty(h, "isMultiCameraDevice", {
            get: function() {
                return a.isMultiCameraDevice
            }
        }), Object.defineProperty(h, "currentCamera", {
            get: function() {
                return a.currentCamera
            }
        }), Object.defineProperty(h, "isLive", {
            get: function() {
                return a.live
            }
        }), Object.defineProperty(h, "hasAudio", {
            get: function() {
                return a.hasAudio && m
            }
        }), Object.defineProperty(h, "stream", {
            get: function() {
                return a.stream
            }
        }), Object.defineProperty(h, "maxAllowedWidth", {
            get: function() {
                return l
            },
            set: function(a) {
                l = a
            }
        })
    }
}(Webcam, EID, EID.ApiVideoIdClient), EID.VideoUI.Arrows = function(a) {
    var b = {
            width: 50,
            height: 60
        },
        c = .7,
        d = "rgba(0, 0, 0, 0.75)",
        e = "rgba(102, 102, 102, 1)",
        f = "rgba(86, 188, 118, 1)";
    return function(g, h, i) {
        function j(a) {
            var b = 40,
                c = 5,
                d = "V" == a ? {
                    x: b / 2 + c,
                    y: 3
                } : {
                    x: 3,
                    y: b / 2 + c
                },
                f = "V" == a ? c + " 25 " + d.x + " " + d.y + " " + (b + c) + " 25" : "25 " + c + " " + d.x + " " + d.y + " 25 " + (b + c),
                g = "V" == a ? l : m,
                h = '<svg class="eid-arrow" viewBox="' + g + '"><path d="M' + d.x + " " + d.y + " " + a + ' 600" /><polyline stroke-linecap="round" stroke-linejoin="round" points="' + f + '" /></svg>',
                i = $(h),
                j = {
                    fill: "none",
                    stroke: e,
                    "stroke-width": "4px"
                };
            return i.find("path, polyline").css(j), i
        }

        function k(a, b) {
            return "0 0 " + a + " " + b
        }
        var l = k(b.width, b.height),
            m = k(b.height, b.width),
            n = {
                position: "absolute"
            },
            o = {
                left: "50%",
                transform: "translateX(-50%)",
                width: "10%"
            },
            p = {
                top: "50%",
                transform: "translateY(-50%)"
            },
            q = j("V").css(n).css(o).css({
                "transition-property": "top"
            }),
            r = j("H").css(n).css(p).css({
                "transition-property": "left"
            }),
            s = j("V").css(n).css(o).css({
                transform: "translateX(-50%) scaleY(-1)",
                "transition-property": "bottom"
            }),
            t = j("H").css(n).css(p).css({
                transform: "translateY(-50%) scaleX(-1)",
                "transition-property": "right"
            });
        g.append(q, r, s, t);
        var u = $(".eid-arrow");
        this.showAll = function() {
            var d = 8;
            return new Promise(function(e) {
                var f = (i.height - h.idSize.height) / 2,
                    g = (i.width - h.idSize.width) / 2;
                u.show(0);
                var j = q.height(),
                    l = q.width(),
                    m = b.width / l,
                    n = k(g * m, b.width),
                    o = k(b.width, f * m);
                q[0].setAttribute("viewBox", o), r[0].setAttribute("viewBox", n), s[0].setAttribute("viewBox", o), t[0].setAttribute("viewBox", n), q.css({
                    top: f - j + "px"
                }), r.css({
                    left: g - j + "px",
                    height: l + "px"
                }), s.css({
                    bottom: f - j + "px"
                }), t.css({
                    right: g - j + "px",
                    height: l + "px"
                }), u.css({
                    visibility: ""
                }), a.Util.delay(.15).then(function() {
                    u.css({
                        "transition-duration": c + "s"
                    }), q.css({
                        top: d + "px"
                    }), r.css({
                        left: d + "px"
                    }), s.css({
                        bottom: d + "px"
                    }), t.css({
                        right: d + "px"
                    }), a.Util.delay(c).then(e)
                })
            })
        }, this.changeToSuccessColor = function() {
            return new Promise(function(a) {
                u.find("path, polyline").css({
                    stroke: f
                }), a()
            })
        }, this.changeToDefaultColor = function() {
            return new Promise(function(a) {
                u.find("path, polyline").css({
                    stroke: d
                }), a()
            })
        }, this.hide = function() {
            return new Promise(function(a) {
                u.css({
                    "transition-duration": "",
                    visibility: "hidden"
                }), u.find("path, polyline").css({
                    stroke: e
                }), q[0].setAttribute("viewBox", l), r[0].setAttribute("viewBox", m), s[0].setAttribute("viewBox", l), t[0].setAttribute("viewBox", m), u.hide(0, a)
            })
        }, this.hide()
    }
}(EID), EID.VideoUI.Plotter = function(a) {
    var b = "rgba(0, 0, 0, 0.60)",
        c = "rgba(0, 0, 0, 0.75)";
    return function(d, e, f) {
        function g(a, b) {
            if (a.x == b.x || a.y == b.y) return null;
            var c = (b.y - a.y) / (b.x - a.x),
                d = a.y - a.x * c;
            return {
                m: c,
                c: d
            }
        }

        function h(a, b) {
            return (a - b.c) / b.m
        }

        function i(a, b) {
            return b.m * a + b.c
        }
        var j = this,
            k = "<canvas id='videoId-plotter-canvas' width='" + d.width() + "' height='" + d.height() + "'></canvas>",
            l = {
                position: "absolute",
                top: 0,
                left: 0,
                "z-index": 100
            },
            m = $(k).css(l);
        d.append(m);
        var n = document.getElementById("videoId-plotter-canvas").getContext("2d"),
            o = f["background-color"],
            p = f["border-color"],
            q = !1;
        this.overlay = function(a, b) {
            b && this.clear(), n.lineWidth = 2, n.fillStyle = o, n.strokeStyle = p, n.beginPath(), n.moveTo(a.p1.x, a.p1.y), n.lineTo(a.p2.x, a.p2.y), n.lineTo(a.p3.x, a.p3.y), n.lineTo(a.p4.x, a.p4.y), n.closePath(), n.fill(), n.stroke()
        }, this.frameHole = function(a) {
            a && this.clear(), n.fillStyle = b, n.fillRect(0, 0, m.width(), e.p1.y), n.fillRect(0, e.p4.y, m.width(), m.height() - e.p4.y), n.fillRect(0, e.p1.y, e.p1.x, e.height), n.fillRect(e.p2.x, e.p2.y, m.width() - e.p2.x, e.height)
        }, this.frameEdges = function(a, b, d, f) {
            f && this.clear(), n.lineWidth = Math.floor(.01 * e.width), b = b ? b : p, d = d ? d : c, a = a || {};
            var g = Math.floor(.05 * e.width),
                h = 0;
            n.beginPath(), n.moveTo(e.p1.x + g, e.p1.y + h), n.lineTo(e.p2.x - g, e.p2.y + h), n.strokeStyle = a.top ? b : d, n.stroke(), n.beginPath(), n.moveTo(e.p2.x - h, e.p2.y + g), n.lineTo(e.p3.x - h, e.p3.y - g), n.strokeStyle = a.right ? b : d, n.stroke(), n.beginPath(), n.moveTo(e.p3.x - g, e.p3.y - h), n.lineTo(e.p4.x + g, e.p4.y - h), n.strokeStyle = a.bottom ? b : d, n.stroke(), n.beginPath(), n.moveTo(e.p4.x + h, e.p4.y - g), n.lineTo(e.p1.x + h, e.p1.y + g), n.strokeStyle = a.left ? b : d, n.stroke()
        }, this.corners = function(a, b, c, d) {
            d && this.clear(), b = b ? b : 20, n.strokeStyle = p, n.lineWidth = 3, n.beginPath(), n.moveTo(a.p1.x, a.p1.y);
            var e = g(a.p1, a.p2);
            n.lineTo(a.p1.x + b, e ? i(a.p1.x + b, e) : a.p1.y), n.moveTo(a.p2.x, a.p2.y), n.lineTo(a.p2.x - b, e ? i(a.p2.x - b, e) : a.p1.y), n.moveTo(a.p2.x, a.p2.y);
            var f = g(a.p2, a.p3);
            n.lineTo(f ? h(a.p2.y + b, f) : a.p2.x, a.p2.y + b), n.moveTo(a.p3.x, a.p3.y), n.lineTo(f ? h(a.p3.y - b, f) : a.p2.x, a.p3.y - b), n.moveTo(a.p3.x, a.p3.y);
            var j = g(a.p3, a.p4);
            n.lineTo(a.p3.x - b, j ? i(a.p3.x - b, j) : a.p3.y), n.moveTo(a.p4.x, a.p4.y), n.lineTo(a.p4.x + b, j ? i(a.p4.x + b, j) : a.p3.y), n.moveTo(a.p4.x, a.p4.y);
            var k = g(a.p4, a.p1);
            n.lineTo(k ? h(a.p4.y - b, k) : a.p4.x, a.p4.y - b), n.moveTo(a.p1.x, a.p1.y), n.lineTo(k ? h(a.p1.y + b, k) : a.p4.x, a.p1.y + b), n.moveTo(a.p1.x, a.p1.y), n.stroke(), n.closePath()
        }, this.frameEdgesBlink = function(b, c, d) {
            return new Promise(function(e) {
                return b ? (j.frameHole(!0), j.frameEdges({
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0
                }, d), a.Util.delay(c.color).then(function() {
                    return q ? (j.frameHole(!0), j.frameEdges(), a.Util.delay(c["default"]).then(function() {
                        j.frameEdgesBlink(b - 1, c, d).then(e)
                    })) : void e()
                })) : void e()
            })
        }, this.startEdgedBlink = function() {
            q = !0, j.frameEdgesBlink(1, {
                color: .3,
                "default": 1.5
            }).then(function() {
                q && j.startEdgedBlink()
            })
        }, this.startEdgedDoubleBlink = function() {
            q = !0, j.frameEdgesBlink(1, {
                color: .15,
                "default": .15
            }).then(function() {
                return q ? j.frameEdgesBlink(1, {
                    color: .15,
                    "default": 1.5
                }) : void 0
            }).then(function() {
                q && j.startEdgedDoubleBlink()
            })
        }, this.stopEdgedBlink = function() {
            q && (q = !1, j.frameHole(!0), j.frameEdges())
        }, this.clear = function() {
            n.clearRect(0, 0, m.width(), m.height())
        }, this.relocate = function() {
            m.width(d.width()), m.height(d.height()), n.canvas.width = d.width(), n.canvas.height = d.height()
        }, this.updateIdFrame = function(a) {
            e = a
        }, Object.defineProperty(this, "isBlinking", {
            get: function() {
                return q
            },
            set: function(a) {
                q = a
            }
        })
    }
}(EID);