function selectEmoji(emoji) {
  
    const emojis = document.querySelectorAll('.emoji');
  
    
    emojis.forEach(emojiElement => {
    
      if (emojiElement.textContent === emoji) {
      
        emojiElement.classList.add('selected');
      } else {
       
        emojiElement.classList.remove('selected');
      }
    });
  
   
    document.getElementById('satisfaction').value = emoji;
  }
  