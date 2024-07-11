import { Input } from "./input";

export function Form() {
    return (
        <form action="" className="w-full flex flex-col items-center justify-center gap-y-4">
            <Input />
            <Input />
            <button className="bg-transparent border border-solid border-white text-white w-40 h-10 rounded-lg">Enviar</button>
        </form>
    )
}