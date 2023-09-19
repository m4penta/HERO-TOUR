import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // khai báo đầu vào dữ liệu

  //phương thực giúp đẩy = dữ liệu vào messages
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
