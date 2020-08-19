<template>
  <b-container fluid class="mx-auto text-center">
    <div class="mt-4">
      <b-card no-body class="overflow-hidden" header="Profile">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/400/400/"
              alt="Image"
              class="rounded-2"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="name">
              <b-card-text>
                Random Quote:
                <div class="quote">{{ quote }}</div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
      name: this.$store.state.user.fullName,
      email: this.$store.state.user.emailAddress,
      quote: null,
    };
  },
  methods: {
    getRandoQuote() {
      axios('https://litipsum.com/api/1/json')
        .then(response => {
          this.quote = response.data.text.map(sentence => sentence);
        })
        .then(() => {
          [this.quote] = this.quote;
        });
    },
  },
  mounted() {
    this.getRandoQuote();
  },
};
</script>
<style lang="scss" scoped>
//https://codepen.io/fuzzywalrus/pen/OxYENY
//think I should reinvent this wheel using some JS
.quote {
  font-family: 'Pacifico', cursive;
}
</style>
