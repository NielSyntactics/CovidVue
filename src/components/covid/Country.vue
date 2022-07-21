<template>
<div class="card" :style="bgStyle">
  <p><b>Country</b></p>
  <div class="data-icon">
    <h2>{{ this.$store.getters.getLocation}}</h2>
    <div class="fontawesome-container">
      <font-awesome-icon icon="fa-solid fa-earth-americas" size="3x" :style="{ color: 'white' }" />
    </div>
  </div>
</div>
</template>

<script>
import {ref} from "vue";
// import store from "@/store";
export default {
  name: "CountryCard",
  props:{
    bgColor: String
  },
  setup(props){
    const bgStyle = ref({background:"black"})
    bgStyle.value.background =  "#"+props.bgColor;

    return {
      bgStyle
    }
  }
}
</script>

<style scoped>

</style>