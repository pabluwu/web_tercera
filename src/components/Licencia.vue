<template>
  <div class="container-sm col-xl-6">
    <div class="card text-start" >
        <div class="card-body">
            <form v-on:submit.prevent="crearLicencia">
                <div class="mb-3 row">
                    <label for="staticCitacion" class="col-sm-2 col-form-label">Citación:</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticCitacion" :value= "citacion.titulo" >
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticCitacion" class="col-sm-2 col-form-label">Fecha:</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticCitacion" :value= "citacion.fecha" >
                    </div>
                </div>
                <div class="mb-3">
                    <label for="textAreaLicencia" class="form-label">Mótivo de la licencia.</label>
                    <textarea class="form-control" v-model="licencia.motivo" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" v-model="licencia.enviar_copia" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Enviarme una copia.</label>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Licencia',
  data() {
    return {
        citacion : [],
        licencia : {}
    }
  },
  created() {
    this.consultarCitacion()
  },
  methods: {
    consultarCitacion(){
        let self = this
        axios.get('http://localhost:3000/citaciones/'+this.$route.params.id)
            .then(function( response ){
                self.citacion = response.data;
                console.log('axios citacion')
                console.log(self.citacion)
            })                
    },
    crearLicencia(){
      console.log(this.licencia)
      console.log(this.citacion._id)
    }
  },
}
</script>


