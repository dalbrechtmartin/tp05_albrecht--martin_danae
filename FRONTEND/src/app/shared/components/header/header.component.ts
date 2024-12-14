import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'TP05 – Module Angular - Routage / Pattern Redux';

  // toggleSidebar() {
  //   const sidebar = document.querySelector('app-sidebar');
  //   if (sidebar) {
  //     sidebar.classList.toggle('open');
  //   }
  // }

  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
