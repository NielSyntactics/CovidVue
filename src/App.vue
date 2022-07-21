<template>
  <HeaderCovid/>
  <InputCountry />
  <div class="grid-card">
    <CountryCard bgColor="b5e7a0" />
    <NumOfCases bgColor="deeaee" />
    <NumOfDeath bgColor="eca1a6" />
    <LastChecked bgColor="bdcebe" />
    <LastReported bgColor="82b74b" />
  </div>
</template>

<script>
import CountryCard from './components/covid/Country.vue'
import HeaderCovid from './components/Header.vue'
import NumOfCases from './components/covid/Cases.vue'
import NumOfDeath from './components/covid/Death.vue'
import LastChecked from './components/covid/Checked.vue'
import LastReported from './components/covid/Reported.vue'
import InputCountry from './components/covid/InputCountry.vue'

export default {
  name: 'App',
  components: {
    CountryCard,
    HeaderCovid,
    NumOfCases,
    NumOfDeath,
    LastChecked,
    LastReported,
    InputCountry
  },
}
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



.card {
  border-radius: 10px;
  box-shadow: 0 0 5px #999;
  max-width: 300px;
  margin: auto;
  padding: 15px 25px 15px 25px;
  text-align: start;
  margin-top: 20px;
}

.data-icon {
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: stretch;
  align-items: center;
  margin-bottom: 16px;
  gap: 20px;
}

h2 {
  margin: 0;
  font-size: 50px;
}

.card p {
  margin-bottom: 0px;
  color: #999;
}

.fontawesome-container{
  text-align: center;
  background-color: #eca1a6;
  padding: 10px;
  width: fit-content;
  border-radius: 50%;
}

@media only screen and (min-width: 800px) {
  .grid-card{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-content: stretch;
  }
  .grid-card div:nth-child(5){
    grid-column-start: 3;
  }
}

</style>
