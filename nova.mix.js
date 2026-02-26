const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
    name() {
        return 'nova-extension'
    }

    register(name) {
        this.name = name
    }

    webpackPlugins() {
        return new webpack.ProvidePlugin({
            _: 'lodash',
        })
    }

    webpackConfig(webpackConfig) {
        webpackConfig.externals = {
            vue: 'Vue',
        }

        webpackConfig.resolve.alias = {
            ...(webpackConfig.resolve.alias || {}),
            'laravel-nova': path.join(__dirname, '../../vendor/laravel/nova/resources/js/mixins/packages.js'),
        }

        webpackConfig.resolve.modules = [
            path.resolve(__dirname, 'node_modules'),
            'node_modules',
        ]

        webpackConfig.output = {
            uniqueName: this.name,
        }
    }
}

mix.extend('nova', new NovaExtension())
