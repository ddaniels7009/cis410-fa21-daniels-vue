<template>
  <div>
    <h1>Pictures</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Title</th>
          <th>Description</th>
          <th>Picture Placeholder</th>
          <th>Picture Placeholder</th>
          <th>Location</th>
          <th>Date Posted</th>
          <th>Hashtag</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aPicture in thePictures" :key="aPicture.PicturePK">
          <th>{{ aPicture.username }}</th>
          <th>{{ aPicture.title }}</th>
          <th>{{ aPicture.description }}</th>
          <th>{{ aPicture.widthInPixels }}</th>
          <th>{{ aPicture.heightInPixels }}</th>
          <th>{{ aPicture.location }}</th>
          <th>{{ aPicture.datePosted }}</th>
          <th>{{ aPicture.hashtag }}</th>
          <th>
            <router-link :to="`/picture/${aPicture.PicturePK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    thePictures() {
      return this.$store.state.pictures;
    },
  },
};
</script>

<style></style>
