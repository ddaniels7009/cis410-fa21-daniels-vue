<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create a Comment</h4>
            <form id="review-form" @submit.prevent="submitComment">
              <div class="mb-3">
                <label for="text-input" class="form-label">Comment</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="text-input"
                  required=""
                  v-model="text"
                />
              </div>

              <div class="mb-3">
                <label for="date-input" class="form-label">Date</label
                ><input
                  type="date"
                  class="form-control"
                  id="date-input"
                  required=""
                  v-model="date"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit Comment</button
              ><button
                v-on:click="cancelComment"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      date: null,
      text: "",
      errorMessage: null,
    };
  },
  methods: {
    submitComment() {
      let myReview = {
        date: this.date,
        text: this.text,
        PicturePK: this.$route.params.pk,
      };
      axios
        .post("/comments", myReview, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create a comment, please try again later";
        });
    },
    cancelComment() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
