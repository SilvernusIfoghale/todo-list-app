import React, { useState } from "react";
import checked from "../../public/check.png";
import unChecked from "../../public/uncheck.png";
import trash from "../../public/trash.png";

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
  const handleComplete = (id) => {
    setTodo((currentTodo) =>
      currentTodo.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };
  const handleDelete = (id) => {
    const newTodo = todo.filter((task) => task.id != id);
    setTodo(newTodo);
  };
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-bl from-sky-500 to-indigo-500  w-full h-[100vh]">
        <div className="w-[370px] sm:w-[500px] rounded-lg sm:h-[550px] h-[480px] px-8 bg-white overflow-y-hidden">
          <p className="font-bold text-3xl border-b-[1px] border-gray-300 pt-10 pb-3">
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
              className="my-3  h-10 w-full px-2 bg-gray-100"
            />
            <button
              className=" bg-blue-500 h-10 w-10 font-semibold text-2xl text-gray-200"
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
