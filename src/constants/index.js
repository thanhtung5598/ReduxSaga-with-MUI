import AdminHomePage from './../container/AdminHomePages';
import TaskBoard from './../container/TaskBoard';

export const API_ENTPOINT = 'http://localhost:7000';

export const STATUSES = [
  {
    status: 0,
    label: 'READY'
  },
  {
    status: 1,
    label: 'IN PROGRESS'
  },
  {
    status: 2,
    label: 'COMPLETEd'
  }
];

export const ADMIN_ROUTES = [
  {
    name: 'Trang quản trị',
    path: '/',
    exact: true,
    component: AdminHomePage
  },
  {
    name: 'Quản lý công việc',
    path: '/task-board',
    exact: false,
    component: TaskBoard
  }
];
