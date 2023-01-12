import './styles.css'
import { Title, SubTitle, Description, Buttons }
  from '../../components/index'
import pokedex from '../../assets/projects/pokedex.png'
import github from '../../assets/projects/github.png'
import controleFinanceiro from '../../assets/projects/controle-financeiro.png'
import calculadora from '../../assets/projects/calculadora.jpg'
import tempoCozimento from '../../assets/projects/tempo-cozimento.jpg'

export const Projects = () => {
  const state = {
    title: "Projetos",
    pages: "Outros projetos",
    projects: [
      {
        title: "Cozinhando Ovos",
        subTitle: "Mobile - Swift",
        description: "Este projeto é um aplicativo em que auxilia o usuário ao preparar um ovo cozido. O usuário pode selecionar o estado desejado da gema e um cronômetro se inicia. Ao zerar, o dispositivo do usuário irá vibrar, alertando-o que seu ovo está pronto..\n Neste projeto foi fixado conhecimentos de lógica de programação, navegação entre telas e utilização de widgets nativos, como labels, imagens, progress bar e sistema de som do dispositivo.",
        image: tempoCozimento,
        code: "https://github.com/konhevalic/Cozinhando-Ovo"
      },
      {
        title: "Calculadora",
        subTitle: "Mobile - Swift",
        description: "Projeto desenvolvido em Swift utilizando práticas de Auto Layout com View Code, com intuito de fixar a sintaxe de variáveis, funções e condicionais.",
        image: calculadora,
        code: "https://github.com/konhevalic/Calculadora-Swift"
      },
      {
        title: "Controle Financeiro",
        subTitle: "Mobile - Swift",
        description: "Este app auxilia o usuário a organizar seus gastos mensais e monitorar seu limite mensal restante. Além disso, o usuário pode acessar seu historico de gastos através de um gráfico ou de listas..\n Projeto desenvolvido em Swift com arquitetura MVC, utilizando pod Charts para criação de gráficos e pod Dropdown para seleção de opções. Também utilizado CoreData, para persistência de dados.",
        image: controleFinanceiro,
        code: "https://github.com/konhevalic/Controle-Financeiro"
      },
      {
        title: "Api Github",
        subTitle: "Frontend - ReactJS",
        description: "Neste projeto foi trabalho a API do Github, onde o usuário pode buscar por um determinado usuário e com isso obter os repositórios públicos e marcados com estrela..\n Este projeto utiliza práticas de BEM (Block, Element, Identifier) junto com pré-processador Sass",
        image: github,
        code: "https://github.com/konhevalic/API-Github",
        page: "https://api-github-konhevalic.vercel.app"
      },
      {
        title: "Pokedex",
        subTitle: "Frontend - ReactJS",
        description: "Projeto que utiliza api pública do pokemon, onde o usuário pode ver a lista dos primeiros pokemons e adicionar e remover de sua pokedex, além de também ver as características de cada personagem..\n  Neste projeto foi utilizado Bootstrap para criação de layout e responsividade, além do uso do uso da biblioteca Axios que permite integração com a API. Também utilizado recursos de ReactJS como estados globais e Custom Hooks.",
        image: pokedex,
        code: "https://github.com/konhevalic/pokedex",
        page: "https://pokedex-oqsqcyuyn-konhevalic.vercel.app"
      }
    ]
  }

  return (
    <div className="projects">
      <SubTitle subTitle={state.title} />
      <div >
        {
          state.projects.map((project) => {
            return (
              <div id="project">
                <aside id="icon">
                  <img id="image" src={project.image} alt="Ícone do projeto" />
                </aside>
                <aside id="description-projects">
                  <Title key={project.title} title={project.title} />
                  <SubTitle key={project.subTitle} subTitle={project.subTitle} />
                  <Description key={project.description} description={project.description} />
                  <Buttons sourceCode={project.code} project={project.page}/>
                </aside>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}