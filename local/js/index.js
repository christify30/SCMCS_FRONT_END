$(document).ready(function(){
     $(".div").css("background","#000");
    var image=["../../resources/imgs/house4.png","../../resources/imgs/house5.png","../../resources/imgs/b2.jpg"];
    var x=0;
    var slideTime=8000;
    /*setInterval(function(){
        $(".div").css("background",'#555');
        //$(".div").css("background-image",'url('+image[x]+')');
       $(".sliding-img").css("transform","scale(1)");
        // $(".sliding-img").css("display","none");
          //$(".sliding-img").fadeToggle();
          $(".sliding-img").fadeOut(500);
          //$(".sliding-img").fadeIn(3000);
        //$('.sliding-img').src=image[x];
        $(".sliding-img").css("transition","transform 5s, background 5s"); 
         $(".div").css("transition","background 2s"); 
        setTimeout(function(){
         document.getElementById("sliding-img").src=image[x];
                        $(".sliding-img").fadeIn(1000);
                       
                       },500);
        
        setTimeout(function(){
             $(".sliding-img").css("transform","scale(1.4)");
              $(".div").css("background","#000");
        },1000)
       
        $(".sliding-img").css("opacity","0.8");
        
        callSwitch(x);
        
        x+=1;
        if(x>(image.length-1)){
              x=0;
           }
        slideTime=8000;
   
    },slideTime);*/
    
    $('.arrowbackk').click(function(){
        if(x>0){x-=1;}else{x=2;}
        slideTime+=8000;
        document.getElementById("sliding-img").src=image[x];
         $(".sliding-img").fadeIn(1000);
         callSwitch(x);
    });
    
    $('.arrowfront').click(function(){
        if(x<2){x+=1;}else{x=0;}
        slideTime+=8000;
        document.getElementById("sliding-img").src=image[x];
         $(".sliding-img").fadeIn(1000);
         callSwitch(x);
    });
    
    $('.dot1').click(function(){
        x=0;
        slideTime+=8000;
        document.getElementById("sliding-img").src=image[x];
         $(".sliding-img").fadeIn(1000);
         callSwitch(x);
    })
    
    $('.dot2').click(function(){
        x=1;
        slideTime+=8000;
        document.getElementById("sliding-img").src=image[x];
         $(".sliding-img").fadeIn(1000);
         callSwitch(x);
    });
    
    $('.dot3').click(function(){
        x=2;
        slideTime+=8000;
        document.getElementById("sliding-img").src=image[x];
         $(".sliding-img").fadeIn(1000);
         callSwitch(x);
    })

   
    function callSwitch(x){
        switch(x){
            case 0:
                $('.dot1').css('background-color','#e67e22');
                 $('.dot2').css('background-color','transparent');
                 $('.dot3').css('background-color','transparent');
                $(".text1").slideDown(2000);
                $('.text2').css('display','none');
                $('.text3').css('display','none');
                break;
                
            case 1:
                                
                $('.dot1').css('background-color','transparent');
                 $('.dot2').css('background-color','#e67e22');
                 $('.dot3').css('background-color','transparent');
                $(".text2").slideDown(2000);
                $('.text1').css('display','none');
                $('.text3').css('display','none');
                break;
             case 2:
                $('.dot1').css('background-color','transparent');
                 $('.dot2').css('background-color','transparent');
                 $('.dot3').css('background-color','#e67e22');
                $(".text3").slideDown(2000);
                $('.text2').css('display','none');
                $('.text1').css('display','none');
                break;
            default:
                break;
        }
    }
    
     
    $('.tog').click(function(){
        var nav=$('.main-nav'); 
        var icon=$('.reorder');
        nav.slideToggle(200);
        if(icon.attr("name")=="reorder"){
             icon.attr("name","close"); 
        }else{
            icon.attr("name","reorder");
         }
        
    });
    var color=true;
    
    $(".al").hover(function(){
  $(this).css("color", "#e67e22");
  }, function(){
        if(color){$(this).css("color", "#fff");}else{$(this).css("color", "#000");}
  
});
    
     $('.section2').waypoint(function(direction){ 
        if(direction=='down'){
           // console.log('working');
            $('.navbar').css("background-color","rgba(255, 255, 255, 0.92)");
            $('.al').css("color","rgba(0, 0, 0, 1)");
             $('.arrownav').css("transition","display 2s");
            $('.arrownav').css("display","block");
            color=false;
        }else{
          $('.navbar').css("background-color","rgba(0, 0, 0, 0.5)");
            $('.al').css("color","rgba(255, 255, 255, 1)");
            $('.arrownav').css("transition","display 2s");
            $('.arrownav').css("display","none");
             
             color=true;
        }
    },{
      offset: '70px'  
    });
    
    /*Smooth Scroll-----------------------*/    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });//smooth scroll
    
    
    $('.arrownav').click(function(){
        $('html,body').animate({
            scrollTop: $("header").offset().top
        }, 1000);       
    });
   
});

/*    transform: scale(1);
    opacity: 1;*/
