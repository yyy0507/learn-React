module.exports = [
	{
        pattern: /\/testA\.com\/(.*)\.do/, // 匹配一类接口，如 /test.com/list.do -> ./mockData/list.json
        responder: './mockData/$1.json'
    },
	{
        pattern: /\/testB\.com\/person\.do/, // 直接返回数据
        responder: {id: 'abc'}
    },
	{
        pattern: '/testC.com/query.do', // pattern 为字符串
        responder: {id: 'abc'}
    },
    {
        pattern: '/test.com/query.do',
        responder: 'http://yapi.corp.qunar.com/mock/2388/test/userinfo'
    }
];
