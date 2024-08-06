import React from "react";

export default function TodoListApp() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task == "") {
      alert("Please enter a task");
    } else {
      const newTask = {
        id: Date.now(),
        task: task,
        isComplete: false,
      };
      setTodo((currentTodo) => [...currentTodo, newTask]);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  w-full h-[100vh]">
        <div className="w-[370px] sm:w-[450px] rounded-lg sm:h-[550px] h-[480px] px-5 bg-red-100 overflow-y-hidden">
          <p className="font-bold text-2xl border-b-[1px] border-gray-300 pt-4 pb-1">
            Todo
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={task}
              placeholder="Add a new task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="my-3 text-xs h-7 w-full px-2 bg-gray-100"
            />
            <button
              className=" bg-blue-500 h-7 w-8 font-semibold text-gray-200"
              onClick={handleSubmit}
            >
              +
            </button>
          </div>
          {todo.map((myTodo, index) => {
            return (
              <div className="flex gap-1 items-center my-4" key={index}>
                <span className="w-6 h-6">
                  <img
                    onClick={() => {
                      handleComplete(myTodo.id);
                    }}
                    src={myTodo.isComplete ? checked : unChecked}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>
                <p
                  className="text-[1rem] font-semibold capitalize flex-1"
                  style={{
                    textDecoration: myTodo.isComplete && "line-through",
                    color: myTodo.isComplete && "#9ca3af",
                  }}
                >
                  {myTodo.task}
                </p>
                <span className="w-4 h-4">
                  <img
                    onClick={() => {
                      handleDelete(myTodo.id);
                    }}
                    src={trash}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
