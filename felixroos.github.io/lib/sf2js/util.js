export const tokenizeNote = (note) => {
  if (typeof note !== 'string') {
    return [];
  }
  const [pc, acc = '', oct] =
    note.match(/^([a-gA-G])([#bs]*)([0-9])?$/)?.slice(1) || [];
  if (!pc) {
    return [];
  }
  return [pc, acc, oct ? Number(oct) : undefined];
};
// turns the given note into its midi number representation
export const toMidi = (note) => {
  if (typeof note === 'number') {
    return note;
  }
  const [pc, acc, oct] = tokenizeNote(note);
  if (!pc) {
    throw new Error('not a note: "' + note + '"');
  }
  const chroma = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 }[
    pc.toLowerCase()
  ];
  const offset =
    acc?.split('').reduce((o, char) => o + { '#': 1, b: -1, s: 1 }[char], 0) ||
    0;
  return (Number(oct) + 1) * 12 + chroma + offset;
};
