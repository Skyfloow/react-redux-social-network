const required = (value) =>
  value ? undefined : "Поля не должны быть пустыми!";

const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Должно быть не более: ${max} символов или меньше`
    : undefined;

const isEnglishInput = (value) =>
  value && !/^[A-Za]*$/i.test(value) ? "Вводите на английском" : undefined;

const passwordInput = (value) =>
  value && !/^[A-Za-z0-9]*$/i.test(value)
    ? "Допустим ввод только цифр и латиницы"
    : undefined;

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный Email"
    : undefined;

export { required, maxLength, isEnglishInput, passwordInput, email };
