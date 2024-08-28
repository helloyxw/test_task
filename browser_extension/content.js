const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const notification = {
        url: window.location.href,
        changeType: mutation.type,
        timestamp: new Date().toISOString()
      };
      chrome.runtime.sendMessage({action: 'sendNotification', data: notification}, response => {
        if (response.success) {
          console.log('通知已发送');
        } else {
          console.error('发送通知时出错:', response.error);
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });