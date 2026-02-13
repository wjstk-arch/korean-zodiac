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
    footerNote: "콘텐츠 품질 개선을 위해 계산 원리와 기준을 지속적으로 업데이트합니다.",
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
    footerNote: "We continuously improve content quality and keep calculation rules transparent.",
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
    footerNote: "Mejoramos continuamente la calidad del contenido y mantenemos claras las reglas de calculo.",
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
const footerNote = document.getElementById("footerNote");
const footerAbout = document.getElementById("footerAbout");
const footerPrivacy = document.getElementById("footerPrivacy");
const footerContact = document.getElementById("footerContact");

let currentLang = "ko";
let lastYear = null;
let resultState = "empty";
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
