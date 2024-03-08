
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGYwODJkN2IxMTAwMTkwZTZlMjAiLCJpYXQiOjE3MDk4OTEzMzYsImV4cCI6MTcxMTEwMDkzNn0.sINEtQxwEA-rQHSUfSGXGTYYHHya_4AgnXVe4tRC-2g";

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        Method: "GET",
        Authorization: apiKey
    }
})
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Ehehehe')
        }
    })
    .then((productDetail) => {

        const nameInput = document.getElementById('name')
        const descriptionInput = document.getElementById('description')
        const brandInput = document.getElementById('brand')
        const UrlImgInput = document.getElementById('imageUrl')
        const priceInput = document.getElementById('price')

        nameInput.value = productDetail.name
        descriptionInput.value = productDetail.description
        brandInput.value = productDetail.brand
        UrlImgInput.value = productDetail.imageUrl
        priceInput.value = productDetail.price
    }
    )
    .catch((err) => {
        console.log('Ricontrolla grullo', err)
    })

const formRif = document.getElementById('form')
formRif.addEventListener('submit', function (e) {
    e.preventDefault()
    const nameInput = document.getElementById('name')
    const descriptionInput = document.getElementById('description')
    const priceInput = document.getElementById('price')
    const imageUrlInput = document.getElementById('imageUrl')
    const brandInput = document.getElementById('brand')

    const newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
        brand: brandInput.value,
        imageUrl: imageUrlInput.value,
    }
    console.log(newProduct)


    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
            "Content-Type": "application/json",
            Authorization: apiKey
        },
    })    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Ehehehe')
        }
    })
})