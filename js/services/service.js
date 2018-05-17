/*************************
▼ カスタムサービスの定義
**************************/


portfolioApp.service('portfolioService',function(){

  this.portfolio = [
        {

        image: 'kikuchi-web-lab.png',
        title: 'きくちWEB研究所',
        comment: '東京デザインプレックス研究所',
        modal : 'kikuchi-web-lab',
        link : 'http://tokyo-d-plex.com/~toshikikikuchi/',
        env: 'Adobe DreamWeaver/Adobe PhotoShop/Adobe illustlator',
        language : 'HTML5/CSS3/jQuery',
        modalcomment : '東京デザインプレックス研究所で、作成したWEBサイトです。企画・設計・デザイン・実装まですべて一人で行いました。アニーメーションはjQueryで実装しています。'

        },
        {

        image: 'dena-creator-blog.png',
        title: 'DeNA CREATOR BLOG',
        comment: '（株）ディー・エヌ・エー',
        modal : 'dena-creator-blog',
        link: 'http://creator.dena.jp/',
        env: 'CMS(Livedoor Blog)',
        language : 'HTML5/CSS3/JavaScript',
        modalcomment : 'クリエイター向けのブログサービスです。ライブドアブログのシステムを利用して実装しています。フロントの実装・バックエンドの連携・ブログ執筆/システムの運用を行いました。'

        },
        {

          image: 'showroom.png',
          title: 'SHOWROOM',
          comment: '（株）SHOWROOM',
          modal : 'SHOWROOM',
          link: 'http://showroom.co.jp',
          env: 'Gulp/SMACSS',
          language : 'HTML5/Sass/JQuery',
          modalcomment : '株式会社SHOWROOMのコーポレートサイトです。「CSS設計」の手法の一つである、「SMACSS」を取り入れて実装しました。また、タスクランナーとして「Gulp」を導入しました。'

        },
        {

          image: 'nanairo.png',
          title: 'nanairo',
          comment: 'フォトグラファー',
          modal : 'nanairo',
          link: 'http://hikarinosaki.com/',
          env: 'Gulp/git/git flow/AWS S3',
          language : 'HTML/CSS/JQuery',
          modalcomment : '個人で受けた写真家のポートフォリオサイトです。フロントエンド全般の実装を行いました。'

        },{

          image: 'codecamp.png',
          title: 'CodeCamp',
          comment: '（株）CodeCamp',
          modal : 'codecamp',
          link: 'http://codecamp10334.lesson5.codecamp.jp/25_twitter_system/htdocs/home.php',
          env: 'phpMyAdmin/MVC-model',
          language : 'PHP/MySQL/HTML/CSS',
          modalcomment : 'Twitterのシステムクローンです。PHP5.0以降の書き方で、バックエンドのシステムをゼロから構築しました。MVCモデルで設計しています。'

        },
        {

          image: 'reflection.png',
          title: 'REFLECTION',
          comment: '（株）ディー・エヌ・エー',
          modal : 'reflection',
          link: 'http://reflection-info.com/',
          env: 'Grunt/git/AWS S3/Sketch',
          language : 'JQuery',
          modalcomment : 'クリエイター展示会のイベントページです。「GoogleMAP-API」「パララックス効果」の実装などを行いました。'

        },

        {

          image: 'howwell.png',
          title: 'howwell',
          comment: '（株）ディー・エヌ・エー',
          modal : 'howwell',
          link: 'http://howwell.jp/',
          env: 'Gulp/git',
          language : 'HTML/CSS/JQuery',
          modalcomment : 'howwellの公式サイトです。フロントエンド全般の実装を行いました。'

        },
        {

          image: 'ui-crunch.png',
          title: 'UI CRUNCH',
          comment: '（株）ディー・エヌ・エー',
          modal : 'ui-crunch',
          link: 'http://ui-crunch.com/',
          env: 'Grunt/git',
          language : 'HTML5/Sass/jQuery',
          modalcomment : 'UIデザイナーのイベントのランディングページの制作を行いました。Sassの導入/「レスポンシブ」対応による「マルチデバイス」対応を行いました。'

        },
        {

          image: 'ui-crunch-u25.png',
          title: 'UI CRUNCH U25',
          comment: '（株）ディー・エヌ・エー',
          modal : 'ui-crunch-u25',
          link: 'http://ui-crunch.com/u-25/',
          env: 'Gulp/git',
          language : 'HTML/CSS/JQuery',
          modalcomment : 'UIデザイナーのイベントのランディングページの制作を行いました。'

        }

      ];

      this.workshop = [

        {

          image: 'kaigan.png',
          title: '開眼！ハイブリッド学習法',
          comment: '田町スタジオ',
          modal : 'kaigan',
          link: 'http://eventinfo.benkyo-cafe.net/event/33030',
          env: '勉強カフェ-田町スタジオ(2017/2/4)',
          language : '企画/広告/プレゼンテーション',
          modalcomment : '勉強法に関する、勉強会を開催しました。90分にわたって、対話形式で行いました。'

        },{

          image: 'beginner.png',
          title: 'Webサイトを作ってみよう',
          comment: '田町スタジオ',
          modal : 'beginner',
          link: 'http://eventinfo.benkyo-cafe.net/event/32464',
          env: '勉強カフェ-田町スタジオ(2017/1/15 & 2017/3/4)',
          language : '企画/広告/プレゼンテーション',
          modalcomment : 'Web初心者に向けたワークショップを行いました。いままで計２回開催しています。のち一回はアシスタントの方と共同開催しました。'

        },{

          image: '21century.png',
          title: '21世紀の勉強法を考える会',
          comment: '田町スタジオ',
          modal : '21century',
          link: 'http://eventinfo.benkyo-cafe.net/event/31302',
          env: '企画/広告/プレゼンテーション',
          language : 'PHP/MySQL',
          modalcomment : '勉強法に関する、勉強会をはじめて主催しました。企画/広告戦略の設計/集客/プレゼンを行いました。60分にわたって、対話形式で行いました。'

        },


      ];

});