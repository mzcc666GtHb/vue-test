<template>
<div>
  <div id="all">
    <tree :model="root" :length="length"></tree>
  </div>
  <router-link to="/img-load">图片上传代码</router-link>
  <br>
  <router-link to="/cropper">裁剪并上传头像1</router-link>
  <br>
  <router-link to="/imgupload">裁剪并上传头像2</router-link>



  <div class="box" id="box" @click="uploadImgs">
    <input type="file" ref="fileBtn">
    上传图片
  </div>
</div>


</template>
<script>
  import tree from './tree.vue'
  export default  {
    name:"tree1",
    components:{
      tree
    },
    data() {
      return {
        root:{
          name:"根节点",
          level:0,
          isOpen:true,
          children:[
            {
              name:"节点1",
              level:1,
              url:"/homePage/middle/navLeftFirst",
              isOpen:false,
              children:[
                {
                  name:"节点1-1",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"节点1-2",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
            },
            {
              name:"节点2",
              level:1,
              url:"/homePage/middle/navLeftSecond",
              isOpen:false,
              children:[
                {
                  name:"节点2-1",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"节点2-2",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]

            }
          ]
        },
        length:2
    }
    },
    methods:{
      uploadImgs(){
        this.$refs.fileBtn.click()
      }
    }

  }
</script>
<style>
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
  input[type=file]{
    display: none;
  }
</style>
