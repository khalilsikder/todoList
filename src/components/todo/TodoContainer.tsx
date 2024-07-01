import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
            
             
             <AddTodoModal></AddTodoModal>
             <TodoFilter></TodoFilter>
              {/* <button>Filter</button> */}
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-lg p-[5px]">
              <div className="bg-white w-full h-full space-y-3 p-5 rounded-lg">
              <TodoCard></TodoCard>
              <TodoCard></TodoCard>
              <TodoCard></TodoCard>
              <TodoCard></TodoCard>
              <TodoCard></TodoCard>
              </div>
              {/* <div className="bg-white text-2xl flex justify-center items-center">
                <p>There is no task here</p>
              </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;