// function FB_APP(){
  var PARAM_SCOPE ='public_profile,email,user_friends';
  var FB_STATE='out'
  var FB_ID = '0',FB_NAME='0';
  var scr , scr2;
  var msg;
  var purl;
  var WEB_SITE = "http://goo.gl/XK3Kd4";
  var sdid;
/////////////////////////////////////////////
//interface 
///////////////////////////////////////////
  this.get_FB_STATE = function (){
    return FB_STATE;
  }
  this.get_FBID = function (){
    return FB_ID;
  }
  this.get_FB_NAME = function (){
    return FB_NAME;
  }
  this.get_fb_login = function (){
    fb_login();
  }
  this.get_ui_post = function (){
    ui_post( msg , purl);
  }
   this.set_ui_post_params = function (a,b){
       purl = a;
       msg = b;
  }

////CALLBACK ASSET////////////////
function end_getFBInfo(){
    $('.part1').show();
    $.lb.fadeIn();
   //_app.main_chg(1);
}
////END  CALLBACK ASSET////////////////

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1551365315120321',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  /***like box**/
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
   
  function get_FBInfo() {
   // console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {    
      //printlog(response["id"] + response["name"] )
      FB_ID = response["id"];
      FB_NAME= response["name"];
      end_getFBInfo();
     });
  }
  
  function fb_login(){   
     FB.login(function(response) {
          checkLoginState();
      }, {scope: PARAM_SCOPE});
  }
  ///////
  //
  ///////
  function statusChangeCallback(response) {
  
    if (response.status === 'connected') {
       ///登入
    FB_STATE = 'in';
   // console.log(response);
    get_FBInfo();
    //ui_post();
    } else if (response.status === 'not_authorized') {
     FB_STATE = 'outa';
     alert('您放棄了抽獎機會! 好可惜喔~~')
     
    } else {
     FB_STATE = 'out';
      alert('您放棄了抽獎機會! 好可惜喔~~')
    /* var url = 'm2.html';
     location.href=url;*/
    }
  }
  function ui_post(){
     //GT("index" , "index","fb_post");
    FB.ui(
      {
       method: 'feed',
       name: "賽吉兒 | 不讓細菌過好年",
       caption:'過新年放長假，喜歡泡湯、穿緊身褲、久坐打麻將的女生們注意了，小心私密處悶久了孳生細菌，快來看看賽吉兒如何消滅它們！分享活動還能抽賽吉兒保養組唷^^ http://goo.gl/XK3Kd4', 
       description:'真是太過分了！女生越是悶悶不樂，它們竟然就越快樂？！',
       link: WEB_SITE,
       picture: 'http://saugella-cny.campaigns.com.tw/img/fb2.jpg'
      },
      function(response) {
        if (response && response.post_id) {
            // $.part.part3.fadeIn(300);
            // init_address();
            // $.part.part1.hide();
            // $.part.part2.hide();
            $.ajax({
                url: 'http://saugella-cny.campaigns.com.tw/saugella/?apptype=saugellacny&mode=getfb&access_token=b9884d43a2b9884d8c661f06448b9fc8&op=json',
                type: 'POST',
                data: {fb_id: FB_ID}, 
                dataType: "json",
                success: function(resp){
                    if(resp.state == 1 || resp.state == 3){  //新ID
                      sdid = resp.sd_id;
                      $.part.part1.hide();
                      $.part.part2.hide();
                      $.part.part3.fadeIn(300);
                       init_address();
                    }else if(resp.state == 0){  //舊ID
                      alert('感謝您的熱心參與，預祝您抽中大獎！');
                      $.part.part1.hide();
                      $.part.part2.hide();
                      $.part.part3.hide();
                      $.lb.fadeOut();
                    }else if(resp.state == 2){
                      alert('伺服器忙碌中。請稍後再試 (error)')
                    }
                }
              });
        } else {
            $.part.part2.fadeIn(300);
        }
      }
    );
  }
  ////////////////////
  //抓相簿 ID  NAME COVER
  ///////////////////
  var alb_ids=[]
  var alb_names=[]
  var alb_covers=[];
  function get_albums()
 {
   FB.api('/me/albums', function(response) {
    if(response){
    var obj =response["data"];
        
    for( var index in obj)
    {
      var _album = obj[index]
    
       alb_ids.push(_album["id"]);
       alb_names.push(_album["name"]) ;
       
       if(_album["cover_photo"])
       alb_covers.push(_album["cover_photo"]);
       else
       alb_covers.push("0");


    }
        //產生BTN 到相簿清單
        create_albs_nodes();
                 scr = new scroller_OBJ();
                 scr.set_obj( $(".album_list"));
                 scr.init();

        ////先產生第一個像部的照片
        get_photos(alb_ids[0] , false);

                
    }
    else
    {/////未取得權限  偵測後可通知

    }
    
    });
}

function coverPhoto(id){
   FB.api('/'+id+'?fields=picture&type=small',function(responseIn){

              ///change alb_covers
              var ind = alb_covers.indexOf(id);
              var arrs = $('.cover');
              $(arrs[ind]).css('background-image' , 'url('+responseIn["picture"]+')');
             // console.log($(arrs[ind]))
             // return responseIn['picture'];
             // $('#javascriptData').append("<br><img src='"+responseIn['picture']+"'>");
        });
}

////////////////////////////////////////////
///產生某相簿的所有照片ID
////////////////////////////////////////////
var next_count=0;
var MAX_PAGING = 2
function get_photos(alb_id , next){/////相簿ID 
  
  if(!next){
    next_count =0;
    photos_status = 'load'

    FB.api('/'+alb_id+'/photos?pretty=0&limit=50', function(response){
     
     var obj =response["data"];  
     

      for( var index in obj) ////obj 所有照片物件
     {
      var photo = obj[index]  ///某一個物件
      //console.log(photo["id"])
      var imgs = photo["images"]   /////物件裡的image
      var len = imgs.length   
      var imgb = imgs[len-1]           /////最後一個image  通常是200*x00
      var img_url= imgb["source"] /////第一個image裡的source  即真實url
          create_photos_fromAlbum(img_url);
     }
     var pg =response["paging"];
      if(!pg ){
        photos_status = 'ready';
        if(!scr2){
        
      scr2 = new scroller_OBJ();
      scr2.set_obj( $(".photos_alb"));
      scr2.init();
     }
         return;
      }

      var cur = pg["cursors"] 
      if(!cur){
        photos_status = 'ready'
        if(!scr2){
       
      scr2 = new scroller_OBJ();
      scr2.set_obj( $(".photos_alb"));
      scr2.init();
     }
         return;
      }

      var next = cur["after"]
     // console.log("next" + next);
      if(next)
      get_photos(alb_id , next)
    
      });
  }
  else
  {
    next_count++;
    FB.api('/'+alb_id+'/photos?pretty=0&after='+next+'&limit=50', function(response){
     
     var obj =response["data"];  
     for( var index in obj)
     {
      var photo = obj[index]
      //console.log(photo["id"])
      var imgs = photo["images"]
      var imgb = imgs[0]
      var  img_url= imgb["source"]
      create_photos_fromAlbum(img_url)
       }
     
      var pg =response["paging"];
      if(!pg || next_count>MAX_PAGING){
        photos_status = 'ready';
        if(!scr2){
        
      scr2 = new scroller_OBJ();
      scr2.set_obj( $(".photos_alb"));
      scr2.init();
     }
         return;
      }

      var cur = pg["cursors"] 
      if(!cur ){
        photos_status = 'ready'
        if(!scr2){
       
      scr2 = new scroller_OBJ();
      scr2.set_obj( $(".photos_alb"));
      scr2.init();
     }
         return;
      }

      var next = cur["after"]
      //console.log("next" + next);
      if(next)
      get_photos(alb_id , next)

     });
  }
}

function create_albs_nodes(){
  for(var i=0;i<alb_ids.length ; i++){
    var cne = alb_names[i];
    var cvr = alb_covers[i];
    var albid = alb_ids[i];

   if(cvr =='0'){
    $('.album_list').append( '<div class="album_btn">  <div class="cover" onclick="album_clk('+i+')" style="background-image:url('+'img/fb_default.jpg'+')"></div> <div class = "coverTitle">'+cne+'</div><div id="albid" style="display:none;">'+albid+'</div></div>');
      //coverPhoto(cvr);
  }
   else{
     $('.album_list').append( '<div class="album_btn">  <div class="cover" onclick="album_clk('+i+')" style="background-image:url('+'img/default.jpg'+')"></div> <div class = "coverTitle">'+cne+'</div><div id="albid" style="display:none;">'+albid+'</div></div>');
     coverPhoto(cvr);
   }


  }
}


function create_photos_fromAlbum( _imgurl)
{
      var arr = $('.cover_detail')
      var len = $(arr).length;
      //console.log(len)
     // var obj = $(arr[ind])
     $('.photos_alb').append( '<div class="phot_btn"><div class="cover_detail" onclick="photos_clk('+len+')"  style="background-image:url('+_imgurl+')"></div> </div>');
     //photos_clk(len);
}
function album_clk(ind){
    var arr = $('.album_btn')
    var obj = $(arr[ind])
    var target_albid = obj.children("#albid").text();
    //alert(target_albid);
    ///清空照片區
    if(photos_status!= 'ready')
    return;
    $( ".phot_btn" ).remove();
    
    scr2.destroy();
    scr2 = undefined;
    get_photos(target_albid);
}
function photos_clk(ind){
    
    var arr = $('.cover_detail')
    var len = $(arr).length;
    var obj = $(arr[ind])

    var target_url  =obj.css('background-image');
    
    select_FB_url = target_url.replace('url(','').replace(')','').replace('"','').replace('"','');
    /* console.log(select_FB_url)
    var imG = new Image()
    
    imG.onload = function(){
      console.log(imG)
       //upload_editedX(imG);
    }
    console.log(select_FB_url)
    imG.src = select_FB_url*/

    for(var i=0;i<len;i++)
    {
      $(arr[i]).css('opacity' , .6)
    }
    obj.css('opacity' , 1) ;

}
function upload_editedX(_src){
  //////產生loading obj
         //var _ld = new add_loading('img/loading.gif');
         //_ld.addToDom();
  
 
          var formdata = new FormData();
            var xhr = new XMLHttpRequest();
            xhr.open('POST', "capture.php");
      xhr.onreadystatechange = function () 
   {
      
        
      
      pic_nameX = 'upload/big/' + this.responseText;
      //console.log(pic_nameX);
       
        
         
    };

    var image = _src//.toDataURL("image/jpeg");
    var rnd =  new Date().getTime() + String ( parseInt (Math.random()*10000)  )
  
    formdata.append('imageData', image.split(",")[1]); 
    formdata.append('fne', rnd ); 
    //資料採用Base64編碼，絕對不會有逗號 所以 我們可以放心地抓第1筆資料
    //第0筆資料為 data/jpeg;base64
    xhr.send(formdata);
}
// }
// var _fbapp = new FB_APP();