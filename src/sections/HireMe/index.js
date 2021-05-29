import './styles.css'
import {Title, SubTitle, Description, Social} from '../../components/index'

export const HireMe = () => {
  const state = {
    title: "Quer me conhecer um pouco mais?",
    description: "Entre em contato comigo por e-mail ou então pelo telefone:",
    contacts: [
      {
        email: "alan.patrick.konhevalic@gmail.com"
      },
      {
        phone: "(41) 9 9965-3238"
      }
    ]
  }
    return (
      <div className="hire-me">
        <Title title={state.title}/>
        <Description description={state.description} />
        {
          state.contacts.map(contact => {
            return (
              <div id="informations">
                <Description description={contact.email} />
                <Description description={contact.phone} />
              </div>
            )
          })
        }
        <Social  className="social"/>
      </div>
    )
}