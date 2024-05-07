"use client";

type Todo = {
    id: string;
    done: boolean;
    title: string;
    toggle: (id: string, done: boolean) => void;
};

const TodoItem = ({ id, done, title, toggle }: Todo) => {
    return (
        <li className="flex gap-1 items-center">
            <input
                type="checkbox"
                id={id}
                className="cursor-pointer peer"
                defaultChecked={done}
                onChange={(e) => toggle(id, e.target.checked)}
            />
            <label
                htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
        </li>
    );
};

export default TodoItem;
