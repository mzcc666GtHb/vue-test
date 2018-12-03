<template>
  <div id="myPhoto" v-show="personalPhoto">
    <div class="viewPhoto">
      <img src="" alt="" id="portrait"style="width: 300px;height: 300px" />
    </div>
    <div class="listBox">
      <dl>
        <dt>请上传图片</dt>
        <dd>
          <input type="file"id="saveImage" name="myphoto" >
        </dd>
      </dl>
    </div>
    <div class="save">
      <input type="button"  value="保存图片" @click="imageSubmit">
    </div>
  </div>

</template>

<script>
    export default {
        name: "img-load",
      data(){
        return{
          personalPhoto:true
        }
      },
        methods:{
          //实时显示该图片在页面
          great(){
            document.getElementById('saveImage').onchange = function () {
              var imgFile = this.files[0];
              var fr = new FileReader();
              fr.onload = function () {
                document.getElementById('portrait').src = fr.result;
              };
              fr.readAsDataURL(imgFile);
            }
          },
          imageSubmit(){
            let x = document.getElementById('saveImage').files[0];
            console.log(x);
            let params = new FormData() ; //创建一个form对象
            params.append('file',x,x.name);  //append 向form表单添加数据
            //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
            console.log(params)
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            };
            this.$axios.post("/user/image",params,config)
              .then(function(res){
                console.log(res);
                this.imageSave = res.data.image;
                sessionStorage.setItem('headImg',this.imageSave); //将图片保存，并能够在其他地方加载显示
                router.go(0);   //刷新页面，头像改变
              }.bind(this))
              .catch(function (error) {
                console.log(error);
              })
          }
        },
        mounted(){
          this.great()
        }
    }
</script>

<style scoped>

</style>
