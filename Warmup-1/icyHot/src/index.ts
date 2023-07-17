export function icyHot(
  givenTemperature1: number,
  givenTemperature2: number
): boolean {
  return (
    (givenTemperature1 > 100 || givenTemperature2 > 100) &&
    (givenTemperature1 < 0 || givenTemperature2 < 0)
  );
}
