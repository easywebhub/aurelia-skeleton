import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'AdminCp';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
      { route: 'demo',  name: 'demo', moduleId: './ViewDemo/demo', nav: true, title: 'Demo Semantic UI' },
      { route: 'Validation',  name: 'Validation', moduleId: './ViewModels/validation/validation', nav: true, title: 'Validation Semantic UI' }
    ]);

    this.router = router;
  }
}
