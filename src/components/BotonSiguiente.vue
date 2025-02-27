<script setup>
    defineProps({
        text: {
            type: String,
            default: 'Siguiente'
        }
    })

</script>

<template>

  <div class="boton-siguiente">
    <button class="btn-siguiente">{{ text }}</button>
  </div>
</template>

<style scoped lang="scss">
  .boton-siguiente {
    width: 100%;
    display: flex;
    justify-content: center;

  .btn-siguiente {
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    background: #7058E8;
    color: rgb(0, 0, 0);
    font-size: 1rem;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

</style>
