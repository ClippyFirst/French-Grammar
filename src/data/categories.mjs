// Каталог граматики. Ключі категорій стабільні для URL і навігації; старі значення frontmatter нормалізуються через aliases.

export const categories = [
  { key: 'fundamentals', uk: 'Основи', fr: 'Fondamentaux', description: 'Алфавіт, базові поняття, читання, вимова, наголоси, звукові зв’язки та пунктуація.' },
  { key: 'nouns', uk: 'Іменники', fr: 'Noms', description: 'Рід, число, типи іменників та іменникові конструкції.' },
  { key: 'determiners', uk: 'Артиклі та детермінативи', fr: 'Articles et déterminants', description: 'Артиклі, детермінативи, присвійні та інші визначники.' },
  { key: 'pronouns', uk: 'Займенники', fr: 'Pronoms', description: 'Особові, об’єктні, замісні, відносні, вказівні, присвійні та неозначені займенники.' },
  { key: 'adjectives', uk: 'Прикметники', fr: 'Adjectifs', description: 'Узгодження, позиція, значення позиції, творення та порівняння.' },
  { key: 'adverbs', uk: 'Прислівники', fr: 'Adverbes', description: 'Творення, позиція, порівняння та сталі прислівникові вирази.' },
  { key: 'prepositions', uk: 'Прийменники', fr: 'Prépositions', description: 'Прийменники, керування, просторові, часові та абстрактні значення.' },
  { key: 'conjunctions', uk: 'Сполучники', fr: 'Conjonctions', description: 'Сурядні та підрядні сполучники й сполучникові конструкції.' },
  { key: 'verbs', uk: 'Дієслова', fr: 'Verbes', description: 'Групи дієслів, керування, допоміжні дієслова, інфінітив та прономінальні дієслова.' },
  { key: 'tenses', uk: 'Часи', fr: 'Temps verbaux', description: 'Présent, минулі та майбутні часи, їхні значення й контрасти.' },
  { key: 'tense-aspect', uk: 'Час і аспект', fr: 'Temps et aspect', description: 'Темпоральна перспектива, завершеність, тривалість, повторюваність та аспектуальні значення.' },
  { key: 'moods', uk: 'Способи', fr: 'Modes', description: 'Indicatif, conditionnel, subjonctif, impératif та їхні функції.' },
  { key: 'modals', uk: 'Модальність', fr: 'Modalité', description: 'Можливість, необхідність, дозвіл, бажання, припущення та інші модальні значення.' },
  { key: 'negation', uk: 'Заперечення', fr: 'Négation', description: 'Ne…pas, ne…jamais, ne…plus, ne…rien, ne…personne, ne…que та розмовні варіанти.' },
  { key: 'questions', uk: 'Питання', fr: 'Questions', description: 'Інтонація, est-ce que, інверсія, питальні слова та непрямі питання.' },
  { key: 'sentences', uk: 'Структура речення', fr: 'Structure de la phrase', description: 'Порядок слів, типи речень, позиція обставин і додатків.' },
  { key: 'syntax', uk: 'Синтаксис', fr: 'Syntaxe', description: 'Синтаксичні конструкції, фрази, предикативні структури та граматичні функції.' },
  { key: 'complex', uk: 'Складні речення', fr: 'Phrases complexes', description: 'Підрядність, умова, причина, наслідок, мета, допустовість та інші складні конструкції.' },
  { key: 'relative', uk: 'Відносні конструкції', fr: 'Constructions relatives', description: 'Відносні займенники, відносні речення, антецеденти та їхня структура.' },
  { key: 'comparison', uk: 'Порівняння', fr: 'Comparaison', description: 'Comparatif, superlatif та кількісні й якісні конструкції порівняння.' },
  { key: 'quantification', uk: 'Кількісні конструкції', fr: 'Quantification', description: 'Кількість, квантифікатори, міри, приблизна кількість та узгодження.' },
  { key: 'agreement', uk: 'Узгодження', fr: 'Accord', description: 'Узгодження прикметників, дієслова, participe passé та складні випадки узгодження.' },
  { key: 'indirect', uk: 'Непряма мова', fr: 'Discours indirect', description: 'Передача тверджень, питань і наказів, часові зсуви та займенники.' },
  { key: 'passive', uk: 'Пасивний стан', fr: 'Voix passive', description: 'Пасив із être, агент par/de та альтернативи пасиву.' },
  { key: 'orthography', uk: 'Орфографія', fr: 'Orthographe', description: 'Діакритика, апостроф, дефіс, великі літери та написання граматичних форм.' },
  { key: 'phonology', uk: 'Фонологія та вимова', fr: 'Phonologie et prononciation', description: 'Голосні, приголосні, склад, liaison, enchaînement, schwa, інтонація та просодія.' },
  { key: 'morphology', uk: 'Словотвір і морфологія', fr: 'Morphologie et formation des mots', description: 'Морфеми, суфіксація, префіксація, конверсія, неологізми та граматична адаптація.' },
  { key: 'semantics', uk: 'Семантика', fr: 'Sémantique', description: 'Обсяг, дейксис, референція, сфера дії та інтерпретація граматичних конструкцій.' },
  { key: 'discourse', uk: 'Дискурс', fr: 'Discours', description: 'Інформаційна структура, тема й рема, фокус, дислокація, еліпсис та дискурсивні маркери.' },
  { key: 'register', uk: 'Регістр', fr: 'Registre', description: 'Нейтральний, формальний, неформальний, писемний, розмовний і літературний регістри.' },
  { key: 'spoken', uk: 'Жива французька', fr: 'Français oral', description: 'Розмовні скорочення, усні редукції, вагання та спонтанне мовлення.' },
  { key: 'regional', uk: 'Регіональні варіанти', fr: 'Variétés régionales', description: 'Відмінності французької Франції, Квебеку, Бельгії, Швейцарії та інших франкомовних регіонів.' },
  { key: 'contrastive', uk: 'Контрастивна граматика', fr: 'Grammaire contrastive', description: 'Системні відмінності французької та української граматик.' },
];

const categoryAliases = {
  'y, en та інші замісні форми': 'pronouns',
  'Артиклі та детермінативи': 'determiners',
  'Базові поняття': 'fundamentals',
  'Варіантність і регістр': 'regional',
  'Вказівні, вказівні та неозначені займенники': 'pronouns',
  'Вказівні, присвійні та неозначені займенники': 'pronouns',
  'Дискурс і регістр': 'discourse',
  'Дієслово': 'verbs',
  'Займенники': 'pronouns',
  'Заперечення': 'negation',
  'Іменник': 'nouns',
  'Контрастивна граматика': 'contrastive',
  'Метамова і базові поняття': 'fundamentals',
  'Орфографія та вимова': 'fundamentals',
  'Орфографія та ортотипографія': 'orthography',
  'Особові та тонічні займенники': 'pronouns',
  'Питальні та відносні займенники': 'pronouns',
  'Питання': 'questions',
  'Підрядність': 'complex',
  'Прийменники': 'prepositions',
  'Прикметник': 'adjectives',
  'Синтаксис': 'syntax',
  'Словотвір і лексика': 'morphology',
  'Сполучники': 'conjunctions',
  'Структура речення': 'sentences',
  'Узгодження': 'agreement',
  'Фонологія, графіка і вимова': 'phonology',
  comparison: 'comparison',
  numbers: 'quantification',
  punctuation: 'orthography',
  'complex-sentences': 'complex',
  discourse: 'discourse',
  modality: 'modals',
  'relative-clauses': 'relative',
  variation: 'regional',
};

export function canonicalCategory(value) {
  if (!value) return 'fundamentals';
  return categoryAliases[value] ?? value;
}

export function getCategory(key) {
  const canonical = canonicalCategory(key);
  return categories.find((c) => c.key === canonical);
}

export { categoryAliases };

export const categoryLayers = {
  fundamentals: 'foundations', nouns: 'nominal', determiners: 'nominal', pronouns: 'pronouns',
  adjectives: 'nominal', adverbs: 'nominal', prepositions: 'prepositions-government',
  conjunctions: 'syntax', verbs: 'verbs', tenses: 'tense-aspect-mood', 'tense-aspect': 'tense-aspect-mood',
  moods: 'tense-aspect-mood', modals: 'tense-aspect-mood', negation: 'negation-questions',
  questions: 'negation-questions', sentences: 'syntax', syntax: 'syntax', complex: 'syntax', relative: 'syntax',
  comparison: 'nominal', quantification: 'nominal', agreement: 'syntax', indirect: 'syntax', passive: 'passive-impersonal',
  orthography: 'orthography', phonology: 'phonology', morphology: 'morphology', semantics: 'semantics', discourse: 'discourse-pragmatics',
  register: 'discourse-pragmatics', spoken: 'discourse-pragmatics', regional: 'variation', contrastive: 'contrastive',
};
