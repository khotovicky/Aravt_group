$(document).ready(function() {
    $('.nav-burger').click(() => {
        $('.overlay, .nav-list').addClass('active')
    })
    $('.nav-list div, .overlay').click(() => {
        $('.overlay, .nav-list').removeClass('active')
    })
})
