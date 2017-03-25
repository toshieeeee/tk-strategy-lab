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

        }
      ];

});