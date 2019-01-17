export default {
  site: {
    name: 'Leimo SELECT SHOP',
    catch_phrase: 'お客様に一番伝えたいメッセージを記載してください。',
    description:
      'お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。 お店の基本情報を記載してください。お店の基本情報を記載してください。お店の基本情報を記載してください。',
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
    store_front_image_url: `${
      process.env.STATIC_HOST
    }/images/shutterstock_46325692.jpeg`,
    interior_image_url: `${
      process.env.STATIC_HOST
    }/images/shutterstock_773749615.jpeg`,
    twitter: 'ichiki_sato',
    instagram: 'ichiki1023',
    facebook: 'sato.ichiki',
    pinterest: 'itennis0210',
    contact_email: 'pagy@example.com',
    contact_phone: '03-1234-5678',
    address: {
      postcode: '100-6690',
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
    photos: [
      {
        url: `${process.env.STATIC_HOST}/images/shutterstock_479222686.jpeg`
      },
      {
        url: `${process.env.STATIC_HOST}/images/shutterstock_479221186.jpeg`
      }
    ],
    posts: [
      {
        id: 1,
        title: 'UR CLUB Members Limited Campaign　11月30日(金)正午～',
        description:
          'いつもUR ONLINE STOREをご愛顧いただき誠にありがとうございます。\nこの度アーバンリサーチ公式オンラインストア「UR ONLINE STORE」にて、\n冬のセールに先駆けてUR CLUB会員様限定の先行セールを開催いたします。\nぜひこの機会にお買い求めください。',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_1022031901_cut.jpeg`,
        sub_image_url: '',
        created_at: '2019/02/04',
        update_at: ''
      },
      {
        id: 2,
        title: 'atone翌月後払い(コンビニ)導入のお知らせ',
        description:
          '新たに「atone」で商品をご購入いただけるようになりました。\n\n「atone」とは、クレジットカードはいらない、スマホだけで翌月払いができる、新しい後払い決済サービスです。\n今月のご利用分を翌月20日までに、コンビニでまとめてお支払いいただけます。ポイントが貯まる・使える、お得な支払い方法です。',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_324688757_cut.jpeg`,
        sub_image_url: '',
        created_at: '2019/01/26',
        update_at: ''
      },
      {
        id: 3,
        title: '【d払い】魔法のスーパーチャンス!dポイント最大20倍のチャンス',
        description:
          'キャンペーン期間中にエントリーをして、d払いをご利用してお買い物していただくと通常の5倍dポイントを進呈致します。\nさらに、買い回り企画に応じて最大+15倍となります。\n※エントリーが必須となるキャンペーンとなります。\n\nキャンペーン期間:2018年11月23日(金) ～2019年1月6日(日) ',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_1022031901_cut.jpeg`,
        sub_image_url: '',
        created_at: '2019/01/18',
        update_at: ''
      },
      {
        id: 4,
        title:
          'オンラインストア　ポイントアップキャンペーン　11月30日(金)午前9時59分まで',
        description:
          'URBAN RESEARCH ONLINE STOREにて「ポイントアップキャンペーン」を2018年11月22日(木) 正午〜11月30日(金)午前9時59分の期間開催します。\n期間中にお買い物いただいたお客様には、会員ステージ・お買い物金額(税抜)に応じてUR CLUBポイントをプラス10%プレゼントいたします。\n皆様のご来店を心よりお待ちしております。\n▼特典内容\nMEMBERS会員様は、11%ポイント還元\nPLUS会員様は、13%ポイント還元\nPREMIER会員様は、15%ポイント還元\nVIP会員様は、20%ポイント還元\n',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/12',
        update_at: ''
      },
      {
        id: 5,
        title:
          '今月のおすすめ情報やセールなどお店に関する情報を記載してください。今月のおすすめ情報',
        description: '',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/10',
        update_at: ''
      },
      {
        id: 6,
        title:
          '今月のおすすめ情報やセールなどお店に関する情報を記載してください。今月のおすすめ情報',
        description: '',
        main_image_url: '',
        sub_image_url: '',
        created_at: '2019/01/03',
        update_at: ''
      }
    ],
    items: [
      {
        title: 'New Item1',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_207690136_1.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [
          'https://example.com/example1.jpeg',
          'https://example.com/example2.jpeg',
          'https://example.com/example3.jpeg',
          'https://example.com/example4.jpeg',
          'https://example.com/example5.jpeg'
        ],
        coordinates: ['1', '2']
      },
      {
        title: 'New Item2',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_207690136_2.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [
          'https://example.com/example1.jpeg',
          'https://example.com/example2.jpeg',
          'https://example.com/example3.jpeg',
          'https://example.com/example4.jpeg',
          'https://example.com/example5.jpeg'
        ],
        coordinates: ['1', '2']
      },
      {
        title: 'New Item3',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_207690136_3.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [
          'https://example.com/example1.jpeg',
          'https://example.com/example2.jpeg',
          'https://example.com/example3.jpeg',
          'https://example.com/example4.jpeg',
          'https://example.com/example5.jpeg'
        ],
        coordinates: ['1', '2']
      },
      {
        title: 'New Item4',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_207690136_4.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [
          'https://example.com/example1.jpeg',
          'https://example.com/example2.jpeg',
          'https://example.com/example3.jpeg',
          'https://example.com/example4.jpeg',
          'https://example.com/example5.jpeg'
        ],
        coordinates: ['1', '2']
      },
      {
        title: 'New Item5',
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_207690136_2.jpg`,
        description:
          'セレクトしたアイテムの紹介やおすすめのポイントなどを記載してください',
        sub_image_urls: [
          'https://example.com/example1.jpeg',
          'https://example.com/example2.jpeg',
          'https://example.com/example3.jpeg',
          'https://example.com/example4.jpeg',
          'https://example.com/example5.jpeg'
        ],
        coordinates: ['1', '2']
      }
    ],
    coordinates: [
      {
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_730631257.jpeg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [
          `${process.env.STATIC_HOST}/images/shutterstock_1022031916_cut.jpg`,
          `${process.env.STATIC_HOST}/images/shutterstock_9076668_cut.jpeg`,
          `${process.env.STATIC_HOST}/images/shutterstock_1022031889_cut.jpg`
        ],
        item: ['1', '2']
      },
      {
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_342317609.jpeg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [
          `${process.env.STATIC_HOST}/images/shutterstock_535600783_cut.jpg`,
          `${process.env.STATIC_HOST}/images/shutterstock_66613034_cut.jpeg`,
          `${process.env.STATIC_HOST}/images/shutterstock_723637684_cut.jpeg`
        ],
        item: ['1', '2']
      },
      {
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_793633075.jpeg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [
          `${process.env.STATIC_HOST}/images/shutterstock_1022031916_cut.jpg`,
          `${process.env.STATIC_HOST}/images/shutterstock_9076668_cut.jpeg`,
          `${process.env.STATIC_HOST}/images/shutterstock_1022031889_cut.jpg`
        ],
        item: ['1', '2']
      },
      {
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_713504557.jpeg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [
          `${process.env.STATIC_HOST}/images/shutterstock_535600783_cut.jpg`,
          `${process.env.STATIC_HOST}/images/shutterstock_66613034_cut.jpeg`,
          `${process.env.STATIC_HOST}/images/shutterstock_723637684_cut.jpeg`
        ],
        item: ['1', '2']
      },
      {
        main_image_url: `${
          process.env.STATIC_HOST
        }/images/shutterstock_1182188362.jpeg`,
        description:
          'コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。コーディネイトの詳細を記載してください。',
        sub_image_urls: [
          `${process.env.STATIC_HOST}/images/shutterstock_535600783_cut.jpg`,
          `${process.env.STATIC_HOST}/images/shutterstock_66613034_cut.jpeg`,
          `${process.env.STATIC_HOST}/images/shutterstock_723637684_cut.jpeg`
        ],
        item: ['1', '2']
      }
    ]
  }
}
