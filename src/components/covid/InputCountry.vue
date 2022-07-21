<template>
  <div class="card">
    <form>
      <input type="text" class="input" v-model="country" @input="getCountry">
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
    const getCountry = async () => {
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