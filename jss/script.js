setTimeout(function() {
  document.getElementById("loading-page").className += "loaded";
  document.getElementById("loader").className += "opzero";
  document.getElementById("lastray").className += " finalray";
  document.body.className += "whitebk";
},2000);



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



