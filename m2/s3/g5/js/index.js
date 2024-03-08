const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGYwODJkN2IxMTAwMTkwZTZlMjAiLCJpYXQiOjE3MDk4OTEzMzYsImV4cCI6MTcxMTEwMDkzNn0.sINEtQxwEA-rQHSUfSGXGTYYHHya_4AgnXVe4tRC-2g";

fetch("https://striveschool-api.herokuapp.com/api/product/"), {
    Headers: {
        method: "GET",
        Authorization: apiKey,
    }}
    .then(res => res.json())
    .then(telefono => {
        for(let phone of telefono){
            let cardPhone = creaClone()

            let image = cardPhone.getElementById('imageUrl')
            let name = cardPhone.getElementById('name')
            let price = cardPhone.getElementById('price')

            image.src = phone.imageUrl;
            name.innerText = phone.name;
            price.innerText = phone.price;

            document.querySelector(".row").append(cardPhone)
        }   
    })

    function creaClone(){
        let template = document.querySelector('.cardProduct');
        let clone = template.content.cloneNode(true);
        console.log(template);
            return clone

            
    }

