'use strict';

angular.module('pancho', [
  'xApp.services',
  'xApp.config',
  'xApp.home',
  'xApp.storage'])
.config(['$compileProvider', function( $compileProvider ) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|sms):/);
}]);

// 'pancho.filters',
// 'pancho.directives',
// 'xApp.storage',
// 'xApp.root',
// 'xApp.main',
// 'xApp.govs',
// 'xApp.stats',
// 'xApp.suggestions',
// 'xApp.constants',
