
/**
 * 将对象编码为querystring
 * @param {*} params 参数
 * @returns {string} 返回querystring
 */
function encode(params) {
    const path = arguments[1];
    const pindex = arguments[2];
    const isArray = Array.isArray(params);
    return Object.entries(params).reduce((str, [key, value], index) => {
        if (value === null || value === undefined) {
            return str;
        }

        const type = typeof value;
        let paramName;
        if (path && isArray) {
            paramName = `${path}[${encodeURIComponent(key)}]`;
        }
        else if (path) {
            paramName = `${path}.${encodeURIComponent(key)}`;
        }
        else {
            paramName = encodeURIComponent(key);
        }

        if (type === 'object') {
            str += encode(value, paramName, index);
        } else {
            if (index > 0 || pindex > 0) {
                str += '&';
            }
            str += `${paramName}=${encodeURIComponent(value)}`;
        }
        return str;
    }, '');
}

module.exports = encode;
module.exports.encode = encode;
