import api from 'app/api/api'

export default class SendContactMessageApi {
  static async post ({ siteId, name, email, content }) {
    const result = await api.post(`sendContactMessage`, {
      site_id: siteId,
      name,
      email,
      content
    })
    return result.data
  }
}
