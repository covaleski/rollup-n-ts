// rollup.config.js

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { globSync } from 'glob';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
    // TypeScript
    {
        input: globSync('src/ts/*.ts'),
        output: {
            dir: 'dist/media/js',
            format: 'es',
        },
        plugins: [
            commonjs(),
            typescript({tsconfig: 'tsconfig.json'}),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                extensions: ['.ts'],
                presets: ['@babel/preset-typescript'],
            }),
            nodeResolve(),
        ],
    },
];
