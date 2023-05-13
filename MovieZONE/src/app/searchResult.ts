import { SearchMovie } from "./searchMovie";

export class SearchResults {
    errorMessage!:string;
    expression!:string;
    results!: SearchMovie[];
    searchType!:string;
}
