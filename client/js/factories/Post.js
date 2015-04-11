Blog.factory('Post', function(Restangular) {
  var Post;
  Post = {
    get: function() {
      return Restangular
        .one('posts')
        .getList()
    },
    create: function() {
      return Restangular
        .one('posts')
        .customPOST(data);
    }
  };
  return Post;
})