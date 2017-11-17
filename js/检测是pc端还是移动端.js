// JavaScript Document
~function(){
	var reg1 = /AppleWebKit.*Mobile/i,
		reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;	

//->条件成立说明当前页面是运行在移动端设备中的
	if(reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)){
		
		//如果当前页面的URL是pc端项目的地址：我们需要跳转到移动端项目
		if(window.location.href.indexOf("www.tangchao.cn") >=0){
			window.location.href = "http://phone.tangchao.cn/";	
		}
		return;
	}
	
	//->反之则说明当前的页面是运行在pc端设备中的，如果访问的URL是移动端的，我们需要跳转到pc端地址上。
		if(window.location.href.indexOf("phone.tangchao.cn") >=0){
			window.location.href = "http://www.tangchao.cn/";	
		}
}();






































