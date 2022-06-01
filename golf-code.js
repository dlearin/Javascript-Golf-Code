const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

if (strokes == 1) {
  return "Hole-in-one!"
}
else if ((par - strokes)>= 2) {
  return "Eagle"
}
else if ((par - strokes) == -1) {
  return "Bogey"
}
else if ((par - strokes) == 1) {
  return "Birdie"
}
else if ((par - strokes) == 0) {
  return "Par"
}
else if ((par + strokes) == 10) {
  return "Double Bogey"
}
else if ((par + strokes) >= 11) {
  return "Go Home!"
}
  // Only change code above this line
}

golfScore(5, 4);
