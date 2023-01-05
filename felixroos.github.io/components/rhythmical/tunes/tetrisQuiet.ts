export default {
  duration: 16,
  instrument: 'piano',
  parallel: [
    {
      velocity: 1,
      sequential: [
        ['e5', ['b4', 'c5'], 'd5', ['c5', 'b4']],
        ['a4', ['a4', 'c5'], 'e5', ['d5', 'c5']],
        ['b4', ['r', 'c5'], 'd5', 'e5'],
        ['c5', 'a4', 'a4', 'r'],
        [['r', 'd5'], ['r', 'f5'], 'a5', ['g5', 'f5']],
        ['e5', ['r', 'c5'], 'e5', ['d5', 'c5']],
        ['b4', ['b4', 'c5'], 'd5', 'e5'],
        ['c5', 'a4', 'a4', 'r'],
      ]
    },
    {
      velocity: 0.4,
      sequential: [
        ['e2', 'e3', 'e2', 'e3', 'e2', 'e3', 'e2', 'e3'],
        ['a2', 'a3', 'a2', 'a3', 'a2', 'a3', 'a2', 'a3'],
        ['g#2', 'g#3', 'g#2', 'g#3', 'e2', 'e3', 'e2', 'e3'],
        ['a2', 'a3', 'a2', 'a3', 'a2', 'a3', 'b1', 'c2'],
        ['d2', 'd3', 'd2', 'd3', 'd2', 'd3', 'd2', 'd3'],
        ['c2', 'c3', 'c2', 'c3', 'c2', 'c3', 'c2', 'c3'],
        ['b1', 'b2', 'b1', 'b2', 'e2', 'e3', 'e2', 'e3'],
        ['a1', 'a2', 'a1', 'a2', 'a1', 'a2', 'a1', 'a2'],
      ]
    }
  ],
}