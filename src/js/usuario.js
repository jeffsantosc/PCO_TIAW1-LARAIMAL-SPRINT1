$(document).ready(function () {
    $('#btn-cadastro').on('click', function () {
        var cep = $(this).val().replace(/\D/g, '');
        $.post({
            url:"http://localhost:3333/usuario",
            data:{
                nome:"fulano"
            }
        })
    });
});