<template>
  <div>
    <div class="all-div" v-if="model.name">
      <div class="itemRow" :style="{ marginLeft:model.level*20+'px' }">
        <span v-show="model.children.length" @click="expandOrCollapse">
          <span v-if="model.isOpen" >收起</span>
          <span v-else>展开</span>
        </span>
        <div class="hover-div" @mouseover="flag=true" @mouseout="flag=false">
          <span @click="jump(model.url)">{{model.name}}</span>
          <span v-show="flag==true" @click="add">添加</span>
          <span v-show="flag==true" @click="remove(model)">移除</span>
          <span v-show="flag==true" @click="edit">编辑</span>
          <!--<span class="asce" v-show="model.children.length" @click="orderAsce">↑</span>
        <span class="desc" v-show="model.children.length" @click="orderDesc">↓</span>-->
        </div>

      </div>
    </div>
    <navigation v-if="model.isOpen" v-for="row in model.children" :key="row.name" :model="row" :length="model.children.length"></navigation>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    // 使用`编辑树`组件需要传递的数据
    props: {
      // 编辑树对象
      model: {
        type: Object
      },

      length: {
        type: Number
      }
    },

    data () {
      return {
        flag:false

      }
    },

    methods: {
      // 添加节点
      add(){
        let val = prompt("请输入要添加的节点的名称：");
        if (val) {
          this.model.children.push({
            name: val,
            level: this.model.level + 1,
            isOpen: true,
            children: []
          });
        }

      },

      // 移除节点
      remove(model){
        var self = this;
        alert('确认删除吗?');
        if (self.$parent.model) {
          self.$parent.model.children.forEach((item, index) => {
            if (item.name == model.name) {
              self.$parent.model.children.splice(index, 1);
            }
          })
        }
      },

      // 编辑节点名称
      edit(){
        var self = this;
        let rename = prompt('请输入修改后的节点名称：');
        // 使用正则进行重命名的差错校验
        if (!rename.length) {
          alert('请输入正确的节点名称');
          return;
        }
        self.model.name = rename;
      },

      /**
       * 展开/收起功能
       */
      expandOrCollapse(){
        this.model.isOpen = !this.model.isOpen;
      },
      jump(url){
        var self = this;
        self.$router.push({path:url})
      }

      /*// 升序排列
       orderAsce(){
       function compare(property) {
       return function (a, b) {
       var value1 = a[property];
       var value2 = b[property];
       return value1 - value2;
       }
       }
       this.model.children.sort(compare('name'));
       },

       // 降序排列
       orderDesc(){
       this.orderAsce();
       this.model.children.reverse();
       }*/
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .all-div{
    margin-left: 6%;

  }
  .itemRow {
    text-align: left;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .itemRow span,.itemRow img{
    cursor: pointer;
  }
  .itemRow span{
    font-size: 1.1vw;
  }
  .hover-div{
    display:inline-block;
  }


</style>
