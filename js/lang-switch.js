function setLang(lang) {
  localStorage.setItem('preferredLang', lang);
  if(lang === 'hu') {
    if (!window.location.href.endsWith('index-hu.html')) {
      window.location.href = 'index.html';
    }
  } else if(lang === 'en') {
    if (!window.location.href.endsWith('index.html')) {
      window.location.href = 'index.html';
    }
  }
}

window.onload = function() {
  const lang = localStorage.getItem('preferredLang');
  if(lang) {
    if(lang === 'hu' && !window.location.pathname.endsWith('index-hu.html')) {
      window.location.href = 'index-hu.html';
    } else if(lang === 'en' && !window.location.pathname.endsWith('index.html')) {
      window.location.href = 'index.html';
    }
  }
}
