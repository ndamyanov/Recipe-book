import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDVknllsILOG8GO72Qey9kGkOw7vamT0lI",
      authDomain: "angular-test-6e1dc.firebaseapp.com"
    });
  }

  onNavigate(selectedItem: string){
    this.loadedFeature = selectedItem;
  }
}
