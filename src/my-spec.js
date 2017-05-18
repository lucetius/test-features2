describe('Array', function() {
  before(function() {
    // do some stuff
  });
  after(function() {
    // do other stuff
  });
  it('should not really be here but we want to test it', function() {
    (function() { [1,2,3].indexOf(4); }).should.not.throw();
  });
  describe('#indexOf()', function() {
    context('when not present', function() {
      it('should not throw an error', function() {
        (function() {[1,2,3].indexOf(4);}).should.not.throw();
      });
      it('should return -1', function() {
        [1,2,3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        [1,2,3].indexOf(3).should.equal(2);
      });
    });
  });
  describe('#length()', function() {
    it('should return the number of items in the array', function() {
      [1,2,3].length().should.equal(3);
    });
  });
});