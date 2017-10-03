var app = angular.module("fitnessApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
        .state("quotes", {
            url: "/quotes",
            templateUrl: "./views/quotes.html",
            controller: "homeController"
        })
        .state("about", {
            url: "/about",
            templateUrl: "./views/about.html",
            controller: "homeController"
        })



})