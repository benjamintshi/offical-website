import axios from 'axios'
// import { Message } from 'element-ui';  //element库的消息提示，可以不用

//创建axios实例
var service = axios.create({
    baseURL: 'http://cultrual.bbwhm.com:8087/api',
    timeout: 10000,
    headers: {
      'content-type': 'application/json',
      // 'Access-Control-Allow-Origin':'*',
      // 'Access-Control-Allow-Credentials':'ture',
      // 'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
      "token":'14a1347f412b319b0fef270489f'
    }
})
export default {
    //get请求，其他类型请求复制粘贴，修改method
    get(url, param) {
        for (let i in param) {
          if (param[i] === ''  || typeof (param[i]) == "undefined" || param[i] === 'undefined') {
            delete param[i]
          }
        }
        return new Promise((cback, reject) => {
            service({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                              //axios返回的是一个promise对象
                var res_code = res.status.toString();
                if (res_code.charAt(0) == 2) {
                    cback(res);   //cback在promise执行器内部
                } else {
                    console.log(res, '异常1')
                }
            }).catch(err => {
                if (!err.response) {
                    console.log('请求错误:'+ url)
                  console.log(err)
                    //Message是element库的组件，可以去掉
                    // Message({
                    //     showClose: true,
                    //     message: '请求错误',
                    //     type: 'error'
                    // });
                } else {
                    reject(err.response);
                    console.log(err.response, '异常2')
                }
            })

        })
    },
  post(url, param) {
    for (let i in param) {
      if (param[i] === ''  || typeof (param[i]) == "undefined" || param[i] === 'undefined') {
        delete param[i]
      }
    }
    return new Promise((cback, reject) => {
      service({
        method: 'post',
        url,
        params: param,
      }).then(res => {
        //axios返回的是一个promise对象
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res);   //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误:'+ url)
          console.log(err)
          //Message是element库的组件，可以去掉
          // Message({
          //     showClose: true,
          //     message: '请求错误',
          //     type: 'error'
          // });
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  }
}
