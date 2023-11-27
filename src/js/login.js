$(document).ready(function () {
    $('#btn-login').on('click', function (e) {
        e.preventDefault();
        const documento = $('input[name="documento"]').val();
        const senha = $('input[name="password"]').val();
        const url = `${baseUrl}?documento=${documento}&senha=${senha}`;

        $.ajax({
            type: "GET",
            url: url,
            success: function (response) {
                if (response && response.length > 0) {
                    console.log("Login bem-sucedido:", response);
                    window.location.href = "login.html";
                } else {
                    window.alert("Login falhou. Usuário não encontrado ou senha incorreta.");
                }
            },
            error: function (error) {
                console.error("Erro na solicitação de login", error);
                // Tratar erros na solicitação
            }
        });
    });
});