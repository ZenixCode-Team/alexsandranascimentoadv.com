ScrollReveal().reveal('.logo', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.midias', {
    origin: 'top',
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.mini-header', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.header-title', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.servico-card', {
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.experiencia-item', {
    duration: 3000,
    distance: '200px', });

ScrollReveal().reveal('.section-title', {
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('.contato-item', {
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('#title', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });

ScrollReveal().reveal('#subtitle', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });
   
ScrollReveal().reveal('.btn-contato', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });    

ScrollReveal().reveal('.foto-perfil', {
    origin: 'left',
    duration: 2500,
    distance: '200px', });

// Widget de Chat do WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappChat = document.getElementById('whatsappChat');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    const whatsappNumber = '5579996279212';
    const whatsappBaseUrl = 'https://api.whatsapp.com/send';
    
    // Abrir chat
    whatsappBtn.addEventListener('click', function() {
        whatsappChat.classList.add('active');
        chatInput.focus();
        scrollToBottom();
    });
    
    // Fechar chat
    closeChat.addEventListener('click', function() {
        whatsappChat.classList.remove('active');
    });
    
    // Fechar chat ao clicar fora (opcional)
    document.addEventListener('click', function(event) {
        if (whatsappChat.classList.contains('active') && 
            !whatsappChat.contains(event.target) && 
            !whatsappBtn.contains(event.target)) {
            whatsappChat.classList.remove('active');
        }
    });
    
    // Enviar mensagem
    function sendWhatsAppMessage(message) {
        if (!message.trim()) return;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `${whatsappBaseUrl}?phone=${whatsappNumber}&text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Adicionar mensagem do usuário ao chat
        addMessage(message, 'sent');
        
        // Limpar input
        chatInput.value = '';
    }
    
    // Adicionar mensagem ao chat
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const p = document.createElement('p');
        p.textContent = text;
        contentDiv.appendChild(p);
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'message-time';
        const now = new Date();
        timeSpan.textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeSpan);
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    // Scroll para o final
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Enviar ao clicar no botão
    sendMessage.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            sendWhatsAppMessage(message);
        }
    });
    
    // Enviar ao pressionar Enter
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendWhatsAppMessage(message);
            }
        }
    });
});