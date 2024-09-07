function renderizarPilotos() {
    let container = document.getElementById('pilot-grid');
    let html = '';

    pilotos.forEach(piloto => {
        html += `
            <div class="item">
                <img src="${piloto.imagem}" alt="${piloto.titulo}" class="card-img"> 
                <h2>${piloto.titulo}</h2>
                <p>${piloto.descricao}</p>
                <p>Equipe: ${piloto.equipe}</p>
                <a href="${piloto.link}" target="_blank">Ver Perfil</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarEquipes() {
    let container = document.getElementById('equipes-grid');
    let html = '';

    equipes.forEach(equipe => {
        html += `
            <div class="item">
                <img src="${equipe.imagem}" alt="${equipe.titulo}" class="card-img">
                <h2>${equipe.titulo}</h2>
                <p>${equipe.descricao}</p>
                <p>País: ${equipe.pais}</p>
                <p>Maior vencedor: ${equipe.maiorVencedor}</p>
                <a href="${equipe.link}" target="_blank">Ver Detalhes</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarLendas() {
    let container = document.getElementById('lendas-grid');
    let html = '';

    lendas.forEach(lenda => {
        html += `
            <div class="item">
                <img src="${lenda.imagem}" alt="${lenda.titulo}" class="card-img">
                <h2>${lenda.titulo}</h2>
                <p>${lenda.descricao}</p>
                <p>Equipe: ${lenda.equipe}</p>
                <a href="${lenda.link}" target="_blank">Ver História</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarGP() {
    let container = document.getElementById('gp-grid');
    let html = '';

    grandesPremios.forEach(grandePremio => {
        html += `
            <div class="item">
                <img src="${grandePremio.imagem}" alt="${grandePremio.titulo}" class="card-img">
                <h2>${grandePremio.titulo}</h2>
                <p>${grandePremio.descricao}</p>
                <p> Maior vencedor: ${grandePremio.maiorVencedor}</p>
                <a href="${grandePremio.link}" target="_blank">Ver História</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
        return;
    }

    // Arrays contendo os dados
    let searchArrays = [pilotos, equipes, grandesPremios, lendas];
    let resultados = "";

    // Variáveis para armazenar dados encontrados
    let equipesEncontradas = [];
    let lendasEncontradas = [];

    // Itera sobre o array de equipes
    equipes.forEach(equipe => {
        let titulo = equipe.titulo.toLowerCase();
        let descricao = equipe.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item">
                    ${equipe.imagem ? `<img src="${equipe.imagem}" alt="${equipe.titulo}" class="card-img">` : ""}
                    <h2>${equipe.titulo}</h2>
                    <p>${equipe.descricao}</p>
                    <a href="${equipe.link}" target="_blank">Ver História</a>
                </div>
            `;
            equipesEncontradas.push(equipe.titulo);
        }
    });

    // Itera sobre o array de lendas
    lendas.forEach(lenda => {
        let titulo = lenda.titulo.toLowerCase();
        let descricao = lenda.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item">
                    ${lenda.imagem ? `<img src="${lenda.imagem}" alt="${lenda.titulo}" class="card-img">` : ""}
                    <h2>${lenda.titulo}</h2>
                    <p>${lenda.descricao}</p>
                    <a href="${lenda.link}" target="_blank">Ver História</a>
                </div>
            `;
            lendasEncontradas.push(lenda.titulo);
        }
    });

    // Itera sobre o array de pilotos
    pilotos.forEach(piloto => {
        let titulo = piloto.titulo.toLowerCase();
        let descricao = piloto.descricao.toLowerCase();
        let equipe = piloto.equipe ? piloto.equipe.toLowerCase() : "";

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || equipesEncontradas.includes(equipe)) {
            resultados += `
                <div class="item">
                    ${piloto.imagem ? `<img src="${piloto.imagem}" alt="${piloto.titulo}" class="card-img">` : ""}
                    <h2>${piloto.titulo}</h2>
                    <p>${piloto.descricao}</p>
                    <a href="${piloto.link}" target="_blank">Ver História</a>
                </div>
            `;
        }
    });

    // Itera sobre o array de grandes prêmios
    grandesPremios.forEach(grandePremio => {
        let titulo = grandePremio.titulo.toLowerCase();
        let descricao = grandePremio.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item">
                    ${grandePremio.imagem ? `<img src="${grandePremio.imagem}" alt="${grandePremio.titulo}" class="card-img">` : ""}
                    <h2>${grandePremio.titulo}</h2>
                    <p>${grandePremio.descricao}</p>
                    <a href="${grandePremio.link}" target="_blank">Ver História</a>
                </div>
            `;
        }
    });

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

