<template>
  <ProfesorTabla @get-profe="pasarProfe"></ProfesorTabla>

  <ProfeVisualizar :objetoProfe="profe"> </ProfeVisualizar>

</template>

<script>

import ProfesorTabla from '@/modules/profesor/components/ProfesorTabla.vue';
import ProfeVisualizar from '@/modules/profesor/components/ProfeVisualizar.vue';

export default {
    components:{
        ProfesorTabla,
        ProfeVisualizar
    },
    data(){
       return{
        profe:null
       }
    },
    methods:{
        pasarProfe(profeObjeto){
            this.profe = profeObjeto
            console.log(this.profe)

        }
    }

}
</script>

<style>

</style>