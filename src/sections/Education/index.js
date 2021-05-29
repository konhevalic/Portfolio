import './styles.css'
import {Title, SubTitle, Description, Social} from '../../components/index'


export const Education = () => {
  const state = {
    title: "Educação",
    subTitle: ["UTFPR", "Labenu", "Cursos Complementares"],
    description: ["Engenharia Elétrica - Cursando 10º período. Previsão de formação em Setembro/2021", "Desenvolvimento de projetos web - 6 meses", "RocketSeat", "B7Web"]
  }
  return (
    <div id="education">
      <Title title={state.title} />
      <div id="instituicoes">
        <article>
          <SubTitle subTitle={state.subTitle[0]} />
          <Description description={state.description[0]} />
        </article>
        <article>
          <SubTitle subTitle={state.subTitle[1]} />
          <Description description={state.description[1]} />
        </article>
        <article>
          <SubTitle subTitle={state.subTitle[2]} />
          <Description description={state.description[2]} />
          <Description description={state.description[3]} />
        </article>
      </div>
    </div> 
  )
}