$(document).ready(function() {
    $('.nav-burger').click(() => {
        $('.overlay, .nav-list').addClass('active')
    })
    $('.nav-list div, .overlay').click(() => {
        $('.overlay, .nav-list').removeClass('active')
    })
})

const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const submitButton = document.querySelector('form p button')
const acceptField = document.querySelector('.accept')

submitButton.onclick = function() {
    console.log(inputs);
    let emptyField = 0
    for (let input of inputs) {
        console.log(input.value);
        if (input.value == '') {
            input.classList.add('request')
            input.parentElement.classList.add('request')
            emptyField++
            } else {
                input.classList.remove('request')
                input.parentElement.classList.remove('request')
            }
    }
    if (emptyField == 0) {
        acceptField.style.display = 'flex'
        for (let input of inputs) {
            input.value = ''
        }
        textarea.value = ''
    }
}

const acceptButton = document.querySelector('.accept-button')
acceptButton.onclick = function() {
    acceptField.style.display = 'none'
}