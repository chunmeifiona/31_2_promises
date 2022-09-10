
let count = 1
baseURL = "http://deckofcardsapi.com/api/deck"


// 1. 
axios
    .get(`${baseURL}/new/draw/?${count}`)
    .then(res => {
        //console.log(res)
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })

// 2. 
let card_1 = null
axios
    .get(`${baseURL}/new/draw/?${count}`)
    .then(res => {
        let deck_id = res.data.deck_id
        card_1 = res.data.cards[0]
        return axios.get(`${baseURL}/${deck_id}/draw/?${count}`)
    })
    .then(res => {
        let card_2 = res.data.cards[0];
        [card_1, card_2].forEach((element) => {
            console.log(`${element.value} of ${element.suit}`)
        });
    }
    )

// 3.
let deck_id = 'new'
$("button").on('click', function () {
    axios.get(`${baseURL}/${deck_id}/draw/?${count}`)
        .then(res => {
            let image = res.data.cards[0].image;
            deck_id = res.data.deck_id;
            $("div").prepend(`<img src="${image}" />`);
            if (res.data.remaining == 0)
                $("button").remove();
        })

})


