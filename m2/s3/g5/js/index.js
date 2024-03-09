const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGYwODJkN2IxMTAwMTkwZTZlMjAiLCJpYXQiOjE3MDk4OTEzMzYsImV4cCI6MTcxMTEwMDkzNn0.sINEtQxwEA-rQHSUfSGXGTYYHHya_4AgnXVe4tRC-2g";

fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    method: "GET",
    Authorization: apiKey
    //"Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((telefono) => {
    for (let phone of telefono) {
      let cardPhone = creaClone();

      let image = cardPhone.querySelector('.card-img-top')
      let name = cardPhone.querySelector('.card-title')
      let description = cardPhone.querySelector('.card-text');

      image.src = phone.imageUrl;
      name.innerText = phone.name;
      description.innerText = phone.description;

      document.querySelector(".row").append(cardPhone);
    }
  });

function creaClone() {
  let template = document.querySelector(".cardProduct");
  let clone = template.content.cloneNode(true);
  console.log(template);
  return clone;
}
