export const environment = {
    production: false,
    URL: 'http://localhost',
    port: '8081',
    context: '/src'
  };
  
export const AppConstants = {
    actionsMenuVertical: true
};

export class Environment {
    getUrl() {
        return environment.URL + ':' + environment.port;
    }
}
