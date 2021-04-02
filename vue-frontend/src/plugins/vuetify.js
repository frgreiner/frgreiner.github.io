import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#607d8b",
                secondary: "#ff5722",
                accent: "#9c27b0",
                error: "#f44336",
                warning: "#ffc107",
                info: "#2196f3",
                success: "#4caf50"
            }
        },
        options: {
            customProperties: true,
        },
    },
});