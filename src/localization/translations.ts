export type Language =
  | 'en'
  | 'ru'
  | 'es'
  | 'de'
  | 'fr'
  | 'pt'
  | 'ja'
  | 'zh'
  | 'ko'
  | 'uk'
  | 'it'
  | 'ar'
  | 'hi'
  | 'nl'
  | 'pl'
  | 'tr';

export interface Translations {
  // App Name
  appName: string;
  appTagline: string;
  appVersion: string;
  appDescription: string;

  // Navigation & Actions
  back: string;
  close: string;
  exit: string;
  continue: string;
  start: string;
  finish: string;
  loading: string;

  // Home Screen
  chooseYourAdventure: string;
  featuredStories: string;
  premium: string;
  minutes: string;
  involvement: string;

  // Story Detail
  by: string;
  endings: string;
  yourProgress: string;
  scenesVisited: string;
  of: string;
  story: string;
  startAdventure: string;
  continueStory: string;

  // Story Play
  loadingStory: string;
  theEnd: string;
  finishStory: string;

  // Settings
  settings: string;
  theme: string;
  language: string;
  audio: string;
  soundEffects: string;
  soundEffectsDescription: string;
  feedback: string;
  hapticFeedback: string;
  hapticFeedbackDescription: string;
  textSize: string;
  textSizeDescription: string;
  textSizeSmaller: string;
  textSizeLarger: string;
  textSizePreview: string;

  // Themes
  themeLight: string;
  themeDark: string;
  themeSolar: string;
  themeMono: string;

  // Genres
  genreFantasy: string;
  genreSciFi: string;
  genreMystery: string;
  genreRomance: string;
  genreHorror: string;
  genreAdventure: string;
  genreDetective: string;

  // Involvement Levels
  involvementLow: string;
  involvementMedium: string;
  involvementHigh: string;
}

export const translations: Record<Language, Translations> = {
  // English
  en: {
    appName: 'FableFlow',
    appTagline: 'Choose Your Adventure',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Interactive Story Experience',

    back: 'Back',
    close: 'Close',
    exit: 'Exit',
    continue: 'Continue',
    start: 'Start',
    finish: 'Finish',
    loading: 'Loading',

    chooseYourAdventure: 'Choose Your Adventure',
    featuredStories: 'Featured Stories',
    premium: 'Popular',
    minutes: 'minutes',
    involvement: 'Involvement',

    by: 'by',
    endings: 'endings',
    yourProgress: 'Your Progress',
    scenesVisited: 'scenes visited',
    of: 'of',
    story: 'Story',
    startAdventure: 'Start Adventure',
    continueStory: 'Continue Story',

    loadingStory: 'Loading story...',
    theEnd: 'THE END',
    finishStory: 'Finish Story',

    settings: 'Settings',
    theme: 'Theme',
    language: 'Language',
    audio: 'Audio',
    soundEffects: 'Sound Effects',
    soundEffectsDescription: 'Enable sound effects during gameplay',
    feedback: 'Feedback',
    hapticFeedback: 'Haptic Feedback',
    hapticFeedbackDescription: 'Enable vibration feedback for interactions',
    textSize: 'Text Size',
    textSizeDescription: 'Adjust reading text size',
    textSizeSmaller: 'Smaller',
    textSizeLarger: 'Larger',
    textSizePreview: 'The quick brown fox jumps over the lazy dog',

    themeLight: 'Light',
    themeDark: 'Dark',
    themeSolar: 'Solar',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Science Fiction',
    genreMystery: 'Mystery',
    genreRomance: 'Romance',
    genreHorror: 'Horror',
    genreAdventure: 'Adventure',
    genreDetective: 'Detective',

    involvementLow: 'Low',
    involvementMedium: 'Medium',
    involvementHigh: 'High',
  },

  // Russian (Русский)
  ru: {
    appName: 'FableFlow',
    appTagline: 'Выберите своё приключение',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Интерактивные истории',

    back: 'Назад',
    close: 'Закрыть',
    exit: 'Выход',
    continue: 'Продолжить',
    start: 'Начать',
    finish: 'Завершить',
    loading: 'Загрузка',

    chooseYourAdventure: 'Выберите своё приключение',
    featuredStories: 'Избранные истории',
    premium: 'Популярное',
    minutes: 'минут',
    involvement: 'Вовлеченность',

    by: 'автор',
    endings: 'концовок',
    yourProgress: 'Ваш прогресс',
    scenesVisited: 'сцен посещено',
    of: 'из',
    story: 'История',
    startAdventure: 'Начать приключение',
    continueStory: 'Продолжить историю',

    loadingStory: 'Загрузка истории...',
    theEnd: 'КОНЕЦ',
    finishStory: 'Завершить историю',

    settings: 'Настройки',
    theme: 'Тема',
    language: 'Язык',
    audio: 'Аудио',
    soundEffects: 'Звуковые эффекты',
    soundEffectsDescription: 'Включить звуковые эффекты во время игры',
    feedback: 'Обратная связь',
    hapticFeedback: 'Тактильная отдача',
    hapticFeedbackDescription: 'Включить вибрацию при взаимодействии',
    textSize: 'Размер текста',
    textSizeDescription: 'Настройка размера текста для чтения',
    textSizeSmaller: 'Меньше',
    textSizeLarger: 'Больше',
    textSizePreview: 'Съешь ещё этих мягких французских булок',

    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    themeSolar: 'Солнечная',
    themeMono: 'Моно',

    genreFantasy: 'Фэнтези',
    genreSciFi: 'Научная фантастика',
    genreMystery: 'Мистика',
    genreRomance: 'Романтика',
    genreHorror: 'Ужасы',
    genreAdventure: 'Приключения',
    genreDetective: 'Детектив',

    involvementLow: 'Низкая',
    involvementMedium: 'Средняя',
    involvementHigh: 'Высокая',
  },

  // Spanish (Español)
  es: {
    appName: 'FableFlow',
    appTagline: 'Elige tu aventura',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Experiencia de historia interactiva',

    back: 'Atrás',
    close: 'Cerrar',
    exit: 'Salir',
    continue: 'Continuar',
    start: 'Comenzar',
    finish: 'Finalizar',
    loading: 'Cargando',

    chooseYourAdventure: 'Elige tu aventura',
    featuredStories: 'Historias destacadas',
    premium: 'Popular',
    minutes: 'minutos',
    involvement: 'Participación',

    by: 'por',
    endings: 'finales',
    yourProgress: 'Tu progreso',
    scenesVisited: 'escenas visitadas',
    of: 'de',
    story: 'Historia',
    startAdventure: 'Comenzar aventura',
    continueStory: 'Continuar historia',

    loadingStory: 'Cargando historia...',
    theEnd: 'FIN',
    finishStory: 'Finalizar historia',

    settings: 'Configuración',
    theme: 'Tema',
    language: 'Idioma',
    audio: 'Audio',
    soundEffects: 'Efectos de sonido',
    soundEffectsDescription: 'Activar efectos de sonido durante el juego',
    feedback: 'Retroalimentación',
    hapticFeedback: 'Retroalimentación háptica',
    hapticFeedbackDescription: 'Activar vibración para interacciones',
    textSize: 'Tamaño de texto',
    textSizeDescription: 'Ajustar el tamaño del texto de lectura',
    textSizeSmaller: 'Más pequeño',
    textSizeLarger: 'Más grande',
    textSizePreview: 'El veloz murciélago hindú comía feliz cardillo',

    themeLight: 'Claro',
    themeDark: 'Oscuro',
    themeSolar: 'Solar',
    themeMono: 'Mono',

    genreFantasy: 'Fantasía',
    genreSciFi: 'Ciencia ficción',
    genreMystery: 'Misterio',
    genreRomance: 'Romance',
    genreHorror: 'Terror',
    genreAdventure: 'Aventura',
    genreDetective: 'Detective',

    involvementLow: 'Baja',
    involvementMedium: 'Media',
    involvementHigh: 'Alta',
  },

  // German (Deutsch)
  de: {
    appName: 'FableFlow',
    appTagline: 'Wähle dein Abenteuer',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Interaktives Geschichtenerlebnis',

    back: 'Zurück',
    close: 'Schließen',
    exit: 'Beenden',
    continue: 'Fortsetzen',
    start: 'Starten',
    finish: 'Beenden',
    loading: 'Lädt',

    chooseYourAdventure: 'Wähle dein Abenteuer',
    featuredStories: 'Empfohlene Geschichten',
    premium: 'Beliebt',
    minutes: 'Minuten',
    involvement: 'Beteiligung',

    by: 'von',
    endings: 'Enden',
    yourProgress: 'Dein Fortschritt',
    scenesVisited: 'Szenen besucht',
    of: 'von',
    story: 'Geschichte',
    startAdventure: 'Abenteuer starten',
    continueStory: 'Geschichte fortsetzen',

    loadingStory: 'Geschichte wird geladen...',
    theEnd: 'ENDE',
    finishStory: 'Geschichte beenden',

    settings: 'Einstellungen',
    theme: 'Design',
    language: 'Sprache',
    audio: 'Audio',
    soundEffects: 'Soundeffekte',
    soundEffectsDescription: 'Soundeffekte während des Spiels aktivieren',
    feedback: 'Rückmeldung',
    hapticFeedback: 'Haptisches Feedback',
    hapticFeedbackDescription:
      'Vibrationsfeedback für Interaktionen aktivieren',
    textSize: 'Textgröße',
    textSizeDescription: 'Leseschriftgröße anpassen',
    textSizeSmaller: 'Kleiner',
    textSizeLarger: 'Größer',
    textSizePreview: 'Franz jagt im komplett verwahrlosten Taxi quer',

    themeLight: 'Hell',
    themeDark: 'Dunkel',
    themeSolar: 'Solar',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Science-Fiction',
    genreMystery: 'Mystery',
    genreRomance: 'Romantik',
    genreHorror: 'Horror',
    genreAdventure: 'Abenteuer',
    genreDetective: 'Detektiv',

    involvementLow: 'Niedrig',
    involvementMedium: 'Mittel',
    involvementHigh: 'Hoch',
  },

  // French (Français)
  fr: {
    appName: 'FableFlow',
    appTagline: 'Choisissez votre aventure',
    appVersion: 'FableFlow v1.0',
    appDescription: "Expérience d'histoire interactive",

    back: 'Retour',
    close: 'Fermer',
    exit: 'Quitter',
    continue: 'Continuer',
    start: 'Commencer',
    finish: 'Terminer',
    loading: 'Chargement',

    chooseYourAdventure: 'Choisissez votre aventure',
    featuredStories: 'Histoires en vedette',
    premium: 'Populaire',
    minutes: 'minutes',
    involvement: 'Implication',

    by: 'par',
    endings: 'fins',
    yourProgress: 'Votre progression',
    scenesVisited: 'scènes visitées',
    of: 'sur',
    story: 'Histoire',
    startAdventure: "Commencer l'aventure",
    continueStory: "Continuer l'histoire",

    loadingStory: "Chargement de l'histoire...",
    theEnd: 'FIN',
    finishStory: "Terminer l'histoire",

    settings: 'Paramètres',
    theme: 'Thème',
    language: 'Langue',
    audio: 'Audio',
    soundEffects: 'Effets sonores',
    soundEffectsDescription: 'Activer les effets sonores pendant le jeu',
    feedback: 'Retour',
    hapticFeedback: 'Retour haptique',
    hapticFeedbackDescription:
      'Activer le retour vibratoire pour les interactions',
    textSize: 'Taille du texte',
    textSizeDescription: 'Ajuster la taille du texte de lecture',
    textSizeSmaller: 'Plus petit',
    textSizeLarger: 'Plus grand',
    textSizePreview: 'Portez ce vieux whisky au juge blond qui fume',

    themeLight: 'Clair',
    themeDark: 'Sombre',
    themeSolar: 'Solaire',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Science-fiction',
    genreMystery: 'Mystère',
    genreRomance: 'Romance',
    genreHorror: 'Horreur',
    genreAdventure: 'Aventure',
    genreDetective: 'Détective',

    involvementLow: 'Faible',
    involvementMedium: 'Moyenne',
    involvementHigh: 'Élevée',
  },

  // Portuguese (Português)
  pt: {
    appName: 'FableFlow',
    appTagline: 'Escolha sua aventura',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Experiência de história interativa',

    back: 'Voltar',
    close: 'Fechar',
    exit: 'Sair',
    continue: 'Continuar',
    start: 'Começar',
    finish: 'Finalizar',
    loading: 'Carregando',

    chooseYourAdventure: 'Escolha sua aventura',
    featuredStories: 'Histórias em destaque',
    premium: 'Popular',
    minutes: 'minutos',
    involvement: 'Envolvimento',

    by: 'por',
    endings: 'finais',
    yourProgress: 'Seu progresso',
    scenesVisited: 'cenas visitadas',
    of: 'de',
    story: 'História',
    startAdventure: 'Começar aventura',
    continueStory: 'Continuar história',

    loadingStory: 'Carregando história...',
    theEnd: 'FIM',
    finishStory: 'Finalizar história',

    settings: 'Configurações',
    theme: 'Tema',
    language: 'Idioma',
    audio: 'Áudio',
    soundEffects: 'Efeitos sonoros',
    soundEffectsDescription: 'Ativar efeitos sonoros durante o jogo',
    feedback: 'Feedback',
    hapticFeedback: 'Feedback tátil',
    hapticFeedbackDescription: 'Ativar feedback de vibração para interações',
    textSize: 'Tamanho do texto',
    textSizeDescription: 'Ajustar o tamanho do texto de leitura',
    textSizeSmaller: 'Menor',
    textSizeLarger: 'Maior',
    textSizePreview: 'Gazeta publica hoje no jornal as fúnicas questões',

    themeLight: 'Claro',
    themeDark: 'Escuro',
    themeSolar: 'Solar',
    themeMono: 'Mono',

    genreFantasy: 'Fantasia',
    genreSciFi: 'Ficção científica',
    genreMystery: 'Mistério',
    genreRomance: 'Romance',
    genreHorror: 'Terror',
    genreAdventure: 'Aventura',
    genreDetective: 'Detetive',

    involvementLow: 'Baixo',
    involvementMedium: 'Médio',
    involvementHigh: 'Alto',
  },

  // Japanese (日本語)
  ja: {
    appName: 'FableFlow',
    appTagline: '冒険を選ぼう',
    appVersion: 'FableFlow v1.0',
    appDescription: 'インタラクティブストーリー体験',

    back: '戻る',
    close: '閉じる',
    exit: '終了',
    continue: '続ける',
    start: '開始',
    finish: '完了',
    loading: '読み込み中',

    chooseYourAdventure: '冒険を選ぼう',
    featuredStories: '注目のストーリー',
    premium: '人気',
    minutes: '分',
    involvement: '関与',

    by: '著者',
    endings: 'エンディング',
    yourProgress: 'あなたの進捗',
    scenesVisited: 'シーン訪問済み',
    of: '/',
    story: 'ストーリー',
    startAdventure: '冒険を始める',
    continueStory: 'ストーリーを続ける',

    loadingStory: 'ストーリーを読み込み中...',
    theEnd: '終わり',
    finishStory: 'ストーリーを終了',

    settings: '設定',
    theme: 'テーマ',
    language: '言語',
    audio: 'オーディオ',
    soundEffects: '効果音',
    soundEffectsDescription: 'ゲームプレイ中の効果音を有効にする',
    feedback: 'フィードバック',
    hapticFeedback: '触覚フィードバック',
    hapticFeedbackDescription:
      'インタラクションの振動フィードバックを有効にする',
    textSize: 'テキストサイズ',
    textSizeDescription: '読書用テキストサイズの調整',
    textSizeSmaller: '小さく',
    textSizeLarger: '大きく',
    textSizePreview: 'いろはにほへと ちりぬるを わかよたれそ',

    themeLight: 'ライト',
    themeDark: 'ダーク',
    themeSolar: 'ソーラー',
    themeMono: 'モノ',

    genreFantasy: 'ファンタジー',
    genreSciFi: 'SF',
    genreMystery: 'ミステリー',
    genreRomance: 'ロマンス',
    genreHorror: 'ホラー',
    genreAdventure: 'アドベンチャー',
    genreDetective: '探偵',

    involvementLow: '低',
    involvementMedium: '中',
    involvementHigh: '高',
  },

  // Chinese (中文)
  zh: {
    appName: 'FableFlow',
    appTagline: '选择你的冒险',
    appVersion: 'FableFlow v1.0',
    appDescription: '互动故事体验',

    back: '返回',
    close: '关闭',
    exit: '退出',
    continue: '继续',
    start: '开始',
    finish: '完成',
    loading: '加载中',

    chooseYourAdventure: '选择你的冒险',
    featuredStories: '精选故事',
    premium: '热门',
    minutes: '分钟',
    involvement: '参与度',

    by: '作者',
    endings: '结局',
    yourProgress: '你的进度',
    scenesVisited: '已访问场景',
    of: '/',
    story: '故事',
    startAdventure: '开始冒险',
    continueStory: '继续故事',

    loadingStory: '加载故事中...',
    theEnd: '结束',
    finishStory: '完成故事',

    settings: '设置',
    theme: '主题',
    language: '语言',
    audio: '音频',
    soundEffects: '音效',
    soundEffectsDescription: '在游戏过程中启用音效',
    feedback: '反馈',
    hapticFeedback: '触觉反馈',
    hapticFeedbackDescription: '为交互启用振动反馈',
    textSize: '文字大小',
    textSizeDescription: '调整阅读文字大小',
    textSizeSmaller: '缩小',
    textSizeLarger: '放大',
    textSizePreview: '千里之行，始于足下',

    themeLight: '浅色',
    themeDark: '深色',
    themeSolar: '太阳',
    themeMono: '单色',

    genreFantasy: '奇幻',
    genreSciFi: '科幻',
    genreMystery: '悬疑',
    genreRomance: '浪漫',
    genreHorror: '恐怖',
    genreAdventure: '冒险',
    genreDetective: '侦探',

    involvementLow: '低',
    involvementMedium: '中',
    involvementHigh: '高',
  },

  // Korean (한국어)
  ko: {
    appName: 'FableFlow',
    appTagline: '모험을 선택하세요',
    appVersion: 'FableFlow v1.0',
    appDescription: '인터랙티브 스토리 경험',

    back: '뒤로',
    close: '닫기',
    exit: '나가기',
    continue: '계속',
    start: '시작',
    finish: '완료',
    loading: '로딩 중',

    chooseYourAdventure: '모험을 선택하세요',
    featuredStories: '추천 스토리',
    premium: '인기',
    minutes: '분',
    involvement: '참여도',

    by: '작가',
    endings: '엔딩',
    yourProgress: '진행 상황',
    scenesVisited: '방문한 장면',
    of: '/',
    story: '스토리',
    startAdventure: '모험 시작',
    continueStory: '스토리 계속',

    loadingStory: '스토리 로딩 중...',
    theEnd: '끝',
    finishStory: '스토리 완료',

    settings: '설정',
    theme: '테마',
    language: '언어',
    audio: '오디오',
    soundEffects: '음향 효과',
    soundEffectsDescription: '게임플레이 중 음향 효과 활성화',
    feedback: '피드백',
    hapticFeedback: '햅틱 피드백',
    hapticFeedbackDescription: '상호작용을 위한 진동 피드백 활성화',
    textSize: '텍스트 크기',
    textSizeDescription: '읽기 텍스트 크기 조정',
    textSizeSmaller: '작게',
    textSizeLarger: '크게',
    textSizePreview: '다람쥐 헌 쳇바퀴에 타고파',

    themeLight: '라이트',
    themeDark: '다크',
    themeSolar: '솔라',
    themeMono: '모노',

    genreFantasy: '판타지',
    genreSciFi: 'SF',
    genreMystery: '미스터리',
    genreRomance: '로맨스',
    genreHorror: '공포',
    genreAdventure: '어드벤처',
    genreDetective: '탐정',

    involvementLow: '낮음',
    involvementMedium: '중간',
    involvementHigh: '높음',
  },

  // Ukrainian (Українська)
  uk: {
    appName: 'FableFlow',
    appTagline: 'Обери свою пригоду',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Інтерактивні історії',

    back: 'Назад',
    close: 'Закрити',
    exit: 'Вихід',
    continue: 'Продовжити',
    start: 'Почати',
    finish: 'Завершити',
    loading: 'Завантаження',

    chooseYourAdventure: 'Обери свою пригоду',
    featuredStories: 'Обрані історії',
    premium: 'Популярне',
    minutes: 'хвилин',
    involvement: 'Залученість',

    by: 'автор',
    endings: 'кінцівок',
    yourProgress: 'Ваш прогрес',
    scenesVisited: 'сцен відвідано',
    of: 'з',
    story: 'Історія',
    startAdventure: 'Почати пригоду',
    continueStory: 'Продовжити історію',

    loadingStory: 'Завантаження історії...',
    theEnd: 'КІНЕЦЬ',
    finishStory: 'Завершити історію',

    settings: 'Налаштування',
    theme: 'Тема',
    language: 'Мова',
    audio: 'Аудіо',
    soundEffects: 'Звукові ефекти',
    soundEffectsDescription: 'Увімкнути звукові ефекти під час гри',
    feedback: "Зворотний зв'язок",
    hapticFeedback: 'Тактильний відгук',
    hapticFeedbackDescription: 'Увімкнути вібрацію при взаємодії',
    textSize: 'Розмір тексту',
    textSizeDescription: 'Налаштування розміру тексту для читання',
    textSizeSmaller: 'Менше',
    textSizeLarger: 'Більше',
    textSizePreview: 'Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!',

    themeLight: 'Світла',
    themeDark: 'Темна',
    themeSolar: 'Сонячна',
    themeMono: 'Моно',

    genreFantasy: 'Фентезі',
    genreSciFi: 'Наукова фантастика',
    genreMystery: 'Містика',
    genreRomance: 'Романтика',
    genreHorror: 'Жахи',
    genreAdventure: 'Пригоди',
    genreDetective: 'Детектив',

    involvementLow: 'Низька',
    involvementMedium: 'Середня',
    involvementHigh: 'Висока',
  },

  // Italian (Italiano)
  it: {
    appName: 'FableFlow',
    appTagline: 'Scegli la tua avventura',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Esperienza di storia interattiva',

    back: 'Indietro',
    close: 'Chiudi',
    exit: 'Esci',
    continue: 'Continua',
    start: 'Inizia',
    finish: 'Fine',
    loading: 'Caricamento',

    chooseYourAdventure: 'Scegli la tua avventura',
    featuredStories: 'Storie in evidenza',
    premium: 'Popolare',
    minutes: 'minuti',
    involvement: 'Coinvolgimento',

    by: 'di',
    endings: 'finali',
    yourProgress: 'Il tuo progresso',
    scenesVisited: 'scene visitate',
    of: 'di',
    story: 'Storia',
    startAdventure: 'Inizia avventura',
    continueStory: 'Continua storia',

    loadingStory: 'Caricamento storia...',
    theEnd: 'FINE',
    finishStory: 'Fine storia',

    settings: 'Impostazioni',
    theme: 'Tema',
    language: 'Lingua',
    audio: 'Audio',
    soundEffects: 'Effetti sonori',
    soundEffectsDescription: 'Abilita effetti sonori durante il gioco',
    feedback: 'Feedback',
    hapticFeedback: 'Feedback aptico',
    hapticFeedbackDescription: 'Abilita feedback vibrazione per interazioni',
    textSize: 'Dimensione testo',
    textSizeDescription: 'Regola la dimensione del testo di lettura',
    textSizeSmaller: 'Più piccolo',
    textSizeLarger: 'Più grande',
    textSizePreview: 'Quel fez sghembo copre davanti',

    themeLight: 'Chiaro',
    themeDark: 'Scuro',
    themeSolar: 'Solare',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Fantascienza',
    genreMystery: 'Mistero',
    genreRomance: 'Romantico',
    genreHorror: 'Horror',
    genreAdventure: 'Avventura',
    genreDetective: 'Detective',

    involvementLow: 'Basso',
    involvementMedium: 'Medio',
    involvementHigh: 'Alto',
  },

  // Arabic (العربية)
  ar: {
    appName: 'FableFlow',
    appTagline: 'اختر مغامرتك',
    appVersion: 'FableFlow v1.0',
    appDescription: 'تجربة القصة التفاعلية',

    back: 'رجوع',
    close: 'إغلاق',
    exit: 'خروج',
    continue: 'متابعة',
    start: 'بدء',
    finish: 'إنهاء',
    loading: 'تحميل',

    chooseYourAdventure: 'اختر مغامرتك',
    featuredStories: 'قصص مميزة',
    premium: 'شائع',
    minutes: 'دقائق',
    involvement: 'المشاركة',

    by: 'بواسطة',
    endings: 'نهايات',
    yourProgress: 'تقدمك',
    scenesVisited: 'مشاهد تمت زيارتها',
    of: 'من',
    story: 'قصة',
    startAdventure: 'بدء المغامرة',
    continueStory: 'متابعة القصة',

    loadingStory: 'تحميل القصة...',
    theEnd: 'النهاية',
    finishStory: 'إنهاء القصة',

    settings: 'الإعدادات',
    theme: 'المظهر',
    language: 'اللغة',
    audio: 'الصوت',
    soundEffects: 'المؤثرات الصوتية',
    soundEffectsDescription: 'تمكين المؤثرات الصوتية أثناء اللعب',
    feedback: 'الردود',
    hapticFeedback: 'الردود اللمسية',
    hapticFeedbackDescription: 'تمكين ردود الاهتزاز للتفاعلات',
    textSize: 'حجم النص',
    textSizeDescription: 'ضبط حجم نص القراءة',
    textSizeSmaller: 'أصغر',
    textSizeLarger: 'أكبر',
    textSizePreview: 'صِف خَلقَ خَودِ كَمِثلِ الشَمسِ إِذ بَزَغَت',

    themeLight: 'فاتح',
    themeDark: 'داكن',
    themeSolar: 'شمسي',
    themeMono: 'أحادي',

    genreFantasy: 'خيال',
    genreSciFi: 'خيال علمي',
    genreMystery: 'غموض',
    genreRomance: 'رومانسي',
    genreHorror: 'رعب',
    genreAdventure: 'مغامرة',
    genreDetective: 'تحقيق',

    involvementLow: 'منخفض',
    involvementMedium: 'متوسط',
    involvementHigh: 'مرتفع',
  },

  // Hindi (हिंदी)
  hi: {
    appName: 'FableFlow',
    appTagline: 'अपना रोमांच चुनें',
    appVersion: 'FableFlow v1.0',
    appDescription: 'इंटरैक्टिव कहानी अनुभव',

    back: 'पीछे',
    close: 'बंद करें',
    exit: 'बाहर निकलें',
    continue: 'जारी रखें',
    start: 'शुरू करें',
    finish: 'समाप्त',
    loading: 'लोड हो रहा है',

    chooseYourAdventure: 'अपना रोमांच चुनें',
    featuredStories: 'विशेष कहानियां',
    premium: 'लोकप्रिय',
    minutes: 'मिनट',
    involvement: 'भागीदारी',

    by: 'द्वारा',
    endings: 'अंत',
    yourProgress: 'आपकी प्रगति',
    scenesVisited: 'दृश्य देखे गए',
    of: 'का',
    story: 'कहानी',
    startAdventure: 'रोमांच शुरू करें',
    continueStory: 'कहानी जारी रखें',

    loadingStory: 'कहानी लोड हो रही है...',
    theEnd: 'अंत',
    finishStory: 'कहानी समाप्त करें',

    settings: 'सेटिंग्स',
    theme: 'थीम',
    language: 'भाषा',
    audio: 'ऑडियो',
    soundEffects: 'ध्वनि प्रभाव',
    soundEffectsDescription: 'गेमप्ले के दौरान ध्वनि प्रभाव सक्षम करें',
    feedback: 'प्रतिक्रिया',
    hapticFeedback: 'हैप्टिक प्रतिक्रिया',
    hapticFeedbackDescription: 'इंटरैक्शन के लिए कंपन प्रतिक्रिया सक्षम करें',
    textSize: 'पाठ का आकार',
    textSizeDescription: 'पढ़ने के पाठ का आकार समायोजित करें',
    textSizeSmaller: 'छोटा',
    textSizeLarger: 'बड़ा',
    textSizePreview: 'एक छोटा सा परिवार खुशी से रहता है',

    themeLight: 'लाइट',
    themeDark: 'डार्क',
    themeSolar: 'सोलर',
    themeMono: 'मोनो',

    genreFantasy: 'फंतासी',
    genreSciFi: 'विज्ञान कथा',
    genreMystery: 'रहस्य',
    genreRomance: 'रोमांस',
    genreHorror: 'हॉरर',
    genreAdventure: 'रोमांच',
    genreDetective: 'जासूसी',

    involvementLow: 'कम',
    involvementMedium: 'मध्यम',
    involvementHigh: 'उच्च',
  },

  // Dutch (Nederlands)
  nl: {
    appName: 'FableFlow',
    appTagline: 'Kies je avontuur',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Interactief verhaalervaring',

    back: 'Terug',
    close: 'Sluiten',
    exit: 'Afsluiten',
    continue: 'Doorgaan',
    start: 'Start',
    finish: 'Voltooien',
    loading: 'Laden',

    chooseYourAdventure: 'Kies je avontuur',
    featuredStories: 'Uitgelichte verhalen',
    premium: 'Populair',
    minutes: 'minuten',
    involvement: 'Betrokkenheid',

    by: 'door',
    endings: 'eindes',
    yourProgress: 'Je voortgang',
    scenesVisited: 'scènes bezocht',
    of: 'van',
    story: 'Verhaal',
    startAdventure: 'Avontuur starten',
    continueStory: 'Verhaal vervolgen',

    loadingStory: 'Verhaal laden...',
    theEnd: 'EINDE',
    finishStory: 'Verhaal voltooien',

    settings: 'Instellingen',
    theme: 'Thema',
    language: 'Taal',
    audio: 'Audio',
    soundEffects: 'Geluidseffecten',
    soundEffectsDescription: 'Geluidseffecten inschakelen tijdens gameplay',
    feedback: 'Feedback',
    hapticFeedback: 'Haptische feedback',
    hapticFeedbackDescription: 'Trilfeedback inschakelen voor interacties',
    textSize: 'Tekstgrootte',
    textSizeDescription: 'Lees tekstgrootte aanpassen',
    textSizeSmaller: 'Kleiner',
    textSizeLarger: 'Groter',
    textSizePreview: 'Sexy qua lijf, doch bang voor het zwempak',

    themeLight: 'Licht',
    themeDark: 'Donker',
    themeSolar: 'Zon',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Sciencefiction',
    genreMystery: 'Mysterie',
    genreRomance: 'Romantiek',
    genreHorror: 'Horror',
    genreAdventure: 'Avontuur',
    genreDetective: 'Detective',

    involvementLow: 'Laag',
    involvementMedium: 'Gemiddeld',
    involvementHigh: 'Hoog',
  },

  // Polish (Polski)
  pl: {
    appName: 'FableFlow',
    appTagline: 'Wybierz swoją przygodę',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Interaktywne doświadczenie opowieści',

    back: 'Wstecz',
    close: 'Zamknij',
    exit: 'Wyjdź',
    continue: 'Kontynuuj',
    start: 'Rozpocznij',
    finish: 'Zakończ',
    loading: 'Ładowanie',

    chooseYourAdventure: 'Wybierz swoją przygodę',
    featuredStories: 'Wyróżnione opowieści',
    premium: 'Popularne',
    minutes: 'minut',
    involvement: 'Zaangażowanie',

    by: 'autor',
    endings: 'zakończeń',
    yourProgress: 'Twój postęp',
    scenesVisited: 'odwiedzonych scen',
    of: 'z',
    story: 'Opowieść',
    startAdventure: 'Rozpocznij przygodę',
    continueStory: 'Kontynuuj opowieść',

    loadingStory: 'Ładowanie opowieści...',
    theEnd: 'KONIEC',
    finishStory: 'Zakończ opowieść',

    settings: 'Ustawienia',
    theme: 'Motyw',
    language: 'Język',
    audio: 'Audio',
    soundEffects: 'Efekty dźwiękowe',
    soundEffectsDescription: 'Włącz efekty dźwiękowe podczas gry',
    feedback: 'Opinie',
    hapticFeedback: 'Sprzężenie zwrotne haptyczne',
    hapticFeedbackDescription: 'Włącz sprzężenie zwrotne wibracji dla interakcji',
    textSize: 'Rozmiar tekstu',
    textSizeDescription: 'Dostosuj rozmiar tekstu do czytania',
    textSizeSmaller: 'Mniejszy',
    textSizeLarger: 'Większy',
    textSizePreview: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig',

    themeLight: 'Jasny',
    themeDark: 'Ciemny',
    themeSolar: 'Słoneczny',
    themeMono: 'Mono',

    genreFantasy: 'Fantasy',
    genreSciFi: 'Science fiction',
    genreMystery: 'Tajemnica',
    genreRomance: 'Romans',
    genreHorror: 'Horror',
    genreAdventure: 'Przygoda',
    genreDetective: 'Detektywistyczny',

    involvementLow: 'Niskie',
    involvementMedium: 'Średnie',
    involvementHigh: 'Wysokie',
  },

  // Turkish (Türkçe)
  tr: {
    appName: 'FableFlow',
    appTagline: 'Maceranı seç',
    appVersion: 'FableFlow v1.0',
    appDescription: 'Etkileşimli hikaye deneyimi',

    back: 'Geri',
    close: 'Kapat',
    exit: 'Çık',
    continue: 'Devam',
    start: 'Başla',
    finish: 'Bitir',
    loading: 'Yükleniyor',

    chooseYourAdventure: 'Maceranı seç',
    featuredStories: 'Öne çıkan hikayeler',
    premium: 'Popüler',
    minutes: 'dakika',
    involvement: 'Katılım',

    by: 'tarafından',
    endings: 'sonlar',
    yourProgress: 'İlerlemen',
    scenesVisited: 'ziyaret edilen sahneler',
    of: '/',
    story: 'Hikaye',
    startAdventure: 'Macera başlat',
    continueStory: 'Hikayeyi devam ettir',

    loadingStory: 'Hikaye yükleniyor...',
    theEnd: 'SON',
    finishStory: 'Hikayeyi bitir',

    settings: 'Ayarlar',
    theme: 'Tema',
    language: 'Dil',
    audio: 'Ses',
    soundEffects: 'Ses efektleri',
    soundEffectsDescription: 'Oyun sırasında ses efektlerini etkinleştir',
    feedback: 'Geri bildirim',
    hapticFeedback: 'Haptik geri bildirim',
    hapticFeedbackDescription: 'Etkileşimler için titreşim geri bildirimini etkinleştir',
    textSize: 'Metin boyutu',
    textSizeDescription: 'Okuma metin boyutunu ayarla',
    textSizeSmaller: 'Daha küçük',
    textSizeLarger: 'Daha büyük',
    textSizePreview: 'Pijamalı hasta yağız şoföre çabucak güvendi',

    themeLight: 'Açık',
    themeDark: 'Koyu',
    themeSolar: 'Güneş',
    themeMono: 'Mono',

    genreFantasy: 'Fantastik',
    genreSciFi: 'Bilim kurgu',
    genreMystery: 'Gizem',
    genreRomance: 'Romantik',
    genreHorror: 'Korku',
    genreAdventure: 'Macera',
    genreDetective: 'Dedektif',

    involvementLow: 'Düşük',
    involvementMedium: 'Orta',
    involvementHigh: 'Yüksek',
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  pt: 'Português',
  ja: '日本語',
  zh: '中文',
  ko: '한국어',
  uk: 'Українська',
  it: 'Italiano',
  ar: 'العربية',
  hi: 'हिंदी',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
};
