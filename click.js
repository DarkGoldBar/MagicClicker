import lang from './lang.js'

const data = {
    consume: {
        a: 3,
        b: 1,
        c: 1,
        table: [],
    
        // f(x) = a * e^bx + c
        func: function (x) {
            return Math.floor(this.a * Math.exp(this.b * x) + this.c)
        },
    
        init: function (limit=30) {
            for (let i=1; i<=limit; i++) {
                this.table.push(this.func(i));
            }
        }
    },
    
    init: function () {
        this.consume.init();
    }
};

const current = {
    qty: {},
    prod: {},
    science: {},
};

const setting = {
    tick: 10,
    lang: {},

    set_lang: function (lang_tag) {
        if (lang[lang_tag]) {
            this.lang = lang[lang_tag]
        }
    }
};

function layout () {
    let dungeon = $("#dungeon-row");
    let example = $("#dungeon-row [example]");
    let node;
    let i;
    for (i=0; i<=30; i++) {
        node = example.clone()
    }
};

$(document).ready(function () {
    data.init();
    layout();    
});
