// main.js - interactivity
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  var years = document.querySelectorAll('#ano, #ano2, #ano3, #ano4');
  years.forEach(function(el){ if(el) el.textContent = new Date().getFullYear(); });

  // mobile nav toggle
  var btn = document.getElementById('nav-toggle');
  if(btn){
    btn.addEventListener('click', function(){
      var nav = document.getElementById('main-nav');
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  }

  // simple contato form validation
  var formContato = document.getElementById('form-contato');
  if(formContato){
    formContato.addEventListener('submit', function(e){
      var email = formContato.querySelector('input[type=email]');
      if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        e.preventDefault();
        alert('Por favor, informe um e-mail válido.');
        email.focus();
      }
    });
  }
});
