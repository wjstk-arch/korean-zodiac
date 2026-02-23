const earthBranches = [
  { ko: "쥐", en: "Rat", es: "Rata" },
  { ko: "소", en: "Ox", es: "Buey" },
  { ko: "호랑이", en: "Tiger", es: "Tigre" },
  { ko: "토끼", en: "Rabbit", es: "Conejo" },
  { ko: "용", en: "Dragon", es: "Dragon" },
  { ko: "뱀", en: "Snake", es: "Serpiente" },
  { ko: "말", en: "Horse", es: "Caballo" },
  { ko: "양", en: "Goat", es: "Cabra" },
  { ko: "원숭이", en: "Monkey", es: "Mono" },
  { ko: "닭", en: "Rooster", es: "Gallo" },
  { ko: "개", en: "Dog", es: "Perro" },
  { ko: "돼지", en: "Pig", es: "Cerdo" }
];

const heavenlyStems = [
  { name: "갑", colorHex: "#2563eb", color: { ko: "푸른", en: "Blue", es: "Azul" } },
  { name: "을", colorHex: "#2563eb", color: { ko: "푸른", en: "Blue", es: "Azul" } },
  { name: "병", colorHex: "#dc2626", color: { ko: "붉은", en: "Red", es: "Rojo" } },
  { name: "정", colorHex: "#dc2626", color: { ko: "붉은", en: "Red", es: "Rojo" } },
  { name: "무", colorHex: "#ca8a04", color: { ko: "노란", en: "Yellow", es: "Amarillo" } },
  { name: "기", colorHex: "#ca8a04", color: { ko: "노란", en: "Yellow", es: "Amarillo" } },
  { name: "경", colorHex: "#6b7280", color: { ko: "하얀", en: "White", es: "Blanco" } },
  { name: "신", colorHex: "#6b7280", color: { ko: "하얀", en: "White", es: "Blanco" } },
  { name: "임", colorHex: "#111827", color: { ko: "검은", en: "Black", es: "Negro" } },
  { name: "계", colorHex: "#111827", color: { ko: "검은", en: "Black", es: "Negro" } }
];

const uiText = {
  ko: {
    htmlLang: "ko",
    title: "출생년도 띠 찾기",
    desc: "출생년도를 입력하면 띠와 오행 색상을 함께 보여줍니다.",
    topIntroLink: "Korean Zodiac 소개",
    topGuideLink: "한국 띠와 오행 색",
    topFaqLink: "자주 묻는 질문",
    topNavFinder: "띠 계산기",
    topNavAbout: "사이트 소개",
    topNavPrivacy: "개인정보처리방침",
    topNavContact: "문의",
    introTitle: "한국 띠 계산기 안내",
    introP1: "이 페이지는 출생연도를 기준으로 십이지(12지)와 천간(10간)을 조합해 한국식 띠와 오행 색을 간편하게 확인할 수 있도록 만든 정보형 도구입니다.",
    introP2: "계산 결과에는 띠 이름뿐 아니라 오행 색, 기본 성향 요약, 참고용 해석을 함께 제공해 빠르게 비교할 수 있게 구성했습니다.",
    howTitle: "계산 기준과 사용 방법",
    howItem1Title: "1. 출생연도 입력",
    howItem1Body: "숫자로 된 출생연도를 입력하면 브라우저에서 즉시 계산합니다. 입력값은 서버에 저장하지 않습니다.",
    howItem2Title: "2. 60갑자 순환 계산",
    howItem2Body: "서기 4년을 기준점으로 천간(10)과 지지(12)의 순환 인덱스를 계산해 해당 연도의 띠와 색을 매칭합니다.",
    howItem3Title: "3. 결과 해석 확인",
    howItem3Body: "결과 영역에서 띠 이미지, 오행 색, 성향 키워드, 주의 포인트를 확인할 수 있으며 자세한 기준은 가이드 페이지에서 추가로 볼 수 있습니다.",
    limitTitle: "해석 전 확인할 점",
    limitItem1: "간편 조회 도구이므로 전통 명리 해석 전체를 대체하지 않습니다.",
    limitItem2: "1~2월생은 입춘 기준 해석에서 띠가 달라질 수 있습니다.",
    limitItem3: "문화권과 지역에 따라 동물 명칭 또는 해석 관습이 다를 수 있습니다.",
    sampleTitle: "연도별 예시 (빠른 확인)",
    sampleDesc: "아래 예시는 계산기 사용 전에 어떤 형식으로 결과가 나오는지 이해할 수 있도록 제공하는 참고용 안내입니다.",
    sample1Year: "2024년 예시",
    sample1Body: "청룡(갑진) 해로 표시되며, 오행 색은 파랑 계열로 안내됩니다.",
    sample2Year: "2025년 예시",
    sample2Body: "푸른 뱀(을사) 해로 표시되며, 오행 색은 파랑 계열로 안내됩니다.",
    sample3Year: "2026년 예시",
    sample3Body: "붉은 말(병오) 해로 표시되며, 오행 색은 빨강 계열로 안내됩니다.",
    sample4Year: "2027년 예시",
    sample4Body: "붉은 양(정미) 해로 표시되며, 오행 색은 빨강 계열로 안내됩니다.",
    homeFaqTitle: "자주 묻는 질문 (메인 요약)",
    homeFaqQ1: "광고는 언제 표시되나요?",
    homeFaqA1: "광고 영역은 계산 결과가 실제로 생성된 뒤에만 표시되도록 구성되어 있습니다.",
    homeFaqQ2: "출생연도 입력값을 저장하나요?",
    homeFaqA2: "아니요. 입력값은 브라우저에서 즉시 계산에만 사용되며 서버에 저장하지 않습니다.",
    homeFaqQ3: "왜 전통 해석과 결과가 다를 수 있나요?",
    homeFaqA3: "이 도구는 간편 조회용이며, 입춘 기준·음력·세부 명리 요소를 모두 반영한 전문 해석과는 차이가 있을 수 있습니다.",
    yearLabel: "출생년도",
    placeholder: "예: 2026",
    submit: "확인하기",
    invalidYear: "올바른 출생년도를 입력해 주세요.",
    footerNote: "콘텐츠 품질 개선을 위해 계산 원리와 기준을 지속적으로 업데이트합니다.",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerContact: "Contact",
    personalityTitle: "성격 유형",
    fortuneTitle: (year) => `${year}년 운세`,
    keywordsLabel: "핵심 키워드",
    cautionLabel: "주의 포인트",
    entertainmentNote: "참고용 해석입니다.",
    resultLine: (year, name) => `${year}년생: <strong>${name}</strong>`,
    colorLabel: (name) => `색상: ${name}`,
    detail: (stem, animal) => `천간: ${stem} / 띠: ${animal}띠`,
    formatName: (color, animal) => `${color}${animal}`
  },
  en: {
    htmlLang: "en",
    title: "Korean Zodiac Finder",
    desc: "Enter your birth year to see your Korean zodiac animal and color.",
    topIntroLink: "Korean Zodiac Intro",
    topGuideLink: "Zodiac + Five Colors",
    topFaqLink: "FAQ",
    topNavFinder: "Zodiac Calculator",
    topNavAbout: "About",
    topNavPrivacy: "Privacy",
    topNavContact: "Contact",
    introTitle: "How This Korean Zodiac Calculator Works",
    introP1: "This page is an informational tool that combines the 12 earthly branches and 10 heavenly stems to show a Korean zodiac animal and five-element color by birth year.",
    introP2: "The result includes the animal name, element color, a short personality summary, and a reference-only interpretation so users can compare results quickly.",
    howTitle: "Calculation Basis and Usage",
    howItem1Title: "1. Enter a Birth Year",
    howItem1Body: "Type a numeric birth year and the result is calculated instantly in the browser. The input is not stored on the server.",
    howItem2Title: "2. 60-Gapja Cycle Matching",
    howItem2Body: "Using CE year 4 as a baseline, the tool calculates heavenly stem (10) and earthly branch (12) cycle indexes and matches the corresponding animal and color.",
    howItem3Title: "3. Read the Result",
    howItem3Body: "The result panel shows the zodiac image, element color, trait keywords, and a caution note. See the guide page for more background.",
    limitTitle: "Before Interpreting Results",
    limitItem1: "This is a quick lookup tool and does not replace full traditional fortune interpretation.",
    limitItem2: "For January-February births, results may differ under Ipchun seasonal-boundary interpretation.",
    limitItem3: "Animal names and interpretation customs may vary by region and culture.",
    sampleTitle: "Year Examples (Quick Check)",
    sampleDesc: "These examples are reference samples to help users understand the result format before using the calculator.",
    sample1Year: "Example for 2024",
    sample1Body: "Displayed as the Blue Dragon year (Gapjin), with a blue-toned five-element color.",
    sample2Year: "Example for 2025",
    sample2Body: "Displayed as the Blue Snake year (Eulsa), with a blue-toned five-element color.",
    sample3Year: "Example for 2026",
    sample3Body: "Displayed as the Red Horse year (Byeongo), with a red-toned five-element color.",
    sample4Year: "Example for 2027",
    sample4Body: "Displayed as the Red Goat year (Jeongmi), with a red-toned five-element color.",
    homeFaqTitle: "Frequently Asked Questions (Quick Summary)",
    homeFaqQ1: "When are ads shown?",
    homeFaqA1: "The ad area is configured to appear only after an actual calculation result is generated.",
    homeFaqQ2: "Do you store the birth year input?",
    homeFaqA2: "No. The input is used only for instant browser-side calculation and is not stored on the server.",
    homeFaqQ3: "Why can results differ from traditional interpretation?",
    homeFaqA3: "This is a quick lookup tool, so results may differ from professional interpretations that consider Ipchun, lunar dates, and other detailed factors.",
    yearLabel: "Birth Year",
    placeholder: "e.g. 2026",
    submit: "Check",
    invalidYear: "Please enter a valid birth year.",
    footerNote: "We continuously improve content quality and keep calculation rules transparent.",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerContact: "Contact",
    personalityTitle: "Personality Type",
    fortuneTitle: (year) => `${year} Fortune`,
    keywordsLabel: "Keywords",
    cautionLabel: "Watch-out",
    entertainmentNote: "For entertainment purposes.",
    resultLine: (year, name) => `Born in ${year}: <strong>${name}</strong>`,
    colorLabel: (name) => `Color: ${name}`,
    detail: (stem, animal) => `Heavenly Stem: ${stem} / Zodiac: ${animal}`,
    formatName: (color, animal) => `${color} ${animal}`
  },
  es: {
    htmlLang: "es",
    title: "Buscador de Zodiaco Coreano",
    desc: "Ingresa tu ano de nacimiento para ver tu animal y color del zodiaco coreano.",
    topIntroLink: "Intro Zodiaco Coreano",
    topGuideLink: "Zodiaco + Cinco Colores",
    topFaqLink: "Preguntas Frecuentes",
    topNavFinder: "Calculadora",
    topNavAbout: "Acerca de",
    topNavPrivacy: "Privacidad",
    topNavContact: "Contacto",
    introTitle: "Como funciona esta calculadora del zodiaco coreano",
    introP1: "Esta pagina es una herramienta informativa que combina las 12 ramas terrestres y los 10 troncos celestes para mostrar el animal y color del zodiaco coreano segun el ano de nacimiento.",
    introP2: "El resultado incluye el nombre del animal, el color del elemento, un resumen breve de personalidad y una interpretacion de referencia para comparar rapidamente.",
    howTitle: "Base de calculo y uso",
    howItem1Title: "1. Ingresa el ano de nacimiento",
    howItem1Body: "Escribe un ano numerico y el resultado se calcula al instante en el navegador. El dato no se guarda en el servidor.",
    howItem2Title: "2. Ciclo de 60 Gapja",
    howItem2Body: "Usando el ano 4 d.C. como referencia, la herramienta calcula los indices de tronco celeste (10) y rama terrestre (12) para asignar animal y color.",
    howItem3Title: "3. Revisar el resultado",
    howItem3Body: "El panel de resultado muestra imagen del zodiaco, color del elemento, palabras clave y una nota de cuidado. La guia explica mas detalles.",
    limitTitle: "Antes de interpretar el resultado",
    limitItem1: "Es una herramienta de consulta rapida y no reemplaza una interpretacion tradicional completa.",
    limitItem2: "Para nacimientos de enero-febrero, el resultado puede variar con criterio estacional de Ipchun.",
    limitItem3: "Los nombres de animales y costumbres de interpretacion pueden variar segun region y cultura.",
    sampleTitle: "Ejemplos por ano (revision rapida)",
    sampleDesc: "Estos ejemplos son referencias para que el usuario entienda el formato del resultado antes de usar la calculadora.",
    sample1Year: "Ejemplo de 2024",
    sample1Body: "Se muestra como ano del Dragon Azul (Gapjin), con color del elemento en tonos azules.",
    sample2Year: "Ejemplo de 2025",
    sample2Body: "Se muestra como ano de la Serpiente Azul (Eulsa), con color del elemento en tonos azules.",
    sample3Year: "Ejemplo de 2026",
    sample3Body: "Se muestra como ano del Caballo Rojo (Byeongo), con color del elemento en tonos rojos.",
    sample4Year: "Ejemplo de 2027",
    sample4Body: "Se muestra como ano de la Cabra Roja (Jeongmi), con color del elemento en tonos rojos.",
    homeFaqTitle: "Preguntas frecuentes (resumen)",
    homeFaqQ1: "Cuando se muestran los anuncios?",
    homeFaqA1: "El area de anuncios aparece solo despues de que se genera un resultado real del calculo.",
    homeFaqQ2: "Guardan el ano de nacimiento ingresado?",
    homeFaqA2: "No. El dato se usa solo para calculo inmediato en el navegador y no se guarda en el servidor.",
    homeFaqQ3: "Por que puede diferir de la interpretacion tradicional?",
    homeFaqA3: "Es una herramienta de consulta rapida y puede diferir de interpretaciones profesionales que consideran Ipchun, calendario lunar y otros factores.",
    yearLabel: "Ano de nacimiento",
    placeholder: "ej. 2026",
    submit: "Ver",
    invalidYear: "Ingresa un ano de nacimiento valido.",
    footerNote: "Mejoramos continuamente la calidad del contenido y mantenemos claras las reglas de calculo.",
    footerAbout: "Acerca de",
    footerPrivacy: "Privacidad",
    footerContact: "Contacto",
    personalityTitle: "Tipo de Personalidad",
    fortuneTitle: (year) => `Fortuna ${year}`,
    keywordsLabel: "Palabras clave",
    cautionLabel: "Punto de cuidado",
    entertainmentNote: "Interpretacion solo de referencia.",
    resultLine: (year, name) => `Nacido en ${year}: <strong>${name}</strong>`,
    colorLabel: (name) => `Color: ${name}`,
    detail: (stem, animal) => `Tronco celeste: ${stem} / Zodiaco: ${animal}`,
    formatName: (color, animal) => `${animal} ${color}`
  }
};

const form = document.getElementById("zodiacForm");
const yearInput = document.getElementById("birthYear");
const result = document.getElementById("result");
const titleText = document.getElementById("titleText");
const descText = document.getElementById("descText");
const yearLabel = document.getElementById("yearLabel");
const submitBtn = document.getElementById("submitBtn");
const langButtons = document.querySelectorAll(".lang-btn");
const langSwitch = document.querySelector(".lang-switch");
const topIntroLink = document.getElementById("topIntroLink");
const topGuideLink = document.getElementById("topGuideLink");
const topFaqLink = document.getElementById("topFaqLink");
const topNavFinder = document.getElementById("topNavFinder");
const topNavAbout = document.getElementById("topNavAbout");
const topNavPrivacy = document.getElementById("topNavPrivacy");
const topNavContact = document.getElementById("topNavContact");
const introTitle = document.getElementById("introTitle");
const introP1 = document.getElementById("introP1");
const introP2 = document.getElementById("introP2");
const howTitle = document.getElementById("howTitle");
const howItem1Title = document.getElementById("howItem1Title");
const howItem1Body = document.getElementById("howItem1Body");
const howItem2Title = document.getElementById("howItem2Title");
const howItem2Body = document.getElementById("howItem2Body");
const howItem3Title = document.getElementById("howItem3Title");
const howItem3Body = document.getElementById("howItem3Body");
const limitTitle = document.getElementById("limitTitle");
const limitItem1 = document.getElementById("limitItem1");
const limitItem2 = document.getElementById("limitItem2");
const limitItem3 = document.getElementById("limitItem3");
const sampleTitle = document.getElementById("sampleTitle");
const sampleDesc = document.getElementById("sampleDesc");
const sample1Year = document.getElementById("sample1Year");
const sample1Body = document.getElementById("sample1Body");
const sample2Year = document.getElementById("sample2Year");
const sample2Body = document.getElementById("sample2Body");
const sample3Year = document.getElementById("sample3Year");
const sample3Body = document.getElementById("sample3Body");
const sample4Year = document.getElementById("sample4Year");
const sample4Body = document.getElementById("sample4Body");
const homeFaqTitle = document.getElementById("homeFaqTitle");
const homeFaqQ1 = document.getElementById("homeFaqQ1");
const homeFaqA1 = document.getElementById("homeFaqA1");
const homeFaqQ2 = document.getElementById("homeFaqQ2");
const homeFaqA2 = document.getElementById("homeFaqA2");
const homeFaqQ3 = document.getElementById("homeFaqQ3");
const homeFaqA3 = document.getElementById("homeFaqA3");
const footerNote = document.getElementById("footerNote");
const footerAbout = document.getElementById("footerAbout");
const footerPrivacy = document.getElementById("footerPrivacy");
const footerContact = document.getElementById("footerContact");
const mainAdWrap = document.getElementById("mainAdWrap");

let currentLang = "ko";
let lastYear = null;
let resultState = "empty";
let adsInitialized = false;
const LANG_STORAGE_KEY = "site_lang";

const animalFileNameMap = {
  rat: "mouse",
  ox: "cow",
  tiger: "tiger",
  rabbit: "rabbit",
  dragon: "dragon",
  snake: "snake",
  horse: "horse",
  goat: "goat",
  monkey: "monkey",
  rooster: "chicken",
  dog: "dog",
  pig: "pig"
};

const imageFileOverrides = {
  "black pig": "blcak pig.jpg",
  "yellow horse": "yeloow horse.jpg"
};

const zodiacDetails = {
  rat: {
    ko: { meaning: "기민함과 시작의 상징", traits: ["영리함", "적응력"] },
    en: { meaning: "Symbol of agility and new beginnings", traits: ["Smart", "Adaptable"] },
    es: { meaning: "Simbolo de agilidad y nuevos comienzos", traits: ["Inteligente", "Adaptable"] }
  },
  ox: {
    ko: { meaning: "성실함과 꾸준함의 상징", traits: ["인내", "책임감"] },
    en: { meaning: "Symbol of diligence and consistency", traits: ["Patient", "Reliable"] },
    es: { meaning: "Simbolo de diligencia y constancia", traits: ["Paciente", "Confiable"] }
  },
  tiger: {
    ko: { meaning: "용기와 추진력의 상징", traits: ["결단력", "리더십"] },
    en: { meaning: "Symbol of courage and momentum", traits: ["Bold", "Leadership"] },
    es: { meaning: "Simbolo de coraje e impulso", traits: ["Valiente", "Liderazgo"] }
  },
  rabbit: {
    ko: { meaning: "온화함과 조화의 상징", traits: ["섬세함", "배려"] },
    en: { meaning: "Symbol of gentleness and harmony", traits: ["Sensitive", "Considerate"] },
    es: { meaning: "Simbolo de suavidad y armonia", traits: ["Sensible", "Considerado"] }
  },
  dragon: {
    ko: { meaning: "권위와 비상의 상징", traits: ["카리스마", "도전정신"] },
    en: { meaning: "Symbol of authority and ambition", traits: ["Charismatic", "Ambitious"] },
    es: { meaning: "Simbolo de autoridad y ambicion", traits: ["Carismatico", "Ambicioso"] }
  },
  snake: {
    ko: { meaning: "지혜와 통찰의 상징", traits: ["분석력", "신중함"] },
    en: { meaning: "Symbol of wisdom and insight", traits: ["Analytical", "Prudent"] },
    es: { meaning: "Simbolo de sabiduria y percepcion", traits: ["Analitico", "Prudente"] }
  },
  horse: {
    ko: { meaning: "자유와 활력의 상징", traits: ["활동성", "독립성"] },
    en: { meaning: "Symbol of freedom and vitality", traits: ["Energetic", "Independent"] },
    es: { meaning: "Simbolo de libertad y vitalidad", traits: ["Energetico", "Independiente"] }
  },
  goat: {
    ko: { meaning: "온순함과 예술성의 상징", traits: ["공감력", "감수성"] },
    en: { meaning: "Symbol of kindness and artistry", traits: ["Empathetic", "Artistic"] },
    es: { meaning: "Simbolo de amabilidad y arte", traits: ["Empatico", "Artistico"] }
  },
  monkey: {
    ko: { meaning: "재치와 응용력의 상징", traits: ["유연성", "창의성"] },
    en: { meaning: "Symbol of wit and versatility", traits: ["Flexible", "Creative"] },
    es: { meaning: "Simbolo de ingenio y versatilidad", traits: ["Flexible", "Creativo"] }
  },
  rooster: {
    ko: { meaning: "정확함과 책임의 상징", traits: ["성실성", "자기관리"] },
    en: { meaning: "Symbol of precision and responsibility", traits: ["Disciplined", "Responsible"] },
    es: { meaning: "Simbolo de precision y responsabilidad", traits: ["Disciplinado", "Responsable"] }
  },
  dog: {
    ko: { meaning: "신의와 정의의 상징", traits: ["충성심", "정직함"] },
    en: { meaning: "Symbol of loyalty and justice", traits: ["Loyal", "Honest"] },
    es: { meaning: "Simbolo de lealtad y justicia", traits: ["Leal", "Honesto"] }
  },
  pig: {
    ko: { meaning: "풍요와 복의 상징", traits: ["낙천성", "포용력"] },
    en: { meaning: "Symbol of abundance and fortune", traits: ["Optimistic", "Generous"] },
    es: { meaning: "Simbolo de abundancia y fortuna", traits: ["Optimista", "Generoso"] }
  }
};

const zodiacPersonality = {
  rat: {
    ko: { type: "R-APT 전략가형", summary: "빠르게 상황을 읽고 기회를 설계하는 타입입니다.", keywords: ["판단력", "기획력", "순발력"], caution: "속도를 내기 전에 우선순위를 한 번 더 정리하세요." },
    en: { type: "R-APT Strategist", summary: "You read situations fast and design opportunities.", keywords: ["Judgment", "Planning", "Agility"], caution: "Recheck priorities before moving too fast." },
    es: { type: "R-APT Estratega", summary: "Lees rapido la situacion y diseñas oportunidades.", keywords: ["Juicio", "Planificacion", "Agilidad"], caution: "Revisa prioridades antes de avanzar demasiado rapido." }
  },
  ox: {
    ko: { type: "O-STE 안정형", summary: "꾸준함과 신뢰로 결과를 쌓아가는 타입입니다.", keywords: ["성실성", "지속력", "책임감"], caution: "완벽주의로 속도가 늦어지지 않게 하세요." },
    en: { type: "O-STE Stable Builder", summary: "You build outcomes through consistency and reliability.", keywords: ["Diligence", "Stamina", "Responsibility"], caution: "Avoid slowing down due to perfectionism." },
    es: { type: "O-STE Constructor Estable", summary: "Construyes resultados con constancia y confianza.", keywords: ["Diligencia", "Resistencia", "Responsabilidad"], caution: "Evita frenar por perfeccionismo." }
  },
  tiger: {
    ko: { type: "T-DRV 도전형", summary: "강한 추진력으로 판을 바꾸는 타입입니다.", keywords: ["결단력", "담대함", "리더십"], caution: "강한 표현보다 팀 호흡을 먼저 확인하세요." },
    en: { type: "T-DRV Challenger", summary: "You change momentum with bold drive.", keywords: ["Decisiveness", "Boldness", "Leadership"], caution: "Check team rhythm before pushing hard." },
    es: { type: "T-DRV Retador", summary: "Cambias el ritmo con impulso y valentia.", keywords: ["Decision", "Audacia", "Liderazgo"], caution: "Revisa el ritmo del equipo antes de presionar." }
  },
  rabbit: {
    ko: { type: "B-HRM 조율형", summary: "관계를 부드럽게 연결해 균형을 만드는 타입입니다.", keywords: ["공감", "배려", "조화"], caution: "모두를 맞추려다 본인 결정을 미루지 마세요." },
    en: { type: "B-HRM Harmonizer", summary: "You create balance by connecting people smoothly.", keywords: ["Empathy", "Care", "Harmony"], caution: "Do not delay your own decision for everyone." },
    es: { type: "B-HRM Armonizador", summary: "Creas equilibrio conectando a las personas.", keywords: ["Empatia", "Cuidado", "Armonia"], caution: "No postergues tu decision por complacer a todos." }
  },
  dragon: {
    ko: { type: "D-VIS 비전형", summary: "큰 그림을 제시하고 분위기를 끌어올리는 타입입니다.", keywords: ["카리스마", "비전", "확장성"], caution: "큰 목표를 작은 실행 단위로 나누세요." },
    en: { type: "D-VIS Vision Driver", summary: "You lift momentum with a strong big-picture vision.", keywords: ["Charisma", "Vision", "Scalability"], caution: "Break big goals into smaller execution steps." },
    es: { type: "D-VIS Visionario", summary: "Elevas el impulso con una vision amplia.", keywords: ["Carisma", "Vision", "Expansion"], caution: "Divide metas grandes en pasos pequenos." }
  },
  snake: {
    ko: { type: "S-INS 통찰형", summary: "깊게 분석하고 본질을 찾아내는 타입입니다.", keywords: ["분석력", "집중력", "통찰"], caution: "정보 수집만 하지 말고 결정 시점을 정하세요." },
    en: { type: "S-INS Insight Analyst", summary: "You dive deep and find the core of issues.", keywords: ["Analysis", "Focus", "Insight"], caution: "Set a decision point, not just more research." },
    es: { type: "S-INS Analista", summary: "Analizas a fondo y encuentras lo esencial.", keywords: ["Analisis", "Enfoque", "Intuicion"], caution: "Define un momento de decision, no solo mas analisis." }
  },
  horse: {
    ko: { type: "H-ENE 추진가형", summary: "에너지와 속도로 분위기를 주도하는 타입입니다.", keywords: ["활동성", "독립성", "실행력"], caution: "중간 점검 없이 달리면 실수가 커질 수 있습니다." },
    en: { type: "H-ENE Momentum Driver", summary: "You lead with energy, speed, and action.", keywords: ["Energy", "Independence", "Execution"], caution: "Add checkpoints to prevent avoidable mistakes." },
    es: { type: "H-ENE Impulsor", summary: "Lideras con energia, velocidad y accion.", keywords: ["Energia", "Independencia", "Ejecucion"], caution: "Incluye revisiones para evitar errores." }
  },
  goat: {
    ko: { type: "G-ART 감성형", summary: "섬세한 감각으로 팀의 분위기를 살리는 타입입니다.", keywords: ["감수성", "공감", "창의성"], caution: "감정 소모를 줄이기 위해 경계를 설정하세요." },
    en: { type: "G-ART Sensitive Creator", summary: "You improve team atmosphere with refined sensitivity.", keywords: ["Sensitivity", "Empathy", "Creativity"], caution: "Set boundaries to avoid emotional burnout." },
    es: { type: "G-ART Creador Sensible", summary: "Mejoras el ambiente con sensibilidad fina.", keywords: ["Sensibilidad", "Empatia", "Creatividad"], caution: "Define limites para evitar desgaste emocional." }
  },
  monkey: {
    ko: { type: "M-FLX 전환형", summary: "변화에 빠르게 대응하며 해법을 찾아내는 타입입니다.", keywords: ["재치", "유연성", "응용력"], caution: "아이디어를 끝까지 실행하는 루틴을 만드세요." },
    en: { type: "M-FLX Adaptive Solver", summary: "You react fast to change and find practical solutions.", keywords: ["Wit", "Flexibility", "Versatility"], caution: "Build a routine to finish what you start." },
    es: { type: "M-FLX Solucionador Flexible", summary: "Respondes rapido al cambio y encuentras soluciones.", keywords: ["Ingenio", "Flexibilidad", "Versatilidad"], caution: "Crea una rutina para cerrar lo que empiezas." }
  },
  rooster: {
    ko: { type: "R-PRC 정밀형", summary: "기준과 디테일을 지켜 완성도를 높이는 타입입니다.", keywords: ["정확성", "규율", "책임"], caution: "비판보다 개선 제안의 비율을 높이세요." },
    en: { type: "R-PRC Precision Keeper", summary: "You raise quality through standards and detail.", keywords: ["Accuracy", "Discipline", "Responsibility"], caution: "Offer more improvement ideas than criticism." },
    es: { type: "R-PRC Preciso", summary: "Elevas la calidad con estandares y detalle.", keywords: ["Precision", "Disciplina", "Responsabilidad"], caution: "Da mas propuestas de mejora que critica." }
  },
  dog: {
    ko: { type: "D-TRU 신뢰형", summary: "원칙과 신의를 지키며 주변을 안정시키는 타입입니다.", keywords: ["충성", "정의감", "신뢰"], caution: "과도한 책임감으로 본인 휴식을 놓치지 마세요." },
    en: { type: "D-TRU Trust Guardian", summary: "You stabilize teams with loyalty and principles.", keywords: ["Loyalty", "Fairness", "Trust"], caution: "Do not sacrifice your recovery for duty." },
    es: { type: "D-TRU Guardian Confiable", summary: "Aportas estabilidad con lealtad y principios.", keywords: ["Lealtad", "Justicia", "Confianza"], caution: "No sacrifiques tu descanso por responsabilidad." }
  },
  pig: {
    ko: { type: "P-ABN 포용형", summary: "따뜻한 에너지로 관계와 기회를 키우는 타입입니다.", keywords: ["포용력", "낙천성", "관계력"], caution: "좋은 기회라도 기준 없이 수락하지 마세요." },
    en: { type: "P-ABN Generous Connector", summary: "You grow relationships and chances with warm energy.", keywords: ["Generosity", "Optimism", "Networking"], caution: "Do not accept every opportunity without criteria." },
    es: { type: "P-ABN Conector Generoso", summary: "Haces crecer relaciones y oportunidades con calidez.", keywords: ["Generosidad", "Optimismo", "Relaciones"], caution: "No aceptes todo sin criterios claros." }
  }
};

const zodiacFortune = {
  rat: { ko: "네트워크 확장운이 강합니다. 작은 협업 제안이 큰 기회로 연결될 수 있습니다.", en: "Networking luck is strong. Small collaborations can grow into major opportunities.", es: "La suerte social es fuerte. Colaboraciones pequenas pueden crecer mucho." },
  ox: { ko: "꾸준히 해오던 일이 성과로 보이기 시작합니다. 루틴 유지가 핵심입니다.", en: "Steady work starts turning into visible results. Consistent routines are key.", es: "El trabajo constante empieza a rendir frutos. Mantener rutina es clave." },
  tiger: { ko: "도전운이 상승하지만 무리한 확장은 금물입니다. 우선순위 1~2개에 집중하세요.", en: "Challenge luck rises, but avoid overexpansion. Focus on one or two priorities.", es: "Sube la energia de reto, pero evita expandirte de mas. Enfocate en 1 o 2 prioridades." },
  rabbit: { ko: "관계운이 좋아 조율자 역할에서 빛납니다. 경계 설정이 피로를 줄입니다.", en: "Relationship luck is favorable, and mediation shines. Boundaries reduce burnout.", es: "La suerte en relaciones favorece tu rol de mediador. Poner limites evita desgaste." },
  dragon: { ko: "리더십 운이 강한 해입니다. 큰 목표는 단계별 실행으로 안정화하세요.", en: "Leadership momentum is strong this year. Break big goals into phased execution.", es: "El impulso de liderazgo es fuerte este ano. Divide metas grandes en fases." },
  snake: { ko: "학습운과 분석운이 좋습니다. 배운 내용을 바로 실행에 옮기면 성과가 큽니다.", en: "Learning and analysis luck are strong. Apply what you learn quickly for results.", es: "La suerte de aprendizaje y analisis es alta. Aplica rapido lo aprendido." },
  horse: { ko: "이동·변화운이 활발합니다. 속도는 강점이지만 체크리스트를 함께 쓰세요.", en: "Movement and change are active. Speed is a strength, but use checklists.", es: "Hay mucha energia de cambio. La velocidad ayuda, pero usa listas de control." },
  goat: { ko: "창의운이 상승합니다. 아이디어를 기록하고 작은 시도로 검증해 보세요.", en: "Creative luck rises. Document ideas and validate with small experiments.", es: "Sube la suerte creativa. Registra ideas y validalas con pruebas pequenas." },
  monkey: { ko: "기획 전환운이 좋아 방향 수정이 유리합니다. 단, 마감 기준은 분명히 하세요.", en: "Pivot luck is favorable, making strategy changes useful. Keep clear deadlines.", es: "La suerte para pivotar es favorable. Eso si, define plazos claros." },
  rooster: { ko: "평가·검토운이 강합니다. 품질 개선 프로젝트에서 인정받기 쉽습니다.", en: "Review and quality luck are strong. Improvement projects gain recognition.", es: "La suerte en revision y calidad es fuerte. Los proyectos de mejora destacan." },
  dog: { ko: "신뢰 자산이 쌓이는 해입니다. 약속 관리가 곧 기회 확장으로 이어집니다.", en: "Trust capital grows this year. Keeping promises expands opportunities.", es: "Este ano crece tu capital de confianza. Cumplir acuerdos abre oportunidades." },
  pig: { ko: "재물·관계운이 함께 올라옵니다. 기회가 많아도 선택과 집중이 중요합니다.", en: "Resource and relationship luck both improve. Choose carefully among many options.", es: "Mejoran recursos y relaciones. Con muchas opciones, elige con foco." }
};

function getGanji(year) {
  const stemIndex = ((year - 4) % 10 + 10) % 10;
  const branchIndex = ((year - 4) % 12 + 12) % 12;

  return {
    stem: heavenlyStems[stemIndex],
    animal: earthBranches[branchIndex]
  };
}

function setLanguage(lang) {
  if (!uiText[lang]) {
    return;
  }
  currentLang = lang;
  const text = uiText[lang];

  document.documentElement.lang = text.htmlLang;
  titleText.textContent = text.title;
  descText.textContent = text.desc;
  yearLabel.textContent = text.yearLabel;
  yearInput.placeholder = text.placeholder;
  submitBtn.textContent = text.submit;
  topIntroLink.textContent = text.topIntroLink;
  topGuideLink.textContent = text.topGuideLink;
  topFaqLink.textContent = text.topFaqLink;
  topNavFinder.textContent = text.topNavFinder;
  topNavAbout.textContent = text.topNavAbout;
  topNavPrivacy.textContent = text.topNavPrivacy;
  topNavContact.textContent = text.topNavContact;
  introTitle.textContent = text.introTitle;
  introP1.textContent = text.introP1;
  introP2.textContent = text.introP2;
  howTitle.textContent = text.howTitle;
  howItem1Title.textContent = text.howItem1Title;
  howItem1Body.textContent = text.howItem1Body;
  howItem2Title.textContent = text.howItem2Title;
  howItem2Body.textContent = text.howItem2Body;
  howItem3Title.textContent = text.howItem3Title;
  howItem3Body.textContent = text.howItem3Body;
  limitTitle.textContent = text.limitTitle;
  limitItem1.textContent = text.limitItem1;
  limitItem2.textContent = text.limitItem2;
  limitItem3.textContent = text.limitItem3;
  sampleTitle.textContent = text.sampleTitle;
  sampleDesc.textContent = text.sampleDesc;
  sample1Year.textContent = text.sample1Year;
  sample1Body.textContent = text.sample1Body;
  sample2Year.textContent = text.sample2Year;
  sample2Body.textContent = text.sample2Body;
  sample3Year.textContent = text.sample3Year;
  sample3Body.textContent = text.sample3Body;
  sample4Year.textContent = text.sample4Year;
  sample4Body.textContent = text.sample4Body;
  homeFaqTitle.textContent = text.homeFaqTitle;
  homeFaqQ1.textContent = text.homeFaqQ1;
  homeFaqA1.textContent = text.homeFaqA1;
  homeFaqQ2.textContent = text.homeFaqQ2;
  homeFaqA2.textContent = text.homeFaqA2;
  homeFaqQ3.textContent = text.homeFaqQ3;
  homeFaqA3.textContent = text.homeFaqA3;
  footerNote.textContent = text.footerNote;
  footerAbout.textContent = text.footerAbout;
  footerPrivacy.textContent = text.footerPrivacy;
  footerContact.textContent = text.footerContact;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore storage errors in restricted environments.
  }

  if (resultState === "success" && lastYear !== null) {
    renderSuccess(lastYear);
  } else if (resultState === "error") {
    renderError();
  }
}

function renderError() {
  resultState = "error";
  result.style.backgroundColor = "#f8fafc";
  result.innerHTML = `<p>${uiText[currentLang].invalidYear}</p>`;
  if (mainAdWrap) {
    mainAdWrap.hidden = true;
  }
}

function renderSuccess(year) {
  const ganji = getGanji(year);
  const text = uiText[currentLang];
  const animalName = ganji.animal[currentLang];
  const colorName = ganji.stem.color[currentLang];
  const coloredName = text.formatName(colorName, animalName);
  const stemColorEn = ganji.stem.color.en.toLowerCase();
  const animalKey = ganji.animal.en.toLowerCase();
  const detail = zodiacDetails[animalKey]?.[currentLang];
  const personality = zodiacPersonality[animalKey]?.[currentLang];
  const fortune = zodiacFortune[animalKey]?.[currentLang];
  const currentYear = new Date().getFullYear();
  const animalFileName = animalFileNameMap[animalKey];
  const defaultImageFileName = `${stemColorEn} ${animalFileName}.jpg`;
  const imageFileName = imageFileOverrides[`${stemColorEn} ${animalFileName}`] || defaultImageFileName;
  const imagePath = `image/${imageFileName}`;

  resultState = "success";
  result.style.backgroundColor = `${ganji.stem.colorHex}1f`;
  result.innerHTML = `
    <div class="result-content">
      <div class="animal-figure">
        <img src="${imagePath}" alt="${coloredName}">
      </div>
      <div class="result-meta">
        <p class="zodiac-name">${text.resultLine(year, coloredName)}</p>
        <span class="color-tag" style="background:${ganji.stem.colorHex};">${text.colorLabel(colorName)}</span>
        <p class="zodiac-meaning">${detail ? detail.meaning : ""}</p>
        <div class="zodiac-traits">
          ${detail ? detail.traits.map((trait) => `<span class="trait-chip">${trait}</span>`).join("") : ""}
        </div>
        <div class="profile-block">
          <h3>${text.personalityTitle}</h3>
          <p class="profile-type">${personality ? personality.type : ""}</p>
          <p>${personality ? personality.summary : ""}</p>
          <p><strong>${text.keywordsLabel}:</strong> ${personality ? personality.keywords.join(", ") : ""}</p>
          <p><strong>${text.cautionLabel}:</strong> ${personality ? personality.caution : ""}</p>
        </div>
        <div class="fortune-block">
          <h3>${text.fortuneTitle(currentYear)}</h3>
          <p>${fortune || ""}</p>
          <p class="fortune-note">${text.entertainmentNote}</p>
        </div>
        <small>${text.detail(ganji.stem.name, animalName)}</small>
      </div>
    </div>
  `;
  showAdAfterContent();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number(yearInput.value.trim());
  if (!Number.isInteger(year) || year < 1) {
    lastYear = null;
    renderError();
    return;
  }

  lastYear = year;
  renderSuccess(year);
});

yearInput.addEventListener("dblclick", () => {
  yearInput.focus();
  yearInput.select();
});

if (langSwitch) {
  langSwitch.addEventListener("click", (event) => {
    const target = event.target.closest(".lang-btn");
    if (!target) {
      return;
    }
    event.preventDefault();
    const nextLang = target.dataset.lang;
    if (nextLang && uiText[nextLang]) {
      setLanguage(nextLang);
    }
  });
}

function initAdsOnce() {
  if (adsInitialized) {
    return;
  }
  if (!mainAdWrap) {
    return;
  }
  let adUnit = mainAdWrap.querySelector(".adsbygoogle");
  if (!adUnit) {
    adUnit = document.createElement("ins");
    adUnit.className = "adsbygoogle";
    adUnit.style.display = "block";
    adUnit.setAttribute("data-ad-client", "ca-pub-1729963445470866");
    adUnit.setAttribute("data-ad-slot", "0000000000");
    adUnit.setAttribute("data-ad-format", "auto");
    adUnit.setAttribute("data-full-width-responsive", "true");
    mainAdWrap.appendChild(adUnit);
  }
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    adsInitialized = true;
  } catch (error) {
    // Ignore init errors in local/dev environments.
  }
}

function showAdAfterContent() {
  if (!mainAdWrap || resultState !== "success") {
    return;
  }
  if (result.textContent.trim().length < 20) {
    return;
  }
  mainAdWrap.hidden = false;
  initAdsOnce();
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && uiText[saved]) {
      return saved;
    }
  } catch (error) {
    // Ignore storage errors in restricted environments.
  }
  return "ko";
}

setLanguage(getSavedLanguage());
