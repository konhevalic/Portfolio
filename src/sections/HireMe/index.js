import './styles.css'
import {Title, Description, Social} from '../../components/index'

export const HireMe = () => {
  const state = {
    title: "Quer me conhecer um pouco mais?",
    description: "Entre em contato comigo por e-mail ou por telefone:",
    email: "alan.patrick.konhevalic@gmail.com",
    phone: "(41) 9 9965-3238"
  }
    return (
      <div className="hire-me">
        <Title title={state.title}/>
        <Description description={state.description} />
        <div id="informations">
          <p><strong>e-mail: </strong></p><Description description={state.email} />
          <br />
          <p><strong>telefone: </strong></p> <Description description={state.phone} />
        </div>
        <Social  className="social"/>
      </div>
    )
}