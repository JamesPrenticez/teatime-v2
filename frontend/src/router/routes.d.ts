export type IRoute = {
  path: string;
  name: string;
  component: any;
}

export enum Path {
  HOME = '/',
  
  // Auth
  LOGIN = '/login',
  REGISTER = '/register'
}