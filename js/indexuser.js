/**
 * Created by tencrwin on 2017/11/17.
 */
//初始化swiper实现区域的滑动
//new swiper([container selector],[settings])
var swiper1 = new Swiper('.swiper-container',{
    direction: 'vertical',
    loop: true,/*无缝衔接滚动*/
    /*当切换区域结束的时候，给当前展示的区域添加对应的ID，由此实现对应的动画效果*/
    onSlideChangeEnd:function(swiper){
        var slideArray = swiper.slides; //获取当前一共有多少个活动块（包含loop前后多加的两个）
        //console.log(slideArray);
        var curIn = swiper.activeIndex;//当前展示这个活动区域的索引
        //console.log(curIn);
        var total = slideArray.length; //一个多少个活动块区域
        var targetId = 'page'; //计算ID是page几
        //判断当前活动块索引
        switch (curIn){
            case 0:
                targetId += total-2;
                break;
            case (total-1):
                targetId += 1;
                break;
            default :
                targetId += curIn;
        }
        //给当前的活动块设置ID,还要把其余的移除
        //slideArray[curIn].id = targetId;
        [].forEach.call(slideArray,function(item,index){  //item 当前  借用数组原型上的call方法实现
            if(curIn ===index){
               item.id = targetId;
                return;
            }
            item.id = null;  //移除
        });
    }
})

~function(){
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW/desW;  //比例
    //如果当前屏幕宽度已经大于设计稿，为了保障图片的良好展示，我们一般都不让其继续变大了，以设计稿的宽度为最终宽度，例如：jd
    var oMain = document.getElementById('main');
    if(winW>desW){
        oMain.style.width = desW + 'pz';
        oMain.style.margin = '0 auto';
        return; //不往下走了
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();

/*music*/
//防止冲突加一个自定义函数
~function(){
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click',function(){
        if(musicAudio.paused){ //当前处于暂停状态
            musicAudio.play(); //播放
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause(); //pause加d是状态，不加d是方法暂停
        musicMenu.className = 'music';

        /* if写法
         if(musicAudio.paused){ //当前处于暂停状态
             musicAudio.play(); //播放
             musicMenu.className = 'music move';
         }else{
             musicAudio.pause(); //pause加d是状态，不加d是方法暂停
             musicMenu.className = 'music';
         }
        */
    },false)

    function controlMusic(){
        musicAudio.volume = 0.1; //声音 0-1之间的值
        musicAudio.play(); //播放
        musicAudio.addEventListener('canplay',function(){
            musicMenu.style.display= 'block';
            musicMenu.className = 'music move';
        },false)  //canplay 代表当前的音频能播放了   true就是捕获，false冒泡 第三个参数决定是先捕获还是先冒泡
    }
    window.setTimeout(controlMusic,1000);
}();