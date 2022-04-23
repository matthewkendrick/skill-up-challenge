# 質問

Q. 502 Bad Gatewayを解決できません。

・現状<br>
デプロイを学ぼう4章 まで進めたところプリケーションが表示されなかったため、<br>
デプロイを学ぼう1章 から順にもう一度見返してみました。

<span style= "padding-left: 8rem">▼</span>

昨日の時点ではプリコンパイルがうまくいかず詰まっていたので、<br>
メンターさんに質問させていただきました。

<span style= "padding-left: 8rem">▼</span>

３人のメンターさんが対応してくださり、<br>
デプロイに関する一通りの問題点は洗って下さったと思いますが、
最終的には解決に至らず再度質問をするということで落ち着きました。

---

SSH<br>
`ssh -i ~/.ssh/dwc_portfolio.pem ec2-user@3.209.236.250`

LOG<br>
`sudo tail -f log/production.log`

DB<br>
`mysql -u root -p -h ads-mysql-server.ccwgwc7xysqm.us-east-1.rds.amazonaws.com`