import { Character } from "@/app/lib/definitions";
import Image from "next/image";
import clsx from 'clsx'
import Link from "next/link";
import { Suspense } from "react";
import { EpisodeName } from "./episodeName";

export default async function Card({ character }: { character: Character }) {

    return (
        <div className="mx-auto bg-sky-900 rounded overflow-hidden flex max-w-[200px] min-w-full pb-4 pr-2">
            <Image className="col-span-1 w-[200px] h-[200px]" src={character.image} alt="character image" width="200" height="200" loading="lazy" />
            <div className="pl-4 text-white">
                <div className="mt-4  hover:text-orange-500 font-bold text-2xl">{character.name}</div>

                <div className="section text-lg flex items-center">
                    <div className={clsx("w-3 h-3 rounded-full mr-2", {
                        'bg-red-400': character.status == 'Dead',
                        'bg-green-400': character.status == 'Alive',
                        'bg-gray-400': character.status == 'unknown'
                    })}></div>
                    <span className={clsx()}>{character.status}</span> - {character.species}
                </div>

                <div className="mt-2">
                    <span className="text-gray-400 text-sm">Last know location:</span> <br />
                    <span className="text-md hover:text-orange-500"><Link href={character.location.url}>{character.location.name}</Link></span>
                </div>

                <div className="mt-2">
                    <span className="text-gray-400 text-sm">First Episode:</span> <br />
                    <Suspense fallback={<div>Loading Episode Name...</div>}>
                        <EpisodeName character={character} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}