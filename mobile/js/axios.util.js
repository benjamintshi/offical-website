// 前提：已经引入了
// <script src="../js/common.js"></script>
// <script src="https://cdn.bootcss.com/axios/0.19.0/axios.min.js"></script>

/**
 * AJAX GET请求
 * 合法的请求示例：
 * 1. ajax_get(url, null, function(data){});
 * 2. ajax_get(url);
 * 3. ajax_get(url, {name: '小明'});
 * 4. ajax_get(url, {name: '小明'}, function(data){});
 * @param url: 【必须】 请求地址
 * @param param_json: 【可选】 请求参数
 * @param callback: 【可选】 正常请求调用
 * @param error_callback：【可选】 请求异常时调用
 */
function ajax_get(url, param_json, callback, error_callback) {
    axios.get(url, {params: param_json})
        .then(function (response) {
            if (response.status !== 200) {
                if (!empty(error_callback)) {
                    error_callback(response);
                }
                return;
            }
            if (!empty(callback)) {
                callback(response.data);
            }
        })
        .catch(function (error) {
            if (!empty(error_callback)) {
                error_callback(error);
            }
        });
}

/**
 * AJAX POST请求 application/x-www-form-urlencoded
 * 合法的请求示例：
 * 1. ajax_post(url, null, function(data){});
 * 2. ajax_post(url);
 * 3. ajax_post(url, {name: '小明'});
 * 4. ajax_post(url, {name: '小明'}, function(data){});
 * @param url: 【必须】 请求地址
 * @param param_json: 【可选】 请求参数
 * @param callback: 【可选】 正常请求调用
 * @param error_callback：【可选】 请求异常时调用
 */
function ajax_post(url, param_json, callback, error_callback) {
    axios.post(url, param_json, {
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }]
    })
        .then(function (response) {
            if (response.status !== 200) {
                if (!empty(error_callback)) {
                    error_callback(response);
                }
                return;
            }
            if (!empty(callback)) {
                callback(response.data);
            }
        })
        .catch(function (error) {
            if (!empty(error_callback)) {
                error_callback(error);
            }
        });
}