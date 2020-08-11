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
      'Authorization' : 'Bearer  BQBJo_QFiMIKmXxVc1IXzByxPfLzpqUN9pVHu2XKRitDkvUVC_MF6YDCTue6qCzZlh2kaAHWEm1aDAVkYAg'
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
  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`);
              //  .pipe(map((data: any) => data.artists.items ));
  }
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map((data: any) => data.tracks ));
  }
}
