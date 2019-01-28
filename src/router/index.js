import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/list'
import ImgLoad from '@/components/img-load'
import Cropper from '@/components/cropper'
import ImgUpload from '@/components/imgupload'
import Tree from '@/views/tree'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path:'/img-load',
      name:'imgload',
      component:ImgLoad
    },
    {
      path:'/cropper',
      name:'cropper',
      component:Cropper
    },
    {
      path:'/imgupload',
      name:'imgupload',
      component:ImgUpload
    },
    {
      path:'/tree',
      name:'tree',
      component:Tree
    }
  ]
})
