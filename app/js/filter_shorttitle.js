
app.filter('shorttitle', function() {
  return function(t) {
  	var n = 10;
  	return (t.length > n) ? t.substr(0,n-1)+'...' : t;
  };
});