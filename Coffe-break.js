


// Executa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('sideMenu');
    const loginForm = document.getElementById('loginForm');
    const addProductButton = document.getElementById('addProductButton');
    const logoutButton = document.getElementById("logoutButton");
    
    // Exibe a seção Carrinho no início da página
    showSection('carrinho-certo');
    
    // Alterna o menu lateral
    window.toggleMenu = function () {
        sideMenu.classList.toggle('open');
    };
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !event.target.closest('.menu-toggle') && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
        }
    });

    // Adiciona evento aos botões com a classe "button-coffe" para exibir notificação
    document.querySelectorAll('.button-coffe').forEach(button => {
        button.addEventListener('click', () => {
            showNotification("Adicionado com sucesso!");
        });
    });

    // Botão "Adicionar Produto" - exibe a seção "Fazer Pedido"
    if (addProductButton) {
        addProductButton.addEventListener('click', () => {
            showSection('lista-itens');
            showNotification("Adicionado com sucesso!");
        });
    }

    // Evento para o botão "Sair"
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            // Lógica para sair do aplicativo
            window.location.href = "login.html"; // Redireciona para a página de login
        });
    }

    // Evento do formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Se o login for bem-sucedido, redireciona para a outra página
            window.location.href = 'index.html'; 
        });
    }
});

// Função para exibir uma seção específica
function showSection(sectionId) {
    // Oculta todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção especificada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Função para exibir a notificação de sucesso
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Exibe a notificação e a oculta após 3 segundos
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
    }, 3000);
}


document.getElementById('addProductButton').addEventListener('click', function() {
    const cartGrid = document.getElementById('cartGrid');
    
    // Criar uma nova linha para a tabela
    const itemRow = document.createElement('tr');
    
    // Descrição
    const descriptionValue = document.createElement('td');
    descriptionValue.textContent = "Exemplo de Produto"; // Substitua pelo valor da descrição
    
    // Quantidade
    const quantityValue = document.createElement('td');
    quantityValue.textContent = "1"; // Substitua pelo valor da quantidade
    
    // Unidade de Medida
    const unitValue = document.createElement('td');
    unitValue.textContent = "UNI"; // Substitua pelo valor da unidade
    
    // Adicionar as células à nova linha
    itemRow.appendChild(descriptionValue);
    itemRow.appendChild(quantityValue);
    itemRow.appendChild(unitValue);
    
    // Adicionar a nova linha ao corpo da tabela
    cartGrid.appendChild(itemRow);
});





