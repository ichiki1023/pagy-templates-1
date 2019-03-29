import api from 'app/api/api'

export default class SiteArticlesApi {
  static async get ({ siteId }) {
    const result = await api.get(`/sites/${siteId}/articles`)
    return result.data
  }
}
