import axios from './serve.js'
class vizenVillageGzApi {
  baseurlstr = '/vizenVillageGz'
  baseurl(url) { 
    return this.baseurlstr + url
  }
  getresourceApi(type) {
    return axios({
      method: 'get',
      url: this.baseurl('/getresource'),
      params:{
        type
      }
    })
  }
  getmenuApi() {
    return axios({
      method: 'get',
      url: this.baseurl('/getmenu'),
    })
  }

  
}


export default new vizenVillageGzApi()
