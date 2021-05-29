import './styles.css'
import {Description} from '../../components/index'

export const Footer = () => {
    const state = {
        description: "© 2021 Alan Konhevalic"
    }
    return (
        <div className="footer">
            <Description description={state.description} />
        </div>
    )
}

