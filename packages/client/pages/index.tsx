import type { NextPage } from "next";
import { useState } from "react";
import TodoList from "../src/components/TodoList";
import { client, trpc } from "../src/services";

const Home: NextPage = () => {
  const [item_text, setItemText] = useState<string>("");
  const createTodo = trpc.useMutation("todos.create");

  const onAdd = () => {
    createTodo.mutate(item_text, {
      onSuccess: () => {
        client.invalidateQueries(["todos.get"]);
        setItemText("");
      },
      onError: (error) => alert(error.message),
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-teal-500 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-1/2">
        <div className="mb-4">
          <h1 className="text-gray-900">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
              placeholder="Add Todo"
              value={item_text}
              onChange={(e) => setItemText(e.target.value)}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-800"
              onClick={onAdd}
            >
              Add
            </button>
          </div>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
