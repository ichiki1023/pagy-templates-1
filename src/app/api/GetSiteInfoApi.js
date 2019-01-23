import api from 'app/api/api'

export default class GetSiteInfoApi {
  static async get ({ domain }) {
    const result = await api.get('getSiteInfo', {
      params: {
        domain: domain
      }
    })
    const data = result.data
    data.coordinates = data['fashion_coordinates']
    data.items = data['fashion_items']
    delete data['fashion_coordinates']
    delete data['fashion_items']
    return data
  }
}
