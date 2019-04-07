export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

export const changePrimaryColor = color => {
  return {
    type: CHANGE_PRIMARY_COLOR,
    color
  };
};
