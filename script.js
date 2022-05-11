window.onload = () => {
  
  const bar = document.querySelector('.password-bar');
  const text = document.querySelector('.password-text');
  const input = document.querySelector('#password');
  input.addEventListener('input', function() {
    let score = 0;
    
    score = this.value.length;
    score = (matching(this.value, /[!]/gmi)) ? score + matching(this.value, /[!]/gmi) * 3 : score;
    score = (matching(this.value, /[A-Z]/g)) ? score + 3 : score;
    score = (matching(this.value, /[0-9]/g)) ? score + 3 : score;
    
    scoreToData(score);
  });
  
  function matching(target, regex) {
    return (target.match(regex));
  }
  
  function scoreToData(score) {
    let data;
    
    if (score > 30) {
      data = {
        width: '100%',
        label: 'strong',
        color: '#4caf50'
      }
    } else if (score > 20) {
      data = {
        width: '70%',
        label: 'medium',
        color: 'gold'
      }
    } else if (score > 1) {
      data = {
        width: '35%',
        label: 'weak',
        color: '#e36060'
      }
    } else {
      data = {
        width: '0',
        label: '',
        color: ''
      }
    }
    
    putValue(data);
  }
  
  function putValue(data) {
    bar.style.width = data.width;
    bar.style.background = data.color;
    text.textContent = data.label;
  }
  
}