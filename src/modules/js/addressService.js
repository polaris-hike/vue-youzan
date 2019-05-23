import fetch from 'js/fetch.js'
import url from 'js/api.js'
import Axios from 'axios';

class Address {
  static list() {
    return fetch(url.addressLists)
  }

  static add(data) {
    return Axios.post(url.addressAdd,data)
  }

  static update(data) {
    return Axios.post(url.addressUpdate,data)
  }

  static remove(id) {
    return fetch(url.addressRemove,id)
  }

  static setDefault(id) {
    return fetch(url.addressSetDefault,id)
  }
}

export default Address