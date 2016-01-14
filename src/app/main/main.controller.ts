export class MainController {

  public app: string;
  public api: Object;

  /* @ngInject */
  constructor ($http: angular.IHttpService) {
    this.app = 'ast';
    $http.get('/api').then((response: any) => {
        this.api = response.data.api;
    });
  }

}
