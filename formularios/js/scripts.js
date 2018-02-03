var valid = false;

$(document).ready(function() {
	var dia = new Date();
	var mes = dia.getMonth()+1;
	var año = dia.getFullYear();
	dia = (dia.getMonth()<9)? año+'-0'+mes+'-'+dia.getDate():año+'-'+mes+'-'+dia.getDate();
	$('.date').attr('max',dia);
});

function registro(){
		var name = document.getElementsByClassName('name')[0].value.trim(); //Recuperamos el nombre y el apellido
		var password = sha256(document.getElementsByClassName('pass')[0].value.trim()); //Recuperamos el valor de la contraseña
		var pass2 = sha256(document.getElementsByClassName('pass2')[0].value.trim()); //El del validador
		var correo = document.getElementsByClassName('email')[0].value; //El del correo
		var user = 'username:'+name+'?password:'+password+'?'; //Creamos lo que sera la cookie final
		var sexo = document.getElementsByTagName('select')[0].value;
		var dir = document.getElementsByClassName('dir')[0].value;
		var pais = document.getElementsByClassName('pais')[0].value;
		var tarjetaCredito = document.getElementsByClassName('tarjetaCredito')[0].value;
		user+=(sexo=='')? '':'sexo:'+sexo+'?';
		user+=(dir=='')? '':'dir:'+dir+'?';
		user+=(pais=='')? '':'pais:'+pais+'?';
		user+=(tarjetaCredito=='')? '':'tarjetaCredito:'+tarjetaCredito+'?';
		user+='email:'+correo+'?';
		user+= (document.getElementsByClassName('novedades')[0].checked)? 'NOVEDADES?':'';
		user+= (document.getElementsByClassName('revista')[0].checked)? 'REVISTA?':'';

		return user;
}

$('.formReg').submit(function(evt){
	try{//Por si surge algun error inesperado
		evt.preventDefault(); //Primero evitamos el submit para poder trabajar bien
		var user = registro();
		var name = document.getElementsByClassName('name')[0].value.trim(); //Recuperamos el nombre y el apellido
		var password = sha256(document.getElementsByClassName('pass')[0].value.trim()); //Recuperamos el valor de la contraseña
		var pass2 = sha256(document.getElementsByClassName('pass2')[0].value.trim()); //El del validador
		if(getCookie(name)!=null){ //Miramos si el usuario ya esta elegido
			alert('El nombre de usuario ya esta elegido');
		}else{
			if(password.indexOf('?')!=-1){ //Para que no haya '?', ya que es el separador en la cookie
				document.getElementsByClassName('alerta')[0].innerHTML = 'Caracter "?" no admitido';
		}
			else if(password==pass2 && valid){ //Si las contraseñas coinciden y son validas, accede
			setCookie(name,user); //Se guarda la cookie
			setCookie('user',name); //Y creamos una cookie temporal para luego
			alert('Usuario creado correctamente');
			$(this).unbind('submit').submit(); //Y se hace el submit
		}else{
			if(!valid){ //Miramos si las contraseñas son validas
				document.getElementsByClassName('alerta2')[0].innerHTML = '';
				document.getElementsByClassName('alerta')[0].innerHTML = ' La contraseña no tiene una minúscula, una mayúscula, un número y/o un símbolo';
			}else{ //Y si lo son, el error es la validacion
				document.getElementsByClassName('alerta')[0].innerHTML = '';
				document.getElementsByClassName('alerta2')[0].innerHTML = ' Las contraseñas no son iguales.';
			}
		}
	}

}catch(e) {//Si hay algun error, lo muestra por el log y recarga la pagina	
	console.log(e);
	alert('Error inesperado, para mas informacion, revise el log');
	location.reload();
}

})


$('.formLog').submit(function(evt){
	evt.preventDefault();
	var name = document.getElementsByClassName('name')[1].value;
	var password = sha256(document.getElementsByClassName('pass')[1].value);
	if(getCookie(name)==null){
		alert('Usuario no registrado');
	}
	else{
		var user = getCookie(name);
		var pass = user.substring(user.indexOf('password')+9);
		pass = pass.substring(0,pass.indexOf('?'));
		if(password!=pass){
			alert('Credenciales incorrectas.')
		}else{
			setCookie('user',name);
			$(this).unbind('submit').submit() 
		}
	}
});


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

function setCookie(cname, cvalue, exdays) {
	if(exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
	}else exdays = '';
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function comprobar(){
	var pass = document.getElementsByClassName('pass')[0].value;
	var re = /^[A-Za-z\d\W]{8,}$/i; 
	var re2 = /([A-Z]{1,})/i;
	var re3 = /([a-z]{1,})/i;
	var re4 = /(\d{1,})/i;
	var re5 = /(\W{1,})/i;
	if(re.test(pass) && re2.test(pass) && re3.test(pass) && re4.test(pass) && re5.test(pass)){
		valid = true;
	}else valid=false;
}

$('.check').on('click',function(){
	if( $(this).is(':checked') ){
		$('.nacimiento').animate({'opacity':1},100).show().css('display','unset');
    }else{
    	$('.nacimiento').animate({'opacity':0},100).css('display','none');
    }
})

$('.dir, .pais').change(function() {
	if($('.dir').val()!='' && $('.pais').val()!=''){
		$('.divTarjeta').animate({'opacity':1},100).show().css('display','unset');
	}else {
		$('.tarjetaCredito').val('');
		$('.divTarjeta').css('display','none').css('opacity',0);
	}
});



function logged(){
	if(getCookie('user')!=null){
		$('.loggin p').text(getCookie('user'));
		$('div.condiciones').hide();
	}
}

$('.loggin').on('click', function(){
	if(getCookie('user')!=null){
		location.href='formularios/logged/index.html';
	}else{
		location.href='formularios/index.html';
	}
})


	$('button.inicio').click(function() {
		location.href = '../index.html';
	});
