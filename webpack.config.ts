import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import StylelintPlugin from "stylelint-webpack-plugin";
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import lightningcss from 'lightningcss';
import browserslist from 'browserslist';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';
import webpack from "webpack";

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minify: CssMinimizerPlugin.lightningCssMinify,
                minimizerOptions: {
                    // @ts-ignore
                    targets: lightningcss.browserslistToTargets(browserslist())
                },
            }),
            new TerserPlugin(),
        ],
    },
    output: {
        path: path.join(__dirname, "./wwwroot/dist"),
        clean: true,
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('css-loader'),
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-import'),
                                    require('tailwindcss/nesting'),
                                    require('tailwindcss'),
                                ],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
            },
            {
                test: /\.svg/,
                exclude: /node_modules/,
                type: "asset/inline",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                masterLinks: './src.html',
            },
            js: {
                filename:  prod ? 'assets/js/[name].[contenthash:8].js' : 'assets/development/js/[name].[contenthash:8].js',
            },
            css: {
                filename: prod ? 'assets/css/[name].[contenthash:8].css' : 'assets/development/css/[name].[contenthash:8].css',
            },
        }),
        new StylelintPlugin({
            context: path.resolve(__dirname, "./Content/Css/"),
            extensions: ["css"],
            fix: false,
        }),
        // @ts-ignore
        new BrowserSyncPlugin({
            proxy: 'https://localhost:44343/', //set to project url
            https: true,
            open: false
        })
    ],
};

export default config;
