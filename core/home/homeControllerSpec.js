/* global expect */

"use strict";

describe("HomeController", function () {
    var controller, vm;

    beforeEach(module("app.home"));

    beforeEach(inject(function ($controller) {
        controller = $controller("HomeController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});