export const getToolbarHeight = (): number => {
  const toolbar = document.getElementById('toolbar');
  return toolbar ? toolbar.offsetHeight : 0;
};
