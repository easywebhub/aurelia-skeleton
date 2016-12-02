﻿import {Aurelia} from 'aurelia-framework';
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../bower_components/jquery/dist/jquery.min.js';

import '../bower_components/datatables.net/js/jquery.dataTables.min.js';
import '../bower_components/datatables.net-dt/css/jquery.dataTables.min.css';

import '../bower_components/sweetalert/dist/sweetalert.css';
import '../bower_components/sweetalert/dist/sweetalert.min.js';


import '../bower_components/semantic/dist/semantic.min.css';
import '../bower_components/semantic/dist/semantic.min.js';

import '../styles/styles.css';
import '../styles/inline.css';
import '../styles/app.css';

// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources/ui')
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}