(async () => {
  const data = await fetch("./data.json").then(response => response.json());

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for await (const command of data) {
    const direction = command.split(" ")[0];
    const value = command.split(" ")[1];

    switch(direction) {
      case "up":
        aim = aim - Number(value);
        break;
      case "down":
        aim = aim + Number(value);
        break;
      default:
        horizontalPosition = horizontalPosition + Number(value);
        depth = depth + (Number(value) * aim);
        break;
    }
  }

  document.getElementById("answer").textContent = horizontalPosition * depth;
})();