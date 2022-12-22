const size = {
  mobile: '700px',
  tablet: '701px',
  desktopS: '1120px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.desktopS})`,
};
