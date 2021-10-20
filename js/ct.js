var input_nombre = document.getElementById('nombre_user')
var input_telefono = document.getElementById('telefono_user')
var input_direccion = document.getElementById('direccion_mail')

debugger
function guardar_data() {
    let contador_data = 1
    if (localStorage.getItem("contador") == null) {
        localStorage.setItem('contador', contador_data)
    } else {
        contador_data = localStorage.getItem("contador")
    }
    var nombre = document.getElementById('nombre_user').value
    var telefono = document.getElementById('telefono_user').value
    var direccion = document.querySelector('#direccion_mail').value
    localStorage.setItem("nombre_" + contador_data, nombre)
    localStorage.setItem("telefono_" + contador_data, telefono)
    localStorage.setItem("direccion_" + contador_data, direccion)
    contador_data = parseInt(contador_data) + 1
    localStorage.setItem("contador", contador_data)
    console.log(contador_data)

    let contador_actual = parseInt(contador_data) - 1
    listado_data(contador_actual)
    document.getElementById("mi_formulario").reset()
    if (actualiza_tabla) {
        let contador_futuro = localStorage.getItem('contador')
        for (let x = 1; x < contador_futuro; x++) {
            body_tabla.innerHTML = `
        <tr>
                <td>${localStorage.getItem('nombre_' + x)}</td>
                <td>${localStorage.getItem('telefono_' + x)}</td>
                <td>${localStorage.getItem('direccion_' + x)}</td>
                <td>
                    <i class="fas fa-pen mx-2" onclick="editar_elemento(${x})"></i>
                    <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
                </td>
        </tr>
            
        for (let id_dato = 1; id_dato <contador_futuro; id_dato++) {
            if (localStorage.getItem('nombre_' + id_dato) != null && localStorage.getItem('telefono_' + id_dato) != null && localStorage.getItem('direccion_' + id_dato)) {
            body_tabla.innerHTML = ()
            
                <tr>
                    <td>${localStorage.getItem('nombre_' + id_dato)}</td>
                    <td>${localStorage.getItem('telefono_' + id_dato)}</td>
                    <td>${localStorage.getItem('direccion_' + id_dato)}</td>
                    <td>
                        <i class="fas fa-pen mx-2" onclick="editar_elemento(${id_dato})"></i>
                        <i class="fas fa-trash mx-2" onclick="borrar_elemento(${id_dato})"></i>
                    </td>
                </tr>
            }
        }
    } else {
        body_tabla.innerHTML += ()
            <td>${localStorage.getItem('direccion_' + contador_actual)}</td>
            <td>
                <i class="fas fa-pen mx-2" onclick="editar_elemento(${contador_actual})"></i>
                <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
                <i class="fas fa-trash mx-2" onclick="borrar_elemento(${contador_actual})"></i>
            </td>

            </tr>
            `
    function editar_elemento_accion(indice_dato) {
        document.getElementById("mi_formulario").reset()
    }
    
    function borrar_elemento() {
        console.error("Se borro")}
    function borrar_elemento(id_dato) {
        Swal.fire({
            title: 'Esta seguro de eliminar el dato?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                let body_tabla = document.querySelector("#data-usuario-read")
                body_tabla.innerHTML = ''
    
                localStorage.removeItem("nombre_" + id_dato)
                localStorage.removeItem("telefono_" + id_dato)
                localStorage.removeItem("direccion_" + id_dato)
                listado_data(1, true)
    
    
                Swal.fire({
                    title: 'Se elimino el dato',
                    icon: 'success'
                })
                document.getElementById("mi_formulario").reset()
            }
        })
    }}