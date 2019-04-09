dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "TOP",
    img: "wlSAQTN.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yuri",
    img: "zHBMJiK.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yeeun",
    img: "LiHJfGW.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yuna",
    img: "StQE5RW.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Krystal",
    img: "1LCiRhy.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "San",
    img: "pFNzH72.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Tzuyu",
    img: "WCY943u.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Younghoon",
    img: "IjyN1G4.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Olivia Hye",
    img: "GJZHzhR.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Mingyu",
    img: "yLQKWG0.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yugyeom",
    img: "NHsiUYp.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Xuanyi",
    img: "ZUe6lyH.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lena",
    img: "sxQLyJs.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lucas",
    img: "NHTn2t6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kyulkyung",
    img: "iERoLHw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "LE",
    img: "wyBrpET.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mark Lee",
    img: "p6uZgA1.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jisoo",
    img: "WcYWktY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "DK",
    img: "tauBOUi.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Eunwoo",
    img: "ejZEHSb.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Hana",
    img: "5iQA56h.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hongseok",
    img: "S8leLCw.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Irene",
    img: "EZYecri.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "DO",
    img: "aHbNehj.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Eunha",
    img: "U3tf7SY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hui",
    img: "6SjfQWy.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Minhyuk",
    img: "UR231dc.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jseph",
    img: "LqvLLiw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Feeldog",
    img: "23Dt7Ec.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ken",
    img: "M0lkFnA.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jia",
    img: "6x2hQUQ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Minho",
    img: "Tml8APu.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Kris Wu",
    img: "bepyXz5.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "JB",
    img: "KJWi6Os.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kwonbin",
    img: "FiGYG74.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Minnie",
    img: "7ji9Nbq.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Mino",
    img: "p3ebZPI.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  
   {
    name: "Chanyeol",
    img: "RZUcngx.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
 
  {
    name: "Jihyun",
    img: "snH7eqm.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
