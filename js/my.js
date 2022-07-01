//title的改变
document.addEventListener('visibilitychange', function() {
    	if (document.visibilityState == 'hidden') {
    		normal_title = document.title
    		document.title = ': ( 还不回来！'
    	} else document.title = normal_title
    })

//黑夜模式提醒开启功能
setTimeout(function () {
    if ((new Date().getHours() >= 19 || new Date().getHours() < 7) && !$('body').hasClass('DarkMode')) {
        let toastHTML = '<span style="color:#97b8b2;border-radius: 10px;>' + '<i class="fa fa-bellaria-hidden="true"></i>晚上使用黑夜模式阅读能够减轻视觉疲劳。</span>'
        M.toast({ html: toastHTML })
    }
}, 2000)