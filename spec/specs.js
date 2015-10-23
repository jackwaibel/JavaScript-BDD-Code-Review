describe('bottlesSong', function() {
  it("ends at 0", function() {
  expect(bottlesSong(0)).to.equal(true);
  });

  it("starts at 99", function() {
    expect(bottlesSong(99)).to.equal(true);
  });

  it("decreases by one", function() {
    expect(bottlesSong(-1)).to.equal(true);
  });

});
