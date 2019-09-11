import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'slides.html'
})
export class SlidesPage {
  constructor(private events: Events) { }
  ngOnInit() {
    this.getObservable().subscribe(data => {
      console.log('Observerable sau 5 giay: ', data);
    })

    this.events.subscribe("sent_to_demo", ((data) => {
      console.log("Nhan tu form demo: " + JSON.stringify(data));
    }));
  }

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  getObservable() {
    let observable = new Observable(observer => {
      setTimeout(() => {
        observer.next({
          room_id: 'testID',
          room_name: 'testName',
        });
      }, 5000);
    });
    return observable;
  }

  clickMe() {
    this.events.publish("sent_to_demo", { data: 'chat' });
  }
}
