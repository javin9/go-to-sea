async function func1 () {
  console.log('func1 run');
  await func2()
}

async function func2 () {
  try {
    console.log('func2 run');
    await func3()
  } catch (error) {
    throw Error(' func2 error')
  }
}

function func3 () {
  console.log('func3 run');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 1000)
  })
}

func1()