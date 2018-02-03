

function cargar(){

    if(getCookie('user')==null){location.href='../index.html'}

	var username = getCookie('user');
	var user = getCookie(username);
	var correo = user.substring(user.indexOf('email')+6);
	correo = correo.substring(0,correo.indexOf('?'));

	document.getElementsByClassName('name')[0].innerHTML += '<i>'+getCookie('user')+'</i>';
	document.getElementsByClassName('email')[0].innerHTML += '<i>'+correo+'</i>';
    if(user.indexOf('sexo:')!=-1 && user.indexOf('sexo:') < user.indexOf('email')){
        var sexo = user.substring(user.indexOf('sexo:')+5);
        var sexo = sexo.substring(0,sexo.indexOf('?'));
        document.getElementsByClassName('datos')[0].innerHTML+='<p>Sexo: <i>'+sexo+'</i></p>'
    }

    if(user.indexOf('dir:')!=-1 && user.indexOf('dir:') < user.indexOf('email')){
        var dir = user.substring(user.indexOf('dir:')+4);
        var dir = dir.substring(0,dir.indexOf('?'));
        document.getElementsByClassName('datos')[0].innerHTML+='<p>dir: <i>'+dir+'</i></p>'
    }

    if(user.indexOf('pais:')!=-1 && user.indexOf('pais:') < user.indexOf('email')){
        var pais = user.substring(user.indexOf('pais:')+5);
        var pais = pais.substring(0,pais.indexOf('?'));
        document.getElementsByClassName('datos')[0].innerHTML+='<p>pais: <i>'+pais+'</i></p>'
    }

    if(user.indexOf('tarjetaCredito:')!=-1 && user.indexOf('tarjetaCredito:') < user.indexOf('email')){
        console.log(user.indexOf('tarjetaCredito:'))
        var tarjetaCredito = user.substring(user.indexOf('tarjetaCredito:')+15);
        var tarjetaCredito = tarjetaCredito.substring(0,tarjetaCredito.indexOf('?'));
        document.getElementsByClassName('datos')[0].innerHTML+='<p>tarjetaCredito: <i>'+tarjetaCredito+'</i></p>'
    }

    (user.indexOf('NOVEDADES?')!=-1)? document.getElementsByClassName('datos')[0].innerHTML+='<p>Usted recibira nuestras novedades.</p>':'';
    (user.indexOf('REVISTA?')!=-1)? document.getElementsByClassName('datos')[0].innerHTML+='<p>Usted está suscrito a nuestra revista virtual.</p>':'';

	document.getElementsByClassName('log-out')[0].addEventListener('click', function(){
		location.href='../index.html'
		document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
	})
	
}

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
document.getElementsByTagName('button')[1].addEventListener('click',function(){
    location.href = '../../index.html';
});