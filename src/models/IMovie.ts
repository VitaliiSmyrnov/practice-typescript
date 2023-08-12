export interface IMovie {
  poster_path?: string;
  title?: string;
  release_date?: string;
  vote_average?: number;
  overview?: string;
  genres?: { name: string }[];
}
