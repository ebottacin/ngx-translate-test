import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Kml } from 'src/decorators.factorties';

@Injectable({
  providedIn: 'root'
})
@Kml({
  name: 'testService'
})
export class TestTranslationService {

  constructor(private translateService: TranslateService) {}

  public getKml(id: number) {
    this.translateService.get('101___HELLO.WORLD');
  }
}
