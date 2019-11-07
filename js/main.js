enchant()

function Load(width,height){
  var core = new Core(width, height);
  core.preload("sound/Item.wav");
  core.preload("image/left.png");
  core.preload("image/Round.png");
  core.preload("image/title.png");
  core.preload("image/right.png");
  core.preload("image/white.png");
  core.preload("image/stand.png");
  core.preload("image/Item_B.png");
  core.preload("image/Item_S.png");
  core.preload("sound/Choice.wav");
  core.preload("image/Buttons.png");
  core.preload("image/待った！.png");
  core.preload("sound/プライド.wav");
  core.preload("sound/永遠の灯.wav");
  core.preload("sound/待った！.wav");
  core.preload("sound/Trophies.wav");
  core.preload("image/Trophies.png");
  core.preload("image/背景/left.png");
  core.preload("image/異議あり！.png");
  core.preload("sound/異議あり！.wav");
  core.preload("image/背景/stand.png");
  core.preload("image/背景/Black.png");
  core.preload("image/背景/right.png");
  core.preload("image/背景/裁判長.png");
  core.preload("image/Background.png");
  core.preload("image/Characters.png");
  core.preload("sound/偶然、必然。.wav");
  core.preload("image/Trophies_image.png");
  core.preload("image/背景/Transparent.png");
  for (var i = 1; i <= 61; i++){
    core.preload("image/背景/"+i+".png");
  }
  for (var i = 0; i <= 1; i++){
    core.preload("image/アイテム詳細/"+i+".png");
  }
  core.fps = 100;
  core.onload = function(){

    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    var Rewind = 0;
    var Skip = 0;
    var Before = 0;
    var After = 0;
    var Item_Flag = [];//所持アイテム
    var Pages = 0;//アイテムのページ

    function R_S(a,b,c){
      b[2] = a;
      b[3] = c;
      Rewind = 0;
      Skip = c;
      Before = 0;
      return(b);
    }

    function Get_Item(a,b,c,d){
      Item_Flag[Item_Flag.length] = [a,b,c,d];
      return;
    }//アイテムget

    function Rewrite_Item(a,b,c,d,e){
      for (var i = 0; i < Item_Flag.length; i++) {
        if(Item_Flag[i][0]==a) break;
      }
      if(b=="消失"){
        Item_Flag[i] = false;
        var Item_Flag2 = [];
        k = 0;
        for (var i = 0; i < Item_Flag.length; i++){
          if(Item_Flag[i]){
            Item_Flag2[k] = Item_Flag[i];
            k++;
          }
        }
        Item_Flag = Item_Flag2;
        if(Pages==Item_Flag.length) Pages-=5;
      }
      else Item_Flag[i] = [b,c,d,e];
      return;
    }//アイテム情報の書き換え&Lost

    function Scene_loads(Number,Return,Flag,Item){
      var Name = window.localStorage.getItem("name");
      var Gender = window.localStorage.getItem("gender");
      var Surname = window.localStorage.getItem("surname");
      if(Gender=="男"){
        var www = ["僕","俺"];
        var Person = www[rand(1)];
        var S_image = 4;
      }
      else{
        var Person = "私";
        var S_image = 6;
      }
      if(Number=="セーブ読み込み"){
        Flag = window.localStorage.getItem("flag").split(",");
        Pages = window.localStorage.getItem("Pages")*1;
        Number = window.localStorage.getItem("Number")*1;
        Item_Flag = window.localStorage.getItem("Item").split("端");
        for (var i = 0; i < Item_Flag.length; i++){
          Item_Flag[i] = Item_Flag[i].split(",");
        }
        for (var i = 1; i < Item_Flag.length; i++){
          var Item_Flag2 = [];
          for (var k = 1; k < Item_Flag[i].length; k++){
            Item_Flag2[k-1] = Item_Flag[i][k];
            if(k==3) Item_Flag2[k-1] = Item_Flag2[k-1]*1;
          }
          Item_Flag[i] = Item_Flag2;
        }
        for (var i = 0; i < Item_Flag.length-1; i++) {
          Item_Flag2[i] = Item_Flag[i];
        }
        Item_Flag = Item_Flag2;
        for (var i = 4; i < Flag.length; i++){
          if(Flag[i]=="true") Flag[i] = true;
          else Flag[i] = false;
        }
        Flag[0] = Flag[0]*1;//体力
        Flag[1] = Flag[1]*1;//本編シーンナンバー
        Flag[2] = Flag[2]*1;//戻るシーンナンバー
        Flag[3] = Flag[3]*1;//スキップシーンナンバー
      }
      if(Item){
        switch (Item) {
          case "時の魔術師つきつける":
          switch (Number) {
            case 261:
              var Text = "よ～し。";
              Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,"時の魔術師",0];
              if(Flag[25]) Datas[0] = 60;
              if(Flag[26]) Datas[0] = 61;
              core.pushScene(MainScene(Datas,Return,Flag));
              break;
            default:
              var Text = "時の魔術師を召喚！";
              Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,262,0,"0600,0250,15",7];
              core.pushScene(MainScene(Datas,false,Flag));
              break;
          }
          break;
          case "時の魔術師":
          switch (Number) {
            case 261:
              var Text = "よ～し。";
              Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,"時の魔術師",0];
              if(Flag[25]) Datas[0] = 60;
              if(Flag[26]) Datas[0] = 61;
              core.pushScene(MainScene(Datas,Return,Flag));
              break;
            default:
              var Text = "時の魔術師を召喚！";
              Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,262,0,"0600,0250,15",7];
              core.pushScene(MainScene(Datas,false,Flag));
              break;
          }
          break;
          case "使い古された包丁つきつける":
          case "新品で強靭な包丁つきつける":
          case "折れた包丁つきつける":
          case "使い古された包丁":
          case "新品で強靭な包丁":
          case "折れた包丁":
          switch (Number) {
            case 261:
              var Text = "いやいや…どうやって？";
              Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,261,0];
              if(Flag[25]) Datas[0] = 60;
              if(Flag[26]) Datas[0] = 61;
              core.replaceScene(MainScene(Datas,Return,Flag));
              break;
            default:
              var Text = "(危ないでしょう。)";
              Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
              core.pushScene(MainScene(Datas,Return,Flag));
              break;
          }
          break;
          case "アイカツカードつきつける":
          switch (Number) {
            case 261:
              var Text = "流石にアイカツカードじゃ(改行)包丁は手入れできないか。(改行)何か他のカードを…。";
              Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,261,0];
              if(Flag[25]) Datas[0] = 60;
              if(Flag[26]) Datas[0] = 61;
              core.replaceScene(MainScene(Datas,Return,Flag));
              break;
            default:
              var Text = "(このカードは大事なものだ。)";
              Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
              core.pushScene(MainScene(Datas,Return,Flag));
              break;
          }
          break;
          case "包丁":
            switch (Number) {
              case 261:
              break;
              case 137:
              case 136:
                var Text = "よく調べてみましょう。";
                Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,261,0];
                if(Flag[25]) Datas[0] = 60;
                if(Flag[26]) Datas[0] = 61;
                core.replaceScene(MainScene(Datas,Return,Flag));
                  break;
              default:
                var Text = "(よく調べてみたいけど、(改行)家じゃないと危ないわよね…。)";
                Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
                core.pushScene(MainScene(Datas,Return,Flag));
                break;
            }
            break;
          case "プライド":
            switch (Number) {
              case 134.9:
                var T_Name = Name;
                var Text = "あ、そうだ。(改行)コレをなこちゃんに。";
                Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,135.1,135.2,135.5,"0600,0250,15",3];
                core.replaceScene(MainScene(Datas,Return,Flag));
                break;
              default:
                var Text = "(このCDは布教用だから使うといったら布教よね。)";
                Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
                core.pushScene(MainScene(Datas,Return,Flag));
                break;
            }
            break;
          case "双眼鏡":
            switch (Number) {
                case 147:
                Flag = R_S(173,Flag,188);
                var T_Name = Name;
                var Text = "これって…。";
                Datas = [34,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,173,174,Skip];
                core.replaceScene(MainScene(Datas,Return,Flag));
                break;
              default:
                var Text = "双眼鏡は近くに隠れるものがない時使うといいわ。(改行)公園とか。";
                Datas = ["Transparent",0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
                core.pushScene(MainScene(Datas,Return,Flag));
                break;
            }
            break;
          default:
            if(Item.substring(Item.length-5)=="つきつける"){
              var Text = "反応がない。";
              Datas = ["Transparent",0,0,0,0,0,0,0,"",Text,0,0,0,"シーンを外す",0];
              core.pushScene(MainScene(Datas,Return,Flag));
              break;
            }
            else{
              var Text = "ここでは使えないようだ。";
              Datas = ["Transparent",0,0,0,0,0,0,0,"",Text,0,0,0,"シーンを外す",0];
              core.pushScene(MainScene(Datas,Return,Flag));
            }
            break;
        }
        return;
      }
      /*
      Datas[0] = "背景ナンバー";
      Datas[1] = "背景のfade時間";
      Datas[2] = "左のキャラナンバー";
      Datas[3] = "左のキャラfade時間";
      Datas[4] = "中のキャラナンバー";
      Datas[5] = "中のキャラfade時間";
      Datas[6] = "右のキャラナンバー";
      Datas[7] = "右のキャラfade時間";
      Datas[8] = "名前";
      Datas[9] = "テキスト";
      Datas[10] = "早戻し";
      Datas[11] = "前";
      Datas[12] = "今";
      Datas[13] = "次";
      Datas[14] = "Skip";
      Datas[15] = "アイテムの座標(xxx,yyy)";
      Datas[16] = "アイテムの画像ナンバー";
      Datas[17] = "トロフィー名"
      Datas[18] = "トロフィー画像ナンバー"
      */
      Rewind = Flag[2];
      Skip = Flag[3];
      Before = Number-1;
      After = Number+1;
      if(Rewind==Before) Rewind = 0;
      if(Skip==After) Skip = 0;
      if(window.localStorage.getItem("選択音")=="オン") core.assets["sound/Choice.wav"].play();
      switch (Number) {
        case -22:
          var Text = "説明は以上です。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,-1,After,Number,"ゲームオーバー",0];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -21.1:
          var Text = "芸能人はカードが命。(改行)そして、決闘者はカードが魂。(改行)画像が使いたかっただけなので深い意味はありません。";
          Datas = [54,0,22,0,0,0,32,0,"",Text,-1,-21,Number,-22,0];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -21:
          var Text = "芸能人はカードが命。(改行)そして、決闘者はカードが魂。";
          Datas = [54,0,22,0,0,0,32,15,"",Text,-1,After,Number,-21.1,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -20:
          var Text = "芸能人はカードが命。";
          Datas = [54,0,22,15,0,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -19:
          var T_text = ["説明用","トロフィー","レッスン"];
          var Text = "こんなの。(これはテストなので獲得されません。)";
          Datas = [54,0,0,0,0,0,0,0,"",Text,-1,After,Number,Before,-22,false,false,T_text[rand(2)],rand(2)];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -18:
          var Text = "それと、無意味なトロフィー機能が存在します。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -17:
          var Text = "アニメ本編が正解ルートなので(改行)間違ったりするとすぐ終わっちゃったりします。";
          Datas = [54,0,25,0,0,0,21,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -16:
          var Text = "みおちゃんとなって選択肢を選んでいき、(改行)あいねちゃんとフレンズを組みましょう。(改行)みおちゃんの名前だけは後で変更できます。";
          Datas = [54,0,25,0,0,0,21,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -15:
          var Text = "このゲームはあいねちゃんとみおちゃんがフレンズ、(改行)要はユニットを組むまでのお話です。";
          Datas = [54,0,25,15,0,0,21,15,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -14:
          var Text = "名古屋らしくエビフライが好物で、(改行)頭と苗字にも海老が付いています。(改行)わかりやすいですね。(改行)(なんかそういうデュエリストいたような…)";
          Datas = [54,0,0,0,24,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -13:
          var Text = "あと、海老原なこちゃん。(改行)「名」古屋でアイカツしている女の「子」です。";
          Datas = [54,0,0,0,24,15,0,0,"",Text,-1,-12.1,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -12.1:
          var Text = "そういえば圏外でも使えるのはおかしいのでは…？(改行)(見た感じ電波は来ているがここは異世界だし…)";
          Datas = [57,0,0,0,0,0,0,0,"",Text,-1,-12,Number,-13,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -12:
          var Text = "ポンコツでもワイはフレンズでは(改行)ココちゃんが一番好きやで…(改行)扱いがそれなりに悪いの悲しいんじゃァ…";
          Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,Number,-12.1,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -11:
          var Text = "ちなみにこの回でかなりのポンコツだった事が露呈した。";
          Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -10:
          var Text = "ヒェッ…";
          Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -9:
          var Text = "ホントに一人しかいないのか…？";
          Datas = [54,0,0,0,31,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -8:
          var Text = "要はアイカツフレンズ!世界のSiriといったところです。(改行)";
              Text+= "AIのくせに一人しかいないらしく、(改行)";
              Text+= "忙しい時は呼んでも出でこなかったり、舌を噛んだり、(改行)";
              Text+= "自分にわからないことは人任せにして(改行)";
              Text+= "勝手に電話をかけるくらいの高性能AIです。";
          Datas = [54,0,0,0,31,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -7:
          var Text = "ついでに、アイカツ！ナビのココちゃん。(改行)アイカツ！モバイルに「ハロー、ココちゃん！」(改行)と呼びかけると出てきてくれるAIです。";
          Datas = [54,0,0,0,31,15,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -6:
          var Text = "盗撮しようとして気づかれたみたいな構図の写真だ。(改行)みおちゃんが写真を撮らせてもらえないのか、(改行)それとも恥ずかしくて撮らせてと言えないのか、(改行)盗撮行為が好きなのか。多分後者だろうね。(偏見です)";
          Datas = [54,0,0,0,21,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -5:
          var Text = "ちなみにこの写真は二人がフレンズを組んで(改行)一度解散し、再結成した後のみおちゃんの(改行)電話の呼び出し画面の画像です。";
          Datas = [54,0,0,0,21,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -4:
          var Text = "かわいいですね。(かわいいです)";
          Datas = [54,0,0,0,21,0,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -3:
          var Text = "この娘が友希あいねちゃん。(改行)ピュアパレットのピュアな方です。";
          Datas = [54,0,0,0,21,15,0,0,"",Text,-1,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -2:
          var Text = "この娘は湊みお。(改行)ピュアパレットのピュアじゃない方です。";
          Datas = [54,0,0,0,25,15,0,0,"",Text,0,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case -1:
          var Text = "とりあえずは登場人物の紹介をしましょう。";
          Datas = [54,0,0,0,0,0,0,0,"",Text,0,After,Number,Before,-22];
          core.replaceScene(MainScene(Datas,Return,false));
          break;
        case 1:
          var Flag = [10,1];//0体力,1尋問
          Flag[4] = false;//結成秘話を復習
          Flag[5] = false;//アイカツカードを所持
          Flag[6] = false;//プライドを所持
          Flag[7] = false;//偶然、必然。を所持
          Flag[8] = false;//永遠の灯を所持
          Flag[9] = false;//双眼鏡を所持
          Flag[10] = false;//知ってた。
          Flag[11] = false;//ええ。
          Flag[12] = false;//もちろん。
          Flag[13] = false;//私もそう思う。
          Flag[14] = false;//あいねから誘う。
          Flag[15] = false;//即決
          Flag[16] = false;//電話
          Flag[17] = false;//妥協
          Flag[18] = false;//普通
          Flag[19] = false;//ゲーム感覚
          Flag[20] = false;//悪ノリ
          Flag[21] = false;//疑惑
          Flag[22] = false;//嫉妬
          Flag[23] = false;//包丁を所持
          Flag[24] = false;//時の魔術師を所持
          Flag[25] = false;//包丁強靭
          Flag[26] = false;//包丁折れる
          Flag[27] = false;//自主規制
          Flag = R_S(Number,Flag,21);
          var T_Name = "友希 あいね";
          var Text = "これまでの『アイカツフレンズ！』。";
          Item_Flag = [];
          Get_Item("アイカツカード","あいねの為にデザインしたアイカツカード。(改行)ピンクパートナーコーデ。",1,"詳細");
          Get_Item("テストアイテム","テストのためのアイテム");
          Get_Item("時の魔術師","光属性(改行)レベル 2(改行)【魔法使い族/効果】(改行)攻撃力 500 守備力 400",7,"詳細");
          Rewrite_Item("時の魔術師","消失");
          Rewrite_Item("アイカツカード","消失");
          window.localStorage.setItem("syoken",false);
          Data = true;
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 2:
          var T_Name = "あいね";
          var Text = "私　友希あいね。";
          Get_Item("双眼鏡","ストーカーの御供。",2,"調べる");
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 3:
          Rewrite_Item("テストアイテム","消失");
          var T_Name = "あいね";
          var Text = "スターハーモニー学園に通う中学２年生。";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 4:
          Rewrite_Item("双眼鏡","消失");
          var T_Name = "あいね";
          var Text = "学園のトップアイドル　" + Surname +" "+ Name + "ちゃんと出会って(改行)アイドル科に転入したんだ。";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 5:
          var T_Name = "あいね";
          var Text = "ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で(改行)私たちを元気に引っ張ってくれるエマちゃん。";
          Datas = [1,0,33,15,0,0,34,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 6:
          var T_Name = "あいね";
          var Text = "凸凹だけどすっごく仲よしな２人は(改行)ついにフレンズになった。";
          Datas = [1,0,33,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 7:
          var T_Name = "あいね";
          var Text = "アイドルは　カードも友達　ファンも友達。(改行)目指せ　友達100万人！";
          Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 8:
          var T_Name = "日向エマ";
          var Text = "プリティー！";
          Datas = [52,0,0,0,0,0,34,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 9:
          var T_Name = "蝶乃舞花";
          var Text = "セクシー！";
          Datas = [52,0,33,15,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 10:
          var T_Name = "二人";
          var Text = "ハニーキャット！";
          Datas = [2,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 11:
          var T_Name = "あいね";
          var Text = "うわ～！かっこいい！！";
          Datas = [52,0,22,15,0,0,34,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 12:
          var T_Name = Surname+Name;
          var Text = "ハニーキャット…２人にぴったりなフレンズ名ね。";
          Datas = [52,0,22,0,0,0,26,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 13:
          var T_Name = "あいね";
          var Text = "たしかに。舞花ちゃんもエマちゃんも(改行)猫っぽいイメージあるし。";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 14:
          var T_Name = "エマ";
          var Text = "でしょでしょ。(改行)フレンズ組もうってなったら(改行)２人で盛り上がっちゃって。(改行)コンセプトとか一から作り上げてくのって(改行)ワクワクするよね。";
          Datas = [52,0,22,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 15:
          var T_Name = "舞花";
          var Text = "あのキメポーズはちょっと恥ずいんですけど…";
          Datas = [52,0,33,15,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 16:
          var T_Name = "エマ";
          var Text = "え～っ！？舞花だってノリノリで考えてたじゃん！";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 17:
          var T_Name = "舞花";
          var Text = "あのときは…。(改行)エマとフレンズを組めたから(改行)テンション上がっちゃって…。";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 18:
          var T_Name = "エマ";
          var Text = "うんうん。(改行)かわいいやつめ！";
          Datas = [52,0,33,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 19:
          var T_Name = "あいね";
          var Text = "二人ともすっごく楽しそう。(改行)フレンズっていいな〜。";
          Datas = [52,0,22,0,0,0,34,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 20:
          var T_Name = Name;
          var Text = "……………";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 21:
          var C1 = "……………";
          var C2 = "あいね！私達もフレンズを組みましょう！";
          var C3 = 0;
          var C4 = 0;
          Datas = [52,22,0,26,C1,C2,C3,C4,24,22,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 22:
          Flag = R_S(Number,Flag,248);
          Flag[15] = true;//即決
          var T_Name = Name;
          var Text = "あいね！私達もフレンズを組みましょう！";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip,0,0,"即決！",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 23:
          var T_Name = "あいね";
          var Text = "わ〜っ…　うん！！";
          Datas = [52,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,23.1,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 23.1:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [52,0,22,0,0,0,35,0,T_Name,Text,Rewind,23,Number,248,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 24:
          Flag = R_S(Number,Flag,31);
          var T_Name = Name;
          var Text = "……………";
          Datas = [52,0,0,0,0,0,27,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 25:
          var T_Name = "";
          var Text = "その晩　" +Name+ "の自室";
          Datas = [3,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 26:
          var T_Name = Name;
          var Text = "あいね、私とフレンズになりましょう。";
          Datas = [4,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 27:
          var T_Name = Name;
          var Text = "フゥ…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 28:
          var T_Name = Name;
          var Text = "古今東西あらゆる占いで(改行)私とあいねの相性はバッチリだってわかったし…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 29:
          var T_Name = Name;
          var Text = "それに何より私の直感があいねとフレンズを組めば(改行)すごいことが起きるってビビっと訴えかけてる。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 30:
          var T_Name = Name;
          var Text = "あとは…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 31:
          var C1 = "ドラマチックな展開のフレンズ結成ね。";
          var C2 = "今すぐあいねに電話をかけましょう。";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,32,31.1,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 31.1:
          Flag = R_S(Number,Flag,248);
          Flag[16] = true;//電話
          var T_Name = Name;
          var Text = "もしもし？"+Name+"ちゃん？";
          if(Flag[17]){
            Rewind = 54.1;
            Before = 54.2;
          }
          Datas = [5,0,21,15,0,0,26,0,T_Name,Text,Rewind,Before,Number,31.2,Skip,0,0,"電話",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 31.2:
          var T_Name = Name;
          var Text = "あいね、私とフレンズになりましょう。";
          if(Flag[17]) Rewind = 54.1;
          else Rewind = 0;
          Datas = [5,0,21,0,0,0,26,0,T_Name,Text,Rewind,31.1,Number,31.3,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 31.3:
          var T_Name = "あいね";
          var Text = "わ〜っ…　うん！！";
          Datas = [5,0,21,0,0,0,26,0,T_Name,Text,Rewind,31.2,Number,248,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 32:
          Flag = R_S(Number,Flag,35);
          var T_Name = Name;
          var Text = "あとはドラマチックな展開あってのフレンズ結成ね。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 33:
          var T_Name = Name;
          var Text = "そう…ラブミーティアの二人みたいに。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 34:
          var T_Name = "";
          var Text = "ラブミーティアの結成について復習しておく？";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 35:
          var C1 = "はい";
          var C2 = "いいえ";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,36,51,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 36:
          Flag = R_S(Number,Flag,54);
          Flag[4] = true;
          var T_Name = Name;
          var Text = "ラブミーティアのドラマチック極まりない(改行)結成エピソードはもはや伝説。";
          Datas = [6,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 37:
          var T_Name = Name;
          var Text = "いえ、アイカツ界における神話とすらなっている。";
          Datas = [6,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 38:
          var T_Name = Name;
          var Text = "スターハーモニー学園に入って(改行)トップアイドルに駆け上がった(改行)カレンさんとミライさん。";
          Datas = [27,15,28,15,0,0,29,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 39:
          var T_Name = Name;
          var Text = "二人は出会ってすぐに意気投合したのだけど(改行)フレンズ結成にはあと一歩踏み込めないでいた。";
          Datas = [27,0,28,0,0,0,29,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 40:
          var T_Name = Name;
          var Text = "そんなとき　二人を揺るがす大事件が！(迫真)";
          Datas = [7,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 41:
          var T_Name = Name;
          var Text = "カレンさんは世界的プロデューサーから(改行)アイドルとしてプロデュースしたいという(改行)オファーを受けてアメリカに旅立つことになったのだ。";
          Datas = [53,15,0,0,0,0,28,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 42:
          var T_Name = "明日香ミライ";
          var Text = "カレン！";
          Datas = [53,0,29,15,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 43:
          var T_Name = "ミライ";
          var Text = "ハァ…ハァ…ハァ…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 44:
          var T_Name = "神城カレン";
          var Text = "ミライさん…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 45:
          var T_Name = "ミライ";
          var Text = "アメリカになんて行かせない。(改行)カレンをいちばん輝かせることができるのは…。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 46:
          var T_Name = "ミライ";
          var Text = "私なんだから！";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 47:
          var T_Name = "カレン";
          var Text = "…！";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 48:
          var T_Name = "カレン";
          var Text = "はい 知ってました。";
          Datas = [53,0,29,0,0,0,28,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 49:
          var T_Name = Name;
          var Text = "こうして二人はラブミーティアを結成したのであった…。";
          Datas = [8,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,false,false,"カレン強奪事件",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 50:
          var T_Name = Name;
          var Text = "う～っ…ハァ！ 何度読んでもやっぱりいい！！(改行)ずっと憧れていた…。(改行)私もフレンズを組むなら(改行)こんなふうにドラマチックにって。";
          Datas = [9,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 51:
          if(Flag[4]!=true) Flag = R_S(Number,Flag,54);
          var T_Name = Name;
          var Text = "ドラマチックな告白か…。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 52:
          var T_Name = Name;
          var Text = "う〜ん…　考えてみると難しい。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 53:
          var T_Name = Name;
          var Text = "自分がやるとなると想像がつかないというか。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 54:
          var C1 = "ココちゃんに相談してみましょう。";
          var C2 = "妥協して一刻も早くあいねとフレンズになるべきよ。";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,55,54.1,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 54.1:
          Flag[17] = true;//妥協
          var T_Name = Name;
          var Text = "ここは妥協して(改行)一刻も早くあいねとフレンズになるべきね。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,Number,54.2,248];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 54.2:
          var T_Name = Name;
          var Text = "そうと決まればさっそくあいねに電話しましょう。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,54.1,Number,31.1,248];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 55:
          Flag = R_S(Number,Flag,57);
          var T_Name = Name;
          var Text = "ハロー　ココちゃん。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 56:
          var T_Name = "ココ";
          var Text = "ココだよ。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 57:
          var C1 = "フレンズの誘い方を教えて。";
          var C2 = "ドラマチックな告白について教えて。";
          var C3 = "あいねのアイカツモバイルを盗聴して。";
          var C4 = 0;
          Datas = [5,1,0,26,C1,C2,C3,C4,57.1,76,58,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 57.1:
          Flag = R_S(Number,Flag,95);
          Flag[18] = true;//普通
          var T_Name = Name;
          var Text = "フレンズの誘い方を教えて。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,57.2,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 57.2:
          var T_Name = "ココ";
          var Text = "ココろえました！";
          Datas = [5,0,2,0,0,0,26,0,T_Name,Text,0,57.1,Number,57.3,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 57.3:
          var T_Name = "ココ";
          var Text = "フレンズの誘い方と言っても色々あるけど、(改行)どんな感じがいいかな？";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,57.2,Number,57.4,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 57.4:
          var T_Name = Name;
          var Text = "なるべくドラマチックなのでお願い。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,57.3,Number,85,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 58:
          Flag = R_S(Number,Flag,75);
          var T_Name = Name;
          var Text = "あいねのアイカツモバイルを盗聴して。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 59:
          var T_Name = "ココ";
          var Text = "ココろえ…";
          Datas = [5,0,2,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 60:
          var T_Name = "ココ";
          var Text = "え～っ！？アイカツモバイルを盗聴！？(改行)あいねちゃんの！？どうして！？";
          Datas = [5,0,3,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 61:
          var T_Name = Name;
          var Text = "あいねとフレンズになるための(改行)ドラマチックな告白を成功させるのに必要なの。";
          Datas = [5,0,3,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 62:
          var T_Name = "ココ";
          var Text = "う〜ん(改行)それでどうして盗聴が必要になるのかなぁ？";
          Datas = [5,0,4,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 63:
          var T_Name = Name;
          var Text = "あいねの趣味、生活を完璧に理解して(改行)あいねが喜ぶ完璧なエスコートをするためよ。";
          Datas = [5,0,4,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 64:
          var T_Name = "ココ";
          var Text = "えぇ…";
          Datas = [5,0,5,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 65:
          var T_Name = "ココ";
          var Text = "悪いけど、それはココが協力できることじゃないよ。";
          Datas = [5,0,5,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 66:
          var T_Name = "ココ";
          var Text = "ごめんなさい！";
          Datas = [5,0,6,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 67:
          var T_Name = Name;
          var Text = "う〜ん、それじゃあ盗聴機を仕込むしかないわね…(改行)何かいい方法は…";
          Datas = [5,0,6,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 68:
          var T_Name = "ココ";
          var Text = "…お友達どうしでアクセサリーを持つのが(改行)流行ってるみたいだよ。(改行)２つがそろうと１つになるデザインが人気みたいだね。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 69:
          var T_Name = Name;
          var Text = "なるほど、それに仕込めば…(改行)早速製作に取り掛かりましょう。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 70:
          var T_Name = "ココ";
          var Text = "…関係ないけど、ペットが迷子になった時のための(改行)首輪につけられる小さなGPS発信機っていうのも(改行)あるみたいだね。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 71:
          var T_Name = "ココ";
          var Text = "それがあれば、ココにも場所が表示できるよ。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 72:
          var T_Name = "ココ";
          var Text = "こんな風に。";
          Datas = [44,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,false,false,"犯行の手口",2];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 73:
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 74:
          var T_Name = "";
          var Text = "後日、アクセサリーを渡すことに成功した(改行)"+Name+"ちゃんはそれからしばらくして(改行)幸せなフレンズ生活をおくったのであった…。";
          Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 75:
          var T_Name = "ストーカーエンド";
          var Text = "疑惑はあるけど実際はこんな事してないよ！(改行)…たぶん。";
          Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,"ゲームオーバー",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 76:
          Flag = R_S(Number,Flag,81);
          var T_Name = Name;
          var Text = "ドラマチックな告白について教えて。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 77:
          var T_Name = "ココ";
          var Text = "ココろえ…";
          Datas = [5,0,2,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 78:
          var T_Name = "ココ";
          var Text = "え～っ！？ドラマチックな告白？";
          Datas = [5,0,7,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 79:
          var T_Name = "ココ";
          var Text = "そ…それって恋愛について知りたいってことだよね？";
          Datas = [5,0,8,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 80:
          var T_Name = "ココ";
          var Text = "さすが"+Name+"ちゃん大人だ！";
          Datas = [5,0,9,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 81:
          var C1 = "はい";
          var C2 = "いいえ";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,9,0,26,C1,C2,C3,C4,81.1,82,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 81.1:
          Flag = R_S(Number,Flag,121);
          Flag[20] = true;//悪ノリ
          var T_Name = Name;
          var Text = "(ここは乗っておきましょう。)(改行)そうなの。";
          Datas = [5,0,9,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,81.2,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 81.2:
          var T_Name = "ココ";
          var Text = "よ～し。ドラマチックな告白で検索。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,0,81.1,Number,81.3,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 81.3:
          var T_Name = "ココ";
          var Text = "こんな結果が出たよ。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,81.2,Number,118,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 82:
          Flag = R_S(Number,Flag,95);
          var T_Name = Name;
          var Text = "違う違う。フレンズになってくださいって(改行)ドラマチックに告白するにはってこと。";
          Datas = [5,0,9,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 83:
          var T_Name = "ココ";
          var Text = "あっ…";
          Datas = [5,0,10,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 84:
          var T_Name = "ココ";
          var Text = "そういうことか。";
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 85:
          if(Flag[18]) Before = 57.4;
          var T_Name = "ココ";
          var Text = "ドラマチックな告白で検索。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 86:
          var T_Name = "ココ";
          var Text = "あっ。";
          Datas = [5,0,12,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 87:
          var T_Name = "ココ";
          var Text = "こんな結果が出たよ。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 88:
          var T_Name = Name;
          var Text = "映画館で　ドラマチックに…。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 89:
          var T_Name = "イメージ";
          var Text = "(なぜか他に客がいない映画館)";
          Datas = [10,15,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 90:
          var T_Name = "イメージ";
          var Text = "(多分ペンギンが二時間ほどかっこつけるだけの映画)";
          Datas = [11,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 91:
          var T_Name = "イメージ";
          var Text = "(突然途切れる映像)";
          Datas = [12,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 92:
          var T_Name = "映像　"+Name;
          var Text = "あいね　私とフレンズになりましょう。";
          Datas = [13,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 93:
          var T_Name = "イメージ　あいね";
          var Text = "わぁ…";
          Datas = [14,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 94:
          var T_Name = "イメージ　あいね";
          var Text = "うん！！";
          Datas = [15,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 95:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　ないわね。";
          var C3 = 0;
          var C4 = 0;
          Datas = [15,0,0,0,C1,C2,C3,C4,95.1,96,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 95.1:
          Flag = R_S(Number,Flag,0);
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,95.2,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 95.2:
          var T_Name = "";
          var Text = "映画館を貸切るために"+Name+"ちゃんは(改行)バイトに明け暮れるのであった…。";
          Datas = ["Black",0,0,0,0,0,0,0,T_Name,Text,0,95.1,Number,"ゲームオーバー",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 96:
          Flag = R_S(Number,Flag,110);
          var T_Name = Name;
          var Text = "いや…　ないわね。";
          Datas = [5,0,1,0,0,0,30,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 97:
          var T_Name = "ココ";
          var Text = "そっか。";
          Datas = [5,0,13,0,0,0,30,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 98:
          var T_Name = "ココ";
          var Text = "だったら…。";
          Datas = [5,0,14,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 99:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          Datas = [5,0,15,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 100:
          var T_Name = "ココ";
          var Text = "(ピコン)";
          Datas = [5,0,12,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 101:
          var T_Name = Name;
          var Text = "ゲーム感覚でドラマチックに…。";
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 102:
          var T_Name = "イメージ　あいね";
          var Text = "失礼しま〜す。";
          Datas = [16,15,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 103:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          Datas = [17,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 104:
          var T_Name = "";
          var Text = "(中庭)";
          Datas = [18,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 105:
          var T_Name = "";
          var Text = "(レッスンルーム)";
          Datas = [19,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 106:
          var T_Name = "イメージ　あいね";
          var Text = "あっ…。";
          Datas = [20,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 107:
          var T_Name = "イメージ　あいね";
          var Text = "ん…。";
          Datas = [21,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 108:
          var T_Name = "イメージ　"+Name;
          var Text = "あいね　私と　フレンズになりましょう。";
          Datas = [22,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 109:
          var T_Name = "イメージ　あいね";
          var Text = "わ〜っ…　うん！！";
          Datas = [23,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 110:
          var C1 = "うん！　これよ！！";
          var C2 = "ドラマチックの意味をはき違えているような…";
          var C3 = 0;
          var C4 = 0;
          Datas = [23,0,0,0,C1,C2,C3,C4,110.1,111,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 110.1:
          Flag[19] = true;//ゲーム感覚
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,110.2,248];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 110.2:
          var T_Name = "";
          var Text = "見事成功し、(改行)"+Name+"ちゃんとあいねちゃんはフレンズになった。";
          Datas = [22,0,0,0,0,0,0,0,T_Name,Text,0,110.1,Number,248,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 111:
          Flag = R_S(Number,Flag,120);
          var T_Name = Name;
          var Text = "いや…　これって(改行)ドラマチックの意味をはき違えているような…";
          Datas = [5,0,0,0,0,0,30,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 112:
          var T_Name = "ココ";
          var Text = "う〜っ…　ココにも意地があるもん。";
          Datas = [5,0,16,0,0,0,30,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 113:
          var T_Name = "ココ";
          var Text = Name+"ちゃんが満足する答えを(改行)必ず見つけてみせるんだから！";
          Datas = [5,0,16,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 114:
          var T_Name = "ココ";
          var Text = "う〜ん…。";
          Datas = [5,0,17,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 115:
          var T_Name = "ココ";
          var Text = "°△°";
          Datas = [5,0,18,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 116:
          var T_Name = "ココ";
          var Text = "出た出た　出ました〜！";
          Datas = [5,0,19,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 117:
          var T_Name = "ココ";
          var Text = "最高にドラマチックな告白ができるスポットを(改行)見つけたよ！";
          Datas = [5,0,20,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 118:
          if(Flag[20]) Before = 81.3;
          var T_Name = "ココ";
          var Text = "この観覧車でゴンドラが(改行)一番高くなったところで告白すると";
          Datas = [24,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 119:
          if(Flag[20]){
            After = 121;
            Skip = 0;
          }
          var T_Name = "ココ";
          var Text = "二人はず〜っと　幸せになれるんだって。";
          Datas = [25,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 120:
          var C1 = "うん！　これよ！！";
          var C2 = "これって男女の恋愛じゃない？";
          var C3 = 0;
          var C4 = 0;
          Datas = [25,0,0,0,C1,C2,C3,C4,121,121.1,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 121.1:
          Flag = R_S(Number,Flag,134);
          var T_Name = Name;
          Flag[21] = true;//疑惑
          var Text = "これって男女の恋愛じゃない？";
          After = 121.2;
          Datas = [5,0,1,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 121.2:
          var T_Name = "ココ";
          var Text = "…？それがどうかした？";
          Rewind = 0;
          Before = 121.1;
          After = 121.3;
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 121.3:
          var T_Name = Name;
          var Text = "…そうね！たいした問題じゃないわ！";
          Before = 121.2;
          After = 121.4;
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 121.4:
          var T_Name = Name;
          var Text = "…そうね！たいした問題じゃないわ！(改行)ドラマチックだし！";
          Before = 121.3;
          After = 122;
          Datas = [5,0,11,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 121:
          Flag = R_S(Number,Flag,134);
          var T_Name = Name;
          var Text = "うん！　これよ！！";
          Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 122:
          if(Flag[21]) Before = 121.4;
          var T_Name = "後日";
          var Text = "学校の中庭";
          Datas = [27,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,122.9,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 122.9:
          var T_Name = "あいね";
          var Text = "うわ〜っ　うれしい！(改行)"+Name+"ちゃんと　遊びにいけるなんて楽しみだな。";
          Datas = [27,0,22,15,0,0,26,15,T_Name,Text,Rewind,122,Number,123,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 123:
          var T_Name = Name;
          var Text = "今度の土曜　休みが取れたから(改行)久しぶりに　あいねと…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 124:
          var T_Name = "あいね";
          var Text = "今度の土曜…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 125:
          var T_Name = Name;
          var Text = "もしかして　何か用事があった？(凄く悲しげな顔)";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 126:
          var T_Name = "あいね";
          var Text = "うん…　ブランド選びのときに　友達になった(改行)なこちゃんがこっちに来るから(改行)会おうって約束したの。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 127:
          var T_Name = Name;
          var Text = "なこちゃんって　名古屋で　アイカツしてる子ね？";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 128:
          var T_Name = "あいね";
          var Text = "うん！　友達になってから(改行)ずっと　やり取りしてたんだ。";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 129:
          var T_Name = Name;
          var Text = "あいねと会って相談がしたい…。";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 130:
          var T_Name = "あいね";
          var Text = "うん　何だろうね？";
          Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 131:
          var T_Name = Name;
          var Text = "あっ…。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 132:
          var T_Name = Name;
          var Text = "(相談って　まさか…)";
          Datas = [29,0,23,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 133:
          var T_Name = "あいね";
          var Text = "そうだ。　なこちゃんと私たち三人で遊びにいこうよ。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 134:
          var C1 = "そうね。";
          var C2 = "私のあいねを誑かすなんて許せない。";
          var C3 = "相談があるなら二人の方がいいでしょう。";
          var C4 = 0;
          Datas = [27,22,0,26,C1,C2,C3,C4,133.1,134.1,135,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 134.1:
          Flag = R_S(Number,Flag,137);
          var T_Name = Name;
          Flag[22] = true;//嫉妬
          After = 134.2;
          var Text = "(…私のあいねを誑かすなんて許せない。)";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 134.2:
          var T_Name = Name;
          Rewind = 0;
          Before = 134.1;
          After = 134.9;
          var Text = "いえ。私は遠慮しておくわ。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 134.9:
          Rewind = 0;
          Before = 135;
          After = 136;
          if(Flag[22]){
            Rewind = 134.1;
            Before = 134.2;
          }
          var T_Name = Name;
          var Text = "相談があるなら　二人の方がいいでしょう？";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135:
          Flag = R_S(Number,Flag,137);
          var T_Name = Name;
          After = 134.9;
          var Text = "ううん。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.1:
          var T_Name = Name;
          var Text = "あ、そうだ。(改行)コレをなこちゃんに。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,135.2,135.5,"0600,0250,15",3];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.2:
          var T_Name = "あいね";
          var Text = "ラブミーティアのCD…？ いいの？";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,135.1,Number,135.3,135.5,"0600,0250,0",3];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.3:
          var T_Name = Name;
          var Text = "ええ。それは布教用だから。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,135.1,135.2,Number,135.4,135.5,"0600,0250,0",3];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.4:
          var T_Name = "あいね";
          var Text = "…？ ありがとう、"+Name+"ちゃん。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,135.1,135.3,Number,135.5,0,"0600,0250,0",3];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 135.5:
          Flag[6] = false;
          core.assets["sound/プライド.wav"].stop();
          core.assets["sound/プライド.wav"].onplaying = false;
          core.pushScene(ItemgetScene(3,"プライドを明け渡した。",135.6,Flag));
          break;
        case 135.6:
          var T_Name = "あいね";
          var Text = "それじゃあまたね。";
          Datas = [27,0,22,0,0,0,26,0,T_Name,Text,0,0,Number,136,137,0,0,"使途",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 136:
          if(Flag[22]) Rewind = 134.1;
          else Rewind = 135;
          var T_Name = "";
          var Text = "土曜日";
          Datas = [5,0,0,0,0,0,26,30,T_Name,Text,Rewind,134.9,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 137:
          if(Flag[5]==true){
            Rewind = 0;
            Before = 0;
          }
          else{
            Rewind = 135;
            Before = 136;
            if(Flag[22]) Rewind = 134.1;
          }
          var C1 = "(今日は計画を練りましょう。)";
          var C2 = "(気になるわ…。こっそり行動を監視しましょう。)";
          var C3 = "調べる";
          var C4 = 0;
          Datas = [5,0,0,26,C1,C2,C3,C4,12345,138,0,0,Rewind,Before,Number];
          if(Flag[5]) Datas[0] = 55;
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 12345:
          Flag = R_S(Number,Flag,147);
          var Text = "…";
          Flag[27] = true;
          Datas = [5,0,0,0,0,0,26,0,Name,Text,Rewind,Before,Number,After,Skip];
          if(Flag[5]) Datas[0] = 55;
          core.replaceScene(MainScene(Datas,Return,Flag));
          break
        case 12346:
          var Text = "…ダメ！";
          Datas = [5,0,0,0,0,0,26,0,Name,Text,Rewind,Before,Number,After,Skip];
          if(Flag[5]) Datas[0] = 55;
          core.replaceScene(MainScene(Datas,Return,Flag));
          break
        case 12347:
          var Text = "…ダメ！やっぱり気になる！";
          Datas = [5,0,0,0,0,0,26,0,Name,Text,Rewind,Before,Number,138,Skip];
          if(Flag[5]) Datas[0] = 55;
          core.replaceScene(MainScene(Datas,Return,Flag));
          break
        case 12348:
          Datas = [32,"何文字書けるかのテストです","「一二三四五六七八九零一二三四五六七八九零一二三四(改行)一二三四五六七八九零一二三四五六七八九零一二三四五(改行)一二三四五六七八九零一二三四五六七八九零一二三四五(改行)一二三四五六七八九零一二三四五六七八九零一二三四五(改行)一二三四五六七八九零一二三四五六七八九零一二三四」",1,Before,Number,Before,137,"アイカツカード"];
          core.replaceScene(InterrogationScene(Datas,Flag));
          break
        case 1138:
          var T_Name = Name;
          var Text = "あいねの為にデザインしたドレス…(改行)ピンクパートナーコーデのアイカツカードね。";
          if(Flag[9]){
            Text = "やっぱり必要な気がする。";
            After = 1140;
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,0,After,0,"0290,0252,15",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 1139:
          var T_Name = Name;
          var Text = "一応…持っておこうかな。";
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,0,After,0,"0290,0252,00",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 1140:
          Flag[5] = true;
          if(Flag[9]) After = 137;
          core.pushScene(ItemgetScene(1,"アイカツカードを手に入れた。",After,Flag));
          break;
        case 1141:
          var T_Name = Name;
          var Text = "あと、ついでに双眼鏡も。";
          Datas = [55,0,0,0,0,0,26,0,T_Name,Text,0,0,0,After,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 1142:
          Flag[9] = true;
          After = 137;
          if(Flag[22]) After = 1146;
          core.pushScene(ItemgetScene(2,"双眼鏡を手に入れた。",After,Flag));
          break;
        case 1143:
          Flag[5] = false;
          var T_Name = Name;
          var Text = "やっぱり、アイカツカードは置いておきましょう。";
          Datas = [55,0,0,0,0,0,26,0,T_Name,Text,0,0,0,137,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 1144:
          var T_Name = Name;
          var Text = "ラブミーティアのCDがある。";
          if(Flag[6]) Text = "まだCDがある。";
          if(Flag[7]) Text = "更にもう一枚。";
          if(Flag[8]){
            Text = "さすがにもうない。";
            After = "シーンを外す";
            if(Flag[23]&&Flag[24]==false){
              Text = "あれ？これは…。";
              After = 1148;
            }
          }
          Datas = [5,0,0,0,0,0,26,0,T_Name,Text,0,0,0,After,0];
          if(Flag[5]) Datas[0] = 55;
          core.pushScene(MainScene(Datas,Return,Flag));
          break;
        case 1145:
          if(Flag[6]){
            if(Flag[7]){
              Flag[8] = true;
              core.pushScene(ItemgetScene(5,"永遠の灯のCDを手に入れた。","シーンを外す",Flag));
            }
            else {
              Flag[7] = true;
              core.pushScene(ItemgetScene(4,"偶然、必然。のCDを手に入れた。","シーンを外す",Flag));
            }
          }
          else {
            Flag[6] = true;
            core.pushScene(ItemgetScene(3,"プライドのCDを手に入れた。","シーンを外す",Flag));
          }
          break;
        case 1146:
          var T_Name = Name;
          var Text = "…。";
          Datas = [55,0,0,0,0,0,26,0,T_Name,Text,0,0,0,After,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 1147:
          Flag[23] = true;
          After = 137;
          core.pushScene(ItemgetScene(6,"使い古された包丁をそっと鞄にしまった。",After,Flag));
          break;
        case 1148:
          Flag[24] = true;
          core.pushScene(ItemgetScene(7,"時の魔術師のカードを入手した。","シーンを外す",Flag));
          break;
        case 138:
          if(Flag[27]) Before = 12347;
          else Flag = R_S(Number,Flag,147);
          var T_Name = "";
          var Text = "駅前";
          Datas = [30,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 139:
          var T_Name = "海老原なこ";
          var Text = "わぁ。";
          Datas = [30,0,0,0,24,15,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 140:
          var T_Name = "あいね";
          var Text = "お〜い！なこちゃん！";
          Datas = [30,0,22,15,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 141:
          var T_Name = "なこ";
          var Text = "あいねちゃん！";
          Datas = [30,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 142:
          var T_Name = "なこ";
          var Text = "久しぶり！ウフフ。";
          Datas = [30,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 143:
          var T_Name = Name;
          var Text = "(わざわざ　こっちに来てまで(改行) 相談したい事ってあいねと(改行) フレンズを組みたいって事なんじゃ…)";
          Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 144:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 145:
          var T_Name = "なこ";
          var Text = "あいねちゃんちのカフェか。(改行)一度　来てみたかったんだよね。";
          Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 146:
          var T_Name = "";
          var Text = "～～";
          Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 147:
          var T_Name = "多分山下公園";
          var Text = "その後も街を巡る二人。";
          Skip = 172;
          Datas = [33,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 148:
          Flag = R_S(Number,Flag,172);
          var T_Name = "あいね";
          var Text = "あれ？"+Name+"ちゃん？";
          Datas = [56,0,24,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 149:
          var T_Name = "なこ";
          var Text = "えっ？";
          Datas = [56,0,24,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 150:
          var T_Name = Name;
          var Text = "あっ…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 151:
          var T_Name = Name;
          var Text = "(しまった。近づきすぎた…)";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 152:
          var T_Name = Name;
          var Text = "あっ…えっと、やっぱり気になっちゃって。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 153:
          var T_Name = "あいね";
          var Text = "そうなんだ。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 154:
          var T_Name = "なこ";
          var Text = "そうだ。"+Name+"ちゃんにも聞いて欲しいな。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 155:
          var T_Name = Name;
          var Text = "え。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 156:
          var T_Name = "なこ";
          var Text = "私ね、この間イベントで知り合った子と(改行)すっごく仲良くなって(改行)そのことフレンズを組みたいって思ってるんだけど…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 157:
          var T_Name = "なこ";
          var Text = "私は中学を卒業するまで名古屋にいるつもりだから(改行)遠距離フレンズがうまくいくか不安で…";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 158:
          var T_Name = "なこ";
          var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 159:
          var T_Name = Name;
          var Text = "なれる！仲がいいなら絶対なれるわ！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 160:
          var T_Name = "なこ";
          var Text = "ありがとう！そう言ってくれると勇気出てくるよ！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 161:
          var T_Name = "着信音";
          var Text = "(ピロリ)";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 162:
          var T_Name = "なこ";
          var Text = "あっ仕事終わったからこれから会おう。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 163:
          var T_Name = "なこ";
          var Text = "よ〜し！(改行)"+Name+"ちゃんのおかげで勇気出たし、(改行)フレンズ組もうって申し込んでみるよ。";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 164:
          var T_Name = "なこ";
          var Text = "また遊ぼうね、あいねちゃん！(改行)あいねちゃんも頑張ってね！";
          Datas = [56,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 165:
          var T_Name = Name;
          var Text = "\"あいねちゃんも…？\"";
          Datas = [56,0,26,0,0,0,24,-15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 166:
          var T_Name = "あいね";
          var Text = "うん！私も"+Name+"ちゃんとフレンズになる為の相談を…。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 167:
          var T_Name = "あいね";
          var Text = "あ。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 168:
          var T_Name = Name;
          var Text = "え。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 169:
          var T_Name = "あいね";
          var Text = "……私も、"+Name+"ちゃんとフレンズを組みたい！";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 170:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 171:
          var T_Name = "あいね";
          var Text = "ダメ、かな…？";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 172:
          Flag = R_S(148,Flag,172);
          var T_Name = Name;
          Flag[14] = true;
          var Text = "ううん。(改行)私も フレンズを組むなら(改行)あいねしかいないって思ってた。";
          Datas = [56,0,26,0,0,0,22,0,T_Name,Text,148,171,Number,248,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 173:
          Flag = R_S(Number,Flag,188);
          var T_Name = Name;
          var Text = "これって…。";
          Datas = [34,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 174:
          var T_Name = Name;
          var Text = "フレンズ結成の流れにしか見えないんだけど。";
          Datas = [35,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 175:
          var T_Name = "どうみても赤レンガ倉庫";
          var Text = "";
          Datas = [36,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 176:
          var T_Name = "なこ";
          var Text = "うわ〜っ…。綺麗…。";
          Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 177:
          var T_Name = "あいね";
          var Text = "でしょう？(改行)なこちゃんにもこの景色を見せたかったんだ。";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 178:
          var T_Name = Name;
          var Text = "ここって…。";
          Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 179:
          var T_Name = Name;
          var Text = "(ココちゃんが言ってた観覧車…)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 180:
          var T_Name = Name;
          var Text = "(あいねとなこちゃんもそれを知ってて…)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 181:
          var T_Name = "なこ";
          var Text = "それでね、あいねちゃんに相談なんだけど。";
          Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 182:
          var T_Name = "あいね";
          var Text = "うん。";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 183:
          var T_Name = "なこ";
          var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 184:
          var T_Name = Name;
          var Text = "あっ…。";
          Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 185:
          var T_Name = "あいね";
          var Text = "うん！　気持ちがつながっていればきっとなれるよ。";
          Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 186:
          var T_Name = Name;
          var Text = "…。";
          Datas = [36,0,26,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 187:
          var T_Name = Name;
          var Text = "(本当に…それでいいの？)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 188:
          var C1 = "奪い取る";
          var C2 = "それでいい";
          var C3 = "殺してでも奪い取る";
          var C4 = 0;
          Datas = [36,26,0,0,C1,C2,C3,C4,189,0,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 189:
          Flag = R_S(Number,Flag,204);
          var T_Name = Name;
          var Text = "(私のフレンズはあいねしかいない。)";
          Datas = [36,0,26,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 190:
          var T_Name = Name;
          var Text = "(この気持ちに嘘はつけない！)";
          Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 191:
          var T_Name = "あいね";
          var Text = "えっ？　"+ Name.substring(0,1) +"…"+Name+"ちゃん？";
          Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 192:
          var T_Name = "なこ";
          var Text = "えっ？";
          Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 193:
          var T_Name = Name;
          var Text = "来て…　あいね！";
          Datas = [38,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 194:
          var T_Name = "あいね";
          var Text = "えっ？え〜！？";
          Datas = [39,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 195:
          var T_Name = "なこ";
          var Text = "…？";
          Datas = [36,0,24,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 196:
          var T_Name = "あいね";
          var Text = Name+"ちゃんどうしてここに？";
          Datas = [40,0,22,15,0,0,26,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 197:
          var T_Name = Name;
          var Text = "あいねにどうしても伝えたいことがあるの。";
          Datas = [40,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 198:
          var T_Name = "";
          var Text = "観覧車";
          Datas = [43,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 199:
          var T_Name = "あいね";
          var Text = "ねぇねぇ　伝えたいことって何？何？何？";
          Datas = [41,0,22,15,0,0,26,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 200:
          var T_Name = Name;
          var Text = "…！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 201:
          var T_Name = Name;
          var Text = "(勢いで連れて来ちゃったけど、(改行)観覧車ってこんなに遅いの？)";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 202:
          var T_Name = Name;
          var Text = "(一番上までどれくらいかかるのよ…)";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 203:
          var T_Name = "あいね";
          var Text = "早く聞かせてよ〜！"+Name+"ちゃん！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 204:
          var C1 = "もうちょっと待って";
          var C2 = "ドラマチックとかどうでもいい！";
          var C3 = 0;
          var C4 = 0;
          Datas = [41,22,0,26,C1,C2,C3,C4,205,0,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 205:
          Flag = R_S(Number,Flag,208);
          var T_Name = Name;
          var Text = "も…もうちょっと待って。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 206:
          var T_Name = "あいね";
          var Text = "え〜！もったいつけられると余計気になるよ〜！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 207:
          var T_Name = "あいね";
          var Text = "教えて教えてー！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208:
          var T_Name = Name;
          var Text = "ちょっ…　";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,0];
          if(Flag[5]!=true) Datas[13] = 208.1;
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.1:
          Flag = R_S(Number,Flag,208.9);
          var T_Name = Name;
          var Text = "ちょっ…　そんなに動いたら…";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,208.2,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.2:
          var T_Name = "観覧車";
          var Text = "ガタン！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,0,208.1,Number,208.3,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.3:
          var T_Name = "あいね";
          var Text = "あっ…止まっちゃった？";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,208.2,Number,208.4,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.4:
          var T_Name = "アナウンス";
          var Text = "困りますよお客さん。(改行)危険なので緊急停止しました。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,208.3,Number,208.5,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.5:
          var T_Name = "あいね "+Name;
          var Text = "あ…。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,208.4,Number,208.6,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.6:
          var T_Name = "あいね";
          var Text = "ごめんなさい…。";
          Datas = [40,0,22,15,0,0,26,15,T_Name,Text,Rewind,208.5,Number,208.7,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.7:
          var T_Name = Name;
          var Text = "(完全にタイミングを失ってしまった…。)";
          Datas = ["Black",10,23,0,0,0,26,0,T_Name,Text,Rewind,208.6,Number,208.8,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.8:
          var T_Name = "お叱りエンド";
          var Text = "このエンドにたどり着くとはなかなかやりますね！";
          Datas = ["Black",0,23,0,0,0,26,0,T_Name,Text,Rewind,208.7,Number,208.9,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 208.9:
          var T_Name = "お叱りエンド";
          var Text = "このエンドにたどり着くとはなかなかやりますね！(改行)ゲームオーバーですが。";
          Datas = ["Black",0,23,0,0,0,26,0,T_Name,Text,Rewind,208.8,Number,"ゲームオーバー",0,false,false,"やっぱり必要だった",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 209:
          Flag = R_S(Number,Flag,212);
          Flag[5] = false;
          var T_Name = Name;
          var Text = "ちょっ…　あっ！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0852,15",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 210:
          var T_Name = "あいね";
          var Text = "…？";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0852,0",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 211:
          var T_Name = "あいね";
          var Text = "アイカツカード…？(改行)これって"+Name+"ちゃんがデザインしたドレスだよね？";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0450,0",1];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 212:
          var C1 = "…";
          var C2 = "そうよ…";
          var C3 = 0;
          var C4 = 0;
          Datas = [41,22,0,26,C1,C2,C3,C4,205,213,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 213:
          Flag = R_S(Number,Flag,215);
          var T_Name = Name;
          var Text = "そうよ…(改行)あいねのためにデザインしたの。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 214:
          var T_Name = "あいね";
          var Text = "私のため？";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 215:
          var C1 = "…";
          var C2 = "ドラマチックとかどうでもいい！";
          var C3 = 0;
          var C4 = 0;
          Datas = [41,22,0,26,C1,C2,C3,C4,0,216,0,0,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 216:
          Flag = R_S(Number,Flag,248);
          var T_Name = Name;
          var Text = "あ〜！もう！(改行)こうなったらドラマチックとかどうでもいい！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 217:
          var T_Name = "あいね";
          var Text = Name + "ちゃん(改行)立つと危ないよ！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 218:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 219:
          var T_Name = Name;
          var Text = "あいね…。(改行)私とフレンズになって。";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 220:
          var T_Name = "あいね";
          var Text = "え…";
          if(Flag[4]) After = 221;
          else After = 222;
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 221:
          var T_Name = "汽笛";
          var Text = "ボー";
          Datas = [42,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 222:
          var T_Name = "あいね";
          var Text = "…";
          if(Flag[4]){
            Before = 221;
            var a = 15;
          }
          else{
            Before = 220;
            var a = 0;
          }
          Datas = [41,0,22,a,0,0,26,a,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 223:
          var T_Name = Name;
          var Text = "(そっか…)";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 224:
          var T_Name = Name;
          var Text = "(そっか…(改行) そうよね。あいねはなこちゃんと…)";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 225:
          var T_Name = "あいね";
          var Text = "うわ〜っ！嬉しい！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 226:
          var T_Name = "あいね";
          var Text = "うわ〜っ！嬉しい！(改行)ありがとう！"+Name+"ちゃん！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 227:
          var T_Name = "あいね";
          var Text = "うわ〜っ！嬉しい！(改行)ありがとう！"+Name+"ちゃん！(改行)私も"+Name+"ちゃんとフレンズになりたいって(改行)すっごくすっごく思ってた！";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 228:
          var T_Name = Name;
          var Text = "あいね…";
          Datas = [41,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 229:
          var T_Name = "(ココ)";
          var Text = "(この観覧車でゴンドラが(改行) 一番高くなったところで告白すると(改行) 二人はず〜っと　幸せになれるんだって。)";
          Datas = [46,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 230:
          var T_Name = "なこ";
          var Text = "フレンズ結成おめでとう！(改行)あいねちゃん。";
          Datas = [36,0,22,15,0,0,24,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 231:
          var T_Name = "あいね";
          var Text = "うん！ありがとう。";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 232:
          var T_Name = "なこ";
          var Text = "ほんとよかったね、あいねちゃん(改行)"+Name+"ちゃんとフレンズになる為に(改行)すごく頑張ってたもんね。";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 233:
          var T_Name = Name;
          var Text = "え。";
          Datas = [36,0,26,15,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 234:
          var T_Name = "なこ";
          var Text = "目指せ　ランニング100万キロ！とか。";
          Datas = [36,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 235:
          var T_Name = "あいね";
          var Text = "わ〜っ　わ〜っ　わ〜っ！";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 236:
          var T_Name = "あいね";
          var Text = "わ〜っ　わ〜っ　わ〜っ！(改行)それ　"+Name+"ちゃんに言っちゃだめ！";
          Datas = [36,0,22,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 237:
          var T_Name = Name;
          var Text = "100万キロって地球何十周分よ？";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 238:
          var T_Name = Name;
          var Text = "ごめんね。なこちちゃんもあいねとフレンズを…。";
          Datas = [36,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 239:
          var T_Name = "着信音";
          var Text = "(ピロリ)";
          Datas = [36,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 240:
          var T_Name = "なこ";
          var Text = "あっ仕事終わったからこれから会おう。";
          Datas = [36,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 241:
          var T_Name = "なこ";
          var Text = "あっ仕事終わったからこれから会おう。(改行)よ〜し！　あいねちゃんのおかげで勇気出たし、(改行)私もフレンズ組もうって申し込んでみるよ。";
          Datas = [36,0,26,0,0,0,24,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 242:
          var T_Name = "なこ";
          var Text = "あっ仕事終わったからこれから会おう。(改行)よ〜し！　あいねちゃんのおかげで勇気出たし、(改行)私もフレンズ組もうって申し込んでみるよ。(改行)また遊ぼうね、あいねちゃん！";
          Datas = [36,0,26,0,0,0,24,-15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 243:
          var T_Name = Name;
          var Text = "えっと…　どういうこと？";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 244:
          var T_Name = "あいね";
          var Text = "なこちゃん　この間イベントで知り合った子と(改行)すっごく仲良くなって　そのことフレンズを組みたい(改行)って思ってたんだけど";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 245:
          var T_Name = "あいね";
          var Text = "なこちゃんは中学を卒業するまで(改行)名古屋にいるつもりだから(改行)遠距離フレンズがうまくいくか不安だった見たい。";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 246:
          var T_Name = Name;
          var Text = "…";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 247:
          var T_Name = Name;
          var Text = "…(改行)そういうことか。";
          Datas = [36,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 248:
          Flag = R_S(Number,Flag,254);
          Flag[9] = false;
          var T_Name = "パシフィコ横浜";
          var Text = "(フレンズ結成お披露目ライブ)";
          Datas = [47,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 249:
          var T_Name = Name;
          var Text = "ここからだよ。";
          Datas = [48,0,22,15,0,0,26,15,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 250:
          var T_Name = "あいね";
          var Text = "うん。";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 251:
          var T_Name = Name;
          var Text = "ここから、私たちのアイカツの、(改行)新しい一歩がスタートする。";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 252:
          var T_Name = "あいね";
          var Text = "なんか緊張する…。でも…";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 253:
          var T_Name = "あいね";
          var Text = "なんか緊張する…。でも…(改行)"+Name+"ちゃんとフレンズを組めば(改行)きっとすごいことが起きるって(改行)すっごくドキドキしてるんだ。";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 254:
          var C1 = "ええ。";
          var C2 = "もちろん！";
          var C3 = "私もそう思う。";
          var C4 = 0;
          if(Flag[4]) C4 = "うん　知ってた。";
          Datas = [48,22,0,26,C1,C2,C3,C4,255,256,257,258,Rewind,Before,Number];
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 255:
          Flag = R_S(Number,Flag,260);
          Flag[11] = true;
          var T_Name = Name;
          var Text = "ええ。";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,259,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 256:
          Flag = R_S(Number,Flag,260);
          Flag[12] = true;
          var T_Name = Name;
          var Text = "もちろん！私たちでビッグバンを起こすのよ！";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,259,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 257:
          Flag = R_S(Number,Flag,260);
          Flag[13] = true;
          var T_Name = Name;
          var Text = "私もそう思う。";
          Datas = [48,0,22,0,0,0,26,0,T_Name,Text,Rewind,Before,Number,259,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 258:
          Flag[10] = true;
          Flag = R_S(Number,Flag,260);
          var T_Name = Name;
          var Text = "うん　知ってた。";
          Datas = [50,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 259:
          if(Flag[10]) Before = 258;
          if(Flag[11]) Before = 255;
          if(Flag[12]) Before = 256;
          if(Flag[13]) Before = 257;
          var T_Name = "二人";
          var Text = "私たち　ピュアパレットです！";
          Datas = [49,0,0,0,0,0,0,0,T_Name,Text,0,Before,Number,After,Skip];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 260:
          var Percent = 0;
          if(Flag[4]) Percent += 50;
          if(Flag[10]) Percent += 50;
          var T_Name = "クリア";
          var Text = "正解率"+Percent+"パーセント";
          Datas = [49,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,"ゲームオーバー",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 261:
          var C1 = "調べる";
          var C2 = "つきつける";
          var C3 = "やめる";
          var C4 = 0;
          Datas = [59,0,0,0,C1,C2,C3,C4,0,0,137,0,0,0,Number];
          if(Flag[25]) Datas[0] = 60;
          if(Flag[26]) Datas[0] = 61;
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case 262:
          var T_Name = Name;
          var Text = "…";
          Datas = ["Transparent",0,0,0,0,0,0,0,T_Name,Text,0,0,0,263,0,"0600,0250,0",7];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
        case 263:
          var T_Name = Name;
          var Text = "……特に意味はないけど楽しいわねコレ。";
          Datas = ["Transparent",0,0,0,0,0,0,0,T_Name,Text,0,0,0,"シーンを外す",0,"0600,0250,0",7];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
          case 264:
            var Text = "簡単にひしゃげそうだ。";
            var T_Name = Name;
            if(Flag[25]) Text = "光り輝いている。";
            if(Flag[26]) Text = "目も当てられない。";
            Datas = [59,0,0,0,0,0,0,0,Name,Text,0,0,0,"シーンを外す",0];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.pushScene(MainScene(Datas,Return,Flag));
            break;
          case "双眼鏡":
          var Text = "双眼鏡ね。尾行に使えるわ。";
          Datas = [58,0,0,0,0,0,26,0,Name,Text,0,0,0,"シーンを外す",0];
          core.pushScene(MainScene(Datas,Return,Flag));
          break;
          case "時の魔術師":
            var Text = "よ～し。時の魔術師を召喚！";
            Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,"時の魔術師1",0,"0290,0252,15",7];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(MainScene(Datas,Return,Flag));
            break;
          case "時の魔術師1":
            var Text = "時の魔術師の効果発動！";
            Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,"時の魔術師2",0,"0290,0252,0",7];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(MainScene(Datas,Return,Flag));
            break;
          case "時の魔術師2":
            var Text = "時の魔術師の効果発動！(改行)タイムルーレット！！";
            Datas = [59,0,0,0,0,0,26,0,Name,Text,0,0,0,"時の魔術師3",0,"0290,0252,0",7];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(MainScene(Datas,Return,Flag));
            break;
          case "時の魔術師3":
            var Text = "…";
            Datas = [59,0,0,0,0,0,26,0,"",Text,0,0,0,"時の魔術師4",0,"0290,0252,0",7];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(MainScene(Datas,Return,Flag));
            break;
          case "時の魔術師4":
            if(rand(1)==0){
              var Text = "……成功！";
              After = "成功"
            }
            else{
              var Text = "……失敗！"
              After = "失敗";
            }
            Datas = [59,0,0,0,0,0,26,0,"",Text,0,0,0,After,0,"0290,0252,0",7];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(MainScene(Datas,Return,Flag));
            break;
            case "成功":
              Flag[25] = true;//包丁強靭
              Flag[26] = false;//包丁折れる
              Text = "新品で強靭な包丁になった！"
              After = "処理";
              core.pushScene(ItemgetScene(8,Text,After,Flag));
              break;
            case "失敗":
              Flag[25] = false;//包丁強靭
              Flag[26] = true;//包丁折れる
              Text = "包丁が折れてしまった！"
              After = "処理";
              core.pushScene(ItemgetScene(9,Text,After,Flag));
              break;
            case "処理":
              core.popScene();
              core.popScene();
              Scene_loads(261,true,Flag,false);
              break;
        case "タイトルに戻る":
          core.replaceScene(TitleScene());
          break;
        case "シーンを外す":
          core.popScene();
          break;
        case "ゲームオーバー":
          //(背景,左,中,右,C1,C2,C3,C4,1,2,3,4,前,現在)
          Datas = [54,0,0,0,"タイトルに戻る",0,0,0,"タイトルに戻る","セーブ読み込み",0,0,0,0,Number];
          if(window.localStorage.getItem("Save")=="マニュアル") Datas[5] = "セーブ読み込み";
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        case "未設定":
          Datas = ["Black",0,0,0,0,0,0,0,"作者","開発中",0,0,0,"シーンを外す",0];
          core.pushScene(MainScene(Datas,Return,Flag));
          break;
        default:
          //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,前,今,次,トロフィー,トロフィー画像
          Datas = [54,0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,"ゲームオーバー",0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
      }
    }
    function Inspect_loads(Number,Flag,Item){
      var Name = window.localStorage.getItem("name");
      var Datas = [];
      //[背景,(幅,高,x座標,y座標,シーンロード又はfalse以外,シーンナンバー]
      if(Item){
        switch (Item) {
          case "双眼鏡":
            Datas = [58,917,717,333,85,"しない","双眼鏡"];
            core.pushScene(InspectScene(Datas,Flag,false));
            break;
          case "使い古された包丁":
          case "新品で強靭な包丁":
          case "折れた包丁":
            if(Number==261){
              Datas = [59,1069,900,266,0,"シーンロード",264];
              if(Flag[25]) Datas[0] = 60;
              if(Flag[26]) Datas[0] = 61;
              core.replaceScene(InspectScene(Datas,Flag,false));
              break;
            }
            Datas = [59,1069,900,266,0,"シーンロード",Number];
            if(Flag[25]) Datas[0] = 60;
            if(Flag[26]) Datas[0] = 61;
            core.replaceScene(InspectScene(Datas,Flag,"包丁"));
            break;
          default:
            Datas = ["Black",1600,900,0,0,"しない","未設定"];
            core.pushScene(InspectScene(Datas,Flag,false));
            break;
        }
        return;
      }
      switch (Number) {
        case 137:
          Datas = [5,367,553,1219,309,"シーンロード",1138,158,567,0,333,"しない",1144];
          if(Flag[5]){
            Datas[0] = 55;
            Datas[6] = 1143;
          }
          core.pushScene(InspectScene(Datas,Flag,false));
          break;
        case 261:
          Datas = [59,1069,900,266,0,"シーンロード",264];
          if(Flag[25]) Datas[0] = 60;
          if(Flag[26]) Datas[0] = 61;
          core.pushScene(InspectScene(Datas,Flag,false));
          break;
          core.pushScene(InspectScene(Datas,Flag,false));
          break;
        default:
          Datas = ["Black",1600,900,0,0,"しない","未設定"];
          core.pushScene(InspectScene(Datas,Flag,false));
          break;
      }
      return;
    }
    var TitleScene = function(){

      if(window.localStorage.getItem("syoken")!="false"){
        var Data = false;
        Flag = [];
        window.localStorage.setItem("Item",Item_Flag);
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("Pages",Pages);
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
        Scene_loads(1,false,false,false);
      });

      Continuation.addEventListener('touchstart',function(e){
        if(Continuation.text == "▶ 説明") Scene_loads(-1,false,false,false);
        else Scene_loads("セーブ読み込み",false,false,false);
      });

      Clear.addEventListener('touchstart',function(e){
        core.pushScene(ClearScene());
        return;
      });

      Explanation.addEventListener('touchstart',function(e){
        Scene_loads(-1,false,false,false);
      });

      Title.addEventListener("enterframe",function(){
        if(core.input.up){
          core.popScene();
        }
      })

      return scene;
    };
    var MainScene = function(Datas,Return,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&&Datas[12]!=false&&Datas[12]!=1){
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("Pages",Pages);
        window.localStorage.setItem("Number",Datas[12]);
        var Item_Flag2 = [];
        for (var i = 0; i < Item_Flag.length; i++) {
          Item_Flag2[i] = Item_Flag[i] + "端";
        }
        window.localStorage.setItem("Item",Item_Flag2);
      }

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      if(Datas[1]!=0){
        if(Datas[1]>0){
          if(Return!=true){
            Background.opacity = 0;
            Background.tl.fadeIn(Datas[1]);
          }
        }
        else{
          if(Return!=true){
            Background.tl.fadeOut(Datas[1]*-1);
          }
          else Background.opacity = 0;
        }
      }
      scene.addChild(Background);//背景

      if(Datas[2]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/Characters.png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[2];
        if(Datas[3]!=0){
          if(Datas[3]>0){
            if(Return!=true){
              Character1.opacity = 0;
              Character1.tl.fadeIn(Datas[3]);
            }
          }
          else{
            if(Return!=true){
              Character1.tl.fadeOut(Datas[3]*-1);
            }
            else Character1.opacity = 0;
          }
        }
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[6]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/Characters.png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[6];
        if(Datas[7]!=0){
          if(Datas[7]>0){
            if(Return!=true){
              Character3.opacity = 0;
              Character3.tl.fadeIn(Datas[7]);
            }
          }
          else{
            if(Return!=true){
              Character3.tl.fadeOut(Datas[7]*-1);
            }
            else Character3.opacity = 0;
          }
        }
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[4]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/Characters.png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[4];
        if(Datas[5]!=0){
          if(Datas[5]>0){
            if(Return!=true){
              Character2.opacity = 0;
              Character2.tl.fadeIn(Datas[5]);
            }
          }
          else{
            if(Return!=true){
              Character2.tl.fadeOut(Datas[5]*-1);
            }
            else Character2.opacity = 0;
          }
        }
        scene.addChild(Character2);
      }//キャラ真ん中

      switch (Datas[0]) {
        case "stand":
        case "right":
        case "left":
          var Stand = new Sprite(1600,900);
          Stand.image = core.assets["image/"+Datas[0]+".png"];
          scene.addChild(Stand);
          break;
        default:
          break;
      }

      if(Datas[15]!=undefined&&Datas[15]!=false){
        var Item = new Sprite(400,400);
        Item.image = core.assets["image/Item_S.png"];
        Item.x = Datas[15].substring(0,4)*1;
        Item.y = Datas[15].substring(5,9)*1;
        Item.frame = Datas[16];
        if(Return!=true&&Datas[15].substring(11,12)*1!=0){
          core.assets["sound/Choice.wav"].play();
          Item.opacity = 0;
          Item.tl.fadeIn(Datas[15].substring(11,12)*1);
        }
        scene.addChild(Item);
      }//アイテム

      var White = new Sprite(1600,900);
      White.image = core.assets["image/white.png"];
      White.x = 0;
      White.y = 900;
      scene.addChild(White);//白地

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

      var Numbers = 1040;

      var Texts = Class.create(Label, {
        initialize: function(a) {
          Label.call(this);
          this.font  = "60px monospace";
          this.color = 'black';
          this.x = 60;
          this.y = Numbers;
          this.width = 2000;
          this.height = 60;
          this.text = a;
          if(a.substring(0,1)=="("&&a.substring(a.length-1)==")") this.color = "blue";
          Numbers += 100;
          scene.addChild(this);
        }
      });

      var Text = Datas[9].split("(改行)");

      for (var i = 0; i < Text.length; i++) {
        Text[i] = new Texts(Text[i]);
      }


      if(Text[0].text.substring(0,1)=="("&&Text[i-1].text.substring(Text[i-1].text.length-1)==")"){
        for (var i = 0; i < Text.length; i++) {
          Text[i].color = "blue";
        }
      }

      if(Datas[10]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 1;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[10],true,Flag,false);
        });
      } //戻る1

      if(Datas[11]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 2;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[11],true,Flag,false);
        });
      }//戻る2

      if(Datas[12]>0){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 4;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(ItemScene(Datas[12],Flag,false));
        });
      }//アイテム

      if(Datas[13]!=false){
        var Enter1 = new Sprite(320,60);
        Enter1.image = core.assets["image/Buttons.png"];
        Enter1.x = 960;
        Enter1.y = height-65;
        Enter1.frame = 5;
        scene.addChild(Enter1);
        Enter1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],false,Flag,false);
        });
      }//進む1

      if(Datas[14]!=false){
        var Enter2 = new Sprite(320,60);
        Enter2.image = core.assets["image/Buttons.png"];
        Enter2.x = 1280;
        Enter2.y = height-65;
        Enter2.frame = 6;
        scene.addChild(Enter2);
        Enter2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[14],false,Flag,false);
        });//進む2
      }

      if(Datas[17]!=undefined){
        if(window.localStorage.getItem(Datas[17])==undefined){
          if(Datas[12]>0) window.localStorage.setItem(Datas[17],"獲得！");
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
          Trophies_image.frame = Datas[18];
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
          Trophies_text.text = Datas[17];
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
    var ChoiceScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&Datas[14]!="ゲームオーバー"){
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("Pages",Pages);
        window.localStorage.setItem("Number",Datas[14]);
        var Item_Flag2 = [];
        for (var i = 0; i < Item_Flag.length; i++) {
          Item_Flag2[i] = Item_Flag[i] + "端";
        }
        window.localStorage.setItem("Item",Item_Flag2);
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

      var White = new Sprite(1600,900);
      White.image = core.assets["image/white.png"];
      White.x = 0;
      White.y = 900;
      scene.addChild(White);//白地

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
          if(C1.text == "▶ 調べる") Inspect_loads(Datas[14],Flag,false);
          else if (C1.text == "▶ つきつける") core.pushScene(ItemScene(Datas[14],Flag,"日常"));
          else Scene_loads(Datas[8],false,Flag,false);
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
          if(C2.text == "▶ 調べる") Inspect_loads(Datas[14],Flag,false);
          else if (C2.text == "▶ つきつける") core.pushScene(ItemScene(Datas[14],Flag,"日常"));
          else Scene_loads(Datas[9],false,Flag,false);
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
          if(C3.text == "▶ 調べる") Inspect_loads(Datas[14],Flag,false);
          else if (C3.text == "▶ つきつける") core.pushScene(ItemScene(Datas[14],Flag,"日常"));
          else Scene_loads(Datas[10],false,Flag,false);
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
          if(C4.text == "▶ 調べる") Inspect_loads(Datas[14],Flag,false);
          else if (C4.text == "▶ つきつける") core.pushScene(ItemScene(Datas[14],Flag,"日常"));
          else Scene_loads(Datas[11],false,Flag,false);
        });
      }

      if(Datas[12]!=false&&Datas[14]!="ゲームオーバー"){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 1;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[12],true,Flag,false);
        });
      } //戻る1

      if(Datas[13]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 2;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],true,Flag,false);
        });
      }//戻る2

      if(Datas[14]!=false&&Datas[14]!="ゲームオーバー"){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 4;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(ItemScene(Datas[14],Flag,false));
        });
      }

      return scene;
    };
    var PopScene = function(Number,Type,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      var Pop = new Sprite(1600,900);

      Pop.image = core.assets["image/"+Type+".png"];
      Pop.x = 0;
      Pop.y = 0;
      core.assets["sound/"+Type+".wav"].play();
      scene.addChild(Pop);//異議ありOR待った

      var Time = 0;

      Pop.addEventListener("enterframe",function(){
        Time++;
        switch (Time) {
          case 2:
            Pop.x = 10;
            Pop.y = 10;
            break;
          case 3:
            Pop.x = -20;
            Pop.y = -30;
            break;
          case 4:
            Pop.x = 30;
            Pop.y = 20;
            break;
          case 15:
            core.popScene();
            Scene_loads(Number,false,Flag,false);
            break;
          default:
            Pop.x = 0;
            Pop.y = 0;
            break;
        }
      })

      return scene;
    };
    var InterrogationScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&&Datas[5]!=false){
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("Pages",Pages);
        window.localStorage.setItem("Number",Datas[5]);
        var Item_Flag2 = [];
        for (var i = 0; i < Item_Flag.length; i++) {
          Item_Flag2[i] = Item_Flag[i] + "端";
        }
        window.localStorage.setItem("Item",Item_Flag2);
      }

      Flag[1] = Datas[5];

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/stand.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);//証言席

      var Character = new Sprite(800,900);
      Character.image = core.assets["image/Characters.png"];
      Character.x = 400;
      Character.y = 0;
      Character.frame = Datas[0];
      scene.addChild(Character);//キャラ

      var Stand = new Sprite(1600,900);
      Stand.image = core.assets["image/stand.png"];
      Stand.x = 0;
      Stand.y = 0;
      scene.addChild(Stand);//証言台

      var C_name = new Label();
      C_name.font  = "60px monospace";
      C_name.color = 'black';
      C_name.x = 0;
      C_name.y = 960;
      C_name.width = 1600;
      C_name.height = 60;
      C_name.text = "【" + Datas[1] + "】";
      scene.addChild(C_name);//キャラ名

      var Numbers = 1040;

      var Texts = Class.create(Label, {
        initialize: function(a) {
          Label.call(this);
          this.font  = "60px monospace";
          this.color = 'black';
          this.x = 60;
          this.y = Numbers;
          this.width = 2000;
          this.height = 60;
          this.text = a;
          Numbers += 100;
          scene.addChild(this);
        }
      });//テキスト

      var Text = Datas[2].split("(改行)");

      for (var i = 0; i < Text.length; i++) {
        Text[i] = new Texts(Text[i]);
      }

      var Button1 = new Sprite(320,60);
      Button1.image = core.assets["image/Buttons.png"];
      Button1.x = 0;
      Button1.y = height-65;
      Button1.frame = 0;
      scene.addChild(Button1);
      Button1.addEventListener('touchstart',function(e){
        core.pushScene(PopScene(Datas[3],"待った！",Flag));
      });//ゆさぶる

      if(Datas[4]!=false){
        var Button2 = new Sprite(320,60);
        Button2.image = core.assets["image/Buttons.png"];
        Button2.x = 320;
        Button2.y = height-65;
        Button2.frame = 2;
        scene.addChild(Button2);
        Button2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[4],true,Flag,false);
        });
      }//戻る

      var Button3 = new Sprite(320,60);
      Button3.image = core.assets["image/Buttons.png"];
      Button3.x = 640;
      Button3.y = height-65;
      Button3.frame = 3;
      scene.addChild(Button3);
      Button3.addEventListener('touchstart',function(e){
        core.pushScene(SettingScene(Datas[5],Flag));
      });//設定

      var Button4 = new Sprite(320,60);
      Button4.image = core.assets["image/Buttons.png"];
      Button4.x = 960;
      Button4.y = height-65;
      Button4.frame = 5;
      scene.addChild(Button4);
      Button4.addEventListener('touchstart',function(e){
        Scene_loads(Datas[6],true,Flag,false);
      });//進む

      var Button5 = new Sprite(320,60);
      Button5.image = core.assets["image/Buttons.png"];
      Button5.x = 1280;
      Button5.y = height-65;
      Button5.frame = 7;
      scene.addChild(Button5);
      Button5.addEventListener('touchstart',function(e){
        core.pushScene(ItemScene(Datas[7],Flag,Datas[8]));
      });//つきつける

      return scene;
    };
    var SettingScene = function(Number,Flag){
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

      var Text2_5 = new Label();
      Text2_5.font  = "60px monospace";
      Text2_5.color = 'black';
      Text2_5.x = 200;
      Text2_5.y = 400;
      Text2_5.width = 1600;
      Text2_5.height = 60;
      if(window.localStorage.getItem("選択音")=="オン") Text2_5.text = "▶ 選択音オン";
      else Text2_5.text = "▶ 選択音オフ";
      scene.addChild(Text2_5);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 500;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "▶ セーブ方法の切り替え";
      scene.addChild(Text3);

      var Text4 = new Label();
      Text4.font  = "60px monospace";
      Text4.color = 'black';
      Text4.x = 200;
      Text4.y = 600;
      Text4.width = 1600;
      Text4.height = 60;
      if(window.localStorage.getItem("Save")=="マニュアル") Text4.text = "▶ セーブする";
      else Text4.text = "現在はオートセーブです。";
      scene.addChild(Text4);

      var Text5 = new Label();
      Text5.font  = "60px monospace";
      Text5.color = 'black';
      Text5.x = 200;
      Text5.y = 700;
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
        Scene_loads("タイトルに戻る",false,false,false);
        return;
      });

      Text2_5.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("選択音")=="オン"){
          window.localStorage.setItem("選択音","オフ");
          Text2_5.text = "▶ 選択音オフ";
        }
        else{
          window.localStorage.setItem("選択音","オン");
          Text2_5.text = "▶ 選択音オン";
        }
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
          window.localStorage.setItem("flag",Flag);
          window.localStorage.setItem("Pages",Pages);
          window.localStorage.setItem("Number",Number);
          var Item_Flag2 = [];
          for (var i = 0; i < Item_Flag.length; i++) {
            Item_Flag2[i] = Item_Flag[i] + "端";
          }
          window.localStorage.setItem("Item",Item_Flag2);
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
          if(S_Input2._element.value=="ナンバー移動"){
            core.popScene();
            core.popScene();
            Flag = [];
            Scene_loads(S_Input._element.value*1,false,Flag,false);
            return;
          }
          else if(S_Input2._element.value=="チート移動"){
            core.popScene();
            core.popScene();
            Flag = [];
            Scene_loads(S_Input._element.value,false,Flag,false);
            return;
          }
          else if(S_Input2._element.value=="フラグチート"){
            Flag[S_Input._element.value*1] = true;
            return;
          }
          window.localStorage.setItem("gender","男");
          if(S_Input._element.value=="") window.localStorage.setItem("surname","青眼の");
          if(S_Input2._element.value=="") window.localStorage.setItem("name","白龍");
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
      Text2.x = 200;
      Text2.y = 1100;
      Text2.width = 1200;
      Text2.height = 180;
      Text2.text = "";
      scene.addChild(Text2);

      var Numbers = 300;

      var Texts = Class.create(Label, {
        initialize: function(a,b,c) {
          Label.call(this);
          this.font  = "60px monospace";
          this.color = 'black';
          this.x = 200;
          this.y = Numbers;
          this.width = 1600;
          this.height = 60;
          this.text = "未獲得";
          this.syousai = b;
          if(window.localStorage.getItem(a)=="獲得！"){
            this.text = a;
            this.syousai = c;
          }
          Numbers += 100;
          scene.addChild(this);
        }
      });

      var Text = [];
      Text[0] = new Texts("即決！","すぐさまフレンズを結成しよう。","実際にこれぐらいの勢いがあれば友達もっといるんだろうなぁ。あ、みおちゃんの話だよ。");
      Text[1] = new Texts("カレン強奪事件","復習は大事","ラブミーティアの結成秘話。実際には噂が一人歩きしたものである。そういう意味では神話というのは正しいのかもしれない。ちなみに、カレンさんもこの話がお気に入りである。");
      Text[2] = new Texts("犯行の手口","実際にやるなよ。","あいねちゃんを監視するための手段。実際にはリフレクトムーンの目撃情報の集計である。ネットリテラシーの欠片もない。");
      Text[3] = new Texts("電話","そんなこと電話で済ますか…？","夜分遅くに電話かけるのはよくないよ。あいねちゃんだから許してくれるけど。");
      Text[4] = new Texts("やっぱり必要だった","命は預けた。","アイカツカードはちゃんと持っとかないと。");
      Text[5] = new Texts("使途","プライドを布教しよう。","ちなみに渡そうと思えば何回でも渡せる。");

      Text1.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      for (var i = 0; i < Text.length; i++){
        Text[i].addEventListener('touchstart',function(e){
          if(this.color=="black"){
            this.text = "▶ " + this.text;
            this.color = "red";
            Text2.text = this.syousai;
          }
          else{
            this.text = this.text.substring(2);
            this.color = "black";
            Text2.text = "";
          }
          for (var k = 0; k < Text.length; k++){
            if(Text[k].color=="red"&&this!=Text[k]){
              Text[k].text = Text[k].text.substring(2);
              Text[k].color = "black";
            }
          }
          return;
        });
      }

      return scene;
    };
    var InspectScene = function(Datas,Flag,Item){
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
        Background3.image = core.assets["image/背景/Transparent.png"];
        Background3.x = Datas[3];
        Background3.y = Datas[4];
        scene.addChild(Background3);
        Background3.addEventListener('touchstart',function(e){
          if(Datas[5]=="シーンロード") core.popScene();
          Scene_loads(Datas[6],false,Flag,Item);
        });
      }

      if(Datas[11]!=false){
        var Background4 = new Sprite(Datas[7],Datas[8]);
        Background4.image = core.assets["image/背景/Transparent.png"];
        Background4.x = Datas[9];
        Background4.y = Datas[10];
        scene.addChild(Background4);
        Background4.addEventListener('touchstart',function(e){
          if(Datas[11]=="シーンロード") core.popScene();
          Scene_loads(Datas[12],false,Flag,Item);
        });
      }

      if(Datas[17]!=false){
        var Background5 = new Sprite(Datas[13],Datas[14]);
        Background5.image = core.assets["image/背景/Transparent.png"];
        Background5.x = Datas[15];
        Background5.y = Datas[16];
        scene.addChild(Background5);
        Background5.addEventListener('touchstart',function(e){
          if(Datas[17]=="シーンロード") core.popScene();
          Scene_loads(Datas[18],false,Flag,Item);
        });
      }

      if(Datas[23]!=false){
        var Background6 = new Sprite(Datas[19],Datas[20]);
        Background6.image = core.assets["image/背景/Transparent.png"];
        Background6.x = Datas[21];
        Background6.y = Datas[22];
        scene.addChild(Background6);
        Background6.addEventListener('touchstart',function(e){
          if(Datas[23]=="シーンロード") core.popScene();
          Scene_loads(Datas[24],false,Flag,Item);
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

      var Numbers = 1040;

      var Texts = Class.create(Label, {
        initialize: function(a) {
          Label.call(this);
          this.font  = "60px monospace";
          this.color = 'black';
          this.x = 60;
          this.y = Numbers;
          this.width = 2000;
          this.height = 60;
          this.text = a;
          Numbers += 100;
          scene.addChild(this);
        }
      });//テキスト

      var Text = b.split("(改行)");

      for (var i = 0; i < Text.length; i++) {
        Text[i] = new Texts(Text[i]);
      }

      var Enter = new Sprite(320,60);
      Enter.image = core.assets["image/Buttons.png"];
      Enter.x = 1280-320;
      Enter.y = height-65;
      Enter.frame = 5;
      scene.addChild(Enter);
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
          Scene_loads(c,true,Flag,false);
        }
      })

      Enter.addEventListener('touchstart',function(e){
        if(Item.x>400) Item.x = 400;
        else if(Item.x==400) Item.x -= 100;
        else{
          core.popScene();
          Scene_loads(c,true,Flag,false);
        }
      });//進む

      return scene;
    }
    var ItemScene = function(Number,Flag,Ig){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

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
      Text1.text = "▶ 閉じる";
      scene.addChild(Text1);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 1000;
      Text2.y = 200;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "▶ 設定を開く";
      if(Ig==false) scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      if(Ig) Text3.x = 1100;
      else Text3.x = 1280;
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

      var Text8 = new Label();
      Text8.font  = "60px monospace";
      Text8.color = 'black';
      if(Ig) Text8.x = 800;
      else Text8.x = 980;
      Text8.y = 1400;
      Text8.width = 1380;
      Text8.height = 60;
      Text8.text = "";
      scene.addChild(Text8);

      var Text9 = new Label();
      Text9.font  = "60px monospace";
      Text9.color = 'black';
      Text9.x = 200;
      Text9.y = 1400;
      Text9.width = 1380;
      Text9.height = 60;
      Text9.text = "◀ 前";

      var Text10 = new Label();
      Text10.font  = "60px monospace";
      Text10.color = 'black';
      Text10.x = 600;
      Text10.y = 1400;
      Text10.width = 1380;
      Text10.height = 60;
      Text10.text = "▶ 次";

      if(Item_Flag.length>5){
        scene.addChild(Text9);
        scene.addChild(Text10);
      }
      else Pages = 0;

      var Numbers = 400;

      var Items = Class.create(Label, {
        initialize: function(a) {
            Label.call(this);
            this.font  = "60px monospace";
            this.color = 'black';
            this.x = 200;
            this.y = Numbers;
            this.width = 1600;
            this.height = 60;
            this.text = a[0];
            var Syousai_text = a[1].split("(改行)");
            if(Syousai_text[0]) this.text2 = Syousai_text[0];
            else this.text2 = "";
            if(Syousai_text[1]) this.text3 = Syousai_text[1];
            else this.text3 = "";
            if(Syousai_text[2]) this.text4 = Syousai_text[2];
            else this.text4 = "";
            if(Syousai_text[3]) this.text5 = Syousai_text[3];
            else this.text5 = "";
            this.image = a[2];
            if(a[3]) this.text6 = "▶ " + a[3];
            else this.text6 = "";
            scene.addChild(this);
            Numbers += 100;
            Item_Number ++;
          }
      });

      var Item = [];
      var Choice_Item = "未設定";
      var Item_Number = 0;

      for (var i = 0; i < 5; i++) {
        if(Item_Flag[i+Pages]) Item[Item_Number] = new Items(Item_Flag[i+Pages]);
      }

      function Item_text(a,b){
        a = a.substring(2);
        switch (a) {
          case "プライド":
            Item_image.frame = 3;
            Text[0] = "そこにしかないもの／プライド";
            Text[1] = "BEST FRIENDS！";
            Text[2] = "カレン・ミライ from BEST FRIENDS！";
            Text[3] = "藤末 樹,片山将太";
            if(core.assets["sound/"+a+".wav"].onplaying){
              Text8.text = "■ 停止";
            }
            else Text8.text = "▶ 再生";
            return(Text[b]);
            break;
          case "偶然、必然。":
            Item_image.frame = 4;
            Text[0] = "Third Color：PURPLE";
            Text[1] = "BEST FRIENDS！";
            Text[2] = "かぐや from BEST FRIENDS！";
            Text[3] = "片山将太,藤末 樹";
            if(core.assets["sound/"+a+".wav"].onplaying){
              Text8.text = "■ 停止";
            }
            else Text8.text = "▶ 再生";
            return(Text[b]);
            break;
          case "永遠の灯":
            Item_image.frame = 5;
            Text[0] = "『アイカツ!』主題歌/挿入歌 2年目②";
            Text[1] = "STAR☆ANIS";
            Text[2] = "れみ･ふうり from STAR☆ANIS";
            Text[3] = "南田健吾";
            if(core.assets["sound/"+a+".wav"].onplaying){
              Text8.text = "■ 停止";
            }
            else Text8.text = "▶ 再生";
            return(Text[b]);
            break;
          case "使い古された包丁":
            Item_image.frame = 6;
            Text[0] = "包丁。";
            Text[1] = "手入れが必要だろう。";
            Text[2] = "";
            Text[3] = "";
            return(Text[b]);
            break;
            case "新品で強靭な包丁":
              Item_image.frame = 8;
              Text[0] = "最強の包丁。";
              Text[1] = "どんな攻撃にも耐えられることだろう。";
              Text[2] = "";
              Text[3] = "";
              return(Text[b]);
              break;
              case "折れた包丁":
                Item_image.frame = 9;
                Text[0] = "無惨。";
                Text[1] = "これじゃあ使えもしない。";
                Text[2] = "";
                Text[3] = "";
                return(Text[b]);
                break;
          default:
            Item_image.frame = 0;
            return("開発中");
            break;
        }
      }

      Text1.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      Text2.addEventListener('touchstart',function(e){
        if(Text2.text=="▶ 設定を開く"){
          core.pushScene(SettingScene(Number,Flag));
        }
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        core.popScene();
        if(this.text=="▶ 使う") Scene_loads(Number,true,Flag,Choice_Item);
        else{
          if(Ig==Choice_Item) core.pushScene(PopScene(Number,"異議あり！",Flag));
          else if(Ig=="日常") Scene_loads(Number,true,Flag,Choice_Item+"つきつける");
          else core.pushScene(PopScene(41,"異議あり！",Flag));
        }
        return;
      });

      Text8.addEventListener('touchstart',function(e){
        if(this.text=="") return;
        else if(this.text=="▶ 再生"){
          core.assets["sound/"+Choice_Item+".wav"].onplaying = true;
          core.assets["sound/"+Choice_Item+".wav"].play();
          this.text = "■ 停止";
        }
        else if(this.text=="■ 停止"){
          core.assets["sound/"+Choice_Item+".wav"].onplaying = false;
          core.assets["sound/"+Choice_Item+".wav"].pause();
          this.text = "▶ 再生";
        }
        else if(this.text=="▶ 調べる") Inspect_loads(Number,Flag,Choice_Item);
        else{
          var Syousai = "詳細";
          switch (Choice_Item) {
            case "アイカツカード":
              Syousai = 0;
              break;
            case "時の魔術師":
              Syousai = 1;
              break;
            default:
              return;
          }
          core.pushScene(DetailsScene(Syousai));
        }
        return;
      });

      Text9.addEventListener('touchstart',function(e){
        if(Pages==0){
          Pages = Item_Flag.length-Item_Flag.length%5;
          if(Item_Flag.length%5==0) Pages-=5;
        }
        else Pages-=5;
        core.replaceScene(ItemScene(Number,Flag,Ig));
        return;
      });

      Text10.addEventListener('touchstart',function(e){
        if(Pages == Item_Flag.length-Item_Flag.length%5) Pages = 0;
        else{
          Pages+=5;
          if(Pages==Item_Flag.length) Pages = 0;
        }
        core.replaceScene(ItemScene(Number,Flag,Ig));
        return;
      });

      for (var i = 0; i < Item.length; i++){
        Item[i].addEventListener('touchstart',function(e){
          if(this.color=="black"){
            Item_image.frame = this.image;
            Choice_Item = this.text;
            this.text = "▶ " + this.text;
            this.color = "red";
            if(Ig) Text3.text = "▶ つきつける";
            else Text3.text = "▶ 使う";
            Text4.text = this.text2;
            Text5.text = this.text3;
            Text6.text = this.text4;
            Text7.text = this.text5;
            if(this.syousai!="▶ 再生") Text8.text = this.text6;
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
            Text8.text = "";
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
    var DetailsScene = function(Number){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text1 = new Label();
      Text1.font  = "60px monospace";
      Text1.color = 'black';
      Text1.x = 200;
      Text1.y = 200;
      Text1.width = 1600;
      Text1.height = 60;
      Text1.text = "▶ 戻る";
      scene.addChild(Text1);

      var Item = new Sprite(1200,1200);
      Item.image = core.assets["image/アイテム詳細/"+Number+".png"];
      Item.x = 200;
      Item.y = 275;
      scene.addChild(Item);

      Text1.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      return scene;
    };
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
