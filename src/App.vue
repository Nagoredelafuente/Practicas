<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/newaccount">Nueva cuenta</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
        <RouterLink to="/mensaje">Mensaje</RouterLink>
        <RouterLink to="/reserva">Reservas</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f5ebeb;
    padding: 15px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 1000;
    text-align: center;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>
