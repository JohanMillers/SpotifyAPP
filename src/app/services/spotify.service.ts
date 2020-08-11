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
      'Authorization' : 'Bearer  BQBJqm8AP-_OgGhPhVfnTfiIEu_G7_J5jOuFc2BDFMM-X0IkYnuHUp0z-A5-_VB74JQ9Li33PaupPItXnC0'
    });

    return this.http.get(Url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=25')
               .pipe (map((data: any) => data.albums.items));
  }

  getArtista( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map((data: any) => data.artists.items ));
  }
}
