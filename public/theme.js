window.applyTheme = function(theme) {
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  localStorage.setItem('theme', theme);
  
  // Actualizar botones activos
  document.querySelectorAll('[id^="btn-"]').forEach(btn => btn.classList.remove('bg-slate-700'));
  const activeBtn = document.getElementById('btn-' + theme);
  if (activeBtn) activeBtn.classList.add('bg-slate-700');
  
  console.log('✅ Tema aplicado:', theme);
};

// Aplicar tema guardado al cargar
const savedTheme = localStorage.getItem('theme') || 'system';
window.applyTheme(savedTheme);