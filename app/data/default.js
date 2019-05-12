const staticPath = `${process.env.PROXY_PATH}/static`

export default {
  site: {
    name: 'Leimo SELECT SHOP Leimo SELECT SHOP',
    catch_phrase: 'お客様に一番伝えたいメッセージを記載してください。',
    description:
      'お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。 お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。',
    release: true,
    business_hour: {
      mon_start: '1000',
      mon_end: '1900',
      tue_start: '1000',
      tue_end: '1900',
      wed_start: '1000',
      wed_end: '1900',
      thu_start: '1000',
      thu_end: '1900',
      fri_start: '1000',
      fri_end: '1900',
      sat_start: '1000',
      sat_end: '1900',
      sun_start: null,
      sun_end: null,
      hol_start: null,
      hol_end: null
    },
    holiday: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: true,
      holiday: true
    },
    store_front_image_url: `${staticPath}/images/store/shutterstock_46325692.jpg`,
    interior_image_url: `${staticPath}/images/store/shutterstock_773749615.jpg`,
    twitter: 'ichiki_sato',
    instagram: 'ichiki1023',
    facebook: 'sato.ichiki',
    pinterest: 'itennis0210',
    contact_email: {
      id: 1,
      email: 'pagy@example.com'
    },
    contact_phone: '03-1234-5678',
    address: {
      postcode: '1006690',
      latitude: '35.681167',
      longitude: '139.767052',
      country: 'Japan',
      station: '東京駅',
      address1: '千葉県浦安市入船 4-5-9 シエラフォートA',
      address2: '',
      address3: '',
      address4: '',
      address5: ''
    },
    plan: {
      id: null
    },
    photos: [
      {
        url: `${staticPath}/images/store/shutterstock_479222686.jpg`
      },
      {
        url: `${staticPath}/images/store/shutterstock_479221186.jpg`
      }
    ],
    articles: [
      {
        id: 1,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/02/04',
        update_at: ''
      },
      {
        id: 2,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/26',
        update_at: ''
      },
      {
        id: 3,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/18',
        update_at: ''
      },
      {
        id: 4,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/12',
        update_at: ''
      },
      {
        id: 5,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/10',
        update_at: ''
      },
      {
        id: 6,
        title:
          'ここにお知らせのタイトルが入ります。ここにお知らせのタイトルが入ります。',
        description:
          'ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。ここにお知らせの詳細が入ります。',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/03',
        update_at: ''
      }
    ]
  },
  fashion: {
    items: [
      {
        title: 'アイテム 1',
        main_image_url: `${staticPath}/images/items/shutterstock_207690136_15.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [],
        coordinates: []
      },
      {
        title: 'アイテム 2',
        main_image_url: `${staticPath}/images/items/shutterstock_207690136_03.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [],
        coordinates: []
      },
      {
        title: 'アイテム 3',
        main_image_url: `${staticPath}/images/items/shutterstock_207690136_06.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [],
        coordinates: []
      },
      {
        title: 'アイテム 4',
        main_image_url: `${staticPath}/images/items/shutterstock_207690136_10.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [],
        coordinates: []
      },
      {
        title: 'アイテム 5',
        main_image_url: `${staticPath}/images/items/shutterstock_9076668.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [],
        coordinates: []
      }
    ],
    coordinates: [
      {
        main_image_url: `${staticPath}/images/coordinates/shutterstock_730631257.jpg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [],
        items: []
      },
      {
        main_image_url: `${staticPath}/images/coordinates/shutterstock_342317609.jpg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [],
        items: []
      },
      {
        main_image_url: `${staticPath}/images/coordinates/shutterstock_793633075.jpg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [],
        items: []
      },
      {
        main_image_url: `${staticPath}/images/coordinates/shutterstock_713504557.jpg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [],
        items: []
      },
      {
        main_image_url: `${staticPath}/images/coordinates/shutterstock_1182188362.jpg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [],
        items: []
      }
    ]
  }
}
