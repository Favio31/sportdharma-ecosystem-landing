window.applyTheme = function(theme) {
  console.log('🎨 Aplicando tema:', theme);
  
  const isDark = theme === 'dark' || 
                 (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    
    // Fondo del body
    document.body.style.backgroundColor = '#0f172a';
    document.body.style.color = '#f1f5f9';
    
    // Header
    const header = document.querySelector('header');
    if (header) header.style.backgroundColor = '#0B0F1A';
    
    // Main
    const main = document.querySelector('main');
    if (main) main.style.backgroundColor = '#0f172a';
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) footer.style.backgroundColor = '#0B0F1A';
    
    // Todos los textos
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
      el.style.color = '#f1f5f9';
    });
    
    document.querySelectorAll('p').forEach(el => {
      el.style.color = '#cbd5e1';
    });
    
    document.querySelectorAll('span, div, li, td, th').forEach(el => {
      if (!el.closest('header') && !el.closest('nav') && !el.closest('button')) {
        el.style.color = '#e2e8f0';
      }
    });
    
    // Enlaces
    document.querySelectorAll('a').forEach(el => {
      el.style.color = '#60a5fa';
    });
    
    // Botones
    document.querySelectorAll('button').forEach(el => {
      if (!el.id.startsWith('btn-')) {
        el.style.color = '#f1f5f9';
      }
    });
    
    console.log('✅ Modo oscuro APLICADO');
  } else {
    document.documentElement.classList.remove('dark');
    
    // Fondo del body
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#0f172a';
    
    // Header (siempre oscuro)
    const header = document.querySelector('header');
    if (header) header.style.backgroundColor = '#0B0F1A';
    
    // Main
    const main = document.querySelector('main');
    if (main) main.style.backgroundColor = '#ffffff';
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) footer.style.backgroundColor = '#0B0F1A';
    
    // Textos
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
      el.style.color = '#0f172a';
    });
    
    document.querySelectorAll('p').forEach(el => {
      el.style.color = '#334155';
    });
    
    document.querySelectorAll('span, div, li, td, th').forEach(el => {
      if (!el.closest('header') && !el.closest('nav') && !el.closest('button')) {
        el.style.color = '#0f172a';
      }
    });
    
    // Enlaces
    document.querySelectorAll('a').forEach(el => {
      el.style.color = '#0f172a';
    });
    
    // Botones
    document.querySelectorAll('button').forEach(el => {
      if (!el.id.startsWith('btn-')) {
        el.style.color = '#0f172a';
      }
    });
    
    console.log('☀️ Modo claro APLICADO');
  }
  
  // Guardar tema
  localStorage.setItem('theme', theme);
  
  // Actualizar botones activos
  document.querySelectorAll('[id^="btn-"]').forEach(btn => {
    btn.classList.remove('bg-slate-700');
  });
  const activeBtn = document.getElementById('btn-' + theme);
  if (activeBtn) activeBtn.classList.add('bg-slate-700');
};

// Aplicar al cargar
const savedTheme = localStorage.getItem('theme') || 'system';
window.applyTheme(savedTheme);