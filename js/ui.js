// UI helpers: dark mode, mobile menu toggle, year, modal helper
(function(){
  // set copyright year
  document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // initialize theme from localStorage
    const html = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        console.log('Toggled to:', theme);
      });
    }
  });

  // mobile menu toggle (keeps same global name used in markup)
  window.myFunction = function myFunction() {
    var x = document.getElementById("myTopnav");
    if (!x) return;
    var btn = x.querySelector('button.icon');
    var overlay = x.querySelector('.menu-overlay');
    var isOpen = x.classList.toggle('responsive');

    if (isOpen) {
      if (btn) {
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Close menu');
        btn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
      }
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
        btn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
      }
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // open large chart in modal (used by charts when available)
  window.openLargeChart = function openLargeChart(chart) {
    try {
      const modal = document.getElementById('modalChartOverlay');
      const modalCanvas = document.getElementById('modalChartCanvas');
      const modalTitle = document.getElementById('modalChartTitle');
      const modalClose = document.getElementById('modalChartClose');
      if (!modal || !modalCanvas) return;
      const labels = chart.data.labels || [];
      const datasets = chart.data.datasets || [];
      const title = (chart.options && chart.options.plugins && chart.options.plugins.title && chart.options.plugins.title.text) || '';

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.classList.remove('opacity-0');
      if (modalTitle) modalTitle.textContent = title || '';

      try { const existing = Chart.getChart(modalCanvas); if (existing) existing.destroy(); } catch(e){}
      new Chart(modalCanvas.getContext('2d'), {
        type: chart.config ? chart.config.type : 'line',
        data: { labels: labels, datasets: datasets },
        options: Object.assign({}, chart.options || {}, { responsive: true, maintainAspectRatio: false, plugins: Object.assign({}, (chart.options && chart.options.plugins) || {}, { title: { display: true, text: title } }) })
      });

      if (modalClose) {
        const hide = () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          try { const c = Chart.getChart(modalCanvas); if (c) c.destroy(); } catch(e){}
        };
        modalClose.onclick = hide;
        modal.onclick = function(e) { if (e.target === modal) hide(); };
      }
    } catch (e) { console.error('Failed to open large chart', e); }
  };

})();
