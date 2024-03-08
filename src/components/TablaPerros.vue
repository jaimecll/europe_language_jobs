import { default } from './FormPerros.vue';
<template>

    <q-table class="q-mt-md" title="Perros" no-data-label="No hay perros" :columns="columns" :rows="perros">
        
    </q-table>
</template>

<script>
const columns=[
        {
            name:'raza',
            label: 'Raza',
            align: 'left',
            field: 'raza',
            sortable: true,
        },
        {
            name:'color',
            label: 'Color',
            align: 'left',
            field: 'color',
            sortable: true,
        }
    ]
const rows = [{
        
    }]
    export default{
        props: {
            perros: Array,
        },
        setup(){
            return{
                columns,
                rows
            }
        }
    }

</script>
