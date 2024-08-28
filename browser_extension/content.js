const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const notification = {
        url: window.location.href,
        changeType: mutation.type,
        timestamp: new Date().toISOString()
      };
      fetch('http://localhost:3000/alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notification),
        mode: 'no-cors'
      }).then(() => {
        console.log('通知已发送');
      }).catch((error) => {
        console.error('发送通知时出错:', error);
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });