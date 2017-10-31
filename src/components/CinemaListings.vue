<template>
  <article>
    <nav>
      <div>Mostrando películas en:</div>
<!--       <v-select
        label="billboard"
        :options="options.billboard"
        :placeholder="options.city"></v-select> -->
    </nav>
    {{ stateCities }}
    <article>
      <section v-for="movie in options.billboard">
        <hr>
<!--         <img
          :src="movie.image"
          :alt="movie.name | capitalize"> -->
        <div class="movie__title">
          {{ movie.name | capitalize }}
        </div>
        <div class="movie__duration">
          Duración: {{ movie.duration | capitalize }}Min
        </div>
        <a
          :href="movie.baseMovieUrl">Conocer más</a>
      </section>
    </article>    
  </article>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'CinemaListings',
    data () {
      return {
        options: []
      }
    },
    computed: {
      stateCities () {
        return this.$store.getters.loadedCities
      }
    },
    mounted () {
      axios.get('https://cors-anywhere.herokuapp.com/http://static.pulzo.com/pulzo-dev/cinema/grid/10986.json')
        .then(response => {
          // JSON responses are automatically parsed.
          this.options = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>