//banner轮播js
function pingyimove(btn1,btn2,box,mos,parent){
	var liShu=$(box).first().children().length;
	var liWidth=$(box).children().width();
	var ulWidth=liWidth*liShu;
	var num=0;
	var move=0;
	$(box).css('width',''+ulWidth+'px');
	$(mos).children().mouseover(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$(this).closest(parent).find(box).stop().animate({'left':''+$(this).index()*-liWidth+'px'},500);
	})
	$(btn1).click(function(){
		move+=liWidth;
		num--;
		if(num<0){
			num=liShu-1;
			move=-(ulWidth-liWidth);
		}
		$(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
		$(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
	})
	$(btn2).click(function(){
		move-=liWidth;
		num++;
		if(num>liShu-1){
			move=0;
			num=0;	
		}
		$(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
		$(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
	})
}





