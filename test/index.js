const qsencode = require('../index');
const assert =require('assert');

describe('test', () => {
    it('test01', () => {
        const qs = qsencode({
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

        assert.equal(qs, 'obj.a=1&obj.b=str&array[0]=1&array[1]=2&array[2]=3');
    });
});