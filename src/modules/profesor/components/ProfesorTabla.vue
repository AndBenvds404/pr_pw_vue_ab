<template>
  <div class="contain">
        <div class="tabla">

            <table>
                <button class="buton-c" @click="consultarDatos">consultar</button>
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Accion</th>
                    <th>Accion</th>
                </tr>
                <tr  v-for="profe in lsProfesor" :key="profe.id">
                    <td>{{profe.cedula}}</td>
                    <td>{{profe.nombre }}</td>
                    <td><button @click="verProfesor( profe.id )">visuzaliar</button></td>
                    <td><button @click="eliminarProfesor( profe.id )">eliminar</button></td>
                </tr>
            </table>
        </div>
  </div>

</template>

<script>

import {obtenerTodosProfesor} from "../helpers/ProfesorCliente.js"
import {buscarPorId} from "../helpers/ProfesorCliente.js"
import {eliminarProfesor} from "../helpers/ProfesorCliente.js"

export default {
    data(){
        return{
            lsProfesor:[],
            idprofe:null,
            profe: null
        }
    },

    methods:{
        async consultarDatos(){
             this.lsProfesor = await obtenerTodosProfesor();

             console.log(this.lsProfesor)
            
        },


        async verProfesor(id){
            console.log(id)
            this.idprofe = id;
            this.profe =  await buscarPorId(id);

            console.log(this.profe )
            this.$emit("get-profe" ,this.profe)

        },


        async eliminarProfesor(id){
            await eliminarProfesor(id)
        }




    }

}
</script>

<style>
.contain{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tabla{
    display: grid;
  }
</style>