let baseURL = "http://numbersapi.com"

//1
async function getFact(num) {
    let res = await axios.get(`${baseURL}/${num}?json`)
    console.log(res.data["text"])
}
getFact(42)

//2
async function getFactMulti(arr) {
    let res = await axios.get(`${baseURL}/${arr}`)
    console.log(res.data)
}
getFactMulti([1, 2, 3])

//3
async function getFourFacts(num) {
    let numberPromises = []
    for (let i = 0; i < 4; i++) {
        numberPromises.push(axios.get(`${baseURL}/${num}?json`)
        )
    }
    for (promise of numberPromises) {
        let res = await promise
        console.log(res.data["text"])
        $("body").append(`<p>${res.data["text"]}</p>`)
    }
}
getFourFacts(55)
