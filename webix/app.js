import task1 from "./components/task1.js";

webix.protoUI(
    {
        name: "mybutton",
        $cssName: "button",
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

webix.ready(() => {
    webix.ui({
        rows: [task1],
    });
});
