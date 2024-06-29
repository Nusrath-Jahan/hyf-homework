let userName = "";
let todos = [];

function getReply(command) {
  // Handling the "Hello my name is ..." command
  const nameRegex = /^Hello\s+my\s+name\s*(?:is|'s)\s+([^\s].*)$/i;
  const nameMatch = command.match(nameRegex);
  if (nameMatch) {
    const name = nameMatch[1];
    if (name === userName) {
      return `You already introduced yourself, ${userName}.`;
    }
    userName = name;
    return `Nice to meet you, ${userName}!`;
  }

  // Handling the "What is my name?" command
  if (command.toLowerCase() === "what is my name?") {
    if (userName) {
      return `Your name is ${userName}.`;
    } else {
      return "You have not introduced yourself yet.";
    }
  }

  // Handling the "Add ... to my todo" command
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const task = command.slice(4, -11);
    todos.push(task);
    return `${task} added to your todo`;
  }

  // Handling the "Remove ... from my todo" command
  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const task = command.slice(7, -14);
    const index = todos.indexOf(task);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${task} from your todo`;
    } else {
      return `${task} is not in your todo list`;
    }
  }

  // Handling the "What is on my todo?" command
  if (command === "What is on my todo?") {
    if (todos.length > 0) {
      return `You have ${todos.length} todo${
        todos.length > 1 ? "s" : ""
      } - ${todos.join(" and ")}`;
    } else {
      return "Your todo list is empty";
    }
  }

  // Handling the "What day is it today?" command
  if (command === "What day is it today?") {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return `Today is ${today.toLocaleDateString("en-US", options)}`;
  }

  // Handling simple math commands
  const mathMatch = command.match(/What is (\d+) (\+|\-|\*|\/) (\d+)\?/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1]);
    const operator = mathMatch[2];
    const num2 = parseInt(mathMatch[3]);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    return `The result is ${result}`;
  }
  //Set a timer for 4 minutes
  const timerMatch = command.match(/Set a timer for (\d+) minutes/);
  if (timerMatch) {
    const minutes = parseInt(timerMatch[1]);
    setTimeout(() => {
      console.log("Timer done");
    }, minutes * 60000);
    return `Timer set for ${minutes} minutes`;
  }
  //Asking for some advice
  if (
    command === "Can you give me a suggestion how I can improve my studies?"
  ) {
    const quotesArray = [
      "Good study habits include finding a quiet location to study, taking breaks, settings goals, and taking practice tests. Here's the full list, and the psychological reasons why they work.",
    ];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  }

  return "I'm sorry, I didn't understand that command.";
}
console.log(getReply("Hello my name is Valentin"));
// console.log(getReply("hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(
  getReply("Can you give me a suggestion how I can improve my studies?")
);
