const passwordIcons = document.querySelectorAll('.password-i');
const form = document.querySelector('#form')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const data = document.querySelector('#data')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const confirmarSenha = document.querySelector('#confirmar-senha')
const genero = document.querySelector('#genero')


passwordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.form-control');
        
        // Alterna o tipo do input
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');

            return;
        }  
        input.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
        
    });
});

document.getElementById('form').addEventListener('submit', function(e) {
    console.log('passoui')
    e.preventDefault(); // Impede o envio imediato

console.log(senha.value)
console.log(confirmarSenha.value)
      if (senha.value !== confirmarSenha.value) {
        alert('A senha está divergente da confirmação');
        return
      }
  
      const dados = {
        nome: `${nome.value} ${sobrenome.value}`,
        data: data.value, 
        email: email.value,
        senha: senha.value,
        genero: genero.value
      }
      fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar');
        }
        return response.json();
      })
      .then(data => {
        alert('Cadastro realizado com sucesso!');
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro no cadastro.');
      });
  });


  

