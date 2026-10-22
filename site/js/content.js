const CONTENT = {
  zh: {
    langLabel: "中文",
    menuLabel: "選單",
    brand: "貴賓指引",
    brandEn: "AOV 10TH",
    nav: [
      { href: "#home", id: "home", label: "首頁" },
      { href: "#garena", id: "garena", label: "Garena 長官貴賓" },
      { href: "#guests", id: "guests", label: "其他貴賓 / 合作夥伴" },
      { href: "#lineup", id: "lineup", label: "演出陣容" },
      { href: "#transport", id: "transport", label: "交通資訊" },
    ],
    close: "關閉",
    zoom: "點圖片可放大",
    gate5: [
      { src: "images/gate5-floor.png", alt: "台北大巨蛋 B2 平面圖，標示 Gate 5" },
      { src: "images/gate5-entrance.png", alt: "Gate 5 入口，右側為 VIP 通道" },
    ],
    home: {
      kicker: "傳說對決十週年系列活動",
      title: "貴賓指南",
      cards: [
        {
          href: "#garena",
          kicker: "VIP",
          title: "Garena 長官貴賓",
          text: "點擊查看更多指引資訊",
        },
        {
          href: "#guests",
          kicker: "Guest",
          title: "其他貴賓 / 合作夥伴",
          text: "點擊查看更多指引資訊",
        },
      ],
      dayTitle: "推薦行程",
      optional: "Optional",
      placeLabel: "地點",
      itinerary: [
        { date: "10/30", time: "18:30–22:00", title: "101 光雕秀", place: "捷運台北 101 / 世貿站 2 號出口", note: "開車可導航至國雲停車－世貿 D1 停車場" },
        { date: "10/31", time: "19:00–21:50", title: "傳說對決十週年演唱會", place: "台北大巨蛋" },
        { date: "10/24–10/31", time: "10:00–18:00", title: "傳說對決十週年特展", place: "松山文創園區 2F 多功能展演廳", optional: true },
        { date: "10/31", time: "10:30–15:30", title: "傳說對決 GCS 夏季總決賽", place: "台北大巨蛋", optional: true },
      ],
      links: [
        { href: "#transport", title: "交通資訊", text: "點擊以查看更多資訊" },
        { href: "#lineup", title: "演出陣容", text: "點擊以查看演出藝人資訊" },
      ],
    },
    transport: {
      kicker: "活動地點",
      title: "交通資訊",
      lede: "",
      howTitle: "如何前往",
      map: "開啟地圖",
      places: [
        {
          name: "傳說對決十週年演唱會、GCS 夏季總決賽",
          address: "台北大巨蛋（台北市信義區忠孝東路四段 515 號）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E5%A4%A7%E5%B7%A8%E8%9B%8B",
          ways: [
            { title: "計程車", text: "地址：台北市信義區忠孝東路四段 515 號" },
            {
              title: "捷運",
              steps: [
                "搭乘板南線（藍線）至「國父紀念館站」",
                "由 5 號出口出站",
                "出站後沿著指標，經由地下通廊或忠孝東路四段直達園區",
              ],
            },
          ],
        },
        {
          name: "101 光雕秀",
          address: "捷運台北 101 / 世貿站 2 號出口",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97101%E4%B8%96%E8%B2%BF%E7%AB%992%E8%99%9F%E5%87%BA%E5%8F%A3",
          ways: [
            {
              title: "捷運",
              steps: [
                "搭乘淡水信義線（紅線）至「台北 101 / 世貿站」",
                "由 2 號出口出站",
              ],
            },
            { title: "開車", text: "導航至國雲停車－世貿 D1 停車場" },
          ],
        },
        {
          name: "傳說對決十週年特展",
          address: "松山文創園區 2F 多功能展演廳（台北市信義區光復南路 133 號）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%85%89%E5%BE%A9%E5%8D%97%E8%B7%AF133%E8%99%9F",
          ways: [
            { title: "計程車", text: "地址：台北市信義區光復南路 133 號" },
            {
              title: "捷運",
              items: [
                "板南線至國父紀念館站，由 5 號出口出站，沿光復南路步行至松菸大道右轉進入園區",
                "或搭板南線至市政府站，由 1 號出口出站，沿忠孝東路步行至忠孝東路四段 553 巷右轉",
              ],
            },
          ],
        },
      ],
    },
    garena: {
      kicker: "入場指南",
      title: "Garena 長官貴賓",
      intro: "",
      events: [
        {
          title: "101 光雕秀",
          summary: [
            { kind: "text", k: "活動時間", v: "2026/10/30（五）18:30–22:00" },
            {
              kind: "ext",
              k: "觀賞地點",
              items: [
                [
                  { text: "捷運淡水信義線台北 101 / 世貿站 2 號出口（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97101%E4%B8%96%E8%B2%BF%E7%AB%992%E8%99%9F%E5%87%BA%E5%8F%A3" },
                  { text: "）" },
                ],
                [
                  { text: "開車可導航：國雲停車－世貿 D1 停車場（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E9%9B%B2%E5%81%9C%E8%BB%8A+%E4%B8%96%E8%B2%BFD1%E5%81%9C%E8%BB%8A%E5%A0%B4" },
                  { text: "）" },
                ],
              ],
            },
            { kind: "text", k: "", small: true, v: [
              { text: "Earvin 會於當天 18:00 帶 Country Heads 前往捷運 2 號出口，先觀賞光雕秀，再前往「" },
              { text: "捌伍添第", href: "https://www.google.com/maps/search/?api=1&query=%E6%8D%8C%E4%BC%8D%E6%B7%BB%E7%AC%AC" },
              { text: "」用餐，如有用餐或訂位需求，請洽詢 Henry（chenhe@garena.com）或 Grace（chengg@garena.com）" },
            ] },
            {
              kind: "media",
              items: [
                {
                  label: "光雕秀畫面預告",
                  images: [
                    { src: "images/light-train.png", alt: "光雕秀畫面：阿里山小火車" },
                    { src: "images/light-nakroth.png", alt: "光雕秀畫面：納克羅斯酷跑街頭" },
                  ],
                },
                {
                  label: "光雕秀觀賞地點平面圖",
                  images: [{ src: "images/light-map.png", alt: "光雕秀觀賞地點平面圖" }],
                },
              ],
            },
          ],
        },
        {
          title: "AOV 十週年演唱會",
          summary: [
            {
              kind: "list",
              k: "活動時間",
              items: ["2026/10/31（六）19:00", "18:00 建議開始入場，預計 21:50 散場"],
            },
            {
              kind: "place",
              k: "活動地點",
              v: "台北大巨蛋",
              link: "點擊查看交通資訊",
              page: "transport",
            },
            {
              kind: "list",
              k: "入場方式",
              items: [
                [
                  { text: "於 " },
                  { text: "Gate 10", image: { src: "images/concert-gate.png", alt: "演唱會入口平面圖與 Gate 10" } },
                  { text: " 向工作人員提供姓名領取 " },
                  { text: "VIP 證", image: { src: "images/vip-pass.jpg", alt: "VIP 證" } },
                  { text: "，領取後憑 VIP 證入場，現場工作人員將引導至指定包廂" },
                ],
                "活動期間進出場館皆須出示 VIP 證，請記得隨身攜帶",
              ],
            },
            {
              kind: "list",
              k: "座位區",
              items: [
                "L3 包廂：G01、G11、G18，可洽詢 Henry（chenhe@garena.com）您所屬的包廂",
                "包廂內皆提供餐食小點",
              ],
            },
            {
              kind: "text",
              k: "",
              v: [
                {
                  text: "平面圖、包廂照片",
                  images: [
                    { src: "images/suite-floor.png", alt: "L3 包廂樓層平面圖" },
                    { src: "images/suite.png", alt: "大包廂內部" },
                    { src: "images/suite-seats.jpg", alt: "包廂外座位" },
                  ],
                },
                { text: "、" },
                { text: "包廂內部及觀賞視野影片", href: "https://www.youtube.com/watch?v=tRg4CroqMoA" },
              ],
            },
          ],
        },
        {
          title: "AOV GCS 2026 夏季總決賽",
          summary: [
            {
              kind: "list",
              k: "活動時間",
              items: [
                "2026/10/31（六）10:30",
                "9:30 開放入場，最晚結束時間為 15:30",
                "12:00 中場藝人演出：玖壹壹",
              ],
            },
            {
              kind: "place",
              k: "活動地點",
              v: "台北大巨蛋",
              link: "點擊查看交通資訊",
              page: "transport",
            },
            {
              kind: "list",
              k: "入場方式",
              items: [
                [
                  { text: "於 B2 層 Gate 5 最右側 VIP 通道，向工作人員提供姓名領取 " },
                  { text: "VIP 證", image: { src: "images/vip-pass.jpg", alt: "VIP 證" } },
                  { text: "，現場人員會協助引導至您的座位區" },
                ],
                "活動期間進出場館皆須出示 VIP 證，請記得隨身攜帶",
              ],
            },
            {
              kind: "seat",
              k: "座位區",
              before: "A4 區第 3–5 排，共保留 27 個位置（",
              link: "點擊查看平面圖",
              after: "），無指定座位，可自由入座",
              places: ["3 排 22–30 號", "4 排 22–30 號", "5 排 22–30 號"],
              image: {
                src: "images/match-seating.jpg",
                alt: "夏季總決賽座位圖，A4 區在舞台正前方",
              },
            },
          ],
        },
        {
          title: "十週年特展",
          summary: [
            { kind: "text", k: "展覽期間", v: "2026/10/24–10/31，10:00–18:00" },
            {
              kind: "ext",
              k: "展覽地點",
              items: [
                [
                  { text: "松山文創園區 2F 多功能展演廳（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E6%9D%BE%E5%B1%B1%E6%96%87%E5%89%B5%E5%9C%92%E5%8D%80" },
                  { text: "）" },
                ],
              ],
            },
            {
              kind: "list",
              k: "活動內容",
              items: [
                "常駐活動",
                "10/24｜永恆榮耀頒獎典禮",
                [
                  { text: "10/25｜" },
                  { text: "艾薇", href: "https://open.spotify.com/artist/0RaC2hXyniYsju0mCSNz90/" },
                  { text: "特別合作演出" },
                ],
                "10/26｜配音員見面會（陳曉月、沈諠婈、穆宣名）",
                "10/31｜GCS 夏季總決賽觀賽派對",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "十週年特展展場地圖",
                  images: [
                    { src: "images/expo-map.jpg", alt: "十週年特展展場地圖" },
                    { src: "images/expo-flow.png", alt: "特展場館動線規劃平面圖" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    guests: {
      kicker: "入場指南",
      title: "其他貴賓 / 合作夥伴",
      intro: "",
      events: [
        {
          title: "AOV 十週年演唱會",
          summary: [
            {
              kind: "list",
              k: "活動時間",
              items: ["2026/10/31（六）19:00", "18:00 建議開始入場，預計 21:50 散場"],
            },
            {
              kind: "place",
              k: "活動地點",
              v: "台北大巨蛋",
              link: "點擊查看交通資訊",
              page: "transport",
            },
            {
              kind: "list",
              k: "入場方式",
              items: [
                [
                  { text: "於 " },
                  { text: "Gate 10", image: { src: "images/concert-gate.png", alt: "演唱會入口平面圖與 Gate 10" } },
                  { text: " 向工作人員報名字取票，憑票入場，工作人員會協助引導至座位區" },
                ],
              ],
            },
            {
              kind: "list",
              k: "座位區",
              items: [
                "L3 看台區，具體座位請根據門票資訊入座",
                "L3 樓層設有 Lounge 區，提供餐食小點",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "十週年演唱會座位圖",
                  images: [{ src: "images/concert-seating.jpg", alt: "十週年演唱會座位圖" }],
                },
              ],
            },
          ],
        },
        {
          title: "AOV GCS 2026 夏季總決賽",
          summary: [
            {
              kind: "list",
              k: "活動時間",
              items: [
                "2026/10/31（六）10:30",
                "9:30 開放入場，最晚結束時間為 15:30",
                "12:00 中場藝人演出：玖壹壹",
              ],
            },
            {
              kind: "place",
              k: "活動地點",
              v: "台北大巨蛋",
              link: "點擊查看交通資訊",
              page: "transport",
            },
            {
              kind: "list",
              k: "入場方式",
              items: [
                "於 Gate 5 向工作人員報名字取票，憑票入場，工作人員會協助引導至座位區",
              ],
            },
            {
              kind: "seat",
              k: "座位區",
              before: "A4 區第 3–5 排（",
              link: "點擊查看平面圖",
              after: "），無指定座位，可自由入座",
              places: ["3 排 22–30 號", "4 排 22–30 號", "5 排 22–30 號"],
              image: {
                src: "images/match-seating.jpg",
                alt: "夏季總決賽座位圖，A4 區在舞台正前方",
              },
            },
          ],
        },
        {
          title: "十週年特展",
          summary: [
            { kind: "text", k: "展覽期間", v: "2026/10/24–10/31，10:00–18:00" },
            {
              kind: "ext",
              k: "展覽地點",
              items: [
                [
                  { text: "松山文創園區 2F 多功能展演廳（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E6%9D%BE%E5%B1%B1%E6%96%87%E5%89%B5%E5%9C%92%E5%8D%80" },
                  { text: "）" },
                ],
              ],
            },
            {
              kind: "list",
              k: "活動內容",
              items: [
                "常駐活動",
                "10/24｜永恆榮耀頒獎典禮",
                [
                  { text: "10/25｜" },
                  { text: "艾薇", href: "https://open.spotify.com/artist/0RaC2hXyniYsju0mCSNz90/" },
                  { text: "特別合作演出" },
                ],
                "10/26｜配音員見面會（陳曉月、沈諠婈、穆宣名）",
                "10/31｜GCS 夏季總決賽觀賽派對",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "十週年特展展場地圖",
                  images: [
                    { src: "images/expo-map.jpg", alt: "十週年特展展場地圖" },
                    { src: "images/expo-flow.png", alt: "特展場館動線規劃平面圖" },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "101 光雕秀",
          summary: [
            { kind: "text", k: "活動時間", v: "2026/10/30（五）18:30–22:00" },
            {
              kind: "ext",
              k: "觀賞地點",
              items: [
                [
                  { text: "捷運淡水信義線台北 101 / 世貿站 2 號出口（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97101%E4%B8%96%E8%B2%BF%E7%AB%992%E8%99%9F%E5%87%BA%E5%8F%A3" },
                  { text: "）" },
                ],
                [
                  { text: "開車可導航：國雲停車－世貿 D1 停車場（" },
                  { text: "地圖", href: "https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E9%9B%B2%E5%81%9C%E8%BB%8A+%E4%B8%96%E8%B2%BFD1%E5%81%9C%E8%BB%8A%E5%A0%B4" },
                  { text: "）" },
                ],
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "光雕秀畫面預告",
                  images: [
                    { src: "images/light-train.png", alt: "光雕秀畫面：阿里山小火車" },
                    { src: "images/light-nakroth.png", alt: "光雕秀畫面：納克羅斯酷跑街頭" },
                  ],
                },
                {
                  label: "光雕秀觀賞地點平面圖",
                  images: [{ src: "images/light-map.png", alt: "光雕秀觀賞地點平面圖" }],
                },
              ],
            },
          ],
        },
      ],
    },
    lineup: {
      kicker: "Artists",
      title: "演出陣容",
      lede: "",
      finalsTitle: "AOV GCS 2026 夏季總決賽",
      concertTitle: "AOV 十週年演唱會",
      hosts: "主持人",
      performers: "演出",
      artists: [
        {
          group: "finals",
          name: "玖壹壹",
          en: "Nine One One",
          role: "賽事中場演出",
          bio: [
            [
              { text: "台灣人氣嘻哈團體，GCS 2026 夏季賽大使，由春風、洋蔥、健志組成，擅長融合台語、嘻哈與 EDM，以接地氣的歌詞與幽默風格廣受歡迎，同時也是冠軍候選 ANK 戰隊的擁有者" },
            ],
            [
              { text: "2026 年推出 GCS 夏季賽主題曲〈" },
              { text: "逆風", href: "https://www.youtube.com/results?search_query=%E7%8E%96%E5%A3%B9%E5%A3%B9+%E9%80%86%E9%A2%A8+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA+GCS+2026" },
              { text: "〉，以熱血、逆境奮戰為核心，呼應「頂天立地 GOAT」賽季精神，並參與製作 2022 新年主題曲〈" },
              { text: "戰場傳說", href: "https://www.youtube.com/results?search_query=%E7%8E%96%E5%A3%B9%E5%A3%B9+%E6%88%B0%E5%A0%B4%E5%82%B3%E8%AA%AA+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
              { text: "〉，為傳說對決首支台語主題曲" },
            ],
          ],
          photo: "images/nineoneone.jpg",
          links: [
            { href: "https://open.spotify.com/artist/3w8fdvgPp2aKgy125EBgVg", label: "Spotify" },
            { href: "https://www.youtube.com/@TWnineoneone911", label: "YouTube" },
          ],
        },
        {
          group: "hosts",
          name: "葉舒華",
          en: "Shuhua",
          role: "主持人",
          bio: "韓國人氣女團 i-dle 成員，代表作〈Queencard〉、〈TOMBOY〉，作為 i-dle 高人氣台灣成員，以鮮明的個人魅力與綜藝表現受到關注",
          photo: "images/shuhua.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx", label: "Spotify" },
          ],
        },
        {
          group: "hosts",
          name: "黃偉晉",
          en: "Wayne Huang",
          role: "主持人",
          bio: [
            { text: "曾任男子團體 SpeXial 成員，現為綜藝《娛樂百分百》主持人，2021 年以五堅情成員身分參與傳說對決五週年主題曲〈" },
            { text: "Ride On", href: "https://www.youtube.com/watch?v=5So2np8cu0M" },
            { text: "〉" },
          ],
          photo: "images/wayne.jpg",
          links: [
            { href: "https://www.youtube.com/channel/UCQj6W_rgqKQhSs97NdZoWMA", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "婁峻碩",
          en: "Shou",
          role: "演出藝人",
          bio: [
            { text: "台灣人氣饒舌歌手，2021 年以五堅情成員身分參與傳說對決五週年主題曲〈" },
            { text: "Ride On", href: "https://www.youtube.com/watch?v=5So2np8cu0M" },
            { text: "〉" },
          ],
          photo: "images/lou.jpg",
          links: [
            { href: "https://open.spotify.com/artist/40sntfyZsRwGfDgSJnxYuX", label: "Spotify" },
            { href: "https://www.youtube.com/@shoumethemoneyxx", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "陳華",
          en: "Hua Chen",
          role: "演出藝人",
          bio: [
            { text: "新生代創作型歌手，代表作〈想和你看五月的晚霞〉，多次與傳說對決合作：〈" },
            { text: "想和你不只看五月的晚霞", href: "https://www.youtube.com/results?search_query=%E9%99%B3%E8%8F%AF+%E6%83%B3%E5%92%8C%E4%BD%A0%E4%B8%8D%E5%8F%AA%E7%9C%8B%E4%BA%94%E6%9C%88%E7%9A%84%E6%99%9A%E9%9C%9E+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "〉、〈" },
            { text: "不想跟你保持距離", href: "https://www.youtube.com/results?search_query=%E9%99%B3%E8%8F%AF+%E4%B8%8D%E6%83%B3%E8%B7%9F%E4%BD%A0%E4%BF%9D%E6%8C%81%E8%B7%9D%E9%9B%A2+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "〉" },
          ],
          photo: "images/chenhua.jpg",
          links: [
            { href: "https://open.spotify.com/artist/5ZxRmJ21NzjxD2ZGBxi7um", label: "Spotify" },
            { href: "https://www.youtube.com/channel/UCCyhSwCtAMzMmfVZ1slzQwg", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "派偉俊",
          en: "Patrick Brasca",
          role: "演出藝人",
          bio: [
            { text: "新生代音樂製作人，代表作〈你沒等我去的舊金山〉，曾與傳說對決多次合作，創作曲〈" },
            { text: "晨星 Morning Star", href: "https://www.youtube.com/results?search_query=%E6%B4%BE%E5%81%89%E4%BF%8A+%E6%99%A8%E6%98%9F+Morning+Star+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "〉、〈" },
            { text: "覺醒 Awaken", href: "https://www.youtube.com/watch?v=CVFSR51Qkn8" },
            { text: "〉" },
          ],
          photo: "images/patrick.jpg",
          links: [
            { href: "https://open.spotify.com/artist/1xCrrnnj9xif5G0y3ie5dM", label: "Spotify" },
            { href: "https://www.youtube.com/channel/UCG7BUAJKT3T_YctUf9fNXvQ", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "Minnie",
          en: "",
          role: "演出藝人",
          bio: "韓國女團 i-dle 泰國成員，代表作〈HER〉、〈Like A Dream〉，以辨識度極高的夢幻嗓音、歌唱實力與舞台魅力聞名",
          photo: "images/minnie.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx", label: "Spotify" },
          ],
        },
        {
          group: "show",
          name: "MAMAMOO+",
          en: "Solar, Moonbyul",
          role: "演出藝人",
          bio: [
            { text: "韓國女團 MAMAMOO 的子團體，由頌樂與華莎組成，頌樂曾於 2025 年獻唱九週年主題曲〈" },
            { text: "Come Away with Me（9 等你）", href: "https://www.youtube.com/watch?v=_VFV_Ty308k" },
            { text: "〉，並為英雄葉娜造型配音" },
          ],
          photo: "images/mamamoo.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2uGx10VkBrI3GBvnQl81du", label: "Spotify" },
            { href: "https://www.youtube.com/@MAMAMOO_OFFICIAL", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "告五人",
          en: "Accusefive",
          role: "演出藝人",
          bio: [
            { text: "台灣人氣流行搖滾樂團，作品包含〈愛人錯過〉、〈披星戴月的想你〉，2021 年與傳說對決合作改編曲〈" },
            { text: "我肯定在幾百年前就 carry 過你", href: "https://www.youtube.com/results?search_query=%E5%91%8A%E4%BA%94%E4%BA%BA+carry%E9%81%8E%E4%BD%A0+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "〉" },
          ],
          photo: "images/accusefive.jpg",
          links: [
            { href: "https://open.spotify.com/artist/6xErgeZYatiaQ36SB5bvi8", label: "Spotify" },
            { href: "https://www.youtube.com/@Accusefive", label: "YouTube" },
          ],
        },
      ],
    },
  },
  en: {
    langLabel: "English",
    menuLabel: "Menu",
    brand: "VIP Guide",
    brandEn: "AOV 10TH",
    nav: [
      { href: "#home", id: "home", label: "Home" },
      { href: "#garena", id: "garena", label: "Garena VIP" },
      { href: "#guests", id: "guests", label: "Other guests / Partners" },
      { href: "#lineup", id: "lineup", label: "Lineup" },
      { href: "#transport", id: "transport", label: "Transport" },
    ],
    close: "Close",
    zoom: "Tap a photo to enlarge",
    gate5: [
      { src: "images/gate5-floor.png", alt: "Taipei Dome B2 floor plan, with Gate 5 marked" },
      { src: "images/gate5-entrance.png", alt: "Gate 5 entrance, with the VIP passage on the right" },
    ],
    home: {
      kicker: "Arena of Valor 10th Anniversary Series",
      title: "VIP Guide",
      cards: [
        {
          href: "#garena",
          kicker: "VIP",
          title: "Garena VIP",
          text: "Click for more guide details",
        },
        {
          href: "#guests",
          kicker: "Guest",
          title: "Other guests / Partners",
          text: "Click for more guide details",
        },
      ],
      dayTitle: "Suggested plan",
      optional: "Optional",
      placeLabel: "Place",
      itinerary: [
        { date: "10/30", time: "18:30–22:00", title: "Taipei 101 light show", place: "MRT Taipei 101/World Trade Center, Exit 2", note: "Drivers can navigate to Guoyun Parking, World Trade D1" },
        { date: "10/31", time: "19:00–21:50", title: "Arena of Valor 10th Anniversary Concert", place: "Taipei Dome" },
        { date: "10/24–10/31", time: "10:00–18:00", title: "Arena of Valor 10th Anniversary Exhibition", place: "Songshan Cultural and Creative Park, 2F", optional: true },
        { date: "10/31", time: "10:30–15:30", title: "Arena of Valor GCS Summer Finals", place: "Taipei Dome", optional: true },
      ],
      links: [
        { href: "#transport", title: "Transport", text: "Click for more information" },
        { href: "#lineup", title: "Lineup", text: "Click to see the artists" },
      ],
    },
    transport: {
      kicker: "Venues",
      title: "Transport",
      lede: "",
      howTitle: "Getting there",
      map: "Open in Maps",
      places: [
        {
          name: "Arena of Valor 10th Anniversary Concert, GCS Summer Finals",
          address: "Taipei Dome (No. 515, Section 4, Zhongxiao East Road, Xinyi District, Taipei)",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Taipei+Dome",
          ways: [
            { title: "Taxi", text: "Address: No. 515, Section 4, Zhongxiao East Road, Xinyi District, Taipei" },
            {
              title: "Metro",
              steps: [
                "Take the Bannan line (Blue line) to Sun Yat-sen Memorial Hall Station.",
                "Leave through Exit 5.",
                "Follow the signs through the underground passage, or walk along Section 4 of Zhongxiao East Road, to the venue.",
              ],
            },
          ],
        },
        {
          name: "Taipei 101 light show",
          address: "MRT Taipei 101/World Trade Center Station, Exit 2",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Taipei+101+World+Trade+Center+Station+Exit+2",
          ways: [
            {
              title: "Metro",
              steps: [
                "Take the Tamsui–Xinyi line (Red line) to Taipei 101/World Trade Center Station.",
                "Leave through Exit 2.",
              ],
            },
            { title: "Drive", text: "Navigate to Guoyun Parking, World Trade D1." },
          ],
        },
        {
          name: "Arena of Valor 10th Anniversary Exhibition",
          address: "Songshan Cultural and Creative Park, 2F hall (No. 133, Guangfu South Road, Xinyi District, Taipei)",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=No.+133+Guangfu+South+Road+Xinyi+Taipei",
          ways: [
            { title: "Taxi", text: "Address: No. 133, Guangfu South Road, Xinyi District, Taipei" },
            {
              title: "Metro",
              items: [
                "Bannan line to Sun Yat-sen Memorial Hall Station, Exit 5. Walk along Guangfu South Road and turn right at Songyan Boulevard.",
                "Or take the Bannan line to Taipei City Hall Station, Exit 1. Walk along Zhongxiao East Road and turn right into Lane 553, Section 4.",
              ],
            },
          ],
        },
      ],
    },
    garena: {
      kicker: "Entry guide",
      title: "Garena VIP",
      intro: "",
      events: [
        {
          title: "Taipei 101 light show",
          summary: [
            { kind: "text", k: "Time", v: "Friday, October 30, 2026, 18:30–22:00" },
            {
              kind: "ext",
              k: "Where to watch",
              items: [
                [
                  { text: "MRT Tamsui–Xinyi line, Taipei 101/World Trade Center Station, Exit 2 (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Taipei+101+World+Trade+Center+Station+Exit+2" },
                  { text: ")" },
                ],
                [
                  { text: "Drivers: Guoyun Parking, World Trade D1 (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Guoyun+Parking+World+Trade+D1" },
                  { text: ")" },
                ],
              ],
            },
            { kind: "text", k: "", small: true, v: [
              { text: "Earvin will meet Country Heads at 18:00 and take them to Exit 2. After the show, dinner is at " },
              { text: "捌伍添第", href: "https://www.google.com/maps/search/?api=1&query=%E6%8D%8C%E4%BC%8D%E6%B7%BB%E7%AC%AC" },
              { text: ". For dining or a reservation, contact Henry (chenhe@garena.com) or Grace (chengg@garena.com)." },
            ] },
            {
              kind: "media",
              items: [
                {
                  label: "Light show image preview",
                  images: [
                    { src: "images/light-train.png", alt: "Light show: Alishan train" },
                    { src: "images/light-nakroth.png", alt: "Light show: Nakroth street run" },
                  ],
                },
                {
                  label: "Light show viewing map",
                  images: [{ src: "images/light-map.png", alt: "Map of light-show viewing spots" }],
                },
              ],
            },
          ],
        },
        {
          title: "AOV 10th Anniversary Concert",
          summary: [
            { kind: "list", k: "Time", items: ["Saturday, October 31, 2026, 19:00", "Doors suggested from 18:00, expected to end at 21:50"] },
            {
              kind: "place",
              k: "Place",
              v: "Taipei Dome",
              link: "view transport",
              page: "transport",
            },
            {
              kind: "list",
              k: "Entry",
              items: [
                [
                  { text: "At " },
                  { text: "Gate 10", image: { src: "images/concert-gate.png", alt: "Concert entrance and Gate 10" } },
                  { text: ", give your name to collect a " },
                  { text: "VIP pass", image: { src: "images/vip-pass.jpg", alt: "VIP pass" } },
                  { text: ", then enter with the VIP pass. Staff will guide you to your suite." },
                ],
                "Show your VIP pass whenever you enter or leave. Please keep it with you.",
              ],
            },
            {
              kind: "list",
              k: "Seats",
              items: [
                "L3 suites: G01, G11, and G18. Contact Henry (chenhe@garena.com) to confirm your suite.",
                "Light refreshments are served in every suite.",
              ],
            },
            {
              kind: "text",
              k: "",
              v: [
                {
                  text: "View the floor plan and suite photos",
                  images: [
                    { src: "images/suite-floor.png", alt: "Level 3 suite floor plan" },
                    { src: "images/suite.png", alt: "Inside a large suite" },
                    { src: "images/suite-seats.jpg", alt: "Seats outside the suite" },
                  ],
                },
                { text: ", " },
                { text: "Suite interior and view video", href: "https://www.youtube.com/watch?v=tRg4CroqMoA" },
              ],
            },
          ],
        },
        {
          title: "AOV GCS 2026 Summer Finals",
          summary: [
            {
              kind: "list",
              k: "Time",
              items: [
                "Saturday, October 31, 2026, 10:30",
                "Doors at 9:30, latest end time 15:30",
                "12:00 halftime: Nine One One",
              ],
            },
            {
              kind: "place",
              k: "Place",
              v: "Taipei Dome",
              link: "view transport",
              page: "transport",
            },
            {
              kind: "list",
              k: "Entry",
              items: [
                [
                  { text: "At the VIP lane on the far right of Gate 5 on level B2, give your name to collect a " },
                  { text: "VIP pass", image: { src: "images/vip-pass.jpg", alt: "VIP pass" } },
                  { text: ". Staff will guide you to your seats." },
                ],
                "Show your VIP pass whenever you enter or leave. Please keep it with you.",
              ],
            },
            {
              kind: "seat",
              k: "Seats",
              before: "Block A4, rows 3–5, 27 seats held (",
              link: "view the floor plan",
              after: "). No assigned seat; you may sit freely.",
              places: ["Row 3, seats 22–30", "Row 4, seats 22–30", "Row 5, seats 22–30"],
              image: {
                src: "images/match-seating.jpg",
                alt: "Summer Finals seating map, with block A4 facing the stage",
              },
            },
          ],
        },
        {
          title: "10th anniversary exhibition",
          summary: [
            { kind: "text", k: "Dates", v: "October 24–31, 2026, 10:00–18:00" },
            {
              kind: "ext",
              k: "Place",
              items: [[
                  { text: "Songshan Cultural and Creative Park, 2F hall (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Songshan+Cultural+and+Creative+Park" },
                  { text: ")" },
                ]],
            },
            {
              kind: "list",
              k: "Program",
              items: [
                "Ongoing activities",
                "10/24 Eternal Glory awards",
                [
                  { text: "10/25 special performance by " },
                  { text: "Ivy", href: "https://open.spotify.com/artist/0RaC2hXyniYsju0mCSNz90/" },
                ],
                "10/26 voice-actor meeting",
                "10/31 GCS watch party",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "Exhibition floor map",
                  images: [
                    { src: "images/expo-map.jpg", alt: "Exhibition floor map" },
                    { src: "images/expo-flow.png", alt: "Exhibition venue flow" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    guests: {
      kicker: "Entry guide",
      title: "Other guests / Partners",
      intro: "",
      events: [
        {
          title: "AOV 10th Anniversary Concert",
          summary: [
            { kind: "list", k: "Time", items: ["Saturday, October 31, 2026, 19:00", "Doors suggested from 18:00, expected to end at 21:50"] },
            {
              kind: "place",
              k: "Place",
              v: "Taipei Dome",
              link: "view transport",
              page: "transport",
            },
            {
              kind: "list",
              k: "Entry",
              items: [[
                { text: "Check in with staff at " },
                { text: "Gate 10", image: { src: "images/concert-gate.png", alt: "Concert entrance and Gate 10" } },
                { text: " to collect your ticket, then enter with the ticket. Staff will guide you to your seats." },
              ]],
            },
            {
              kind: "list",
              k: "Seats",
              items: [
                "Level 3 stands. Sit according to the information on your ticket.",
                "The Level 3 floor has a lounge with light refreshments.",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "Concert seating map",
                  images: [{ src: "images/concert-seating.jpg", alt: "10th anniversary concert seating map" }],
                },
              ],
            },
          ],
        },
        {
          title: "AOV GCS 2026 Summer Finals",
          summary: [
            {
              kind: "list",
              k: "Time",
              items: [
                "Saturday, October 31, 2026, 10:30",
                "Doors at 9:30, latest end time 15:30",
                "12:00 halftime: Nine One One",
              ],
            },
            {
              kind: "place",
              k: "Place",
              v: "Taipei Dome",
              link: "view transport",
              page: "transport",
            },
            {
              kind: "list",
              k: "Entry",
              items: ["Check in with staff at Gate 5 to collect your ticket, then enter with the ticket. Staff will guide you to your seats."],
            },
            {
              kind: "seat",
              k: "Seats",
              before: "Block A4, rows 3–5 (",
              link: "view the floor plan",
              after: "). No assigned seat; you may sit freely.",
              places: ["Row 3, seats 22–30", "Row 4, seats 22–30", "Row 5, seats 22–30"],
              image: {
                src: "images/match-seating.jpg",
                alt: "Summer Finals seating map, with block A4 facing the stage",
              },
            },
          ],
        },
        {
          title: "10th anniversary exhibition",
          summary: [
            { kind: "text", k: "Dates", v: "October 24–31, 2026, 10:00–18:00" },
            {
              kind: "ext",
              k: "Place",
              items: [[
                  { text: "Songshan Cultural and Creative Park, 2F hall (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Songshan+Cultural+and+Creative+Park" },
                  { text: ")" },
                ]],
            },
            {
              kind: "list",
              k: "Program",
              items: [
                "Ongoing activities",
                "10/24 Eternal Glory awards",
                [
                  { text: "10/25 special performance by " },
                  { text: "Ivy", href: "https://open.spotify.com/artist/0RaC2hXyniYsju0mCSNz90/" },
                ],
                "10/26 voice-actor meeting",
                "10/31 GCS watch party",
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "Exhibition floor map",
                  images: [
                    { src: "images/expo-map.jpg", alt: "Exhibition floor map" },
                    { src: "images/expo-flow.png", alt: "Exhibition venue flow" },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Taipei 101 light show",
          summary: [
            { kind: "text", k: "Time", v: "Friday, October 30, 2026, 18:30–22:00" },
            {
              kind: "ext",
              k: "Where to watch",
              items: [
                [
                  { text: "MRT Tamsui–Xinyi line, Taipei 101/World Trade Center Station, Exit 2 (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Taipei+101+World+Trade+Center+Station+Exit+2" },
                  { text: ")" },
                ],
                [
                  { text: "Drivers: Guoyun Parking, World Trade D1 (" },
                  { text: "Map", href: "https://www.google.com/maps/search/?api=1&query=Guoyun+Parking+World+Trade+D1" },
                  { text: ")" },
                ],
              ],
            },
            {
              kind: "media",
              items: [
                {
                  label: "Light show image preview",
                  images: [
                    { src: "images/light-train.png", alt: "Light show: Alishan train" },
                    { src: "images/light-nakroth.png", alt: "Light show: Nakroth street run" },
                  ],
                },
                {
                  label: "Light show viewing map",
                  images: [{ src: "images/light-map.png", alt: "Map of light-show viewing spots" }],
                },
              ],
            },
          ],
        },
      ],
    },
    lineup: {
      kicker: "Artists",
      title: "Lineup",
      lede: "",
      finalsTitle: "AOV GCS 2026 Summer Finals",
      concertTitle: "AOV 10th Anniversary Concert",
      hosts: "Hosts",
      performers: "Performers",
      artists: [
        {
          group: "finals",
          name: "玖壹壹",
          en: "Nine One One",
          role: "Match halftime performance",
          bio: [
            [
              { text: "A popular Taiwanese hip-hop group and GCS 2026 Summer ambassadors. Members 春風, 洋蔥, and 健志 mix Hokkien, hip-hop, and EDM, and own championship contender ANK." },
            ],
            [
              { text: "In 2026 they released the GCS Summer theme “" },
              { text: "逆風", href: "https://www.youtube.com/results?search_query=%E7%8E%96%E5%A3%B9%E5%A3%B9+%E9%80%86%E9%A2%A8+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA+GCS+2026" },
              { text: "”, built around fighting through adversity and the season line “頂天立地 GOAT”. They also took part in the 2022 New Year theme “" },
              { text: "戰場傳說", href: "https://www.youtube.com/results?search_query=%E7%8E%96%E5%A3%B9%E5%A3%B9+%E6%88%B0%E5%A0%B4%E5%82%B3%E8%AA%AA+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
              { text: "”, Arena of Valor’s first Hokkien theme." },
            ],
          ],
          photo: "images/nineoneone.jpg",
          links: [
            { href: "https://open.spotify.com/artist/3w8fdvgPp2aKgy125EBgVg", label: "Spotify" },
            { href: "https://www.youtube.com/@TWnineoneone911", label: "YouTube" },
          ],
        },
        {
          group: "hosts",
          name: "葉舒華",
          en: "Shuhua",
          role: "Host",
          bio: "Taiwanese member of the Korean group i-dle. Known for “Queencard” and “TOMBOY”, and for her personality and variety-show presence.",
          photo: "images/shuhua.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx", label: "Spotify" },
          ],
        },
        {
          group: "hosts",
          name: "黃偉晉",
          en: "Wayne Huang",
          role: "Host",
          bio: [
            { text: "Former SpeXial member and current host of the variety show 娛樂百分百. In 2021, as a member of 五堅情, he joined the 5th-anniversary theme “" },
            { text: "Ride On", href: "https://www.youtube.com/watch?v=5So2np8cu0M" },
            { text: "”." },
          ],
          photo: "images/wayne.jpg",
          links: [
            { href: "https://www.youtube.com/channel/UCQj6W_rgqKQhSs97NdZoWMA", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "婁峻碩",
          en: "Shou",
          role: "Performer",
          bio: [
            { text: "A popular Taiwanese rapper. In 2021, as a member of 五堅情, he joined the 5th-anniversary theme “" },
            { text: "Ride On", href: "https://www.youtube.com/watch?v=5So2np8cu0M" },
            { text: "”." },
          ],
          photo: "images/lou.jpg",
          links: [
            { href: "https://open.spotify.com/artist/40sntfyZsRwGfDgSJnxYuX", label: "Spotify" },
            { href: "https://www.youtube.com/@shoumethemoneyxx", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "陳華",
          en: "Hua Chen",
          role: "Performer",
          bio: [
            { text: "Singer-songwriter known for “想和你看五月的晚霞”. Arena of Valor collaborations: “" },
            { text: "想和你不只看五月的晚霞", href: "https://www.youtube.com/results?search_query=%E9%99%B3%E8%8F%AF+%E6%83%B3%E5%92%8C%E4%BD%A0%E4%B8%8D%E5%8F%AA%E7%9C%8B%E4%BA%94%E6%9C%88%E7%9A%84%E6%99%9A%E9%9C%9E+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "” and “" },
            { text: "不想跟你保持距離", href: "https://www.youtube.com/results?search_query=%E9%99%B3%E8%8F%AF+%E4%B8%8D%E6%83%B3%E8%B7%9F%E4%BD%A0%E4%BF%9D%E6%8C%81%E8%B7%9D%E9%9B%A2+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "”." },
          ],
          photo: "images/chenhua.jpg",
          links: [
            { href: "https://open.spotify.com/artist/5ZxRmJ21NzjxD2ZGBxi7um", label: "Spotify" },
            { href: "https://www.youtube.com/channel/UCCyhSwCtAMzMmfVZ1slzQwg", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "派偉俊",
          en: "Patrick Brasca",
          role: "Performer",
          bio: [
            { text: "Producer known for “你沒等我去的舊金山”. Arena of Valor songs he created: “" },
            { text: "晨星 Morning Star", href: "https://www.youtube.com/results?search_query=%E6%B4%BE%E5%81%89%E4%BF%8A+%E6%99%A8%E6%98%9F+Morning+Star+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "” and “" },
            { text: "覺醒 Awaken", href: "https://www.youtube.com/watch?v=CVFSR51Qkn8" },
            { text: "”." },
          ],
          photo: "images/patrick.jpg",
          links: [
            { href: "https://open.spotify.com/artist/1xCrrnnj9xif5G0y3ie5dM", label: "Spotify" },
            { href: "https://www.youtube.com/channel/UCG7BUAJKT3T_YctUf9fNXvQ", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "Minnie",
          en: "",
          role: "Performer",
          bio: "Thai member of i-dle, known for “HER” and “Like A Dream”, and for her distinctive dreamy voice and stage presence.",
          photo: "images/minnie.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx", label: "Spotify" },
          ],
        },
        {
          group: "show",
          name: "MAMAMOO+",
          en: "Solar, Moonbyul",
          role: "Performer",
          bio: [
            { text: "A subunit of MAMAMOO, formed by Solar and Moonbyul. In 2025 Solar sang the 9th-anniversary theme “" },
            { text: "Come Away with Me (9 等你)", href: "https://www.youtube.com/watch?v=_VFV_Ty308k" },
            { text: "” and voiced the hero Yena." },
          ],
          photo: "images/mamamoo.jpg",
          links: [
            { href: "https://open.spotify.com/artist/2uGx10VkBrI3GBvnQl81du", label: "Spotify" },
            { href: "https://www.youtube.com/@MAMAMOO_OFFICIAL", label: "YouTube" },
          ],
        },
        {
          group: "show",
          name: "告五人",
          en: "Accusefive",
          role: "Performer",
          bio: [
            { text: "A popular Taiwanese pop-rock band, known for “愛人錯過” and “披星戴月的想你”. In 2021 they adapted “" },
            { text: "我肯定在幾百年前就 carry 過你", href: "https://www.youtube.com/results?search_query=%E5%91%8A%E4%BA%94%E4%BA%BA+carry%E9%81%8E%E4%BD%A0+%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA" },
            { text: "” for Arena of Valor." },
          ],
          photo: "images/accusefive.jpg",
          links: [
            { href: "https://open.spotify.com/artist/6xErgeZYatiaQ36SB5bvi8", label: "Spotify" },
            { href: "https://www.youtube.com/@Accusefive", label: "YouTube" },
          ],
        },
      ],
    },
  },
};
