function square(firstNum, secondNum) {
    return new Promise((resolve) => {
        resolve(firstNum + secondNum)
    })
}

async function output(firstNum, secondNum) {
    const answer = await square(firstNum, secondNum)
    console.log(answer)
}

output(10, 9)