const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    // console.log('enter a search..');

    const data = [
    {
        "type": "video",
        "videoId": "FLCVd8tJA2U",
        "title": "Ku Baro Python Af Somali | Python Af Soomaali Full Course",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "waxii update ah marwalba booqo webiste-keena https://dugsiiye.com Linkiga resources-ka ka check gareey github   ...",
        "viewCount": "15959",
        "publishedText": "5 months ago",
        "lengthText": "3:28:17",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/FLCVd8tJA2U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzMuAxJ1BsgYTnmJKac5jq5HQeLg",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/FLCVd8tJA2U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZV7cuiRErC58I7hbjgtAgsH0NAA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/FLCVd8tJA2U/mqdefault_6s.webp?du=3000&sqp=CN7Gk8QG&rs=AOn4CLAj86VfRMrBrWMk2pG_9cOm2EdqIA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "894ffjERotQ",
        "title": "Nuucyada Uu u kala Baxo Programming-ka Iyo Sida Aad U Baran Karto | Sharaxaad Waafi Ah Af Soomali Ah",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Waxaan ku dhawaaqaynaa in course-kii Zero to Pro: Mastering ...",
        "viewCount": "5695",
        "publishedText": "1 year ago",
        "lengthText": "8:08",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/894ffjERotQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4WvC0BE1CMaRL9TZWtqq_m_SddQ",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/894ffjERotQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXB0Ha0K4__zmoXPNyokrBiVk5uA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/894ffjERotQ/mqdefault_6s.webp?du=3000&sqp=CICik8QG&rs=AOn4CLDpifDvzPbrGijqjwUNTMJErYa3ow",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "7x6yU4COVIQ",
        "title": "ABDIRASAQ ANSHAX | DAJIYA | OFFICIAL 2018 MUSIC VIDEO",
        "channelTitle": "Waqal WStudío",
        "channelId": "UC86UcBB1qofuGk9as8IhpMQ",
        "description": "ERAYADII SADIIQ BURMAD LAXANKII MAXAMED MIYIR XAAJI MUSIC BY AHMED WALI FURINLE DESIGN ABOKOR DIINO ...",
        "viewCount": "823519",
        "publishedText": "7 years ago",
        "lengthText": "9:02",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/7x6yU4COVIQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTUhu6oeWSnn5agKAwfoSxYbi5IQ",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/7x6yU4COVIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBed3n4TwzAvKpyTRe7kJ5-y_BWdA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/7x6yU4COVIQ/mqdefault_6s.webp?du=3000&sqp=CNy3k8QG&rs=AOn4CLCG4a0q0LUB2Dq6Fp8SA_9BB6Zytw",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/7LsN3o6aUAlzN1E_gl_2gAAiAhYo867Jbtkw0SX9iZ819carLmeWTPZfImpfppp0-44a8jYmvg=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "3JTJMkeTSaE",
        "title": "FARXIYA FISKA HEES DUGSIIYE",
        "channelTitle": "Al jaziiramerica 24",
        "channelId": "UCqWvPrV6gnAAClbqIGlIRBA",
        "description": "FARXIYA FISKA HEES DUGSIIYE.",
        "viewCount": "105644",
        "publishedText": "11 years ago",
        "lengthText": "4:12",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/3JTJMkeTSaE/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3gOAAugCigIMCAAQARguIEcofzAP&rs=AOn4CLAt5QZzKLZQeV6q9CcLUwjvvvTrxA",
                "width": 480,
                "height": 270
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/3JTJMkeTSaE/mqdefault_6s.webp?du=3000&sqp=CLDVk8QG&rs=AOn4CLBYcnPcpKKwQMRcyouPkvoD_Ngm9Q",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/ytc/AIdro_lI8IY7AFgIJOXWjCQ-MTLZx9nkm3k1cIcN2XvCX4ERL6A=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "oAVdUdWsWXk",
        "title": "Baro SQL Database | DBMS | Full Database Af Soomaali",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "Resources-ka aan isticmaalnay waxaad ka heleysaa linkiga hoose ...",
        "viewCount": "5905",
        "publishedText": "2 months ago",
        "lengthText": "3:35:40",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/oAVdUdWsWXk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWI_ogaL6DqMwGWuN9W4oTj8zkQA",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/oAVdUdWsWXk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLTfq4nbZqGizeTVeoiMYeRa8JQA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": null,
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "NUd6NIcemS8",
        "title": "Waa kuma Qofkii Ka danbeeyay in aan bilaabo Dugsiiye",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Hadii aad daneeneyso Barashada Web Developement waxan kuu diyaarinay Full Courses : React ...",
        "viewCount": "2272",
        "publishedText": "2 years ago",
        "lengthText": "6:11",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/NUd6NIcemS8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBffNMK3flj4zsH4tJIIiuNHos7SA",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/NUd6NIcemS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKlB7_ZeCP4ijYA-pgAFLGwwroRw",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/NUd6NIcemS8/mqdefault_6s.webp?du=3000&sqp=CMe-k8QG&rs=AOn4CLCdrpZAr7ZjNUFeO5133O10tCeM1w",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "HdgorlTe88A",
        "title": "Baro Git and GitHub Af Somali | GitHub Tutorial Somali Full Course",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "github #githubtutorial #programmer Document-ga aan istocmaalay iyo commands-ka linkigaan hoose ka isticmaal ...",
        "viewCount": "10777",
        "publishedText": "7 months ago",
        "lengthText": "1:16:18",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/HdgorlTe88A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDof2mF3FpwHzcfdTyWkk4fdgSvhQ",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/HdgorlTe88A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4G3izAUebPQOxKpbaM5KU0F3Zkg",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/HdgorlTe88A/mqdefault_6s.webp?du=3000&sqp=CICyk8QG&rs=AOn4CLC2SC9P2NU0kGCW5Qt1WUAcvd5RSQ",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "I3K5ESK06Ro",
        "title": "Next.js Af Soomaali Crash Course | Wax Walba Oo Aad Uga Baahantahay Nextjs 14 | Somali NextJs Course",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #nextjstutorial Github Repo https://github.com/mchamoudadev/next-js-crash-course.git. Hadii aad daneeneyso ...",
        "viewCount": "5038",
        "publishedText": "1 year ago",
        "lengthText": "2:55:05",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/I3K5ESK06Ro/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIcprLDPKh57jB0L1vPmarju3CKw",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/I3K5ESK06Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBN2hK_YD72EFVBJlzM1nO2BBVQ",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/I3K5ESK06Ro/mqdefault_6s.webp?du=3000&sqp=CNaVk8QG&rs=AOn4CLCVJ2-ITuxq-wAp22WUoBUo9ubOMA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "6o_lnteA-DQ",
        "title": "Wax Walba Oo Ku Saabsan Somali Online Payments Iyo Local Payments | Zaad, Sahal ,Evc& Premier Wallet",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Mentorshipka dugsiiye halkan ka check gareey ...",
        "viewCount": "7513",
        "publishedText": "10 months ago",
        "lengthText": "3:12:29",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/6o_lnteA-DQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSuJJIeD9sD8uaekv-mL5TFtg8ag",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/6o_lnteA-DQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu3IT_CBQVgYLkaQBzFTappVLq2A",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/6o_lnteA-DQ/mqdefault_6s.webp?du=3000&sqp=CODHk8QG&rs=AOn4CLCWg85d2EHzH8OqDcLUnCpzozkGFw",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "5ymIYPTQTuc",
        "title": "PODCAST ISKEY-BAR |DR-KEYF| GANACSADE",
        "channelTitle": "Marwaan Dugsiiye",
        "channelId": "UCe5NbmzU1dIhMT2wisO_t4w",
        "description": "",
        "viewCount": "165",
        "publishedText": "1 day ago",
        "lengthText": "12:58",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/5ymIYPTQTuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnR1CyAe5E3pmxawna2m3N5YAJuA",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/5ymIYPTQTuc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl1JZtNiZYyaPxdf-lvZsMoa7gkw",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/5ymIYPTQTuc/mqdefault_6s.webp?du=3000&sqp=CM3Qk8QG&rs=AOn4CLAPC55pX65IzVcDYPEkup0F8VV6MA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/zyDQ4X6xYNs5XpG3smww-CxXkzybCZBPtxkk6CBYP0SVneMOljaSJyL_rSD2HroYwY2wGWY93w=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "aGjvA7p0WC0",
        "title": "Ku Baro JavaScript Af-Soomaali | JavaScript Somali Course",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Ku Baro JavaScript luqada soomaliga somali programmers hadii aad daneenayso in aad ...",
        "viewCount": "32384",
        "publishedText": "3 years ago",
        "lengthText": "5:56:27",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/aGjvA7p0WC0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmyjIR6ezQpjcXwWFef5TQMMJb2Q",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/aGjvA7p0WC0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuu3IzD1bhp6mTlIRyBzdNJpSfVQ",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/aGjvA7p0WC0/mqdefault_6s.webp?du=3000&sqp=CLvNk8QG&rs=AOn4CLAWqpYHWSE34TfhcTKU1DaPd9qW3Q",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "eJE4JdUTHHQ",
        "title": "Dugsiiye DEMO Day  | Day 1 | PART #1",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "Dugsiiye DEMO Day | Day 1.",
        "viewCount": "1078",
        "publishedText": "Streamed 1 month ago",
        "lengthText": "1:04:42",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/eJE4JdUTHHQ/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhJIFIoZTAP&rs=AOn4CLDSiWXwDCFljShHsmfsY87lvJxywg",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/eJE4JdUTHHQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhJIFIoZTAP&rs=AOn4CLC-cZ5050pxuVnCKmu2h9WRSp2nZA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/eJE4JdUTHHQ/mqdefault_6s.webp?du=3000&sqp=CJC5k8QG&rs=AOn4CLCB9Tb3K8KR6fNB4aSoezKV8e7Gug",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "ZTlpKsHDuvA",
        "title": "Dhis React.js eCommerce Shopping Cart With and Vite | Context, Reducer React Router Iyo Tailwind CSS",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer #somali #code #programmer Mentorshipka dugsiiye halkan ka check gareey ...",
        "viewCount": "8083",
        "publishedText": "10 months ago",
        "lengthText": "7:28:03",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/ZTlpKsHDuvA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRwz87TseRCufMOHeSa8fzF5KvXQ",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/ZTlpKsHDuvA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn2URJ_pXiHtZqc8MRzxNJBDEa8Q",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/ZTlpKsHDuvA/mqdefault_6s.webp?du=3000&sqp=CMChk8QG&rs=AOn4CLAGF--_T9_UhdmKR_NbKgeZES7EYg",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "Z2taIhHqnBE",
        "title": "FARXIYA FISKA MUUQAAL CUSUB  HEESTA DUGSIIYE",
        "channelTitle": "Jamila Garruun",
        "channelId": "UCNTge879lmNu3hqPUuCnAhA",
        "description": "Copyright Universal Tv.",
        "viewCount": "1876451",
        "publishedText": "11 years ago",
        "lengthText": "3:39",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/Z2taIhHqnBE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvYd5sEvmKNkx0Ucwk89CkhlZFWg",
                "width": 480,
                "height": 270
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/Z2taIhHqnBE/mqdefault_6s.webp?du=3000&sqp=CKSNk8QG&rs=AOn4CLBYxHnTI9I7viZwfuyNuBjkFXUnPQ",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/6F3gXcY1kFzvqJWAQSiJcrsVuKIKJv0G2QO0d9BUMKm9I29vA9XrhrRvn-DfL8vzkHJtqp9IBQ=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "NGLnjVWG74g",
        "title": "How To Build Responsive Landing Page Using HTML CSS and JavaScript | HTML AND CSS Somali",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer HTML and css Af somali Hadii aad daneeneyso Barashada Web Developement waxan kuu ...",
        "viewCount": "5267",
        "publishedText": "4 years ago",
        "lengthText": "1:12:13",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/NGLnjVWG74g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALAIKYVaDZ5QATa1e_aJd1jjxEdg",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/NGLnjVWG74g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuaQpwVlLLsCbcKO_EaKVFAHIBZg",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/NGLnjVWG74g/mqdefault_6s.webp?du=3000&sqp=CNC9k8QG&rs=AOn4CLBsGQTdLOdmm9Q4hrr0rkYFh5I-wA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "OyjwCeEr5Vo",
        "title": "Barashada Flutter | Somali Mobile App Development",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Hadii aad daneeneyso Barashada Web Developement waxan kuu diyaarinay Full Courses : hadii ...",
        "viewCount": "26212",
        "publishedText": "2 years ago",
        "lengthText": "3:07:14",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/OyjwCeEr5Vo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHI0yVk7jQzqjelSK5a-5KlJef5g",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/OyjwCeEr5Vo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1HWoYf9qyzI4kd4nb9IrZPk30yA",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": null,
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "9ujqyrE8P6A",
        "title": "Bro NodeJS From Scratch | NodeJS Af Soomali | NodeJS Crash Course",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Lifaaqyada Cashirka   Ku Shubo NodeJS: https://www.youtube.com/watch?v=cIiQF80DneM Baro ...",
        "viewCount": "5519",
        "publishedText": "1 year ago",
        "lengthText": "1:42:12",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/9ujqyrE8P6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEW5nL2G1n5WkbADleyaJtmGJzMw",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/9ujqyrE8P6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwLoZE11LWDFELeAUW68DbP544tg",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/9ujqyrE8P6A/mqdefault_6s.webp?du=3000&sqp=CJC5k8QG&rs=AOn4CLBBX4PmS-e2LJAWUL2vA2lFB_X8xA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "M6B3GPe4pIw",
        "title": "Wax Walba oo Ku Saabsan Program-ka Full Stack Software Engineer",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer Full Stack Sofware Engineer more info https://dugsiiye.com/mentorship.",
        "viewCount": "4601",
        "publishedText": "5 months ago",
        "lengthText": "20:35",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/M6B3GPe4pIw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgqqDnPaE3XYlMA-47ptjTlH7c_g",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/M6B3GPe4pIw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfc1ObKJck16-cdOkfcAo3lQ2lNw",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/M6B3GPe4pIw/mqdefault_6s.webp?du=3000&sqp=CNzFk8QG&rs=AOn4CLDQ7YfBHAiVMMgh0agBZ3GiNomZmA",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "KOlgaRZPfqY",
        "title": "Maxamed Adam Dugsiye Iyo Faadumo Axmed Dhimbiil 🔥Iyo Heesta \"WAKHTIGU WAYS DABA SOCDA\"",
        "channelTitle": "WAAYO WAAYIHII WACNAA",
        "channelId": "UCqgQdtBmCmFZDMfPgsOWSCQ",
        "description": "Heestan Waxa Curinteeda Lahaa A/ Ibrahim Gadhle AHN 1975 ⭐Laxanka U/ Cabdinuur Allaale.",
        "viewCount": "589708",
        "publishedText": "3 years ago",
        "lengthText": "9:18",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/KOlgaRZPfqY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhqIGooajAP&rs=AOn4CLBWm5KsaVCHUKBPlNQwZ6h2vWeccQ",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/KOlgaRZPfqY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhqIGooajAP&rs=AOn4CLB8xzQu4Ab5dzXB4U4-S1DtsT-47g",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": null,
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/BMeNP_WMmLwLxbNyZnjKkm0ontdSdDt1eW4rNrzlRugl7FYe_1d8VgeefagBvqctHfIV8QabOBw=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    },
    {
        "type": "video",
        "videoId": "zMeakFPSNcU",
        "title": "Dugsiiye Demo Day | Waxaan Ku Soconaa Wadada Somali Software Engineer",
        "channelTitle": "Dugsiiye",
        "channelId": "UCYDz9XPa9aKTCUyNzz8UQUA",
        "description": "somali #code #programmer AI-Powered SaaS with Next.js, Typescript, Prisma &OpenAI ...",
        "viewCount": "2081",
        "publishedText": "7 months ago",
        "lengthText": "2:56",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi/zMeakFPSNcU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrwPdO9h2dkRZqXrec1CpWFpmdWg",
                "width": 360,
                "height": 202
            },
            {
                "url": "https://i.ytimg.com/vi/zMeakFPSNcU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOCIaMoKOBmC4Wj1d8K3bPNFjPNg",
                "width": 720,
                "height": 404
            }
        ],
        "richThumbnail": [
            {
                "url": "https://i.ytimg.com/an_webp/zMeakFPSNcU/mqdefault_6s.webp?du=3000&sqp=CJGik8QG&rs=AOn4CLBeJA0HLnB8VaqVYlC5VGmiIJSeHw",
                "width": 320,
                "height": 180
            }
        ],
        "channelThumbnail": [
            {
                "url": "https://yt3.ggpht.com/PfHDCIhnwPLlJocp9M1d9rbHt_gB9qyXi6oog4o8PIEj9XwD39kWK5JS5ZEQbPBBrUSTNzZy6vM=s68-c-k-c0x00ffffff-no-rj",
                "width": 68,
                "height": 68
            }
        ]
    }
]

    const query = document.querySelector('#searchInput').value;
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;

   const options = {
        method: 'GET',
        headers: {
        //    'x-rapidapi-key': '9452172446msh620b23d249c353fp16dad9jsn7b983901f89b',
             'x-rapidapi-key': 'f70cb1deffmshac7a90d8b83650cp14d3cejsn7e2346cc071d',
		    'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'  
        }
    }
    try {
        // const response = await fetch(url, options);
        //  const result = await response.json();
        // console.log(result.data);
        // displayVideo(result.data)
        displayVideo(data)
    } catch (error) {
        console.error("error fetching search result",error);
    }
});

function displayVideo(videos) {

    const videoList = document.querySelector('.video-list');
    videoList.innerHTML= '';
    videos.forEach(video => {
     const videoItem = document.createElement('div');
        videoItem.className = "video-item";
        videoItem.innerHTML = `
        <div class="video-thumbnail" style="background-image: url('${video.thumbnail[0].url}'); widh:320px; height:300px"></div>
        <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-channel">${video.channelTitle}</div>
        </div>
        `;
        // videoItem.addEventListener('click', openModal(video.videoId){
        //     // console.log("clicked", video.title);
        // })
       videoItem.addEventListener('click', function() {
        openModal(video.videoId);
       })
        videoList.append(videoItem);
    })
}

function openModal(videoId) {
    const modal = document.querySelector('#video-modal');
    const videoPlayer = document.querySelector('#video-player');
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    //  console.log('Opening video:', videoId, videoUrl);
    videoPlayer.src = videoUrl;
    modal.style.display = 'flex';



    const download = document.querySelector('#download-mp3');
    download.addEventListener('click', async function() {
        // console.log("download")

        const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
        const options = {
	    method: 'GET',
	    headers: {
		'x-rapidapi-key': 'f70cb1deffmshac7a90d8b83650cp14d3cejsn7e2346cc071d',
		'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
	}
};
   try {
      const response = await fetch(url, options);
     const result = await response.json();
    //  console.log(result);
    if(result.status === "ok") {
        window.location.href = result.link;
    }else {
        alert('Error download Mp3');
    }
   } catch (error) {
    console.error("error exsist", error);
   }
    })
    
};

const closeModel = document.querySelector('#close-model');

closeModel.addEventListener('click', function() {
    closeModeL();
});

function closeModeL() {
      const modal = document.querySelector('#video-modal');
      const videoPlayer = document.querySelector('#video-player');
      videoPlayer.src = "";
    modal.style.display = 'none';
}

window.onclick = function(event) {
    // console.log(event.target);
     const modal = document.querySelector('#video-modal');

     if(event.target == modal) {
        // console.log("mode", event.target);
        closeModeL();
     }
}