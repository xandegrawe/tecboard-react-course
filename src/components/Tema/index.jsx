import "./tema.estilos.css"

export function Tema({ tema }) {
  return <h2 className="título-tema">{tema.nome}</h2>
}