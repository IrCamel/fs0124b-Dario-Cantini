const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGYwODJkN2IxMTAwMTkwZTZlMjAiLCJpYXQiOjE3MDk4OTEzMzYsImV4cCI6MTcxMTEwMDkzNn0.sINEtQxwEA-rQHSUfSGXGTYYHHya_4AgnXVe4tRC-2g";

let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers: {
        method: "GET",
        Authorization: apiKey,
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(details => {

        const nameInput = document.getElementById('name')
        const descriptionInput = document.getElementById('description')
        const brandInput = document.getElementById('brand')
        const UrlImgInput = document.getElementById('imageUrl')
        const priceInput = document.getElementById('price')

        nameInput.innerText = details.name;
        descriptionInput.innerText = details.description;
        brandInput.innerText = details.brand;
        UrlImgInput.src = details.imageUrl;
        priceInput.innerText = details.price + " €";

    })