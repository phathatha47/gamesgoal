El formulario ha sido creado de la siguiente manera. 
En primera instancia, hicimos un formulario típico html con todos sus contenidos con las siguientes condiciones:

-	Introdujimos el siguiente pattern al input del nombre:
 ‘(([A-Za-z]{3,15}\s[A-Za-z]{3,15})$){1}’.
 
-	Para validar la contraseña, la pasamos a través de una función JavaScript para modificar una variable (valid) que inicialmente está establecida a false. Si la contraseña cumple todas las condiciones, la variable se pondrá en true.

-	Si el input de la dirección y el del país están rellenos, hay una función JavaScript con la que se revelará el div para introducir la tarjeta de crédito.

-	Si se selecciona la opción para dar la fecha de nacimiento, se abrirá un input de tipo date en el que se podrá introducir. 

-	Además, se añade la opción de estar suscrito a las novedades y/o a la revista virtual.

Acto seguido, al pulsar el botón ‘submit’, se accede a una función mediante jQuery en la que, en principio, se previene el evento ‘submit’. Si logra cumplir las condiciones (usuario no existente, contraseñas correctas y email escrito), actualiza la cookie de usuarios registrados en formato ‘username=datosUsuario’ y crea una cookie de sesión llamada ‘user’.

Una vez en la página del usuario, la propia página, tras haber comprobado que la cookie de sesión existe, recupera los datos del usuario y mostrarlos por pantalla recuperando y escribiendo los datos registrados del usuario. 

La página del login además, tiene una medida de seguridad, esta es que si se intenta acceder a ella por la fuerza (poniendo la url de la página directamente), esta detecta que la cookie de sesión no está creada y redirecciona al usuario a la página de registro
 

