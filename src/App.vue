<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-toolbar row no-wrap items-center relative-position q-pa-none q-toolbar-normal bg-primary text-white">
          <q-toolbar class="q-pl-xl q-pr-xl layout-content">
            
            <q-avatar square size="60px">
              <img class="header-logo cursor-pointer" src="https://www.europelanguagejobs.com/statics/images/logo-elj-white.svg">
            </q-avatar>
  
            <q-toolbar-title></q-toolbar-title>
            <router-link to="/">
              <q-btn flat dense @click="changeView(1)" class="inline relative-position q-btn-item non-selectable q-py-sm q-px-md q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-no-uppercase q-btn-dense">Maquetación</q-btn>
            </router-link>
            <router-link to="/form">
              <q-btn flat dense @click="changeView(2)" class="inline relative-position q-btn-item non-selectable q-py-sm q-px-md q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-no-uppercase q-btn-dense">Datos</q-btn>
            </router-link>
            
          </q-toolbar>
        </q-header>
    <q-page-container>
     <!-- Router view no logro hacer que funcione, codigo poco optimo -->
        <router-view></router-view>
        <Maquetacion v-if="view==1" />
        <Form v-if="view==2"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

import Maquetacion from './components/Maquetacion.vue';
import Form from './components/FormPerros.vue';


export default {
  name: 'App',

  components: {
    Maquetacion,
    Form
  },

  setup () {
    return {
      leftDrawerOpen: ref(false),
    }
  },
  data(){
    return{
      view:1,
    }
  },
  methods: {
    changeView(views){
      this.view=views;
    }
  },
}
</script>
<style scoped src="./assets/css/maquetacion.css"></style>
