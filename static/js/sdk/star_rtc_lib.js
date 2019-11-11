var StarRtc = window.NameSpace || {};
if (void 0 === APP_PRODUCT_ID) var i = 0,
    APP_PRODUCT_ID = {
        t: i++,
        R: i++,
        O: i++,
        _: i++,
        s: i++,
        S: i++,
        i: i++,
        I: i++,
        A: i++,
        o: i++,
        N: i++
    };
if (void 0 === ACTION_GROUP_ID) {
    i = 0;
    var ACTION_GROUP_ID = {
        M: i++,
        V: i++,
        u: i++,
        C: i++,
        T: i++,
        P: i++
    }
}
if (void 0 === MSG_TYPE) {
    i = 0;
    var MSG_TYPE = {
        L: i++,
        G: i++,
        l: i++,
        D: i++,
        p: i++
    }
}
if (void 0 === MSG_DATA_TYPE) {
    i = 0;
    var MSG_DATA_TYPE = {
        U: i++,
        v: i++,
        H: i++,
        k: i++
    }
}
if (void 0 === ENCRYPT_TYPE) {
    i = 0;
    var ENCRYPT_TYPE = {
        m: i++,
        g: i++
    }
}
if (void 0 === AG_MSG_VOIP_CTRL) var AG_MSG_VOIP_CTRL = {
    h: 1e3,
    Y: 1100,
    F: 1001,
    K: 1002,
    W: 1003,
    B: 1004
};
if (void 0 === CHATROOM_LIST_TYPE) {
    i = 0;
    var CHATROOM_LIST_TYPE = {
        CHATROOM_LIST_TYPE_CHATROOM: i++,
        CHATROOM_LIST_TYPE_LIVE: i++,
        CHATROOM_LIST_TYPE_LIVE_PUSH: i++,
        CHATROOM_LIST_TYPE_MEETING: i++,
        CHATROOM_LIST_TYPE_MEETING_PUSH: i++,
        CHATROOM_LIST_TYPE_CLASS: i++,
        CHATROOM_LIST_TYPE_CLASS_PUSH: i++,
        CHATROOM_LIST_TYPE_AUDIO_LIVE: i++,
        CHATROOM_LIST_TYPE_AUDIO_LIVE_PUSH: i++,
        CHATROOM_LIST_TYPE_SUPER_ROOM: i++,
        CHATROOM_LIST_TYPE_SUPER_ROOM_PUSH: i++
    }
}
if (StarRtc.CHATROOM_LIST_TYPE = CHATROOM_LIST_TYPE, void 0 === LOG_LEVEL) {
    i = 0;
    var LOG_LEVEL = {
        LOG_LEVEL_DEBUG: i++,
        LOG_LEVEL_INFO: i++,
        LOG_LEVEL_WARN: i++,
        LOG_LEVEL_ERROR: i++
    }
}
if (StarRtc.LOG_LEVEL = LOG_LEVEL, StarRtc.logLevel = LOG_LEVEL.LOG_LEVEL_DEBUG, StarRtc.noop = function() {}, StarRtc.InitlogLevel = function(e) {
        switch (StarRtc.debug = StarRtc.noop, StarRtc.info = StarRtc.noop, StarRtc.warn = StarRtc.noop, StarRtc.error = StarRtc.noop, e) {
            case LOG_LEVEL.LOG_LEVEL_DEBUG:
                StarRtc.debug = console.log.bind(console);
            case LOG_LEVEL.LOG_LEVEL_INFO:
                StarRtc.info = console.log.bind(console);
            case LOG_LEVEL.LOG_LEVEL_WARN:
                StarRtc.warn = console.warn.bind(console);
            case LOG_LEVEL.LOG_LEVEL_ERROR:
                StarRtc.error = console.error.bind(console)
        }
        StarRtc.logLevel = e
    }, StarRtc.InitlogLevel(StarRtc.logLevel), void 0 === AG_MSG) {
    i = 0;
    var AG_MSG = {
        q: i++,
        J: i++,
        j: i++,
        X: i++,
        Z: i++,
        $: i++,
        ee: i++,
        te: i++,
        Re: i++,
        ae: i++,
        Oe: i++,
        Ee: i++,
        _e: i++,
        re: i++,
        ne: i++,
        se: i++,
        ce: i++,
        Se: i++,
        ie: i++,
        Ie: i++,
        Ae: i++,
        oe: i++,
        Ne: i++,
        Me: i++,
        Ve: i++,
        ue: i++,
        Ce: i++,
        Te: i++,
        Pe: i++,
        Le: i++,
        Ge: i++,
        le: i++,
        fe: i++,
        De: i++,
        pe: i++,
        Ue: i++,
        de: i++,
        ve: i++,
        be: i++,
        He: i++,
        ke: i++,
        me: i++,
        ge: i++,
        we: i++,
        ye: i++
    }
}
if (void 0 === CHAT_ROOM_TYPE) {
    i = 1;
    var CHAT_ROOM_TYPE = {
        he: i++,
        xe: i++
    }
}
if (void 0 === AG_CHATROOMMOONSERVER) {
    i = 0;
    var AG_CHATROOMMOONSERVER = {
        Ye: i++,
        Fe: i++,
        Ke: i++,
        We: i++,
        Be: i++,
        qe: i++,
        Je: i++,
        Qe: i++,
        je: i++,
        Xe: i++,
        ze: i++,
        Ze: i++,
        $e: i++,
        et: i++,
        tt: i++,
        Rt: i++,
        at: i++,
        Ot: i++,
        Et: i++,
        _t: i++,
        rt: i++,
        nt: i++,
        st: i++,
        ct: i++,
        St: i++,
        it: i++,
        It: i++,
        At: i++,
        ot: i++,
        Nt: i++,
        Mt: i++,
        Vt: i++,
        ut: i++,
        Ct: i++,
        Tt: i++,
        Pt: i++,
        Lt: i++,
        Gt: i++,
        lt: i++,
        ft: i++,
        Dt: i++,
        pt: i++,
        Ut: i++,
        dt: i++,
        vt: i++
    }
}
if (void 0 === AG_VOIPMOONSERVER) {
    i = 0;
    var AG_VOIPMOONSERVER = {
        bt: i++,
        Ht: i++,
        kt: i++,
        gt: i++,
        wt: i++,
        yt: i++,
        ht: i++,
        xt: i++,
        Yt: i++,
        Ft: i++,
        Kt: i++,
        Wt: i++,
        Bt: i++,
        qt: i++,
        Jt: i++,
        Qt: i++,
        jt: i++,
        Xt: i++,
        zt: i++,
        Zt: i++,
        $t: i++,
        eR: i++,
        tR: i++,
        RR: i++,
        aR: i++,
        OR: i++,
        ER: i++,
        _R: i++,
        rR: i++,
        nR: i++,
        sR: i++,
        cR: i++,
        SR: i++,
        iR: i++,
        IR: i++,
        AR: i++,
        oR: i++,
        NR: i++,
        MR: i++
    }
}
if (void 0 === AG_LIVESRCMOONSERVER) {
    i = 0;
    var AG_LIVESRCMOONSERVER = {
        VR: i++,
        uR: i++,
        CR: i++,
        TR: i++,
        PR: i++,
        LR: i++,
        GR: i++,
        lR: i++,
        fR: i++,
        DR: i++,
        pR: i++,
        UR: i++,
        dR: i++,
        vR: i++,
        bR: i++,
        HR: i++,
        kR: i++,
        mR: i++,
        gR: i++,
        wR: i++,
        yR: i++,
        hR: i++,
        xR: i++,
        YR: i++,
        FR: i++,
        KR: i++,
        WR: i++,
        BR: i++,
        qR: i++,
        JR: i++,
        QR: i++,
        jR: i++,
        XR: i++,
        zR: i++,
        ZR: i++,
        $R: i++,
        ea: i++,
        ta: i++,
        Ra: i++,
        aa: i++,
        Oa: i++,
        Ea: i++,
        _a: i++,
        ra: i++,
        na: i++,
        sa: i++,
        ca: i++,
        Sa: i++,
        ia: i++,
        Ia: i++,
        Aa: i++,
        oa: i++,
        Na: i++,
        Ma: i++,
        Va: i++,
        ua: i++,
        Ca: i++,
        Ta: i++,
        Pa: i++,
        La: i++,
        Ga: i++,
        la: i++,
        fa: i++,
        Da: i++,
        pa: i++,
        Ua: i++,
        da: i++,
        va: i++,
        ba: i++,
        Ha: i++,
        ka: i++,
        ma: i++,
        ga: i++,
        wa: i++,
        ya: i++,
        ha: i++,
        xa: i++,
        Ya: i++,
        Fa: i++
    }
}
if (void 0 === AG_LIVEVDNMOONSERVER) {
    i = 0;
    var AG_LIVEVDNMOONSERVER = {
        Ka: i++,
        Wa: i++,
        Ba: i++,
        qa: i++,
        Ja: i++,
        Qa: i++,
        ja: i++,
        Xa: i++,
        za: i++,
        Za: i++,
        $a: i++,
        eO: i++,
        tO: i++,
        RO: i++,
        aO: i++,
        OO: i++,
        EO: i++,
        _O: i++,
        rO: i++,
        nO: i++,
        sO: i++,
        cO: i++,
        SO: i++,
        iO: i++
    }
}

function clone(e) {
    if (null == e || "object" != typeof e) return e;
    if (e instanceof Date) return (t = new Date).setTime(e.getTime()), t;
    if (e instanceof Array) {
        for (var t = [], R = e.length, a = 0; a < R; ++a) t[a] = clone(e[a]);
        return t
    }
    if (e instanceof Object) {
        t = {};
        for (var O in e) e.hasOwnProperty(O) && (t[O] = clone(e[O]));
        return t
    }
    throw new Error("Unable to copy obj! Its type isn't supported.")
}
StarRtc.AUtils = new function() {
    var e = this;

    function L(e, t) {
        for (var R = q(e), a = J(w(R.length.toString(16))), O = q(t), E = J(w(O.length.toString(16))), _ = new Uint8Array(R.length + O.length + 8), r = 0, n = a.length, s = r; s < n; s++) _[s] = a[s - r];
        n = (r = n) + R.length;
        for (s = r; s < n; s++) _[s] = R[s - r];
        n = (r = n) + E.length;
        for (s = r; s < n; s++) _[s] = E[s - r];
        n = (r = n) + O.length;
        for (s = r; s < n; s++) _[s] = O[s - r];
        return _
    }

    function b(e) {
        var t = new Uint8Array(e),
            R = 0,
            a = parseInt("0x" + k(t.slice(R, R + 4)));
        R += 4;
        var O = H(t.slice(R, R + a));
        R += a;
        var E = parseInt("0x" + k(t.slice(R, R + 4)));
        return R += 4, {
            digest: O,
            content: H(t.slice(R, R + E))
        }
    }

    function w(e) {
        var t = 8 - e.length;
        return "00000000".substr(0, t) + e
    }

    function W(e) {
        var t = 4 - e.length;
        return "0000".substr(0, t) + e
    }

    function B(e, t) {
        var R = new Array(e + 1).join("0"),
            a = e - t.length;
        return R.substr(0, a) + t
    }

    function q(e) {
        var t, R, a = new Array;
        t = e.length;
        for (var O = 0; O < t; O++) 65536 <= (R = e.charCodeAt(O)) && R <= 1114111 ? (a.push(R >> 18 & 7 | 240), a.push(R >> 12 & 63 | 128), a.push(R >> 6 & 63 | 128), a.push(63 & R | 128)) : 2048 <= R && R <= 65535 ? (a.push(R >> 12 & 15 | 224), a.push(R >> 6 & 63 | 128), a.push(63 & R | 128)) : 128 <= R && R <= 2047 ? (a.push(R >> 6 & 31 | 192), a.push(63 & R | 128)) : a.push(255 & R);
        return a
    }

    function H(e) {
        if ("string" == typeof e) return e;
        for (var t = "", R = e, a = 0; a < R.length; a++) {
            var O = R[a].toString(2),
                E = O.match(/^1+?(?=0)/);
            if (E && 8 == O.length) {
                for (var _ = E[0].length, r = R[a].toString(2).slice(7 - _), n = 1; n < _; n++) r += R[n + a].toString(2).slice(2);
                t += String.fromCharCode(parseInt(r, 2)), a += _ - 1
            } else t += String.fromCharCode(R[a])
        }
        return t
    }

    function J(e) {
        var t = 0,
            R = e.length;
        if (R % 2 != 0) return null;
        R /= 2;
        for (var a = new Array, O = 0; O < R; O++) {
            var E = e.substr(t, 2),
                _ = parseInt("0x" + E);
            a.push(_), t += 2
        }
        return a
    }

    function k(e) {
        for (var t = "", R = 0; R < e.length; R++) {
            var a = e[R].toString(16);
            1 == a.length && (a = "0" + a), t += a
        }
        return t
    }

    function Q(e, t, R) {
        var a = t;
        for (var O in R)
            for (var E = R[O], _ = 0; _ < E.length; _++, a++) e[a] = E[_]
    }
    e.parseProtocol = function(e, c) {
        var t = new Blob([e], {
                type: "text/plain"
            }),
            S = new FileReader;
        S.readAsArrayBuffer(t), S.onload = function(e) {
            var t = new Uint8Array(S.result);
            StarRtc.debug("parseProtocol:", t);
            var R = t[0],
                a = t.slice(1, 5),
                O = t[5],
                E = t.slice(6, 8),
                _ = t.slice(8, 10),
                r = t[10],
                n = t.slice(11, t.byteLength - 2);
            StarRtc.debug("parseProtocol: msgArr = ", n);
            var s = t.slice(t.byteLength - 2, t.byteLength);
            c({
                appid: R,
                plength: a,
                appver: O,
                rese1: E,
                rese2: _,
                actionid: r,
                msgArr: n,
                end: s
            })
        }
    }, e.packageProtocol = function(e, t, R) {
        var a = e,
            O = new Array(255, 255),
            E = new Array(255, 255),
            _ = t,
            r = (new Array(18, 52), R),
            n = new Uint8Array(r),
            s = J(w((r.byteLength + 12).toString(16))),
            c = new ArrayBuffer(r.byteLength + 13),
            S = new Uint8Array(c);
        S[0] = a;
        for (var i = 1; i < 5; i++) S[i] = s[i - 1];
        S[5] = 1, S[6] = O[0], S[7] = O[1], S[8] = E[0], S[9] = E[1], S[10] = _;
        for (i = 11; i < 11 + n.byteLength; i++) S[i] = n[i - 11];
        return S[11 + n.byteLength] = 18, S[12 + n.byteLength] = 52, StarRtc.debug("packageProtocol", S), S
    }, e.constructAuthMsg = function(e) {
        e.agentId, e.userId;
        for (var t = e.starUid, R = e.starToken, a = J(W(AG_MSG.q.toString(16))), O = q(t), E = J(W(O.length.toString(16))), _ = q(R), r = new Uint8Array(O.length + 36), n = 0, s = a.length, c = n; c < s; c++) r[c] = a[c];
        s = (n = s) + E.length;
        for (c = n; c < s; c++) r[c] = E[c - n];
        s = (n = s) + O.length;
        for (c = n; c < s; c++) r[c] = O[c - n];
        s = (n = s) + _.length;
        for (c = n; c < s; c++) r[c] = _[c - n];
        n = 0;
        var S = [];
        return S.push(a), S.push(E), S.push(O), S.push(_), Q(r, n, S), r
    }, e.constructMsgProtocol = function(e, t, R) {
        R.agentId, R.userId;
        var a, O = R.starUid,
            E = R.starToken,
            _ = [],
            r = J(W(e.toString(16))),
            n = q(O),
            s = J(W(n.length.toString(16)));
        J(W(q(E).length.toString(16)));
        switch (e) {
            case AG_MSG.ee:
                var c = J(w(t.reqIndex.toString(16))),
                    S = J(w((A = q(t.addUsers)).length.toString(16))),
                    i = J(w((o = q(t.userDefineData)).length.toString(16)));
                a = new Uint8Array(6 + (2 + n.length) + (4 + A.length) + (4 + o.length)), _.push(r), _.push(c), _.push(s), _.push(n), _.push(S), _.push(A), _.push(i), _.push(o);
                break;
            case AG_MSG.te:
                c = J(w(t.reqIndex.toString(16)));
                var I = J(W((V = q(R.agentId + "_" + t.groupId)).length.toString(16)));
                a = new Uint8Array(6 + (2 + V.length) + (2 + n.length)), _.push(r), _.push(c), _.push(I), _.push(V), _.push(s), _.push(n);
                break;
            case AG_MSG.Re:
                var A;
                c = J(w(t.reqIndex.toString(16))), I = J(W((V = q(R.agentId + "_" + t.groupId)).length.toString(16))), S = J(w((A = q(t.addUsers)).length.toString(16))), i = J(w((o = q(t.userDefineData)).length.toString(16)));
                a = new Uint8Array(6 + (2 + V.length) + (2 + n.length) + (4 + A.length) + (4 + o.length)), _.push(r), _.push(c), _.push(I), _.push(V), _.push(s), _.push(n), _.push(S), _.push(A), _.push(i), _.push(o);
                break;
            case AG_MSG.ae:
                c = J(w(t.reqIndex.toString(16))), I = J(W((V = q(R.agentId + "_" + t.groupId)).length.toString(16)));
                var o, N = q(t.removeUsers),
                    M = J(w(N.length.toString(16)));
                i = J(w((o = q(t.userDefineData)).length.toString(16)));
                a = new Uint8Array(6 + (2 + V.length) + (2 + n.length) + (4 + N.length)), _.push(r), _.push(c), _.push(I), _.push(V), _.push(s), _.push(n), _.push(M), _.push(N);
                break;
            case AG_MSG.Oe:
            case AG_MSG.Ee:
                c = J(w(t.reqIndex.toString(16))), I = J(W((V = q(R.agentId + "_" + t.groupId)).length.toString(16)));
                a = new Uint8Array(6 + (2 + V.length) + (2 + n.length)), _.push(r), _.push(c), _.push(I), _.push(V), _.push(s), _.push(n);
                break;
            case AG_MSG._e:
            case AG_MSG.re:
                break;
            case AG_MSG.de:
                c = J(w(t.reqIndex.toString(16)));
                a = new Uint8Array(6 + (2 + n.length)), _.push(r), _.push(c), _.push(s), _.push(n);
                break;
            case AG_MSG.be:
                var V;
                c = J(w(t.reqIndex.toString(16))), I = J(W((V = q(R.agentId + "_" + t.groupId)).length.toString(16)));
                a = new Uint8Array(6 + (2 + n.length) + (2 + V.length)), _.push(r), _.push(c), _.push(s), _.push(n), _.push(I), _.push(V);
                break;
            case AG_MSG.ke:
                a = new Uint8Array(2), _.push(r);
                break;
            case AG_MSG.ge:
                a = new Uint8Array(4);
                var u = J(W(t.reqPageNum.toString(16)));
                _.push(r), _.push(u)
        }
        return Q(a, 0, _), a
    }, e.constructSingleMsg = function(e, t, R, a, O, E) {
        var _ = E.agentId,
            r = E.userId,
            n = E.starUid,
            s = (E.starToken, J(W(AG_MSG.$.toString(16)))),
            c = q(n),
            S = J(W(c.length.toString(16))),
            i = q(_ + "_" + e),
            I = J(W(i.length.toString(16))),
            A = J(w(t.toString(16))),
            o = ENCRYPT_TYPE.m,
            N = MSG_DATA_TYPE.v;
        null != O && (N = O);
        var M = {
                fromId: r,
                targetId: e,
                time: (new Date).getTime(),
                msgIndex: t,
                type: 1,
                code: 0,
                contentData: a
            },
            V = L(R, JSON.stringify(M)),
            u = J(w(V.length.toString(16))),
            C = new Uint8Array(c.length + i.length + V.length + 16),
            T = [];
        return T.push(s), T.push(S), T.push(c), T.push(I), T.push(i), T.push(A), T.push([o]), T.push([N]), T.push(u), T.push(V), Q(C, 0, T), C
    }, e.constructGroupMsg = function(e, t, R, a, O) {
        var E = O.agentId,
            _ = O.userId,
            r = O.starUid,
            n = (O.starToken, J(W(AG_MSG.ne.toString(16)))),
            s = q(""),
            c = J(W(s.length.toString(16))),
            S = J(w(t.toString(16))),
            i = q(E + "_" + e),
            I = J(W(i.length.toString(16))),
            A = q(r),
            o = J(W(A.length.toString(16))),
            N = ENCRYPT_TYPE.m,
            M = MSG_DATA_TYPE.v,
            V = {
                fromId: _,
                targetId: e,
                time: (new Date).getTime(),
                msgIndex: t,
                type: 1,
                code: 0,
                contentData: a
            },
            u = L(R, JSON.stringify(V)),
            C = J(w(u.length.toString(16))),
            T = new Uint8Array(s.length + i.length + A.length + u.length + 18),
            P = [];
        return P.push(n), P.push(c), P.push(s), P.push(S), P.push(I), P.push(i), P.push(o), P.push(A), P.push([N]), P.push([M]), P.push(C), P.push(u), Q(T, 0, P), T
    }, e.constructReceivedMsg = function(e, t) {
        t.agentId, t.userId;
        var R = t.starUid,
            a = (t.starToken, J(W(AG_MSG.Ce.toString(16)))),
            O = q(R),
            E = J(W(O.length.toString(16))),
            _ = new Uint8Array(e),
            r = new Uint8Array(O.length + 12),
            n = [];
        return n.push(a), n.push(E), n.push(O), n.push(_), Q(r, 0, n), r
    }, e.constructSingleCtrlMsg = function(e, t, R, a, O, E) {
        var _ = E.agentId,
            r = E.userId,
            n = E.starUid,
            s = (E.starToken, J(W(AG_MSG.$.toString(16)))),
            c = q(n),
            S = J(W(c.length.toString(16))),
            i = q(_ + "_" + e),
            I = J(W(i.length.toString(16))),
            A = J(w(t.toString(16))),
            o = ENCRYPT_TYPE.m,
            N = MSG_DATA_TYPE.U,
            M = {
                fromId: r,
                targetId: e,
                time: (new Date).getTime(),
                msgIndex: t,
                type: 0,
                code: parseInt(O),
                contentData: a
            },
            V = L(R, JSON.stringify(M)),
            u = J(w(V.length.toString(16))),
            C = new Uint8Array(c.length + i.length + V.length + 16),
            T = [];
        return T.push(s), T.push(S), T.push(c), T.push(I), T.push(i), T.push(A), T.push([o]), T.push([N]), T.push(u), T.push(V), Q(C, 0, T), C
    }, e.constructVOIPProtocol = function(e, t, R) {
        var a, O = R.agentId,
            E = (R.userId, R.starUid),
            _ = R.starToken,
            r = [],
            n = J(W(e.toString(16))),
            s = q(E),
            c = J(W(s.length.toString(16))),
            S = q(_),
            i = J(W(S.length.toString(16)));
        switch (e) {
            case AG_VOIPMOONSERVER.gt:
            case AG_VOIPMOONSERVER.yt:
                var I = q(O + "_" + t.targetId),
                    A = J(W(I.length.toString(16))),
                    o = J(B(8, parseInt(t.audioSSRC).toString(16))),
                    N = J(B(8, parseInt(t.videoSSRC).toString(16))),
                    M = J(B(2, parseInt(t.videoCodec).toString(16))),
                    V = J(B(2, parseInt(t.audioCodec).toString(16)));
                a = new Uint8Array(2 + (2 + s.length) + (2 + S.length) + (2 + I.length) + 4 + 4 + 1 + 1), r.push(n), r.push(c), r.push(s), r.push(i), r.push(S), r.push(A), r.push(I), r.push(o), r.push(N), r.push(M), r.push(V);
                break;
            case AG_VOIPMOONSERVER.Yt:
                var u = t.isActive;
                a = new Uint8Array(3), r.push(n), r.push([u])
        }
        return Q(a, 0, r), a
    }, e.constructSrcProtocol = function(e, t, R) {
        R.agentId;
        var a = R.userId,
            O = R.starUid,
            E = R.starToken,
            _ = [],
            r = J(W(e.toString(16))),
            n = J(W((M = q(O)).length.toString(16))),
            s = J(W((v = q(E)).length.toString(16)));
        switch (e) {
            case AG_LIVESRCMOONSERVER.Fa:
            case AG_LIVESRCMOONSERVER.mR:
            case AG_LIVESRCMOONSERVER.gR:
                var c = J(W(t.conCurrentNum.toString(16))),
                    S = J(W((0).toString(16))),
                    i = J(W((o = q(t.roomId)).length.toString(16))),
                    I = t.liveType,
                    A = J(W((C = q(t.extra)).length.toString(16)));
                Y = new Uint8Array(2 + (2 + M.length) + (2 + v.length) + 2 + 2 + (2 + o.length) + 1 + (2 + C.length)), _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(c), _.push(S), _.push(i), _.push(o), _.push([I]), _.push(A), _.push(C);
                break;
            case AG_LIVESRCMOONSERVER.wR:
                c = J(W(t.conCurrentNum.toString(16))), S = J(W(t.validTime.toString(16))), i = J(W((o = q(t.roomId)).length.toString(16))), A = J(W((C = q(t.extra)).length.toString(16)));
                var o, N = J(W((T = q(t.spec)).length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(c), _.push(S), _.push(i), _.push(o), _.push(A), _.push(C), _.push(N), _.push(T);
                break;
            case AG_LIVESRCMOONSERVER.yR:
                n = J(W((M = q(a)).length.toString(16))), s = J(W((v = q(E)).length.toString(16))), S = J(W((0).toString(16)));
                var M, V = J(W((u = q(t.groupId)).length.toString(16)));
                A = J(W((C = q(t.extra)).length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(S), _.push(V), _.push(u), _.push(A), _.push(C);
                break;
            case AG_LIVESRCMOONSERVER.hR:
                var u, C, T;
                S = J(W((0).toString(16))), V = J(W((u = q(t.groupId)).length.toString(16))), A = J(W((C = q(t.extra)).length.toString(16))), N = J(W((T = q(t.spec)).length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(S), _.push(V), _.push(u), _.push(A), _.push(C), _.push(N), _.push(T);
                break;
            case AG_LIVESRCMOONSERVER.xR:
                var P = q(t.channelId),
                    L = q(t.avParam),
                    G = J(W(L.length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(P), _.push(G), _.push(L);
                break;
            case AG_LIVESRCMOONSERVER.FR:
                P = q(t.channelId);
                var l = J(W((f = q(t.upUserId)).length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(P), _.push(l), _.push(f);
                break;
            case AG_LIVESRCMOONSERVER.KR:
            case AG_LIVESRCMOONSERVER.WR:
            case AG_LIVESRCMOONSERVER.BR:
                var f;
                P = q(t.channelId), l = J(W((f = q(t.upUserId)).length.toString(16)));
                _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(P), _.push(l), _.push(f);
                break;
            case AG_LIVESRCMOONSERVER.qR:
            case AG_LIVESRCMOONSERVER.JR:
                P = q(t.channelId);
                Y = new Uint8Array(2 + (2 + M.length) + (2 + v.length) + 16), _.push(r), _.push(n), _.push(M), _.push(s), _.push(v), _.push(P);
                break;
            case AG_LIVESRCMOONSERVER.QR:
                for (var D = t.streamConfig, p = new Uint8Array(16), U = 0; U < 16; U++) null != D[U] ? p[U] = D[U] : p[U] = 0;
                Y = new Uint8Array(18), _.push(r), _.push(p);
                break;
            case AG_LIVESRCMOONSERVER.jR:
                P = q(t.channelId);
                _.push(r), _.push(P);
                break;
            case AG_LIVESRCMOONSERVER.zR:
                _.push(r);
                break;
            case AG_LIVESRCMOONSERVER.XR:
                var d = q(t.streamData);
                Y = new Uint8Array(3 + d.length), _.push(r), _.push([t.streamDataType]), _.push(d);
                break;
            case AG_LIVESRCMOONSERVER.YR:
                var v, b = q(O),
                    H = J(W(b.length.toString(16))),
                    k = (s = J(W((v = q(E)).length.toString(16))), P = q(t.channelId), J(B(8, parseInt(t.audioSSRC).toString(16)))),
                    m = J(B(8, parseInt(t.smallVideoSSRC).toString(16))),
                    g = J(B(8, parseInt(t.bigVideoSSRC).toString(16))),
                    w = J(B(2, parseInt(t.videoCodec).toString(16))),
                    y = J(B(2, parseInt(t.audioCodec).toString(16))),
                    h = J(W((F = q(t.iceUfrag)).length.toString(16))),
                    x = J(W((K = q(t.icePwd)).length.toString(16))),
                    Y = new Uint8Array(b.length + v.length + 34 + 1 + 1 + 2 + F.length + 2 + K.length);
                _.push(r), _.push(H), _.push(b), _.push(s), _.push(v), _.push(P), _.push(k), _.push(m), _.push(g), _.push(w), _.push(y), _.push(F), _.push(K);
                break;
            case AG_LIVESRCMOONSERVER.ha:
                var F, K;
                h = J(W((F = q(t.iceUfrag)).length.toString(16))), x = J(W((K = q(t.icePwd)).length.toString(16)));
                Y = new Uint8Array(4 + F.length + 2 + K.length), _.push(r), _.push(h), _.push(F), _.push(x), _.push(K)
        }
        return Q(Y, 0, _), Y
    }, e.constructVdnProtocol = function(e, t, R) {
        R.agentId, R.userId;
        var a, O = R.starUid,
            E = R.starToken,
            _ = [],
            r = J(W(e.toString(16))),
            n = q(O),
            s = J(W(n.length.toString(16))),
            c = q(E),
            S = J(W(c.length.toString(16)));
        switch (e) {
            case AG_LIVEVDNMOONSERVER.Ba:
                var i = q(t.iceUfrag),
                    I = J(W(i.length.toString(16))),
                    A = q(t.icePwd),
                    o = J(W(A.length.toString(16)));
                a = new Uint8Array(4 + i.length + 2 + A.length), _.push(r), _.push(I), _.push(i), _.push(o), _.push(A);
                break;
            case AG_LIVEVDNMOONSERVER.qa:
                var N = q(t.channelId);
                a = new Uint8Array(18 + (2 + n.length) + (2 + c.length)), _.push(r), _.push(N), _.push(s), _.push(n), _.push(S), _.push(c);
                break;
            case AG_LIVEVDNMOONSERVER.Ja:
            case AG_LIVEVDNMOONSERVER.Qa:
                a = new Uint8Array(2), _.push(r);
                break;
            case AG_LIVEVDNMOONSERVER.za:
            case AG_LIVEVDNMOONSERVER.ja:
                N = q(t.channelId);
                a = new Uint8Array(18), _.push(r), _.push(N);
                break;
            case AG_LIVEVDNMOONSERVER.Xa:
                for (var M = t.streamConfig, V = new Uint8Array(16), u = 0; u < 16; u++) null != M[u] ? V[u] = M[u] : V[u] = 0;
                a = new Uint8Array(18), _.push(r), _.push(V)
        }
        return Q(a, 0, _), a
    }, e.constructChatProtocol = function(e, t, R) {
        var a, O = R.agentId,
            E = R.userId,
            _ = R.starUid,
            r = R.starToken,
            n = [],
            s = J(W(e.toString(16))),
            c = q(_),
            S = J(W(c.length.toString(16))),
            i = q(r),
            I = J(W(i.length.toString(16)));
        if (e == AG_CHATROOMMOONSERVER.Ye) {
            var A = t.roomType,
                o = J(W(t.conCurrentNum.toString(16))),
                N = J(w((d = q(t.userDefineData)).length.toString(16)));
            a = new Uint8Array(2 + (2 + c.length) + (2 + i.length) + 1 + 2 + (4 + d.length)), n.push(s), n.push(S), n.push(c), n.push(I), n.push(i), n.push([A]), n.push(o), n.push(N), n.push(d)
        } else if (e == AG_CHATROOMMOONSERVER.Fe) a = new Uint8Array(2), n.push(s);
        else if (e == AG_CHATROOMMOONSERVER.Ke) {
            var M = q(O + "_" + t.banUserId),
                V = J(W(M.length.toString(16))),
                u = J(W(t.banTime.toString(16)));
            a = new Uint8Array(2 + (2 + M.length) + 2), n.push(s), n.push(V), n.push(M), n.push(u)
        } else if (e == AG_CHATROOMMOONSERVER.We) {
            var C = q(O + "_" + t.kickOutUserId),
                T = J(W(C.length.toString(16)));
            a = new Uint8Array(2 + (2 + C.length)), n.push(s), n.push(T), n.push(C)
        } else if (e == AG_CHATROOMMOONSERVER.Be) a = new Uint8Array(2), n.push(s);
        else if (e == AG_CHATROOMMOONSERVER.qe) {
            var P = q(t.roomId);
            a = new Uint8Array(2 + (2 + c.length) + (2 + i.length) + 16), n.push(s), n.push(S), n.push(c), n.push(I), n.push(i), n.push(P)
        } else if (e == AG_CHATROOMMOONSERVER.Je);
        else if (e == AG_CHATROOMMOONSERVER.Qe) a = new Uint8Array(2), n.push(s);
        else if (e == AG_CHATROOMMOONSERVER.je) {
            var L = {
                    fromId: E,
                    targetId: t.roomId,
                    time: (new Date).getTime(),
                    msgIndex: t.msgIndex,
                    type: 1,
                    code: 0,
                    contentData: t.msg
                },
                G = q(JSON.stringify(L)),
                l = J(w(G.length.toString(16)));
            a = new Uint8Array(2 + (4 + G.length)), n.push(s), n.push(l), n.push(G)
        } else if (e == AG_CHATROOMMOONSERVER.Xe) {
            L = {
                fromId: E,
                targetId: t.roomId,
                time: (new Date).getTime(),
                msgIndex: t.msgIndex,
                type: parseInt(t.type),
                code: parseInt(t.code),
                contentData: t.msg
            };
            var f = q(JSON.stringify(L)),
                D = J(w(f.length.toString(16))),
                p = q(O + "_" + t.toUserId),
                U = J(W(p.length.toString(16)));
            a = new Uint8Array(2 + (2 + p.length) + (4 + f.length)), n.push(s), n.push(U), n.push(p), n.push(D), n.push(f)
        } else if (e == AG_CHATROOMMOONSERVER.ze) {
            P = q(t.roomId);
            a = new Uint8Array(18), n.push(s), n.push(P)
        } else if (e == AG_CHATROOMMOONSERVER.Gt) {
            var d, v = J(W((H = q(E)).length.toString(16))),
                b = J(W(t.listType.toString(16)));
            N = J(w((d = q(t.userDefineData)).length.toString(16))), P = q(t.roomId);
            a = new Uint8Array(4 + (2 + H.length) + 16 + (4 + d.length)), n.push(s), n.push(b), n.push(v), n.push(H), n.push(P), n.push(N), n.push(d)
        } else if (e == AG_CHATROOMMOONSERVER.Dt) {
            b = J(W(t.listType.toString(16))), P = q(t.roomId), v = J(W((H = q(E)).length.toString(16)));
            a = new Uint8Array(4 + (2 + H.length) + 16), n.push(s), n.push(b), n.push(v), n.push(H), n.push(P)
        } else if (e == AG_CHATROOMMOONSERVER.dt) {
            var H, k = q(t.listTypes),
                m = J(W(k.length.toString(16))),
                g = J(W((H = q(t.userId)).length.toString(16)));
            a = new Uint8Array(2 + (2 + k.length) + (2 + H.length)), n.push(s), n.push(m), n.push(k), n.push(g), n.push(H)
        }
        return Q(a, 0, n), a
    }, e.parseMessage = function(e, t) {
        var R = new Uint8Array(e);
        switch (parseInt("0x" + k(R.slice(0, 2)))) {
            case AG_MSG.J:
                R = new Uint8Array(e);
                var a = parseInt("0x" + k(R.slice(2, 4)));
                StarRtc.info("登录成功，最大消息长度：", a), t({
                    status: "success",
                    msgMaxLen: a
                }, "onLoginMessage");
                break;
            case AG_MSG.j:
                StarRtc.warn("登录失败"), t({
                    status: "failed"
                }, "onLoginMessage");
                break;
            case AG_MSG.Z:
                StarRtc.debug("心跳反馈");
                break;
            case AG_MSG.Ve:
                StarRtc.debug("服务器收到消息");
                break;
            case AG_MSG.ue:
                StarRtc.info("收到消息");
                parseInt("0x" + k(R.slice(10, 14)));
                var O = 15;
                switch (R[14]) {
                    case MSG_TYPE.L:
                        StarRtc.info("单聊消息");
                        var E = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        var _ = H(R.slice(O, O + E)),
                            r = R[O += E];
                        switch (O += 1, r) {
                            case ENCRYPT_TYPE.m:
                                var n = parseInt("0x" + k(R.slice(O, O + 4)));
                                O += 4;
                                var s = b(R.slice(O, O + n));
                                StarRtc.debug(_, s.digest, s.content), 2 == (i = _.split("_")).length && (_ = i[1]), t(e = {
                                    fromId: _,
                                    digest: s.digest,
                                    msg: s.content,
                                    msgNode: R.slice(2, 10)
                                }, "onSingleMessage");
                                break;
                            case ENCRYPT_TYPE.g:
                        }
                        break;
                    case MSG_TYPE.G:
                        StarRtc.info("群消息");
                        var c = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        var S = H(R.slice(O, O + c));
                        O += c;
                        E = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        _ = H(R.slice(O, O + E)), r = R[O += E];
                        switch (O += 1, r) {
                            case ENCRYPT_TYPE.m:
                                n = parseInt("0x" + k(R.slice(O, O + 4)));
                                O += 4;
                                s = b(R.slice(O, O + n));
                                StarRtc.debug(S, _, s.digest, s.content), 2 == (i = _.split("_")).length && (_ = i[1]), 2 == (I = S.split("_")).length && (S = I[1]), t(e = {
                                    groupId: S,
                                    fromId: _,
                                    digest: s.digest,
                                    msg: s.content,
                                    msgNode: R.slice(2, 10)
                                }, "onGroupMessage");
                                break;
                            case ENCRYPT_TYPE.g:
                        }
                        break;
                    case MSG_TYPE.l:
                        StarRtc.info("群私信消息");
                        c = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        S = H(R.slice(O, O + c));
                        O += c;
                        E = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        _ = H(R.slice(O, O + E)), r = R[O += E];
                        switch (O += 1, r) {
                            case ENCRYPT_TYPE.m:
                                n = parseInt("0x" + k(R.slice(O, O + 4)));
                                O += 4;
                                var i;
                                s = b(R.slice(O, O + n));
                                StarRtc.debug(S, _, s.digest, s.content), 2 == (i = _.split("_")).length && (_ = i[1]), 2 == (I = S.split("_")).length && (S = I[1]), t(e = {
                                    groupId: S,
                                    fromId: _,
                                    digest: s.digest,
                                    msg: s.content,
                                    msgNode: R.slice(2, 10)
                                }, "onGroupPrivateMessage");
                                break;
                            case ENCRYPT_TYPE.g:
                        }
                        break;
                    case MSG_TYPE.D:
                        StarRtc.info("推送群信息");
                        c = parseInt("0x" + k(R.slice(O, O + 2)));
                        O += 2;
                        S = H(R.slice(O, O + c));
                        O += c;
                        n = parseInt("0x" + k(R.slice(O, O + 4)));
                        O += 4;
                        var I;
                        s = b(R.slice(O, O + n));
                        StarRtc.debug(S, s.digest, s.content), 2 == (I = S.split("_")).length && (S = I[1]), t(e = {
                            groupId: S,
                            digest: s.digest,
                            msg: s.content,
                            msgNode: R.slice(2, 10)
                        }, "onGroupPushMessage");
                        break;
                    case MSG_TYPE.p:
                        StarRtc.info("推送系统信息");
                        n = parseInt("0x" + k(R.slice(O, O + 4)));
                        O += 4;
                        s = b(R.slice(O, O + n));
                        StarRtc.debug(s.digest, s.content), t(e = {
                            digest: s.digest,
                            msg: s.content,
                            msgNode: R.slice(2, 10)
                        }, "onSystemPushMessage")
                }
                break;
            case AG_MSG.Te:
                var A = parseInt("0x" + k(R.slice(2, 4))),
                    o = H(R.slice(6, R.byteLength));
                StarRtc.error("报错:", A, o), t(e = {
                    errId: A,
                    errStr: o
                }, "onErrorMessage");
                break;
            case AG_MSG.se:
                var N = parseInt("0x" + k(R.slice(2, 4))),
                    M = H(R.slice(4, 4 + N)),
                    V = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4)));
                c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    groupMsgIndex: V,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c)),
                    serverTimestamp: parseInt("0x" + k(R.slice(4 + N + 4 + 2 + c, 4 + N + 4 + 2 + c + 4)))
                }, "onSendGroupMsgFin");
                break;
            case AG_MSG.ce:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N));
                var u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4)));
                c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onCreateGroupFin");
                break;
            case AG_MSG.Se:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onDelGroupFin");
                break;
            case AG_MSG.ie:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onAddGroupUserFin");
                break;
            case AG_MSG.Ie:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onRemoveGroupUserFin");
                break;
            case AG_MSG.Ae:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onSetGroupMsgIgnoreFin");
                break;
            case AG_MSG.oe:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onUnsetGroupMsgIgnoreFin");
                break;
            case AG_MSG.Ne:
                N = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    status: "success",
                    statusStr: M = H(R.slice(4, 4 + N)),
                    reqIndex: u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4)))
                }, "onPushSystemMsgFin");
                break;
            case AG_MSG.Me:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4))), c = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 2)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupId: S = H(R.slice(4 + N + 4 + 2, 4 + N + 4 + 2 + c))
                }, "onPushGroupSystemMsgFin");
                break;
            case AG_MSG.ve:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4)));
                var C = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 4))),
                    T = H(R.slice(4 + N + 4 + 4, 4 + N + 4 + 4 + C)).split(",");
                0 == C && (T = []);
                for (var P = parseInt("0x" + k(R.slice(4 + N + 4 + 4 + C, 4 + N + 4 + 4 + C + 4))), L = H(R.slice(4 + N + 4 + 4 + C + 4, 4 + N + 4 + 4 + C + 4 + P)).split(","), G = parseInt("0x" + k(R.slice(4 + N + 4 + 4 + C + 4 + P, 4 + N + 4 + 4 + C + 4 + P + 4))), l = H(R.slice(4 + N + 4 + 4 + C + 4 + P + 4, 4 + N + 4 + 4 + C + 4 + P + 4 + G)).split(","), f = [], D = 0; D < T.length; D++) {
                    var p = {
                        groupId: T[D],
                        groupName: L[D],
                        creator: l[D]
                    };
                    f.push(p)
                }
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    groupsInfo: f
                }, "onGetGroupList");
                break;
            case AG_MSG.He:
                N = parseInt("0x" + k(R.slice(2, 4))), M = H(R.slice(4, 4 + N)), u = parseInt("0x" + k(R.slice(4 + N, 4 + N + 4)));
                var U = parseInt("0x" + k(R.slice(4 + N + 4, 4 + N + 4 + 4)));
                t({
                    status: "success",
                    statusStr: M,
                    reqIndex: u,
                    userIdList: H(R.slice(4 + N + 4 + 4, 4 + N + 4 + 4 + U)).split(",")
                }, "onGetGroupUserList");
                break;
            case AG_MSG.me:
                t({
                    status: "success",
                    count: parseInt("0x" + k(R.slice(2, 6))),
                    totalPageNum: d = parseInt("0x" + k(R.slice(6, 8)))
                }, "onGetOnlineNumber");
                break;
            case AG_MSG.we:
                var d = parseInt("0x" + k(R.slice(2, 4))),
                    v = parseInt("0x" + k(R.slice(4, 6)));
                U = parseInt("0x" + k(R.slice(6, 10)));
                t({
                    status: "success",
                    totalPageNum: d,
                    reqPageNum: v,
                    userIdList: H(R.slice(10, 10 + U)).split(",")
                }, "onGetAllUserList");
                break;
            case AG_MSG.ye:
                t({
                    status: "failed",
                    totalPageNum: d = parseInt("0x" + k(R.slice(2, 4))),
                    reqPageNum: v = parseInt("0x" + k(R.slice(4, 6)))
                }, "onGetAllUserList")
        }
    }, e.parseSrcMoonServerMessage = function(e, t) {
        var R = new Uint8Array(e);
        switch (parseInt("0x" + k(R.slice(0, 2)))) {
            case AG_LIVESRCMOONSERVER.ta:
                k(R.slice(18, 20));
                var a = parseInt("0x" + k(R.slice(18, 20)));
                t({
                    type: "srcApplyUpload",
                    status: "success",
                    fingerprint: H(R.slice(20, 20 + a))
                });
                break;
            case AG_LIVESRCMOONSERVER.Ra:
                var O = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "srcApplyUpload",
                    status: "failed",
                    msg: i = H(R.slice(4, 4 + O))
                });
                break;
            case AG_LIVESRCMOONSERVER.Pa:
                StarRtc.debug("webrtc心跳反馈");
                break;
            case AG_LIVESRCMOONSERVER.La:
                for (var E = parseInt("0x" + k(R.slice(2, 3))), _ = 3, r = R.length, n = {
                        siv: E,
                        uperInfos: {}
                    }; _ < r;) {
                    var s = parseInt("0x" + k(R.slice(_, _ + 1)));
                    _ += 1;
                    var c = parseInt("0x" + k(R.slice(_, _ + 2)));
                    _ += 2;
                    var S = H(R.slice(_, _ + c));
                    _ += c, n.uperInfos[s] = {
                        upId: s,
                        userId: S
                    }
                }
                t({
                    type: "uperStreamInfoUpdate",
                    status: "success",
                    msg: n
                });
                break;
            case AG_LIVESRCMOONSERVER.Ta:
                t({
                    type: "stopStream",
                    status: "success"
                });
                break;
            case AG_LIVESRCMOONSERVER.Na:
                t({
                    type: "streamConfig",
                    status: "success",
                    channelId: H(R.slice(2, 18))
                });
                break;
            case AG_LIVESRCMOONSERVER.Ma:
                t({
                    type: "streamConfig",
                    status: "failed",
                    channelId: H(R.slice(2, 18))
                });
                break;
            case AG_LIVESRCMOONSERVER.Aa:
                t({
                    type: "delChannel",
                    status: "success",
                    channelId: H(R.slice(2, 18))
                });
                break;
            case AG_LIVESRCMOONSERVER.oa:
                O = parseInt("0x" + k(R.slice(2, 4)));
                var i = H(R.slice(4, 4 + O));
                t({
                    type: "delChannel",
                    status: "failed",
                    channelId: H(R.slice(4 + O, 4 + O + 16)),
                    msg: i
                });
                break;
            case AG_LIVESRCMOONSERVER.ZR:
                t({
                    type: "createChannel",
                    status: "success",
                    channelId: H(R.slice(2, 18))
                });
                break;
            case AG_LIVESRCMOONSERVER.$R:
                O = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "createChannel",
                    status: "failed",
                    msg: i = H(R.slice(4, 4 + O))
                });
                break;
            case AG_LIVESRCMOONSERVER.Ga:
                s = parseInt("0x" + k(R.slice(2, 3))), E = parseInt("0x" + k(R.slice(3, 4)));
                var I = H(R.slice(5));
                t({
                    type: "streamData",
                    status: "success",
                    upId: s,
                    siv: E,
                    streamDataType: parseInt("0x" + k(R.slice(4, 5))),
                    streamData: I
                });
                break;
            case AG_LIVESRCMOONSERVER.la:
                (i = {}).errId = parseInt("0x" + k(R.slice(2, 4))), i.errStrlen = parseInt("0x" + k(R.slice(4, 6))), i.errStr = H(R.slice(6, 6 + i.errStrlen)), t({
                    type: "serverErr",
                    status: "failed",
                    msg: i
                });
                break;
            case AG_LIVESRCMOONSERVER.xa:
                a = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "webrtcReg",
                    status: "success",
                    fingerprint: H(R.slice(4, 4 + a))
                });
                break;
            case AG_LIVESRCMOONSERVER.Ya:
                t({
                    type: "webrtcConnect",
                    status: "success"
                })
        }
    }, e.parseVdnMoonServerMessage = function(e, t) {
        var R = new Uint8Array(e);
        switch (parseInt("0x" + k(R.slice(0, 2)))) {
            case AG_LIVEVDNMOONSERVER.Za:
                var a = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "webrtcReg",
                    status: "success",
                    fingerprint: H(R.slice(4, 4 + a))
                });
                break;
            case AG_LIVEVDNMOONSERVER.$a:
                for (var O = H(R.slice(2, 18)), E = parseInt("0x" + k(R.slice(18, 19))), _ = 19, r = R.length, n = {
                        siv: E,
                        uperInfos: {}
                    }; _ < r;) {
                    var s = parseInt("0x" + k(R.slice(_, _ + 1)));
                    _ += 1;
                    var c = parseInt("0x" + k(R.slice(_, _ + 2)));
                    _ += 2;
                    var S = H(R.slice(_, _ + c));
                    _ += c, n.uperInfos[s] = {
                        upId: s,
                        userId: S
                    }
                }
                t({
                    type: "vdnApplyDownload",
                    status: "success",
                    channelId: O,
                    uperInfos: n
                });
                break;
            case AG_LIVEVDNMOONSERVER.eO:
                StarRtc.debug("vdn 心跳反馈");
                break;
            case AG_LIVEVDNMOONSERVER.tO:
                var i = parseInt("0x" + k(R.slice(2, 4))),
                    I = H(R.slice(4, 4 + i));
                t({
                    type: "vdnApplyDownload",
                    status: "failed",
                    channelId: O = H(R.slice(4 + i, 4 + i + 16)),
                    failedStatus: I
                });
                break;
            case AG_LIVEVDNMOONSERVER.RO:
                t({
                    type: "streamConfig",
                    status: "success",
                    channelId: O = H(R.slice(2, 18))
                });
                break;
            case AG_LIVEVDNMOONSERVER.aO:
                t({
                    type: "streamConfig",
                    status: "failed",
                    channelId: O = H(R.slice(2, 18))
                });
                break;
            case AG_LIVEVDNMOONSERVER.OO:
                for (O = H(R.slice(2, 18)), E = parseInt("0x" + k(R.slice(18, 19))), _ = 19, r = R.length, n = {
                        channelId: O,
                        siv: E,
                        uperInfos: {}
                    }; _ < r;) {
                    s = parseInt("0x" + k(R.slice(_, _ + 1)));
                    _ += 1;
                    c = parseInt("0x" + k(R.slice(_, _ + 2)));
                    _ += 2;
                    S = H(R.slice(_, _ + c));
                    _ += c, n.uperInfos[s] = {
                        upId: s,
                        userId: S
                    }
                }
                t({
                    type: "uperStreamInfoUpdate",
                    status: "success",
                    channelId: O,
                    msg: n
                });
                break;
            case AG_LIVEVDNMOONSERVER.EO:
                t({
                    type: "streamData",
                    status: "success",
                    upId: s = parseInt("0x" + k(R.slice(2, 3))),
                    siv: E = parseInt("0x" + k(R.slice(3, 4))),
                    streamDataType: parseInt("0x" + k(R.slice(4, 5))),
                    streamData: H(R.slice(5))
                });
                break;
            case AG_LIVEVDNMOONSERVER._O:
                break;
            case AG_LIVEVDNMOONSERVER.iO:
                t({
                    type: "webrtcConnect",
                    status: "success"
                });
                break;
            case AG_LIVEVDNMOONSERVER.rO:
            case AG_LIVEVDNMOONSERVER.nO:
                break;
            case AG_LIVEVDNMOONSERVER.cO:
                var A = {};
                A.errId = parseInt("0x" + k(R.slice(2, 4))), A.errStrlen = parseInt("0x" + k(R.slice(4, 6))), A.errStr = H(R.slice(6, 6 + A.errStrlen)), t({
                    type: "serverErr",
                    status: "failed",
                    msg: A
                })
        }
    }, e.parseChatMoonServerMessage = function(e, t) {
        var R = new Uint8Array(e),
            a = parseInt("0x" + k(R.slice(0, 2)));
        switch (a) {
            case AG_CHATROOMMOONSERVER.Ze:
                t({
                    type: "createChatRoom",
                    status: "success",
                    chatroomId: E = H(R.slice(2, 18)),
                    maxContentLen: parseInt("0x" + k(R.slice(18, 20)))
                });
                break;
            case AG_CHATROOMMOONSERVER.$e:
                var O = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "createChatRoom",
                    status: "failed",
                    status: H(R.slice(4, 4 + O))
                });
                break;
            case AG_CHATROOMMOONSERVER.et:
                t({
                    type: "deleteChatRoom",
                    status: "success",
                    roomId: E = H(R.slice(2, 18))
                });
                break;
            case AG_CHATROOMMOONSERVER.tt:
                var E = H(R.slice(2, 18));
                O = parseInt("0x" + k(R.slice(18, 20)));
                t({
                    type: "deleteChatRoom",
                    status: "failed",
                    msg: H(R.slice(20, 20 + O)),
                    roomId: E
                });
                break;
            case AG_CHATROOMMOONSERVER.Rt:
                var _ = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "banaedToSendMsg",
                    status: "success",
                    banUserId: r = H(R.slice(4, 4 + _)),
                    banTime: n = parseInt("0x" + k(R.slice(4 + _, 4 + _ + 2)))
                });
                break;
            case AG_CHATROOMMOONSERVER.at:
                _ = parseInt("0x" + k(R.slice(2, 4)));
                var r = H(R.slice(4, 4 + _)),
                    n = parseInt("0x" + k(R.slice(4 + _, 4 + _ + 2)));
                O = parseInt("0x" + k(R.slice(4 + _ + 2, 4 + _ + 2 + 2)));
                t({
                    type: "banaedToSendMsg",
                    status: "failed",
                    banUserId: r,
                    banTime: n,
                    msg: H(R.slice(4 + _ + 2 + 2, 4 + _ + 2 + 2 + O))
                });
                break;
            case AG_CHATROOMMOONSERVER.Ot:
                var s = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "kickOutUser",
                    status: "success",
                    kickOutUserId: c = H(R.slice(4, 4 + s))
                });
                break;
            case AG_CHATROOMMOONSERVER.Et:
                s = parseInt("0x" + k(R.slice(2, 4)));
                var c = H(R.slice(4, 4 + s));
                O = parseInt("0x" + k(R.slice(4 + s, 4 + _ + 2)));
                t({
                    type: "kickOutUser",
                    status: "failed",
                    kickOutUserId: c,
                    msg: H(R.slice(4 + s + 2, 4 + s + 2 + O))
                });
                break;
            case AG_CHATROOMMOONSERVER._t:
            case AG_CHATROOMMOONSERVER.rt:
                t({
                    type: "joinChatRoom",
                    status: "success",
                    roomId: E = H(R.slice(2, 18)),
                    maxContentLen: parseInt("0x" + k(R.slice(18, 20)))
                });
                break;
            case AG_CHATROOMMOONSERVER.nt:
                E = H(R.slice(2, 18)), O = parseInt("0x" + k(R.slice(18, 20)));
                t({
                    type: "joinChatRoom",
                    status: "failed",
                    failedStatus: H(R.slice(20, 20 + O)),
                    roomId: E
                });
                break;
            case AG_CHATROOMMOONSERVER.st:
                StarRtc.debug("chatRoom心跳反馈");
                break;
            case AG_CHATROOMMOONSERVER.ct:
            case AG_CHATROOMMOONSERVER.St:
                var S = parseInt("0x" + k(R.slice(2, 4))),
                    i = H(R.slice(4, 4 + S)),
                    I = parseInt("0x" + k(R.slice(4 + S, 4 + S + 4))),
                    A = H(R.slice(4 + S + 4, 4 + S + 4 + I));
                t({
                    type: a == AG_CHATROOMMOONSERVER.ct ? "recvChatPrivateMsg" : "recvChatMsg",
                    status: "success",
                    fromUserId: i,
                    msg: A
                });
                break;
            case AG_CHATROOMMOONSERVER.it:
                t({
                    type: "chatroomUserBannedMsg",
                    status: "success",
                    banTime: n = parseInt("0x" + k(R.slice(2, 4)))
                });
                break;
            case AG_CHATROOMMOONSERVER.It:
                t({
                    type: "chatroomUserKicked",
                    status: "success"
                });
                break;
            case AG_CHATROOMMOONSERVER.At:
                t({
                    type: "sendMsgNoFree"
                });
                break;
            case AG_CHATROOMMOONSERVER.ot:
                (A = {}).errId = parseInt("0x" + k(R.slice(2, 4))), A.errStrlen = parseInt("0x" + k(R.slice(4, 6))), A.errStr = H(R.slice(6, 6 + A.errStrlen)), t({
                    type: "serverErr",
                    status: "failed",
                    msg: A
                });
                break;
            case AG_CHATROOMMOONSERVER.Nt:
                t({
                    type: "getRoomOnlineNum",
                    status: "success",
                    roomId: E = H(R.slice(2, 18)),
                    onlineNum: parseInt("0x" + k(R.slice(18, 22)))
                });
                break;
            case AG_CHATROOMMOONSERVER.lt:
                t({
                    type: "saveToChatroomList",
                    status: "success",
                    roomId: E = H(R.slice(2, 18))
                });
                break;
            case AG_CHATROOMMOONSERVER.ft:
                t({
                    type: "saveToChatroomList",
                    status: "failed",
                    roomId: E = H(R.slice(2, 18))
                });
                break;
            case AG_CHATROOMMOONSERVER.pt:
                t({
                    type: "delFromToChatroomList",
                    status: "success",
                    roomId: E = H(R.slice(2, 18))
                });
                break;
            case AG_CHATROOMMOONSERVER.Ut:
                t({
                    type: "delFromToChatroomList",
                    status: "failed",
                    roomId: E = H(R.slice(2, 18))
                });
                break;
            case AG_CHATROOMMOONSERVER.vt:
                var o = parseInt("0x" + k(R.slice(2, 6)));
                t({
                    type: "queryAllChatroomList",
                    status: "success",
                    listData: H(R.slice(6, 6 + o))
                })
        }
    }, e.parseVoipMoonServerMessage = function(e, t) {
        var R = new Uint8Array(e);
        switch (parseInt("0x" + k(R.slice(0, 2)))) {
            case AG_VOIPMOONSERVER.Ft:
                t({
                    type: "voipCallingAck",
                    status: "success"
                });
                break;
            case AG_VOIPMOONSERVER.Wt:
                var a = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "voipCalling",
                    status: "success",
                    fingerprint: H(R.slice(4, 4 + a))
                });
                break;
            case AG_VOIPMOONSERVER.Bt:
                (O = {}).errId = parseInt("0x" + k(R.slice(2, 4))), O.errStrlen = parseInt("0x" + k(R.slice(4, 6))), O.errStr = H(R.slice(6, 6 + O.errStrlen)), t({
                    type: "voipCalling",
                    status: "failed",
                    msg: O
                });
                break;
            case AG_VOIPMOONSERVER.Jt:
                a = parseInt("0x" + k(R.slice(2, 4)));
                t({
                    type: "voipResponseing",
                    status: "success",
                    fingerprint: H(R.slice(4, 4 + a))
                });
                break;
            case AG_VOIPMOONSERVER.Qt:
                (O = {}).errId = parseInt("0x" + k(R.slice(2, 4))), O.errStrlen = parseInt("0x" + k(R.slice(4, 6))), O.errStr = H(R.slice(6, 6 + O.errStrlen)), t({
                    type: "voipResponseing",
                    status: "failed",
                    msg: O
                });
                break;
            case AG_VOIPMOONSERVER.jt:
            case AG_VOIPMOONSERVER.Xt:
                break;
            case AG_VOIPMOONSERVER.zt:
                var O;
                (O = {}).errId = parseInt("0x" + k(R.slice(2, 4))), O.errStrlen = parseInt("0x" + k(R.slice(4, 6))), O.errStr = H(R.slice(6, 6 + O.errStrlen)), t({
                    type: "serverErr",
                    status: "failed",
                    msg: O
                })
        }
    }, e.constructHeartBeatMsg = function(e) {
        return new Uint8Array(J(W(e.toString(16))))
    }
}, StarRtc.StarConfig = function() {
    this.configModePulic = !1, this.configUseAEC = !1, this.msgServerUrl = "demo.starrtc.com", this.msgServerWebsocketPort = "9904", this.chatRoomServerUrl = "demo.starrtc.com", this.chatRoomServerWebsocketPort = "9907", this.srcServerUrl = "demo.starrtc.com", this.srcServerWebsocketPort = "9929", this.srcServerWebrtcPort = "10088", this.srcServerWebrtcPort = "demo.starrtc.com", this.vdnServerUrl = "demo.starrtc.com", this.vdnServerWebsocketPort = "9929", this.vdnServerWebrtcPort = "10088", this.vdnServerWebrtcPort = "demo.starrtc.com", this.voipServerUrl = "demo.starrtc.com", this.voipServerPort = "10086", this.voipServerWebsocketPort = "10087", this.voipServerWebrtcPort = "10088", this.voipServerWebrtcPort = "demo.starrtc.com"
}, StarRtc.StarUserInfo = function() {
    this.agentId = "", this.userId = "", this.starUid = "", this.starToken = ""
}, StarRtc.StarStaticInterface = new function() {
    var S = this;
    S.reportRoom = function(e, t, R, a, O, E) {
        var _ = null,
            r = O.id.substring(16, 33);
        "" != r && null != r || (r = O.id);
        var n = {};
        n.id = O.id, n.creator = O.creator, n.name = O.name;
        var s = function(e, t) {
                switch (e.obj = S, t) {
                    case "connect success":
                        _.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Gt, {
                            roomId: r,
                            listType: a,
                            userDefineData: encodeURIComponent(JSON.stringify(n))
                        }, R)));
                        break;
                    case "connect failed":
                        E && E("failed");
                    case "connect closed":
                        _ = null;
                        break;
                    case "onmessage":
                        StarRtc.AUtils.parseProtocol(e, function(e) {
                            e.appid == APP_PRODUCT_ID.R && StarRtc.AUtils.parseChatMoonServerMessage(e.msgArr, function(e) {
                                s(e, "onChatRoomMessage")
                            })
                        });
                        break;
                    case "onChatRoomMessage":
                        switch (e.type) {
                            case "saveToChatroomList":
                                E && E(e.status), _.close()
                        }
                }
            },
            c = "wss://" + e + ":" + t;
        (_ = new StarRtc.WebrtcWebsocket(s, null)).connect(c)
    }, S.queryRoom = function(e, t, O, E, _) {
        var r = null,
            n = function(e, t) {
                switch (e.obj = S, t) {
                    case "connect success":
                        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.dt, {
                            listTypes: E.toString(),
                            userId: ""
                        }, O)));
                        break;
                    case "connect failed":
                        _ && _("failed", []);
                    case "connect closed":
                        r = null;
                        break;
                    case "onmessage":
                        StarRtc.AUtils.parseProtocol(e, function(e) {
                            e.appid == APP_PRODUCT_ID.R && StarRtc.AUtils.parseChatMoonServerMessage(e.msgArr, function(e) {
                                n(e, "onChatRoomMessage")
                            })
                        });
                        break;
                    case "onChatRoomMessage":
                        switch (e.type) {
                            case "queryAllChatroomList":
                                if ("" == e.listData) {
                                    _ && _(e.status, []);
                                    break
                                }
                                for (var R = JSON.parse(e.listData).userDefineDataList.split(","), a = 0; a < R.length; a++) R[a] = JSON.parse(decodeURIComponent(R[a]));
                                _ && _(e.status, R), r.close()
                        }
                }
            },
            R = "wss://" + e + ":" + t;
        (r = new StarRtc.WebrtcWebsocket(n, null)).connect(R)
    }, S.delRoom = function(e, t, R, a, O, E) {
        var _ = null,
            r = O.id.substring(16, 33);
        "" != r && null != r || (r = O.id);
        var n = function(e, t) {
                switch (e.obj = S, t) {
                    case "connect success":
                        _.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Dt, {
                            roomId: r,
                            listType: a
                        }, R)));
                        break;
                    case "connect failed":
                        E && E("failed");
                    case "connect closed":
                        _ = null;
                        break;
                    case "onmessage":
                        StarRtc.AUtils.parseProtocol(e, function(e) {
                            e.appid == APP_PRODUCT_ID.R && StarRtc.AUtils.parseChatMoonServerMessage(e.msgArr, function(e) {
                                n(e, "onChatRoomMessage")
                            })
                        });
                        break;
                    case "onChatRoomMessage":
                        switch (e.type) {
                            case "delFromToChatroomList":
                                E && E(e.status), _.close()
                        }
                }
            },
            s = "wss://" + e + ":" + t;
        (_ = new StarRtc.WebrtcWebsocket(n, null)).connect(s)
    }
}, StarRtc.StarSDK = function() {
    var e = "starRTC v1.1.4",
        r = this,
        O = null,
        E = null,
        _ = 0;
    r.starConfig = new StarRtc.StarConfig, r.starUser = new StarRtc.StarUserInfo;
    var n = null;
    r.version = function() {
        return StarRtc.info(e), e
    };
    var s = function(e, t) {
        switch (t) {
            case "connect success":
                r.startAuth(), O(e, t);
                break;
            case "connect failed":
            case "connect closed":
                n = null, O(e, t);
                break;
            case "onmessage":
                StarRtc.AUtils.parseProtocol(e, function(e) {
                    switch (e.appid) {
                        case APP_PRODUCT_ID.t:
                            StarRtc.AUtils.parseMessage(e.msgArr, s)
                    }
                });
                break;
            case "onSingleMessage":
                null != e.msgNode && (c(e.msgNode, r.starUser), e.msgNode = void 0), e.msg = JSON.parse(e.msg);
                var R = t;
                if (0 == e.msg.type) switch (e.msg.code) {
                    case AG_MSG_VOIP_CTRL.h:
                        e.type = "voipCall", R = "onVoipMessage";
                        break;
                    case AG_MSG_VOIP_CTRL.Y:
                        e.type = "voipAudioCall", R = "onVoipMessage";
                        break;
                    case AG_MSG_VOIP_CTRL.F:
                        e.type = "voipRefuse", R = "onVoipMessage";
                        break;
                    case AG_MSG_VOIP_CTRL.K:
                        e.type = "voipHangup", R = "onVoipMessage";
                        break;
                    case AG_MSG_VOIP_CTRL.W:
                        e.type = "voipBusy", R = "onVoipMessage";
                        break;
                    case AG_MSG_VOIP_CTRL.B:
                        e.type = "voipConnect", R = "onVoipMessage";
                        break;
                    default:
                        e.type = "voipSingleMsg"
                } else e.type = "voipSingleMsg";
                (null != E ? E : O)(e, R);
                break;
            case "onLoginMessage":
                if ("success" == e.status) {
                    e.msgMaxLen;
                    var a = StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructHeartBeatMsg(AG_MSG.X));
                    null != n && n.startHeartBeat(a, 15e3)
                }
                case "onGroupMessage":
                case "onGroupPrivateMessage":
                case "onGroupPushMessage":
                case "onSystemPushMessage":
                    null != e.msgNode && (c(e.msgNode, r.starUser), e.msgNode = void 0);
                case "onErrorMessage":
                case "onGetGroupList":
                case "onGetOnlineNumber":
                case "onGetGroupUserList":
                case "onGetAllUserList":
                case "onPushGroupSystemMsgFin":
                case "onPushSystemMsgFin":
                case "onUnsetGroupMsgIgnoreFin":
                case "onSetGroupMsgIgnoreFin":
                case "onRemoveGroupUserFin":
                case "onAddGroupUserFin":
                case "onDelGroupFin":
                case "onCreateGroupFin":
                case "onSendGroupMsgFin":
                    null != E && E(e, t), O(e, t)
        }
    };

    function c(e, t) {
        StarRtc.debug("发送消息回执"), r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructReceivedMsg(e, t)))
    }
    return r.setMsgServerInfo = function(e, t) {
        r.starConfig.msgServerUrl = e, r.starConfig.msgServerWebsocketPort = t
    }, r.setChatRoomServerInfo = function(e, t) {
        r.starConfig.chatRoomServerUrl = e, r.starConfig.chatRoomServerWebsocketPort = t
    }, r.setSrcServerInfo = function(e, t, R, a) {
        r.starConfig.srcServerUrl = e, r.starConfig.srcServerWebsocketPort = t, r.starConfig.srcServerWebrtcPort = R, r.starConfig.srcServerWebrtcIP = a || e
    }, r.setVdnServerInfo = function(e, t, R, a) {
        r.starConfig.vdnServerUrl = e, r.starConfig.vdnServerWebsocketPort = t, r.starConfig.vdnServerWebrtcPort = R, r.starConfig.vdnServerWebrtcIP = a || e
    }, r.setVoipServerInfo = function(e, t, R, a, O) {
        r.starConfig.voipServerUrl = e, r.starConfig.voipServerPort = t, r.starConfig.voipServerWebsocketPort = R, r.starConfig.voipServerWebrtcPort = a, r.starConfig.voipServerWebrtcIP = O || e
    }, r.setConfigUseAEC = function(e) {
        r.starConfig.configUseAEC = e
    }, r.login = function(e, t, R) {
        r.starConfig.configModePulic || (e = "APPID-FREE"), r.starUser.agentId = e, r.starUser.userId = t, r.starUser.starUid = e + "_" + t, O = R,
            function(e) {
                if ("WebSocket" in window) {
                    r.starUser.agentId, r.starUser.userId, r.starUser.starUid;
                    r.starConfig.configModePulic || (r.starUser.starToken = "free", (n = new StarRtc.WebrtcWebsocket(e, null)).connect("wss://" + r.starConfig.msgServerUrl + ":" + r.starConfig.msgServerWebsocketPort))
                } else StarRtc.error("当前浏览器 Not support websocket"), e({
                    msg: "当前浏览器 Not support websocket"
                }, "connect failed")
            }(s)
    }, window.onbeforeunload = function() {
        r.logout()
    }, r.logout = function() {
        null != n && (n.close(), n = null)
    }, r.send = function(e) {
        null != n && n.send(e)
    }, r.startAuth = function() {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructAuthMsg(r.starUser)))
    }, r.sendSingleMsg = function(e, t, R, a) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructSingleMsg(e, ++_, t, R, a, r.starUser)))
    }, r.sendGroupMsg = function(e, t, R) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructGroupMsg(e, ++_, t, R, r.starUser)))
    }, r.sendSingleCtrlMsg = function(e, t, R, a) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructSingleCtrlMsg(e, ++_, t, R, a, r.starUser)))
    }, r.sendVoipCtrlMsg = function(e, t) {
        var R = "";
        t != AG_MSG_VOIP_CTRL.h && t != AG_MSG_VOIP_CTRL.Y || (R = JSON.stringify({
            VoIP_protocal_type: "TCP",
            VoIP_server_IP: r.starConfig.voipServerUrl,
            VoIP_server_Port: r.starConfig.voipServerPort
        })), r.sendSingleCtrlMsg(e, "新消息", R, t)
    }, r.sendVoipCallMsg = function(e, t, R) {
        var a;
        R = R || !1;
        var O = t || (new Date).getTime();
        a = JSON.stringify({
            VoIP_protocal_type: "TCP",
            VoIP_server_IP: r.starConfig.voipServerUrl,
            VoIP_server_Port: r.starConfig.voipServerPort,
            ts: O
        }), r.sendSingleCtrlMsg(e, "新消息", a, R ? AG_MSG_VOIP_CTRL.Y : AG_MSG_VOIP_CTRL.h)
    }, r.sendVoipRefuseMsg = function(e) {
        r.sendVoipCtrlMsg(e, AG_MSG_VOIP_CTRL.F)
    }, r.sendVoipHungupMsg = function(e) {
        r.sendVoipCtrlMsg(e, AG_MSG_VOIP_CTRL.K), null != E && E({
            type: "voipCancle"
        }, "onVoipMessage")
    }, r.sendVoipBusyMsg = function(e) {
        r.sendVoipCtrlMsg(e, AG_MSG_VOIP_CTRL.W)
    }, r.sendVoipConnectMsg = function(e) {
        r.sendVoipCtrlMsg(e, AG_MSG_VOIP_CTRL.B)
    }, r.setIMExtraback = function(e) {
        E = e
    }, r.getStarRoomSDK = function(e, t, R, a, O, E, _) {
        return new StarRtc.StarRoomSDK(e, t, R, a, O, E, _, r.starUser, r.starConfig)
    }, r.getVideoMeetingRoomSDK = function(e, t, R) {
        return r.getStarRoomSDK("src", e, t, R, 3, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING)
    }, r.getVideoLiveRoomSDK = function(e, t, R, a) {
        return r.getStarRoomSDK(e, t, R, a, 3, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_LIVE)
    }, r.getVoipRoomSDK = function(e, t, R) {
        return r.getStarRoomSDK("voip", e, t, R, 2, 0, r)
    }, r.getChatRoomSDK = function(e, t, R) {
        return new StarRtc.StarChatRoomSDK(e, t, R, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_CHATROOM, r.starUser, r.starConfig)
    }, r.getVideoRoomSDK = function(e, t, R, a, O) {
        return new StarRtc.StarVideoRoomSDK(e, t, R, a, O, r.starUser, r.starConfig)
    }, r.queryRoom = function(e, t) {
        r.starConfig.configUseAEC || StarRtc.StarStaticInterface.queryRoom(r.starConfig.chatRoomServerUrl, r.starConfig.chatRoomServerWebsocketPort, r.starUser, e.join(","), t)
    }, r.setGroupMsgPush = function(e) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(e ? AG_MSG.Oe : AG_MSG.Ee, {
            reqIndex: 0
        }, r.starUser)))
    }, r.removeGroupUsers = function(e, t) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.ae, {
            reqIndex: 0,
            groupId: e,
            removeUsers: t.join(",")
        }, r.starUser)))
    }, r.addGroupUsers = function(e, t, R) {
        R = R || "", r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.Re, {
            reqIndex: 0,
            groupId: e,
            addUsers: t.join(","),
            userDefineData: R
        }, r.starUser)))
    }, r.delGroup = function(e) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.te, {
            reqIndex: 0,
            groupId: e
        }, r.starUser)))
    }, r.createGroup = function(e, t) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.ee, {
            reqIndex: 0,
            addUsers: e.join(","),
            userDefineData: t
        }, r.starUser)))
    }, r.getGroupList = function() {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.de, {
            reqIndex: 0
        }, r.starUser)))
    }, r.getGroupUserList = function(e) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.be, {
            reqIndex: 0,
            groupId: e
        }, r.starUser)))
    }, r.getOnlineNumber = function() {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.ke, {}, r.starUser)))
    }, r.getAllUserList = function(e) {
        r.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.t, ACTION_GROUP_ID.M, StarRtc.AUtils.constructMsgProtocol(AG_MSG.ge, {
            reqPageNum: e
        }, r.starUser)))
    }, r.getSuperRoomSDK = function(e, t, R) {
        return new StarRtc.StarSuperRoomSDK(e, t, R, r.starUser, r.starConfig)
    }, r.reportRoom = function(e, t, R) {
        r.starConfig.configUseAEC || StarRtc.StarStaticInterface.reportRoom(r.starConfig.chatRoomServerUrl, r.starConfig.chatRoomServerWebsocketPort, r.starUser, e, t, R)
    }, r.delRoom = function(e, t, R) {
        r.starConfig.configUseAEC || StarRtc.StarStaticInterface.reportRoom(r.starConfig.chatRoomServerUrl, r.starConfig.chatRoomServerWebsocketPort, r.starUser, e, t, R)
    }, r
}, StarRtc.WebrtcWebsocket = function(e, t) {
    var a, R = this,
        O = e,
        E = null;
    return R.startHeartBeat = function(e, t) {
        var R = t || 5e3;
        null != E && 1 == E.readyState && E.send(e), a = setInterval(function() {
            null != E && 1 == E.readyState && E.send(e)
        }, R)
    }, R.stopHeartBeat = function() {
        clearInterval(a)
    }, R.connect = function(t) {
        StarRtc.debug("WebSocket连接:" + t), (E = new WebSocket(t)).onerror = function(e) {
            StarRtc.warn("WebSocket连接发生错误:" + t), O({
                msg: "WebSocket连接发生错误",
                data: e.data
            }, "connect failed")
        }, E.onopen = function() {
            StarRtc.debug("WebSocket连接成功:" + t), O({
                msg: "WebSocket连接成功"
            }, "connect success")
        }, E.onmessage = function(e) {
            StarRtc.debug("onmessage", e.data), O(e.data, "onmessage")
        }, E.onclose = function(e) {
            StarRtc.debug("WebSocket连接关闭:" + t), R.stopHeartBeat(), O({
                msg: "WebSocket连接关闭",
                data: e.code
            }, "connect closed"), E = null
        }
    }, R.send = function(e) {
        E.send(e)
    }, R.close = function() {
        null != E && E.close()
    }, R.readyState = function() {
        return null != E ? E.readyState : -1
    }, R
}, StarRtc.StarSuperRoomSDK = function(e, t, R, a, O) {
    var E = this,
        _ = e,
        r = R,
        n = t,
        s = null,
        c = null,
        S = null,
        i = null,
        I = null,
        A = null,
        o = !1,
        N = a || new StarRtc.StarUserInfo,
        M = O || new StarRtc.StarConfig;

    function V(e) {
        if (null != e) {
            var t = e.getState();
            0 <= t && t < 2 && e.sigDisconnect()
        }
    }

    function u() {
        return !(3 != I.getState() && -1 != I.getState() || 3 != S.getState() && -1 != S.getState() || null != s && (null == s || 3 != s.getState() && -1 != s.getState()))
    }
    var C = function(e, t, R) {
        switch (e.userData = r, e.obj = E, t) {
            case "connect success":
                switch (R) {
                    case "open":
                        s.createStream({
                            video: !1,
                            audio: {
                                deviceId: {
                                    ideal: ["default"]
                                }
                            }
                        });
                        break;
                    case "new":
                        s.createNewSuperRoom()
                }
                break;
            case "connect closed":
            case "connect failed":
                s = null;
                break;
            case "onmessage":
                break;
            case "onWebrtcMessage":
                switch (e.type) {
                    case "srcApplyUpload":
                        n(e, t, _);
                        break;
                    case "streamCreated":
                        "success" == e.status ? s.joinRoom() : n(e, t, _);
                        break;
                    case "delChannel":
                        "success" == e.status ? n(e, t, _) : alert("删除视频会议失败");
                        break;
                    case "createChannel":
                        "success" == e.status && (r.roomInfo.creator = N.userId, r.roomInfo.id = e.channelId + r.roomInfo.id, i.roomInfo.id = e.channelId, i.roomInfo.creator = N.userId, c.roomInfo.id = e.channelId, c.roomInfo.creator = N.userId, s.sigDisconnect()), n(e, t, _)
                }
        }
    };
    return c = clone(r), i = clone(r), A = clone(r), r.roomInfo.id && (c.roomInfo.id = r.roomInfo.id.substring(0, 16), i.roomInfo.id = r.roomInfo.id.substring(0, 16), A.roomInfo.id = r.roomInfo.id.substring(16, 33)), S = new StarRtc.StarVideoSDK("vdn", "open", function(e, t) {
        switch (e.userData = r, e.obj = E, t) {
            case "connect success":
                n(e, t, _);
                break;
            case "connect closed":
            case "connect failed":
                V(I), V(s), u() && n(e, t, _);
                break;
            case "onmessage":
                break;
            case "onWebrtcMessage":
                e.type, n(e, t, _)
        }
    }, i, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_SUPER_ROOM, N, M), I = new StarRtc.StarChatSDK(e, function(e, t) {
        switch (e.userData = r, e.obj = E, t) {
            case "connect success":
                S.sigConnect();
                break;
            case "connect failed":
            case "connect closed":
                V(S), u() && n(e, t, _);
                break;
            case "onmessage":
                break;
            case "onChatRoomMessage":
                switch (e.type) {
                    case "createChatRoom":
                        "success" == e.status && (r.roomInfo.id = e.chatroomId, r.roomInfo.creator = N.userId, c.roomInfo.chatroomId = e.chatroomId, i.roomInfo.chatroomId = e.chatroomId, (s = new StarRtc.StarVideoSDK("src", "new", C, c, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_SUPER_ROOM, N, M)).sigConnect());
                        break;
                    case "deleteChatRoom":
                        "success" == e.status && s.deleteCurrRoom();
                        break;
                    case "joinChatRoom":
                        "success" == e.status && S.joinRoom()
                }
                n(e, t, _)
        }
    }, A, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_SUPER_ROOM, N, M), E.sigConnect = function() {
        o = !1, I.sigConnect()
    }, E.sigDisconnect = function(e) {
        null == e && (e = !0), o = e, E.endTalk(e), S.sigDisconnect(e)
    }, E.createNew = function() {
        I.createNew()
    }, E.deleteCurrRoom = function() {
        I.deleteCurrRoom()
    }, E.createStream = function(e) {
        null == e ? e = {
            video: !1,
            audio: {
                deviceId: {
                    ideal: ["default"]
                }
            }
        } : e.video = !1, S.createStream(e)
    }, E.joinRoom = function() {
        "new" != _ ? I.joinRoom() : S.joinRoom()
    }, E.leaveRoom = function(e) {
        E.endTalk(), S.leaveRoom(e)
    }, E.sendChatMsg = function(e) {
        I.sendChatMsg(e)
    }, E.sendChatPrivateMsg = function(e, t) {
        I.sendChatPrivateMsg(e, t)
    }, E.kickOutUser = function(e) {
        I.kickOutUser(e)
    }, E.banToSendMsg = function(e, t) {
        I.banToSendMsg(e, t)
    }, E.getRoomOnlineNum = function() {
        I.getRoomOnlineNum()
    }, E.activeDisconnect = function() {
        return o
    }, E.startTalk = function() {
        null == s && (s = new StarRtc.StarVideoSDK("src", "open", C, c, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_SUPER_ROOM, N, M)).sigConnect()
    }, E.endTalk = function() {
        null != s && (s.sigDisconnect(), s = null)
    }, E
}, StarRtc.StarRoomSDK = function(e, t, R, a, O, E, _, r, n) {
    var s = "我要上麦！",
        c = this,
        S = r || new StarRtc.StarUserInfo,
        i = n || new StarRtc.StarConfig,
        I = t,
        A = e,
        o = a,
        N = R,
        M = O || 3,
        V = 0 != (1 & M),
        u = 0 != (2 & M);
    "open" == t && 32 != o.roomInfo.id.length && (V = !1);
    var C = null,
        T = null,
        P = null,
        L = null,
        G = !1,
        l = null,
        f = _;

    function D() {
        null != l && (clearInterval(l), l = null)
    }

    function p(e) {
        if (null != e) {
            var t = e.getState();
            0 <= t && t < 2 && e.sigDisconnect()
        }
    }

    function U() {
        var e = !0;
        return V && (e = e && (3 == P.getState() || -1 == P.getState())), u && (e = e && (3 == C.getState() || -1 == C.getState())), e
    }
    null != f && "voip" == e && f.setIMExtraback(function(e, t) {
        d(e, "onVoipMessage")
    });
    var d = function(e, t) {
        switch (e.userData = o, e.obj = c, t) {
            case "connect success":
                u ? C.sigConnect() : N(e, t, I);
                break;
            case "connect failed":
            case "connect closed":
                u && p(C), U() && N(e, t, I);
                break;
            case "onmessage":
                break;
            case "onChatRoomMessage":
                switch (e.type) {
                    case "createChatRoom":
                        "success" == e.status && (o.roomInfo.id = e.chatroomId, o.roomInfo.creator = S.userId, u && (T.roomInfo.chatroomId = e.chatroomId, C.createNew()));
                        break;
                    case "deleteChatRoom":
                        "success" == e.status && (u ? C.deleteCurrRoom() : N(e, t, I));
                        break;
                    case "joinChatRoom":
                        "success" == e.status && u && C.joinRoom();
                        break;
                    case "recvChatPrivateMsg":
                        if (0 == e.msg.type) switch (e.msg.code) {
                            case 2e3:
                                e.msg.msgType = "apply";
                                break;
                            case 2002:
                                e.msg.msgType = "applyAgree";
                                break;
                            case 2004:
                                e.msg.msgType = "applyDisagree";
                                break;
                            case 2200:
                                e.msg.msgType = "linkStop";
                                break;
                            case 2100:
                                e.msg.msgType = "invite";
                                break;
                            case 2102:
                                e.msg.msgType = "inviteAgree";
                                break;
                            case 2106:
                                e.msg.msgType = "inviteDisagree";
                                break;
                            case 2104:
                                e.msg.msgType = "inviteLinkStart";
                                break;
                            default:
                                e.msg.msgType = "common"
                        }
                }
                N(e, t, I);
                break;
            case "onVoipMessage":
                switch (e.type) {
                    case "voipCall":
                        e.fromId != o.roomInfo.targetId && f.sendVoipBusyMsg(e.fromId);
                        break;
                    case "voipHangup":
                        e.fromId == o.roomInfo.targetId && (c.leaveRoom(!0), N(e, t, I));
                        break;
                    case "voipBusy":
                        D(), c.leaveRoom(!0), N(e, t, I);
                        break;
                    case "voipConnect":
                    case "voipRefuse":
                        D(), N(e, t, I);
                        break;
                    case "voipCancle":
                        D();
                        break;
                    default:
                        N(e, t, I)
                }
        }
    };
    return T = clone(o), L = clone(o), u && V && o.roomInfo.id && (T.roomInfo.id = o.roomInfo.id.substring(0, 16), L.roomInfo.id = o.roomInfo.id.substring(16, 33)), u && (C = new StarRtc.StarVideoSDK(e, t, function(e, t) {
        switch (e.userData = o, e.obj = c, t) {
            case "connect success":
                N(e, t, I);
                break;
            case "connect closed":
            case "connect failed":
                D(), V && p(P), U() && N(e, t, I);
                break;
            case "onmessage":
                break;
            case "onWebrtcMessage":
                switch (e.type) {
                    case "delChannel":
                        "success" == e.status ? N(e, t, I) : alert("删除视频会议失败");
                        break;
                    case "createChannel":
                        "success" == e.status && (o.roomInfo.creator = S.userId, o.roomInfo.id = V ? e.channelId + o.roomInfo.id : e.channelId), N(e, t, I);
                        break;
                    case "voipCallingAck":
                        if (null != f) {
                            D();
                            var R = (new Date).getTime();
                            f.sendVoipCallMsg(o.roomInfo.targetId, R, o.roomInfo.audioOnly), E = o.roomInfo.targetId, a = function() {
                                f.sendVoipCallMsg(E, R, o.roomInfo.audioOnly)
                            }, O = 3e3, null != l && D(), l = setInterval(a, O)
                        }
                        break;
                    case "voipResponseing":
                        "success" == e.status && null != f && f.sendVoipConnectMsg(o.roomInfo.targetId), N(e, t, I);
                        break;
                    default:
                        N(e, t, I)
                }
        }
        var a, O, E
    }, T, E, S, i)), V && (P = new StarRtc.StarChatSDK(t, d, L, E, S, i)), c.sigConnect = function() {
        G = !1, V ? P.sigConnect() : u && C.sigConnect()
    }, c.sigDisconnect = function(e) {
        null == e && (e = !0), G = e, u ? C.sigDisconnect(e) : V && P.sigDisconnect(e)
    }, c.createNew = function() {
        "voip" != A && (V ? P.createNew() : u && C.createNew())
    }, c.deleteCurrRoom = function() {
        "voip" != A && (V ? P.deleteCurrRoom() : u && C.deleteCurrRoom())
    }, c.createStream = function(e) {
        u && C.createStream(e)
    }, c.publishStream = function(e) {
        u && C.publishStream(e)
    }, c.createScreenCaptureStream = function(e) {
        u && C.createScreenCaptureStream(e)
    }, c.joinRoom = function() {
        V && "new" != I ? P.joinRoom() : u && C.joinRoom()
    }, c.leaveRoom = function(e) {
        if (u) {
            switch (A) {
                case "voip":
                    var t = e || !1;
                    null == f || t || f.sendVoipHungupMsg(o.roomInfo.targetId), f.setIMExtraback(null)
            }
            C.leaveRoom(t)
        } else V && P.leaveRoom()
    }, c.streamConfigChange = function(e) {
        u && C.streamConfigChange(e)
    }, c.streamConfigApply = function(e) {
        u && C.streamConfigApply(e)
    }, c.sendChatMsg = function(e) {
        V && P.sendChatMsg(e)
    }, c.sendVoipMsg = function(e) {
        "voip" == A && null != f && f.sendSingleMsg(o.roomInfo.targetId, "新媒体", e)
    }, c.sendChatPrivateMsg = function(e, t) {
        V && P.sendChatPrivateMsg(e, t)
    }, c.sendApplyMsg = function() {
        V && u && "vdn" == A && P.sendChatCtrlPrivateMsg(o.roomInfo.creator, s, 2e3)
    }, c.sendApplyAgreeMsg = function(e) {
        V && u && "src" == A && P.sendChatCtrlPrivateMsg(e, s, 2002)
    }, c.sendApplyDisagreeMsg = function(e) {
        V && u && "src" == A && P.sendChatCtrlPrivateMsg(e, s, 2004)
    }, c.sendInviteLinkMsg = function(e) {
        V && u && "src" == A && P.sendChatCtrlPrivateMsg(e, s, 2100)
    }, c.sendInviteLinkAgreeMsg = function() {
        V && u && "vdn" == A && P.sendChatCtrlPrivateMsg(o.roomInfo.creator, s, 2102)
    }, c.sendInviteLinkDisagreeMsg = function() {
        V && u && "vdn" == A && P.sendChatCtrlPrivateMsg(o.roomInfo.creator, s, 2106)
    }, c.sendInviteLinkStartMsg = function() {
        V && u && "vdn" == A && P.sendChatCtrlPrivateMsg(o.roomInfo.creator, s, 2104)
    }, c.sendLinkStopMsg = function(e) {
        V && u && "src" == A && P.sendChatCtrlPrivateMsg(e, s, 2200)
    }, c.kickOutUser = function(e) {
        V && P.kickOutUser(e)
    }, c.banToSendMsg = function(e, t) {
        V && P.banToSendMsg(e, t)
    }, c.getRoomOnlineNum = function() {
        V && P.getRoomOnlineNum()
    }, c.sendStreamData = function(e) {
        u && "src" == A && C.sendStreamData(e)
    }, c.activeDisconnect = function() {
        return G
    }, c
}, StarRtc.StarVideoRoomSDK = function(e, t, R, a, O, E, _) {
    var r = this,
        n = a,
        s = R,
        c = t,
        S = e,
        i = O || CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING,
        I = E || new StarRtc.StarUserInfo,
        A = _ || new StarRtc.StarConfig,
        o = new StarRtc.StarVideoSDK(S, c, function(e, t) {
            e.userData = n, e.obj = r, s(e, t, c)
        }, n, i, I, A);
    return r.sigConnect = function() {
        o.sigConnect()
    }, r.sigDisconnect = function(e) {
        o.sigDisconnect(e)
    }, r.createNew = function() {
        o.createNew()
    }, r.createNewSuperRoom = function() {
        o.createNewSuperRoom()
    }, r.deleteCurrRoom = function() {
        o.deleteCurrRoom()
    }, r.createStream = function(e) {
        o.createStream(e)
    }, r.publishStream = function(e) {
        o.publishStream(e)
    }, r.createScreenCaptureStream = function(e) {
        o.createScreenCaptureStream(e)
    }, r.joinRoom = function() {
        o.joinRoom()
    }, r.leaveRoom = function(e) {
        o.leaveRoom(e)
    }, r.streamConfigChange = function(e) {
        o.streamConfigChange(e)
    }, r.streamConfigApply = function(e) {
        o.streamConfigApply(e)
    }, r.getState = function() {
        return o.getState()
    }, r.getType = function() {
        return o.getType()
    }, r.sendStreamData = function(e) {
        o.sendStreamData(e)
    }, r.activeDisconnect = function() {
        return o.activeDisconnect()
    }, r
}, StarRtc.StarVideoSDK = function(e, t, R, a, O, E, _) {
    var n = this,
        s = a,
        c = e,
        S = R,
        i = t,
        I = null,
        A = "",
        o = {},
        N = {},
        M = E || new StarRtc.StarUserInfo,
        r = _ || new StarRtc.StarConfig,
        V = O || CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING,
        u = {
            siv: 0,
            uperInfos: {}
        },
        C = StarWebRTC();
    C.init();
    var T = !1,
        P = !1,
        L = function(e) {
            switch (e.type) {
                case "createOffer":
                    if ("success" == e.status) {
                        switch (c) {
                            case "src":
                                e.channelId = s.roomInfo.id;
                                break;
                            case "vdn":
                                e.ssrc = e.bigVideoSSRC;
                                break;
                            case "voip":
                                e.targetId = s.roomInfo.targetId, e.videoSSRC = e.bigVideoSSRC
                        }! function(e) {
                            switch (N = e, c) {
                                case "src":
                                    I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.ha, e, M)));
                                    break;
                                case "vdn":
                                    I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.I, ACTION_GROUP_ID.C, StarRtc.AUtils.constructVdnProtocol(AG_LIVEVDNMOONSERVER.Ba, e, M)));
                                    break;
                                case "voip":
                                    "call" == i ? I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.A, ACTION_GROUP_ID.T, StarRtc.AUtils.constructVOIPProtocol(AG_VOIPMOONSERVER.gt, e, M))) : "response" == i && I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.A, ACTION_GROUP_ID.T, StarRtc.AUtils.constructVOIPProtocol(AG_VOIPMOONSERVER.yt, e, M)))
                            }
                        }(e)
                    }
                    break;
                case "applyAnswer":
                    e.status
            }
        },
        G = function(e, t) {
            var R = {
                type: "streamCreated",
                streamObj: t
            };
            R.userData = s, R.obj = n, "success" == e ? R.status = "success" : (R.status = "failed", R.error = t), S(R, "onWebrtcMessage", i)
        },
        l = function(e, t) {
            switch (e.userData = s, e.obj = n, t) {
                case "connect success":
                    var R = null;
                    switch (c) {
                        case "src":
                            R = StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructHeartBeatMsg(AG_LIVESRCMOONSERVER.zR));
                            break;
                        case "vdn":
                            R = StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.I, ACTION_GROUP_ID.C, StarRtc.AUtils.constructHeartBeatMsg(AG_LIVEVDNMOONSERVER.Qa))
                    }
                    I.startHeartBeat(R), C.setServerInfo({
                        serverIp: o.webrtcIP,
                        serverPort: o.webrtcPort
                    }), S(e, t, i);
                    break;
                case "connect failed":
                case "connect closed":
                    C.destroy(), I = null, S(e, t, i);
                    break;
                case "onmessage":
                    StarRtc.AUtils.parseProtocol(e, function(e) {
                        e.appid == APP_PRODUCT_ID.i ? StarRtc.AUtils.parseSrcMoonServerMessage(e.msgArr, function(e) {
                            l(e, "onWebrtcMessage")
                        }) : e.appid == APP_PRODUCT_ID.I ? StarRtc.AUtils.parseVdnMoonServerMessage(e.msgArr, function(e) {
                            l(e, "onWebrtcMessage")
                        }) : e.appid == APP_PRODUCT_ID.A && StarRtc.AUtils.parseVoipMoonServerMessage(e.msgArr, function(e) {
                            l(e, "onWebrtcMessage")
                        })
                    });
                    break;
                case "onWebrtcMessage":
                    switch (e.type) {
                        case "uperStreamInfoUpdate":
                            if ("success" == e.status) {
                                if (T)
                                    for (var a = 0; a < 7; ++a) {
                                        var O = C.getStreamByIndex(a),
                                            E = void 0;
                                        0 != Object.keys(u.uperInfos).length && (E = u.uperInfos[a]);
                                        var _ = e.msg.uperInfos[a];
                                        null == E && null != _ ? "vdn" != c && _.userId == M.starUid || S({
                                            type: "addUploader",
                                            upId: _.upId,
                                            upUserId: _.userId,
                                            streamInfo: O,
                                            room: n
                                        }, t, i) : null != E && null == _ ? S({
                                            type: "removeUploader",
                                            upId: E.upId,
                                            upUserId: E.userId,
                                            streamInfo: O,
                                            room: n
                                        }, t, i) : null != E && null != _ && E.userId != _.userId && S({
                                            type: "changeUploader",
                                            upId: _.upId,
                                            oldUpUserId: E.userId,
                                            newUpUserId: _.userId,
                                            streamInfo: O,
                                            room: n
                                        }, t, i)
                                    }
                                u = e.msg
                            }
                            break;
                        case "webrtcConnect":
                            if ("success" == e.status) switch (c) {
                                case "vdn":
                                    I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.I, ACTION_GROUP_ID.C, StarRtc.AUtils.constructVdnProtocol(AG_LIVEVDNMOONSERVER.qa, {
                                        channelId: s.roomInfo.id
                                    }, M)));
                                    break;
                                case "src":
                                    I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.YR, N, M)))
                            }
                            break;
                        case "webrtcReg":
                            if ("success" == e.status) switch (c) {
                                case "vdn":
                                case "src":
                                    A = e.fingerprint, C.emit("_webrtc_apply_ok", A, function() {
                                        T = !0
                                    }, 102, 111)
                            } else StarRtc.error("webrtcReg failed");
                            break;
                        case "vdnApplyDownload":
                            "success" == e.status ? l({
                                type: "uperStreamInfoUpdate",
                                status: "success",
                                msg: e.uperInfos
                            }, "onWebrtcMessage") : StarRtc.warn("收到vdnApplyDownload failed"), S(e, t, i);
                            break;
                        case "srcApplyUpload":
                            if ("success" == e.status) {
                                e.tmpData = N, StarRtc.info("收到_webrtc_apply_ok");
                                var r = clone(u);
                                u.uperInfos = {}, l({
                                    type: "uperStreamInfoUpdate",
                                    status: "success",
                                    msg: r
                                }, "onWebrtcMessage")
                            } else StarRtc.warn("收到srcApplyUpload failed");
                            S(e, t, i);
                            break;
                        case "streamConfig":
                            e.status, S(e, t, i);
                            break;
                        case "createChannel":
                            "success" == e.status && (s.roomInfo.id = e.channelId, s.roomInfo.creator = M.userId), S(e, t, i);
                            break;
                        case "delChannel":
                            "success" == e.status && (s.roomInfo.id = ""), S(e, t, i);
                            break;
                        case "serverErr":
                            break;
                        case "voipResponseing":
                        case "voipCalling":
                            "success" == e.status && (StarRtc.info("收到_webrtc_apply_ok"), C.emit("_webrtc_apply_ok", e.fingerprint, function() {
                                l({
                                    type: "voipStreamReady",
                                    status: "success"
                                }, "onWebrtcMessage")
                            }, 102, 111)), S(e, t, i);
                            break;
                        case "voipStreamReady":
                            O = C.getStreamByIndex(0);
                            C.switchStreamInfo(O), S({
                                type: "voipStreamReady",
                                streamObj: O.streamObj,
                                room: n
                            }, t, i);
                            break;
                        case "streamInactive":
                            n.leaveRoom(), n.sigDisconnect();
                            break;
                        default:
                            S(e, t, i)
                    }
            }
        };
    return n.sigConnect = function() {
        switch (P = !1, I = null, c) {
            case "src":
                if (!r.configModePulic) {
                    I = new StarRtc.WebrtcWebsocket(l, null), (t = {}).ip = r.srcServerUrl, o.ip = t.ip, o.websocketPort = r.srcServerWebsocketPort, o.webrtcPort = r.srcServerWebrtcPort, o.webrtcIP = r.srcServerWebrtcIP, t.websocketPort = o.websocketPort;
                    var e = "wss://" + t.ip + ":" + t.websocketPort;
                    return void I.connect(e)
                }
                break;
            case "vdn":
                if (!r.configModePulic) {
                    I = new StarRtc.WebrtcWebsocket(l, null), (t = {}).ip = r.vdnServerUrl, o.ip = t.ip, o.websocketPort = r.vdnServerWebsocketPort, o.webrtcPort = r.vdnServerWebrtcPort, o.webrtcIP = r.vdnServerWebrtcIP, t.websocketPort = o.websocketPort;
                    e = "wss://" + t.ip + ":" + t.websocketPort;
                    return void I.connect(e)
                }
                break;
            case "voip":
                var t;
                I = new StarRtc.WebrtcWebsocket(l, null), (t = {}).ip = r.voipServerUrl, o.ip = t.ip, o.websocketPort = r.voipServerWebsocketPort, o.webrtcPort = r.voipServerWebrtcPort, o.webrtcIP = r.voipServerWebrtcIP, t.websocketPort = o.websocketPort;
                e = "wss://" + t.ip + ":" + t.websocketPort;
                return void I.connect(e);
            default:
                return
        }
    }, n.sigDisconnect = function(e) {
        null == e && (e = !0), P = e, null != I && (I.close(), I = null)
    }, n.createNew = function() {
        if (null != I) switch (c) {
            case "src":
                var e = AG_LIVESRCMOONSERVER.mR;
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(e, {
                    conCurrentNum: 7,
                    roomId: s.roomInfo.chatroomId || "",
                    extra: s.roomInfo.name,
                    liveType: V
                }, M)))
        }
    }, n.createNewSuperRoom = function() {
        if (null != I) switch (c) {
            case "src":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.Fa, {
                    conCurrentNum: 7,
                    roomId: s.roomInfo.chatroomId || "",
                    extra: s.roomInfo.name,
                    liveType: V
                }, M)))
        }
    }, n.deleteCurrRoom = function() {
        if (null != I) switch (c) {
            case "src":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.JR, {
                    channelId: s.roomInfo.id
                }, M)))
        }
    }, n.createStream = function(e) {
        null == e && (e = {
            video: {
                width: {
                    ideal: 640
                },
                height: {
                    ideal: 480
                },
                frameRate: {
                    ideal: 25
                },
                facingMode: {
                    ideal: ["user"]
                }
            },
            audio: {
                deviceId: {
                    ideal: ["default"]
                }
            }
        }), "vdn" == c && (e = {
            video: !1,
            audio: !1
        }), "voip" == c && s.roomInfo.audioOnly && (e.video = !1), C.createStream(e, G, function() {
            l({
                type: "streamInactive"
            }, "onWebrtcMessage")
        })
    }, n.publishStream = function(e) {
        e = e || {
            video: !0,
            audio: !0
        }, C.publishStream(e)
    }, n.createScreenCaptureStream = function(e) {
        null == e && (e = {
            audio: {
                deviceId: {
                    ideal: ["default"]
                }
            }
        }), C.createScreenCaptureStream(e, G, function() {
            l({
                type: "streamInactive"
            }, "onWebrtcMessage")
        })
    }, n.joinRoom = function() {
        C.emit("ready", L, "voip" == c)
    }, n.leaveRoom = function(e) {
        if (null != I && 1 == I.readyState()) switch (c) {
            case "src":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.qR, {
                    channelId: s.roomInfo.id
                }, M)));
                break;
            case "vdn":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.I, ACTION_GROUP_ID.C, StarRtc.AUtils.constructVdnProtocol(AG_LIVEVDNMOONSERVER.Ja, {}, M)));
            case "voip":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.A, ACTION_GROUP_ID.T, StarRtc.AUtils.constructVOIPProtocol(AG_VOIPMOONSERVER.Yt, {
                    isActive: e ? 0 : 1
                }, M)))
        }
    }, n.streamConfigChange = function(e) {}, n.streamConfigApply = function(e) {
        switch (c) {
            case "src":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.QR, {
                    streamConfig: e
                }, M)));
                break;
            case "vdn":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.I, ACTION_GROUP_ID.C, StarRtc.AUtils.constructVdnProtocol(AG_LIVEVDNMOONSERVER.Xa, {
                    streamConfig: e
                }, M)))
        }
    }, n.getState = function() {
        return null != I ? I.readyState() : -1
    }, n.getType = function() {
        return c
    }, n.sendStreamData = function(e) {
        switch (c) {
            case "src":
                I.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.i, ACTION_GROUP_ID.C, StarRtc.AUtils.constructSrcProtocol(AG_LIVESRCMOONSERVER.XR, {
                    streamData: e,
                    streamDataType: 8
                }, M)))
        }
    }, n.activeDisconnect = function() {
        return P
    }, n
}, StarRtc.StarChatRoomSDK = function(e, t, R, a, O, E) {
    var _ = this,
        r = R,
        n = t,
        s = e,
        c = (a || CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_CHATROOM, O || new StarRtc.StarUserInfo),
        S = E || new StarRtc.StarConfig,
        i = new StarRtc.StarChatSDK(e, function(e, t) {
            switch (e.userData = r, e.obj = _, t) {
                case "onChatRoomMessage":
                    e.type, n(e, t, s);
                    break;
                default:
                    n(e, t, s)
            }
        }, r, a, c, S);
    return _.sigConnect = function() {
        i.sigConnect()
    }, _.sigDisconnect = function(e) {
        i.sigDisconnect(e)
    }, _.createNew = function() {
        i.createNew()
    }, _.sendChatMsg = function(e) {
        i.sendChatMsg(e)
    }, _.sendChatPrivateMsg = function(e, t) {
        i.sendChatPrivateMsg(e, t)
    }, _.sendChatCtrlPrivateMsg = function(e, t, R) {
        i.sendChatCtrlPrivateMsg(e, t, R)
    }, _.kickOutUser = function(e) {
        i.kickOutUser(e)
    }, _.banToSendMsg = function(e, t) {
        i.banToSendMsg(e, t)
    }, _.getRoomOnlineNum = function() {
        i.getRoomOnlineNum()
    }, _.deleteCurrRoom = function() {
        i.deleteCurrRoom()
    }, _.joinRoom = function() {
        i.joinRoom()
    }, _.leaveRoom = function() {
        i.leaveRoom()
    }, _.getState = function() {
        return i.getState()
    }, _.activeDisconnect = function() {
        return i.activeDisconnect()
    }, _
}, StarRtc.StarChatSDK = function(e, t, R, a, O, E) {
    var _ = this,
        r = {},
        n = R,
        s = t,
        c = e,
        S = null,
        i = 0,
        I = a || CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_CHATROOM,
        A = O || new StarRtc.StarUserInfo,
        o = E || new StarRtc.StarConfig,
        N = !1,
        M = function(e, t) {
            switch (e.userData = n, e.obj = _, t) {
                case "connect success":
                    var R;
                    R = StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructHeartBeatMsg(AG_CHATROOMMOONSERVER.Be)), S.startHeartBeat(R), s(e, t, c);
                    break;
                case "connect failed":
                case "connect closed":
                    S = null, s(e, t, c);
                    break;
                case "onmessage":
                    StarRtc.AUtils.parseProtocol(e, function(e) {
                        e.appid == APP_PRODUCT_ID.R && StarRtc.AUtils.parseChatMoonServerMessage(e.msgArr, function(e) {
                            M(e, "onChatRoomMessage")
                        })
                    });
                    break;
                case "onChatRoomMessage":
                    switch (e.type) {
                        case "createChatRoom":
                            "success" == e.status && (n.roomInfo.id = e.chatroomId, n.roomInfo.creator = A.userId);
                            break;
                        case "deleteChatRoom":
                        case "joinChatRoom":
                            e.status;
                            break;
                        case "recvChatPrivateMsg":
                        case "recvChatMsg":
                            if ("" == e.fromUserId || "" == e.msg) return;
                            if (e.msg = JSON.parse(e.msg), e.msg.fromId == A.userId) return
                    }
                    s(e, t, c)
            }
        };
    return _.sigConnect = function() {
        if (N = !1, o.configModePulic);
        else {
            S = new StarRtc.WebrtcWebsocket(M, null), r.ip = o.chatRoomServerUrl, r.port = o.chatRoomServerWebsocketPort;
            var e = "wss://" + r.ip + ":" + r.port;
            S.connect(e)
        }
    }, _.sigDisconnect = function(e) {
        null == e && (e = !0), N = e, null != S && (S.close(), S = null)
    }, _.createNew = function() {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Ye, {
            roomType: 0 == n.roomInfo.Type ? 1 : 2,
            conCurrentNum: 100,
            userDefineData: n.roomInfo.name,
            liveType: I
        }, A)))
    }, _.sendChatMsg = function(e) {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.je, {
            roomId: n.roomInfo.id,
            digest: "新消息",
            msgIndex: ++i,
            msg: e
        }, A)))
    }, _.sendChatPrivateMsg = function(e, t) {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Xe, {
            toUserId: e,
            roomId: n.roomInfo.id,
            digest: "新消息",
            msgIndex: ++i,
            msg: t,
            type: "1",
            code: "0"
        }, A)))
    }, _.sendChatCtrlPrivateMsg = function(e, t, R) {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Xe, {
            toUserId: e,
            roomId: n.roomInfo.id,
            digest: "新消息",
            msgIndex: ++i,
            msg: t,
            type: "0",
            code: R
        }, A)))
    }, _.kickOutUser = function(e) {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.We, {
            kickOutUserId: e
        }, A)))
    }, _.banToSendMsg = function(e, t) {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Ke, {
            banUserId: e,
            banTime: t
        }, A)))
    }, _.getRoomOnlineNum = function() {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.ze, {
            roomId: n.roomInfo.id
        }, A)))
    }, _.deleteCurrRoom = function() {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Fe, {}, A)))
    }, _.joinRoom = function() {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.qe, {
            roomId: n.roomInfo.id
        }, A)))
    }, _.leaveRoom = function() {
        S.send(StarRtc.AUtils.packageProtocol(APP_PRODUCT_ID.R, ACTION_GROUP_ID.V, StarRtc.AUtils.constructChatProtocol(AG_CHATROOMMOONSERVER.Qe, {}, A)))
    }, _.getState = function() {
        return null != S ? S.readyState() : -1
    }, _.activeDisconnect = function() {
        return N
    }, _
};