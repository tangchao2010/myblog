/**
 * Created by tencrwin on 2017/11/17.
 */
//��ʼ��swiperʵ������Ļ���
//new swiper([container selector],[settings])
var swiper1 = new Swiper('.swiper-container',{
    direction: 'vertical',
    loop: true,/*�޷��νӹ���*/
    /*���л����������ʱ�򣬸���ǰչʾ��������Ӷ�Ӧ��ID���ɴ�ʵ�ֶ�Ӧ�Ķ���Ч��*/
    onSlideChangeEnd:function(swiper){
        var slideArray = swiper.slides; //��ȡ��ǰһ���ж��ٸ���飨����loopǰ���ӵ�������
        //console.log(slideArray);
        var curIn = swiper.activeIndex;//��ǰչʾ�������������
        //console.log(curIn);
        var total = slideArray.length; //һ�����ٸ��������
        var targetId = 'page'; //����ID��page��
        //�жϵ�ǰ�������
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
        //����ǰ�Ļ������ID,��Ҫ��������Ƴ�
        //slideArray[curIn].id = targetId;
        [].forEach.call(slideArray,function(item,index){  //item ��ǰ  ��������ԭ���ϵ�call����ʵ��
            if(curIn ===index){
               item.id = targetId;
                return;
            }
            item.id = null;  //�Ƴ�
        });
    }
})

~function(){
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW/desW;  //����
    //�����ǰ��Ļ����Ѿ�������Ƹ壬Ϊ�˱���ͼƬ������չʾ������һ�㶼�������������ˣ�����Ƹ�Ŀ��Ϊ���տ�ȣ����磺jd
    var oMain = document.getElementById('main');
    if(winW>desW){
        oMain.style.width = desW + 'pz';
        oMain.style.margin = '0 auto';
        return; //����������
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();

/*music*/
//��ֹ��ͻ��һ���Զ��庯��
~function(){
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click',function(){
        if(musicAudio.paused){ //��ǰ������ͣ״̬
            musicAudio.play(); //����
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause(); //pause��d��״̬������d�Ƿ�����ͣ
        musicMenu.className = 'music';

        /* ifд��
         if(musicAudio.paused){ //��ǰ������ͣ״̬
             musicAudio.play(); //����
             musicMenu.className = 'music move';
         }else{
             musicAudio.pause(); //pause��d��״̬������d�Ƿ�����ͣ
             musicMenu.className = 'music';
         }
        */
    },false)

    function controlMusic(){
        musicAudio.volume = 0.1; //���� 0-1֮���ֵ
        musicAudio.play(); //����
        musicAudio.addEventListener('canplay',function(){
            musicMenu.style.display= 'block';
            musicMenu.className = 'music move';
        },false)  //canplay ����ǰ����Ƶ�ܲ�����   true���ǲ���falseð�� �����������������Ȳ�������ð��
    }
    window.setTimeout(controlMusic,1000);
}();