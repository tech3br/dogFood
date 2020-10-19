// Definindo Variáveis
const age = 1;
const weight = 8;
const t = 0.2;

// Defininido Função Reutilizável
const dogFood = (age, weight, t) => `${age * weight * t} pounds of dog food`;
console.log(dogFood(age, weight, t));
