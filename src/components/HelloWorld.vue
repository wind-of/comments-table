<template>
  <div class="hello">
    <div class="title">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Comments' table</h1>
    </div>
    <div class="add-comments-form">
      <div class="forms-wrapper">
        <input placeholder="Name" type="text" v-model="commentState.author"><br>
        <textarea placeholder="Write here a comment" v-model="commentState.content"></textarea><br>
        <button @click="addComment">Add</button>
      </div>
    </div>
    <div class="comments-wrapper">
      <div class="comments">
        <div class="comment" v-for="comment of comments" :key="comment.id">
          <div class="content">
            <h3>{{ comment.author }}</h3>
            <div v-if="comment.isEditing">
              <textarea v-model="comment.content"></textarea>
              <br>
              <button @click="toggleEdit(comment.id)">Save</button>
            </div>
            <h4 v-else>{{ comment.content }}</h4>
          </div>
          <div class="config">
            <img v-show="!isEditingComment" src="../assets/edit.png"   alt="Edit"   @click="toggleEdit(comment.id)">
            <img v-show="!isEditingComment" src="../assets/delete.png" alt="Delete" @click="deleteComment(comment.id)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      isEditingComment: false,
      commentState: {
        author: '',
        content: '',
        id: 1,
      },
      comments: [
        {
          author: 'Oleg',
          content: 'Lorem ipsum dolorvorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum doorem ipsum do sit amet adipisking elit.',
          id: 0,
          isEditing: false
        }
      ]
    }
  },
  methods: {


    addComment(){
      let newComment = {};
      Object.assign(newComment, this.commentState);
      this.comments.unshift(newComment);

      this.commentState.id++;
      this.commentState.author = "";
      this.commentState.content = ""; 
    },


    toggleEdit(id) {
      const editingComment = this.comments.find(comment => comment.id == id);
      editingComment.isEditing = !editingComment.isEditing;
      this.isEditingComment = !this.isEditingComment;
    },


    deleteComment(id){
      this.comments = this.comments.filter(comment => comment.id !== id)
    }
    
  },
}
</script>




<style scoped lang="scss">
.title{
  text-align: center;
}
.add-comments-form{
  text-align: center;
  .forms-wrapper{
    input{
      font-size: 16px;
      margin: 5px 15px;
      padding: 10px 5px;
      width: 10vw;
      outline: none;
      border: none;
      border: 1px solid #999;
      transition: .15s ease-in-out;
    }
    textarea{
      font-size: 17px;
      margin: 5px;
      padding: 10px;
      width: 30vw;
      height: 5vw;
      resize: none;
      outline: none;
      border: 1px solid grey;
    }
    button{
      display: inline-block;
      padding: 5px;
      margin-left: auto;
    }
  }
}
.comments-wrapper{
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .comments{
    margin: 20px 0;
    .comment{
      width: 45vw;
      padding: 10px 20px;
      border-bottom: .5px solid #bbb;
      display: flex;
      justify-content: center;
      .content{
        display: block;
        h3{
          color: #222;
        }
        textarea{
          resize: none;
          outline: none;
          width: 40vw;
          height: 5vw;
          font-size: 17px;
        }
      }
      .config{
        padding: 15px 20px;
        img{
          width: 15px;
          margin: 1px;
          height: 15px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>