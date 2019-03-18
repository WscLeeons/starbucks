var num=1;
var width=document.body.scrollWidth

/*导航栏*/
$('.menu').mousedown(function(){
				$('.menu>img').css('transform','scale(0.8)');
})
$('.menu').mouseup(function(){
				var width=document.body.scrollWidth
				$('.menu>img').css('transform','scale(1)');
				$('.overlay').toggleClass('laylive')
				if(width>1054){
					$("body").parent().css("overflow-y","auto");
				}
				if(624<=width&&width<=1054){
					$("body").parent().css("overflow-y","hidden");
					$('#nav').css({'position':'fixed','height':'100%'})
					$('.overlay').css('position','relative')
				}
				if(623>=width){
					$("body").parent().css("overflow-y","auto");
				}
				if(width>623){
					$('.primary').hide();
					$('.menu').hide();
					$('.close').show();
					$('.body').hide();
					setTimeout(
						function(){
						$('#nav').css('overflow','auto')
					},100)
				}
				num=0;
})
$('.close').mousedown(function(){
				$('.close>img').css('transform','scale(0.8)');
})
$('.close').mouseup(function(){
				var width=document.body.scrollWidth
				$('.close>img').css('transform','scale(1)');
				$('.overlay').toggleClass('laylive')
				$('#nav').css('overflow','hidden')
				if(width>1054){
					$("body").parent().css("overflow-y","auto");
				}
				if(624<=width&&width<=1054){
					$("body").parent().css("overflow-y","auto");
					$('.overlay').css('position','absolute')
					$('#nav').css({'height':'auto','position':'relative'})
				}
				if(623>=width){
					$("body").parent().css("overflow-y","auto");
					$('.overlay').css('position','absolute')
				}
				if(width>623){
					$('.primary').show();
					$('.menu').show();
					$('.close').hide();
					$('.body').show();
				}
				num=1;
})
$('.more').mouseup(function(){
	$('#nav').css('display','block')
})

/*手机端导航栏*/
$('#mobile-nav li').mousedown(function(){
	var index=$(this).index();
	$('#mobile-nav li').eq(index).children().children().children('.active').show()
	$('#mobile-nav li').eq(index).children().children().children('.noactive').hide()
	$('#mobile-nav li').eq(index).children().children('#home-mobile').toggleClass('active')
})
$('#mobile-nav li').mouseup(function(){
	var index=$(this).index();
	$('#mobile-nav li').eq(index).children().children().children('.active').hide()
	$('#mobile-nav li').eq(index).children().children().children('.noactive').show()
	$('#mobile-nav li').eq(index).children().children('#home-mobile').toggleClass('active')
})


/*检测初始屏幕宽度*/
if(width>1054){
		$("body").parent().css("overflow-y","auto");
	}
	if(624<=width&&width<=1065&&num==0){
		$("body").parent().css("overflow-y","hidden");
	}
	if(624<=width&&width<=1054&&num==1){
		$('#nav').css('position','relative')
	}
	if(624<=width&&width<=1054&&num==0){
		$('#nav').css('position','fixed')
	}
	if(641<=width){
		$("body").parent().css("overflow-x","hidden");
	}  
	if(623>=width){
		$('#nav').css('display','none')
	}
	if(623<width){
		$('#nav').css('display','block')
	}
	 
/*检测用户拉伸屏幕宽度*/
$(window).resize(function(){
	var width=document.body.scrollWidth
	console.log(width)
	if(width>1054){
		$("body").parent().css("overflow-y","auto");
		$('#nav').css({'position':'fixed','height':'100%'})
	}
	if(624<=width&&width<=1054&&num==1){
		$('#nav').css('position','relative')
	}
	if(624<=width&&width<=1054&&num==0){
		$('#nav').css('position','fixed')
	}
	if(624<=width&&width<=1065&&num==0){
		$("body").parent().css("overflow-y","hidden");
	}
	if(641<=width){
		$("body").parent().css("overflow-x","hidden");
	}
	if(623>=width){
		$('#nav').css('display','none')
	}
	if(623<width){
		$('#nav').css('display','block')
	}
})
