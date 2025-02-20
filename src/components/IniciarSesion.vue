<script setup>
import router from '@/router';


   defineProps({
        text: {
            type: String,
            default: 'ir a iniciar sesion'
        }
    })

</script>

<template>
        <button>{{ text }}</button>
</template>

<style scoped lang="scss">
button {
    background-color: rgb(255, 255, 255);
    color: rgb(117, 97, 240);
    padding: 10px;
    border: 1px solid;
    border-radius: 2rem;
    cursor: pointer;
    width: 100%;
    margin: 10px;
    padding-left: 100px;
    padding-right: 100px;

}
@media (max-width: 768px) {

  button {
    padding: 8px;
    font-size: 1rem;
    width:auto;
    border: 1r;
    cursor: pointer;
    border-color: black;
  }
}
</style>
