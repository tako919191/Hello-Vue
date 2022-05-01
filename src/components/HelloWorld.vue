<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="fox_img"
          class="ma-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col align="center">
        <v-btn outlined class="ma-3">1</v-btn>
        <v-btn outlined class="ma-3">2</v-btn>
        <v-btn outlined class="ma-3">3</v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col align="center">
        <v-btn outlined class="ma-3">1</v-btn>
        <v-btn outlined class="ma-3">2</v-btn>
        <v-btn outlined class="ma-3">3</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  data () {
    return {
      fox_img: '',
      cat_img: ''
    }
  },
  mounted () {
    axios
      .get('https://randomfox.ca/floof/')
      .then(response => (this.fox_img = response.data.image))
      .catch( e => this.error = e )
  }
}
</script>
