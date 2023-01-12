import styles from '../styles/Menu.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import Navegador from './Navegador';
import Link from "next/link"

export default function Menu(props) {

    return (
        <div className={styles.Menu}>
            <a href="#"><AiOutlineHome /></a>
            <Navegador texto="Familia" destino="/familia" />
            <Navegador texto="Login" destino="/login" />
            <Navegador texto="Links" destino="/links" />
            <a href="#">Sobre</a>
            <a href="#"><AiFillContacts /></a>
            <a><Link href="/config"><AiFillSetting /></Link></a>
        </div>

    )
}