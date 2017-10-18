$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	 //main2预约提示
    $('#submit').click(function(){
        $('.tankuang').show()
    });
    $('.tankuang img').click(function(){
        $('.tankuang').hide()
    });
    //main3选项卡控制
	$('.m3-btn-box li').each(function (index) {
		$(this).click(function () {
			for(var i=0;i<4;i++){
				$('.m3-btn-box li').eq(i).css('background-image','url("images/m3-'+i+'.png")')
			}
			$(this).css('background-image','url("images/m3-'+index+'-2.png")')
			// console.log(index)
            $('.m3-show-box').hide().eq(index).show()
        })
    })
	//main7一级选项卡控制
	$('.m7-btn-box li').each(function (index) {
		$(this).click(function () {
			for(var i=0;i<3;i++){
				$('.m7-btn-box li').eq(i).css('background-image','url("images/m7-btn'+i+'.png")')
			}
			$(this).css('background-image','url("images/m7-btn'+index+'-2.png")');
			$('.m7-show-box').hide().eq(index).show()
        })
    })
    //main7二级选项卡控制
	$('.m7-two-btn-box li').each(function (index) {
        $(this).click(function () {
            $('.m7-two-btn-box li').removeClass('act1').eq(index).addClass('act1')
			$('.show-box2').hide().eq(index).show();
            $('.two-show-box-mov').css('left','0px')
        })
    })
    //main7点击左右按钮滚动照片
	$('.to-left').click(function () {
		var $width=-3*$('.two-show-box-mov').children('li').width()+'px';
        if($('.two-show-box-mov').css('left')==$width){
            $('.two-show-box-mov').animate({'left':'0'},1000)
        }
    })
    $('.to-right').click(function () {
    	var $width=-3*$('.two-show-box-mov').children('li').width()+'px';
        if($('.two-show-box-mov').css('left')=='0px'){
            $('.two-show-box-mov').animate({'left':$width},1000)
        }
    })
    //main7全程综合服务模块选项卡控制
    $('.m7-btn-box2 li').each(function (index) {
    	var $width1=$('.m7-btn-box2 li').children('.p1').css('left');
    	var $width2=$('.m7-btn-box2 li').children('.p2').css('left');
        $(this).click(function () {
            for(var i=0;i<3;i++){
                $('.m7-btn-box2 li').children('.p1').css('left','-5.4rem')
                $('.m7-btn-box2 li').children('.p2').css('left','0.2rem')
                $('.m7-btn-box2 li').children('.p3').eq(i).css('background-image','url(images/m7-'+(i+2)+'.png)')
                $('.m7-btn-box2 li').children('.p3').css('color','#333')
            }
            $(this).children('.p1').animate({'left':'0'},300)
            $(this).children('.p2').animate({'left':'5.6rem'},300)
            $(this).children('.p3').css('background-image','url(images/m7-'+(index+2)+'-2.png)')
            $(this).children('.p3').css('color','#fff')
            $('.m7-show-box-2').hide().eq(index).show();
        })
    })
})