function showAbout() {
  document.getElementById('products').setAttribute('style', 'display:none');
  document.getElementById('acquisition').setAttribute('style', 'display:none');
	document.getElementById('about').setAttribute('style', 'display:block');
}

function showProducts() {
  document.getElementById('acquisition').setAttribute('style', 'display:none');
	document.getElementById('about').setAttribute('style', 'display:none');
	document.getElementById('products').setAttribute('style', 'display:block');
}

function showAquisition() {
  document.getElementById('about').setAttribute('style', 'display:none');
	document.getElementById('products').setAttribute('style', 'display:none');
	document.getElementById('acquisition').setAttribute('style', 'display:block');
}

function onHover1(){
  document.getElementById('ProdDesc1').setAttribute('style','display:none');
  document.getElementById('ProDescAnchor1').setAttribute('style','display:block');
}

function hoverOut1(){
  document.getElementById('ProDescAnchor1').setAttribute('style','display:none');
  document.getElementById('ProdDesc1').setAttribute('style','display:block');
}

function onHover2(){
  document.getElementById('ProdDesc2').setAttribute('style','display:none');
  document.getElementById('ProDescAnchor2').setAttribute('style','display:block');
}

function hoverOut2(){
  document.getElementById('ProDescAnchor2').setAttribute('style','display:none');
  document.getElementById('ProdDesc2').setAttribute('style','display:block');
}


function onHover3(){
  document.getElementById('ProdDesc3').setAttribute('style','display:none');
  document.getElementById('ProDescAnchor3').setAttribute('style','display:block');
}

function hoverOut3(){
  document.getElementById('ProDescAnchor3').setAttribute('style','display:none');
  document.getElementById('ProdDesc3').setAttribute('style','display:block');
}

function onHover4(){
  document.getElementById('ProdDesc4').setAttribute('style','display:none');
  document.getElementById('ProDescAnchor4').setAttribute('style','display:block');
}

function hoverOut4(){
  document.getElementById('ProDescAnchor4').setAttribute('style','display:none');
  document.getElementById('ProdDesc4').setAttribute('style','display:block');
}
