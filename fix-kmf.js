define('fixkmf', [
    'jquery', 'https://raw.github.com/aui/artTemplate/master/dist/template.js', 'gre/js/mod/screenword/screen_word'
], function (a, b, c) {
    var sc = a('gre/js/mod/screenword/screen_word');
    var d = a('jquery');
    sc.prototype.render = function () {
        var t = a("https://raw.github.com/aui/artTemplate/master/dist/template.js");
        var b,
            c = d.trim(this.curWord),
            e = c.split(/\s/),
            f = this,
            g = this.url + c,
            h = d(this.eleLayer),
            i = a('gre/js/tpl/translate.tpl'),
            j = t.compile(i),
            k = '<div class="nocontent"></div>',
            l = /[\u4e00-\u9fa5]/.test(c);
        return this.status.loading ? this : e.length > 1 || l ? (h.html(k), this) : (this.status.loading = !0, d.post(g, function (a) {
            1 == a.status && 0 == a.result ? h.html(k) : 1 == a.status && (a.result.supportAudio = f.checkAudio(), null == a.result.us_pron && (a.result.us_pron = !1), b = j(a), h.html(b), f.curWord = a.result.word, f.curAudio = a.result.us_pron),
                f.status.loading = !1
        }, 'json'), this)
    };
});
