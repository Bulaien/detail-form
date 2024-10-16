const number = document.querySelector('#cardnumber');
const pNumber = document.querySelector('.p-number');
const cardHolder = document.querySelector('#cardholder');
const pName = document.querySelector('.p-name');
const expDateMonth = document.querySelector('#dateM');
const expDateYear = document.querySelector('#dateY');
const pDate = document.querySelector('.p-date');
const cvc = document.querySelector('#cvc');
const cvcNumber = document.querySelector('.cv-number');



const button = document.querySelector('#button')

button.addEventListener('click', (e) => {
    const expFull = `${expDateMonth.value}/${expDateYear.value}`
    e.preventDefault()
    console.log(number.value)
    if (number.value != "" && cardHolder.value != "" && expDateMonth.value != "" && expDateYear.value != "" && cvc.value != "") {
        pNumber.innerHTML = number.value
        pName.innerHTML = cardHolder.value
        pDate.innerHTML = expFull
        cvcNumber.innerHTML = cvc.value
        number.value = ""
        cardHolder.value = ""
        expDateMonth.value = ""
        expDateYear.value = ""
        cvc.value = ""
    } else {
        alert("Please fill in all the fields")
    }
})
