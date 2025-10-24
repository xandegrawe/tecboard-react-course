import "./titulo-formulario.estilos.css";
// no react, componentes são FUNÇÕES
// props é um Objeto
// props.children

export function TituloFormulario (props) {
  return (
    <h2 className="titulo-form">
      {props.children}
    </h2>
  )
}