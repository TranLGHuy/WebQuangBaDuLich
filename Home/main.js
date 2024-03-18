function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt
    });
}
$('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
})

$('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
})