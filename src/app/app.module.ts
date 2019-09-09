import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';
import { CardPage } from '../pages/cards/card/card';
import { HeaderPage } from '../pages/cards/header/header';
import { BackgroundPage } from '../pages/cards/background/background';
import { ImagePage } from '../pages/cards/image/image';
import { ListPage } from '../pages/cards/list/list';
import { AdvancedMapPage } from '../pages/cards/advanced-map/advanced-map';
import { AdvancedSocialPage } from '../pages/cards/advanced-social/advanced-social';
import { AdvancedWeatherPage } from '../pages/cards/advanced-weather/advanced-weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlidesPage,
    CardPage,
    HeaderPage,
    BackgroundPage,
    ImagePage,
    ListPage,
    AdvancedMapPage,
    AdvancedSocialPage,
    AdvancedWeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidesPage,
    CardPage,
    HeaderPage,
    BackgroundPage,
    ImagePage,
    ListPage,
    AdvancedMapPage,
    AdvancedSocialPage,
    AdvancedWeatherPage
  ],
  providers: []
})
export class AppModule {}
