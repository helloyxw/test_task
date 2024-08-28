const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

// 启用 CORS
app.use(cors());

app.use(bodyParser.json());

app.post('/alert', (req, res) => {
  console.log('收到通知:', req.body);
  
  fs.appendFile('notifications.json', JSON.stringify(req.body) + '\n', (err) => {
    if (err) {
      console.error('保存通知时出错:', err);
      res.status(500).send('保存通知失败');
    } else {
      res.status(200).send('通知已保存');
    }
  });
});

app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});