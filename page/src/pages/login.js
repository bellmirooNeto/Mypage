import Link from "next/link"

export default function Login(props) {
    return(
        <div>
            <Link href="/">Voltar</Link>
            <h1>Tela de Login</h1>
            <div>
               <label>E-mail</label>
               <input type="text" /> 
            </div>
            <label>Senha</label>
            <input type="password" />
        </div>
    )
}