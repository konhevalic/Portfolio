import './styles.css'
import {Title, SubTitle, Description, Social, Buttons, Avatar} from '../../components/index'

export const WhoAmI = () => {
  const state = {
    myName: "Alan Konhevalic, 25",
    subTitle: "Desenvolvedor ReactJS | Swift",
    description: "Cursando Analise e Desenvolvimento de Sistemas pela UFPR, tenho mais de 1 ano de experiencia em desenvolvimento ReactJS. Atualmente trabalhando na Compass.uol como desenvolvedor Front-end. Também tenho interesse em desenvolvimento nativo para iOS, em que tenho desenvolvido alguns aplicativos.",
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
              <Buttons cv={state.button}/>
              <Social id="social" />
          </div>
        </section>
      </div>
      
  )
}