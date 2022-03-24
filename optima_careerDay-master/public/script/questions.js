// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Vad tillverkar Rani plast?",
    answer: "Förpackningslösningar till industrin, lantbruk och livsmedelsindustrin",
    options: [
      "Leksaker",
      "Förpackningslösningar till industrin, lantbruk och livsmedelsindustrin",
      "Plasthinkar",
      "Bygg plast"
    ]
  },
  {
    numb: 2,
    question: "Vad producerar OSTP??",
    answer: "Rör och rördelar i rostfritt stål",
    options: [
      "Ost och smör",
      "Virke",
      "Datorkomponenter",
      "Rör och rördelar i rostfritt stål"
    ]
  },
  {
    numb: 3,
    question: "Vilken är Finlands mest populära sallad?",
    answer: "Kyckling-Taco sallad",
    options: [
      "Grekisk sallad",
      "Mozzarella-sallad",
      "Kyckling-Taco sallad",
      "kyckling caesar sallad"
    ]
  },
  {
    numb: 4,
    question: "Hur många privata boende för äldre finns i Jakobstad?",
    answer: "8",
    options: [
      "8",
      "20",
      "15",
      "12"
    ]
  },
  {
    numb: 5,
    question: "Alla avdelningar på Wikström media har ett namn. Vad händer i Domanian republic?",
    answer: "Där jobbar webutvecklare samt digitala marknadsförare",
    options: [
      "Där jobbar ledningen",
      "Där jobbar praktikanter",
      "Där jobbar webutvecklare samt digitala marknadsförare",
      "Där jobbar VVS montörer"
    ]
  },
  {
    numb: 6,
    question: "Vilken produkt tillverkar Nordic Lights?",
    answer: "Lampor till stora maskiner",
    options: [
      "Gatubelysning",
      "Tak lampor",
      "Skidor",
      "Lampor till stora maskiner"
    ]
  },
  {
    numb: 7,
    question: "Hur många anställda har Prisma Jakobstad?",
    answer: "104",
    options: [
      "304",
      "204",
      "104",
      "84"
    ]
  },
  {
    numb: 8,
    question: "Hur många portioner tillreder Alertes kosthåll per dag?",
    answer: "4000",
    options: [
      "10000",
      "4000",
      "2000",
      "6000"
    ]
  },
  {
    numb: 9,
    question: "På vilka orter har Prevex tillverkning i Finland?",
    answer: "Nykarelby och Jakobstad",
    options: [
      "pedersöre",
      "vörå",
      "Nykarelby och Jakobstad",
      "kokkola"
    ]
  },
  {
    numb: 10,
    question: "Solving tillverkar bl.a. automatiska truckar. Vilken förkortning används för dessa förarlösa truckar och vad står förkortningen för?",
    answer: "AGV, automated guided vehicles-----",
    options: [
      "AGV, automated guided vehicles-----",
      "Agile great value",
      "Austrian good vintage",
      "ALG good value"
    ]
  },
  {
    numb: 11,
    question: "hur många anställda har Snellman koncernen?",
    answer: "1700",
    options: [
      "900",
      "2100",
      "1700",
      "973"
    ]
  },
  {
    numb: 12,
    question: "Vad heter/kallas Nautors anläggning ute på Alholmen?",
    answer: "BTC",
    options: [
      "BTC",
      "Swan bolts",
      "Sail Center",
      "Heliga fyren"
    ]
  },
  {
    numb: 13,
    question: "När grundades Baltic Yachts?",
    answer: "1983",
    options: [
      "1973",
      "1980",
      "1966",
      "1969"
    ]
  },
  {
    numb: 14,
    question: "Hur många finländare hittar intressanta jobb via some (tips kolla Lissn.fi hemsida - rekrytering)",
    answer: "79%",
    options: [
      "72",
      "86",
      "63",
      "79%"
    ]
  },
  {
    numb: 15,
    question: "Inom vilken bransch verkar OptimaPlus? ",
    answer: "Skolning och utbildning",
    options: [
      "Skolning och utbildning",
      "Sport och fritid",
      "Metallindustri",
      "Matindustrin"
    ]
  },
  {
    numb: 16,
    question: "Hur många boenden har Kårkulla i Jakobstad?",
    answer: "3st",
    options: [
      "2st",
      "8st",
      "5st",
      "3st"
    ]
  },
  {
    numb: 17,
    question: "Vilket år grundades Beamex?",
    answer: "1975",
    options: [
      "1955",
      "1980",
      "1975",
      "1943"
    ]
  },
  {
    numb: 18,
    question: "Jake utvecklar miljövänligt byggande, vilket material används då?",
    answer: "trä",
    options: [
      "betong",
      "trä",
      "stål",
      "järn"
    ]
  },
  {
    numb: 19,
    question: "Vilket år uppfann Thomas Edison glödlampan?",
    answer: "1897",
    options: [
      "1919",
      "1901",
      "1897",
      "1875"
    ]
  },
  {
    numb: 20,
    question: "När grundades mirka",
    answer: "1",
    options: [
      "1943",
      "1920",
      "1966",
      "1955"
    ]
  },
  {
    numb: 21,
    question: "Hur mycket vatten kan man spara per år med vatten återvinnare",
    answer: "1897",
    options: [
      "upp till 24 000 M3 per år",
      "Upp till 24 000 liter per år",
      "Upp till 40 000 M3 per år",
      "1875"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];