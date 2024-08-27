Parte 1: Desarrollo de Componentes
Tarea 1: Crear un componente de saludo
Crea un componente funcional llamado Saludo.
Este componente debe recibir una propiedad nombre y mostrar un saludo en el siguiente formato: "Hola, [nombre]!".
Si no se proporciona un nombre, el componente debe mostrar "Hola, Invitado!".
Tarea 2: Crear un componente de perfil
Crea un componente llamado Perfil.
Este componente debe mostrar el nombre, la edad y una breve descripción de un usuario.
Los datos del usuario deben ser pasados como propiedades al componente.
Si la edad del usuario no está definida, muestra "Edad no disponible".
Ejemplo de uso:

jsx
Copiar código
<Perfil nombre="Juan" edad={30} descripcion="Desarrollador frontend" />
Parte 2: Manejo de Estados y Eventos
Tarea 3: Contador
Crea un componente llamado Contador.
Este componente debe mostrar un número y tener dos botones: "Incrementar" y "Decrementar".
Al hacer clic en "Incrementar", el número debe aumentar en 1.
Al hacer clic en "Decrementar", el número debe disminuir en 1.
El número no debe bajar de 0.

Tarea 4: Entrada de texto controlada
Crea un componente llamado EntradaTexto.
Este componente debe tener un campo de entrada de texto (input) que esté controlado por un estado en React.
Mientras el usuario escribe en el campo, el valor debe actualizarse en tiempo real y mostrarse debajo del campo de entrada.
El valor del campo de entrada debe restablecerse cuando se haga clic en un botón "Limpiar".

Parte 3: Manipulación de Listas
Tarea 5: Lista de Tareas
Crea un componente llamado ListaDeTareas.
Este componente debe permitir al usuario agregar tareas a una lista.
El componente debe tener un campo de entrada de texto y un botón "Agregar".
Al hacer clic en "Agregar", el texto ingresado debe añadirse a la lista de tareas y el campo de entrada debe vaciarse.
Cada tarea debe mostrarse con un botón "Eliminar" al lado.
Al hacer clic en "Eliminar", la tarea debe desaparecer de la lista.

Parte 4: Personalización (Opcional)
Tarea 6: Filtrado de Tareas (Opcional)
Extiende el componente ListaDeTareas para permitir filtrar las tareas por estado (completadas o pendientes).
Agrega una casilla de verificación (checkbox) al lado de cada tarea para marcarla como completada.
Proporciona botones o enlaces para mostrar todas las tareas, solo las completadas o solo las pendientes.