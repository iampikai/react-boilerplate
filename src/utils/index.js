export const interpolate = (template = '', values = Object.prototype) =>
  template.replace(/{(.*?)}/g, (match, key) => values[key]);