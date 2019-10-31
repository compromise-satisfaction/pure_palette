enchant()

function Load(width,height){
  var core = new Core(width, height);
  core.preload("sound.wav");
  core.preload("image/Round.png");
  core.preload("image/title.png");
  core.preload("image/white.png");
  core.preload("image/Buttons.png");
  core.preload("image/Trophies.png");
  core.preload("image/Background.png");
  core.preload("image/Characters.png");
  core.preload("image/Transparent.png");
  core.preload("image/Trophies_image.png");
  for (var i = 0; i <= 54; i++){
    core.preload("image/背景/"+i+".png");
  }
  core.fps = 100;
  core.onload = function(){

    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    function Scene_loads(Number,Datas,Return,Flag){
      var Name = window.localStorage.getItem("name");
      var Gender = window.localStorage.getItem("gender");
      var Surname = window.localStorage.getItem("surname");
      if(Datas!=false){
        if(Datas.length==20){
          if(Datas[13]!=false) Datas[13] = Number-1;
          if(Datas[17]!=false) Datas[17] = Number+1;
        }
        else if(Datas[17]!=false) Datas[11] = Number-1;
      }
      else var Datas = [0,0,0,0,0,0,0,0,"？？？","…",Number-1,0,Number,0,Number+1,false,0];
      //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
      //(背景,左,frame,中,frame,右,frame,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
      var Datas_c = [0,false,0,false,0,false,0,false,false,false,false,0,0,Number,0,0,0,0];
      if(Number=="セーブ読み込み"){
        var Datas = window.localStorage.getItem("datas").split(",");
        if(Datas.length==17){
          //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          for (var i = 0; i <17 ; i++){
            if(i==8||i==9) continue;
            if(Datas[i]=="false") Datas[i] = false;
            else if(i!=15) Datas[i] = Datas[i]*1;
          }
          if(Datas[12]!=false) Number = Datas[12];
        }
        else Number = Datas[14]*1;
        console.log(Datas);
        Flag = window.localStorage.getItem("flag").split(",");
        for (var i = 0; i < Flag.length; i++){
          if(Flag[i]=="true") Flag[i] = true;
          else Flag[i] = false;
        }
      }
      if(Datas.length==17){
        Datas[3] = 0;
        Datas[5] = 0;
        Datas[7] = 0;
        if(Datas[12]!=false) Datas[12] = Number;
      }
      switch (Number) {
        case -22:
          var Text = "説明は以上です。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,0,"ゲームオーバー",0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -21:
          var Text = "芸能人はカードが命。そして、決闘者はカードが魂であることを忘れないでください。深い意味はありませんが。";
          Datas = [54,0,22,0,0,0,32,15,"",Text,Number+1,-1,0,0,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -20:
          var Text = "芸能人はカードが命。";
          Datas = [54,0,22,15,0,0,0,0,"",Text,Number+1,-1,0,22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -19:
          var T_text = ["説明用","トロフィー","レッスン"];
          var Text = "こんなの(これはテストなので獲得されません。)";
          Datas = [54,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,T_text[rand(2)],rand(2)];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -18:
          var Text = "それと、無意味なトロフィー機能が存在します。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -17:
          var Text = "アニメ本編が正解ルートなので間違ったりするとすぐ終わっちゃったりします。";
          Datas = [54,0,25,0,0,0,21,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -16:
          var Text = "みおちゃんとなって選択肢を選んでいき、あいねちゃんとフレンズを組みましょう。                    (みおちゃんの名前だけは後で変更できます。)";
          Datas = [54,0,25,0,0,0,21,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -15:
          var Text = "このゲームはあいねちゃんとみおちゃんがフレンズ     (要はユニット)を組むまでのお話です。";
          Datas = [54,0,25,15,0,0,21,15,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -14:
          var Text = "名古屋らしくエビフライが好物で、頭と苗字にも海老が付いています。わかりやすいですね。          (なんかそういうデュエリストいたような…)";
          Datas = [54,0,0,0,24,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -13:
          var Text = "あと、海老原なこちゃん。「名」古屋でアイカツしている女の「子」です。";
          Datas = [54,0,0,0,24,15,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -12:
          var Text = "ポンコツでもワイはフレンズではココちゃんが一番好きやで…扱いがそれなりに悪いの悲しいんじゃァ…";
          Datas = [51,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -11:
          var Text = "ちなみにこの回でかなりのポンコツだった事が露呈した。";
          Datas = [51,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -10:
          var Text = "ヒェッ…";
          Datas = [51,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -9:
          var Text = "ホントに一人しかいないのか…？";
          Datas = [54,0,0,0,31,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -8:
          var Text = "要はアイカツフレンズ!世界のSiriといったところでしょうか。AIのくせに一人しかいないらしく、忙しい時は 呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。";
          Datas = [54,0,0,0,31,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -7:
          var Text = "ついでに、アイカツ！ナビのココちゃん。　アイカツ！モバイルに「ハロー、ココちゃん！」　と呼びかけると出てきてくれるAIです。";
          Datas = [54,0,0,0,31,15,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -6:
          var Text = "どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。(偏見です)";
          Datas = [54,0,0,0,21,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -5:
          var Text = "ちなみにこの写真は二人がフレンズを組んで 一度解散し 再結成した後のみおちゃんの電話の呼び出し画面の画像です。";
          Datas = [54,0,0,0,21,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -4:
          var Text = "かわいいですね。(かわいいです)";
          Datas = [54,0,0,0,21,0,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -3:
          var Text = "この娘が友希あいねちゃん。ピュアパレットのピュアな方です。";
          Datas = [54,0,0,0,21,15,0,0,"",Text,Number+1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -2:
          var Text = "この娘は湊みお。ピュアパレットのピュアじゃない方です。";
          Datas = [54,0,0,0,25,15,0,0,"",Text,Number+1,0,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -1:
          var Text = "とりあえずは登場人物の紹介をしましょう。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,Number+1,0,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 1:
          var Flag = [false,false];
          var T_Name = "友希 あいね";
          var Text = "これまでの『アイカツフレンズ！』。";
          window.localStorage.setItem("syoken",false);
          Data = true;
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 2:
          var T_Name = "あいね";
          var Text = "私　友希あいね。";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 3:
          var T_Name = "あいね";
          var Text = "スターハーモニー学園に通う中学２年生。";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 4:
          var T_Name = "あいね";
          var Text = "学園のトップアイドル　" + Surname +""+ Name + "ちゃんと出会ってアイドル科に転入したんだ。";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 5:
          var T_Name = "あいね";
          var Text = "ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。";
          Datas = [1,0,33,15,0,0,34,15,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 6:
          var T_Name = "あいね";
          var Text = "凸凹だけどすっごく仲よしな２人はついにフレンズになった。";
          Datas = [1,0,33,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 7:
          var T_Name = "あいね";
          var Text = "アイドルは　カードも友達　ファンも友達。         目指せ　友達100万人！";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 8:
          var T_Name = "日向エマ";
          var Text = "プリティー！";
          Datas = [52,0,0,0,0,0,34,15,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 9:
          var T_Name = "蝶乃舞花";
          var Text = "セクシー！";
          Datas = [52,0,33,15,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 10:
          var T_Name = "二人";
          var Text = "ハニーキャット！";
          Datas = [2,0,0,0,0,0,0,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 11:
          var T_Name = "あいね";
          var Text = "うわ～！かっこいい！！";
          Datas = [52,0,22,15,0,0,34,15,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 12:
          var T_Name = Surname+Name;
          var Text = "ハニーキャット…２人にぴったりなフレンズ名ね。";
          Datas = [52,0,22,0,0,0,26,15,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 13:
          var T_Name = "あいね";
          var Text = "たしかに。舞花ちゃんもエマちゃんも猫っぽいイメージあるし。";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 14:
          var T_Name = "エマ";
          var Text = "でしょでしょ。フレンズ組もうってなったら２人で盛り上がっちゃって。コンセプトとか一から作り上げてくのってワクワクするよね。";
          Datas = [52,0,22,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 15:
          var T_Name = "舞花";
          var Text = "あのキメポーズはちょっと恥ずいんですけど…";
          Datas = [52,0,33,15,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 16:
          var T_Name = "エマ";
          var Text = "え～っ！？舞花だってノリノリで考えてたじゃん！";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 17:
          var T_Name = "舞花";
          var Text = "あのときは…。エマとフレンズを組めたからテンション上がっちゃって…。";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 18:
          var T_Name = "エマ";
          var Text = "うんうん。かわいいやつめ！";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 19:
          var T_Name = "あいね";
          var Text = "二人ともすっごく楽しそう。フレンズっていいな〜。";
          Datas = [52,0,22,0,0,0,34,0,T_Name,Text,Number-1,1,Number,21,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 20:
          var T_Name = Name;
          var Text = "……………";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Number-1,1,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 21:
          var C1 = "……………";
          var C2 = "あいね！私達もフレンズを組みましょう！";
          var C3 = 0;
          var C4 = 0;
          Datas = [52,22,0,26,C1,C2,C3,C4,22,0,0,0,Number-1,1,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 22:
          var T_Name = Name;
          var Text = "……………";
          Datas = [52,0,0,0,0,0,27,0,T_Name,Text,0,0,Number,25,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 23:
          var T_Name = "";
          var Text = "その晩　" +Name+ "の自室";
          Datas = [3,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,25,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 24:
          var T_Name = Name;
          var Text = "フレンズを組むのは、やっぱりあいねしかいない。まずは…";
          Datas = [3,0,0,0,0,0,26,0,T_Name,Text,Number-1,22,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 25:
          var C1 = "告白の練習をしましょう。";
          var C2 = "相性を占いで確かめましょう。";
          var C3 = "両方やりましょう。";
          var C4 = 0;
          Datas = [3,0,0,26,C1,C2,C3,C4,0,0,26,0,Number-1,22,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 26:
          var T_Name = Name;
          var Text = "あいね、私とフレンズになりましょう。";
          Datas = [4,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,31,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 27:
          var T_Name = Name;
          var Text = "フゥ…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,0,Number,31,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 28:
          var T_Name = Name;
          var Text = "古今東西あらゆる占いで私とあいねの相性はバッチリだってわかったし…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,26,Number,31,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 29:
          var T_Name = Name;
          var Text = "それに何より私の直感があいねとフレンズを組めばすごいことが起きるってビビっと訴えかけてる。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,26,Number,31,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 30:
          var T_Name = Name;
          var Text = "あとは…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,26,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 31:
          var C1 = "ドラマチックな展開のフレンズ結成ね。";
          var C2 = "今すぐあいねに電話をかけましょう。";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,32,0,0,0,Number-1,26,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 32:
          var T_Name = Name;
          var Text = "あとはドラマチックな展開あってのフレンズ結成ね。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,35,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 33:
          var T_Name = Name;
          var Text = "そう…ラブミーティアの二人みたいに。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,0,Number,35,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 34:
          var T_Name = "";
          var Text = "ラブミーティアの結成について復習しておく？";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,32,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 35:
          var C1 = "はい";
          var C2 = "いいえ";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,36,51,0,0,Number-1,32,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 36:
          Flag[0] = true;
          var T_Name = Name;
          var Text = "ラブミーティアのドラマチック極まりない結成エピソードは　もはや伝説。";
          Datas = [6,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 37:
          var T_Name = Name;
          var Text = "いえ、アイカツ界における神話とすらなっている。";
          Datas = [6,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 38:
          var T_Name = Name;
          var Text = "スターハーモニー学園に入ってトップアイドルに駆け上がったカレンさんとミライさん。";
          Datas = [27,15,28,15,0,0,29,15,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 39:
          var T_Name = Name;
          var Text = "二人は出会ってすぐに意気投合したのだけど　フレンズ結成にはあと一歩踏み込めないでいた。";
          Datas = [27,0,28,0,0,0,29,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 40:
          var T_Name = Name;
          var Text = "そんなとき　二人を揺るがす大事件が！(迫真)";
          Datas = [7,0,0,0,0,0,0,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 41:
          var T_Name = Name;
          var Text = "カレンさんは世界的プロデューサーからアイドルとしてプロデュースしたいというオファーを受けてアメリカに旅立つことになったのだ。";
          Datas = [53,15,0,0,0,0,28,15,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 42:
          var T_Name = "明日香ミライ";
          var Text = "カレン！";
          Datas = [53,0,29,15,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 43:
          var T_Name = "ミライ";
          var Text = "ハァ…ハァ…ハァ…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 44:
          var T_Name = "神城カレン";
          var Text = "ミライさん…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 45:
          var T_Name = "ミライ";
          var Text = "アメリカになんて行かせない。カレンをいちばん輝かせることができるのは…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 46:
          var T_Name = "ミライ";
          var Text = "私なんだから！";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 47:
          var T_Name = "カレン";
          var Text = "…！";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 48:
          var T_Name = "カレン";
          var Text = "はい 知ってました。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 49:
          var T_Name = Name;
          var Text = "こうして二人はラブミーティアを結成したのであった…。";
          Datas = [8,0,0,0,0,0,0,0,T_Name,Text,Number-1,36,Number,54,Number+1,"カレン強奪事件",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 50:
          var T_Name = Name;
          var Text = "う～っ…ハァ！何度読んでもやっぱりいい！！ずっと憧れていた…。私もフレンズを組むならこんなふうにドラマチックにって。";
          Datas = [9,0,0,0,0,0,0,0,T_Name,Text,Number-1,36,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 51:
          var T_Name = Name;
          var Text = "ドラマチックな告白か…。";
          var Before = 0;
          var Before2 = 0;
          if(Flag[0]){
            Before = Number-1;
            Before2 = 36;
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Before,Before2,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 52:
          var T_Name = Name;
          var Text = "う〜ん…　考えてみると難しい。";
          var Before2 = 0;
          if(Flag[0]){
            Before2 = 36;
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,Before2,Number,54,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 53:
          var T_Name = Name;
          var Text = "自分がやるとなると想像がつかないというか。";
          var Before2 = 51;
          if(Flag[0]){
            Before2 = 36;
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Number-1,Before2,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 54:
          var C1 = "ココちゃんに相談してみましょう。";
          var C2 = "妥協して一刻も早くあいねとフレンズになるべきよ。";
          var C3 = 0;
          var C4 = 0;
          var Before2 = 51;
          if(Flag[0]){
            Before2 = 36;
          }
          Datas = [5,0,0,26,C1,C2,C3,C4,55,0,0,0,Number-1,Before2,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 55:
          var T_Name = Name;
          var Text = "ハロー　ココちゃん。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,57,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 56:
          var T_Name = "ココ";
          var Text = "ココだよ。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 57:
          var C1 = "フレンズの誘い方を教えて。";
          var C2 = "ドラマチックな告白について教えて。";
          var C3 = "あいねのアイカツモバイルを盗聴して。";
          var C4 = 0;
          Datas = [5,1,0,26,C1,C2,C3,C4,0,58,59,0,Number-1,55,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 58:
          var T_Name = Name;
          var Text = "ドラマチックな告白について教えて。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,0,0,Number,81,60,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 59:
          var T_Name = Name;
          var Text = "あいねのアイカツモバイルを盗聴して。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,0,0,Number,76,60.1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 60:
          var T_Name = "ココ";
          var Text = "ココろえ…";
          Datas = [5,0,2,0,0,0,26,0,T_Name,Text,58,0,Number,81,78,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 60.1:
          var T_Name = "ココ";
          var Text = "ココろえ…";
          Datas = [5,0,2,0,0,0,26,0,T_Name,Text,59,0,Number,76,61,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 61:
          var T_Name = "ココ";
          var Text = "え～っ！？アイカツモバイルを盗聴！？あいねちゃんの！？どうして！？";
          Datas = [5,0,3,0,0,0,26,0,T_Name,Text,60.1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 62:
          var T_Name = Name;
          var Text = "あいねとフレンズになるためのドラマチックな告白を成功させるのに必要なの。";
          Datas = [5,0,3,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 63:
          var T_Name = "ココ";
          var Text = "う〜ん、それでどうして盗聴が必要になるのかなぁ？";
          Datas = [5,0,4,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 64:
          var T_Name = Name;
          var Text = "あいねの趣味、生活を完璧に理解してあいねが喜ぶ完璧なエスコートをするためよ。";
          Datas = [5,0,4,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 65:
          var T_Name = "ココ";
          var Text = "えぇ…";
          Datas = [5,0,5,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 66:
          var T_Name = "ココ";
          var Text = "悪いけど、それはココが協力できることじゃないよ。";
          Datas = [5,0,5,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 67:
          var T_Name = "ココ";
          var Text = "ごめんなさい！";
          Datas = [5,0,6,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 68:
          var T_Name = Name;
          var Text = "う〜ん、それじゃあ盗聴機を仕込むしかないわね…何かいい方法は…";
          Datas = [5,0,6,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 69:
          var T_Name = "ココ";
          var Text = "…お友達どうしでアクセサリーを持つのが流行ってるみたいだよ。２つがそろうと１つになるデザインが人気みたいだね。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 70:
          var T_Name = Name;
          var Text = "なるほど、それに仕込めば…早速製作に取り掛かりましょう。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 71:
          var T_Name = "ココ";
          var Text = "…関係ないけど、ペットが迷子になった時のための首輪につけられる小さなGPS発信機っていうのもあるみたいだね。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 72:
          var T_Name = "ココ";
          var Text = "それがあれば、ココにも場所が表示できるよ。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 73:
          var T_Name = "ココ";
          var Text = "こんな風に。";
          Datas = [44,0,0,0,0,0,0,0,T_Name,Text,Number-1,59,Number,76,Number+1,"犯行の手口",2];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 74:
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Number-1,59,Number,76,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 75:
          var T_Name = "";
          var Text = "後日、アクセサリーを渡すことに成功した"+Name+"ちゃんは、それからしばらくして幸せなフレンズ生活をおくったのであった…。";
          Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Number-1,59,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 76:
          var T_Name = "ストーカーエンド";
          var Text = "疑惑はあるけど実際はこんな事してないよ！………たぶん。";
          Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Number-1,59,Number,0,"ゲームオーバー",0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 78:
          var T_Name = "ココ";
          var Text = "え～っ！？ドラマチックな告白？";
          //core.replaceScene(MainScene(5,3,7,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,60,Number,Number+1));
          break;
        case 79:
          var T_Name = "ココ";
          var Text = "そ…それって恋愛について知りたいってことだよね？";
          //core.replaceScene(MainScene(5,3,8,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 80:
          var T_Name = "ココ";
          var Text = "さすが"+Name+"ちゃん大人だ！";
          //core.replaceScene(MainScene(5,3,9,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 81:
          var C1 = "はい";
          var C2 = "いいえ";
          core.replaceScene(ChoiceScene(5,3,9,true,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",82,0,0,Number));
          break;
        case 82:
          var T_Name = Name;
          var Text = "違う違う。フレンズになってくださいってドラマチックに告白するにはってこと。";
          //core.replaceScene(MainScene(5,3,9,false,true,1,1,false,true,0,0,false,false,Name,var Text,false,true,Number-1,Number,Number+1));
          break;
        case 83:
          var T_Name = "ココ";
          var Text = "あっ…";
          //core.replaceScene(MainScene(5,3,10,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 84:
          var T_Name = "ココ";
          var Text = "そういうことか。";
          //core.replaceScene(MainScene(5,3,11,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 85:
          var T_Name = "ココ";
          var Text = "ドラマチックな告白で検索。";
          //core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 86:
          var T_Name = "ココ";
          var Text = "あっ。";
          //core.replaceScene(MainScene(5,3,12,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 87:
          var T_Name = "ココ";
          var Text = "こんな結果が出たよ。";
          //core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 88:
          var T_Name = Name;
          var Text = "映画館で　ドラマチックに…。";
          //core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 89:
          var T_Name = "イメージ";
          var Text = "(なぜか他に客がいない映画館)";
          //core.replaceScene(MainScene(10,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1,undefined,undefined,true));
          break;
        case 90:
          var T_Name = "イメージ";
          var Text = "(多分ペンギンが二時間ほどかっこつけるだけの映画)";
          //core.replaceScene(MainScene(11,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 91:
          var T_Name = "イメージ";
          var Text = "(突然途切れる映像)";
          //core.replaceScene(MainScene(12,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 92:
          var T_Name = "映像　"+Name;
          var Text = "あいね　私とフレンズになりましょう。";
          //core.replaceScene(MainScene(13,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 93:
          var T_Name = "イメージ　あいね";
          var Text = "わぁ…";
          //core.replaceScene(MainScene(14,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 94:
          var T_Name = "イメージ　あいね";
          var Text = "うん！！";
          //core.replaceScene(MainScene(15,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 95:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　ないわね。";
          core.replaceScene(ChoiceScene(15,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",96,0,0,Number));
          break;
        case 96:
          var T_Name = Name;
          var Text = "いや…　ないわね。";
          //core.replaceScene(MainScene(5,3,1,false,true,1,3,false,true,0,0,false,false,Name,var Text,false,true,Number-1,Number,Number+1));
          break;
        case 97:
          var T_Name = "ココ";
          var Text = "そっか。";
          //core.replaceScene(MainScene(5,3,13,false,true,1,3,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 98:
          var T_Name = "ココ";
          var Text = "だったら…。";
          //core.replaceScene(MainScene(5,3,14,false,true,1,3,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 99:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          //core.replaceScene(MainScene(5,3,15,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 100:
          var T_Name = "ココ";
          var Text = "(ピコン)";
          //core.replaceScene(MainScene(5,3,12,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 101:
          var T_Name = Name;
          var Text = "ゲーム感覚でドラマチックに…。";
          //core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 102:
          var T_Name = "イメージ　あいね";
          var Text = "失礼しま〜す。";
          //core.replaceScene(MainScene(16,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1,undefined,undefined,true));
          break;
        case 103:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          //core.replaceScene(MainScene(17,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 104:
          var T_Name = "";
          var Text = "(中庭)";
          //core.replaceScene(MainScene(18,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 105:
          var T_Name = "";
          var Text = "(レッスンルーム)";
          //core.replaceScene(MainScene(19,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 106:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          //core.replaceScene(MainScene(20,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 107:
          var T_Name = "イメージ　あいね";
          var Text = "ん…。";
          //core.replaceScene(MainScene(21,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 108:
          var T_Name = "イメージ　"+Name;
          var Text = "あいね　私と　フレンズになりましょう。";
          //core.replaceScene(MainScene(22,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 109:
          var T_Name = "イメージ　あいね";
          var Text = "わ〜っ…　うん！！";
          //core.replaceScene(MainScene(23,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 110:
          var C1 = "うん！　これよ！！";
          var C2 = "ドラマチックの意味をはき違えているような…";
          core.replaceScene(ChoiceScene(23,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",111,0,0,Number));
          break;
        case 111:
          var T_Name = Name;
          var Text = "いや…　これって　ドラマチックの意味をはき違えているような…";
          //core.replaceScene(MainScene(5,0,0,false,false,1,3,false,true,0,0,false,false,Name,var Text,false,true,Number-1,Number,Number+1));
          break;
        case 112:
          var T_Name = "ココ";
          var Text = "う〜っ…　ココにも意地があるもん。";
          //core.replaceScene(MainScene(5,3,16,true,true,1,3,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 113:
          var T_Name = "ココ";
          var Text = Name+"ちゃんが満足する答えを　必ず見つけてみせるんだから！";
          //core.replaceScene(MainScene(5,3,16,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 114:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          //core.replaceScene(MainScene(5,3,17,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 115:
          var T_Name = "ココ";
          var Text = "°△°";
          //core.replaceScene(MainScene(5,3,18,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 116:
          var T_Name = "ココ";
          var Text = "出た出た　出ました〜！";
          //core.replaceScene(MainScene(5,3,19,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 117:
          var T_Name = "ココ";
          var Text = "最高にドラマチックな告白ができるスポットを見つけたよ！";
          //core.replaceScene(MainScene(5,3,20,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 118:
          var T_Name = "ココ";
          var Text = "この観覧車でゴンドラが一番高くなったところで告白すると";
          //core.replaceScene(MainScene(24,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 119:
          var T_Name = "ココ";
          var Text = "二人はず〜っと　幸せになれるんだって。";
          //core.replaceScene(MainScene(25,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 120:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　これって男女の恋愛じゃ？";
          core.replaceScene(ChoiceScene(25,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,74,"まだ",0,0,Number));
          break;
        case 121:
          var T_Name = "後日";
          var Text = "学校の中庭";
          //core.replaceScene(MainScene(27,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,74,Number,Number+1));
          break;
        case 122:
          var T_Name = "あいね";
          var Text = "うわ〜っ　うれしい！"+Name+"ちゃんと　遊びにいけるなんて楽しみだな。";
          //core.replaceScene(MainScene(27,2,1,true,true,1,1,true,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 123:
          var T_Name = Name;
          var Text = "今度の土曜　休みが取れたから　久しぶりに　あいねと…。";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 124:
          var T_Name = "あいね";
          var Text = "今度の土曜…。";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 125:
          var T_Name = Name;
          var Text = "もしかして　何か用事があった？";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 126:
          var T_Name = "あいね";
          var Text = "うん…　ブランド選びのときに　友達になった　なこちゃんがこっちに来るから　会おうって約束したの。";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 127:
          var T_Name = Name;
          var Text = "なこちゃんって　名古屋で　アイカツしてる子ね？";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 128:
          var T_Name = "あいね";
          var Text = "うん！　友達になってから　ずっと　やり取りしてたんだ。";
          //core.replaceScene(MainScene(28,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 129:
          var T_Name = Name;
          var Text = "あいねと会って相談がしたい…。";
          //core.replaceScene(MainScene(28,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 130:
          var T_Name = "あいね";
          var Text = "うん　何だろうね？";
          //core.replaceScene(MainScene(28,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 131:
          var T_Name = Name;
          var Text = "あっ…。";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 132:
          var T_Name = Name;
          var Text = "(相談って　まさか…)";
          //core.replaceScene(MainScene(29,2,2,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 133:
          var T_Name = "あいね";
          var Text = "そうだ。　なこちゃんと私たち三人で遊びにいこうよ。";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 134:
          var C1 = "そうね。";
          var C2 = "あいねを誑かすなんて許せない。";
          var C3 = "相談があるなら二人の方がいいでしょう。";
          core.replaceScene(ChoiceScene(27,2,1,true,1,1,true,0,0,false,C1,true,C2,true,C3,true,"無し",false,"まだ","まだ",135,0,Number));
          break;
        case 135:
          var T_Name = Name;
          var Text = "ううん。 相談があるなら　二人の方がいいでしょう？";
          //core.replaceScene(MainScene(27,2,1,false,true,1,1,false,true,0,0,false,false,Name,var Text,false,true,Number-1,Number,Number+1));
          break;
        case 136:
          var T_Name = "";
          var Text = "土曜日";
          //core.replaceScene(MainScene(5,0,0,false,false,1,1,true,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 137:
          var C1 = "(今日は計画を練りましょう。)";
          var C2 = "(気になるわ…。こっそり行動を監視しましょう。)";
          core.replaceScene(ChoiceScene(5,0,0,false,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",138,0,0,Number));
          break;
        case 138:
          var T_Name = "";
          var Text = "駅前";
          //core.replaceScene(MainScene(30,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,false,true,Number-1,Number,Number+1));
          break;
        case 139:
          var T_Name = "海老原なこ";
          var Text = "わぁ。";
          //core.replaceScene(MainScene(30,0,0,false,false,0,0,false,false,4,0,true,true,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 140:
          var T_Name = "あいね";
          var Text = "お〜い！なこちゃん！";
          //core.replaceScene(MainScene(30,2,1,true,true,4,0,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 141:
          var T_Name = "なこ";
          var Text = "あいねちゃん！";
          //core.replaceScene(MainScene(30,2,1,false,true,4,0,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 142:
          var T_Name = "なこ";
          var Text = "久しぶり！ウフフ。";
          //core.replaceScene(MainScene(30,2,1,false,true,4,0,false,true,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 143:
          var T_Name = Name;
          var Text = "(わざわざ　こっちに来てまで　相談したい事ってあいねとフレンズを組みたいって事なんじゃ…)";
          //core.replaceScene(MainScene(31,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case 144:
          var T_Name = Name;
          var Text = "あいね…。";
          //core.replaceScene(MainScene(31,0,0,false,false,0,0,false,false,0,0,false,false,Name,var Text,true,true,Number-1,Number,Number+1));
          break;
        case "タイトルに戻る":
          core.replaceScene(TitleScene());
          break;
        case "ゲームオーバー":
          //(背景,左,中,右,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
          Datas = [54,0,0,0,"タイトルに戻る",0,0,0,"タイトルに戻る","セーブ読み込み",0,0,0,0,Number];
          if(window.localStorage.getItem("Save")=="マニュアル") Datas[5] = "セーブ読み込み";
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        default:
          //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          Datas = [54,0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,0,"ゲームオーバー",false,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
      }
    }
    function Inspect_loads(Number,Flag){
      var Name = window.localStorage.getItem("name");
      var Datas = [];
      for (var i = 0; i < Result3.length; i++){
        if(Number == Result3[i].シーンナンバー){
          Datas[0] = Result3[i].背景;
          Datas[1] = Result3[i].幅1;
          Datas[2] = Result3[i].高1;
          Datas[3] = Result3[i].x1;
          Datas[4] = Result3[i].y1;
          Datas[5] = Result3[i].名前1;
          Datas[6] = Result3[i].テキスト1;
          Datas[7] = Result3[i].幅2;
          Datas[8] = Result3[i].高2;
          Datas[9] = Result3[i].x2;
          Datas[10] = Result3[i].y2;
          Datas[11] = Result3[i].名前2;
          Datas[12] = Result3[i].テキスト2;
          Datas[13] = Result3[i].幅3;
          Datas[14] = Result3[i].高3;
          Datas[15] = Result3[i].x3;
          Datas[16] = Result3[i].y3;
          Datas[17] = Result3[i].名前3;
          Datas[18] = Result3[i].テキスト3;
          Datas[19] = Result3[i].幅4;
          Datas[20] = Result3[i].高4;
          Datas[21] = Result3[i].x4;
          Datas[22] = Result3[i].y4;
          Datas[23] = Result3[i].名前4;
          Datas[24] = Result3[i].テキスト4;
          core.pushScene(InspectScene(Datas,Flag));
          return;
        }
      }
    }
    var TitleScene = function(){

      if(window.localStorage.getItem("syoken")!="false"){
        var Data = false;
        var Flag = [false,false];
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("gender","女");
        window.localStorage.setItem("name","みお");
        window.localStorage.setItem("surname","湊");
      }
      else var Data = true;

      var scene = new Scene();                                // 新しいシーンを作る

      var Title = new Sprite(1600,900);
      Title.image = core.assets["image/title.png"];
      Title.x = 0;
      Title.y = 0;
      scene.addChild(Title);

      var Beginning = new Label();
      Beginning.font  = "60px monospace";
      Beginning.color = 'black';
      Beginning.x = 0;
      Beginning.y = 960;
      Beginning.width = 1600;
      Beginning.height = 60;
      Beginning.text = "▶ 最初から";
      scene.addChild(Beginning);

      var Continuation = new Label();
      Continuation.font  = "60px monospace";
      Continuation.color = 'black';
      Continuation.x = 0;
      Continuation.y = 1040;
      Continuation.width = 1600;
      Continuation.height = 60;
      Continuation.text = "▶ 説明";
      if(Data) Continuation.text = "▶ 続きから";
      scene.addChild(Continuation);

      var Explanation = new Label();
      Explanation.font  = "60px monospace";
      Explanation.color = 'black';
      Explanation.x = 0;
      Explanation.y = 1120;
      Explanation.width = 1600;
      Explanation.height = 60;
      Explanation.text = "▶ 説明";
      if(Data) scene.addChild(Explanation);

      var Clear = new Label();
      Clear.font  = "60px monospace";
      Clear.color = 'black';
      Clear.x = 1000;
      Clear.y = 960;
      Clear.width = 1600;
      Clear.height = 60;
      Clear.text = "▶ データ初期化";
      if(Data) scene.addChild(Clear);

      Beginning.addEventListener('touchstart',function(e){
        Scene_loads(1,false);
      });

      Continuation.addEventListener('touchstart',function(e){
        if(Continuation.text == "▶ 説明") Scene_loads(-1,false);
        else Scene_loads("セーブ読み込み",false);
      });

      Clear.addEventListener('touchstart',function(e){
        core.pushScene(ClearScene());
        return;
      });

      Explanation.addEventListener('touchstart',function(e){
        Scene_loads(-1,false);
      });

      return scene;
    };
    var MainScene = function(Datas,Return,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&&Datas[12]!=false&&Datas[12]!=1){
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("datas",Datas);
      }

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      if(Datas[1]!=0&&Return!=true){
        Background.opacity = 0;
        Background.tl.fadeIn(Datas[1]);
      }
      scene.addChild(Background);//背景

      if(Datas[2]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/Characters.png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[2];
        if(Datas[3]!=0&&Return!=true){
          Character1.opacity = 0;
          Character1.tl.fadeIn(Datas[3]);
        }
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[6]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/Characters.png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[6];
        if(Datas[7]!=0&&Return!=true){
          Character3.opacity = 0;
          Character3.tl.fadeIn(Datas[7]);
        }
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[4]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/Characters.png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[4];
        if(Datas[5]!=0&&Return!=true){
          Character2.opacity = 0;
          Character2.tl.fadeIn(Datas[5]);
        }
        scene.addChild(Character2);
      }//キャラ真ん中

      if(Datas[8]!=""){
        var C_name = new Label();
        C_name.font  = "60px monospace";
        C_name.color = 'black';
        C_name.x = 0;
        C_name.y = 960;
        C_name.width = 1600;
        C_name.height = 60;
        C_name.text = "【" + Datas[8] + "】";
        scene.addChild(C_name);//キャラ名
      }

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = Datas[9];
      scene.addChild(Text);//テキスト

      if(Datas[10]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[10],Datas,true,Flag);
        });
      } //戻る1

      if(Datas[11]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[11],Datas,true,Flag);
        });
      }//戻る2

      if(Datas[12]!=false){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas,Flag));
          scene.addChild(Enter2);
        });
      }//設定

      if(Datas[13]!=false){
        var Enter1 = new Sprite(320,60);
        Enter1.image = core.assets["image/Buttons.png"];
        Enter1.x = 960;
        Enter1.y = height-65;
        Enter1.frame = 3;
        scene.addChild(Enter1);
        Enter1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],Datas,false,Flag);
        });
      }//スキップ

      var Enter2 = new Sprite(320,60);
      Enter2.image = core.assets["image/Buttons.png"];
      Enter2.x = 1280;
      Enter2.y = height-65;
      Enter2.frame = 4;
      scene.addChild(Enter2);
      Enter2.addEventListener('touchstart',function(e){
        Scene_loads(Datas[14],Datas,false,Flag);
      });//進む

      if(Datas[15]!=false){
        if(window.localStorage.getItem(Datas[15])==undefined){
          if(Datas[12]!=false) window.localStorage.setItem(Datas[15],"獲得！");
          var Time = 0;
          var Trophies = new Sprite(443,113);
          Trophies.image = core.assets["image/Trophies.png"];
          Trophies.x = width-463;
          Trophies.y = 20;
          Trophies.opacity = 0;
          Trophies.tl.fadeIn(5);
          scene.addChild(Trophies);
          var Trophies_image = new Sprite(88,85);
          Trophies_image.image = core.assets["image/Trophies_image.png"];
          Trophies_image.x = width-453;
          Trophies_image.y = 35;
          Trophies_image.frame = Datas[16];
          Trophies_image.opacity = 0;
          Trophies_image.tl.fadeIn(5);
          scene.addChild(Trophies_image);
          var Trophies_text = new Label();
          Trophies_text.font  = "30px monospace";
          Trophies_text.color = 'white';
          Trophies_text.x = width-453+145;
          Trophies_text.y = 90;
          Trophies_text.width = 1600;
          Trophies_text.height = 30;
          Trophies_text.opacity = 0;
          Trophies_text.tl.fadeIn(5);
          Trophies_text.text = Datas[15];
          scene.addChild(Trophies_text);
          core.assets["sound.wav"].play();
          Trophies.addEventListener("enterframe",function(){
            Time++;
            if(Time==50){
              Trophies.tl.fadeOut(5);
              Trophies_image.tl.fadeOut(5);
              Trophies_text.tl.fadeOut(5);
            }
          })
        }
      }//トロフィー*/
      return scene;
    };
    var ChoiceScene = function(Datas,Datas_M,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&Datas[14]!="ゲームオーバー"){
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("datas",Datas);
      }
      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      if(Datas[1]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/Characters.png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[1];
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[3]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/Characters.png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[3];
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[2]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/Characters.png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[2];
        scene.addChild(Character2);
      }//キャラ真ん中

      if(Datas[4]!=false){
        var C1 = new Label();
        C1.font  = "60px monospace";
        C1.color = 'black';
        C1.x = 0;
        C1.y = 960;
        C1.width = 1600;
        C1.height = 60;
        C1.text = "▶ " + Datas[4];
        scene.addChild(C1);
        C1.addEventListener('touchstart',function(e){
          if(C1.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[8],false,false,Flag);
        });
      }

      if(Datas[5]!=false){
        var C2 = new Label();
        C2.font  = "60px monospace";
        C2.color = 'black';
        C2.x = 0;
        C2.y = 1060;
        C2.width = 1600;
        C2.height = 60;
        C2.text = "▶ " + Datas[5];
        scene.addChild(C2);
        C2.addEventListener('touchstart',function(e){
          if(C2.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[9],false,false,Flag);
        });
      }

      if(Datas[6]!=false){
        var C3 = new Label();
        C3.font  = "60px monospace";
        C3.color = 'black';
        C3.x = 0;
        C3.y = 1160;
        C3.width = 1600;
        C3.height = 60;
        C3.text = "▶ " + Datas[6];
        scene.addChild(C3);
        C3.addEventListener('touchstart',function(e){
          if(C3.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[10],false,false,Flag);
        });
      }

      if(Datas[7]!=false){
        var C4 = new Label();
        C4.font  = "60px monospace";
        C4.color = 'black';
        C4.x = 0;
        C4.y = 1260;
        C4.width = 1600;
        C4.height = 60;
        C4.text = "▶ " + Datas[7];
        scene.addChild(C4);
        C4.addEventListener('touchstart',function(e){
          if(C4.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[11],false,false,Flag);
        });
      }

      if(Datas[12]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[12],Datas_M,true,Flag);
        });
      } //戻る1

      if(Datas[13]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],Datas_M,true,Flag);
        });
      }//戻る2

      if(Datas[14]!="ゲームオーバー"){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas,Flag));
        });
      }

      return scene;
    };
    var SettingScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("name")==""){
        window.localStorage.setItem("name","十代")
        window.localStorage.setItem("surname","遊城")
      }

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 200;
      Text.y = 200;
      Text.width = 1600;
      Text.height = 60;
      Text.text = "▶ 設定を閉じる";
      scene.addChild(Text);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 200;
      Text2.y = 300;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "▶ タイトルに戻る";
      scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 400;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "▶ セーブ方法の切り替え";
      scene.addChild(Text3);

      var Text4 = new Label();
      Text4.font  = "60px monospace";
      Text4.color = 'black';
      Text4.x = 200;
      Text4.y = 500;
      Text4.width = 1600;
      Text4.height = 60;
      if(window.localStorage.getItem("Save")=="マニュアル") Text4.text = "▶ セーブする";
      else Text4.text = "現在はオートセーブです。";
      scene.addChild(Text4);

      var Text5 = new Label();
      Text5.font  = "60px monospace";
      Text5.color = 'black';
      Text5.x = 200;
      Text5.y = 600;
      Text5.width = 1600;
      Text5.height = 60;
      Text5.text = "セーブしました。";

      var Text6 = new Label();
      Text6.font  = "60px monospace";
      Text6.color = 'black';
      Text6.x = 200;
      Text6.y = 900;
      Text6.width = 1600;
      Text6.height = 60;
      Text6.text = "性別";
      scene.addChild(Text6);

      var Text7 = new Label();
      Text7.font  = "60px monospace";
      Text7.color = 'black';
      Text7.x = 200;
      Text7.y = 1000;
      Text7.width = 1600;
      Text7.height = 60;
      Text7.text = "姓";
      scene.addChild(Text7);

      var S_Input = new Entity();
      S_Input.moveTo(270,1000);
      S_Input.width = 190;
      S_Input.height = 60;
      S_Input._element = document.createElement('input');
      S_Input._element.type = "text";
      S_Input._element.name = "myText";
      S_Input._element.value = window.localStorage.getItem("surname");
      S_Input._element.placeholder = "姓を入力";
      scene.addChild(S_Input);

      var Text8 = new Label();
      Text8.font  = "60px monospace";
      Text8.color = 'black';
      Text8.x = 200;
      Text8.y = 1100;
      Text8.width = 1600;
      Text8.height = 60;
      Text8.text = "名";
      scene.addChild(Text8);

      var S_Input2 = new Entity();
      S_Input2.moveTo(270,1100);
      S_Input2.width = 190;
      S_Input2.height = 60;
      S_Input2._element = document.createElement('input');
      S_Input2._element.type = "text";
      S_Input2._element.name = "myText";
      S_Input2._element.value = window.localStorage.getItem("name");
      S_Input2._element.placeholder = "名を入力";
      scene.addChild(S_Input2);

      var Text9 = new Label();
      Text9.font  = "60px monospace";
      Text9.color = 'black';
      Text9.x = 400;
      Text9.y = 900;
      Text9.width = 1600;
      Text9.height = 60;
      Text9.text = "男";
      scene.addChild(Text9);

      var Text10 = new Label();
      Text10.font  = "60px monospace";
      Text10.color = 'black';
      Text10.x = 500;
      Text10.y = 900;
      Text10.width = 1600;
      Text10.height = 60;
      Text10.text = "女";
      scene.addChild(Text10);

      var Text11 = new Label();
      Text11.font  = "60px monospace";
      Text11.color = 'black';
      Text11.x = 200;
      Text11.y = 1200;
      Text11.width = 1600;
      Text11.height = 60;
      Text11.text = "▶ 設定する";
      scene.addChild(Text11);

      var Text12 = new Label();
      Text12.font  = "60px monospace";
      Text12.color = 'black';
      Text12.x = 200;
      Text12.y = 1300;
      Text12.width = 1600;
      Text12.height = 60;
      Text12.text = "設定しました。";

      var Text13 = new Label();
      Text13.font  = "60px monospace";
      Text13.color = 'black';
      Text13.x = 800;
      Text13.y = 200;
      Text13.width = 1600;
      Text13.height = 60;
      Text13.text = "▶ 獲得トロフィー";
      scene.addChild(Text13);

      var Round = new Sprite(60,60);
      Round.image = core.assets["image/Round.png"];
      if(window.localStorage.getItem("gender")=="女"){
        Round.x = Text10.x;
        Round.y = Text10.y;
      }
      else{
        Round.x = Text9.x;
        Round.y = Text9.y;
      }
      scene.addChild(Round);

      Text.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      Text2.addEventListener('touchstart',function(e){
        core.popScene();
        Scene_loads("タイトルに戻る",false);
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")=="マニュアル"){
          window.localStorage.setItem("Save","オート");
          Text4.text = "現在はオートセーブです。";
          scene.removeChild(Text5);
        }
        else{
          window.localStorage.setItem("Save","マニュアル");
          Text4.text = "▶ セーブする";
        }
        return;
      });

      Text4.addEventListener('touchstart',function(e){
        if(Text4.text == "▶ セーブする"){
          console.log(Flag);
          window.localStorage.setItem("flag",Flag);
          window.localStorage.setItem("datas",Datas);
          core.assets["sound.wav"].play();
          scene.addChild(Text5);
        }
        return;
      });

      Text9.addEventListener('touchstart',function(e){
        Round.x = Text9.x;
        Round.y = Text9.y;
        return;
      });

      Text10.addEventListener('touchstart',function(e){
        Round.x = Text10.x;
        Round.y = Text10.y;
        return;
      });

      Text11.addEventListener('touchstart',function(e){
        window.localStorage.setItem("surname",S_Input._element.value);
        window.localStorage.setItem("name",S_Input2._element.value);
        if(Round.x == Text9.x){
          window.localStorage.setItem("gender","男");
          if(S_Input._element.value=="") window.localStorage.setItem("surname","遊城");
          if(S_Input2._element.value=="") window.localStorage.setItem("name","十代");
        }
        else{
          window.localStorage.setItem("gender","女");
          if(S_Input._element.value=="") window.localStorage.setItem("surname","湊");
          if(S_Input2._element.value=="") window.localStorage.setItem("name","みお");
        }
        core.assets["sound.wav"].play();
        scene.addChild(Text12);
        return;
      });

      Text13.addEventListener('touchstart',function(e){
        core.pushScene(TrophiesScene());
        return;
      });

      return scene;
    };
    var TrophiesScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 200;
      Text.y = 200;
      Text.width = 1600;
      Text.height = 60;
      Text.text = "▶ 戻る";
      scene.addChild(Text);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 200;
      Text2.y = 400;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "未取得";
      if(window.localStorage.getItem("カレン強奪事件")!=undefined) Text2.text = "カレン強奪事件";
      scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 500;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "未取得";
      if(window.localStorage.getItem("犯行の手口")!=undefined) Text3.text = "犯行の手口";
      scene.addChild(Text3);

      var Text4 = new Label();
      Text4.font  = "60px monospace";
      Text4.color = 'black';
      Text4.x = 200;
      Text4.y = 300;
      Text4.width = 1600;
      Text4.height = 60;
      Text4.text = "未取得";
      if(window.localStorage.getItem("即決！")!=undefined) Text4.text = "即決！";
      scene.addChild(Text4);

      var Text5 = new Label();
      Text5.font  = "60px monospace";
      Text5.color = 'black';
      Text5.x = 200;
      Text5.y = 600;
      Text5.width = 1600;
      Text5.height = 60;
      Text5.text = "未取得";
      if(window.localStorage.getItem("電話")!=undefined) Text5.text = "電話";
      scene.addChild(Text5);

      var Text10 = new Label();
      Text10.font  = "60px monospace";
      Text10.color = 'black';
      Text10.x = 200;
      Text10.y = 1100;
      Text10.width = 1200;
      Text10.height = 180;
      Text10.text = "";
      scene.addChild(Text10);

      Text.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      Text2.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("カレン強奪事件")!=undefined){
          Text2.text = "▶ カレン強奪事件";
          Text10.text = "ラブミーティアの結成秘話。実際には噂が一人歩きしたものである。そういう意味では神話というのは正しいのかもしれない。ちなみに、カレンさんもこの話がお気に入りである。";
        }
        else{
          Text2.text = "▶ 未取得";
          Text10.text = "復習は大事。";
        }
        Text2.color = "red";
        if(window.localStorage.getItem("犯行の手口")!=undefined){
          Text3.text = "犯行の手口";
        }
        else{
          Text3.text = "未取得";
        }
        Text3.color = "black";
        if(window.localStorage.getItem("即決！")!=undefined){
          Text4.text = "即決！";
        }
        else{
          Text4.text = "未取得";
        }
        Text4.color = "black";
        if(window.localStorage.getItem("電話")!=undefined){
          Text5.text = "電話";
        }
        else{
          Text5.text = "未取得";
        }
        Text5.color = "black";
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("カレン強奪事件")!=undefined){
          Text2.text = "カレン強奪事件";
        }
        else{
          Text2.text = "未取得";
        }
        Text2.color = "black";
        if(window.localStorage.getItem("犯行の手口")!=undefined){
          Text3.text = "▶ 犯行の手口";
          Text10.text = "あいねちゃんを監視するための手段。実際にはリフレクトムーンの目撃情報の集計である。ネットリテラシーの欠片もない。";
        }
        else{
          Text3.text = "▶ 未取得";
          Text10.text = "現実ではやっちゃあ駄目だよ！ココとのお約束！";
        }
        Text3.color = "red";
        if(window.localStorage.getItem("即決！")!=undefined){
          Text4.text = "即決！";
        }
        else{
          Text4.text = "未取得";
        }
        Text4.color = "black";
        if(window.localStorage.getItem("電話")!=undefined){
          Text5.text = "電話";
        }
        else{
          Text5.text = "未取得";
        }
        Text5.color = "black";
        return;
      });

      Text4.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("カレン強奪事件")!=undefined){
          Text2.text = "カレン強奪事件";
        }
        else{
          Text2.text = "未取得";
        }
        Text2.color = "black";
        if(window.localStorage.getItem("犯行の手口")!=undefined){
          Text3.text = "犯行の手口";
        }
        else{
          Text3.text = "未取得";
        }
        Text3.color = "black";
        if(window.localStorage.getItem("即決！")!=undefined){
          Text4.text = "▶ 即決！";
          Text10.text = "実際にこれぐらいの勢いがあれば友達もっといるんだろうなぁ。";
        }
        else{
          Text4.text = "▶ 未取得";
          Text10.text = "迷ってる暇などない！";
        }
        Text4.color = "red";
        if(window.localStorage.getItem("電話")!=undefined){
          Text5.text = "電話";
        }
        else{
          Text5.text = "未取得";
        }
        Text5.color = "black";
        return;
      });

      Text5.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("カレン強奪事件")!=undefined){
          Text2.text = "カレン強奪事件";
        }
        else Text2.text = "未取得";
        Text2.color = "black";
        if(window.localStorage.getItem("犯行の手口")!=undefined){
          Text3.text = "犯行の手口";
        }
        else Text3.text = "未取得";
        Text3.color = "black";
        if(window.localStorage.getItem("即決！")!=undefined){
          Text4.text = "即決！";
        }
        else Text4.text = "未取得";
        Text4.color = "black";
        if(window.localStorage.getItem("電話")!=undefined){
          Text5.text = "▶ 電話";
          Text10.text = "夜分遅くに電話かけるのはよくないよ。あいねちゃんだから許してくれるけど。";
        }
        else{
          Text5.text = "▶ 未取得";
          Text10.text = "大事なことだけど電話ですませちゃう。しかも夜分遅くに。";
        }
        Text5.color = "red";
        return;
      });

      return scene;
    };
    var InspectScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Background2 = new Sprite(1600,900);
      Background2.image = core.assets["image/white.png"];
      Background2.x = 0;
      Background2.y = 900;
      scene.addChild(Background2);

      if(Datas[5]!=false){
        var Background3 = new Sprite(Datas[1],Datas[2]);
        Background3.image = core.assets["image/Transparent.png"];
        Background3.x = Datas[3];
        Background3.y = Datas[4];
        scene.addChild(Background3);
        Background3.addEventListener('touchstart',function(e){
          if(Datas[5]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[6],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[5],Datas[6]));
        });
      }

      if(Datas[11]!=false){
        var Background4 = new Sprite(Datas[7],Datas[8]);
        Background4.image = core.assets["image/Transparent.png"];
        Background4.x = Datas[9];
        Background4.y = Datas[10];
        scene.addChild(Background4);
        Background4.addEventListener('touchstart',function(e){
          if(Datas[11]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[12],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[11],Datas[12]));
        });
      }

      if(Datas[17]!=false){
        var Background5 = new Sprite(Datas[13],Datas[14]);
        Background5.image = core.assets["image/Transparent.png"];
        Background5.x = Datas[15];
        Background5.y = Datas[16];
        scene.addChild(Background5);
        Background5.addEventListener('touchstart',function(e){
          if(Datas[17]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[18],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[17],Datas[18]));
        });
      }

      if(Datas[23]!=false){
        var Background6 = new Sprite(Datas[19],Datas[20]);
        Background6.image = core.assets["image/Transparent.png"];
        Background6.x = Datas[21];
        Background6.y = Datas[22];
        scene.addChild(Background6);
        Background6.addEventListener('touchstart',function(e){
          if(Datas[23]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[24],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[23],Datas[24]));
        });
      }

      var C1 = new Label();
      C1.font  = "60px monospace";
      C1.color = 'black';
      C1.x = 0;
      C1.y = 960;
      C1.width = 1600;
      C1.height = 60;
      C1.text = "▶ 戻る";
      scene.addChild(C1);
      C1.addEventListener('touchstart',function(e){
        core.popScene();
      });

      return scene;
    };
    var TextScene = function(a,b,c){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/white.png"];
      Background.x = 0;
      Background.y = 900;
      scene.addChild(Background);

      var C_name = new Label();
      C_name.font  = "60px monospace";
      C_name.color = 'black';
      C_name.x = 0;
      C_name.y = 960;
      C_name.width = 1600;
      C_name.height = 60;
      C_name.text = "【" + b + "】";
      if(C_name.text == "【】") C_name.text = "";
      scene.addChild(C_name);//キャラ名

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = c;
      scene.addChild(Text);//テキスト

      scene.on("touchstart",function(e){
        core.popScene();
      });

      return scene;
    }
    var ClearScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 200;
      Text.y = 200;
      Text.width = 1600;
      Text.height = 60;
      Text.text = "データを消去する？";
      scene.addChild(Text);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 200;
      Text2.y = 500;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "▶ はい";
      scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 900;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "▶ いいえ";
      scene.addChild(Text3);

      Text2.addEventListener('touchstart',function(e){
        core.popScene();
        Data = false;
        window.localStorage.clear();
        core.replaceScene(TitleScene());
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      return scene;
    }
    core.replaceScene(TitleScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
