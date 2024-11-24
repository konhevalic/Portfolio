import './styles.css'
import {Title, SubTitle, Description, Social, Buttons, Avatar} from '../../components/index'

export const WhoAmI = () => {
  const state = {
    myName: "Alan Konhevalic, 27",
    subTitle: "Desenvolvedor Angular | Java",
    description: "Cursando Análise e Desenvolvimento de Sistemas pela UFPR, possuo 3 anos de experiência em desenvolvimento com ReactJS, atuando em projetos internacionais pela Compass.UOL. Além disso, tenho 1 ano de experiência com Angular e Spring Boot, desenvolvendo soluções para a vila de Cartões do Bradesco, voltadas para clientes Pessoa Física, e com desenvolvimento nativo em Swift para a vila de Contas, com foco em clientes Pessoa Jurídica, como terceiro pela Visionnaire.",
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