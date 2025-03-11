import Link from "next/link";

export const Menu = () => {
    return(
    <menu className="w-72 mx-auto text-center pt-10">
        <ul>
            <Link className="block w-full bg-slate-200 hover:bg-slate-400 rounded mb-3 p-3" href="/ssr">Landing Page (SSR)</Link>
            <Link className="block w-full bg-slate-200 hover:bg-slate-400 rounded mb-3 p-3" href="/csr">Password Generator (CSR)</Link>
            <Link className="block w-full bg-slate-200 hover:bg-slate-400 rounded mb-3 p-3" href="/dr">DragonBall API (DR)</Link>
            <Link className="block w-full bg-slate-200 hover:bg-slate-400 rounded mb-3 p-3" href="/dr-nextjs">DragonBall API (DR with NextJS)</Link>
        </ul>
    </menu>
    );
}