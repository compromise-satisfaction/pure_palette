enchant()

function Load(width,height){
  var core = new Core(width, height);
  core.preload("sound/Item.wav");
  core.preload("image/Round.png");
  core.preload("image/title.png");
  core.preload("image/white.png");
  core.preload("image/Item_B.png");
  core.preload("image/Item_S.png");
  core.preload("sound/Choice.wav");
  core.preload("image/Buttons.png");
  //core.preload("sound/永遠の灯.m4a");
  //core.preload("sound/プライド.m4a");
  //core.preload("sound/偶然、必然。.m4a");
  core.preload("sound/Trophies.wav");
  core.preload("image/Trophies.png");
  core.preload("image/Background.png");
  core.preload("image/Characters.png");
  core.preload("image/Transparent.png");
  core.preload("image/Trophies_image.png");
  for (var i = 0; i <= 57; i++){
    core.preload("image/背景/"+i+".png");
  }
  core.fps = 100;
  core.onload = function(){

    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    function Scene_loads(Number,Datas,Return,Flag,Item){
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
      if(Item){
          Number = Item+Number;
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
          Datas = [54,0,0,0,24,15,0,0,"",Text,-12.1,-1,0,-22,Number-1,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -12.1:
          var Text = "そういえば県外でも使えるのはおかしいのでは…？";
          Datas = [57,0,0,0,0,0,0,0,"",Text,-12,-1,0,-22,-13,0,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -12:
          var Text = "ポンコツでもワイはフレンズではココちゃんが一番好きやで…扱いがそれなりに悪いの悲しいんじゃァ…";
          Datas = [51,0,0,0,0,0,0,0,"",Text,Number+1,-1,0,-22,-12.1,0,0];
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
          var Flag = [false];
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
          Datas = [5,0,7,0,0,0,26,0,T_Name,Text,60,58,Number,81,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 79:
          var T_Name = "ココ";
          var Text = "そ…それって恋愛について知りたいってことだよね？";
          Datas = [5,0,8,0,0,0,26,0,T_Name,Text,Number-1,58,Number,81,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 80:
          var T_Name = "ココ";
          var Text = "さすが"+Name+"ちゃん大人だ！";
          Datas = [5,0,9,0,0,0,26,0,T_Name,Text,Number-1,58,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 81:
          var C1 = "はい";
          var C2 = "いいえ";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,9,0,26,C1,C2,C3,C4,0,82,0,0,Number-1,58,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 82:
          var T_Name = Name;
          var Text = "違う違う。フレンズになってくださいってドラマチックに告白するにはってこと。";
          Datas = [5,0,9,0,0,0,26,0,T_Name,Text,0,0,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 83:
          var T_Name = "ココ";
          var Text = "あっ…";
          Datas = [5,0,10,0,0,0,26,0,T_Name,Text,Number-1,0,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 84:
          var T_Name = "ココ";
          var Text = "そういうことか。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 85:
          var T_Name = "ココ";
          var Text = "ドラマチックな告白で検索。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 86:
          var T_Name = "ココ";
          var Text = "あっ。";
          Datas = [5,0,12,0,0,0,26,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 87:
          var T_Name = "ココ";
          var Text = "こんな結果が出たよ。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 88:
          var T_Name = Name;
          var Text = "映画館で　ドラマチックに…。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 89:
          var T_Name = "イメージ";
          var Text = "(なぜか他に客がいない映画館)";
          Datas = [10,15,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 90:
          var T_Name = "イメージ";
          var Text = "(多分ペンギンが二時間ほどかっこつけるだけの映画)";
          Datas = [11,0,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 91:
          var T_Name = "イメージ";
          var Text = "(突然途切れる映像)";
          Datas = [12,0,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 92:
          var T_Name = "映像　"+Name;
          var Text = "あいね　私とフレンズになりましょう。";
          Datas = [13,0,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 93:
          var T_Name = "イメージ　あいね";
          var Text = "わぁ…";
          Datas = [14,0,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,95,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 94:
          var T_Name = "イメージ　あいね";
          var Text = "うん！！";
          Datas = [15,0,0,0,0,0,0,0,T_Name,Text,Number-1,82,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 95:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　ないわね。";
          var C3 = 0;
          var C4 = 0;
          Datas = [15,0,0,0,C1,C2,C3,C4,0,96,0,0,Number-1,82,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 96:
          var T_Name = Name;
          var Text = "いや…　ないわね。";
          Datas = [5,0,1,0,0,0,30,0,T_Name,Text,0,0,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 97:
          var T_Name = "ココ";
          var Text = "そっか。";
          Datas = [5,0,13,0,0,0,30,0,T_Name,Text,Number-1,0,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 98:
          var T_Name = "ココ";
          var Text = "だったら…。";
          Datas = [5,0,14,0,0,0,26,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 99:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          Datas = [5,0,15,0,0,0,26,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 100:
          var T_Name = "ココ";
          var Text = "(ピコン)";
          Datas = [5,0,12,0,0,0,26,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 101:
          var T_Name = Name;
          var Text = "ゲーム感覚でドラマチックに…。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 102:
          var T_Name = "イメージ　あいね";
          var Text = "失礼しま〜す。";
          Datas = [16,15,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 103:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          Datas = [17,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 104:
          var T_Name = "";
          var Text = "(中庭)";
          Datas = [18,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 105:
          var T_Name = "";
          var Text = "(レッスンルーム)";
          Datas = [19,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 106:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          Datas = [20,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 107:
          var T_Name = "イメージ　あいね";
          var Text = "ん…。";
          Datas = [21,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 108:
          var T_Name = "イメージ　"+Name;
          var Text = "あいね　私と　フレンズになりましょう。";
          Datas = [22,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,110,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 109:
          var T_Name = "イメージ　あいね";
          var Text = "わ〜っ…　うん！！";
          Datas = [23,0,0,0,0,0,0,0,T_Name,Text,Number-1,96,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 110:
          var C1 = "うん！　これよ！！";
          var C2 = "ドラマチックの意味をはき違えているような…";
          var C3 = 0;
          var C4 = 0;
          Datas = [23,0,0,0,C1,C2,C3,C4,0,111,0,0,Number-1,96,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 111:
          var T_Name = Name;
          var Text = "いや…　これって　ドラマチックの意味をはき違えているような…";
          Datas = [5,0,0,0,0,0,30,0,T_Name,Text,0,0,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 112:
          var T_Name = "ココ";
          var Text = "う〜っ…　ココにも意地があるもん。";
          Datas = [5,0,16,0,0,0,30,0,T_Name,Text,Number-1,0,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 113:
          var T_Name = "ココ";
          var Text = Name+"ちゃんが満足する答えを　必ず見つけてみせるんだから！";
          Datas = [5,0,16,0,0,0,26,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 114:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          Datas = [5,0,17,0,0,0,26,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 115:
          var T_Name = "ココ";
          var Text = "°△°";
          Datas = [5,0,18,0,0,0,26,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 116:
          var T_Name = "ココ";
          var Text = "出た出た　出ました〜！";
          Datas = [5,0,19,0,0,0,26,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 117:
          var T_Name = "ココ";
          var Text = "最高にドラマチックな告白ができるスポットを見つけたよ！";
          Datas = [5,0,20,0,0,0,26,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 118:
          var T_Name = "ココ";
          var Text = "この観覧車でゴンドラが一番高くなったところで告白すると";
          Datas = [24,0,0,0,0,0,0,0,T_Name,Text,Number-1,111,Number,120,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 119:
          var T_Name = "ココ";
          var Text = "二人はず〜っと　幸せになれるんだって。";
          Datas = [25,0,0,0,0,0,0,0,T_Name,Text,Number-1,111,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 120:
          var C1 = "うん！　これよ！！";
          var C2 = "これって男女の恋愛じゃない？";
          var C3 = 0;
          var C4 = 0;
          Datas = [25,0,0,0,C1,C2,C3,C4,120.1,0,0,0,Number-1,111,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 120.1:
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,134,121,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 121:
          var T_Name = "後日";
          var Text = "学校の中庭";
          Datas = [27,0,0,0,0,0,0,0,T_Name,Text,120.1,0,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 122:
          var T_Name = "あいね";
          var Text = "うわ〜っ　うれしい！"+Name+"ちゃんと　遊びにいけるなんて楽しみだな。";
          Datas = [27,0,22,15,0,0,26,15,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 123:
          var T_Name = Name;
          var Text = "今度の土曜　休みが取れたから　久しぶりに　あいねと…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 124:
          var T_Name = "あいね";
          var Text = "今度の土曜…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 125:
          var T_Name = Name;
          var Text = "もしかして　何か用事があった？(凄く悲しげな顔)";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 126:
          var T_Name = "あいね";
          var Text = "うん…　ブランド選びのときに　友達になった　なこちゃんがこっちに来るから　会おうって約束したの。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 127:
          var T_Name = Name;
          var Text = "なこちゃんって　名古屋で　アイカツしてる子ね？";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 128:
          var T_Name = "あいね";
          var Text = "うん！　友達になってから　ずっと　やり取りしてたんだ。";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 129:
          var T_Name = Name;
          var Text = "あいねと会って相談がしたい…。";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 130:
          var T_Name = "あいね";
          var Text = "うん　何だろうね？";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 131:
          var T_Name = Name;
          var Text = "あっ…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 132:
          var T_Name = Name;
          var Text = "(相談って　まさか…)";
          Datas = [29,0,23,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,134,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 133:
          var T_Name = "あいね";
          var Text = "そうだ。　なこちゃんと私たち三人で遊びにいこうよ。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Number-1,120.1,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 134:
          var C1 = "そうね。";
          var C2 = "私のあいねを誑かすなんて許せない。";
          var C3 = "相談があるなら二人の方がいいでしょう。";
          var C4 = 0;
          Datas = [27,22,0,26,C1,C2,C3,C4,0,0,135,0,Number-1,120.1,Number];
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 135:
          var T_Name = Name;
          var Text = "ううん。 相談があるなら　二人の方がいいでしょう？";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,137,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.1:
          var T_Name = Name;
          var Text = "(ここからじゃ近すぎであいねのスカートは覗けない)";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,0,135,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case "双眼鏡135":
          var T_Name = Name;
          var Text = "(ここからじゃ近すぎてあいねのスカートは覗けない)";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,135.1,0,135,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 136:
          var T_Name = "";
          var Text = "土曜日";
          Datas = [5,0,0,0,0,0,26,30,T_Name,Text,Number-1,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137:
          var C1 = "(今日は計画を練りましょう。)";
          var C2 = "(気になるわ…。こっそり行動を監視しましょう。)";
          var C3 = "調べる";
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,0,138,0,0,Number-1,135,Number];
          if(Flag[1]){
            Datas[0] = 55;
            Datas[12] = 0;
            Datas[13] = 0;
          }
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          break;
        case 137.1:
          var Next = 137.2;
          var T_Name = Name;
          var Text = "あいねの為にデザインしたドレス…ピンクパートナーコーデのアイカツカードね。";
          if(Flag[2]) Text = "やっぱり必要な気がする。";
          if(Flag[2]) Next = 137.3;
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,0,Next,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137.2:
          var T_Name = Name;
          var Text = "一応…持っておこうかな。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,137.1,0,Number,0,137.3,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137.3:
          Flag[1] = true;
          var Next = 137.4;
          if(Flag[2]) Next = 137;
          core.pushScene(ItemgetScene(1,"アイカツカードを手に入れた。",Next,Flag));
          break;
        case 137.4:
          var T_Name = Name;
          var Text = "あと、ついでに双眼鏡も。";
          Datas = [55,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,0,137.5,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137.5:
          Flag[2] = true;
          core.pushScene(ItemgetScene(2,"双眼鏡を手に入れた。",137,Flag));
          break;
        case 137.6:
          Flag[1] = false;
          var T_Name = Name;
          var Text = "やっぱり、アイカツカードは置いておきましょう。";
          Datas = [55,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,0,137,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137.7:
          var T_Name = Name;
          var Text = "ラブミーティアのCDがある。";
          if(Flag[3]){
            Text = "まだCDがある。";
            if(Flag[4]){
              Text = "更にもう一枚。";
            }
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,0,137.8,0,0];
          if(Flag[1]) Datas[0] = 55;
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137.8:
          if(Flag[3]){
            if(Flag[4]){
              Flag[5] = true;
              core.pushScene(ItemgetScene(5,"永遠の灯のCDを手に入れた。",137,Flag));
            }
            else {
              Flag[4] = true;
              core.pushScene(ItemgetScene(4,"偶然、必然。のCDを手に入れた。",137,Flag));
            }
          }
          else {
            Flag[3] = true;
            core.pushScene(ItemgetScene(3,"プライドのCDを手に入れた。",137,Flag));
          }
          break;
        case 138:
          var T_Name = "";
          var Text = "駅前";
          Datas = [30,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 139:
          var T_Name = "海老原なこ";
          var Text = "わぁ。";
          Datas = [30,0,0,0,24,15,0,0,T_Name,Text,Number-1,0,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 140:
          var T_Name = "あいね";
          var Text = "お〜い！なこちゃん！";
          Datas = [30,0,22,15,0,0,24,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 141:
          var T_Name = "なこ";
          var Text = "あいねちゃん！";
          Datas = [30,0,22,0,0,0,24,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 142:
          var T_Name = "なこ";
          var Text = "久しぶり！ウフフ。";
          Datas = [30,0,22,0,0,0,24,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 143:
          var T_Name = Name;
          var Text = "(わざわざ　こっちに来てまで　相談したい事ってあいねとフレンズを組みたいって事なんじゃ…)";
          Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 144:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 145:
          var T_Name = "なこ";
          var Text = "あいねちゃんちのカフェか。　一度　来てみたかったんだよね。";
          Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 146:
          var T_Name = "";
          var Text = "～～";
          Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Number-1,138,Number,148,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 147:
          var T_Name = "多分山下公園";
          var Text = "その後も街を巡る二人。";
          Datas = [33,0,0,0,0,0,0,0,T_Name,Text,Number-1,138,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 148:
          var T_Name = "あいね";
          var Text = "あれ？"+Name+"ちゃん？";
          Datas = [56,0,24,0,0,0,22,0,T_Name,Text,0,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 149:
          var T_Name = "なこ";
          var Text = "えっ？";
          Datas = [56,0,24,0,0,0,22,0,T_Name,Text,Number-1,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 150:
          var T_Name = Name;
          var Text = "あっ…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 151:
          var T_Name = Name;
          var Text = "(しまった。近づきすぎた…)";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 152:
          var T_Name = Name;
          var Text = "あっ…えっと、やっぱり気になっちゃって。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 153:
          var T_Name = "あいね";
          var Text = "そうなんだ。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 154:
          var T_Name = "なこ";
          var Text = "そうだ。"+Name+"ちゃんにも聞いて欲しいな。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 155:
          var T_Name = Name;
          var Text = "え。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 156:
          var T_Name = "なこ";
          var Text = "私ね、この間イベントで知り合った子とすっごく仲良くなって　そのことフレンズを組みたいって思ってるんだけど…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 157:
          var T_Name = "なこ";
          var Text = "私は中学を卒業するまで名古屋にいるつもりだから　遠距離フレンズがうまくいくか不安で…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 158:
          var T_Name = "なこ";
          var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 159:
          var T_Name = Name;
          var Text = "なれる！仲がいいなら絶対なれるわ！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 160:
          var T_Name = "なこ";
          var Text = "ありがとう！そう言ってくれると勇気出てくるよ！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 161:
          var T_Name = "着信音";
          var Text = "(ピロリ)";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 162:
          var T_Name = "なこ";
          var Text = "あっ仕事終わったからこれから会おう。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 163:
          var T_Name = "なこ";
          var Text = "よ〜し！　"+Name+"ちゃんのおかげで勇気出たし、フレンズ組もうって申し込んでみるよ。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 164:
          var T_Name = "なこ";
          var Text = "また遊ぼうね、あいねちゃん！あいねちゃんも頑張ってね！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 165:
          var T_Name = Name;
          var Text = "\"あいねちゃんも…？\"";
          Datas = [56,0,26,0,0,0,0,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 166:
          var T_Name = "あいね";
          var Text = "うん！私も"+Name+"ちゃんと…";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 167:
          var T_Name = "あいね";
          var Text = "あ。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 168:
          var T_Name = Name;
          var Text = "え。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 169:
          var T_Name = "あいね";
          var Text = "……私も、"+Name+"ちゃんとフレンズを組みたい！";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 170:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 171:
          var T_Name = "あいね";
          var Text = "ダメ、かな…？";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 172:
          var T_Name = Name;
          var Text = "ううん。私も フレンズを組むなら あいねしかいないって思ってた。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Number-1,148,Number,0,0,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case "双眼鏡147":
          var T_Name = Name;
          var Text = "これって…。";
          Datas = [34,0,0,0,0,0,0,0,T_Name,Text,0,0,173,188,174,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 173:
          var T_Name = Name;
          var Text = "これって…。";
          Datas = [34,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 174:
          var T_Name = Name;
          var Text = "フレンズ結成の流れにしか見えないんだけど。";
          Datas = [35,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 175:
          var T_Name = "どうみても赤レンガ倉庫";
          var Text = "";
          Datas = [36,0,0,0,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 176:
          var T_Name = "なこ";
          var Text = "うわ〜っ…。綺麗…。";
          Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 177:
          var T_Name = "あいね";
          var Text = "でしょう？ なこちゃんにもこの景色を見せたかったんだ。";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 178:
          var T_Name = Name;
          var Text = "ここって…。";
          Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 179:
          var T_Name = Name;
          var Text = "(ココちゃんが言ってた観覧車…)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 180:
          var T_Name = Name;
          var Text = "(あいねとなこちゃんもそれを知ってて…)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
          case 181:
            var T_Name = "なこ";
            var Text = "それでね、あいねちゃんに相談なんだけど。";
            Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 182:
            var T_Name = "あいね";
            var Text = "うん。";
            Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 183:
            var T_Name = "なこ";
            var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
            Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 184:
            var T_Name = Name;
            var Text = "あっ…。";
            Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 185:
            var T_Name = "あいね";
            var Text = "うん！　気持ちがつながっていればきっとなれるよ。";
            Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 186:
            var T_Name = Name;
            var Text = "…。";
            Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Number-1,173,Number,188,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 187:
            var T_Name = Name;
            var Text = "(本当に…それでいいの？)";
            Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Number-1,173,Number,0,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 188:
            var C1 = "奪い取る";
            var C2 = "それでいい";
            var C3 = "殺してでも奪い取る";
            var C4 = 0;
            Datas = [36,26,0,0,C1,C2,C3,C4,189,0,0,0,Number-1,173,Number];
            core.replaceScene(ChoiceScene(Datas,false,Flag));
            break;
          case 189:
            var T_Name = Name;
            var Text = "(私のフレンズはあいねしかいない。)";
            Datas = [36,0,26,0,0,0,0,0,T_Name,Text,0,0,Number,204,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 190:
            var T_Name = Name;
            var Text = "(この気持ちに嘘はつけない！)";
            Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Number-1,0,Number,204,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
            case 191:
              var T_Name = "あいね";
              var Text = "えっ？　"+ Name.substring(0,1) +"…"+Name+"ちゃん？";
              Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 192:
              var T_Name = "なこ";
              var Text = "えっ？";
              Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 193:
              var T_Name = Name;
              var Text = "来て…　あいね！";
              Datas = [38,0,0,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 194:
              var T_Name = "あいね";
              var Text = "えっ？え〜！？";
              Datas = [39,0,0,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 195:
              var T_Name = "なこ";
              var Text = "…？";
              Datas = [36,0,24,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 196:
              var T_Name = "あいね";
              var Text = Name+"ちゃんどうしてここに？";
              Datas = [40,0,22,15,0,0,26,15,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 197:
              var T_Name = Name;
              var Text = "あいねにどうしても伝えたいことがあるの。";
              Datas = [40,0,22,0,0,0,26,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 198:
              var T_Name = "";
              var Text = "観覧車";
              Datas = [43,0,0,0,0,0,0,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 199:
              var T_Name = "あいね";
              var Text = "ねぇねぇ　伝えたいことって何？何？何？";
              Datas = [41,0,22,15,0,0,26,15,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 200:
              var T_Name = Name;
              var Text = "…！";
              Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 201:
              var T_Name = Name;
              var Text = "(勢いで連れて来ちゃったけど、観覧車ってこんなに遅いの？)";
              Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
            case 202:
              var T_Name = Name;
              var Text = "(一番上までどれくらいかかるのよ…)";
              Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,189,Number,204,Number+1,0,0];
              core.replaceScene(MainScene(Datas,Return,Flag));
                break;
          case 203:
            var T_Name = "あいね";
            var Text = "早く聞かせてよ〜！"+Name+"ちゃん！";
            Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,189,Number,0,Number+1,0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
              break;
          case 204:
            var C1 = "もうちょっと待って";
            var C2 = "ドラマチックとかどうでもいい！";
            var C3 = 0;
            var C4 = 0;
            Datas = [41,22,0,26,C1,C2,C3,C4,205,0,0,0,Number-1,189,Number];
            core.replaceScene(ChoiceScene(Datas,false,Flag));
            break;
        case 205:
          var T_Name = Name;
          var Text = "も…もうちょっと待って。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 206:
          var T_Name = "あいね";
          var Text = "え〜！もったいつけられると余計気になるよ〜！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,0,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 207:
          var T_Name = "あいね";
          var Text = "教えて教えてー！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,205,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 208:
          var T_Name = Name;
          var Text = "も…もうちょっと待って。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,0,0,0,0];
          if(Flag[1]){
            Datas[9] = "ちょっ…　あっ！";
            Datas[14] = 209;
          }
          core.replaceScene(MainScene(Datas,Return,Flag));
            break;
        case 209:
          var T_Name = "あいね";
          var Text = "アイカツカード…？これって"+Name+"ちゃんがデザインしたドレスだよね？";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Number-1,205,Number,0,Number+1,0,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
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
          if(Item){
              Number = Number.substring(Item.length)*1;
              core.pushScene(ItemgetScene(0,"ここでは使えないようだ。",Number,Flag));
          }
          else{
            //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
            Datas = [54,0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,0,"ゲームオーバー",0,0];
            core.replaceScene(MainScene(Datas,Return,Flag));
          }
          break;
      }
    }
    function Inspect_loads(Number,Flag){
      var Name = window.localStorage.getItem("name");
      var Datas = [];
      //[背景,(幅,高,x座標,y座標,名前(又は"シーンロード"),テキスト(又はシーンナンバー))×4]
      switch (Number) {
        case 137:
          Datas = [5,367,553,1219,309,"シーンロード",137.1,148,565,0,335,"シーンロード",137.7];
          if(Flag[1]){
            Datas[0] = 55;
            Datas[6] = 137.6;
          }
          if(Flag[5]){
            Datas[11] = Name;
            Datas[12] = "流石にもうない。";
          }
          core.pushScene(InspectScene(Datas,Flag));
          break;
        default:
          Datas = [54,0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,0,"ゲームオーバー",false,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
      }
      return;
    }
    var TitleScene = function(){

      if(window.localStorage.getItem("syoken")!="false"){
        var Data = false;
        var Flag = [false];
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
      //core.assets["sound/Choice.wav"].play();
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
          core.pushScene(ItemScene(Datas,Flag));
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
          core.assets["sound/Trophies.wav"].play();
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
      //core.assets["sound/Choice.wav"].play();
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
          core.pushScene(ItemScene(Datas,Flag));
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
          core.assets["sound/Item.wav"].play();
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
        core.assets["sound/Item.wav"].play();
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
          else core.pushScene(TextScene(Datas[5],Datas[6]));
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
          else core.pushScene(TextScene(Datas[11],Datas[12]));
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
          else core.pushScene(TextScene(Datas[17],Datas[18]));
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
    var ItemgetScene = function(a,b,c,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/white.png"];
      Background.x = 0;
      Background.y = 900;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = b;
      scene.addChild(Text);//テキスト

      var Enter = new Sprite(320,60);
      Enter.image = core.assets["image/Buttons.png"];
      Enter.x = 1280;
      Enter.y = height-65;
      Enter.frame = 4;
      scene.addChild(Enter);
      if(b!="ここでは使えないようだ。"){
        var Item = new Sprite(800,800);
        Item.image = core.assets["image/Item_B.png"];
        Item.x = 1600;
        Item.y = 50;
        Item.frame = a;
        scene.addChild(Item);
        core.assets["sound/Item.wav"].play();
        Item.addEventListener("enterframe",function(){
          if(Item.x!=400) Item.x -= 100;
          if(Item.x==-800){
            core.popScene();
            Scene_loads(c,false,true,Flag);
          }
        })
      }

      Enter.addEventListener('touchstart',function(e){
        if(b=="ここでは使えないようだ。") {
          core.popScene();
          Scene_loads(c,false,true,Flag);
        }
        else {
          if(Item.x>400) Item.x = 400;
          else if(Item.x==400) Item.x -= 100;
          else{
            core.popScene();
            Scene_loads(c,false,true,Flag);
          }
        }
      });//進む

      return scene;
    }
    var TextScene = function(a,b){
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
      C_name.text = "【" + a + "】";
      if(C_name.text == "【】") C_name.text = "";
      scene.addChild(C_name);//キャラ名

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = b;
      scene.addChild(Text);//テキスト

      scene.on("touchstart",function(e){
        core.popScene();
      });

      return scene;
    }
    var ItemScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Numbers = 400;

      var Item_image = new Sprite(400,400);
      Item_image.image = core.assets["image/Item_S.png"];
      Item_image.x = 1000;
      Item_image.y = 400;
      Item_image.frame = 0;
      scene.addChild(Item_image);

      var Text1 = new Label();
      Text1.font  = "60px monospace";
      Text1.color = 'black';
      Text1.x = 200;
      Text1.y = 200;
      Text1.width = 1600;
      Text1.height = 60;
      Text1.text = "▶ 戻る";
      scene.addChild(Text1);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 1000;
      Text2.y = 200;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "▶ 設定を開く";
      scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 1200;
      Text3.y = 1400;
      Text3.width = 1380;
      Text3.height = 60;
      Text3.text = "";
      scene.addChild(Text3);

      var Text4 = new Label();
      Text4.font  = "60px monospace";
      Text4.color = 'black';
      Text4.x = 200;
      Text4.y = 1000;
      Text4.width = 1600;
      Text4.height = 60;
      Text4.text = "";
      scene.addChild(Text4);

      var Text5 = new Label();
      Text5.font  = "60px monospace";
      Text5.color = 'black';
      Text5.x = 200;
      Text5.y = 1100;
      Text5.width = 1600;
      Text5.height = 60;
      Text5.text = "";
      scene.addChild(Text5);

      var Text6 = new Label();
      Text6.font  = "60px monospace";
      Text6.color = 'black';
      Text6.x = 200;
      Text6.y = 1200;
      Text6.width = 1600;
      Text6.height = 60;
      Text6.text = "";
      scene.addChild(Text6);

      var Text7 = new Label();
      Text7.font  = "60px monospace";
      Text7.color = 'black';
      Text7.x = 200;
      Text7.y = 1300;
      Text7.width = 1600;
      Text7.height = 60;
      Text7.text = "";
      scene.addChild(Text7);

      var Items = Class.create(Label, {
        initialize: function(a,b) {
        Label.call(this);
        this.font  = "60px monospace";
        this.color = 'black';
        this.x = 200;
        this.y = Numbers;
        this.width = 1600;
        this.height = 60;
        this.text = a;
        if(Flag[b]){
          Numbers += 100;
          scene.addChild(this);
        }
        }
      });

      var Item = [];
      var Choice_Item = "未設定";
      Item[0] = new Items("アイカツカード",1);
      Item[1] = new Items("双眼鏡",2);
      Item[2] = new Items("プライド",3);
      Item[3] = new Items("偶然、必然。",4);
      Item[4] = new Items("永遠の灯",5);

      function Item_text(a,b){
        a = a.substring(2);
        switch (a) {
          case "アイカツカード":
            Item_image.frame = 1;
            Text[0] = "あいねの為にデザインしたアイカツカード。";
            Text[1] = "ピンクパートナーコーデ。";
            Text[2] = "";
            Text[3] = "";
            return(Text[b]);
            break;
          case "双眼鏡":
            Item_image.frame = 2;
            Text[0] = "ストーカーの御供。";
            Text[1] = "";
            Text[2] = "";
            Text[3] = "";
            return(Text[b]);
            break;
          case "プライド":
            Item_image.frame = 3;
            Text[0] = "そこにしかないもの／プライド";
            Text[1] = "BEST FRIENDS！";
            Text[2] = "カレン・ミライ from BEST FRIENDS！";
            Text[3] = "藤末 樹,片山将太";
            if(core.assets["sound/"+a+".m4a"].onplaying){
              Text3.text = "■ 停止";
            }
            else Text3.text = "▶ 再生";
            return(Text[b]);
            break;
          case "偶然、必然。":
            Item_image.frame = 4;
            Text[0] = "Third Color：PURPLE";
            Text[1] = "BEST FRIENDS！";
            Text[2] = "かぐや from BEST FRIENDS！";
            Text[3] = "片山将太,藤末 樹";
            if(core.assets["sound/"+a+".m4a"].onplaying){
              Text3.text = "■ 停止";
            }
            else Text3.text = "▶ 再生";
            return(Text[b]);
            break;
          case "永遠の灯":
            Item_image.frame = 5;
            Text[0] = "『アイカツ!』主題歌/挿入歌 2年目②";
            Text[1] = "STAR☆ANIS";
            Text[2] = "れみ･ふうり from STAR☆ANIS";
            Text[3] = "南田健吾";
            if(core.assets["sound/"+a+".m4a"].onplaying){
              Text3.text = "■ 停止";
            }
            else Text3.text = "▶ 再生";
            return(Text[b]);
            break;
          default:
            return("開発中");
            break;
        }
      }

      Text1.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      Text2.addEventListener('touchstart',function(e){
        core.pushScene(SettingScene(Datas,Flag));
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        if(Text3.text=="▶ 使う"){
          core.popScene();
          if(Datas.length==17){
            if(Datas[12]!=false) Number = Datas[12];
          }
          else Number = Datas[14]*1;
          Scene_loads(Number,Datas,true,Flag,Choice_Item);
        }
        else if(Text3.text=="▶ 再生"){
          core.assets["sound/"+Choice_Item+".m4a"].onplaying = true;
          core.assets["sound/"+Choice_Item+".m4a"].play();
          Text3.text = "■ 停止";
        }
        else if(Text3.text=="■ 停止"){
          core.assets["sound/"+Choice_Item+".m4a"].onplaying = false;
          core.assets["sound/"+Choice_Item+".m4a"].pause();
          Text3.text = "▶ 再生";
        }
        return;
      });

      for (var i = 0; i < Item.length; i++){
        Item[i].addEventListener('touchstart',function(e){
          if(this.color=="black"){
            Choice_Item = this.text;
            this.text = "▶ " + this.text;
            this.color = "red";
            Text3.text = "▶ 使う";
            Text4.text = Item_text(this.text,0);
            Text5.text = Item_text(this.text,1);
            Text6.text = Item_text(this.text,2);
            Text7.text = Item_text(this.text,3);
          }
          else{
            Item_image.frame = 0;
            this.text = this.text.substring(2);
            this.color = "black";
            Text3.text = "";
            Text4.text = "";
            Text5.text = "";
            Text6.text = "";
            Text7.text = "";
          }
          for (var k = 0; k < Item.length; k++){
            if(Item[k].color=="red"&&this!=Item[k]){
              Item[k].text = Item[k].text.substring(2);
              Item[k].color = "black";
            }
          }
          return;
        });
      }

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
