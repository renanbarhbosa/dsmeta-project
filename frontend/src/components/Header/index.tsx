import Logo from '../../assets/img/Logo.svg';
import './styles.css';

function Header() {
    return (
        <div className="dsmeta-logo-container">
            <img src={Logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por Renan Barbosa:
                    <a href="https://github.com/renanbarhbosa">Github</a>
                </p>
        </div>
    )
}

export default Header;
