'use client'

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const Pagination = ({ totalPages }: { totalPages: number }) => {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const createPageURL = (pageNumber: number | string) => {

        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    const generatePagination = (currentPage: number, totalPages: number) => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, '...', totalPages - 1, totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
        }

        // else
        return [
            1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages
        ]
    }

    const allPages = generatePagination(currentPage, totalPages)

    return (<>
        <div className="flex justify-center w-full mx-auto text-center mb-5">
            {totalPages > 3 ? <PaginationArrow direction="left" href={createPageURL(currentPage - 1)} isDisabled={currentPage - 1 <= 0} /> : null}

            {allPages.map((p, i) => {
                return (Number(p) ? <Link href={createPageURL(p)} key={i} className={clsx('w-10 h-10 p-2 bg-gray-600 rounded-md mx-2', {
                    'disabled cursor-not-allowed': !Number(p),
                    'bg-sky-700': currentPage == p
                })} > {p} </Link> : <div className="flex items-end" key={i}>{p}</div>)
            })}

            {totalPages > 3 ? <PaginationArrow direction="right" href={createPageURL(currentPage + 1)} isDisabled={currentPage + 1 > totalPages} /> : null}
        </div>
    </>)
}

function PaginationArrow({ href, direction, isDisabled }: { href: string; direction: 'left' | 'right'; isDisabled?: boolean }) {
    const className = clsx('flex h-10 w-10 items-center justify-center rounded-md border bg-indigo-400',
        {
            'pointer-events-none text-gray-500 bg-indigo-200': isDisabled,
            'hover:bg-gray-100': !isDisabled,
            'mr-2 md:mr-4': direction === 'left',
            'ml-2 md:ml-4': direction === 'right',
        },
    )

    const icon = direction == 'left' ? (<ArrowLeftIcon className="w-4" />) : (<ArrowRightIcon className="w-4" />)

    return isDisabled ? (<div className={className}>{icon}</div>) : (<Link className={className} href={href}>{icon}</Link>)
}