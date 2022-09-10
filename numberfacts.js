//1
let number = 42
let baseURL = "http://numbersapi.com"

axios
    .get(`${baseURL}/${number}?json`)
    .then(res => {
        console.log(res.data["text"])
    })


//2
let numbers = [2, 3, 4, 5, 6];
axios
    .get(`${baseURL}/${numbers}`)
    .then(res => {
        console.log(res.data)
    })


//3
let numberPromises = []

for (let i = 0; i < 4; i++) {
    numberPromises.push(
        axios.get(`${baseURL}/${number}?json`)
    )
}
Promise.all(numberPromises)
    .then(resArr => {
        for (res of resArr) {
            console.log(res.data["text"])
            $("body").append(`<p>${res.data["text"]}</p>`)
        }
    })
    .catch(err => console.log(err))