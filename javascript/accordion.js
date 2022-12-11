document.addEventListener("DOMContentLoaded", function() {
  // getting the accordion element
  const accordion = document.querySelector('.accordion-container');
  const accordionQuestionHeader = accordion.querySelectorAll('.accordion-question');
  // Get all of the headers that trigger the accordion
  accordionQuestionHeader.forEach((question) => {
    // Loop through all of the accordionQuestionHeaders and adds a click event listener to each
    question.addEventListener("click", function() {
      // get the dropdownPanel that the button controls
      let dropdownPanel = question.nextElementSibling;
      // Toggle the "active" class on the question and dropdownPanel to show / hide the answer
      dropdownPanel.classList.toggle("active");
      question.classList.toggle("active")
    });
  });
});