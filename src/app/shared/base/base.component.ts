import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private snackBar: MatSnackBar) { }

  showError({ message, closeName, duration, className }: IConfigMessage) {
    this.snackBar.open(message, closeName ? closeName : 'X', { duration: duration ? duration : 0, panelClass: className ? className : "error-message" });
  }

  showSuccess({ message, closeName, duration, className }: IConfigMessage) {
    this.snackBar.open(message, closeName ? closeName : 'X', { duration: duration ? duration : 0, panelClass: className ? className : "success-message" });
  }

  showWarning({ message, closeName, duration, className }: IConfigMessage) {
    this.snackBar.open(message, closeName ? closeName : 'X', { duration: duration ? duration : 0, panelClass: className ? className : "warning-message" });
  }
}

interface IConfigMessage {
  message: string,
  closeName?: string,
  duration?: number,
  className?: string,
}
