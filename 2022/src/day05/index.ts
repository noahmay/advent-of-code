import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const array = input.split('\n\n')
  const stacksString = array[0].split('\n')
  const numberOfStacks = parseInt(stacksString[stacksString.length-1].charAt(stacksString[stacksString.length-1].length-2))
  const stacks: string[][] = [] 
 
  for(let i = 0; i < stacksString.length -1; i++) {
    const row = stacksString[i]

    for(let j = 0; j < numberOfStacks; j++) {
      if(stacks[j] === undefined) {
        stacks[j] = []
      }
      const number = row[4 * j+ 1]
      if(number !== ' ') {
        stacks[j].push(number)
      }
      
    }
  }

  array[1].split('\n').forEach((row, index) => {
    const words = row.split(' ')
    
    const amount = parseInt(words[1])
    const from = parseInt(words[3])
    const to = parseInt(words[5])
    

    for(let i = 0; i < amount; i++) {
      const moved = stacks[from-1].shift()
      if(moved !== undefined) {
        stacks[to-1].unshift(moved)
      }
    }
  })

  const result = stacks.map((stack) => {
    return stack[0]
  }).join('')

  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const array = input.split('\n\n')
  const stacksString = array[0].split('\n')
  const numberOfStacks = parseInt(stacksString[stacksString.length-1].charAt(stacksString[stacksString.length-1].length-2))
  const stacks: string[][] = [] 
  
 
  for(let i = 0; i < stacksString.length -1; i++) {
    const row = stacksString[i]

    for(let j = 0; j < numberOfStacks; j++) {
      if(stacks[j] === undefined) {
        stacks[j] = []
      }
      const number = row[4 * j+ 1]
      if(number !== ' ') {
        stacks[j].push(number)
      }
      
    }
  }
 
  array[1].split('\n').forEach((row, index) => {
    const words = row.split(' ')
    
    const amount = parseInt(words[1])
    const from = parseInt(words[3])
    const to = parseInt(words[5])

    const newStack:string[] = []
    for(let i = 0; i < amount; i++) {
      const moved = stacks[from-1].shift()
      
      if(moved !== undefined) {
      newStack.push(moved)
      }
    }
      newStack.reverse()
      newStack.forEach((crate) => {
        stacks[to-1].unshift(crate)
      })
  })

  const result = stacks.map((stack) => {
    return stack[0]
  }).join('')

  return result

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
