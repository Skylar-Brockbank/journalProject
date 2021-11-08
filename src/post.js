function Post(title, body){
  this.title = title;
  this.body = body;
}

Post.prototype.getWordCount = function() {
  let wordArray = this.body.split(" ");
  let trimmedArray = wordArray.map(function(word){
    return word.trim();
  });
  return trimmedArray.length-1;
};
