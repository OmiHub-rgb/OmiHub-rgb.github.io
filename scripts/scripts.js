 var imagenes=Array("https://vignette.wikia.nocookie.net/gearsofwar/images/8/87/Gears_of_War_2_Portada.png/revision/latest?cb=20160706021554&path-prefix=es" , "https://lh3.googleusercontent.com/d9dRZ0ytqjvmPiEWxiIxsmMS11qNYRS8F1qnIm9hcqnigQzPNTXhbtmsYUhVLPqCk52x_LTSMZ4gKkX1lLGGDvPIabE-icK5y593YnhZGtiCqr9sBaiMU3yXvrNdNKawbwwqutltX3XvD1AkhErJ3BHkiEUQjmtx3-BMb34BRWio2EIPQtGx5pSWbWQzKSsE3Wd80DcHSrKjKaFEBXrMhDpMdl6q1UzRD1aPp5PkZWevu1OWH2uZ-MEWiUIVsQ4_oGiUqRt3QHa4gyfvVNmnwSskW73Jma0fC8Or7DSQEWSViT_6XTfw1aGmnhhF7GNEtBhQCRSmmA4gbywCLDs7qLIQyceKyrz0r4lnrXuOneOb9gpP3z8aPGmTsPPMm8J1SOpjy5vNHmnkoaIslHmVkPk__6LE0VnN0jtnW_X-b89Ukw3F22akD1ZnoWiWiDZTfgR-zWr4IiTc7_PzWe0qWcCvp9Q7jP5ilvGEfAFdh4T3xGcqAStXU4zxfNh80O_wEtVKVr8pI3DU3Fyc23baVRKFjAWZSTdOxn_8Esb9ik6IoEC7e-vmY_K7Uqj11ucJ2Hd55Be3cj5x4uBSG7O1Uxf9j6hxPOKaIg99knvW7YEqKNOsTz3sW04UE0QiWuJoctcl7MF0cfCJIHTjCCYXo2r23cBQZA9JdQKQcUk6mMw82Je0Zw6qGo4=s250-k-rw-no");
	var imagenVisible=0;
 
	// Función que cambia la imagen actual por la siguiente
	function cambiar(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
  //FUNCIÓN PARA EL MOVIMIENTO
      var coche1 = document.getElementById("coche1");
      var x_coche1 = 0;
      function correr() {
	   if (x_coche1 <= 85 && x_coche1 >= 0) {
		x_coche1 = x_coche1 + 2; 
		coche1.style.left = x_coche1 + "%"; 
	    }
	    else {
		 x_coche1=0; 
		 coche1.style.left = x_coche1 + "%";
	    }
}
  
  
  
 //RECURSOS JS QUE UTILIZO PARA QUE FUNCIONE EL FORMULARIO:
   let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Pon tu nombre por favor.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Portadas favoritas de ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Portadas favoritas de ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
//FIN DEL CÓDIGO DE: "RECURSOS JS QUE UTILIZO PARA QUE FUNCIONE EL FORMULARIO"                
