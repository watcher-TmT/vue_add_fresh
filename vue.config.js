const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            // 资源前缀
            '/api': {
                // 代理服务器地址
                target: "http://localhost:8000",
                // 重写路径
                pathRewrite: {
                    // 资源路径匹配正则：替换值
                    '^/api': ''
                },
                // 是否支持 websocket
                ws: true,
                // 是否修改请求头 host 值
                changeOrigin: true
            }
        }
    },

    configureWebpack: {
        //配置webpack自动按需引入element-plus，
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ]
    }
})