import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function buildResolvers(
    options: BuildOptions
): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
        symlinks: false,
    };
}
