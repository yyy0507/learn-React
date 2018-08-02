

// function test() {
// 	console.log(a);
// 	var a = 10;
// 	console.log(a);
// 	function a() {
// 		console.log("fa")
// 	}
// }

// test();


// function test() {
// 	console.log(a);
	
// 	function a() {
// 		console.log("fa")
// 	}
// 	var a = 10;
// 	console.log(a);
// }
// test();



// console.log(5 + "12");  //512
// console.log(undefined + 5);  //NaN


// https://caniuse.com

// https://developer.mozilla.org/zh-CN

// fetch基于promise

// fetch 请求url和xml，post请求


// async function get(url) {
// 	let data = await fetch(url);
// 		data = await data.json();

// 	console.log(data);
// }

// get('url地址');

 // return new Promise((resolve,reject) => {
 //        http.get(url, res => {
 //            const { statusCode } = res;
        
 //            let error;
 //            if (!((statusCode >= 200 && statusCode < 300) || statusCode === 304)) {
 //                error = new Error(`Request Failed.\n` +
 //                                `Status Code: ${statusCode}`);
 //            }

 //            if (error) {
 //                res.resume();
 //                reject(error);
 //            }
        
 //            res.setEncoding('utf8');
 //            let rawData = '';
 //            res.on('data', chunk => { rawData += chunk; });
 //            res.on('end', () => {
 //                resolve(rawData);
 //            });
 //        }).on('error', error => {
 //            reject(error);
 //        });
 //    })








var students = new Array();
students[0] = "pika";
students[1] = "hello";
students[2] = "hey";
// var json = JSON.stringify(students);
// console.log(json);
// console.log(typeof json);
console.log(students);
console.log(typeof students);








































