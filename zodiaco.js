function signoZodiacal(dia, mes) {
  switch (mes) {
    case 1:
      return dia <= 20 ? "capricornio" : "acuario";
    case 2:
      return dia <= 19 ? "acuario" : "piscis";
    case 3:
      return dia <= 20 ? "piscis" : "aries";
    case 4:
      return dia <= 19 ? "aries" : "tauro";
    case 5:
      return dia <= 20 ? "tauro" : "geminis";
    case 6:
      return dia <= 20 ? "geminis" : "cancer";
    case 7:
      return dia <= 22 ? "cancer" : "leo";
    case 8:
      return dia <= 22 ? "leo" : "virgo";
    case 9:
      return dia <= 22 ? "virgo" : "libra";
    case 10:
      return dia <= 22 ? "libra" : "escorpio";
    case 11:
      return dia <= 22 ? "escorpio" : "sagitario";
    case 12:
      return dia <= 22 ? "sagitario" : "capricornio";
  }
}
const mes = parseInt(Math.random() * 12) + 1;
const dia = parseInt(Math.random() * 31) + 1;
console.log({ dia }, { mes }, signoZodiacal(dia, mes));
