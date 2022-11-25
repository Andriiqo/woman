export const convertDateFromDotToBackend = (date: string): string => {
  const [day, mount, year] = date.split('.');
  return [year, mount, day].join('-');
};