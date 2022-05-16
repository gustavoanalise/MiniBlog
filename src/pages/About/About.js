// CSS
import styles from './About.module.css';
import { FaGithubSquare, FaLinkedin, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className={styles.about}>
            <h2>Sobre o Mini Blog usando o <span>ReactJs</span></h2>

            <h1><FaReact /></h1>

            <p>A ideia do Projeto foi de desenvolver um blog utilizando o ReactJS no FrontEnd, usando assim suas funcionalidades visando uma navegação mais amigável ao cliente.
            No BackEnd utilizamos o Firebase da Google para ajudar no processo de criação do usuário, autenticação, tratamento de erros, criação de posts, entre outras funções.</p>

            <p>Veja mais:</p>
            <p><a href="https://github.com/gustavoanalise/" target="_blank" rel="noopener noreferrer"><FaGithubSquare /> GitHub</a></p>
            <a href="https://www.linkedin.com/in/gustavo-analise-a85738133/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>

            <Link to='/posts/create' className='btn'>
                Criar Post
            </Link>
        </div>
    )
}

export default About