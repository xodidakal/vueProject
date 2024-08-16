const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // SCSS 파일에서 사용하는 변수나 믹스인을 전역으로 적용할 수 있습니다
        additionalData: `@import "@/assets/styles/LoginPage.scss";`
      }
    }
  }
})
