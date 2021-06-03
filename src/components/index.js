import linkedin from '../assets/icons/group-10-copy.svg'
import instagram from '../assets/icons/fill-1-copy-2.svg'
import github from '../assets/icons/fill-1-copy.svg'
import twitter from '../assets/icons/group-3-copy.svg'
import whatsapp from '../assets/icons/group-8-copy.svg'

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
    return (
        <p>{description}</p>
    )
}

export const Buttons = ({buttonAction}) => {
    return (
        <button>{buttonAction}</button>
    )
}

export const Social = () => {
    return (
        <aside className="social">
          <ul>
            <li>
              <img src={linkedin} alt="LinkedIn"/>
            </li>
            <li>
              <img src={instagram} alt="LinkedIn"/>
            </li>
            <li>
              <img src={github} alt="LinkedIn"/>
            </li>
            <li>
              <img src={twitter} alt="LinkedIn"/>
            </li>
            <li>
              <img src={whatsapp} alt="LinkedIn"/>
            </li>
          </ul>
        </aside>
    )
}