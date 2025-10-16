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
  | 'uk';

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
  difficulty: string;

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

  // Difficulty Levels
  difficultyEasy: string;
  difficultyMedium: string;
  difficultyHard: string;
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
    premium: 'Premium',
    minutes: 'minutes',
    difficulty: 'difficulty',

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

    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
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
    premium: 'Премиум',
    minutes: 'минут',
    difficulty: 'сложность',

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

    difficultyEasy: 'Лёгкая',
    difficultyMedium: 'Средняя',
    difficultyHard: 'Сложная',
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
    premium: 'Premium',
    minutes: 'minutos',
    difficulty: 'dificultad',

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

    difficultyEasy: 'Fácil',
    difficultyMedium: 'Medio',
    difficultyHard: 'Difícil',
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
    premium: 'Premium',
    minutes: 'Minuten',
    difficulty: 'Schwierigkeit',

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

    difficultyEasy: 'Einfach',
    difficultyMedium: 'Mittel',
    difficultyHard: 'Schwer',
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
    premium: 'Premium',
    minutes: 'minutes',
    difficulty: 'difficulté',

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

    difficultyEasy: 'Facile',
    difficultyMedium: 'Moyen',
    difficultyHard: 'Difficile',
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
    premium: 'Premium',
    minutes: 'minutos',
    difficulty: 'dificuldade',

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

    difficultyEasy: 'Fácil',
    difficultyMedium: 'Médio',
    difficultyHard: 'Difícil',
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
    premium: 'プレミアム',
    minutes: '分',
    difficulty: '難易度',

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

    difficultyEasy: '簡単',
    difficultyMedium: '普通',
    difficultyHard: '難しい',
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
    premium: '高级',
    minutes: '分钟',
    difficulty: '难度',

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

    difficultyEasy: '简单',
    difficultyMedium: '中等',
    difficultyHard: '困难',
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
    premium: '프리미엄',
    minutes: '분',
    difficulty: '난이도',

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

    difficultyEasy: '쉬움',
    difficultyMedium: '보통',
    difficultyHard: '어려움',
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
    premium: 'Преміум',
    minutes: 'хвилин',
    difficulty: 'складність',

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

    difficultyEasy: 'Легка',
    difficultyMedium: 'Середня',
    difficultyHard: 'Складна',
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
};
