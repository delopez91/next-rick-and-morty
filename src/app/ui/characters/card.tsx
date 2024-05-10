import { Character } from "@/app/lib/definitions";
import  Image from "next/image";
import clsx from 'clsx'
import Link from "next/link";

export default function Card({character}: { character: Character})  {
    return (
    <div className="mx-auto bg-sky-900 relative rounded overflow-hidden grid grid-cols-2">
            <Image className="col-span-1" src={character.image} alt="charactr image" width={300} height={300} priority/>
            <div className="col-span-1 p-3">   
                <div className="mt-4 text-white hover:text-orange-500 font-bold text-3xl">{character.name}</div>
                <div className="section text-xl"> 
                    <span className={clsx({
                        'text-red-400': character.status == 'Dead',
                        'text-green-400': character.status == 'Alive'
                        })}>{character.status}</span> - {character.species}
                </div>
                <div className="mt-4">
                    <span className="text-gray-400">Last know location:</span> <br/>
                    <span className="text-lg hover:text-orange-500"><Link href={character.location.url}>{character.location.name}</Link></span>
                </div>
            </div>
    </div>
    )
}