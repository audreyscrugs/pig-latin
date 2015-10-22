describe("isVowel", function() {
  it("Is a word that starts with 'a', 'e', 'i', 'o', or 'u'", function(){
    expect(isVowel("air")).to.equal("airay")
  });
  it("Is a word that does not start with 'a', 'e', 'i', 'o', or 'u'", function(){
    expect(isVowel("hair")).to.equal("airhay")
  });
});
