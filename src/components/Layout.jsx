import styles from '../styles/Layout.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import Card from './Card'

export default function Layout(props){
    
    return (
        <div className={styles.Layout}>
            
            <div className={styles.Cabecario}>
                <img src="../../imgs/neto.jpeg" alt="Minha foto" />
            </div>
            <div className={styles.Conteudo}>
                <h2>Um pouco sobre mim</h2>
                <p>
                    Me chamo Belmiro Neto, sou formado em Sistemas Para Internet,tenho 21 anos, sou apaixonado por tecnologia, tenho um sonho de ser uma pessoa melhor a cada dia, desde pequeno sempre gostei de estudar, explorar coisas novas, novos desafios sempre me encanta, sou uma pessoa calma e paciente e estou correndo atrás de uma oportunidade de mostrar do que sou capaz! Sei que consigo, e sei que sou capaz de muitas coisas! 
                </p>
                <h2>Projetos</h2>
                <div className={styles.Proj}>
                    <Card title="Pokedex">
                        <img src="../../imgs/teste.png" alt="Foto do Proj" />
                        <h2>Foi um projeto com uma API do pokemon....</h2>
                     </Card>
                    <Card title="Curso-React">
                        <img src="../../imgs/teste.png" alt="Foto do Proj" />
                        <h2>Foi um projeto com uma API do pokemon....</h2>
                    </Card>
                    <Card title="Proj-sds-3">
                        <img src="../../imgs/teste.png" alt="Foto do Proj" />
                        <h2>Foi um projeto com uma API do pokemon....</h2>
                    </Card>
                </div>            
                           
            </div>
            {/* <div className={styles.footer}>
                <div>Contatos</div>
                <a href="https://github.com/bellmirooNeto"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/belmiro-neto-a882631a0/"><AiFillLinkedin /></a>
            </div> */}
        </div>
    )
}