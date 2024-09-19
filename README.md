Aplicacion de listado de personas.

En ella practicamos el interpolado, event binding, property binding, two-way binding, y el uso de los decoradores @Output e @Input.

El formulario y el listados son componentes hijos del componente principal.

El formulario es un componente hijo que emite el objeto persona que crea el metodo agregarPersona() para que el padre lo reciba, mediante el decorador @Output, y lo almacene en el array personas.

El listado es un componenente hijo que recibe el array personas, y lo imprime en el HTML mediante un bucle ngFor.
