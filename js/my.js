//title的改变
document.addEventListener('visibilitychange', function() {
    	if (document.visibilityState == 'hidden') {
    		normal_title = document.title
    		document.title = ': ( 还不回来！'
    	} else document.title = normal_title
    })
