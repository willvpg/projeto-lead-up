document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Validação do formulário
  const form = document.getElementById('form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !mensagem) {
        status.textContent = 'Por favor, preencha todos os campos.';
        status.style.color = 'red';
      } else {
        status.textContent = 'Mensagem enviada com sucesso!';
        status.style.color = 'green';
        form.reset();
      }
    });
  }

  // Tema escuro
  const themeToggle = document.getElementById('toggle-theme');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
