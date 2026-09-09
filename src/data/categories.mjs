// Каталог граматики. Українська термінологія відповідає мастер-промпту (терминологический словарь).

export const categories = [
  { key: 'fundamentals', uk: 'Основи', description: 'Алфавіт, читання, наголоси, звукові зв’язки.' },
  { key: 'nouns', uk: 'Іменник і визначники', description: 'Рід, число, артиклі, присвійні і вказівні визначники.' },
  { key: 'pronouns', uk: 'Займенники', description: 'Особові, об’єктні, відносні, вказівні, присвійні займенники.' },
  { key: 'adjectives', uk: 'Прикметники', description: 'Узгодження, позиція, степені порівняння.' },
  { key: 'adverbs', uk: 'Прислівники', description: 'Творення, позиція, степені порівняння.' },
  { key: 'prepositions', uk: 'Прийменники', description: 'Основні прийменники: à, de, en, dans, pour, par.' },
  { key: 'conjunctions', uk: 'Сполучники', description: 'Сполучники: et, mais, ou, donc, car.' },
  { key: 'verbs', uk: 'Дієслово', description: 'Дієсловні групи, être, avoir, інфінітив, дієпричастия.' },
  { key: 'tenses', uk: 'Часи', description: 'Минулі, теперішні і майбутні часи індикативу.' },
  { key: 'moods', uk: 'Способи', description: 'Кондиціонал, субхюнктив, імператив.' },
  { key: 'modals', uk: 'Модальні дієслова', description: 'Pouvoir, devoir, vouloir, savoir, falloir.' },
  { key: 'negation', uk: 'Заперечення', description: 'Ne…pas, ne…jamais, ne…rien, ne…personne та інші.' },
  { key: 'questions', uk: 'Питання', description: 'Інтонація, est-ce que, інверсія, питальні слова.' },
  { key: 'sentences', uk: 'Структура речення', description: 'Порядок слов, типи речень.' },
  { key: 'complex', uk: 'Складні речення', description: 'Координація, підряд, відносні додатки, si-речення.' },
  { key: 'agreement', uk: 'Узгодження', description: 'Узгодження підмета і присудка, дієпричастия.' },
  { key: 'indirect', uk: 'Непряма мова', description: 'Передача чужих слів, узгодження часів.' },
  { key: 'passive', uk: 'Пасивний стан', description: 'Пасив з être, агент par.' },
  { key: 'orthography', uk: 'Орфографія', description: 'Наголоси, апостроф, дефис, написання форм.' },
  { key: 'spoken', uk: 'Жива французька', description: 'Розмовна vs письмова форма, випад ne.' },
  { key: 'regional', uk: 'Регіональні варіанти', description: 'Франція, Квебек, Бельгія, Швейцарія.' },
];

export function getCategory(key) {
  return categories.find((c) => c.key === key);
}

/** Alias: українська назва категорії → ключ (із мастер-промпту). */
export const categoryAliases = {
  'Іменник і визначники': 'nouns',
  'Займенники': 'pronouns',
  'Прикметники': 'adjectives',
  'Прислівники': 'adverbs',
  'Прийменники': 'prepositions',
  'Сполучники': 'conjunctions',
  'Дієслово': 'verbs',
  'Часи': 'tenses',
  'Способи': 'moods',
  'Модальні дієслова': 'modals',
  'Заперечення': 'negation',
  'Питання': 'questions',
  'Структура речення': 'sentences',
  'Складні речення': 'complex',
  'Узгодження': 'agreement',
  'Непряма мова': 'indirect',
  'Пасивний стан': 'passive',
  'Орфографія': 'orthography',
  'Жива французька': 'spoken',
  'Регіональні варіанти': 'regional',
};