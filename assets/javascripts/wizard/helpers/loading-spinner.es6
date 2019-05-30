import { htmlHelper } from 'discourse-common/lib/helpers';

function renderSpinner(cssClass) {
  var html = "<div class='spinner";
  if (cssClass) { html += ' ' + cssClass; }
  console.log("i am from loading-spinner.es6 inside renderSpinner");
  console.log(cssClass);
  return html + "'></div>";
}
var spinnerHTML = renderSpinner();

export default htmlHelper(params => {
  const hash = params.hash;
  console.log("i am from loading-spinner.es6 inside htmlHelper");
  return renderSpinner((hash && hash.size) ? hash.size : undefined);
});

export { spinnerHTML, renderSpinner };
