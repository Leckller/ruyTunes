function RandomColors() {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g}, ${b}, .5)`;
  };
  return {
    one: randomColor(),
    two: randomColor(),
    three: randomColor(),
  };
}

export default RandomColors;
