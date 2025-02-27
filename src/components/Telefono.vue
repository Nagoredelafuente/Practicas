<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
    modelValue: String,
    text: {
        type: String,
        default: "Teléfono",
    },
    placeholder: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue"]);

const modelo = computed({
    get: () => props.modelValue, 
    set: (value) => emit("update:modelValue", value), 
});
</script>
<template>
    <div class="container-telefono">
        <label for="telefono">{{text}}</label>
        
        <div class="container-prefijo">
            <select name="prefijo" id="prefijo">
                <option value="+34">+34</option>
                <option value="+33">+33</option>
                <option value="+32">+32</option>
                <option value="+31">+31</option>
            </select>
            <input type="tel" id="telefono" :placeholder="placeholder" v-model="modelo" required/>
        </div>


    </div>
</template>
<style>
    .container-telefono {
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
}

.container-telefono label {
    display: block;
    margin-bottom: 0.5rem;
    color: #000;
}

.container-prefijo {
    display: flex;
    align-items: center;
    gap: 10px; 
    width: 100%;
    margin-top: 5px;
}

.container-prefijo select {
    width: 20%; 
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.container-prefijo input {
    flex: 1; 
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>