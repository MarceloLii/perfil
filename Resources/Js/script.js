const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const experiencia = document.getElementById('experiencia');
const educacao = document.getElementById('educacao');

fetch('Resources/Js/data.json')
  .then(response => response.json())
  .then(data => {
    nome.innerText = data.nome;
    email.innerHTML = `<a alt="Email" title="Meu email" href="mailto:${data.email}">${data.email}</a>`;
    telefone.innerText = data.telefone;

    data.linguagens.forEach(dev => {
      const li = document.createElement('li');
      li.innerHTML = `<progress value="${dev.javascript}" max="100" data-label="Javascript ${dev.javascript}%"></progress>`;
      li.innerHTML += `<progress value="${dev.php}" max="100" data-label="PHP ${dev.php}%"></progress>`;
      li.innerHTML += `<progress value="${dev.python}" max="100" data-label="Python ${dev.python}%"></progress>`;
      li.innerHTML += `<progress value="${dev.nodeJs}" max="100" data-label="nodeJs ${dev.nodeJs}%"></progress>`;
      linguagens.appendChild(li);
    });

    data.projetos.forEach(proj => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${proj.url}" target="_black" title="link para o projeto" alt="link para o projeto"><img src="Resources/Img/link-solid.svg" alt="link" class="svg-link"/>${proj.nome}</a> - <span class="font-small">${proj.descricao}</span>`;
      projetos.appendChild(li);
    });
  });
