import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

function hasDuplicates(array: any[]) {
  return (new Set(array)).size !== array.length;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const array = input.split('')

  const last4 = ["0", "0", "0", "0"]
  let last = 3
  while (hasDuplicates(last4)) {
    const next = array[last + 1]
    last4.shift()
    last4.push(next)
    last += 1;
  }

  return last +1
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const array = input.split('')

  const last4 = "0".repeat(14).split('')
  let last = 3
  while (hasDuplicates(last4)) {
    const next = array[last + 1]
    last4.shift()
    last4.push(next)
    last += 1;
  }

  return last +1
}

run({
  part1: {
    tests: [
       {
         input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
         expected: 7,
       },
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
