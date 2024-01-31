function changeBackgroundColor() {
    const body = document.body;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    body.style.backgroundColor = randomColor;
  }


