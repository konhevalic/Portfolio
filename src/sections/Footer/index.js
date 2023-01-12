import './styles.css'
import {Description} from '../../components/index'

export const Footer = () => {
    const state = {
        description: "2023 - Alan Konhevalic"
    }
    return (
        <footer className="footer">
            <Description description={state.description} />
        </footer>
    )
}

