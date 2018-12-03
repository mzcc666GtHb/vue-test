import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImgLoad from '@/components/img-load'
import Cropper from '@/components/cropper'
import ImgUpload from '@/components/imgupload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
