var myapp = angular.module('myApp', ['ui.bootstrap']);
 
/**
* Main controller 
*/
myapp.controller('mainCtrl', function ($scope){

    
    $scope.menus = [
                    {name:'Home',        active:"active",   display: true,  content:"content_HTML/home.html"},
                    {name:'Paintings',   active:"",         display: false, content:"content_HTML/paint.html"},
                    {name:'Photography', active:"",         display: false, content:"content_HTML/photograph.html"},
                    {name:'Drawings',    active:"",         display: false, content:"content_HTML/drawing.html"},
                   ];

    $scope.resetAll = function(){
         angular.forEach($scope.menus, function(menu){
                menu.display=false;
                menu.active="";
        });
    }
    
    $scope.setView = function(val){
        console.log ("value= " + val);
        angular.forEach($scope.menus, function(menu){
            if (val==menu.name){
                menu.display=true;
                menu.active="active";
            }
        });
    }
});

/**
* Paint controller 
*/
myapp.controller('paintingCtrl', function ($scope){
    $scope.paintings = [
                        {name:'Painting1', painter:"Sarah Dough",   price:" 20", img:"img/paint1.jpg"},
                        {name:'Painting2', painter:"Anonymous",     price: "35", img:"img/paint2.jpg"},
                        {name:'Painting3', painter:"Samoel",        price: "70", img:"img/paint3.jpg"},
                       ];
});


/**
* Drawing controller 
*/
myapp.controller('drawingCtrl', function ($scope){
    $scope.drawings = [
                        {name:'Drawing1', painter:"Sarah Dough",   price:" 22", img:"img/image1.jpg"},
                        {name:'Drawing2', painter:"Anonymous",     price: "34", img:"img/image2.jpg"},
                        {name:'Drawing3', painter:"Samoel",        price: "75", img:"img/image3.jpg"},
                       ];
});


/**
* Photograghy controller 
*/
myapp.controller('photoCtrl', function ($scope){
   $scope.photos = [
                        {name:'Painting1', painter:"Sarah Dough",   price:" 20", img:"img/photo1.jpg"},
                        {name:'Painting2', painter:"Anonymous",     price: "35", img:"img/photo2.jpg"},
                        {name:'Painting3', painter:"Samoel",        price: "70", img:"img/photo3.jpg"},
                       ];
});