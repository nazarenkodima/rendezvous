// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
const Path = require('path');

// Instruments
import {
    STATIC,
    SOURCE,
    CHUNK_NAME_ASSET,
} from '../constants';

export const loadImages = () => ({
    module: {
        rules: [
            {
                test:    /\.(png|jpg|jpeg)$/,
                include: SOURCE,
                use:     [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});
export const loadHtmlPartials = () => ({
    module: {
        rules: [
            { test:    /\.(html)$/,
                include: Path.join(__dirname, 'static/'),
                use:     {
                    loader:  'html-loader',
                    options: {
                        interpolate: true,
                    },
                },
            },
        ],
    },
});
export const loadSvg = () => ({
    module: {
        rules: [
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.js$/,
                },
                use: [
                    '@svgr/webpack',
                    {
                        loader:  'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.css$/,
                },
                use: [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test:    /\.woff2$/,
                include: SOURCE,
                use:     [
                    {
                        loader:  'file-loader',
                        options: {
                            name: `fonts/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const connectHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title:    'Ravenous',
            template: Path.resolve(__dirname, `${STATIC}/template.html`),
            favicon:  `${STATIC}/favicon/ravenous_favicon.ico`,
        }),
    ],
});
