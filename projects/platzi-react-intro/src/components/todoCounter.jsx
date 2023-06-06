/**
 * Muestra la cantidad de tareas completadas
 * @param {Object} props - Propiedades
 * @param {number | string} props.completed Cantidad de tareas completadas
 * @param {number | string} props.total Cantidad de tareas totales
 * @returns {JSX.Element}
 */
function TodoCounter({ total, completed }) {
    return (
        <header>
            <h1>Haz completado {completed} de {total} TODOS</h1>
        </header>
    )
}

export { TodoCounter }