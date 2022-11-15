import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicio1';
  sendText: string = '';
  botnPulsado: string = '';

  onSend() {
    this.sendText = 'Has pulsado el botón';
  }

  onClick(e: any) {
    return (this.botnPulsado = e.innerText);
  }
}
