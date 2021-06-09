import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '定點查詢', url: '/folder/定點查詢', icon: 'mail' },
    { title: '回報事故', url: '/folder/回報事故', icon: 'paper-plane' },
    { title: '歷史事件', url: '/folder/歷史事件', icon: 'heart' },
    { title: '設定', url: '/folder/設定', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
