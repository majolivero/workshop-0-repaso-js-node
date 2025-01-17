# workshop-0-repaso-js-node

# Workshop 0: Repasando JavaScript

## Introducción

Bienvenidos al Workshop 0, donde repasaremos conceptos fundamentales de JavaScript. Este workshop está diseñado para evaluar y reforzar tus conocimientos previos antes de comenzar con el curso de TypeScript y Node.js. A través de actividades prácticas, exploraremos temas clave y desarrollaremos aplicaciones que integren estos conceptos de manera creativa y real.

## Instrucciones de Entrega

1. Crea un nuevo repositorio en tu cuenta de GitHub llamado `workshop-0-repaso-js-node`.
2. Copia las preguntas y ejercicios de este workshop en el archivo `README.md` de tu repositorio.
3. Resuelve cada pregunta y ejercicio en su respectiva sección.
4. Realiza un commit y un push de tus respuestas y código a GitHub.
5. Subir a Moodle en el espacio habilitado de semana 1 el link del repositorio en GitHub. En caso de no estar habilitado el envío en Moodle, enviar el link del repo a `nicolas.picon@riwi.io`.

## Instrucciones Generales

1. No se aceptarán preguntas sobre ninguno de los ejercicios.

## Objetivos

1. **Conocimiento**: Identificar y describir los conceptos clave de JavaScript y Node.js.
2. **Comprensión**: Explicar y comparar diferentes estructuras y técnicas de programación en JavaScript y Node.js.
3. **Aplicación**: Implementar soluciones prácticas que utilicen estos conceptos en aplicaciones reales.

## Punto 1: Ejercicio Guiado - Creando una Aplicación de Gestión de Tareas

En este primer punto, crearás una aplicación de gestión de tareas que te permitirá añadir, editar, eliminar y marcar tareas como completadas. Durante el proceso, se evaluarán los siguientes temas:

- JavaScript Básico
- Manipulación del DOM
- Programación Orientada a Objetos (OOP)
- Eventos en JavaScript
- Variables y Tipos de Datos
- Control de Flujo
- Funciones de Flecha
- JSON
- Depuración 

### Historia de Usuario

Como usuario, quiero una aplicación de gestión de tareas que me permita añadir, editar, eliminar y marcar tareas como completadas para organizar mis actividades diarias de manera eficiente.

### Criterios de Aceptación

1. **Añadir una Tarea**:
   - Debe existir un campo de entrada y un botón para añadir una nueva tarea.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

2. **Editar una Tarea**:
   - Debe ser posible editar la descripción de una tarea existente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

3. **Eliminar una Tarea**:
   - Debe existir un botón para eliminar una tarea.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

4. **Marcar una Tarea como Completada**:
   - Debe ser posible marcar una tarea como completada y debe visualizarse de manera diferente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript, Clases y Objetos.

5. **Almacenar Tareas en localStorage**:
   - Las tareas deben ser almacenadas en `localStorage` y recuperadas al recargar la página.
   - **Concepto de JavaScript aplicado**: JSON, Almacenamiento en localStorage.

6. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

7. **Validación y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.


#### HTML

```html
<!DOCTYPE html> <!-- Recordemos que el DOCTYPE es la primera línea de un documento HTML y se utiliza para indicar al navegador qué tipo de documento se está utilizando. -->
<html lang="en"> <!-- La etiqueta <html> es el contenedor raíz de todo el contenido de una página web. El atributo lang se utiliza para especificar el idioma de la página. -->
<head> <!-- La etiqueta <head> contiene información sobre el documento, como metadatos, enlaces a estilos y scripts, y otros elementos que no se muestran directamente en la página. -->
    <meta charset="UTF-8"> <!-- La etiqueta <meta> se utiliza para especificar metadatos, como el juego de caracteres utilizado en el documento. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- La etiqueta <meta> con el atributo name="viewport" se utiliza para controlar el tamaño y la escala de la página en dispositivos móviles. -->
    <title>Gestión de Tareas</title> <!-- La etiqueta <title> se utiliza para especificar el título de la página, que se muestra en la pestaña del navegador. -->
    <link rel="stylesheet" href="styles.css"> <!-- La etiqueta <link> se utiliza para enlazar una hoja de estilos externa con la página. -->
</head>
<body> <!-- La etiqueta <body> contiene todo el contenido visible de una página web, como texto, imágenes, enlaces, formularios, etc. -->
    <div id="app"> <!-- La etiqueta <div> se utiliza para agrupar elementos y crear secciones en una página web. El atributo id se utiliza para identificar un elemento de forma única. -->
        <h1>Gestión de Tareas</h1> <!-- La etiqueta <h1> se utiliza para definir un encabezado de nivel 1 en una página web. -->
        <input type="text" id="new-task" placeholder="Nueva tarea"> <!-- La etiqueta <input> se utiliza para crear campos de entrada en formularios. El atributo type se utiliza para especificar el tipo de campo (e.g., texto). El atributo id se utiliza para identificar un campo de forma única. El atributo placeholder se utiliza para mostrar un texto de ayuda en el campo. -->
        <button id="add-task">Añadir Tarea</button> <!-- La etiqueta <button> se utiliza para crear botones en una página web. El atributo id se utiliza para identificar un botón de forma única. -->
        <ul id="task-list"></ul> <!-- La etiqueta <ul> se utiliza para crear listas no ordenadas en una página web. El atributo id se utiliza para identificar una lista de forma única. -->
    </div>
    <script src="app.js"></script> <!-- La etiqueta <script> se utiliza para enlazar un archivo de script con la página. -->
</body>
</html>
```

#### JavaScript

```javascript
class Task {    //Se crea la clase Task
    constructor(id, description, completed = false) {  //La clase Task tiene los siguientes atributos: id, description, completed
        this.id = id;   //Hace referencia al id de la clase Task 
        this.description = description; //Hace referencia a la descripción de la clase Task
        this.completed = completed;  //Hace referencia al estado de la clase Task
    }

    toggleComplete() { //Es una función que sirve para cambiar el estado actual de la tarea
        this.completed = !this.completed; //Cambia el estado actual de la tarea por el opuesto, si es true pone false y si es false pone true. 
    }
}

class TaskManager {  //Se crea la clase TaskManager
    constructor() { //El constructor define el código que se va ejecutar cuando se crea una instancia de la clase TaskManager
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []; //Obtengo el JSON de tareas de localStorage y si está vacio devolverá un arreglo vacío 
        this.loadTasks(); //Ejecuto la función loadTasks
    }

    addTask(description) { //Creo la función addTask que tiene como parámetro description
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;  // Declaro la constante id y utilizo un condicional ternario, tal que, si this.tasks.length es true, accedo al último elemento del array y le sumo uno para generar el nuevo id. De lo contrario, el resultado obtenido es 1. 
        const task = new Task(id, description); //Declaro la constante task y creo el constructor que tiene como parametro el id y description
        this.tasks.push(task); //Agrego una tarea al final de la lista de tareas
        this.saveTasks(); //Llamo a la función saveTasks
        this.renderTasks(); //Llamo a la función renderTasks
    }

    deleteTask(id) { //Creo la función deleteTask que tiene como parámetro el id de la tarea que quiero eliminar
        this.tasks = this.tasks.filter(task => task.id !== id); //Se filtra la lista de tareas para que solo contenga las tareas con id diferente del id pasado como parametro(es decir, se elmina la tarea con este id)
        this.saveTasks();//Lamo a la función saveTasks
        this.renderTasks(); //Llamo a la función renderTasks
    }

    toggleTaskComplete(id) { //Creo la función toggleTaskComplete que tiene como parámetro el id
        const task = this.tasks.find(task => task.id === id); //En la lista de tareas tasks se busca con el método find la tarea cuyo id sea igual al id pasado como argumento en la función 
        if (task) { //Esta condición verifica si se encontró la tarea con el id pasado como parámetro en la función toggleTaskComplete. Si esta condición es verdadera ejecuta la porción de código que está dentro del if. 
            task.toggleComplete(); //Se llama a la función toggleComplete de la tarea para cambiar el estado del atributo completed 
            this.saveTasks(); //Guardo la lista de tareas ya actualizada
            this.renderTasks(); //Actualiza la interfaz de usuario para que se muestra la lista de tareas actualizada
        }
    }

    saveTasks() {  //Se define la función saveTasks
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); //Guarda en el localStorage la tarea añadida o la lista de tareas añadidas
    }

    loadTasks() { //Se define la función loadTasks
        this.renderTasks(); //Se llama a la función renderTasks
    }

    renderTasks() { // Se define la función renderTasks
        const taskList = document.getElementById('task-list'); //Traemos el elemento HTML con el id task-list
        taskList.innerHTML = ''; //Vacía el contenido del elemento taskList para asegurarse que no haya tareas duplicadas cuando se vuelva a renderizar la lista
        this.tasks.forEach(task => { //Recorre cada tarea en la lista de tareas this.tasks y ejecuta la función tasks para cada tarea de la lista
            const item = document.createElement('li'); //Creo el elemento HTML lista
            item.textContent = task.description; //Establece el texto del elemento li con la descripcion de la tarea
            item.className = task.completed ? 'completed' : ''; // Asigna la clase completed al elemento li si el estado de la tarea es completed: true, de lo contrario, no asigna ninguna clase
            item.addEventListener('click', () => this.toggleTaskComplete(task.id)); //Crea un evento click asignado al elemento li y llama a la función toggleTaskComplete que tiene como parametro el id de la tarea
            const deleteButton = document.createElement('button'); //Se crea el elemento HTML button
            deleteButton.textContent = 'Eliminar'; //Establece el texto del botón como Eliminar
            deleteButton.addEventListener('click', (e) => { //Se crea un evento click aplicado al boton eliminar para llamar a la función deleteTask cuando se haga click en este
                e.stopPropagation(); // Evitar que el evento se propague al elemento padre, ¿Por qué? Porque el evento click en el botón también se propaga al elemento li.
                this.deleteTask(task.id); //Se llama a la funcion deleteTask a la cual se le pasa el id de la tarea
            });

            item.appendChild(deleteButton); //Muestra el botón eliminar en el navegador
            taskList.appendChild(item); //Agrega la lista de tareas como elementos de lista 
        });
    }
}

document.addEventListener('DOMContentLoaded', () => { //Se aplica el evento DOMContentLoaded a document y carga el DOM
    const taskManager = new TaskManager(); //Se crea una instancia de la clase TaskManager

    document.getElementById('add-task').addEventListener('click', () => { //Traigo el elemento boton con id add-task. Creo un evento click para este boton, tal que: 
        const newTask = document.getElementById('new-task').value; //Al hacer click obtenga el valor del elemento input con id new-task 
        if (newTask) { // Si existe algun valor en newTask, 
            taskManager.addTask(newTask); //Ejecuto la función addTask que tiene como parametro newTask, de la clase taskManager
            document.getElementById('new-task').value = ''; //Después de agregar la tarea, esta instrucción limpia el campo de entrada de texto, y evita que el usuario deba borrar manualmente lo escrito en el campo de texto.  
        }
    });
});
```
3. **Ejecución**: Probar la aplicación en un navegador y realizar las siguientes acciones:
    - Probar funcionalidad del codigo. Si encuentras errores, depurar el código, corregirlos y generar un informe de los errores encontrados y como
    los corregiste.
    - Añadir una nueva tarea.
    - Marcar una tarea como completada.
    - Eliminar una tarea.
    - Verificar que las tareas se almacenan y recuperan correctamente en `localStorage`.
4. **Analisis**: Explicar el código proporcionado linea por linea en el archivo `README.md` de tu repositorio.

## Punto 2: Ejercicio Independiente - Creando una Aplicación de Gestión de Notas

En este segundo punto, crearás una aplicación de gestión de notas que te permitirá añadir, editar, eliminar y marcar notas como importantes. Durante el proceso, se evaluarán los siguientes temas:

### Historia de Usuario

Como usuario, quiero una aplicación de gestión de notas para poder añadir, editar, eliminar y marcar notas como importantes, de manera que pueda organizar mis tareas y recordatorios de forma eficiente.

### Criterios de Aceptación

1. **Añadir una Nota**:
   - Debe existir un campo de entrada y un botón para añadir una nueva nota.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

2. **Editar una Nota**:
   - Debe ser posible editar la descripción de una nota existente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

3. **Eliminar una Nota**:
   - Debe existir un botón para eliminar una nota.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

4. **Marcar una Nota como Importante**:
   - Debe ser posible marcar una nota como importante y debe visualizarse de manera destacada.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript, Clases y Objetos.

5. **Almacenar Notas en localStorage**:
   - Las notas deben ser almacenadas en `localStorage` y recuperadas al recargar la página.
   - **Concepto de JavaScript aplicado**: JSON, Almacenamiento en localStorage.

6. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

7. **Validación y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.

### Ejercicio

Desarrolla la aplicación de acuerdo a los criterios de aceptación mencionados. Asegúrate de probar la aplicación en un navegador y realizar las siguientes acciones:

1. Añadir una nueva nota.
2. Editar una nota existente.
3. Marcar una nota como importante.
4. Eliminar una nota.
5. Verificar que las notas se almacenan y recuperan correctamente en `localStorage`.
6. Documentar el proceso y el código en el archivo `README.md` de tu repositorio.

## Punto 3: Ejercicio Guiado - Consumiendo una API con JSONPlaceholder

En este tercer punto, crearás una aplicación que consuma datos de una API utilizando JSONPlaceholder. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- JSON
- Promesas
- Depuración

### Historia de Usuario

Como usuario, quiero una aplicación que consuma datos de una API pública, para visualizar y gestionar información de manera eficiente.

### Criterios de Aceptación

1. **Consumo de API**:
   - La aplicación debe consumir datos de la API de JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
   - **Concepto de JavaScript aplicado**: Promesas, JSON.

2. **Visualización de Datos**:
   - Los datos obtenidos de la API deben visualizarse en la página de manera estructurada.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

3. **Manejo de Errores**:
   - Implementar manejo de errores para la solicitud de la API y mostrar mensajes de error adecuados al usuario.
   - **Concepto de JavaScript aplicado**: Promesas, Depuración.

4. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos y procesamiento de datos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha.

### Ejemplo de Código

#### HTML

```html
<!DOCTYPE html><!--Primera línea del documento HTML y se usa para indicar al navegador que tipo de documento se está utilizando--->
<html lang="en"><!--La etiqueta <html> es el contenedor raíz de todo el contenido de una página web. --> 
<head><!--La etiqueta <head> contiene información sobre el documento, como metadatos, enlaces a estilos y scripts, y otros elementos que no se muestran directamente en la página.-->
    <meta charset="UTF-8"><!-- La etiqueta <meta> se utiliza para especificar metadatos, como el juego de caracteres utilizado en el documento. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- La etiqueta <meta> con el atributo name="viewport" se utiliza para controlar el tamaño y la escala de la página en dispositivos móviles. -->
    <title>Consumiendo API con JSONPlaceholder</title><!-- La etiqueta <title> se utiliza para especificar el título de la página, que se muestra en la pestaña del navegador. -->
    <link rel="stylesheet" href="styles.css"><!-- La etiqueta <link> se utiliza para enlazar una hoja de estilos externa con la página. -->
</head>
<body><!-- La etiqueta <body> contiene todo el contenido visible de una página web, como texto, imágenes, enlaces, formularios, etc. -->
    <div id="app"><!-- La etiqueta <div> se utiliza para agrupar elementos y crear secciones en una página web. El atributo id se utiliza para identificar un elemento de forma única. -->
        <h1>Listado de Posts</h1><!--La etiqueta h1 se utiliza para definir un encabezado de nivel 1 en una página web.-->
        <button id="fetch-posts">Cargar Posts</button><!--La etiqueta button se utiliza para crear un botón, en el cual, los usuarios pueden hacer click para realizar alguna acción -->
        <ul id="post-list"></ul><!--La etiqueta ul se usa para crear listas no ordenadas, es decir, es una lista con viñetas y no enumerada -->
        <div id="error-message"></div>
    </div>
    <script src="app.js"></script> <!--La etiqueta <script> se utiliza para enlazar un archivo de script con la página. -->
</body>
</html>
```

#### JavaScript

```javascript
document.getElementById('fetch-posts').addEventListener('click', () => { //Mediante el método document.getElementById obtengo una referencia al elemento HTML basado en su atributo id. En este caso, el id 'fetch - posts' permite identificar un botón. Este botón tiene un evento click, que permite ejecutar la función fetchPosts() cuando el usuario hace click en el. 
    fetchPosts(); //Se llama a la función fetchPosts();
});

const fetchPosts = () => { //Se define la función fetchPosts, la cual, es una arrow function, que en este caso, no se le pasan parametros. 
    fetch('https://jsonplaceholder.typicode.com/posts') //Se está utilizando la función fetch para hacer una solicitud HTTP a la URL proporcionada. Esto permite obtener información sobre los posts desde esta URL. 
        .then(response => { //Después de hacer la petición, se crea una promesa utilizando .then(). El argumento response representa la respuesta del servidor. 
            if (!response.ok) { // El condicional if es una estructura de control. Este condicional permite verificar si la respuesta tiene un estado "ok".
                throw new Error('Network response was not ok ' + response.statusText); //El statement throw permite definir un error personalizado, en este caso, el mensaje es 'Network response was not ok' concatenado con el texto del estado de la respuesta. 
            }
            return response.json(); //Si la respuesta es exitosa, se convierte la respuesta en formato JSON utilizando .json(). Esto devuelve otra promesa con los datos de las publicaciones. 
        })
        .then(posts => { //Se crea otra promesa para manejar los datos de las publicaciones. El argumento posts contiene los datos en formato JSON. 
            displayPosts(posts); //Se llama a la función displayPosts. 
        })
        .catch(error => { //Se usa .catch para manejar cualquier error que ocurra. 
            displayError(error); //Se llama a la función displayError. Si hay algún problema se maneja mediante esta función. 
        });
};

const displayPosts = (posts) => { //Se define la función displayPosts, la cual, es una arrow function que tiene como parametro posts.
    const postList = document.getElementById('post-list'); //Mediante el método document.getElementById obtengo una referencia al elemento HTML basado en su atributo id. En este caso, el id 'post -list' permite identificar una lista no ordenada.
    postList.innerHTML = ''; //Permite borrar cualquier contenido previo dentro del elemento postList
    posts.forEach(post => { //Se itera cada objeto post en el array posts
        const listItem = document.createElement('li'); //Se crea un nuevo elemento de lista <li>
        listItem.textContent = `Title: ${post.title}`; // A cada elemento de lista, se asigna el texto "Title", más el título de cada publicación
        postList.appendChild(listItem); //Se agrega el elemento de la lista al elemento principal con el id 'post-list'
    });
};

const displayError = (error) => { //Se define la función displayError, la cual, es una arrow function que tiene como parametro error.
    const errorMessage = document.getElementById('error-message'); //Traigo al elemento <div> identificado con el id 'error-message y lo guardo en la variable errorMessage'
    errorMessage.textContent = `Error: ${error.message}`; //La cadena de texto esntre comillas invertidas es un template literal que se usa para mostrar un mensaje de error junto con el mensaje específico del error (almacenado en la variable error.message)
};
```

### Ejecución

1. Añadir un botón en el HTML para iniciar la solicitud de la API.
2. Crear una función en JavaScript para consumir la API utilizando `fetch`.
3. Manejar las promesas y los posibles errores de la solicitud.
4. Mostrar los datos obtenidos de la API en la página.
5. Implementar métodos de depuración para el manejo de errores y validación.

### Análisis

Explica el código proporcionado línea por línea en el archivo `README.md` de tu repositorio. Asegúrate de describir cómo se aplican los conceptos de control de flujo, funciones de flecha, JSON, promesas y depuración.

## Punto 4: Ejercicio Independiente - Creando una Aplicación de Gestión de Productos con la API de Platzi

En este cuarto punto, crearás una aplicación que consuma datos de la API de Platzi Fake Store y muestre la información de productos de manera interactiva y visualmente atractiva. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- JSON
- Promesas
- Depuración

### Historia de Usuario

Como usuario, quiero una aplicación que me permita ver y gestionar productos de una tienda en línea, para explorar las opciones disponibles y tomar decisiones de compra informadas.

### Criterios de Aceptación

1. **Consumo de API**:
   - La aplicación debe consumir datos de la API de Platzi Fake Store (https://fakeapi.platzi.com/).
   - **Concepto de JavaScript aplicado**: Promesas, JSON.

2. **Visualización de Datos**:
   - Los datos obtenidos de la API deben visualizarse en la página de manera estructurada y atractiva. Puede usar una tabla, una lista o cualquier otro formato que consideres adecuado.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

3. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos y procesamiento de datos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

4. **Filtrado y Búsqueda**:
   - Implementar funcionalidades de filtrado y búsqueda para que los usuarios puedan encontrar productos específicos.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

5. **Manejo de Errores**:
   - Implementar manejo de errores para la solicitud de la API y mostrar mensajes de error adecuados al usuario.
   - **Concepto de JavaScript aplicado**: Promesas, Depuración.

## Punto 5: Ejercicio Independiente - Métodos de Array en JavaScript

En este quinto punto, explorarás y aplicarás diversos métodos de array en JavaScript. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- Métodos de Array (reduce, forEach, map, filter, find, some, every)

### Historia de Usuario

Como usuario, quiero una aplicación que me permita gestionar y analizar una lista de productos utilizando diversos métodos de array, para obtener información relevante y personalizada de manera eficiente.

### Interface de Producto

```javascript

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];

```

### Criterios de Aceptación

1. **Visualización de Productos**:
   - La aplicación debe mostrar una lista de productos en la página. Puedes interactuar con el DOM o con la consola del navegador.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, forEach.

2. **Calcular el Precio Total**:
   - La aplicación debe calcular y mostrar el precio total de todos los productos utilizando el método `reduce`.
   - **Concepto de JavaScript aplicado**: reduce.

3. **Filtrar Productos por Categoría**:
   - La aplicación debe permitir filtrar productos por categoría utilizando el método `filter`.
   - **Concepto de JavaScript aplicado**: filter.

4. **Buscar un Producto por Nombre**:
   - La aplicación debe permitir buscar un producto específico por su nombre utilizando el método `find`.
   - **Concepto de JavaScript aplicado**: find.

5. **Verificar Disponibilidad de Productos**:
   - La aplicación debe verificar si todos los productos están disponibles utilizando el método `every`.
   - **Concepto de JavaScript aplicado**: every.

6. **Obtener Nombres de Productos**:
   - La aplicación debe crear una lista con los nombres de todos los productos utilizando el método `map`.
   - **Concepto de JavaScript aplicado**: map.

7. **Depuración y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.