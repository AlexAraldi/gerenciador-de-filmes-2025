export interface Filme {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  overview?: string; // Sinopse, opcional
  videos?: { results: { key: string; name: string }[] }; // Trailers
  credits?: { cast: { name: string; character: string }[] }; // Elenco
}

export interface RespostaFilmes {
  page: number;
  total_pages: number;
  total_results: number;
  results: Filme[];
}
