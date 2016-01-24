app.directive('urlLink', function () {
    return {
    	restrict: 'EA',
        template: '<A href=\'{{u.url}}\'>Click {{u.url}}<A>'
    };
});