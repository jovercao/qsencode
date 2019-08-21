
export function encode(params, path, pindex) {
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


		switch (type) {
			case 'object':
				str += encode(value, paramName, index);
				break;
			default:
				if (index > 0 || pindex > 0) {
					str += '&';
				}
				str += `${paramName}=${encodeURIComponent(value)}`;
				break;
		}
		return str;
	}, '');
}

export default encode;

// module.exports = encode;
// module.exports.default = module.exports;


// console.log(
//     encode({ z: 323, a: { x: 1, y: false }, b: 'fdsfds', c: null, d: undefined, e: [1,22,345,667], f: { fd: null, bb: undefined } })
// );