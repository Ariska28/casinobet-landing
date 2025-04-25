export const isValidBelarusPhone = (phone) => {
  const regex = /^(\+375|375)(25|29|33|44|17)\d{7}$/;
  return regex.test(phone.replace(/\D/g, ''));
}

export const isPasswordValid = (password) => {
  return password.length >= 6;
}