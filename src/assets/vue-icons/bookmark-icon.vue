<template>
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg">
    <path
      :fill="isBookmarked ? '#343A3F' : 'none'"
      width="32px"
      height="16px"
      stroke-width="50px"
      d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"></path>
  </svg>
</template>
<script>
export default {
  props: ['isBookmarked'],
};
</script>
