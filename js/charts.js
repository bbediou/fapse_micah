// Charts: CSV loader, chart initializers, update translations, demo controls
(function(){
  function parseCSVText(csvText) {
    const rows = csvText.trim().split('\n').map(row => row.split(',').map(cell => cell.trim().replace(/^"|"$/g, '')));
    const rawHeaders = rows[0].map(h => h || '');
    const headers = rawHeaders.map(h => h ? h.toLowerCase().replace(/\s+/g, '_') : 'col_empty');
    return rows.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, i) => {
        const raw = (row[i] || '').trim();
        const num = parseFloat(raw);
        obj[header] = (raw === '' ? null : (isNaN(num) ? raw : num));
      });
      return obj;
    });
  }

  async function loadCSVData(url) {
    const response = await fetch(url);
    try { console.debug('fetch', url, 'status', response.status, 'ok', response.ok); } catch (e) {}
    if (!response.ok) throw new Error('Failed to fetch CSV: ' + response.status);
    const csvText = await response.text();
    return parseCSVText(csvText);
  }

  function rand(n, base=0) { return Array.from({length:n}, () => parseFloat((Math.random()*0.6 + base).toFixed(2))); }

  // Update chart translations (used by i18n when language changes)
  window.updateChartTranslations = function updateChartTranslations(lang) {
    try {
      const chart = window.timeSpentChart || Chart.getChart(document.getElementById('chartTimeSpent'));
      if (chart) {
        const title = (typeof t === 'function' ? t('charts.timeSpent.title', lang) : null) || 'Time spent on device by age (hours/week)';
        const xAxis = (typeof t === 'function' ? t('charts.timeSpent.xAxis', lang) : null) || 'Age';
        const yAxis = (typeof t === 'function' ? t('charts.timeSpent.yAxis', lang) : null) || 'Hours per week';
        if (chart.options && chart.options.plugins && chart.options.plugins.title) chart.options.plugins.title.text = title;
        if (chart.options && chart.options.scales && chart.options.scales.x && chart.options.scales.x.title) chart.options.scales.x.title.text = xAxis;
        if (chart.options && chart.options.scales && chart.options.scales.y && chart.options.scales.y.title) chart.options.scales.y.title.text = yAxis;
        chart.update();
      }
    } catch (e) { console.warn('updateChartTranslations failed', e); }
  };

  // Initialize charts on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', async function() {
    try {
      // Detect dark mode
      const isDarkMode = () => document.documentElement.classList.contains('dark');
      const darkAxisColor = '#f1f5f9'; // slate-100 for white-ish text in dark mode
      // Time spent chart
      let data;
      try { data = await loadCSVData('./data/timespent_device.csv'); } catch (err) {
        console.warn('Could not fetch CSV file, using embedded fallback data. Error:', err);
        const fallbackCSV = `,age,timepoint,computer,smartphone,tablet,TV,gaming console
1,12,t1,7.462765957,16.90425532,3.345744681,7.622340426,6.234042553
2,13,t1,7.911174785,20.38252149,4.714899713,8.951289398,9.323782235
3,14,t1,11.45604396,24.6978022,3.901098901,7.615384615,10.73626374
4,15,t1,22.38059701,32.05223881,2.6171875,5.753846154,9.78030303
5,16,t1,25.11363636,27.7706422,2.609090909,5.963636364,5.75
6,17,t1,20.64754098,29.99180328,2.721311475,6.286885246,3.93442623`;
        data = parseCSVText(fallbackCSV);
      }

      const ages = [...new Set(data.map(d => Number(d.age)))].filter(a => !isNaN(a)).sort((a,b) => a - b);
      const deviceKeys = ['computer', 'smartphone', 'tablet', 'tv', 'gaming_console'];
      const deviceLabels = { computer: 'Computer', smartphone: 'Smartphone', tablet: 'Tablet', tv: 'TV', gaming_console: 'Gaming console' };

      const deviceData = deviceKeys.map(key => ({ label: deviceLabels[key] || key, data: ages.map(age => { const row = data.find(d => Number(d.age) === age); return row && row[key] != null ? Number(row[key]) : null; }) }));

      const timeSpentEl = document.getElementById('chartTimeSpent');
      if (timeSpentEl) {
        const timeSpentCtx = timeSpentEl.getContext('2d');
        window.timeSpentChart = new Chart(timeSpentCtx, {
          type: 'line',
          data: { labels: ages, datasets: (function(){ const palette = ['rgb(99, 102, 241)', 'rgb(59, 130, 246)', 'rgb(147, 51, 234)', 'rgb(16, 185, 129)', 'rgb(249, 115, 22)']; return deviceData.map((device, i) => ({ label: device.label, data: device.data, borderColor: palette[i % palette.length], pointBackgroundColor: palette[i % palette.length], pointBorderColor: palette[i % palette.length], pointRadius: 4, pointHoverRadius: 6, tension: 0.4, fill: false })); })() },
          options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: false, text: (typeof t === 'function' ? t('charts.timeSpent.title', localStorage.getItem('lang')) : null) || 'Time spent on device by age (hours/week)', font: { size: 16, weight: 'bold' } }, legend: { position: 'bottom', labels: { usePointStyle: true } } }, scales: { y: { beginAtZero: true, title: { display: true, text: (typeof t === 'function' ? t('charts.timeSpent.yAxis', localStorage.getItem('lang')) : null) || 'Hours per week' } }, x: { title: { display: true, text: (typeof t === 'function' ? t('charts.timeSpent.xAxis', localStorage.getItem('lang')) : null) || 'Age' } } } }
        });
      }

      // Ownership chart (alias for time spent on device by age)
      const ownershipEl = document.getElementById('chartOwnership');
      if (ownershipEl) {
        const ownershipCtx = ownershipEl.getContext('2d');
        const textColor = isDarkMode() ? darkAxisColor : '#0f172a';
        window.ownershipChart = new Chart(ownershipCtx, {
          type: 'line',
          data: { labels: ages, datasets: (function(){ const palette = ['rgb(99, 102, 241)', 'rgb(59, 130, 246)', 'rgb(147, 51, 234)', 'rgb(16, 185, 129)', 'rgb(249, 115, 22)']; return deviceData.map((device, i) => ({ label: device.label, data: device.data, borderColor: palette[i % palette.length], pointBackgroundColor: palette[i % palette.length], pointBorderColor: palette[i % palette.length], pointRadius: 4, pointHoverRadius: 6, tension: 0.4, fill: false })); })() },
          options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: false, text: (typeof t === 'function' ? t('charts.timeSpent.title', localStorage.getItem('lang')) : null) || 'Time spent on device by age (hours/week)', font: { size: 16, weight: 'bold' } }, legend: { position: 'bottom', labels: { usePointStyle: true, color: textColor } } }, scales: { y: { beginAtZero: true, ticks: { color: textColor }, title: { display: true, text: (typeof t === 'function' ? t('charts.timeSpent.yAxis', localStorage.getItem('lang')) : null) || 'Hours per week', color: textColor } }, x: { ticks: { color: textColor }, title: { display: true, text: (typeof t === 'function' ? t('charts.timeSpent.xAxis', localStorage.getItem('lang')) : null) || 'Age', color: textColor } } } }
        });
      }

      // EF chart
      try {
        let ef;
        try { ef = await loadCSVData('./data/EF_data.csv'); } catch (err) {
          console.warn('Could not fetch ./data/EF_data.csv, using fallback. Error:', err);
          const fallbackCSV = `timepoint,cognitive_flexibility,inhibitory_control,working_memory,speed_of_processing\nt1,-0.019284556,-0.024582998,-0.023957099,-0.021286052\nt2,0.334127488,0.248279243,0.058910045,0.327427549\nt3,0.629762214,0.35073871,0.327661343,0.536332956`;
          ef = parseCSVText(fallbackCSV);
        }
        if (ef && ef.length) {
          const labels = ef.map(r => (r.timepoint || '').toString());
          const keys = Object.keys(ef[0]).filter(k => k !== 'timepoint' && k !== '');
          const palette = ['rgb(99,102,241)','rgb(59,130,246)','rgb(147,51,234)','rgb(16,185,129)','rgb(249,115,22)','rgb(236,72,153)'];
          const datasets = keys.map((k,i) => ({ label: k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()), data: ef.map(r => (r[k]==null?null:Number(r[k]))), borderColor: palette[i%palette.length], tension:0.4, fill:false }));
          const ctxEFEl = document.getElementById('chartEF');
          if (ctxEFEl) {
            const ctxEF = ctxEFEl.getContext('2d');
            const efPalette = ['rgb(220,38,38)','rgb(234,88,12)','rgb(34,197,94)','rgb(30,64,175)','rgb(168,85,247)','rgb(14,165,233)'];
            const efDatasets = datasets.map((d,i) => ({ label: d.label, data: d.data, borderColor: efPalette[i % efPalette.length], pointBackgroundColor: efPalette[i % efPalette.length], pointBorderColor: efPalette[i % efPalette.length], pointRadius: 4, pointHoverRadius: 6, tension: 0.4, fill: false }));
            window.efChart = new Chart(ctxEF, {
              type: 'line',
              data: { labels, datasets: efDatasets },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: { display: false },
                  legend: { position: 'bottom', labels: { usePointStyle: true, color: isDarkMode() ? darkAxisColor : '#0f172a' } }
                },
                scales: {
                  y: { beginAtZero: false, ticks: { color: isDarkMode() ? darkAxisColor : '#0f172a' }, title: { display: true, text: 'Z-score', color: isDarkMode() ? darkAxisColor : '#0f172a' } },
                  x: { ticks: { color: isDarkMode() ? darkAxisColor : '#0f172a' }, title: { display: true, text: 'Timepoint', color: isDarkMode() ? darkAxisColor : '#0f172a' } }
                }
              }
            });
          }
        }
      } catch (e) { console.error('Failed to initialize EF chart', e); }

      // Well-being radar chart
      try {
        const wbCtxEl = document.getElementById('chartWB');
        if (wbCtxEl) {
          const wbCtx = wbCtxEl.getContext('2d');
          const categories = ['None','Rare','Sometimes','Often'];
          const wellbeing = [7.8, 7.4, 7.0, 6.6];
          const textColor = isDarkMode() ? darkAxisColor : '#0f172a';
          new Chart(wbCtx, { type: 'radar', data: { labels: categories, datasets: [{ label: 'Well-being (1–10)', data: wellbeing, borderWidth: 2, pointRadius: 3 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: textColor } } }, scales: { r: { suggestedMin: 5, suggestedMax: 9, ticks: { color: textColor }, pointLabels: { color: textColor } } } } });
        }
      } catch (e) { console.warn('wb chart failed', e); }

      // Randomize button handler (safe guard)
      const btn = document.getElementById('btnRefresh');
      if (btn) btn.addEventListener('click', () => {
        try {
          const ch1 = Chart.getChart(document.getElementById('chartTimeSpent')) || window.timeSpentChart;
          if (ch1) { ch1.data.datasets.forEach((ds, i) => { ds.data = rand(ch1.data.labels.length, 0.4 + i*0.1); }); ch1.update(); }
        } catch (e) {}
        try {
          const ch2 = Chart.getChart(document.getElementById('chartEF')) || window.efChart;
          if (ch2) { ch2.data.datasets.forEach((ds, i) => { ds.data = rand(ch2.data.labels.length, 0.4 + i*0.1); }); ch2.update(); }
        } catch (e) {}
        try { const ch3 = Chart.getChart(document.getElementById('chartWB')); if (ch3) { ch3.data.datasets[0].data = rand(4, 6.4).map(v => parseFloat((v + 0.8).toFixed(1))); ch3.update(); } } catch(e){}
      });

    } catch (error) { console.error('Error loading or rendering chart:', error); }
  });

})();
