const lang = {
    cn: {
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
    }
};

const data = {
    consume: {
        a: 3,
        b: 1,
        c: 1,
        table: {},
    
        // f(x) = a * e^bx + c
        func: function (x) {
            return Math.floor(this.a * Math.exp(this.b * x) + this.c)
        },
    
        init: function (limit=30) {
            for (let i=1; i<=limit; i++) {
                this.table[i] = this.func(i);
            }
        }
    },

    init: function () {
        this.consume.init()
    }
};

const current = {
    qty: {},
    prod: {},
    consume: {},
    science: {},

    init: function () {
        this.consume = data.consume.table;
        this.qty[0] = 0;
        this.prod[0] = 0;
    }
};

const setting = {
    tick: 10,
    lang: 'cn'
};

function layout () {
    let dungeon = $("#dungeon-row");
    let example = $("#dungeon-row [example]");
    let i, text, node;
    for (i=0; i<=30; i++) {
        node = example.clone().removeAttr("example");
        text = lang[setting.lang][i];
        node.find(".cell").attr("data-level", i);
        node.find("span[role=title]").text((text && text[0]) || ("CellLevel" + i));
        if (!current.qty[i]) {
            node.hide()
        };
        dungeon.append(node);
    }

    dungeon.on("click", ".cell", function () {
        let level = parseInt(this.getAttribute("data-level"));
        if (level == 0){
            current.qty[level] += 1;
            $(this).on("update")
        } else if (current.qty[level-1] < current.consume[level]) {
            current.qty[level-1] -= current.consume[level];
            current.qty[level] += 1;
            $(this).on("update")
        } else {
            console.log("no enough resource");
        }
    });

    dungeon.on("update", ".cell", function () {
        let level = parseInt(this.getAttribute("data-level"));
        if (level in current.qty) {
            node.find("span[role=qty]").text(Math.floor(current.qty.get(i, 0)));
            node.find("span[role=prod]").text(Math.floor(current.prod.get(i, 0))+ "/s");
        } else {
            $(this).hide();
        }
    })
};

$(document).ready(function () {
    data.init();
    current.init();
    layout();
});
