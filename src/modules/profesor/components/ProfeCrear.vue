<template>
  
    <div class="contain">
          <div class="datos">
              <label for="">nombre</label>
              <input v-model="Profe.nombre" type="text">
  
              <label for="">apellido</label>
              <input v-model="Profe.apellido" type="text">
  
              <label for="">cedula</label>
              <input v-model="Profe.cedula" type="text">
  
              <label for="">fecha</label>
              <input v-model="Profe.fecha" type="text">
              <button @click="insertarProfe">guardar</button>
          </div>
  
    </div>
  </template>
  
  <script>
  
  import {insertarProfesor} from "../helpers/ProfesorCliente.js"


  export default {
  
      data(){
          return{
            Profe:{
                  nombre:"",
                  apellido:"",
                  cedula:"",
                  fecha:""
              }
          }
      },
  
      methods:{
        insertarProfe(){
              const profe = this.Profe;
              console.log(profe)
              insertarProfesor(profe)
          }
      }
  
  }
  </script >
  
  <style scoped>
  .contain{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .datos{
    border: 1px black solid;
    padding: 30px;
    border-radius: 17px;
    display: grid;
  }
  </style>