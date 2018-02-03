		var x = 0, y=0;

		var carrusel = $('div.carrusel');
		var carruselPos = carrusel.scrollLeft();
		var scrollCompleto = (carrusel[0].scrollWidth - carrusel.innerWidth());
		console.log('Scroll completo: ' + scrollCompleto)

		console.log('Todo sale bien je');
			

		function scrollwin(){
			window.scroll({
			  top: 0, 
			  left: 0, 
			  behavior: 'smooth' 
			});
		}


		carrusel.animate({
			scrollLeft : 1000
			},500);



		// Funcion de carrusel hecha a mano, usando jquery unicamente
		$('img.mvI,img.mvD').click(function(){
			x = carrusel.scrollLeft();
			if($(this).hasClass('mvI')){
				x-=450;
				if(x<=100) x = 100;
				carrusel.animate({
					scrollLeft:x
				},600);
			}else {
				x+=450;
				carrusel.animate({
					scrollLeft:x
				},600);
			}

		});

		$('div.buscar img').click(function(event) {
			$(this).siblings('div').fadeToggle('300');
		});

		


		// Animacion del header y fade al hacer scroll
		$(document).scroll(function(event) {
			// Efectos en el header durante el scroll
			var pixelesNavegador = document.body.scrollTop || document.documentElement.scrollTop;
			var logo = $('header > div:nth-of-type(1) > div:nth-of-type(1)');
			if (pixelesNavegador < 100 ) {
				logo.css('width', '100px');
			}else {
				logo.css('width', '60px');
			}
			var header = $('header');
			if(pixelesNavegador > (screen.width/1.5)) {
				header.css('transform', 'translate(0,-200px)');
			}else {
				header.css('transform', 'translate(0,0px)');
			}


			// Efecto fade al hacer scroll
			var coleccionHijos = document.querySelectorAll('article > *');
			var limite = (screen.width/2)*1.5;
			console.log(screen.width+ ' limite1');
			console.log(limite + ' limite2');
			for (var i = 2; i < coleccionHijos.length; i++) {
				console.log(coleccionHijos[i].getBoundingClientRect().top)
				if(coleccionHijos[i].getBoundingClientRect().top<limite){
					$(coleccionHijos[i]).css('animation-name', 'fade');	
				}
			}


		});

		


		document.getElementsByClassName('subir')[0].addEventListener('click',scrollwin);
		

			
		// Slider imagenes
		var indiceImagen = 0;
		function slider() {
		    var imagenes = document.getElementsByClassName("imagen");
		    for (var i = 0; i < imagenes.length; i++) {
		        imagenes[i].parentNode.className='sinEfecto';
		    }
		    indiceImagen++;
		    if(indiceImagen> imagenes.length){indiceImagen=1;}
		    imagenes[indiceImagen-1].parentNode.className='efecto';
		    setTimeout(slider,2500);

		}



		$('a.redirigir').click(function(event) {
			console.log('funciona')
			location.href = 'errores/index.html'
		});
