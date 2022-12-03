import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const intersection = (arr1: string[], arr2: string[]) => {
  return new Set(arr1.filter(value => arr2.includes(value)));
}

const letterPriority = (letter: string) => {
  if (letter.length > 1) {
    return undefined;
  }
  const isCapitalLetter = letter.charCodeAt(0) <= 90
  return isCapitalLetter ? letter.toLocaleLowerCase().charCodeAt(0) - 96 + 26 : letter.charCodeAt(0) - 96;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');

  const scores = lines.map((line) => {
    const middle = Math.floor(line.length / 2);
    const first = line.slice(0, middle).split('');
    const second = line.slice(middle, line.length).split('');

    const intersectionArray = first.filter(value => second.includes(value));
    const priority = letterPriority(intersectionArray[0])
    return priority ? priority : 0;

  })
  const sum = scores.reduce((partialSum, a) => partialSum + a, 0);

  return sum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const groups = input.split(/^/m).reduce((a, c, i) => {
    i%3  ?  a[a.length - 1] += c  :  a.push(c);
    return a;
}, [] as string[]);

const scores = groups.map((group) => {
    const lines = group.split('\n');
    let set = new Set(lines[0].split(''));
    for (let i = 1; i < lines.length - 1; i++) {
        set = intersection(Array.from(set), lines[i].split(''));
    }
    const [first] = set;
    const priority = letterPriority(first)
    return priority ? priority : 0;

});
const sum = scores.reduce((partialSum, a) => partialSum + a, 0);

return sum

}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
