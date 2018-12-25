export default function mapper (site) {
  return {
    site: {
      name: site.name || '',
      catch_phrase: site.catchPhrase || undefined,
      description: site.description || '',
      store_front_image_url: site.storeFrontImageUrl || '',
      interior_image_url: site.interiorImageUrl || '',
      business_hour: {
        mon_start: site.businessHour.monStart,
        mon_end: site.businessHour.monEnd,
        tue_start: site.businessHour.tueStart,
        tue_end: site.businessHour.tueEnd,
        wed_start: site.businessHour.wedStart,
        wed_end: site.businessHour.wedEnd,
        thu_start: site.businessHour.thuStart,
        thu_end: site.businessHour.thuEnd,
        fri_start: site.businessHour.friStart,
        fri_end: site.businessHour.friEnd,
        sat_start: site.businessHour.satStart,
        sat_end: site.businessHour.satEnd,
        sun_start: site.businessHour.sunStart,
        sun_end: site.businessHour.sunEnd,
        hol_start: site.businessHour.holStart,
        hol_end: site.businessHour.holEnd
      },
      holiday: site.holiday,
      twitter: site.twitter || undefined,
      instagram: site.instagram || undefined,
      facebook: site.facebook || undefined,
      pinterest: site.pinterest || undefined,
      contact_email: site.contactEmail || undefined,
      contact_phone: site.contactPhone || undefined,
      photos: site.photos || undefined,
      posts: site.posts || undefined,
      items: site.items || undefined,
      coordinates: site.coordinates || undefined,
      address: {
        postcode: site.address.postcode || undefined,
        latitude: site.address.latitude || undefined,
        longitude: site.address.longitude || undefined,
        country: site.address.country || 'Japan',
        station: site.address.station || undefined,
        address1: site.address.address1 || undefined,
        address2: site.address.address2 || undefined,
        address3: site.address.address3 || undefined,
        address4: site.address.address4 || undefined,
        address5: site.address.address5 || undefined
      }
    }
  }
}
