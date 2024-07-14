function changeBackgroundColor() {
    const colors = ["#f2f2f2", "#ff69b4", "#2196f3", "#009688"];
    const currentColor = 0;
    setInterval(() => {
      document.body.style.background = colors[currentColor];
      currentColor++;
      if (currentColor === colors.length) {
        currentColor = 0;
      }
    }, 1000);
  }
  changeBackgroundColor();