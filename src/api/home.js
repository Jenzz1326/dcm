import axios from './serve.js'
class HomeApi {
  baseurlstr = '/home'
  baseurl(url) {
    return this.baseurlstr + url
  }
  getrunningApi() {
    return axios({
      method: 'get',
      url: this.baseurl('/getrunning')
    })
  }
  getsecondBPApi() {
    return axios({
      method: 'get',
      url: this.baseurl('/getsecondBP')
    })
  }
}


export default new HomeApi()
