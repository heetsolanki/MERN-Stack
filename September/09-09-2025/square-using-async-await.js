function square(num) {
    return new Promise((resolve) => {
        resolve(Math.pow(num, 2))
    })
}

async function output(num) {
    const answer = await square(num)
    console.log(answer)
}

output(10)