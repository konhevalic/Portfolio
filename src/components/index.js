import linkedin from '../assets/icons/group-10-copy.svg'
import github from '../assets/icons/fill-1-copy.svg'
import whatsapp from '../assets/icons/group-3-copy.svg'
import avatar from '../assets/avatar.jpeg'
import curriculum from '../assets/curriculum.pdf'
import './styles.css'

export const Title = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

export const SubTitle = ({subTitle}) => {
    return (
        <h2>{subTitle}</h2>
    )
}

export const Description = ({description}) => {

  const project = description.split('.\n')

    return (
        <>
          <p>{project[0]}</p>  
          {project[1] && <p>{project[1]}</p>  }
        </>
    ) 
}

export const Buttons = ({cv, sourceCode, project}) => {
    return (
      <>
      {cv && (
        <a href={curriculum} download>
        <button>Baixar CV</button>
      </a>
      )}
        {sourceCode && (
          <a href={sourceCode} target="_blank" rel="noreferrer">
          <button>Ver código-fonte</button>
        </a>
        )}
        {project && (
          <a href={project} target="_blank" rel="noreferrer">
          <button>Ver projeto</button>
        </a>
        )}
      </>
    )
}

export const Social = () => {
    return (
      <aside className="social">
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/alan-konhevalic/' target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn"/>
          </a>
          
        </li>
        <li>
        <a href='https://github.com/konhevalic' target="_blank" rel="noreferrer">
        <img src={github} alt="Github"/>
          </a>
          
        </li>

        <li>
        <a href='https://wa.me/5541999653238?text=Oi%20Alan,%20vi%20seu%20portfolio%20e%20gostaria%20de%20trocar%20uma%20ideia%20com%20você.' target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="Whatsapp"/>
          </a>
        </li>
      </ul>
    </aside>
    )
}

export const Avatar = () => {
  return (
    <div className='wrapAvatar'>
      <img className='avatar' alt="Foto de perfil" src={avatar} />
    </div>
    
  )
}