import api from 'app/api/api'

export default class SitePostsApi {
  static async get ({ siteId }) {
    const result = await api.get(`/sites/${siteId}/posts`)
    return result.data
  }
}
