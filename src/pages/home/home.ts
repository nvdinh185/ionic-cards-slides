import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController) { }

  slides(){
    this.navCtrl.push(SlidesPage)
  }

  card(){
    this.navCtrl.push(CardPage)
  }

  header(){
    this.navCtrl.push(HeaderPage)
  }

  background(){
    this.navCtrl.push(BackgroundPage)
  }

  image(){
    this.navCtrl.push(ImagePage)
  }

  list(){
    this.navCtrl.push(ListPage)
  }

  advancedMap(){
    this.navCtrl.push(AdvancedMapPage)
  }

  advancedSocial(){
    this.navCtrl.push(AdvancedSocialPage)
  }

  advancedWeather(){
    this.navCtrl.push(AdvancedWeatherPage)
  }
}
