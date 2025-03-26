const callAPI = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    const data = await response.json();
    
    const p = document.getElementById('joke');
    if (p) p.innerText = data.joke;

  }catch (error) {
    console.log(error);
  }
}

callAPI();

const nextButton = document.querySelector('.next-joke');
nextButton?.addEventListener('click', () => {
  callAPI(); 
});

 
