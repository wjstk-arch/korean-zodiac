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
    yearLabel: "출생년도",
    placeholder: "예: 2026",
    submit: "확인하기",
    invalidYear: "올바른 출생년도를 입력해 주세요.",
    guideTitle: "한국 띠와 오행 색 기준",
    guideP1: "이 사이트는 출생년도를 기준으로 십간(천간)과 십이지(지지)를 조합해 띠와 색을 계산합니다. 지지는 12년 주기, 천간은 10년 주기로 순환하며 두 체계가 만나 60갑자 주기를 구성합니다.",
    guideP2: "색상 표기는 오행의 관용 표현을 따릅니다. 파랑(목), 빨강(화), 노랑(토), 하양(금), 검정(수)으로 표시해 띠와 함께 오행 색 흐름을 쉽게 확인할 수 있습니다.",
    guideCard1Title: "계산 기준점",
    guideCard1Body: "서기 4년을 기준으로 나머지 연산을 적용해 천간/지지 인덱스를 계산합니다.",
    guideCard2Title: "표기 언어",
    guideCard2Body: "한국어, 영어, 스페인어를 지원하며 결과는 동일한 계산식을 공유합니다.",
    guideCard3Title: "이미지 매핑",
    guideCard3Body: "띠 동물과 오행 색을 조합해 로컬 이미지 파일을 표시합니다.",
    faqTitle: "자주 묻는 질문",
    faqQ1: "음력 생일 기준과 다른가요?",
    faqA1: "현재 도구는 간편 조회용으로 양력 연도 기준을 사용합니다. 절입(입춘) 기준 세부 해석은 별도 검토가 필요합니다.",
    faqQ2: "광고가 바로 보이지 않아요.",
    faqA2: "AdSense 검토/승인 상태, 광고 단위 설정, 트래픽/정책 상태에 따라 노출까지 시간이 걸릴 수 있습니다.",
    faqQ3: "데이터를 저장하나요?",
    faqA3: "출생연도 입력값은 브라우저에서 즉시 계산에만 사용하며 서버 저장 기능은 없습니다.",
    footerNote: "콘텐츠 품질 개선을 위해 계산 원리와 기준을 지속적으로 업데이트합니다.",
    footerKoreanZodiac: "Korean Zodiac",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerContact: "Contact",
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
    yearLabel: "Birth Year",
    placeholder: "e.g. 2026",
    submit: "Check",
    invalidYear: "Please enter a valid birth year.",
    guideTitle: "Korean Zodiac and Five Elements Colors",
    guideP1: "This site calculates your zodiac animal and color by combining the 10 heavenly stems and 12 earthly branches from your birth year. Their cycles combine into the 60-gapja cycle.",
    guideP2: "Color labels follow common five-elements conventions: blue (wood), red (fire), yellow (earth), white (metal), and black (water).",
    guideCard1Title: "Reference Year",
    guideCard1Body: "The calculation uses CE year 4 as the index baseline for stem and branch modulo math.",
    guideCard2Title: "Languages",
    guideCard2Body: "Korean, English, and Spanish are supported with the same calculation logic.",
    guideCard3Title: "Image Mapping",
    guideCard3Body: "Animal and color combinations are rendered using local image files.",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "Is this different from lunar calendar interpretation?",
    faqA1: "Yes. This tool is a quick lookup based on the solar birth year. Detailed interpretation using seasonal boundaries (Ipchun) may differ.",
    faqQ2: "Why are ads not visible immediately?",
    faqA2: "Ad visibility depends on AdSense review status, ad unit setup, policy status, and traffic conditions.",
    faqQ3: "Do you store my birth year?",
    faqA3: "No. The input year is used only for instant browser-side calculation and is not stored on the server.",
    footerNote: "We continuously improve content quality and keep calculation rules transparent.",
    footerKoreanZodiac: "Korean Zodiac",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerContact: "Contact",
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
    yearLabel: "Ano de nacimiento",
    placeholder: "ej. 2026",
    submit: "Ver",
    invalidYear: "Ingresa un ano de nacimiento valido.",
    guideTitle: "Zodiaco Coreano y Colores de los Cinco Elementos",
    guideP1: "Este sitio calcula tu animal y color combinando los 10 troncos celestes y las 12 ramas terrestres segun tu ano de nacimiento. Sus ciclos forman el sistema de 60 gapja.",
    guideP2: "Los colores siguen la convencion comun de los cinco elementos: azul (madera), rojo (fuego), amarillo (tierra), blanco (metal) y negro (agua).",
    guideCard1Title: "Ano de referencia",
    guideCard1Body: "El calculo usa el ano 4 d.C. como base para los indices de tronco y rama.",
    guideCard2Title: "Idiomas",
    guideCard2Body: "Se admiten coreano, ingles y espanol con la misma logica de calculo.",
    guideCard3Title: "Mapeo de imagenes",
    guideCard3Body: "Las combinaciones de animal y color se muestran con archivos de imagen locales.",
    faqTitle: "Preguntas Frecuentes",
    faqQ1: "Es diferente de la interpretacion lunar?",
    faqA1: "Si. Esta herramienta es una consulta rapida basada en el ano solar. La interpretacion detallada con limites estacionales puede variar.",
    faqQ2: "Por que los anuncios no aparecen de inmediato?",
    faqA2: "La visibilidad depende del estado de revision de AdSense, la configuracion del bloque, las politicas y el trafico.",
    faqQ3: "Guardan mi ano de nacimiento?",
    faqA3: "No. El ano ingresado se usa solo para calculo inmediato en el navegador y no se guarda en el servidor.",
    footerNote: "Mejoramos continuamente la calidad del contenido y mantenemos claras las reglas de calculo.",
    footerKoreanZodiac: "Zodiaco Coreano",
    footerAbout: "Acerca de",
    footerPrivacy: "Privacidad",
    footerContact: "Contacto",
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
const guideTitle = document.getElementById("guideTitle");
const guideP1 = document.getElementById("guideP1");
const guideP2 = document.getElementById("guideP2");
const guideCard1Title = document.getElementById("guideCard1Title");
const guideCard1Body = document.getElementById("guideCard1Body");
const guideCard2Title = document.getElementById("guideCard2Title");
const guideCard2Body = document.getElementById("guideCard2Body");
const guideCard3Title = document.getElementById("guideCard3Title");
const guideCard3Body = document.getElementById("guideCard3Body");
const faqTitle = document.getElementById("faqTitle");
const faqQ1 = document.getElementById("faqQ1");
const faqA1 = document.getElementById("faqA1");
const faqQ2 = document.getElementById("faqQ2");
const faqA2 = document.getElementById("faqA2");
const faqQ3 = document.getElementById("faqQ3");
const faqA3 = document.getElementById("faqA3");
const footerNote = document.getElementById("footerNote");
const footerKoreanZodiac = document.getElementById("footerKoreanZodiac");
const footerAbout = document.getElementById("footerAbout");
const footerPrivacy = document.getElementById("footerPrivacy");
const footerContact = document.getElementById("footerContact");

let currentLang = "ko";
let lastYear = null;
let resultState = "empty";

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

function getGanji(year) {
  const stemIndex = ((year - 4) % 10 + 10) % 10;
  const branchIndex = ((year - 4) % 12 + 12) % 12;

  return {
    stem: heavenlyStems[stemIndex],
    animal: earthBranches[branchIndex]
  };
}

function setLanguage(lang) {
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
  guideTitle.textContent = text.guideTitle;
  guideP1.textContent = text.guideP1;
  guideP2.textContent = text.guideP2;
  guideCard1Title.textContent = text.guideCard1Title;
  guideCard1Body.textContent = text.guideCard1Body;
  guideCard2Title.textContent = text.guideCard2Title;
  guideCard2Body.textContent = text.guideCard2Body;
  guideCard3Title.textContent = text.guideCard3Title;
  guideCard3Body.textContent = text.guideCard3Body;
  faqTitle.textContent = text.faqTitle;
  faqQ1.textContent = text.faqQ1;
  faqA1.textContent = text.faqA1;
  faqQ2.textContent = text.faqQ2;
  faqA2.textContent = text.faqA2;
  faqQ3.textContent = text.faqQ3;
  faqA3.textContent = text.faqA3;
  footerNote.textContent = text.footerNote;
  footerKoreanZodiac.textContent = text.footerKoreanZodiac;
  footerAbout.textContent = text.footerAbout;
  footerPrivacy.textContent = text.footerPrivacy;
  footerContact.textContent = text.footerContact;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

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
}

function renderSuccess(year) {
  const ganji = getGanji(year);
  const text = uiText[currentLang];
  const animalName = ganji.animal[currentLang];
  const colorName = ganji.stem.color[currentLang];
  const coloredName = text.formatName(colorName, animalName);
  const stemColorEn = ganji.stem.color.en.toLowerCase();
  const animalKey = ganji.animal.en.toLowerCase();
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
        <small>${text.detail(ganji.stem.name, animalName)}</small>
      </div>
    </div>
  `;
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

function initAds() {
  const adUnits = document.querySelectorAll(".adsbygoogle");
  adUnits.forEach(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      // Ignore init errors in local/dev environments.
    }
  });
}

window.addEventListener("load", initAds);

setLanguage("ko");
