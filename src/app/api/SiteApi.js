import api from 'app/api/api'

export default class SiteApi {
  static async getByDomain ({ domain }) {
    const result = await api.get('sites', {
      params: {
        domain: domain
      }
    })
    return result.data[0]
  }
}
