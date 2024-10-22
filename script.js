document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones Lucide
    lucide.createIcons();

    // Gerar stories
    const storiesSection = document.querySelector('.stories-section');
    for (let i = 1; i <= 8; i++) {
        const story = document.createElement('div');
        story.className = 'story';
        story.innerHTML = `
            <img src="/placeholder.svg?height=60&width=60&text=User${i}" alt="User ${i}" class="story-avatar">
            <span class="story-username">user_${i}</span>
        `;
        storiesSection.appendChild(story);
    }

    // Gerar posts
    const feed = document.querySelector('.feed');
    for (let i = 1; i <= 3; i++) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <div class="post-header">
                <img src="/placeholder.svg?height=32&width=32&text=U${i}" alt="User ${i}" class="post-avatar">
                <span class="post-username">user_${i}</span>
            </div>
            <img src="/placeholder.svg?height=600&width=600&text=Post${i}" alt="Post ${i}" class="post-image">
            <div class="post-actions">
                <i data-lucide="heart"></i>
                <i data-lucide="message-circle"></i>
                <i data-lucide="send"></i>
            </div>
            <div class="post-likes">1,234 curtidas</div>
            <div class="post-caption"><strong>user_${i}</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="post-comments">Ver todos os 10 comentários</div>
            <div class="post-time">HÁ 2 HORAS</div>
            <div class="post-add-comment">
                <input type="text" placeholder="Adicione um comentário...">
            </div>
        `;
        feed.appendChild(post);
    }

    // Recriar ícones Lucide para os elementos adicionados dinamicamente
    lucide.createIcons();
});