describe("Test Set Description", function() {

    it("test case description", () => assert.equal(pow(2,3), 8));
  
    it("3 raised to power 4 is 81", () => assert.equal(pow(3,4), 81));

    describe("Subset description", function() {
        for (let n = 0; n < 10; ++n) {
            testToPower0(n);
        }
      
        function testToPower0(x) {
            it(`${x} raised to power 0 is 1`, () => assert.equal(pow(x,0), 1))
        }
    })

  });