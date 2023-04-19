<template>
  <button @click="$emit('click')">
    <slot> </slot>
  </button>
</template>

<style>
button {
  background: #000;
  border: 1px solid #000;
  border-radius: 5px;
  color: #fff;
  height: fit-content;
  padding: 5px;
  cursor: pointer;
  height: 36px;
  background: #353a40;
  border: 1px solid #353a40;
}
button:hover {
  opacity: 0.5;
}

</style>
