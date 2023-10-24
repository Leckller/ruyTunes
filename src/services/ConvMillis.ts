function ConvMillis(number: number) {
  const conv = (number / 60000).toFixed(2).split('.');
  let retorno = '';
  if (Number(conv[1]) >= 60) {
    retorno = `${Number(conv[0]) + 1}:${Number(conv[1]) - 60}`;
    return retorno;
  }
  return conv.join(':');
}

export default ConvMillis;
