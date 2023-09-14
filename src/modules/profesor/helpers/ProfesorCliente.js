import axios from "axios";

async function obtenerTodosProfesor(){

    const data = axios.get("http://localhost:8082/API/1.0/Registro/profesores").then(r=>r.data);
        return data
}



async function buscarPorId(id){

    const data = axios.get("http://localhost:8082/API/1.0/Registro/profesores/"+id).then(r=>r.data);
    console.log(data)
        return data
}



async function insertarProfesor(profesor){
    
    axios.post("http://localhost:8082/API/1.0/Registro/profesores",profesor).then(r=>r.data);
}

async function eliminarProfesor(id){
    
    axios.post("http://localhost:8082/API/1.0/Registro/profesores"+id).then(r=>r.data);
}

export{
    insertarProfesor,
    buscarPorId,
    obtenerTodosProfesor,
    eliminarProfesor
}


