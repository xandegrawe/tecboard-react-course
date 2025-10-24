import './lista-suspensa.estilos.css'

export function ListaSuspensa ({ itens, ...rest }) {
  return (
    <select {...rest} className='lista-suspensa-form' defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map(function(item) {
        return <option key={item.id} value={item.id}>{item.nome}</option>
      })}
    </select>
  )
}