const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // grava vídeo por padrão
  e2e: {
    setupNodeEvents(on, config) {
      // implementa plugins, se necessário

    },
    chromeWebSecurity: false ,
    pageLoadTimeout: 60000,

  },
});
