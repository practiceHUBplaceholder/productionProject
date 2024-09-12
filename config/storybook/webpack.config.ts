import path from 'path';
import { DefinePlugin, RuleSetRule, Configuration } from 'webpack';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule | '...') => {
        if (rule !== '...') {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
        }
        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config.module!.rules!.push(buildCssLoader(true));

    config.plugins?.push(new DefinePlugin({
        __IS__DEV__: true,
    }));
    return config;
};
