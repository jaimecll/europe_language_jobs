<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-toolbar row no-wrap items-center relative-position q-pa-none q-toolbar-normal bg-primary text-white">
          <q-toolbar class="layout-padding">
            
            <q-avatar>
              <img src="https://www.europelanguagejobs.com/statics/images/logo-elj-white.svg">
            </q-avatar>
  
            <q-toolbar-title></q-toolbar-title>
            <q-btn flat dense >Maquetación</q-btn>
            <q-btn flat dense >Datos</q-btn>
            <q-btn flat dense >Formulario</q-btn>
            
          </q-toolbar>
        </q-header>
    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
