import crypto from 'crypto'

/**
 * 获取页面路径中的参数值，获取失败返回false
 * 例如：
 * http://www.runoob.com/index.php?id=1&image=awesome.jpg
 * url_variable('id')//1
 * url_variable('image')//awesome.jpg
 * @param variable: 变量名
 * @returns {string|boolean}
 */
function url_variable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

/**
 * 检测对象是否为空
 * @param str
 * @returns {boolean}
 */
function empty(str) {
  let ret = false;
  if (str == null || typeof (str) == 'undefined' || str === '' || str === 0 || str === '0' || str === false) {
    ret = true;
  }
  return ret;
}

/**
 * MD5字符串加密
 * @param str: 要加密的字符串
 * @returns {string}
 */
function md5(str) {
  const md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}

export {url_variable, empty, md5}
