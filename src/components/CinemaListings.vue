<template>
  <div class="grid-y">
    <div v-if="loading">
      {{ loading }}
    </div>

    <header class="header__wrapper">
      <ul class="grid-x">
        <li class="cell small-12 medium-6">
          <h1 class="header__title">Mostrando películas en:</h1>
          <div class="header__select">            
            <select
              v-model="city">
              <option
                class="material-icons"
                v-for="value in stateCities"
                :value="value.city">
                {{ value.city | uppercase }}
              </option>
            </select><!-- End. Select city. -->
          </div>
        </li>
        <li class="cell small-12 medium-6">
          <ul class="grid-y grid-frame">
            <li class="cell auto">
              <figure>
                <img
                  class="header__powered"
                  src="http://static.pulzo.com/cinepapaya/fandango.png" alt="">
              </figure>
            </li>
            <li class="cell shrink align-bottom">              
              <ul class="grid-x align-right">
                <li class="cell shrink">
                  <a
                    class="header__availability"
                    :class="{ 'header__availability--active': availability == 'billboard' }"
                    @click.prevent="filter('billboard')">{{ $t('common.billboard') | capitalize }}</a>
                </li>
                <li class="cell shrink">
                  <div class="header__availability header__availability--pleca">|</div>
                </li>
                <li class="cell shrink">
                  <a
                    class="header__availability"
                    :class="{ 'header__availability--active': availability == 'soon' }"
                    @click.prevent="filter('soon')">{{ $t('common.soon') | capitalize }}</a>
                </li>
              </ul><!-- End. Filter availability. -->
            </li>
          </ul>
        </li>
      </ul>

    </header><!-- End. Filters. -->

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
              <a :href="movie.baseMovieUrl">
                <!-- <progressive-img
                  :src="movie.image"
                  fallback="https://picsum.photos/260/380?image=11"
                  :alt="movie.name | capitalize" /> -->
                <figcaption class="srt">{{ movie.name | capitalize }}</figcaption>
              </a>
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
                    :href="movie.baseMovieUrl">Conoce más</a>              
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
        city: 'Barranquilla', // set default city to 'Bogotá'.
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