<template>
  <div class="container-sm col-xl-6 mt-5">
    <div class="card text-start" >
        <div class="card-body">
            <form v-on:submit.prevent="loginEvent">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import storage from '../storage'
export default {
  name: 'Login',
  data() {
    return {
        user : {}
    }
  },
  created() {
    // this.consultarCitacion()
  },
  methods: {
    // consultarCitacion(){
    //     let self = this
    //     axios.get('http://localhost:3000/citaciones/'+this.$route.params.id)
    //         .then(function( response ){
    //             self.citacion = response.data;
    //             console.log('axios citacion')
    //             console.log(self.citacion)
    //         })                
    // },
    async loginEvent(){
      
        const response = await axios.post('/auth/login', {
            email : this.user.email,
            password : this.user.password
        }).then(response=>{
          axios.defaults.headers.common['Authorization'] = response.data;
          localStorage.setItem('token', response.data);
          storage.commit('setAuthenticated', true);
          this.$router.push('/citaciones');
        });

        console.log(response.data);
        
    }
  },
}
</script>


