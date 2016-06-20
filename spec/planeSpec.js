describe('Plane', function(){

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('should be able to land', function() {
    plane.land(airport);
    expect(plane.landed).toBeTruthy
  });
});
