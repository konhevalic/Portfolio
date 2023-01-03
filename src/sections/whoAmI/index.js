import './styles.css'
import {Title, SubTitle, Description, Social, Buttons, Avatar} from '../../components/index'

export const WhoAmI = () => {
  const state = {
    myName: "Alan Konhevalic, 25",
    subTitle: "Desenvolvedor iOS",
    description: "Formado em Engenharia Elétrica pela UTFPR e cursando Analise e Desenvolvimento de Sistemas pela UFPR, tenho 1 ano de experiencia comprovada em desenvolvimento ReactJS. Atualmente trabalhando na Compass.uol como desenvolvedor Front-end. Tambem desenvolvo apps para iPhone e iPad, utilizando iOS Nativo (Swift).",
    technologies: "ReactJS | Swift",
    button: "CV em PDF"
  }

  return (
      <div className="container">
        <section className="wrap">
          <div className="description">
              <Avatar />
              <Title title={state.myName} />
              <SubTitle subTitle={state.subTitle} />
              <Description description={state.description} />
              <Description description={state.technologies} />
              <Buttons buttonAction={state.button}/>
              <Social id="social" />
          </div>
        </section>
      </div>
      
  )
}