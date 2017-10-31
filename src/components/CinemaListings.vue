<template>
  <div>
    <div v-if="loading">
      {{ loading }}
    </div>
    <nav>
      <div>Mostrando películas en:</div>
<!--       <v-select
        label="billboard"
        :options="options.billboard"
        :placeholder="options.city"></v-select> -->
      <ul>
        <li>
          <a @click.prevent="filter($t('common.billboard'))">{{ $t('common.billboard') | capitalize }}</a>
        </li>
        <li>
          <a @click.prevent="filter($t('common.soon'))">{{ $t('common.soon') | capitalize }}</a>
        </li>
        {{ availability | capitalize }}
      </ul><!-- End. Filter availability. -->
    </nav><!-- End. Filters. -->
    <article>
      <section v-for="movie in stateCities.billboard">
        <hr>
<!--         <img
          :src="movie.image"
          :alt="movie.name | capitalize"> -->
        <h2 class="movie__title">
          {{ movie.name | capitalize }}
        </h2><!-- End. Movie title. -->
        <div class="movie__genre">
          {{ $t('common.genre') | capitalize }}:
          <span v-for="genre in limitBy(movie.genres, 1)">            
            {{ genre.name }}
          </span>
        </div><!-- End Movie genre. -->
        <div class="movie__duration">
          {{ $t('common.duration') | capitalize }}:
          {{ movie.duration | capitalize }}Min
        </div><!-- End. Movie duration. -->
        <a
          :href="movie.baseMovieUrl">Conocer más</a>
      </section>
    </article><!-- End. Movies lists -->
  </div>
</template>

<script>
  export default {
    name: 'CinemaListings',
    data () {
      return {
        options: [],
        availability: '' // set default availability to 'billboard'
      }
    },
    computed: {
      stateCities () {
        return this.$store.getters.loadedCities
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    created () {
      this.$store.dispatch('loadCities')
    },
    methods: {
      filter: function (availability) {
        this.availability = availability
      }
    }
  }
</script>