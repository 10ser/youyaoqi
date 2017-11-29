// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // 漫画分类
    "classify": {
        // 小图列表
        "books|15-30":[{
            "books_id|+1": 1,
            "imgs": "@image(115x145,@color,@ctitle(2))",
            "title": "@ctitle(2,7)",
            "hot|1-20.1": 100,
            "author": "@ctitle(1,4)",
            "star": "false",
            "content": "@ctitle(15,30)",
            "classifys|0-11": 100
        }],
        // 分类列表
        "classifys|12": [{
            "classId|+1": 1,
            "classname": "@ctitle(2)",
            "classlists|20-30": [{
                "books_id|+1": 1,
                "classname|0-11": 100,
                "imgs": "@image(75x95,@color,@ctitle(2))",
                "title": "@ctitle(2,7)",
                "hot|1-20.1": 100,
                "author": "@ctitle(1,4)",
                "star": false,
                "cont": "@ctitle(6,10)",
                "content": "@ctitle(25,60)",
                "time": "@datetime(yyyy-MM-dd)",
                "money|1-20": 1,
                "moon|1-10": 1,
                "hua|100-999": 1,
                "choose": false,
                "setcion|30-100": [{
                    "sets": "@ctitle(1,6)",
                    "lists|+1": 1
                }],
                "comment|3-8": [{
                    "imgs": "@image(39x39,@color,@ctitle(1))",
                    "usernames": "@ctitle(1,4)",
                    "lv|1-10": 1,
                    "text": "@ctitle(8,40)",
                    "times": "@datetime(yyyy-MM-dd HH:mm:ss)" 
                }],
                "bookimgs|20-30": [{
                    "imgs": "@image(375x530,@color,@ctitle(1))"
                }]
            }]
        }]            
    },
    "banner|4": [{
        "imgs": "@image(375x175,@color,@ctitle(1))"
    }],
    // 用户存储
    "users": [
        /*
        {
            id,
            用户名，
            会员天数，
            money,
            月票
        }
        */
    ],
    "books": [],
    "historys": []
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
 });