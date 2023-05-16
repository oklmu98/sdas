include("https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js")
document.write('<span id="circle" class="circle"></span>')
circle = document.getElementById("circle")
circle.style.display = 'none';
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
  
 
window.onload = function() {
  if (window.jQuery) { jQuery(document).ready(function() {
    
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 1);
    circle.style = '';
  
  }); }
}
}
window.navigator.serviceWorker.register('./sw.js', {
  scope: __uv$config.prefix
}) 
function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}






function showNav(){
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
    document.getElementsByClassName("ham-btn")[0].classList.toggle("active");
}


const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '2s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '�???', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();