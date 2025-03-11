/* eslint-disable @next/next/no-img-element */


import { Characters } from "@/models/characters.models";
import Link from "next/link";

const getCharacters = async () => {
    const requestApi = await fetch("https://dragonball-api.com/api/characters");
    const data: Characters =  await requestApi.json();
    return data.items;
}

const DragonBallAPI = async () => {

    const characters = await getCharacters();

    return(
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-slate-900 text-white text-center p-5">
                <h1>Dragon Ball Characters</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                {
                    characters.length == 0 && (
                        <p>No records were found.</p>
                    )
                }

                {
                    characters.length > 0 && (
                        <div className="grid grid-cols-4 gap-5">
                        {
                            characters.map((c) => {
                                return(
                                    <div className="text-center p-5" key={c.id}>
                                        <Link href={`/dr-nextjs/${c.id}`}>
                                            <img className="h-60 mx-auto" src={c.image} alt={c.name} />
                                            <h3 className="font-bold">
                                            {c.name}
                                            </h3>
                                        </Link>
                        
                                    </div>
                                );
                            })
                        }
                        </div>
                    )
                }
            </main>
        </div>
    );
}

export default DragonBallAPI;