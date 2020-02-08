module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/Styles/mainStyles.scss";`
        }
      }
    }
  };