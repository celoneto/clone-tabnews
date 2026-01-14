const calculadora = require("../models/calculadora")

test("somar 2 com 5 deve retornar 7", () => {
  const resultado = calculadora.somar(2, 5)
  expect(resultado).toBe(7)
})

test("somar 'banana' com 5 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar('banana', 5)
  expect(resultado).toBe('Erro')
})

test("somar NaN com 5 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar(NaN, 5)
  expect(resultado).toBe('Erro')
})


test("subtrair 2 com 5 deve retornar -3", () => {
  const resultado = calculadora.subtrair(2, 5)
  expect(resultado).toBe(-3)
})

test("multiplicar 2 com 5 deve retornar 10", () => {
  const resultado = calculadora.multiplicar(2, 5)
  expect(resultado).toBe(10)
})

test("dividir 2 com 5 deve retornar 2/5", () => {
  const resultado = calculadora.dividir(2, 5)
  expect(resultado).toBe(0.4)
})

test("dividir 2 com 0 deve retornar 'Erro'", () => {
  const resultado = calculadora.dividir(2, 0)
  expect(resultado).toBe('Erro')
})  