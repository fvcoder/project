/**
 * Muesta un item de la lista de tareas
 * @param {object} props Propiedades
 * @param {string} props.text Nombre de la tarea
 * @param {boolean} props.completed Tarea completada?
 * @returns {JSX.Element}
 */
function TodoItem({ text }) {
    return (
      <li>
        <span>v</span>
        <p>{text}</p>
        <span>x</span>
      </li>
    )
}

export { TodoItem }