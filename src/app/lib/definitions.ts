export interface Character {
    id: number;
    gender: string;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    origin: Object;
    image: string;
    location: {name: string, url: string};
    episode: string[];
}