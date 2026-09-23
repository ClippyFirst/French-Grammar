// Каталог граматики. Українська термінологія використовується послідовно в усіх статтях v2.

export const categories = [
  { key: 'fundamentals', uk: 'Основи', description: 'Алфавіт, читання, вимова, наголоси, звукові зв’язки, пунктуація.' },
  { key: 'nouns', uk: 'Іменник і визначники', description: 'Рід, число, артиклі, кількісні та інші визначники.' },
  { key: 'pronouns', uk: 'Займенники', description: 'Особові, об’єктні, відносні, вказівні, присвійні та неозначені займенники.' },
  { key: 'adjectives', uk: 'Прикметники', description: 'Узгодження, позиція, значення позиції, порівняння.' },
  { key: 'adverbs', uk: 'Прислівники', description: 'Творення, позиція, порівняння та сталі прислівникові вирази.' },
  { key: 'prepositions', uk: 'Прийменники', description: 'Прийменники, керування, просторові, часові та абстрактні значення.' },
  { key: 'conjunctions', uk: 'Сполучники', description: 'Сурядні та підрядні сполучники й сполучникові конструкції.' },
  { key: 'verbs', uk: 'Дієслово', description: 'Групи дієслів, допоміжні дієслова, інфінітив, participe, gérondif та прономінальні дієслова.' },
  { key: 'tenses', uk: 'Часи', description: 'Présent, минулі та майбутні часи, їхні значення й контрасти.' },
  { key: 'moods', uk: 'Способи', description: 'Conditionnel, subjonctif, impératif та їхні функції.' },
  { key: 'modals', uk: 'Модальні та напівмодальні дієслова', description: 'Pouvoir, devoir, vouloir, savoir, falloir та модальні значення.' },
  { key: 'negation', uk: 'Заперечення', description: 'Ne…pas, ne…jamais, ne…plus, ne…rien, ne…personne, ne…que та розмовні варіанти.' },
  { key: 'questions', uk: 'Питання', description: 'Інтонація, est-ce que, інверсія, питальні слова та непрямі питання.' },
  { key: 'sentences', uk: 'Структура речення', description: 'Порядок слів, типи речень, позиція обставин і додатків.' },
  { key: 'complex', uk: 'Складні речення', description: 'Сурядність, підрядність, відносні, умовні, причинні, часові та інші конструкції.' },
  { key: 'agreement', uk: 'Узгодження', description: 'Узгодження прикметників, дієслова та participe passé.' },
  { key: 'indirect', uk: 'Непряма мова', description: 'Передача тверджень, питань і наказів, часові зсуви та займенники.' },
  { key: 'passive', uk: 'Пасивний стан', description: 'Пасив із être, агент par/de та альтернативи пасиву.' },
  { key: 'orthography', uk: 'Орфографія', description: 'Діакритика, апостроф, дефіс, великі літери та написання граматичних форм.' },
  { key: 'spoken', uk: 'Жива французька', description: 'Розмовна, нейтральна й формальна французька; скорочення та варіанти.' },
  { key: 'regional', uk: 'Регіональні варіанти', description: 'Граматично релевантні відмінності французької Франції, Квебеку, Бельгії, Швейцарії та інших франкомовних регіонів.' },
];

export function getCategory(key) {
  return categories.find((c) => c.key === key);
}

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
  'Модальні та напівмодальні дієслова': 'modals',
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
