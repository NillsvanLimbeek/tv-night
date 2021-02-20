export interface Collection {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
}

export interface Genre {
    id: number;
    name: string; // should be enum with genre names
}

export interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    englishName: string;
    iso_639_1: string;
    name: string;
}

export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

export interface Genre {
    id: number;
    name: string; // should be enum with genre names
}

export interface LastEpisodeToAir {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface NextEpisodeToAir {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: null;
    vote_average: number;
    vote_count: number;
}

export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface Season {
    air_date: Date;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}
