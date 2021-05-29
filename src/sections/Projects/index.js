import './styles.css'
import { Title, SubTitle, Description, Buttons }
  from '../../components/index'
import imac from '../../assets/projects/imac-copy.png'
import ipad from '../../assets/projects/ipad-copy.png'
import macbook from '../../assets/projects/macbook-copy.png'

export const Projects = () => {
  const state = {
    title: "Projetos",
    pages: "Outros projetos",
    projects: [
      {
        title: "WhatsClone",
        subTitle: "Front-end",
        description: "Blablabla",
        image: imac,
        code: "Ver código",
        page: "Ver projeto"
      },
      {
        title: "FutureTube",
        subTitle: "Front-end",
        description: "Blablabla",
        image: ipad,
        code: "Ver código",
        page: "Ver projeto"
      },
      {
        title: "Pokedex",
        subTitle: "Front-end",
        description: "Blablabla",
        image: macbook,
        code: "Ver código",
        page: "Ver projeto"
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
                  <img src={project.image} alt="" />
                </aside>
                <aside>
                  <Title key={project.title} title={project.title} />
                  <SubTitle key={project.subTitle} subTitle={project.subTitle} />
                  <Description key={project.description} description={project.description} />
                  <Buttons buttonAction={project.code}/>
                  <Buttons buttonAction={project.page}/>
                </aside>
              </div>
            )
          })
        }
      </div>
      <Buttons buttonAction={state.pages}/>
    </div>
  )
}