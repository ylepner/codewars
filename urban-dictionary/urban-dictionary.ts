interface WordDictionary {
  addWord(): void,
  search(): boolean
}

const WordDictionary: any = function () {
  this.words = []
};

WordDictionary.prototype.addWord = function (word: string) {
  this.words.push(word);
};

WordDictionary.prototype.search = function (word: string) {
  const pattern = new RegExp(`^${word}$`);
  return this.words.some((word: string) => pattern.test(word));
};