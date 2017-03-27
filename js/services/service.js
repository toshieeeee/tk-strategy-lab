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
        modal_image_1 : 'kikuchi-web-lab_01.png',
        modal_image_2 : 'kikuchi-web-lab_02.png',
        link : 'http://tokyo-d-plex.com/~toshikikikuchi/',
        env: 'Adobe DreamWeaver/Adobe PhotoShop/Adobe illustlator',
        language : 'HTML5/CSS3/jQuery',
        modalcomment : '東京デザインプレックス研究所で、作成したWEBサイトです'

        },
        {

        image: 'dena-creator-blog.png',
        title: 'DeNA CREATOR BLOG',
        comment: '@DeNA',
        modal : 'dena-creator-blog',
        link: 'http://creator.dena.jp/',
        env: 'Sublime/CMS(livedoor Blog)',
        language : 'HTML5/CSS3/javaScript',
        modalcomment : 'クリエイター向けのブログサービスです。ライブドアブログのシステムを利用しています。'

        },
        {

          image: 'ui-crunch.png',
          title: 'UI CRUNCH',
          comment: '（株）ディー・エヌ・エー',
          modal : 'ui-crunch',
          link: 'http://ui-crunch.com/',
          env: 'Sublime',
          language : 'HTML5/Sass/jQuery',
          modalcomment : 'デザイナーイベントサイト'

        },
        {

          image: 'reflection.png',
          title: 'REFLECTION',
          comment: '（株）ディー・エヌ・エー',
          modal : 'reflection',
          link: 'http://reflection-info.com/',
          env: 'Sublime/AWS EC2',
          language : 'JQuery',
          modalcomment : '展示会のイベントページです。'

        },
        {

          image: 'showroom.png',
          title: 'SHOWROOM',
          comment: '（株）SHOWROOM',
          modal : 'SHOWROOM',
          link: 'http://showroom.co.jp',
          env: 'Sublime/AWS EC2',
          language : 'JQuery',
          modalcomment : '株式会社SHOWROOMのコーポレートサイトです'

        },
        {

          image: 'howwell.png',
          title: 'howwell',
          comment: '（株）ディー・エヌ・エー',
          modal : 'howwell',
          link: 'http://howwell.jp/',
          env: 'Sublime/AWS EC2',
          language : 'JQuery',
          modalcomment : 'howwellの公式サイトです'

        },
        {

          image: 'ui-crunch-u25.png',
          title: 'UI CRUNCH U25',
          comment: '（株）ディー・エヌ・エー',
          modal : 'ui-crunch-u25',
          link: 'http://ui-crunch.com/u-25/',
          env: 'Sublime/AWS EC2',
          language : 'JQuery',
          modalcomment : 'howwellの公式サイトです'

        },
        {

          image: 'nanairo.png',
          title: 'nanairo',
          comment: '非公開',
          modal : 'nanairo',
          link: 'http://hikarinosaki.com/',
          env: 'Sublime/AWS EC2',
          language : 'JQuery',
          modalcomment : '写真家のポートフォリオサイトです'

        },{

          image: 'codecamp.png',
          title: 'CodeCamp',
          comment: '（株）CodeCamp',
          modal : 'codecamp',
          link: 'http://codecamp10334.lesson5.codecamp.jp/25_twitter_system/htdocs/home.php',
          env: 'Sublime/AWS EC2',
          language : 'PHP/MySQL',
          modalcomment : 'Twitterのシステムクローンです。'

        }

      ];

      this.workshop = [

        {

          image: 'kaigan.png',
          title: '開眼！ハイブリッド学習法',
          comment: '田町スタジオ',
          modal : 'kaigan',
          link: 'http://eventinfo.benkyo-cafe.net/event/33030',
          env: 'Sublime/AWS EC2',
          language : 'PHP/MySQL',
          modalcomment : '同期と作成した、音楽サービス'

        },{

          image: 'beginner.png',
          title: 'Webサイトを作ってみよう',
          comment: '田町スタジオ',
          modal : 'beginner',
          link: 'http://eventinfo.benkyo-cafe.net/event/32464',
          env: 'Sublime/AWS EC2',
          language : 'PHP/MySQL',
          modalcomment : '同期と作成した、音楽サービス'

        },{

          image: '21century.png',
          title: '21世紀の勉強法を考える会',
          comment: '田町スタジオ',
          modal : '21century',
          link: 'http://eventinfo.benkyo-cafe.net/event/31302',
          env: 'Sublime/AWS EC2',
          language : 'PHP/MySQL',
          modalcomment : '同期と作成した、音楽サービス'

        },


      ];

});