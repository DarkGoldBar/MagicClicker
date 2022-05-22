const data = {
    consume = {
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

    lang_cn = {
        0: ["魔力", "魔力炉"],
        1: ["史莱姆", "史莱姆池"],
        2: ["哥布林", "哥布林洞穴"],
        3: ["地精", "地精地洞"],
        4: ["蜥蜴人", "蜥蜴人沼泽"],
        5: ["僵尸", "僵尸坟场"],
        6: ["骷髅", "埋骨之地"],
        7: ["鬼魂", "通灵塔"],
        8: ["木乃伊", "金字塔"],
        9: ["吸血鬼", "旧城堡"],
    },
    
    init = function () {
        this.consume.init();
    }
};

const current = {
    dungeon: {},
    science: {},
}

const setting = {
    tick: 10
}

function layout () {
    
};

data.init();
