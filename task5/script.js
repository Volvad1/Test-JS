
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const duplicateField = document.getElementById('duplicateField');

   
  function updateDuplicateField() {
      duplicateField.textContent = textInput.value;
    }

    function handleSubmitButtonClick() {
      console.log(textInput.value);
      textInput.value = '';
      duplicateField.textContent = '';
    }

    textInput.addEventListener('input', updateDuplicateField);
    submitButton.addEventListener('click', handleSubmitButtonClick);
 