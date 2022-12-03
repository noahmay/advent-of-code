import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

enum thierRockPaperScissors {
  rock = "A",
  paper = "B",
  scissors = "C"
}

enum myRockPaperScissors {
  rock = "X",
  paper = "Y",
  scissors = "Z"
}

const solution_one = {
  "A": {
    "X": 3 + 1,
    "Y": 6 + 2,
    "Z": 0 + 3
  },
  "B": {
    "X": 0 + 1,
    "Y": 3 + 2,
    "Z": 6 + 3
  },
  "C": {
    "X": 6 + 1,
    "Y": 0 + 2,
    "Z": 3 + 3
  },
}

const solution_two = {
  "A": {
    "X": 0 + 3,
    "Y": 3 + 1,
    "Z": 6 + 2
  },
  "B": {
    "X": 0 + 1,
    "Y": 3 + 2,
    "Z": 6 + 3
  },
  "C": {
    "X": 0 + 2,
    "Y": 3 + 3,
    "Z": 6 + 1
  },
}

const isThierRockPaperScissors = (value: string): value is thierRockPaperScissors => {
  return value === "A" || value === "B" || value === "C"
}

const isMyRockPaperScissors = (value: string): value is myRockPaperScissors => {
  return value === "X" || value === "Y" || value === "Z"
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');
  let score = 0

  lines.forEach(element => {
    const [them, me] = element.split(' ')
    if (!isThierRockPaperScissors(them) || !isMyRockPaperScissors(me)) {
      throw new Error("Invalid input")
    }
    score += solution_one[them][me]
  });

  return score
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');
  let score = 0

  lines.forEach(element => {
    const [them, me] = element.split(' ')
    if (!isThierRockPaperScissors(them) || !isMyRockPaperScissors(me)) {
      throw new Error("Invalid input")
    }
    score += solution_two[them][me]
  });

  return score
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
