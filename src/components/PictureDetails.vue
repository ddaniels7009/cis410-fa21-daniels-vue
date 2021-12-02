<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ picture.title }}</h2>
        <h4 class="text-primary">{{ picture.username }}</h4>
        <br />
        
        <p>
          Picture Placeholder: <br /><strong>{{
            picture.heightInPixels
          }}</strong>
        </p>
        <p>
          Description: <br /><strong>{{ picture.description }}</strong>
        </p>
        <p>
          Location: <br /><strong>{{ picture.location }}</strong>
        </p>
        <p>
          Date Posted: <br /><strong>{{ picture.datePosted }}</strong>
        </p>
        <p>
          Hashtag: <br /><strong>{{ picture.hashtag }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/picture/${this.$route.params.pk}/comment`"
      ><button class="btn btn-success">Add a Comment</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Comment
      </button></router-link
    >
    <br /><br />
    
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    picture() {
      let allPictures = this.$store.state.pictures;
      let thisPicture = allPictures.find((aPicture) => {
        return aPicture.PicturePK == this.$route.params.pk;
      });
      return thisPicture;
    },

    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
