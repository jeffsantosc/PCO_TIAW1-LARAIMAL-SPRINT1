$(document).ready(function() {
    $('#cadastro-form').submit(function(e) {
        e.preventDefault(); // Previne o envio do formulário

        // Obtém os valores dos campos do formulário
        const nome = $('input[name="nome"]').val();
        const email = $('input[name="email"]').val();
        const cpf = $('input[name="numero"]').val();
        const cep = $('input[name="cep"]').val();
        const estado = $('input[name="estado"]').val();
        const cidade = $('input[name="cidade"]').val();
        const bairro = $('input[name="bairro"]').val();
        const logradouro = $('input[name="logradouro"]').val();
        const numero = $('input[name="numero"]').val();
        const telefone = $('input[name="numero"]').val(); // Note que este campo pode ser o telefone

        // Cria um objeto com os dados do formulário
        const novoCadastro = {
            "nome": nome,
            "email": email,
            "cpf": cpf,
            "cep": cep,
            "estado": estado,
            "cidade": cidade,
            "bairro": bairro,
            "logradouro": logradouro,
            "numero": numero,
            "telefone": telefone
        };

        // Exibe os dados no console (simulação de envio)
        console.log(novoCadastro);

        // Aqui você pode realizar a requisição AJAX para enviar os dados para um servidor ou manipular os dados de outra forma.
        // Neste exemplo, vamos apenas simular um feedback de sucesso
        alert('Cadastro enviado com sucesso!');

        // Reinicializa os campos do formulário após o envio (opcional)
        $('#cadastro-form')[0].reset();
    });
});