var path = require('path');
var envconfig = require('./env')
module.exports = {
    plugins: ['mock'],
    config: {
        exports: [
            './scripts/index.js',
            './scripts/index2.js',
            './styles/index.css'
        ],

        commonsChunk: {
            name: 'common',
            vendors: {    //vendors是一个处理第三方库的配置项，结构是一个key,value数组,key是chunkname，value是第三方类库数组
                lib: ['react-dom', 'react']
            }
        },
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs
            this.applyMiddleware((req, res, next) => {
                if(path.extname(req.url) === '.hello') {
                    res.end('hello!'); // 直接返回结果
                } else {
                    next(); // 不进行处理，转给后续中间件
                }

            });

            // 示例 - 根据当前环境设置环境变量
            var ENV_PARAMS = envconfig[this.env];
            // switch (this.env) {
            //     case 'local':
            //         ENV_PARAMS = {name: 'a'};
            //         break;
            //     case 'dev':
            //         ENV_PARAMS = {name: 'b'};
            //         break;
            //     case 'prd':
            //         ENV_PARAMS = {name: 'c'};
            //         break;
            //     default:
            // }

            baseConfig.plugins.push(new this.webpack.DefinePlugin({
                ENV_PARAMS: JSON.stringify(ENV_PARAMS)
            }));

            baseConfig.output.local.publicPath = "http://www.baidu.com/";

            baseConfig.module.loaders.map(function (loader) {
                if (loader.test.test('xxx.css')) {
                    loader.loader += '!postcss-loader';
                }
                return loader;
            });

            // baseConfig.module.loaders.push({
            //     test: /\.css$/,
            //     loader: 'postcss-loader'
            // });

            console.log(baseConfig.module.loaders);

            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
