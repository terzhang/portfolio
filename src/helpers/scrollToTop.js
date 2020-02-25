// method that scroll to top of the page
export default () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch (e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
