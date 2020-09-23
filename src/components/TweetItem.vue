<template>
  <div class="tweet-item" @click="favoriteTweet(tweet.id)">
    <div class="user-profile__tweet">
      <div class="tweet-item_user">@{{ username }}</div>
      <div class="tweet-item_content">{{ tweet.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    tweet: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favoriteTweet(id) {
      //$emit is to create an event that we're going to emit up to the parent
      this.$emit("favorite", id); //instead of having normal click event name, we can name our own event which is 'favorite' in this case and this event name favorite will be used (with @) in the parent component
    },
  },
};
</script>

<style lang="scss" scoped>
.tweet-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  .tweet-item__user {
    font-weight: bold;
  }
}
</style>