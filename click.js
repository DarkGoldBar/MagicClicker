const data_consume = {
    a: 3,
    b: 1,
    c: 1,
    table: [],

    // f(x) = a * e^bx + c
    func: function (x) {
        return Math.floor(this.a * Math.exp(this.b * x) + this.c)
    },

    set_table: function (limit=30) {
        let f = 1;
        for (let i=1; i<=limit; i++) {
            f = this.func(i);
            this.table.push(f);
        }
    }
};
