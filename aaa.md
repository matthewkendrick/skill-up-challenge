# CSSフレームワークBootstrapを使おう

<div style="color:#343a40; background:rgba(211,211,211,0.8); border-radius:.7em; padding-top:.1em; padding-bottom:1em; padding-left:.3em; box-shadow:7px 7px 3px grey;">
<h3 style= "padding-left: .5rem; background-color:#ffc107; color:#343a40">学習の目標</h3>
<div style= "padding-right: 1rem">

- 本章では、Bootstrapの導入方法と使い方を学びます。RailsにはCSSのデザインテンプレートが準備されていないので、ページデザインも各自で設計しなければなりません。
- しかし、Bootstrapを利用することで、整ったデザインを効率的に作れるようになります。

</div>
</div>
<br>

- [ ] Bootstrapとは
  - [ ] Bootstrapの特徴
  - [ ] グリッドシステムの仕組み
  - [ ] グリッドシステムを理解する
  - [ ] グリッドシステムの3つのclass

------

- [ ] Bootstrapを追加する
  - [ ] Bootstrapを追加する手順
  - [ ] ひな形アプリを準備する

------

- [ ] Bootstrapでレイアウトを整える
  - [ ] tableのレイアウトを整える
  - [ ] グリッドシステムでレイアウトを整える
  - [ ] buttonをレイアウトする
  - [ ] レイアウトのパターンを増やす
- - - -

<br>

### Bootstrapとは
- - - -
Bootstrap(ブートストラップ)は、Twitter社が開発したCSSのフレームワークです。CSSを書く場合、通常はすべてのスタイルを自身で設計する必要がありますが、Bootstrapにはよく使うスタイルがあらかじめ定義されているので、整ったデザインのページを効率的に作成できます。Bootstrapには、以下のような特徴があります。

#### Bootstrapの特徴
1. _**デザイン性が高い**_

<div style= "padding-left: 1rem">

- デザイン知識がなくても、見た目のよいデザインに仕上げられる

</div>

2. _**グリッドシステムを採用**_

<div style= "padding-left: 1rem">

- ページの横幅を12分割してデザインする仕組みを採用
- 整ったデザインを設計しやすい

</div>

3. _**レスポンシブ対応**_

<div style= "padding-left: 1rem">

- デバイス(ディスプレイサイズ)ごとに異なるCSSを適用させることができます。

</div>

4. _**豊富なコンポーネント**_

<div style= "padding-left: 1rem">

- ナビゲーションやパンくずリストなどサイト制作でよく使われるものを部品化して簡単に扱えるようになっています。

</div>
</div>
<br>

### グリッドシステムの仕組み
- - - -

<img src="https://wals.s3.amazonaws.com/uploads/img/grid-system.png" style="border-radius:8px">

グリッドシステムは、Bootstrapの特徴の1つです。サイトの横幅を均等に分けるガイドラインをグリッドといいますが、Bootstrapには12本のグリッドが存在します。つまりBootstrapでは、サイトの横幅を12分割してデザインを行います。

このグリッドを活用してレイアウトできる仕組みがグリッドシステムです。グリッドシステムのおかげで、レスポンシブページも効率的に作成できます。たとえば、12等分の比率を8：4にすれば、メイン8でサイドバー4のレイアウトもすぐに作成できます。合計12になるように指定することで、レイアウトも簡単に組めます。

<br>

### グリッドシステムの3つのclass
- - - -

<img src="https://wals.s3-ap-northeast-1.amazonaws.com/uploads/333/container_row_col.png" style="border-radius:8px">

グリッドシステムを使うときは、3つのclassを理解しておく必要があります。この3つを覚えておけば、複雑なレイアウトもシンプルに行えます。

<div style= "padding-left: 1rem">

1. .container
2. .row
3. .col

</div>

グリッドシステムでは、上記の3つのclassを使ってレイアウトを行います。

<br>

#### .container
<div style= "padding-left: 1rem">

Bootstrapでは全体を.containerで囲み、その中に.rowと.colを格納しています。.containerは、外側の枠(コンテナ)です。.containerの幅はあらかじめ決められていて、画面幅に応じて5種類から選択します。また、.container幅の切り替わりの場所をブレークポイントと呼んでいます。

<table>
  <tr>
    <th style="min-width: 80px">サイズ</th>
    <th style="min-width: 160px">主な利用用途</th>
    <th style="min-width: 156px">画面幅</th>
  </tr>
  <tr>
    <td>xl</td>
    <td>デスクトップPCなどの大画面モニタ</td>
    <td>1200px以上</td>
  </tr>
  <tr>
    <td>lg</td>
    <td>ノートPCなどの省サイズモニタ</td>
    <td>992px以上</td>
  </tr>
  <tr>
    <td>md</td>
    <td>タブレット端末など</td>
    <td>768px以上</td>
  </tr>
  <tr>
    <td>sm</td>
    <td>スマートフォン(横持ち)など</td>
    <td>576px以上</td>
  </tr>
  <tr>
    <td>-</td>
    <td>スマートフォン(縦持ち)、IoT端末など</td>
    <td>576px未満</td>
  </tr>
</table>

</div>
<br>

#### .row
![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/rows_cols.png)
.rowは行に適用するclassで、コンテナを水平に分割して上から下へ積み重ねられます。.rowの中には.colが格納されます。

<br>

#### .col
.colは、列に適用するclassです。.colは、.rowを縦に最大で12分割し、左から右へ並べられます。記述の仕方は`.col-画面幅-グリッド数` というように、画面幅とグリッド数の2つを指定する必要があります。画面幅は[.container](bear://x-callback-url/open-note?id=CB81CCFB-2609-4D56-A307-7D5DF3DBFFE9-21008-0000190276065C0A&header=.container)で解説したように、文字列で指定します(sm、md、lg、xl)。またグリッド数は、数値で指定します。たとえば、画面幅lgのときにグリッドを8個持つカラムにしたいときは、

```html
<div class="col-lg-8"></div>
```

というように記述します。カラムが複数ある場合は、すべてを記述します。

<br>

### Bootstrapを追加する
- - - -
_アプリケーションにBootstrapを導入する方法は、**次章で紹介**します_ 。Bootstrapの概要を理解したところで、さっそく実践していきましょう。今回は、事前にひな形アプリケーションを準備しています。このアプリを使って、Bootstrapによってどのようにスタイルが変化するかを確かめていきましょう。ひな形アプリ内にはあらかじめ、Bootstrapを使用できるようにソースコードに手が加えられています。

<br>

#### ひな形アプリを準備する

まず、ひな形アプリを準備しましょう。

<br>

<center>
  <span style="background-color:#28a745; border-radius:40px; padding:0.8rem 2rem; text-decolation:none;">
    <a style="text-decoration: none; color:#f8f9fa;" href="https://wals.s3.ap-northeast-1.amazonaws.com/curriculum/bootstrap/rails6-bootstrap-template.zip">
      bootstrap-template.zip
    </a>
  </span>
</center>

<br>
<br>

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/drug_and_drop_boottstrap_template.png)
environmentに解凍されたフォルダ(bootstrap_template-main)をドラッグ&ドロップします。

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/bootstrap_template_on_cloud9_complete.png)
フォルダがアップロードされて上記のようになれば完了です。ひな形アプリへ移動して、以下コマンドを実行しましょう。

**1.**
```
username:~/environment/bootstrap_template-master $ bundle install
```

**2.**
```
username:~/environment/bootstrap_template-master $ rails webpacker:install
```

**3.**
```
username:~/environment/bootstrap_template-master $ rails db:migrate
```

**4.**
```
username:~/environment/bootstrap_template-master $ rails s
```
次に、上記4.のコマンドでサーバを起動しましょう。起動できたら、`/posts` に接続して確認します。

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/preview_bootstrap_template_on_rails.png)
Bootstrap追加前の現状は、あまり見た目のよいページとは言えないです。

<br>

### Bootstrapでレイアウトを整える
- - - -
それでは、Bootstrapを使ってレイアウトを整えていきましょう。

#### tableのレイアウトを整える
まず、一覧ページを整えます。現在は、<table>タグでレイアウトしていますが、ここを整えていきます。app /views /postsフォルダのindex.html.erbファイルを開きます。以下のように、tableタグにclass名(table table-striped)を追加します。

::app /views /posts /index.html.erb::
```ruby
:
:

<table class="table table-striped">
:
:

</table>
```

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/preview_bootstrap_table.png)
サーバーを起動し、`/posts` にアクセスしてみましょう。このようにclass名を追記するだけで、BootstrapのCSSが効いてレイアウトを整えてくれます。

<br>

#### グリッドシステムでレイアウトを整える
- - - -
![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/preview_bootstrap_4_8_col_lg.png)
グリッドシステムを用いて、レイアウトを整えます。今回は、indexページの左側にサイドバーを挿入します。上記の図を参考にしましょう。それでは、実際に設計していきましょう。

::::
```erb
app/views/posts/index.html.erb

<p id="notice"><%= notice %></p>
<h1>Posts</h1>
<div class="container">  <!-- この行を追加 -->
  <div class="row">      <!-- この行を追加 -->
    <table class="table table-striped">

    :
    :

    </table>
  </div>  <!-- この行を追加 -->
</div>    <!-- この行を追加 -->
<br>
<%= link_to 'New Post', new_post_path %>
```
app /views /postsフォルダのindex.html.erbファイルを開きます。<table>タグを囲むように2つのdivタグを挿入し、<div>タグにはそれぞれcontainerとrowのclassを追加します。これで、12分割する準備ができました。

::app_views_posts/index.html.erb::
```erb
<p id="notice"><%= notice %></p>
<h1>Posts</h1>
<div class="container">
  <div class="row">
    <!-- 以下を追加 -->
    <div class="col-lg-4" style="background-color: orange;">
      <h2>サイドバー</h2>
    </div>
    <table class="table table-striped">

:
:
```
次に、サイドバー(4)と、メインテーブルのカラム(8)に分けていきます。4カラムをわかりやすくするために、暫定的に背景色を設定します。col-4は、カラム4分割を意味していますが、今回はPCのレイアウトのみ指定するので、lgを追加してcol-lg-4と記述しています。次に、テーブルにcol-lg-8を指定して、両者の合計が12カラムになるようにします。

::app /views /posts /index.html.erb::
```erb
:
:

    <div class="col-lg-4" style="background-color: orange;">
      <h2>サイドバー</h2>
    </div>
    <div class="col-lg-8">  <!-- この行を追加 -->
      <table class="table table-striped">

      :
      :

      </table>
    </div>  <!-- この行を追加 -->
:
:
```
これで、サイドバー4＆メインテーブル8のレイアウトが完成しました。`/posts` にアクセスして確かめましょう。以下のように4:8になっていれば成功です。

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/preview_bootstrap_4_8_col_lg.png)
画面幅が大きい場合にはサイドバーとテーブルの左右に大きく余白ができる場合がありますが問題ありません。重要なのは親要素rowの幅に対して<div class="col-lg-4" ...>と<div class="col-lg-8">の幅が4:8の割合になっていることです。

<br>

#### buttonをレイアウトする
- - - -
最後に、<a>タグのNew Postに、ボタン用のclassを追加します。同じく、app /views /postsフォルダのindex.html.erbファイルに設定します。link_toメソッドのNewPostに、以下のように追加します。

::app /views /posts /index.html.erb::
```erb
<%= link_to 'New Post', new_post_path, class: "btn btn-secondary" %>
```

![](CSS%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AFBootstrap%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86/btn-secondary_bs4_button.png)
サーバを起動し、`/posts` にアクセスして確認しましょう。<a>要素やbutton要素などのclass名に、btn btn_〇〇(色やサイズなど)を指定するだけで、色やサイズを思いどおりに設定できます。

<br>

#### レイアウトのパターンを増やす

今回は、Bootstrapの主要な機能を使用しました。この他にも、以下のようなレイアウトを作成したり調整することができます。
	* ヘッダーナビゲーションのスタイル
	* フォーム
	* モーダル(モーダルダイアログを呼び出すJavaScript)
より詳しく知りたい場合は、[公式サイト](https://getbootstrap.jp/docs/4.5/getting-started/introduction/)も閲覧しましょう。