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
          <ul class="grid-y grid-frame align-justify">
            <li class="cell">
              <figure>
                <a
                  href="https://www.fandango.lat/co"
                  class="header__powered">
                  <img
                    src="http://static.pulzo.com/cinepapaya/fandango.png" alt="">
                </a>
              </figure>
            </li>
            <li class="cell shrink">
              <div class="header__tabs">
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
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </header><!-- End. Filters. -->
    <div
      v-for="city in filterBy(stateCities, city, 'city')">
      <transition-group
        class="grid-x grid-margin-x movie__wrapper"
        name="slide-fade" 
        tag="ul">
        <li
          class="cell small-12 medium-4 large-3"
          v-for="(movie, index) in city[availability]"
          v-bind:key="index">
          <article class="movie__tile">
            <ul class="grid-x">
              <li class="cell small-4 medium-12">
                <figure class="movie__figure">
                  <a :href="movie.baseMovieUrl">
                    <progressive-img
                      :src="movie.image"
                      fallback=""
                      :alt="movie.name | capitalize" />
                    <figcaption class="srt">{{ movie.name | capitalize }}</figcaption>
                  </a>
                </figure>
              </li>
              <li class="cell small-8 medium-12">
                <div class="movie__textWrapper grid-y grid-frame align-justify">
                  <h2 class="movie__title">
                    {{ movie.name | capitalize }}
                  </h2><!-- End. Movie title. -->
                  <div class="grid-x">
                    <div class="cell auto">
                      <div class="movie__details movie__genre ellipsis">
                        {{ $t('common.genre') | capitalize }}:
                        <span v-for="genre in limitBy(movie.genres, 1)">            
                          {{ genre.name }}
                        </span>
                      </div><!-- End Movie genre. -->
                      <div class="movie__details movie__duration ellipsis">
                        {{ $t('common.duration') | capitalize }}:
                        {{ movie.duration | capitalize }}Min
                      </div><!-- End. Movie duration. -->
                    </div>
                    <div class="cell shrink">
                      <ul class="grid-y grid-frame align-right">
                        <li class="cell shrink">
                          <a
                            class="movie__btn"
                            :href="movie.baseMovieUrl">Conoce más</a>
                        </li>
                      </ul>         
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
      this.$store.dispatch('loadCities', this)
      console.log(this.stateCities)
    },
    methods: {
      filter: function (availability) {
        this.availability = availability
      }
    }
  }
</script>