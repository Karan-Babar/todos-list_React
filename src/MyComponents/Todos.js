
import Todo from "../MyComponents/Todo";

const Todos  = (props) => {
    return (
        <div className="container">
            <h3 className="my-2">Todos List</h3>
            {props.Todos.length===0? "No Todos to display":
            props.Todos.map((todo)=>{
            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
             }
        </div>
    )
}

export default Todos;
