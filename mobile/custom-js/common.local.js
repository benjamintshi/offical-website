function date_format(date_str) {
    if (empty(date_str)) {
        return '';
    }
    return date_str.split(' ')[0].replace(/-/g, '.');
}