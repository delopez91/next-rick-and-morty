'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    const handleChange = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1');

        if (term) {
            params.set('name', term);
        } else {
            params.delete('name')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 100)


    return (
        <div className="relative flex flex-1 flex-shrink-0 mx-auto max-w-[500px]">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500"
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={searchParams.get('name')?.toString()}
            >
            </input>
        </div>
    )
}

export default Search