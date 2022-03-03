import React from "react";
import { trpc } from "../services";

type Props = {};

const TodoList = (props: Props) => {
  const { data, isLoading, isError, error } = trpc.useQuery(["todos.get"]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div
          className="animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="hidden">Loading...</span>
        </div>
      </div>
    );

  if (isError || !data)
    return (
      <div
        className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
        role="alert"
      >
        Error: {JSON.stringify(error?.message)}
      </div>
    );

  return (
    <div>
      {data.map((todo) => (
        <div className="flex mb-4 items-center" key={todo.id}>
          <p className="w-full text-grey-darkest">{todo.item_text}</p>
          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
            {todo.status ? "DONE" : "NOT DONE"}
          </button>
          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
