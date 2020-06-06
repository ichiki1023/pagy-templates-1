export default function validate({ site }) {
  if (!site) return false
  if (!site.name) return false
  if (!site.store_front_image_url) return false
  if (!site.interior_image_url) return false

  // addressのバリデーション
  if (!site.address && Object.keys(site.address).length !== 0) return false
  if (!site.address.postcode) return false
  if (!site.address.country) return false

  return true
}
