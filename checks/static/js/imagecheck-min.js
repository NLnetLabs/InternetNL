function ImageCheck(){var unique="5e46f2b7dce5490090dabd9ec00b978f";if(check_if_images_enabled()){var objHead=document.getElementsByTagName('head');var objCSS_noimages=objHead[0].appendChild(document.createElement('link'));objCSS_noimages.id='noimages';objCSS_noimages.rel='stylesheet';objCSS_noimages.href='/static/css/alt-min.css'+'#'+unique;objCSS_noimages.type='text/css';}
if(check_if_browser_in_high_contrast()){var objHead=document.getElementsByTagName('head');var objCSS_highcontrast=objHead[0].appendChild(document.createElement('link'));objCSS_highcontrast.id='highcontrast';objCSS_highcontrast.rel='stylesheet';objCSS_highcontrast.href='/static/css/high-contrast-min.css'+'#'+unique;objCSS_highcontrast.type='text/css';}}
function check_if_images_enabled(){if(document.getElementById('flag').offsetWidth==1){return true;}else{return false;}}
function check_if_browser_in_high_contrast(){var testelement,colorcheck;testelement=document.createElement("div");testelement.style.color="rgb(31,41,59)";testelement.id='highcontrast_check';document.body.appendChild(testelement);colorcheck=document.defaultView?document.defaultView.getComputedStyle(testelement,null).color:testelement.currentStyle.color;document.body.removeChild(testelement);colorcheck=colorcheck.replace(/ /g,"");if(colorcheck!=="rgb(31,41,59)"){return true;}else{return false;}}
if(window.attachEvent){window.attachEvent('onload',ImageCheck);}else if(window.addEventListener){window.addEventListener("load",ImageCheck,false);}else{window.onload=ImageCheck;}