import api from 'app/api/api'

export default class SitesApi {
  static async getSiteWithDomain (domain) {
    const result = await api.get('sites', {
      params: {
        domain: domain
      }
    })
    if (result.data.length > 0) {
      return result.data[0]
    }
    // TODO: 404 Errorを返す
    throw new Error('Not Found')
  }
}
