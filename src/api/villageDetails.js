import axios from './serve.js'
class VillageDetailsApi {
  baseurlstr = '/villageDetails'
  baseurl(url) { 
    return this.baseurlstr + url
  }
  getmenuApi() {
    return axios({
      method: 'get',
      url: this.baseurl('/meun'),
    })
  }
  getrusticinfoApi(id, type) {
    return axios({
      method: 'get',
      url: this.baseurl('/rusticinfo'),
      params: {
        id,
        type
      }
    })
  }
}


export default new VillageDetailsApi()
