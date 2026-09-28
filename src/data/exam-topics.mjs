// Офіційні граматичні теми для підготовки до НМТ та ЄВІ з французької мови.
// Labels зберігаються французькою, щоб вони відповідали формулюванням програм.
// exam: 'both' означає, що тема прямо входить до обох переліків.

export const examSections = [
  {
    key: 'nominal',
    title: 'Іменна група',
    topics: [
      ['Les articles indéfinis, définis et partitifs', 'Article', 'both'],
      ["L'article zéro", 'Article', 'nmt'],
      ["L'accord : le masculin et le féminin, le singulier et le pluriel", 'Nom', 'both'],
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
      ["L'accord : le masculin et le féminin, le singulier et le pluriel", 'Adjectif', 'both'],
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
      ['La négation', 'Verbe', 'nmt'],
      ["L'interrogation", 'Verbe', 'nmt'],
      ['Le futur proche', 'Verbe', 'nmt'],
      ['Le passé récent', 'Verbe', 'nmt'],
      ['Le passé composé', 'Verbe', 'nmt'],
      ["L'imparfait", 'Verbe', 'nmt'],
      ["Le passé composé opposé à l'imparfait", 'Verbe', 'nmt'],
      ['Le plus-que-parfait', 'Verbe', 'nmt'],
      ['Le futur simple', 'Verbe', 'nmt'],
      ['Le futur antérieur', 'Verbe', 'nmt'],
      ['Le conditionnel présent', 'Verbe', 'nmt'],
      ['Le conditionnel passé', 'Verbe', 'nmt'],
      ['Le futur dans le passé', 'Verbe', 'nmt'],
      ['Le passif', 'Verbe', 'both'],
      ['Le subjonctif', 'Verbe', 'both'],
      ['Le gérondif', 'Verbe', 'both'],
      ['Le participe présent et passé', 'Verbe', 'nmt'],
      ['La concordance des temps', 'Verbe', 'nmt'],
      ['La concordance des temps dans le discours indirect', 'Verbe', 'nmt'],
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
      ['Les degrés de comparaison de l’adverbe', 'Adverbe', 'both'],
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
