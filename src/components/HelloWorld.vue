<template>
<div>
  <!--<ul id="demo">-->
    <!--<item-->
      <!--class="item"-->
      <!--:model="treeData">-->
    <!--</item>-->
  <!--</ul>-->
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
  // import item from './tree'
  export default  {
    name:"tree1",
    data() {
      return {
        treeData : {
          name: 'My Tree',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
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
