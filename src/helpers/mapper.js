export default function mapper({ site, fashion }) {
  return {
    site: {
      id: site.id || undefined,
      name: site.name || '',
      catch_phrase: site.catch_phrase || undefined,
      description: site.description || '',
      release: typeof site.release === 'boolean' ? site.release : true,
      store_front_image_url: site.store_front_image_url || '',
      interior_image_url: site.interior_image_url || '',
      business_hour: {
        ...businessHourMapper(site.business_hour),
      },
      holiday: {
        ...holidayMapper(site.holiday),
      },
      twitter: site.twitter || undefined,
      instagram: site.instagram || undefined,
      facebook: site.facebook || undefined,
      pinterest: site.pinterest || undefined,
      contact_email: {
        email:
          site.contact_email && site.contact_email.email
            ? site.contact_email.email
            : undefined,
      },
      contact_phone: site.contact_phone || undefined,
      photos: Array.isArray(site.photos) ? site.photos : [],
      articles: Array.isArray(site.articles) ? site.articles : [],
      address: {
        ...addressMapper(site.address),
      },
      plan: {
        id: site.plan ? site.plan.id : null,
      },
    },
    fashion: {
      ...fashionMapper(fashion),
    },
  }
}

function businessHourMapper(businessHour) {
  if (!businessHour) {
    return null
  }
  return {
    mon_start: businessHour.mon_start,
    mon_end: businessHour.mon_end,
    tue_start: businessHour.tue_start,
    tue_end: businessHour.tue_end,
    wed_start: businessHour.wed_start,
    wed_end: businessHour.wed_end,
    thu_start: businessHour.thu_start,
    thu_end: businessHour.thu_end,
    fri_start: businessHour.fri_start,
    fri_end: businessHour.fri_end,
    sat_start: businessHour.sat_start,
    sat_end: businessHour.sat_end,
    sun_start: businessHour.sun_start,
    sun_end: businessHour.sun_end,
    hol_start: businessHour.hol_start,
    hol_end: businessHour.hol_end,
  }
}

function holidayMapper(holiday) {
  if (!holiday) {
    return null
  }
  return {
    mon: holiday.mon || false,
    tue: holiday.tue || false,
    wed: holiday.wed || false,
    thu: holiday.thu || false,
    fri: holiday.fri || false,
    sat: holiday.sat || false,
    sun: holiday.sun || false,
    holiday: holiday.holiday || false,
  }
}

function addressMapper(address) {
  return {
    postcode: address.postcode,
    latitude: address.latitude || undefined,
    longitude: address.longitude || undefined,
    country: address.country,
    station: address.station || undefined,
    address1: address.address1 || undefined,
    address2: address.address2 || undefined,
    address3: address.address3 || undefined,
    address4: address.address4 || undefined,
    address5: address.address5 || undefined,
  }
}

function fashionMapper(fashion) {
  if (!fashion) {
    return {
      id: null,
      items: [],
      coordinates: [],
    }
  }
  return {
    id: fashion.id,
    items: Array.isArray(fashion.items) ? fashion.items : [],
    coordinates: Array.isArray(fashion.coordinates) ? fashion.coordinates : [],
  }
}
