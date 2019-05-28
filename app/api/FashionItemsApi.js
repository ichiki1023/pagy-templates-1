import api from 'app/api/api'

export default class FashionItemsApi {
  static async get ({ fashionId }) {
    const result = await api.get(`fashions/${fashionId}/items`)
    return result.data
  }
}
