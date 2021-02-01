<template>
  <div class="layout-app">
    <h1>EMP Vue3 Hello</h1>
    <as-empty-react />
  </div>
</template>

<script>
import { ReactInVue } from "vuera";

const AsEmptyReact = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import("@emp/react-base/components").then((res) => {
    const { AsEmpty } = res;
    console.log(AsEmpty);
    return ReactInVue(AsEmpty);
  }),
  delay: 0,
  timeout: 3000,
});
export default {
  setup() {},
  components: {
    "as-empty-react": AsEmptyReact,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

.layout-app {
  text-align: center;
  padding: 10px;
}
</style>
