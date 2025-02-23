const carousels = document.querySelectorAll('.moto-carousel');

carousels.forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const openModalButton = carousel.querySelector('.openModal');
    const motoName = carousel.dataset.motoName;
    const imageWidth = images.querySelector('img').clientWidth;
    let counter = 0;

    nextButton.addEventListener('click', () => {
        counter++;
        if (counter >= images.children.length) {
            counter = 0;
        }
        images.style.transform = `translateX(-${counter * imageWidth}px)`;
    });

    prevButton.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = images.children.length - 1;
        }
        images.style.transform = `translateX(-${counter * imageWidth}px)`;
    });

    openModalButton.addEventListener('click', () => {
        const modal = document.getElementById('motoModal');
        modal.style.display = 'block';
        document.getElementById('moto').value = motoName;
    });
});

const closeModalButton = document.querySelector('.close');
const modal = document.getElementById('motoModal');

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('motoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Formulário enviado!');
    modal.style.display = 'none';
});

//Gerar o link do Whatsapp
function gerarLinkWhatsApp() {
    const moto = document.getElementById("moto").value;
    const valorEntrada = document.getElementById("valorEntrada").value;
    const formaPagto = document.getElementById("formaPagto").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cpf = document.getElementById("cpf").value;
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const ddd = document.getElementById("ddd").value;
    const celular = document.getElementById("celular").value;
    const telefone = "+5527997581606"; // Seu número de telefone

    const mensagem = `Olá Larissa, por favor realizar a simulação de um ${formaPagto} para os dados abaixo: 
    
    Moto: ${moto},
    Entrada: ${valorEntrada},
    Nome: ${nomeCompleto},
    CPF: ${cpf},
    Data Nascimento: ${dataNascimento},
    Celular: (${ddd}) ${celular}`;
    
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank'); // Abre o link em uma nova aba
  }