module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "src/assets/variables/_variables.scss";
            @import "src/assets/fonts/_fonts.scss";
          `,
      },
    },
  },
};
