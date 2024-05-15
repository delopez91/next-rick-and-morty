import Image from 'next/image'
import mountains from '../../public/morty.jpg'

export default function Background() {
    return (
        <Image
            alt="Mountains"
            src={mountains}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}