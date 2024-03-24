document.addEventListener("DOMContentLoaded", function () {
  // Grab the template script
  var templateElement = document.getElementById("address-template");
  var theTemplateScript = templateElement.innerHTML;

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context = {
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  var contentPlaceholder = document.querySelector('.content-placeholder');
  contentPlaceholder.innerHTML = theCompiledHtml;
});
