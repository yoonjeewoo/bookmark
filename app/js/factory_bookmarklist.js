app.factory("$bookmarkList", ["$firebaseArray",
  function($firebaseArray) {
  	var firebaseURL = "https://sbookmark.firebaseio.com/101";
    var ref = new Firebase(firebaseURL);
  	var query = ref.orderByChild("url");
  	return $firebaseArray(query);
  }
]);