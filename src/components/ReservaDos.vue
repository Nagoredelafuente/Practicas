<script setup>
    defineProps({
        text: {
            type: String,
            default: 'Nueva'
        }
    })

</script>

<template>
    <button >{{ text }}</button>
    <!--@click="$emit('click')"-->
</template>

<style scoped lang="scss">

button {
    background-color: rgb(117, 97, 240);
    color: white;
    padding: 10px 20px;
    border: 1r;
    border-radius: 2rem;
    border-color: white;
    cursor: pointer;
    margin: 10px;
    padding-left: 100px;
    padding-right: 100px;
    align-items: center;
    flex-direction: column;


}
</style>