var y = 0,secnow = 1,curr_cut = 1;
(function ($){
    
    $.fn.MainDataInIt = function () {
      $.menuBox.Nav();
      $.Body.scrollAni();
      $.Body.resizeit();
    }
     $.fn.resizeit = function() {
     $.Window.resize(function(){
        //console.log($.Window.height());
        if($.Window.height() > 700){
            $('.cut').css({'top':2+'%'});
        }else{
            $('.cut').css({'top':-20});
        }
     }).trigger('resize');  
     
     } 
    $.fn.scrollAni = function() {   
    var timer,temp,ey;
        $.cut9.gotop.off('click').on('click',function(){
            y=  0;
            $.cut1.P1.removeClass('over');
            $.cut3.P2.removeClass('over');
            $.cut5.P5.removeClass('over');
            $.cut7.Pd8.removeClass('over');
            $.cut8._self.removeClass('over');
            $('div').not($.Loading).removeAttr('style');
        }); 
        $.cut1.scrolltip.off('click').on('click',function(){
             clearInterval(timer); 
             timer = setInterval(function(){
                if(y < $('.cut'+1).attr('middle')){
                    y++;
                    ey = -1;
                    Aniall(y);
                }else{
                    clearInterval(timer);
                    //temp = secnow+1;
                }
            },50);
        });     
        $.tonext.off('click').on('click',function(){ 
            clearInterval(timer); 
                if( y >= $('.cut'+secnow).attr('middle')){
                     temp = secnow+1;
                }else{
                     temp = secnow;
                }
            timer = setInterval(function(){
                if(y < $('.cut'+temp).attr('middle')){
                    y++;
                    ey = -1;
                    //console.log(y);
                    Aniall(y);
                }else{
                    clearInterval(timer);
                    //temp = secnow+1;
                }
            },50);
        });
    $('.wrapper').on('mousewheel',function(event){
        clearInterval(timer);
        if(event.deltaY<0){
            ey = -1;
            y++;
            if(y>=270) y=270;
            if(y==$.cut1._self.attr('end'))$.cut1._self.hide();
            if(y==$.cut2._self.attr('end'))$.cut2._self.hide();
            if(y==$.cut3._self.attr('end'))$.cut3._self.hide();
            if(y==$.cut4._self.attr('end'))$.cut4._self.hide();
            if(y==$.cut5._self.attr('end'))$.cut5._self.hide();
            if(y==$.cut6._self.attr('end'))$.cut6._self.hide();
            if(y==$.cut7._self.attr('end'))$.cut7._self.hide();
            if(y==$.cut8._self.attr('end'))$.cut8._self.hide();
           

        }else{
            ey = 1;
            y--;
            if(y<=0) y=0;
            if(y==$.cut1._self.attr('end'))$.cut1._self.show();
            if(y==$.cut2._self.attr('end'))$.cut2._self.show();
            if(y==$.cut3._self.attr('end'))$.cut3._self.show();
            if(y==$.cut4._self.attr('end'))$.cut4._self.show();
            if(y==$.cut5._self.attr('end'))$.cut5._self.show();
            if(y==$.cut6._self.attr('end'))$.cut6._self.show();
            if(y==$.cut7._self.attr('end'))$.cut7._self.show();
            if(y==$.cut8._self.attr('end'))$.cut8._self.show();
            

            if(y<=$.cut1._self.attr('start'))$.cut1._self.hide();
            if(y<=$.cut2._self.attr('start'))$.cut2._self.hide();
            if(y<=$.cut3._self.attr('start'))$.cut3._self.hide();
            if(y<=$.cut4._self.attr('start'))$.cut4._self.hide();
            if(y<=$.cut5._self.attr('start'))$.cut5._self.hide();
            if(y<=$.cut6._self.attr('start'))$.cut6._self.hide();
            if(y<=$.cut7._self.attr('start'))$.cut7._self.hide();
            if(y<=$.cut8._self.attr('start'))$.cut8._self.hide();
            
        }
         //console.log(y, ey, event.deltaY);
         Aniall(y);       
    });
        function tonextshow(){
            if(secnow ==1 || secnow ==9 ){
                $.tonext.fadeOut();
            }else {
                $.tonext.fadeIn();
            }
        }
        function Aniall(y){
            tonextshow();
            if(y>=$.cut1._self.attr('start') && y<=$.cut1._self.attr('end')){
                secnow = 1;
                if(y==$.cut1._self.attr('start'))$.cut1._self.show();
                scrA($.cut1.B1,{top:'-='+ey*25,left:'-='+ey*25},function(){scrB($.cut1.B1,{top:'-='+ey*80,left:'-='+ey*80})});
                scrA($.cut1.A1,{transform:'rotate('+0+'deg)',top:'-='+ey*73},function(){scrB($.cut1.A1,{transform:'rotate('+-40+'deg)',top:'+='+ey*80,left:'+='+ey*80})});
                scrA($.cut1.M1,{top:'-='+ey*103,left:'-='+ey*13},function(){scrB($.cut1.M1,{top:'-='+ey*70})});
                scrA($.cut1.P1,{transform:'rotate('+0+'deg)',top:'-='+ey*27,left:'-='+ey*20},function(){scrB($.cut1.P1,{transform:'rotate('+14+'deg)',top:'-='+ey*5,left:'-='+ey*12})});
                scrA($.cut1.kv,{top:'+='+ey*80},function(){});
                scrA($.cut1.scrolltip,{opacity:'+='+ey*0.4,filter: 'alpha(opacity += '+ey*40+')'},function(){scrB($.cut1.scrolltip,{display:'none'})});
                
            }
            if(y>=$.cut2._self.attr('start') && y<=$.cut2._self.attr('end')){
                secnow = 2;
                if(y==$.cut2._self.attr('start'))$.cut2._self.show();
                scrA($.cut2.B2,{right:'-='+ey*95},function(){scrB($.cut2.B2,{right:'+='+ey*97})});
                scrA($.cut2.A2,{left:'-='+ey*100}, function(){scrB($.cut2.A2,{left:'+='+ey*100})});
                scrA($.cut2.M2,{top:'+='+ey*81},function(){scrB($.cut2.M2,{top:'-='+ey*84})});
                scrA($.cut2.w2_r,{display:'block'},function(){scrB($.cut2.w2_r,{display:'none'})});
                scrA($.cut2.w2_l,{display:'block'},function(){scrB($.cut2.w2_l,{display:'none'})});
               
            }
            if(y>=$.cut3._self.attr('start') && y<=$.cut3._self.attr('end')){
                secnow = 3;
                if(y==$.cut3._self.attr('start'))$.cut3._self.show();
                scrA($.cut3.A3,{display:'block',top:'-='+ey*70}, function(){scrB($.cut3.A3,{display:'none'})});
                scrA($.cut3.P2,{display:'block',top:'+='+ey*15.7,right:'-='+ey*3},function(){scrB($.cut3.P2,{top:'-='+ey*20,right:'+='+ey*10})});
                scrA($.cut3.MB3,{display:'block',top:'+='+ey*50},function(){scrB($.cut3.MB3,{display:'none'})});
                scrA($.cut3.MBA3,{display:'block'},function(){scrB($.cut3.MBA3,{top:'-='+ey*70})});
                scrA($.cut3.w3_t,{display:'block'},function(){scrB($.cut3.w3_t,{display:'none'})});
                if( y>$.cut3.P2.attr('scroll-start') && !$.cut1.P1.hasClass('over')){
                   $.cut1.P1.hide();
                   $.cut1.P1.addClass('over');
                }else if( y<=$.cut3.P2.attr('scroll-start')){
                   $.cut1.P1.show();
                   $.cut1.P1.removeClass('over');
                }
            }
            if(y>=$.cut4._self.attr('start') && y<=$.cut4._self.attr('end')){
                secnow = 4;
                if(y==$.cut4._self.attr('start'))$.cut4._self.show();
                scrA($.cut4.B4,{right:'-='+ey*108},function(){scrB($.cut4.B4,{right:'+='+ey*108})});
                scrA($.cut4.A4,{left:'-='+ey*106}, function(){scrB($.cut4.A4,{left:'+='+ey*106})});
                scrA($.cut4.M4,{top:'-='+ey*57},function(){scrB($.cut4.M4,{top:'-='+ey*65})});
                scrA($.cut4.w4_r,{display:'block'},function(){scrB($.cut4.w4_r,{display:'none'})});
                scrA($.cut4.w4_l,{display:'block'},function(){scrB($.cut4.w4_l,{display:'none'})});
            }
            if(y>=$.cut5._self.attr('start') && y<=$.cut5._self.attr('end')){
                secnow = 5;
                if(y==$.cut5._self.attr('start'))$.cut5._self.show();
                scrA($.cut5.A5,{right:'-='+ey*120}, function(){scrB($.cut5.A5,{right:'+='+ey*120})});
                scrA($.cut5.M5,{left:'-='+ey*103},function(){scrB($.cut5.M5,{left:'+='+ey*103})});
                scrA($.cut5.B5,{top:'+='+ey*73},function(){scrB($.cut5.B5,{top:'-='+ey*77})});
                scrA($.cut5.P5,{display:'block',right:'+='+ey*2},function(){scrB($.cut5.P5,{top:'+='+ey*3})});
                scrA($.cut5.w5_r,{display:'block'},function(){scrB($.cut5.w5_r,{display:'none'})});
                scrA($.cut5.w5_l,{display:'block'},function(){scrB($.cut5.w5_l,{display:'none'})});
                if( y>$.cut5.P5.attr('scroll-start') && !$.cut3.P2.hasClass('over')){
                   $.cut3.P2.hide();
                   $.cut3.P2.addClass('over');
                }else if( y<= $.cut5.P5.attr('scroll-start') && $.cut3.P2.hasClass('over')){
                   $.cut3.P2.show();
                   $.cut3.P2.removeClass('over');
                }
            }
            if(y>=$.cut6._self.attr('start') && y<=$.cut6._self.attr('end')){
                secnow = 6;
                if(y==$.cut6._self.attr('start'))$.cut6._self.show();
                scrA($.cut6.M6,{top:'-='+ey*88},function(){scrB($.cut6.M6,{top:'+='+ey*88})});
                scrA($.cut6.A6,{top:'-='+ey*95},function(){scrB($.cut6.A6,{top:'+='+ey*95})});
                scrA($.cut6.B6,{top:'-='+ey*97},function(){scrB($.cut6.B6,{top:'+='+ey*97})});
                scrA($.cut6.T6,{top:'+='+ey*63},function(){scrB($.cut6.T6,{top:'-='+ey*63})});
                scrA($.cut6.w6_r,{display:'block'},function(){scrB($.cut6.w6_r,{display:'none'})});
                scrA($.cut6.w6_l,{display:'block'},function(){scrB($.cut6.w6_l,{display:'none'})});
            }
            if(y>=$.cut7._self.attr('start') && y<=$.cut7._self.attr('end')){
                secnow = 7;
                if(y==$.cut7._self.attr('start'))$.cut7._self.show();
                scrA($.cut7.MBA7,{left:'-='+ey*120},function(){});
                scrA($.cut7.P7,{display:'block',top:'+='+ey*10,right:'-='+ey*11},function(){$.cut7.P7.css({'display':'none'})});
                scrA($.cut7.P3,{display:'block'},function(){scrB($.cut7.P3,{display:'none'})});
                scrA($.cut7.P3_1,{display:'block'},function(){scrB($.cut7.P3_1,{display:'none'})});
                scrA($.cut7.P3_2,{display:'block'},function(){scrB($.cut7.P3_2,{display:'none'})});
                scrA($.cut7.ss,{display:'block'},function(){scrB($.cut7.ss,{display:'none'})});
                scrA($.cut7.Pd8,{display:'block',top:'+='+ey*83,right:'-='+ey*63},function(){scrB($.cut7.Pd8,{top:'-='+ey*60})});
                scrA($.cut7.w7_t,{display:'block'},function(){scrB($.cut7.w7_t,{display:'none'})});
                scrA($.cut7.w7_d,{display:'block'},function(){scrB($.cut7.w7_d,{display:'none'})});
                 if( y>$.cut7.P7.attr('scroll-start') && !$.cut5.P5.hasClass('over')){
                       $.cut5.P5.hide();
                       $.cut5.P5.addClass('over');
                    }else if( y<= $.cut7.P7.attr('scroll-start') && $.cut5.P5.hasClass('over')){
                       $.cut5.P5.show();
                       $.cut5.P5.removeClass('over');
                    }
                if( y>$.cut7.P3.attr('scroll-start2') && !$.cut7.Pd8.hasClass('over')){
                    $.cut7.Pd8.show();
                    $.cut7.Pd8.addClass('over');
                }else if( y<= $.cut7.P3.attr('scroll-start2') && $.cut7.Pd8.hasClass('over')){
                    $.cut7.Pd8.hide();
                    $.cut7.Pd8.removeClass('over');
                }
            }
            if(y>=$.cut8._self.attr('start') && y<=$.cut8._self.attr('end')){     
                secnow = 8;         
                $.fb_share.removeAttr('style');
                $.cut9.ending.removeAttr('style');
                scrA($.cut8.w8_r,{display:'block'},function(){scrB($.cut8.w8_r,{display:'none'})});
                scrA($.cut8.w8_l,{display:'block'},function(){scrB($.cut8.w8_l,{display:'none'}); $('.identify').hide();});
                scrB($.cut8._self,{opacity:'+='+ey*0.4,filter: 'alpha(opacity += '+ey*40+')'});
                if( y>$.cut8.MBA8.attr('scroll-start') && !$.cut8._self.hasClass('over')){
                    $.cut7._self.hide();
                    $.cut8._self.show();
                    $.cut8._self.addClass('over');
                }else if( y<= $.cut8.MBA8.attr('scroll-start') && $.cut8._self.hasClass('over')){
                    $.cut8._self.hide();
                    $.cut7._self.show();
                    $.cut8._self.removeClass('over');
                }
                //if(y<$.cut9.Pd9.attr('scroll-end')) {$.cut9._self.hide()};
            }
            if(y>=$.cut9._self.attr('start') && y<=$.cut9._self.attr('end')){
                secnow = 9;
                $.fb_share.hide();
                scrA($.cut9.Pd9,{display:'block'},function(){$('.identify').show();});
                scrA($.cut9.w9_l,{display:'block',opacity:'-='+ey*0.2,filter: 'alpha(opacity += '+ey*20+')'},function(){});
                scrA($.cut9.w9_r,{display:'block'},function(){$.cut9.ending.fadeIn(500)});
            }
            ////////////    GA jojo ////////////////////
            if(curr_cut!=secnow){GT('index' , 'pv','c'+secnow+'_pv');}             
            curr_cut = secnow;
            ////////////END GA jojo ////////////////////

            function scrA(obj,styles,callBack){
                //console.log(obj);
                ey>0? scrollup():scrolldown();
                function scrolldown(){
                    if(y>obj.attr('scroll-start') && y<=obj.attr('scroll-end')){
                        // console.log(y, ey);
                        obj.css(styles);
                    }
                }
                function scrollup(){
                    if(y>obj.attr('scroll-start') && y<obj.attr('scroll-end')){
                        // console.log(y, ey);
                        obj.css(styles);
                    }else if(y<=obj.attr('scroll-start')){
                         obj.removeAttr('style');

                    }  
                }
                if(y>=obj.attr('scroll-end') && y<=obj.attr('scroll-end2')){
                    callBack();
                }
            }
            function scrB(obj,styles){
                //console.log(y,obj);
                ey>0? scrolldown():scrollup();
                function scrollup(){
                    if(y>obj.attr('scroll-start2') && y<=obj.attr('scroll-end2')){
                        // console.log(y, ey);
                        obj.css(styles);
                    }
                }
                function scrolldown(){
                    if(y>=obj.attr('scroll-start2') && y<obj.attr('scroll-end2')){
                        // console.log(y, ey);
                        obj.css(styles);
                    }
                }
            }
        }
    }
    $.fn.Nav = function(){
        var _self = $(this);
        _self.find('.menu .nav').mouseenter(function(){
            index = $(this).index();
            $(this).find('img').attr('src','img/menuo'+index+'.png').removeAttr('style');
        }).mouseleave(function(){
            $(this).find('img').attr('src','img/menu'+index+'.png');
        });
    }    
    $.fn.ComCss = function (property) {
        var _self = $(this);
            _self['propObj'] = {};
        for(x in property){ 
            _self.propObj['-webkit-'+x] = property[x];
            _self.propObj['-moz-'+x] = property[x];
            _self.propObj['-ms-'+x] = property[x];
            _self.propObj[x] = property[x];
        }
        _self.css(_self.propObj);
        /*for(x in _self.propObj){ 
            delete _self.propObj[x];
        }*/
        delete _self.propObj;
        property = null;
        _self = null;      
    }
    //*****去除 png圖 黑邊*****
    $.fn.PngFix = function () {
    	var _self = $(this)
        _self.find('img[src$=".png"],img[src$=".gif"]').each(function() {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='"+ this.src +"')";
        });
    }

})(jQuery);
	
$(function(){
	$.Body =$('body');	
	$.Window = $(window);
    $.Wrapper = $('div.wrapper');
    $.Loading = $('div.loading');
    $.menuBox = $('div.menuBox');
    $.fb_share = $('div.fb_share');
    $.tonext = $('div.next');
    $.lb = $('div.lb');
    $.cut1 = {
        _self:$('div.cut1'),
        B1:$('div.B1'),
        A1:$('div.A1'),
        M1:$('div.M1'),
        P1:$('div.P1'),
        mask:$('div.mask'),
        kv:$('div.kv'),
        scrolltip:$('div.scrolltip')        
    }
    $.cut2 = {
        _self:$('div.cut2'),
        B2:$('div.B2'),
        A2:$('div.A2'),
        M2:$('div.M2'),
        w2_r:$('div.w2-r'),
        w2_l:$('div.w2-l')
    }
    $.cut3 = {
        _self:$('div.cut3'),
        A3:$('div.A3'),
        MB3:$('div.MB3'),
        MBA3:$('div.MBA3'),
        w3_t:$('div.w3-t'),
        P2:$('div.P2')
    }
    $.cut4 = {
        _self:$('div.cut4'),
        B4:$('div.B4'),
        A4:$('div.A4'),
        M4:$('div.M4'),
        w4_r:$('div.w4-r'),
        w4_l:$('div.w4-l')
    }
    $.cut5 = {
        _self:$('div.cut5'),
        P5:$('div.P5'),
        B5:$('div.B5'),
        A5:$('div.A5'),
        M5:$('div.M5'),
        w5_r:$('div.w5-r'),
        w5_l:$('div.w5-l')
    }
    $.cut6 = { 
        _self:$('div.cut6'),
        M6:$('div.M6'),
        T6:$('div.T6'),
        B6:$('div.B6'),
        A6:$('div.A6'),
        w6_r:$('div.w6-r'),
        w6_l:$('div.w6-l')
    }
    $.cut7 = {
        _self:$('div.cut7'),
        MBA7:$('div.MBA7'),
        P3:$('div.P3'),
        P3_1:$('div.P3_1'),
        P3_2:$('div.P3_2'),
        Pd8:$('div.Pd8'),
        P7:$('div.P7'),
        ss:$('div.ss'),
        w7_t:$('div.w7-t'),
        w7_d:$('div.w7-d')
    }
    $.cut8 = {
        _self:$('div.cut8'),
        MBA8:$('div.MBA8'),
        w8_r:$('div.w8-r'),
        w8_l:$('div.w8-l')
    }
    $.cut9 = {
        _self:$('div.cut9'),
        Pd9:$('div.Pd9'),
        w9_l:$('div.w9-l'),
        w9_r:$('div.w9-r'),
        ending:$('div.ending'),
        ending_FB:$('div.ending_FB'),
        gotop:$('div.top')
    }
    $.part = {
       part1: $('div.part1'),
       part2: $('div.part2'),
       part3: $('div.part3'),
        close1: $('div.close1'),
        noshare: $('div.noshare'),
        close3: $('div.close3'),
        sharebtn: $('div.sharebtn')
    }
    var imagesN = $("body img").length;
    var c = 0;
    //$("body img").each(function(){
        // var src = $(this).attr('src');
        // $("body img").one('load',function(){ 
        //     c++;
        //     //console.log(c,this);
        //     var status = c*(100/imagesN)+'%';
        //     $(".loading .number").html( parseInt(status, 10) ); 
        //     if (c === imagesN){
        //         $.Body.PngFix();
        //         $.Loading.fadeOut(1000);
        //         $.Body.MainDataInIt();   
        //     }                 
        // }).each(function(){
        //     if(this.complete) $(this).load();
        // });
    $.Window.load(function(){
        $.Body.PngFix();
        $.Loading.fadeOut(1000);
        $.Body.MainDataInIt();
        GT('index' , 'pv','c'+secnow+'_pv');
        $.Body.append('<div style="display:none"><img src="img/MBA8.png"/><img src="img/MBA3.png"/></div>')
    });	
});

 function clickto(id){
        switch(id){
            case "close1":
               if(FB_STATE == 'in'){
                    ui_post();
                    $.part.part1.fadeOut();
                }     
            break;  
            case "noshare":
                $.part.part2.hide();
                $.lb.fadeOut(); 
            break;
            case "sharebtn":
                $.part.part2.fadeOut();
                $.part.close1.trigger('click');     
            break;
            case "close3":
                $.part.part3.hide();
                $.lb.fadeOut();
                clearForm();
            break;
            case "event":
                $('.event').show();
                $.lb.fadeIn();  
            break;
            case "eclose":
                $('.event').hide();
                $.lb.fadeOut();  
            break;
            case "openp":
                $('.part3').hide();
                $('.privicy').fadeIn();
            break;
            case "pclose":
                $('.part3').fadeIn();
                $('.privicy').hide();
            break;
            case "list":
                // alert('得獎名單將於2015/2/26公布於本活動網站，敬請期待！');
                $('.cover').fadeIn();
                $('.w2').hide();
                $('.w1').show();
                $('.winnnerbtn div').removeAttr('style');
                $('.winnnerbtn1').css({'color':'#eb1906'});
                $('.winnerclose').click(function(){
                    $('.cover').fadeOut();
                });
            break;
            case "winner1":
                $('.winnerpd1').fadeIn();
                $('.winnerpd2').fadeOut();
                $('.w1').fadeIn();
                $('.w2').fadeOut();
                $('.winnnerbtn1').css({'color':'#eb1906'}).siblings().removeAttr('style');
            break;
            case "winner2":
                $('.winnerpd1').fadeOut();
                $('.winnerpd2').fadeIn();
                $('.w2').fadeIn();
                $('.w1').fadeOut();
                $('.winnnerbtn2').css({'color':'#eb1906'}).siblings().removeAttr('style');
            break;

        }  
    }
