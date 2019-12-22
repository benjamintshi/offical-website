function empty(str) {
	var ret = false;
	if (str == null || typeof(str) == 'undefined' || str === '' || str === 0 || str === '0' || str === false) {
		ret = true;
	}
	return ret;
}

function html_encode(str) {
	var s = "";
	if (str == null || str.length == 0) return "";
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/ /g, "&nbsp;");
	s = s.replace(/\'/g, "&#39;");
	s = s.replace(/\"/g, "&quot;");
	s = s.replace(/\n/g, "<br/>");
	return s;
}