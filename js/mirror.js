function Mirror(){let i,n,o;i=window.location.pathname,n=window.location.hostname,"lingerbhw.cn"===n?(o="https://lingerbhw.gitee.io"+i,window.alert("即将为您跳转至镜像站"),window.location.href=o):"lingerbhw.gitee.io"===n?(o="https://lingerbhw.cn"+i,window.alert("当前为镜像站，即将返回主站"),window.location.href=o):window.alert("本地调试，无需跳转")}