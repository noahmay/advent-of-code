import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');

  const contains = lines.map(line => {
    const ranges = line.split(",");
    const [min, max] = ranges[0].split("-").map(Number);
    const [min2, max2] = ranges[1].split("-").map(Number);

    if(min <= min2 && max2 <= max) {
      return true;
    }
    if(min2 <= min && max <= max2) {
      return true
    }
    return false;
  })

  return contains.filter(Boolean).length;
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');

  const partlyContains = lines.map(line => {
    const ranges = line.split(",");
    const [min, max] = ranges[0].split("-").map(Number);
    const [min2, max2] = ranges[1].split("-").map(Number);

    if(min <= min2 && max >= min2) {
      return true;
    }
    if(min2 <= min && max2 >= min) {
      return true
    }

    return false
  })

  return partlyContains.filter(Boolean).length;
}

run({
  part1: {
    tests: [
       {
         input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
         expected: 2,
       },
    ],
    solution: part1,
  },
  part2: {
    tests: [
       {
         input: `
         2-4,6-8
         2-3,4-5
         5-7,7-9
         2-8,3-7
         6-6,4-6
         2-6,4-8`,
         expected: 4,
       },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
