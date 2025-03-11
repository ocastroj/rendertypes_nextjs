/* eslint-disable @next/next/no-img-element */
import { Characters } from "@/models/character.models";

interface IPropsSingleCharacter {
    params: Promise<{id: number}>
}

const getCharacterDetail = async (id: number) => {
    const requestApi = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data: Characters =  await requestApi.json();
    return data;
}

const SingleCharacterById = async ({params}:IPropsSingleCharacter ) => {

    const { id } = await params;

    // validar los parametros
    if(!id) {
        return {
            notFound: true
        }
    }

    // Obtener data del API 
    const character = await getCharacterDetail(id);

    return(
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-slate-900 text-white text-center p-5">
                <h1>Dragon Ball Characters {id}</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                <section className="flex justify-between items-start">
                    <div className="w-1/3">
                        <img className="h-75" src={character.image} alt={character.name} />
                    </div>
                    <div className="w-2/3">
                        <h2 className="font-bold text-2xl">
                            {character.name}
                            <span className="font-normal text-gray-500 text-sm"> {character.race} </span>
                        </h2>
                        <p className="pt-5">{character.description}</p>
                    </div>
                </section>
                <section>
                    {
                        character.transformations.length == 0 && (
                            <p>This character does not have transformations</p>
                        )
                    }
                    {
                        character.transformations.length > 0 && (
                            <div className="flex flex-wrap gap-5 mt-10">
                                {
                                    character.transformations.map((transformation) => {
                                        return(
                                            <div key={transformation.id} className="text-center p-5 bg-slate-100 rounded">
                                                <img className="h-20 mx-auto" src={transformation.image} alt={transformation.name}/>
                                                <h4>
                                                    {transformation.name}
                                                </h4>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        )
                    }
                </section>
            </main>
        </div>
    );
}

export default SingleCharacterById;