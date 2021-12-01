<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Comments</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>

    <table v-if="commentsByUser" class="table">
      <thead>
        <th>Comment</th>
        <th>Date</th>
        
      </thead>
      <tbody>
        <tr v-for="thisComment in commentsByUser" :key="thisComment.CommentPK">
          <th>
            <router-link :to="`/picture/${thisComment.PicturePK[0]}`">{{
              thisComment.text
            }}</router-link>
          </th>
          <th>{{ thisComment.date }}</th>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      commentsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/comments/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.commentsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>