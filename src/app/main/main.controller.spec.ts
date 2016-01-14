import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('ast'));

  beforeEach(inject(($controller: angular.IControllerService) => {
    mainController = $controller('MainController');
  }));

  it('should have a app name', () => {
    expect(mainController.app).toContain('ast');
  });
  
  it('should have json data from backend /api', () => {
      expect(mainController.api).toBeDefined();
  })
  
});
