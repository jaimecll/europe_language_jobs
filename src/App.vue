<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-toolbar row no-wrap items-center relative-position q-pa-none q-toolbar-normal bg-primary text-white">
          <q-toolbar class="q-pl-xl q-pr-xl layout-content">
            
            <q-avatar square size="60px">
              <img class="header-logo cursor-pointer" src="https://www.europelanguagejobs.com/statics/images/logo-elj-white.svg">
            </q-avatar>
  
            <q-toolbar-title></q-toolbar-title>
            <q-btn flat dense class="q-btn inline relative-position q-btn-item non-selectable q-py-sm q-px-md q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-no-uppercase q-btn-dense">Maquetación</q-btn>
            <q-btn flat dense class="q-btn inline relative-position q-btn-item non-selectable q-py-sm q-px-md q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-no-uppercase q-btn-dense">Datos</q-btn>
            <q-btn flat dense class="q-btn inline relative-position q-btn-item non-selectable q-py-sm q-px-md q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-no-uppercase q-btn-dense">Formulario</q-btn>
            
          </q-toolbar>
        </q-header>
    <q-page-container>
      <Maquetacion />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Maquetacion from './components/Maquetacion.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Maquetacion
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
<style scoped src="./assets/css/maquetacion.css"></style>
