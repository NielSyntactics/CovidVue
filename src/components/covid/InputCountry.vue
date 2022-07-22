<template>
  <div class="card">
    <form @submit="getCountry">
      <input type="text" class="input" v-model="country">
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import store from "@/store";
export default {
  name: "InputCountry",
  setup(){
    const country = ref("");
    const getCountry = async (e) => {
      e.preventDefault();
      store.dispatch("loadCovidDataApi",country.value);
    }

    return {
      country,
      getCountry
    }
 }
}
</script>

<style scoped>
.input {
  width: 90%;
  border-radius: 10px;
  padding: 10px;
}
</style>