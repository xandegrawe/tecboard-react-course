import './campo-de-formulario.estilos.css'
export function CampoDeFormulario ({children}) {
  return (
    <fieldset className="campo-form">
      {children}
    </fieldset>
  )
}