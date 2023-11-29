import { Component } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  protected theme: Theme = 'dark';

  constructor() {
    this.setTheme(this.theme);
  }

  protected setTheme(theme: Theme): void {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;

    this.theme = theme;
    htmlElement.dataset['theme'] = theme;
  }
}
