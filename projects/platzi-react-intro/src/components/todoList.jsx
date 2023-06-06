/**
 * Retorna un item de de una lista de tareas
 *
 * @param {Object} props - Propiedades
 * @param {JSX.Element} props.children - Elementos hijos o heredados
 * @return {JSX.Element} A JSX element representing an unordered list.
 */
function TodoList(props) {
    return (
        <ul>{props.children}</ul>
    )
}

export { TodoList }