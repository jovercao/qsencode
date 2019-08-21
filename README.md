# qsencode

> 查询字符串的序列化和反序列化函数

## 使用方法

```js
const qsencode = require('qsencode');
qsencode({
    obj: {
        a: 1,
        b: 'str'
    },
    array: [
        1,
        2,
        3
    ]
});

// => obj.a=1&obj.b=str&array[0]=1&array[1]=2&array[2]=3

```
