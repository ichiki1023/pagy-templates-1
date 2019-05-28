import api from 'app/api/api'

export default class FashionCoordinatesApi {
  static async get ({ fashionId }) {
    const result = await api.get(`fashions/${fashionId}/coordinates`)
    return result.data
  }
}
