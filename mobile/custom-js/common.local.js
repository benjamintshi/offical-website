/**
 * 项目日期格式化，将'2019-12-11 11:12:22'，格式化为''2019.12.11'
 * @param date_str
 * @returns {string}
 */
function date_format(date_str) {
    if (empty(date_str)) {
        return '';
    }
    return date_str.split(' ')[0].replace(/-/g, '.');
}