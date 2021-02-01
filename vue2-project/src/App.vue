<template>
  <div>
    <Content title="I am Vue Project" />
  </div>
</template>

<script>
import Content from "./components/Content";

export default {
  name: "APP",
  components: {
    Content,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
</style>
