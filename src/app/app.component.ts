import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu:MenuController, private storage:Storage) {}

  cerrarMenu()
  {
    this.menu.close('first');
  }

  async ngOnInit() {
    // If using a custom driver:
    //await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

}
