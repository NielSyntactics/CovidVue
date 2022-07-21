<template>
  <div class="card" :style="bgStyle">
    <p><b>Total # of Death</b></p>
    <div class="data-icon">
      <h4>{{ this.$store.getters.getDeaths }}</h4>
      <div class="fontawesome-container">
        <font-awesome-icon icon="fa-solid fa-skull" size="3x" :style="{ color: 'white' }" />
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
 name: "NumOfDeath",
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