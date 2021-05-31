import './styles.css'
import {Title, SubTitle, Description} from '../../components/index'

export const Knowledge = () => {
    const state = {
      title: "Conhecimentos",
      subTitle: ["Front-end", "Back-end"],
      description: ["Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript com React.", "Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s para comunicação com front-end seguindo princípio de Clean Code."]
    }

    return (
        <div id="container">
          <SubTitle subTitle={state.title} />
          <div id="description">
            <article className="frontEnd">
                <Title title={state.subTitle[0]} />
                <Description description={state.description[0]} />
            </article>
            <article className="backEnd">
              <Title title={state.subTitle[1]} />
              <Description description={state.description[1]} />
            </article>
          </div>
        </div>
        
    )
}