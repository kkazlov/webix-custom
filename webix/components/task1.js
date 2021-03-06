const task1 = {
    rows: [
        {
            view: "toolbar",
            cols: [
                {
                    view: "label",
                    label: "Sort list :",
                    inputWidth: 100,
                    align: "left",
                },
                {
                    view: "mybutton",
                    width: 100,
                    state: 0,
                    states: { 0: "Off", 1: "Sort Asc", 2: "Sort Desc" },
                    on: {
                        onStateChange: function (state) {
                            const list = $$("myList");
                            if (state == 0) list.sort("id", "asc");
                            else if (state == "1") list.sort("title", "asc");
                            else list.sort("title", "desc");
                        },
                    },
                },
                {},
            ],
        },
        {
            view: "list",
            id: "myList",
            scroll: false,

            type: {
                height: 60,
                width: 240,
            },
            template: "<strong>#id#. #title#</strong><br> Year: #year#, rank: #rank#",
            url: "../data.js",
        },
    ],
};

export default task1;
