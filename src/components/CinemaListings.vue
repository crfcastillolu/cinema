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
      <section v-for="movie in stateCities.billboard">
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
    created () {
      this.$store.dispatch('loadCities')
    }
  }
</script>