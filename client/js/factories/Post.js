Blog.factory('Post', function(Restangular) {
  var Post;
  Post = {
    get: function() {
      return RestAngular
        .one('posts')
        .getList()
    },
    create: function() {
      return RestAngular
        .one('posts')
        .customPOST(data);
    }
  };
  return Post;
})