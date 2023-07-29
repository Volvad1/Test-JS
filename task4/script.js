 const text = document.querySelector('#text');
 
 text.addEventListener('click', () => {
  const userText = prompt('Введите текст');
  if (userText !== null) {
    text.textContent = userText;
  }
})

document.querySelector('#text').addEventListener('click', 
  () => {
    text.preventDefault()
  });
 