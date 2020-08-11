import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('constructor del services spotify');
  }

  getQuery(query: string) {
    const Url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer  BQD5EIomU7GIaHNdW87S8kB4xB50RdG4SydrSQSl1w-YOOaEZ4DjRcqwBFN-kVHLTjZlplLdFgi_SHyRnyQ'
    });

    return this.http.get(Url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=25')
               .pipe (map((data: any) => data.albums.items));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map((data: any) => data.artists.items ));
  }
}
