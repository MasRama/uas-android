export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// types.ts
interface MovieDetail {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre?: string;
  Released?: string;
  Plot?: string;
}
