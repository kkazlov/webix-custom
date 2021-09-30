import task1 from "./components/task1.js";

webix.protoUI(
    {
        name: "mybutton",
        $cssName: "button stateButton",
        $init: function (config) {
            const state = config.value || 0;
            config.value = config.states[state];
            webix.html.addCss(this.$view, `webix_state_${state}`);

            this.attachEvent("onItemClick", () => {
                let state = this.config.state;
                webix.html.removeCss(this.$view, `webix_state_${state}`);

                state++;
                if (state > 2) {
                    state = 0;
                }
                this.config.state = state;
                this.config.label = this.config.states[state];
                this.refresh();

                webix.html.addCss(this.$view, `webix_state_${state}`);
                this.callEvent("onStateChange", [state]);
            });
        },
    },
    webix.ui.button
);

webix.protoUI(
    {
        name: "formControl",
        $init: function (config) {
            const btns = {
                cols: [
                    {
                        view: "button",
                        value: "Cancel",
                        on: {
                            onItemClick: () => {
                                this.clear();
                            },
                        },
                    },
                    {},
                    {
                        view: "button",
                        value: "Save",
                        css: "webix_primary",
                        on: {
                            onItemClick: () => {
                                if(!config.saveAction) {
                                    webix.message("default saveAction is working");
                                } else {
                                    config.saveAction();
                                }
                                
                            },
                        },
                    },
                ],
            };
            const fields = config.fields.map((item) => {
                return { view: "text", label: item, name: item };
            });
            config.elements = [...fields, btns];
        },
    },
    webix.ui.form
);

webix.ready(() => {
    webix.ui({
        cols: [
            task1,
            { view: "resizer" },
            {
                view: "formControl",
                id: "formOne",
                fields: ["one", "two", "three"],
                saveAction: function () {
                    webix.message("saveAction is working");
                },
            },
        ],
    });
});
