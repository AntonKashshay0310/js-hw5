// 1

const choice = prompt("Який напій бажаєте?");

switch (choice) {

  case "кава":
    alert("Ось ваша кава");
    break;

  case "чай":
    alert("Ось ваш чай");
    break;

  case "сік":
    alert("Ось ваш сік");
    break;

  default:
    alert(`Нажаль у нас немає такого напою як ${choice}`);
}

// 2

const days = prompt("Який ваш улюблений день тиждня?");

switch (days) {

  case "понеділок":
    alert("Це робочий день");
    break;

  case "вівторок":
    alert("Це робочий день");
    break;

  case "середа":
    alert("Це робочий день");
    break;

  case "четвер":
    alert("Це робочий день");
    break;

  case "п'ятниця":
    alert("Це робочий день");
    break;

  case "субота":
    alert("Це вихідний день");
    break;

  case "неділя":
    alert("Це вихідний день");
    break;

  default:
    alert(`Це ж не день тиждня`);
}

// 3

let month = Number(prompt("Оберіть любе число від 1 до 12 і я вам покажу яка це пора року"));
switch (month) {
  case 12:
  case 1:
  case 2:
    alert("Зараз холодно бо зараз зима");
    break;

  case 3:
  case 4:
  case 5:
    alert("Зараз все розквітає бо зараз весна");
    break;

  case 6:
  case 7:
  case 8:
    alert("Зараз жарко бо зараз літо");
    break;

  case 9:
  case 10:
  case 11:
    alert("Зараз багато дощів бо зараз осінь");
    break;

  default:
    alert("Немає такого місяця");
}

// 4

const color = prompt("Оберіть одинз 3 кольорів стандартного світлофору");
switch (color) {
    
  case "червоний":
    alert("стоп");
    break;

  case "зелений":
    alert("йти");
    break;

  case "жовтий":
    alert("чекати");
    break;

    default:
        alert("Це не колір стандартного світлофору")
}
