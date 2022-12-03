import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n\n');
  const array = lines.map((line) => line.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0));
  const sorted = array.sort((a, b) => b - a);
  const [one] = sorted;
  return one
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n\n');
  const array = lines.map((line) => line.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0));
  const sorted = array.sort((a, b) => b - a);
  const [one, two, three] = sorted;
  return one + two + three
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
