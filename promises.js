const random = (max) => Math.floor(Math.random() * (max + 1))
const pick = (list) => list[random(list.length - 1)]

export const sleep = (waitingTimeMs) => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      fulfill()
    }, waitingTimeMs)
  })
}

export const sleepTwoSecs = () => {
  return sleep(2000)
}

export const surpriseMe = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const max = 10;
      fulfill(pick(["Ice Cream", "Cake", "Shake", "Muffin", "Coffee"]))
    }, 0)
  })
}

export const getRandomNumber = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const max = 10;
      fulfill(random(max))
    }, 0)
  })
}

export const fail = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject('Ooops, it failed'), 0)
  })
}

export const openSchrodringerBox = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const isAlive = Math.random() > 0.5
      const selectedCat = pick(['Mirci', 'Snowball', 'Luna', 'Fluffy'])
      if (isAlive) {
        fulfill(selectedCat)
      } else {
        reject(new Error(`Ooops, right now ${selectedCat} has only 8 lives.`))
      }
    }, 0)
  })
}

export const getRandomNumberSlowly = async () => {
  await sleep(2000);
  return await getRandomNumber();
}
