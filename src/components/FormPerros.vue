<template>
    <div class="contact-form-container">
        <q-form
        @submit="onSubmit"
        @reset="reset"
        class="row"
        :ref="perrosForm"
        >
            <div class="col-md-6 col-xs-12 block-fields q-pl-lg q-pr-lg">
                <div id="raza">
                <q-input  v-model="raza" label="Raza" lazy-rules :rules="[val => val && val.length > 0 || 'Rellena el campo']"></q-input>

                </div>
                <q-select id="tamaño" filled v-model="tamano" :options="sizeOptions" label="Tamaño" lazy-rules :rules="[val => val !== null || 'Selecciona una opcion']"/>
            </div>
            <div class="col-md-6 col-xs-12 block-fields q-pl-lg q-pr-lg">
                <q-file id="imagen" v-model="imagen" :rules="[val => val !== null || 'Sube una imagen']">
                    <template v-slot:prepend>
                    <q-icon name="attach_file"></q-icon>
                    </template>
                </q-file>
                <q-select id="color" filled v-model="color" :options="colorOptions" label="Color" lazy-rules :rules="[val => val !== null || 'Selecciona una opcion']"/>
                
                
            </div>
            <div class="q-pl-lg q-pr-lg">
                <q-btn type="submit" label="Enviar" color="primary" class="q-mr-sm"></q-btn>
                <q-btn type="reset" label="Reset" color="primary" outline class="ql-ml-sm" :ripple="false"></q-btn>
            </div>

        </q-form>
        <TablaPerros :perros="perros"></TablaPerros>
    </div>
</template>
<script>
import { ref } from 'vue'
import TablaPerros from './TablaPerros.vue'
export default {
  components: ( {TablaPerros}),
  setup () {
    const perrosForm = ref(null);
    const raza = ref(null);
    const tamano = ref(null);
    const color = ref(null);
    const imagen = ref(null);
    const reset = () => {
        raza.value=null;
        tamano.value=null;
        color.value=null;
        imagen.value=null;
      };
    const perros = ref([]);
    return {
      perros,
      perrosForm,
      raza,
      tamano,
      color,
      imagen,
      reset,
      sizeOptions: [
        'Pequeño', 'Mediano', 'Grande'
      ],
      colorOptions: [
        'Blanco', 'Negro', 'Marron'
      ],
      
      onSubmit(){
        
        perros.value = [...perros.value,{
            raza: raza.value,
            color: color.value
        }]
        
        reset();
        }
    }
  },
}
</script>