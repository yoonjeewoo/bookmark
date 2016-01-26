var app = angular.module("Bookmark", ['firebase']);  

app.controller("Ctrl", function ($scope, $firebaseArray, $http, $bookmarkList) {
	
  $scope.urlArr = $bookmarkList;

  /*
  var firebaseURL = "https://sbookmark.firebaseio.com/101";
  $scope.getList = function() {
    	var echoRef = new Firebase(firebaseURL);
  		var query = echoRef.orderByChild("url");
  		$scope.urlArr = $firebaseArray(query);
    }; */

  $scope.url;  
  $scope.add = function() { 
  	$scope.urlArr.$add({
    	url: $scope.url,
    	title: "TBA"
  	});   
  }; 
    
  $scope.add = function(a, b) {
    return a+b;
  };

  $scope.remove = function (url) {
    $scope.urlArr.$remove(url);
  };

  $scope.addAndUpdate = function() { 
    var $p = $scope.urlArr.$add({
      img: 'img/loading.gif', 
      title: "Reading...",
      url: $scope.url,
    }).then(function(ref) {
      $scope.updateImg(ref, $scope.url);
      $scope.updateTitle(ref, $scope.url);

      $scope.url = "";
    });
    return $p;
  };

  $scope.getImgAndAdd = function () {
    var imgURL = null;

    // 1. get img set the img URL
    $p = $http.get('http://jdkim.ddns.net/thumbnail.php', 
      {params: {url: $scope.url}});

    $p.success(function(data, status, headers, config) {
          imgURL = data.thumbnail;
        }).error(function(data, status, headers, config) {});

      // 2. add to the firebse
      $scope.urlArr.$add({
        url: $scope.url,
        img: imgURL
      });  
    }

    $scope.getImgAndWaitAdd = function () {
      var imgURL = null;

      // 1. get img set the img URL
      $p = $http.get('http://jdkim.ddns.net/thumbnail.php', 
        {params: {url: $scope.url}});

      $p.success(function(data, status, headers, config) {
          imgURL = data.thumbnail;

          // 2. wait to get the resut and add to the firebse
          $scope.urlArr.$add({
            url: $scope.url,
           img: imgURL
          });  
        }).error(function(data, status, headers, config) {});
    }

    $scope.updateImg = function (ref, url) {
     $http.get('http://jdkim.ddns.net/thumbnail.php', 
        {params: {url: url}}).
        success(function(data, status, headers, config) {
          console.log(data);

          // update firebase
          if (ref!=null) {
            ref.update({img: data.thumbnail});
          }
        }).
        error(function(data, status, headers, config) {});
   };

   $scope.updateTitle = function (ref, url) {
     $http.get('http://jdkim.ddns.net/title.php', 
        {params: {url: url}}).
        success(function(data, status, headers, config) {
          console.log(data);

          // update firebase
          ref.update({ title: data.title});

        }).
        error(function(data, status, headers, config) {});

  };
    // load the list!
    //$scope.getList();
});  
