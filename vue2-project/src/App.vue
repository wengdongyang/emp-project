<template>
  <div>
    this is vue2
    <AsIconReact class="icon" icon="notice-ALARM" size="14" />
    <!-- <AsEmptyReact :defaultSource="emptyImg" :src="emptyImg" /> -->
  </div>
</template>

<script>
import { ReactInVue } from "vuera";
import EmptyImg from "./assets/empty.png";
const AsIconReact = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import("@emp/react-base/components").then((res) => {
    const { AsIcon } = res;
    return ReactInVue(AsIcon);
  }),
  delay: 0,
  timeout: 300,
});
const AsEmptyReact = () => ({
  component: import("@emp/react-base/components").then((res) => {
    const { AsEmpty } = res;
    return ReactInVue(AsEmpty);
  }),
  delay: 0,
  timeout: 300,
});
export default {
  name: "App",
  data: () => ({
    emptyImg: EmptyImg,
  }),
  components: {
    AsIconReact,
    AsEmptyReact,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
