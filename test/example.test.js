describe("My Suite", function() {
  it("returns a string", function() {
    expect(MY_NS.hello("World")).toBe("Hello World");
  });

  it("returns Unknown when given null ", function() {
    expect(MY_NS.hello(null)).toBe("Hello Unknown");
  });
});
