import Link from "next/link"
import { Character } from "../../lib/definitions"
import { getEpisode } from "../../services/calls"

export const EpisodeName = async ({ character }: { character: Character }) => {

    const searchFirstEpisode = async (character: Character) => {
        const first = character?.episode[0]
        const { name } = await getEpisode(first)
        return name;
    }

    const name = await searchFirstEpisode(character)

    return (<>
        <span className="text-md hover:text-orange-500"><Link href={character.episode[0]}>{name}</Link></span>
    </>)
}