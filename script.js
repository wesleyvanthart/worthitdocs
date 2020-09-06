var tab1 = document.querySelector('.tab-pane-tab-1');
var tab2 = document.querySelector('.tab-pane-tab-2');
var dropdownOpen = 0;

$(document).ready(function() {
    if (Webflow.env('editor') != undefined) {
      console.log('Editor is loaded: do not load custom js');
    } else {
      $('.endtag').before('<script src="https://cdn.jsdelivr.net/gh/locomotivemtl/locomotive-scroll/dist/locomotive-scroll.min.js?n=1"></script>');
      $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/locomotivemtl/locomotive-scroll/dist/locomotive-scroll.css">');

      console.log('append after')

            document.querySelector(".scroll-section").setAttribute("data-scroll-container", "");

            (function () {   
                const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true
                });
            
                //scroll to top on load
                window.onload=function(){
                    setTimeout(function(){
                    scroll.destroy();
                    scrollTo(0,-1);
                    scroll.init();
                    },0);
                } 

                $(".default-reveal").attr("data-scroll", "")

                console.log('hoi')

                // $( window ).resize(function() {
                //     scroll.destroy();
                //     scroll.init();
                //   });

            })();
    } 
})
