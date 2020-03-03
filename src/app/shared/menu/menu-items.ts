export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/management',
    title: 'User Management',
    type: 'link',
    icontype: 'fas fa-cogs text-purple'
  },
  {
    path: '/admin/lake',
    title: 'Lake',
    type: 'sub',
    icontype: 'fas fa-water text-blue',
    collapse: 'lake',
    isCollapsed: true,
    children: [
      { path: 'viewer', title: 'Viewer', type: 'link' },
      { path: 'list', title: 'List', type: 'link' }
    ]
  },
  /*{
    path: '/admin/report',
    title: 'Report',
    type: 'link',
    icontype: 'far fa-file-alt text-yellow'
  },
  {
    path: '/admin/analytics',
    title: 'Analytics',
    type: 'link',
    icontype: 'far fa-chart-bar text-blue'
  },*/
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-user-cog text-pink'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/