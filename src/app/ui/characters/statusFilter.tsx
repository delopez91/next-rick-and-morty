'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation"

export default function StatusFilter () {
    
    const pathname = usePathname();
    const searchParams = useSearchParams()
    
    function changeParams (status: string) {

        const params = new URLSearchParams(searchParams)

        if (status) {
            params.set('status', status)
        }
        
        else {
            params.delete('status')
        }
        
        return `${pathname}?${params.toString()}`
    }

    return (<div className="mx-auto w-full text-center my-4">
        <Link href={changeParams('alive')} className="bg-indigo-500 p-3 hover:bg-indigo-800">Alive</Link>
        <Link href={changeParams('dead')} className="bg-indigo-500 p-3 hover:bg-indigo-800">Dead</Link>
        <Link href={changeParams('unknown')} className="bg-indigo-500 p-3 hover:bg-indigo-800">Unknown</Link>
        <Link href={changeParams('')} className="bg-indigo-500 p-3 hover:bg-indigo-800">All</Link>
    </div>) 
}