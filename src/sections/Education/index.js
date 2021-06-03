import './styles.css'
import {Title, SubTitle, Description} from '../../components/index'


export const Education = () => {
  const state = {
    title: "Educação",
    subTitle: ["UTFPR", "Labenu", "Cursos Complementares"],
    description: ["Engenharia Elétrica - Cursando 10º período. Previsão de formação em Setembro/2021", "Desenvolvimento de projetos web - 6 meses", "RocketSeat, B7Web, Digital Innovation One"]
  }
  return (
    <div id="education">
      <SubTitle subTitle={state.title} />
      <div id="education-description">
        <article className="instituicoes">
          <Title title={state.subTitle[0]} />
          <Description description={state.description[0]} />
        </article>
        <article className="instituicoes">
          <Title title={state.subTitle[1]} />
          <Description description={state.description[1]} />
        </article>
        <article className="instituicoes">
          <Title title={state.subTitle[2]} />
          <Description description={state.description[2]} />
        </article>
      </div>
    </div> 
  )
}