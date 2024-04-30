<template>
    <InputComponent id="id" name="id" type="hidden"/>
    <InputComponent type="number" id="codigo" name="codigo" label="Codigo: " />
    <InputComponent id="nombre" name="nombre" label="Nombre: " />
    <InputComponent id="descripcion" name="descripcion" label="Descripción: " />
    <InputComponent id="estado" name="estado" label="Estado: " />            
</template>

<script lang="ts">
    import InputComponent from '@/components/InputComponent.vue';
    import { defineComponent } from 'vue';

export default defineComponent({
  components: { InputComponent },
});

</script>

<style scoped>
/* Estilos del componente */
/* Estilos globales */
</style>
