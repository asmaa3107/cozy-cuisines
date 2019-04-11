import  {environment} from './../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
 // AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'AJApr4liiyCDwsjvoH1Xr59MsNUcvIhF',
  CLIENT_DOMAIN: 'asmaa3107.auth0.com', // e.g., you.auth0.com
 // AUDIENCE: 'http://localhost:4200/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${environment.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};