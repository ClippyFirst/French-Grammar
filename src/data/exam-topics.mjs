// Офіційні граматичні теми для підготовки до НМТ та ЄВІ з французької мови.
// Формулювання зберігаються французькою; exam позначає пряме входження
// конкретної підтемы до відповідної програми.
// Для ЄВІ ширші офіційні блоки зіставляються з конкретними статтями довідника.

export const examSections = [
  {
    key: 'nominal',
    title: 'Іменна група',
    topics: [
      ['Les articles indéfinis, définis et partitifs', 'Article', 'both'],
      ["L'article zéro", 'Article', 'nmt'],
      ["L'accord : le masculin et le féminin, le singulier et le pluriel", 'Nom / Adjectif', 'both'],
      ['Les comparatifs du nom', 'Nom', 'nmt'],
      ['Les pronoms sujets', 'Pronom', 'both'],
      ['Les pronoms toniques', 'Pronom', 'both'],
      ['Les pronoms interrogatifs', 'Pronom', 'both'],
      ['Le pronom indéfini on', 'Pronom', 'both'],
      ['Les pronoms COD et COI', 'Pronom', 'both'],
      ['Les pronoms en et y', 'Pronom', 'both'],
      ['Les pronoms relatifs', 'Pronom', 'both'],
      ['Les pronoms relatifs composés', 'Pronom', 'nmt'],
      ['Les doubles pronoms', 'Pronom', 'nmt'],
      ['Les adjectifs possessifs', 'Adjectif', 'both'],
      ['Les adjectifs démonstratifs', 'Adjectif', 'both'],
      ["Les comparatifs de l'adjectif", 'Adjectif', 'nmt'],
      ['Les nombres cardinaux et ordinaux', 'Nombre', 'both'],
    ],
  },
  {
    key: 'verb',
    title: 'Verbe',
    topics: [
      ["Le présent de l'indicatif", 'Verbe', 'both'],
      ["L'impératif", 'Verbe', 'both'],
      ['La négation', 'Verbe', 'both'],
      ["L'interrogation", 'Verbe', 'both'],
      ['Le futur proche', 'Verbe', 'nmt'],
      ['Le passé récent', 'Verbe', 'nmt'],
      ['Le passé composé', 'Verbe', 'both'],
      ["L'imparfait", 'Verbe', 'both'],
      ["Le passé composé opposé à l'imparfait", 'Verbe', 'both'],
      ['Le plus-que-parfait', 'Verbe', 'both'],
      ['Le futur simple', 'Verbe', 'both'],
      ['Le futur antérieur', 'Verbe', 'both'],
      ['Le conditionnel présent', 'Verbe', 'both'],
      ['Le conditionnel passé', 'Verbe', 'both'],
      ['Le futur dans le passé', 'Verbe', 'nmt'],
      ['Le passif', 'Verbe', 'both'],
      ['Le subjonctif', 'Verbe', 'both'],
      ['Le gérondif', 'Verbe', 'both'],
      ['Le participe présent et passé', 'Verbe', 'both'],
      ['La concordance des temps', 'Verbe', 'both'],
      ['La concordance des temps dans le discours indirect', 'Verbe', 'both'],
      ['Les verbes prépositionnels', 'Verbe', 'nmt'],
      ['Les formes impersonnelles', 'Verbe', 'nmt'],
      ["L'infinitif", 'Verbe', 'nmt'],
    ],
  },
  {
    key: 'other',
    title: 'Інші граматичні конструкції',
    topics: [
      ['Les adverbes de fréquence', 'Adverbe', 'both'],
      ['Les adverbes de quantité', 'Adverbe', 'both'],
      ['Les adverbes de manière', 'Adverbe', 'both'],
      ['Les adverbes de temps', 'Adverbe', 'both'],
      ['Les adverbes d’intensité', 'Adverbe', 'nmt'],
      ['Les adverbes en -ment', 'Adverbe', 'both'],
      ['Les degrés de comparaison de l’adverbe', 'Adverbe', 'evi'],
      ['Les prépositions de lieu', 'Préposition', 'both'],
      ['La situation dans l’espace', 'Préposition', 'nmt'],
      ['Les prépositions de temps', 'Préposition', 'both'],
      ['Les conjonctions de coordination', 'Conjonction', 'both'],
      ['Les conjonctions de subordination', 'Conjonction', 'both'],
      ['Ne…que', 'Restriction', 'nmt'],
      ['La condition : si + passé composé / présent ou futur ou impératif', 'La condition', 'nmt'],
      ['L’hypothèse : si + imparfait / conditionnel présent', 'L’hypothèse', 'nmt'],
      ['Le regret : si + plus-que-parfait / conditionnel présent ou passé', 'Le regret', 'nmt'],
      ['Le discours rapporté au présent et au passé', 'Phrase', 'nmt'],
      ['Les articulateurs chronologiques', 'Phrase', 'nmt'],
      ['Les relations logiques : la cause, la conséquence, le but, l’opposition et la concession', 'Phrase', 'nmt'],
      ['La mise en relief', 'Phrase', 'nmt'],
    ],
  },
];

export const examMeta = {
  nmt: { label: 'НМТ', full: 'Національний мультипредметний тест' },
  evi: { label: 'ЄВІ', full: 'Єдиний вступний іспит' },
  both: { label: 'НМТ + ЄВІ', full: 'Обидва іспити' },
};

export function examBadge(exam) {
  return exam === 'both' ? 'both' : exam === 'evi' ? 'evi' : 'nmt';
}
