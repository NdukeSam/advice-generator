const fetchAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
    const data = await response.json();
    console.log(`Advice #${data.slip.id}: "${data.slip.advice}"`);
    document.getElementById('advice-id').innerHTML = `Advice #${data.slip.id}`;
    document.getElementById('advice-text').innerHTML = `"${data.slip.advice}"`;

  } catch (error) {
    console.error('Error fetching advice:', error);
  }

}

fetchAdvice();

// document.getElementById('generate-advice').addEventListener('click', fetchAdvice);  