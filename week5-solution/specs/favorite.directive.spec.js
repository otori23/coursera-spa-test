describe('The favorite directive', function() {
    'use strict';

    var $httpBackend;
    var ApiPath;
    var $compile;
    var $rootScope;
    var html;

    beforeEach(function() {
        // Load module
        module('common');

        // Inject dependencies
        inject(function ($injector, _$compile_, _$rootScope_) {
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        html = 
        '<form name="form">' +
        '<input type="text" name="favorite" ng-model="signupCtrl.favorite" favorite>' +
        '</form>';
    });
  
    it('should find an exisiting favorite', function() {
        $httpBackend.whenGET(ApiPath + '/menu_items/A10.json').respond(200, {message: 'success'});

        var element = $compile(html)($rootScope);
        
        $rootScope.form.favorite.$setViewValue('A10');
        $rootScope.$digest();

        $httpBackend.flush();

        expect($rootScope.form.favorite.$valid).toBe(true);
    });

    it('should not find an undefined favorite', function() {
        $httpBackend.whenGET(ApiPath + '/menu_items/A100.json').respond(400, {message: 'error'});

        var element = $compile(html)($rootScope);
        
        $rootScope.form.favorite.$setViewValue('A100');
        $rootScope.$digest();

        $httpBackend.flush();

        expect($rootScope.form.favorite.$invalid).toBe(true);
    });
  });