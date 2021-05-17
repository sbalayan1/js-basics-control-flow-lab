

function scuberGreetingForFeet(x) {
  // Write your code here!
  if (x>2500) {
    return ('No can do.');
  } else if (x>2000) {
    return ('I will gladly take your thirty bucks.');
  } else if (x<=400) {
    return ('This one is on me!');
  }
}

function ternaryCheckCity(city) {
  return ((city == "NYC") ? "Ok, sounds good." : "No go.");
} 

function switchOnCharmFromTip(x){
  // Write your code here!
 switch (x) {
    case 'generous': 
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break; 
    case 'thanks for everything':
      return "Bye.";
      break;

  }
}