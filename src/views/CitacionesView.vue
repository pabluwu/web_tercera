<template lang="">
    <div class="container">
        <div class="row justify-content-center">
            
            <div v-for="item in citaciones" :key="item._id" class="d-flex justify-content-center col-12 col-md-2 mt-2">
                <div class="card" style="width: auto; max-width: 220px; ">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.titulo }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.lugar }}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.fecha }}</h6>
                        <p class="card-text">{{item.descripcion}}</p>
                        <router-link :to="{name:'licencia',params:{id:item._id}}" class="btn btn-primary">Dejar Licencia</router-link>
                    </div>
                </div>
            </div>
            
        </div> 
        
        
    </div>
</template>
<script>
import axios from 'axios'
import storage from '../storage'
// import { reactive, onMounted } from 'vue';
    export default {
        data() {
            return {
                citaciones : []
            }
        },
        async mounted() {
            let self = this
            console.log(storage.state.isAuthenticated)
            await axios.get('/citaciones')
                .then(function( response ){
                    self.citaciones = response.data;
                    console.log(localStorage.getItem('token'));
                    console.log(self.citaciones)
                })
            
        },
        
    }
</script>
<style lang="">
    
</style>
