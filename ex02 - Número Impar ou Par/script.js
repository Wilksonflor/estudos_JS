const btnSaber = document
  .querySelector("#btnSaber")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const numero1 = Number(document.querySelector("#number1").value);
    const numero2 = Number(document.querySelector("#number2").value);
    if (numero1 % 2 === 0) {
      console.log(` O Número ${numero1} é par`);
    } else {
      console.log(` O Número ${numero1} é impar`);
    }
    if (numero2 % 2 === 0) {
      console.log(` O Número ${numero2} é par`);
    } else {
      console.log(`O Número ${numero2} é ímpar`);
    }
    console.log(numero1);
    console.log(numero2);
  });
