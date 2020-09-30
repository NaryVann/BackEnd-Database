<template>
  <div class="container">
    <h1>Latest Tasks</h1>
    <div class="create-post">
      <label for="create-post">Say something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button v-on:click="createPost">Post</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dbclick="deletePost(post._id)"
      >
        {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
        <p class="text">{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import tasklistService from '../tasklistService';
export default {
  name: 'tasklistComponent',
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    }
  },
  async created(){
    try{
      this.posts = await tasklistService.getPosts();
    }catch(err){
      this.error = err.message;
    }
  },
  methods:{
    async createPost(){
      await tasklistService.inserPost(this.text)
      this.post = await tasklistService.getPosts();
    },
    async deletePost(id){
      await tasklistService.deletePost(id);
      this.post = await tasklistService.getPosts();
    }
  }
}
</script>

