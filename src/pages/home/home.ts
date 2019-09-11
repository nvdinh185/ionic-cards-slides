import { Component } from '@angular/core';

import { SlidesPage } from '../slides/slides';
import { CardPage } from '../cards/card/card';
import { HeaderPage } from '../cards/header/header';
import { BackgroundPage } from '../cards/background/background';
import { ImagePage } from '../cards/image/image';
import { ListPage } from '../cards/list/list';
import { AdvancedMapPage } from '../cards/advanced-map/advanced-map';
import { AdvancedSocialPage } from '../cards/advanced-social/advanced-social';
import { AdvancedWeatherPage } from '../cards/advanced-weather/advanced-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SlidesPage = SlidesPage;
  CardPage = CardPage;
  HeaderPage = HeaderPage;
  BackgroundPage = BackgroundPage;
  ImagePage = ImagePage;
  ListPage = ListPage;
  AdvancedMapPage = AdvancedMapPage;
  AdvancedSocialPage = AdvancedSocialPage;
  AdvancedWeatherPage = AdvancedWeatherPage;
}
