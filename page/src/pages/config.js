import Link from "next/link"

export default function Config(props) {
    return (
        <div>
            <Link href="/">Voltar</Link>
            <h1>Configurações</h1>
            <ul>
                <li>Tamanho da Fonte</li>
                <li>Cor da Fonte</li>
                <li>Alterar nome </li>
                <li>Alterar e-mail </li>
                <li>Alterar senha </li>
            </ul>
        </div>
    )
}