import api from 'app/api/api'

export default class SitePhotosApi {
  static async get ({ siteId }) {
    const result = await api.get(`/sites/${siteId}/photos`)
    return result.data
  }
}
