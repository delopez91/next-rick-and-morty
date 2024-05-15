
import { getCharacteres } from "../services/calls"
import { Character } from "../lib/definitions";
import Card from "../ui/characters/card";
import StatusFilter from "../ui/characters/statusFilter";
import Search from "../ui/characters/search";
import { Pagination } from "../ui/characters/pagination";
import { Suspense } from "react";

interface Status {
    status?: 'Alive' | 'Dead' | 'unknown'
    name?: string
    page: string | number
}

export default async function Characters({ searchParams }: { searchParams?: Status }) {

    const status = searchParams?.status || null;
    const name = searchParams?.name || '';
    const page = searchParams?.page || 1;

    const pageTitle = "The Rick and Morty API"

    const { info, results } = await getCharacteres(status, name, page)

    return (
        <main className="mx-auto p-10">
            <h2 className="my-10 text-6xl font-bold text-center text-orange-600">
                {pageTitle}
            </h2>

            <Search />

            <StatusFilter />

            <Pagination totalPages={info.pages} />

            <div className="container mx-auto">
                <div className="flex-wrap w-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                    <Suspense fallback={<div>Loading characters ...</div>}>
                        {results.map((c: Character) => {
                            return (<Card character={c} key={c.id}></Card>)
                        })}
                    </Suspense>

                </div>
            </div>
        </main>
    );
}