

import { useState } from "react"
import { getCharacteres } from "../services/calls"
import { Character } from "../lib/definitions";
import Card from "../ui/characters/card";
import StatusFilter from "../ui/characters/statusFilter";

interface Status {
    status?: 'Alive' | 'Dead' | 'unknown'
}

export default async function Characters( {searchParams} : {searchParams?: Status}) {

    const status = searchParams?.status || null;

    const pageTitle = "The Rick and Morty API"

    const {info, results} = await getCharacteres(status)

    return (
        <main className="mx-auto p-10">
            <h2 className="my-10 text-6xl font-bold text-center">
                {pageTitle}
            </h2>

            <StatusFilter/>
            

            <div className="container">
                <div className="flex flex-wrap w-full gap-x-4 gap-y-4">
                {results.map((c: Character)=> {
                    return (<Card character={c}></Card>)
                })}
                </div>
            </div>
        </main>
    );
}