<template>
  <span class="error">
     {{ message }}
  </span>
</template>

<script>
export default {
    name: 'ErrorMessage',
    props: {
    message: {
      type: Array
    },
  },
}
</script>

<style>
    .error {
        display: flex;
        color: red;
        font-size: 12px;
        font-style: italic;
    }
</style>