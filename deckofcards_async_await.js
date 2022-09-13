
let count = 1
baseURL = "http://deckofcardsapi.com/api/deck"


// 1. 
async function singleCard() {
    let res = await axios.get(`${baseURL}/new/draw/?${count}`)
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
}
singleCard()

// 2. 
async function towCard() {
    let res1 = await axios.get(`${baseURL}/new/draw/?${count}`)
    let deck_id = res1.data.deck_id
    let card_1 = res1.data.cards[0]

    let res2 = await axios.get(`${baseURL}/${deck_id}/draw/?${count}`)
    let card_2 = res2.data.cards[0];

    [card_1, card_2].forEach((element) => {
        console.log(`${element.value} of ${element.suit}`)
    });
}
towCard()

// 3.

let deck_id = 'new'
$("button").on('click', async function () {
    let res = await axios.get(`${baseURL}/${deck_id}/draw/?${count}`)
    let image = res.data.cards[0].image;
    deck_id = res.data.deck_id;
    $("div").prepend(`<img src="${image}" />`);
    if (res.data.remaining === 0)
        $("button").remove();
})





