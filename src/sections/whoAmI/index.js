import './styles.css'
import {Title, SubTitle, Description, Social, Buttons} from '../../components/index'

export const WhoAmI = () => {
  const state = {
    myName: "Eu sou Alan Konhevalic",
    subTitle: "Desenvolvedor Front-End Jr.",
    description: "Formando em Engenharia Elétrica pela UTFPR, estou desenvolvendo habilidades e buscando novos conhecimentos com desenvolvimento web, usufruindo de novas tecnologias e boas práticas de programação.",
    technologies: "HTML | CSS | JavaScript | Reactjs",
    button: "CV em PDF"
  }

  return (
      <div className="container">
        <section className="wrap">
          <div className="description">
            <article className="Left">
              <Title title={state.myName} />
              <SubTitle subTitle={state.subTitle} />
              <Description description={state.description} />
              <Description description={state.technologies} />
              <Buttons buttonAction={state.button}/>
            </article>
            <article className="Right">
              <Social id="social" />
            </article>
          </div>
        </section>
      </div>
      
  )
}