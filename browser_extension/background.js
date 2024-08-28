chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'sendNotification') {
      fetch('http://localhost:3000/alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.data)
      })
      .then(response => response.text())
      .then(result => sendResponse({success: true, result}))
      .catch(error => sendResponse({success: false, error: error.message}));
      return true; // 保持消息通道开放
    }
  });