import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'menu',
    title: 'Menu',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Beranda',
        type: 'item',
        url: '/dashboard',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'add-event',
        title: 'Tambah Acara',
        type: 'item',
        url: 'https://forms.gle/V79jpkAnpvngAJaGA',
        classes: 'nav-item',
        icon: 'feather icon-plus-square',
        external: true
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
