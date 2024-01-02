import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Nace, RawNace } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getData(): Observable<Nace[]> {
    return this.http
      .get<RawNace[]>('http://localhost:3000/NACE_REV2_20210204_135820')
      .pipe(
        map((data: RawNace[]) => {
          const mapped: Nace[] = data.map(this.mapNace);

          return mapped;
        })
      );
  }

  mapNace(rawData: RawNace): Nace {
    return {
      Code: rawData.Code,
      Description: rawData.Description,
      Level: rawData.Level,
      Order: rawData.Order,
      Parent: rawData.Parent,
      ReferenceToISICRev: rawData['Reference to ISIC Rev. 4'],
      ThisItemAlsoIncludes: rawData['This item also includes'],
      ThisItemExcludes: rawData['This item excludes'],
      RndNumbers: Math.floor(Math.random() * (10 - 1 + 1) + 1), // add some random number between 10 and 1 for summing later.
    };
  }
}
