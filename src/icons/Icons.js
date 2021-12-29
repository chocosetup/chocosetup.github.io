function importIcons() {
  let r = require.context("./", false, /\.(png|jpe?g|svg)$/);
  let icons = {};
  r.keys().forEach((item) => {
    let newKey = item.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
    icons[newKey] = r(item);
  });
  return icons;
}

export default importIcons();
