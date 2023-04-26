import axios from './serve.js'
class CollectionApi {
  baseurlstr = '/collection'
  baseurl(url) {
    return this.baseurlstr + url
  }
  getresourceMeunApi() {
    return axios({
      method: 'get',
      url: this.baseurl('/getresourceMeun'),
    })
  }
  getresourceApi(params) {
    return axios({
      method: 'get',
      url: this.baseurl('/getresource'),
      params
    })
  }
  getchildApi(id) {
    return axios({
      method: 'get',
      url: this.baseurl('/getchild'),
      params: { id }
    })
  }
}


export default new CollectionApi()
