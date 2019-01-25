import api from 'app/api/api'

export default class FashionApi {
  static async getBySiteId ({ siteId }) {
    const result = await api.get('fashions', {
      params: {
        site_id: siteId
      }
    })
    return result.data[0]
  }
}
