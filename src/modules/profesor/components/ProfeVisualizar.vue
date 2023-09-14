<template>
  
  <div class="contain">
          <div class="datos">
              <label for="">nombre</label>
              <input v-model="objetoProfe.nombre" type="text">
  
              <label for="">apellido</label>
              <input v-model="objetoProfe.apellido" type="text">
  
              <label for="">cedula</label>
              <input v-model="objetoProfe.cedula" type="text">
  
              <label for="">fecha</label>
              <input v-model="objetoProfe.fecha" type="text">

             
          </div>
  
    </div>

</template>

<script>
export default {
  
    data(){
          return{
            
                  nombre:"",
                  apellido:"",
                  cedula:"",
                  fecha:""
              
          }
      },
  
      methods:{
 
      },

      props:{
        objetoProfe:{
          nombre:"",
          apellido:"",
          cedula:"",
          fecha:""
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
    display: grid;
  }
  </style>