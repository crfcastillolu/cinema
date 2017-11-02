<template>
  <div class="grid-y">
    <div v-if="loading">
      {{ loading }}
    </div>

    <nav>
      <ul class="grid-x">
        <li class="cell small-12 medium-6">
          <div>Mostrando películas en:</div>
          <select
            v-model="city">
            <option
              v-for="value in stateCities"
              :value="value.city">
              {{ value.city }}
            </option>
          </select><!-- End. Select city. -->
        </li>
        <li class="cell small-12 medium-6">
          <ul class="grid-x">
            <li class="cell small-6">
              <a
                :class="{ 'movie__availability--active': availability == 'billboard' }"
                @click.prevent="filter('billboard')">{{ $t('common.billboard') | capitalize }}</a>
            </li>
            <li class="cell small-6">
              <a
                :class="{ 'movie__availability--active': availability == 'soon' }"
                @click.prevent="filter('soon')">{{ $t('common.soon') | capitalize }}</a>
            </li>
          </ul><!-- End. Filter availability. -->
        </li>
      </ul>

    </nav><!-- End. Filters. -->

    <div v-for="city in filterBy(stateCities, city, 'city')">
      <transition-group
        class="grid-x grid-margin-x movie__wrapper"
        name="slide-fade" 
        tag="ul">
        <li
          class="cell small-12 medium-4 large-3"
          v-for="(movie, index) in city[availability]"
          v-bind:key="index">
          <article class="movie__tile">          
            <figure class="movie__figure">
              <img
                :src="movie.image"
                :alt="movie.name | capitalize">
              <figcaption class="srt">{{ movie.name | capitalize }}</figcaption>
            </figure>
            <div class="movie__textWrapper">
              <h2 class="movie__title">
                {{ movie.name | capitalize }}
              </h2><!-- End. Movie title. -->
              <div class="grid-x">
                <div class="cell small-7">
                  <div class="movie__details movie__genre">
                    {{ $t('common.genre') | capitalize }}:
                    <span v-for="genre in limitBy(movie.genres, 1)">            
                      {{ genre.name }}
                    </span>
                  </div><!-- End Movie genre. -->
                  <div class="movie__details movie__duration">
                    {{ $t('common.duration') | capitalize }}:
                    {{ movie.duration | capitalize }}Min
                  </div><!-- End. Movie duration. -->
                </div>
                <div class="cell small-5">
                  <a
                    class="movie__btn"
                    :href="movie.baseMovieUrl">Conocer más</a>              
                </div>
              </div>
            </div>
          </article>
        </li>
      </transition-group><!-- End. Movies lists -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CinemaListings',
    data () {
      return {
        city: 'Bogotá', // set default city to 'Bogotá'.
        availability: 'billboard' // set default availability to 'billboard'.
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
      console.log(this.stateCities)
    },
    methods: {
      filter: function (availability) {
        this.availability = availability
      }
    }
  }
</script>