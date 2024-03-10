const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGYwODJkN2IxMTAwMTkwZTZlMjAiLCJpYXQiOjE3MDk4OTEzMzYsImV4cCI6MTcxMTEwMDkzNn0.sINEtQxwEA-rQHSUfSGXGTYYHHya_4AgnXVe4tRC-2g";

let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers: {
        method: "GET",
        "Authorization": apiKey,
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(modifica => {

        const nameInput = document.getElementById('name')
        const descriptionInput = document.getElementById('description')
        const brandInput = document.getElementById('brand')
        const UrlImgInput = document.getElementById('imageUrl')
        const priceInput = document.getElementById('price')

        nameInput.value = modifica.name;
        descriptionInput.value = modifica.description;
        brandInput.value = modifica.brand;
        UrlImgInput.value = modifica.imageUrl;
        priceInput.value = modifica.price;

    })

    let salvaBtn = document.querySelector('#save')
    salvaBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let name = document.querySelector('#name').value
        let brand = document.querySelector('#brand').value
        let price = document.querySelector('#price').value
        let imageUrl = document.querySelector('#imageUrl').value
        let description = document.querySelector('#description').value
    
        let phone = {
            name,
            description,
            brand,
            imageUrl,
            price
    
        }
    
        fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
                    method:'PUT',
                    headers:{
                        'Content-type':'application/json',
                        Authorization: apiKey
                    },
                    body:JSON.stringify(phone)
                })
                .then(res => res.json())
                .then(res => {
                    location.href = 'index.html'
                })
    })


    let deleteBtn = document.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', (e) => {
        (e).preventDefault
        fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-type':'application/json',
                Authorization: apiKey
            },
            
        })
        .then(res => res.json())
        .then(res => {
        location.href = 'index.html'
    })})