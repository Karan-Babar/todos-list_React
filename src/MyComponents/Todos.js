
import Todo from "../MyComponents/Todo";

const Todos  = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-2">Todos List</h3>
            <Todo todo={props.Todos[0]}/>
        </div>
    )
}

export default Todos;
