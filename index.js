// Code your solution in this file!
// Calculates distance from headquarters (located at 42nd street) in blocks
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
  }
  
  // Converts blocks to feet (1 block = 264 feet)
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Calculates the distance travelled in feet between two points
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Calculates fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // free ride
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // flat rate for distance over 2000 feet but less than 2500 feet
    } else {
      return 'cannot travel that far'; // distance greater than 2500 feet
    }
  }
  