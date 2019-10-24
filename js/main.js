enchant()
function Load(width,height){
  var core = new Core(width, height);
  core.preload("image/Round.png");
  core.preload("image/Title.png");
  core.preload("image/Buttons.png");
  core.preload("image/Background.png");
  core.preload("image/背景/title.png");
  core.preload("image/トロフィー/sound.wav");
  core.preload("image/トロフィー/Trophies.png");
  core.preload("image/トロフィー/Trophies_image.png");
  for (var i = 0; i <= 53; i++){
    core.preload("image/背景/"+i+".png");
  }
  for (var i = 0; i <= 8; i++){
    core.preload("image/キャラ/"+i+".png");
  }
  core.fps = 100;
  core.onload = function(){
    if(window.localStorage.getItem("syoken")!="false"){
      var Data = false;
      var Flag = [false,false];
      window.localStorage.setItem("flag",Flag);
      window.localStorage.setItem("gender","女");
      window.localStorage.setItem("name","みお");
      window.localStorage.setItem("surname","湊");
    }
    else var Data = true;

    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    function Scene_loads(Number,Datas,Return){
      var Surname = window.localStorage.getItem("surname");
      var S_name = window.localStorage.getItem("name");
      //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
      if(Datas!=undefined){
        if(Datas.length==20){
          if(Datas[13]!=false) Datas[13] = Number-1;
          if(Datas[17]!=false) Datas[17] = Number+1;
        }
        else if(Datas[17]!=false) Datas[11] = Number-1;
      }
      else var Datas = [0,0,false,0,0,false,0,0,false,0,0,"？？？","…",Number-1,0,Number,0,Number+1,false,0];
      //(背景,左,frame,中,frame,右,frame,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
      var Datas_c = [0,false,0,false,0,false,0,false,false,false,false,0,0,Number,0,0,0,0];
      if(Number=="セーブ読み込み"){
        var Datas = window.localStorage.getItem("datas").split(",");
        if(Datas.length==20){
          //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          for (var i = 0; i <20 ; i++){
            if(i==11||i==12) continue;
            if(Datas[i]=="false") Datas[i] = false;
            else if(i!=18) Datas[i] = Datas[i]*1;
          }
          if(Datas[15]!=false) Number = Datas[15];
        }
        else Number = Datas[17]*1;
        Flag = window.localStorage.getItem("flag").split(",");
        for (var i = 0; i < Flag.length; i++){
          if(Flag[i]=="true") Flag[i] = true;
          else Flag[i] = false;
        }
      }
      if(Datas.length==20){
        Datas[4] = 0;
        Datas[7] = 0;
        Datas[10] = 0;
        if(Datas[15]!=false) Datas[15] = Number;
      }
      switch (Number) {
        case -20:
          Datas[0] =  "title";//背景
          //Datas[1] = true;//背景をフェードイン
          Datas[2] = 1;//左のキャラ
          Datas[3] = 0;//左のキャラのframe
          Datas[4] = 0;//左のキャラのフェードイン無し
          Datas[5] = 0;//真ん中のキャラ
          Datas[6] = 0;//真ん中のキャラのframe
          Datas[7] = 0//真ん中のキャラのフェードイン無し
          Datas[8] = 2;//右のキャラ
          Datas[9] = 0;//右のキャラのframe
          Datas[10] = false;//右のキャラのフェードイン無し
          Datas[11] = "";//名前
          Datas[12] = "説明は以上です。";
          Datas[13] = Number+1;//戻る1
          Datas[14] = -1;
          Datas[16] = false;
          Datas[17] = "ゲームオーバー";//次のシーン
          Datas[18] = 0;//トロフィー
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -19:
          var T_text = ["説明用","トロフィー","レッスン"];
          Datas[12] = "こんなの(これはテストなので獲得されません。)";
          Datas[13] = Number+1;//戻る1
          Datas[16] = false;
          Datas[17] = Number-1;//次のシーン
          Datas[18] = T_text[rand(2)];//トロフィー
          Datas[19] = rand(2);//トロフィー画像
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -18:
          Datas[12] = "それと、無意味なトロフィー機能が存在します。";
          Datas[13] = Number+1;//戻る1
          Datas[16] = -20;
          Datas[17] = Number-1;//次のシーン
          Datas[18] = 0;//トロフィー
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -17:
          Datas[12] = "アニメ本編が正解ルートなので間違ったりするとすぐ終わっちゃったりします。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -16:
          Datas[12] = "みおちゃんとなって選択肢を選んでいき、あいねちゃんとフレンズを組みましょう。                    (みおちゃんの名前だけは後で変更できます。)";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -15:
          Datas[2] = 1;//左のキャラNumber
          Datas[3] = 0;//左のキャラframe
          Datas[4] = 15;//左のキャラが現れるまでの時間
          Datas[5] = 0;
          Datas[8] = 2;//右のキャラ
          Datas[9] = 0;//右のキャラ
          Datas[10] = 15;
          Datas[12] = "このゲームはあいねちゃんとみおちゃんがフレンズ     (要はユニット)を組むまでのお話です。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -14:
          Datas[2] = 0;
          Datas[5] = 4;//真ん中のキャラ
          Datas[8] = 0;
          Datas[12] = "名古屋らしくエビフライが好物で、頭と苗字にも海老が付いています。わかりやすいですね。          (なんかそういうデュエリストいたような…)";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -13:
          Datas[0] =  "title";//背景
          Datas[5] = 4;//真ん中のキャラ
          Datas[7] = 15;//真ん中のキャラ
          Datas[12] = "あと、海老原なこちゃん。「名」古屋でアイカツしている女の「子」です。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -12:
          Datas[0] =  51;//背景
          Datas[5] = 3;//真ん中のキャラ
          Datas[7] = 15;//真ん中のキャラ
          Datas[12] = "ポンコツでもワイはフレンズではココちゃんが一番好きやで…扱いがそれなりに悪いの悲しいんじゃァ…";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -11:
          Datas[12] = "ちなみにこの回でかなりのポンコツだった事が露呈した。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -10:
          Datas[0] = 51;//背景
          Datas[5] = 0;//真ん中のキャラ
          Datas[12] = "ヒェッ…";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -9:
          Datas[5] = 3;//真ん中のキャラ
          Datas[0] = "title";//背景
          Datas[12] = "ホントに一人しかいないのか…？";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -8:
          Datas[12] = "要はアイカツフレンズ!世界のSiriといったところでしょうか。AIのくせに一人しかいないらしく、忙しい時は 呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -7:
          Datas[5] = 3;//真ん中のキャラ
          Datas[7] = 15;//真ん中のキャラ
          Datas[12] = "ついでに、アイカツ！ナビのココちゃん。　アイカツ！モバイルに「ハロー、ココちゃん！」　と呼びかけると出てきてくれるAIです。";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -6:
          Datas[5] = 2;//真ん中のキャラ
          Datas[11] = "";//名前
          Datas[12] = "どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。(偏見です)";
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -5:
          Datas[12] = "ちなみにこの写真は二人がフレンズを組んで 一度解散し 再結成した後のみおちゃんの電話の呼び出し画面の画像です。";//テキスト
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -4:
          Datas[12] = "かわいいですね。(かわいいです)";//テキスト
          Datas[13] = Number+1;//戻る1
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -3:
          Datas[12] = "この娘が友希あいねちゃん。ピュアパレットのピュアな方です。";//テキスト
          Datas[5] = 2;//真ん中のキャラ
          Datas[7] = 15;
          Datas[13] = Number+1;//戻る1
          Datas[14] = -1;//戻る2
          Datas[17] = Number-1;//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -2:
        //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          //Datas[0] = "title";//背景
          //Datas[1] = 0;//背景が現れるまでの時間
          //Datas[2] = 0;//左のキャラNumber
          //Datas[3] = 0;//左のキャラframe
          //Datas[4] = 0;//左のキャラが現れるまでの時間
          Datas[5] = 1;//真ん中のキャラNumber
          //Datas[6] = 0;//真ん中のキャラframe
          Datas[7] = 15;//真ん中のキャラが現れるまでの時間
          //Datas[8] = 0;//右のキャラが現れるまでの時間
          //Datas[9] = 0;//右のキャラが現れるまでの時間
          //Datas[10] = 0;//右のキャラが現れるまでの時間
          //Datas[11] = "";//名前
          Datas[12] = "この娘は湊みお。ピュアパレットのピュアじゃない方です。";//文章
          Datas[13] = Number+1;//戻る1
          Datas[14] = false;//戻る2
          //Datas[15] = false;//設定
          //Datas[16] = false;//スキップ
          Datas[17] = Number-1;//次のシーン
          //Datas[18] = false;//トロフィー
          //Datas[19] = 0;//トロフィー画像
          core.replaceScene(MainScene(Datas,Return));
          break;
        case -1:
          Datas = ["title",0,false,0,0,false,0,0,false,0,0,"","とりあえずは登場人物の紹介をしましょう。",false,false,false,-20,Number-1,false,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 1:
          Data = true;
          Flag = [false,false];
          window.localStorage.setItem("syoken","false");
          //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          Datas = [1,0,false,0,0,false,0,0,false,0,0,"友希あいね","これまでの『アイカツフレンズ！』。",false,false,Number,21,Number+1,false,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 2:
          Datas[11] = "あいね";
          Datas[12] = "私　友希あいね。";
          Datas[13] = 1;
          Datas[14] = false;
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 3:
          Datas[12] = "スターハーモニー学園に通う中学２年生。";
          Datas[14] = 1;
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 4:
          Datas[2] = false;
          Datas[8] = false;
          Datas[12] = "学園のトップアイドル　" + Surname + S_name + "ちゃんと出会ってアイドル科に転入したんだ。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 5:
          Datas[2] = 5;
          Datas[4] = 15;
          Datas[8] = 6;
          Datas[10] = 15;
          Datas[12] = "ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 6:
          Datas[2] = 5;
          Datas[8] = 6;
          Datas[12] = "凸凹だけどすっごく仲よしな２人はついにフレンズになった。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 7:
          Datas[0] = 1;
          Datas[2] = false;
          Datas[8] = false;
          Datas[12] = "アイドルは　カードも友達　ファンも友達。         目指せ　友達100万人！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 8:
          Datas[0] = 52;
          Datas[2] = 0;
          Datas[8] = 6;
          Datas[10] = 15;
          Datas[11] = "日向エマ";
          Datas[12] = "プリティー！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 9:
          Datas[0] = 52;
          Datas[2] = 5;
          Datas[4] = 15;
          Datas[8] = 6;
          Datas[11] = "蝶乃舞花";
          Datas[12] = "セクシー！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 10:
          Datas[0] = 2;
          Datas[2] = 0;
          Datas[8] = 0;
          Datas[11] = "二人";
          Datas[12] = "ハニーキャット！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 11:
          Datas[0] = 52;
          Datas[2] = 2;
          Datas[3] = 1;
          Datas[4] = 15;
          Datas[8] = 6;
          Datas[10] = 15;
          Datas[11] = "あいね";
          Datas[12] = "うわ～！かっこいい！！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 12:
          Datas[8] = 1;
          Datas[9] = 1;
          Datas[10] = 15;
          Datas[11] = Surname+S_name;
          Datas[12] = "ハニーキャット…２人にぴったりなフレンズ名ね。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 13:
          Datas[2] = 2;
          Datas[8] = 1;
          Datas[11] = "あいね";
          Datas[12] = "たしかに。舞花ちゃんもエマちゃんも猫っぽいイメージあるし。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 14:
          Datas[2] = 2;
          Datas[8] = 6;
          Datas[11] = "エマ";
          Datas[12] = "でしょでしょ。フレンズ組もうってなったら２人で盛り上がっちゃって。コンセプトとか一から作り上げてくのってワクワクするよね。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 15:
          Datas[2] = 5;
          Datas[4] = 15;
          Datas[11] = "舞花";
          Datas[12] = "あのキメポーズはちょっと恥ずいんですけど…";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 16:
          Datas[11] = "エマ";
          Datas[12] = "え～っ！？舞花だってノリノリで考えてたじゃん！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 17:
          Datas[11] = "舞花";
          Datas[12] = "あのときは…。エマとフレンズを組めたからテンション上がっちゃって…。";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 18:
          Datas[2] = 5;
          Datas[11] = "エマ";
          Datas[12] = "うんうん。かわいいやつめ！";
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 19:
          Datas[2] = 2;
          Datas[8] = 6;
          Datas[11] = "あいね";
          Datas[12] = "二人ともすっごく楽しそう。フレンズっていいな〜。";
          Datas[16] = 21;//Skipbutton非表示
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 20:
          Datas[8] = 1;
          Datas[11] = S_name;
          Datas[12] = "……………";
          Datas[16] = false;//Skipbutton非表示
          core.replaceScene(MainScene(Datas,Return));
          break;
        case 21:
          //(背景,左,frame,中,frame,右,frame,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
          var C1 = "……………";
          var C2 = "あいね！私達もフレンズを組みましょう！";
          var C3 = false;
          var C4 = false;
          Datas = [52,0,2,1,0,false,0,0,1,1,0,S_name,"……………",20,1,21,21,22,false,0];
          Datas_c = [Datas[0],Datas[2],Datas[3],Datas[5],Datas[6],Datas[8],Datas[9],C1,C2,C3,C4,22,23,0,0,Datas[13],Datas[14],Number];
          core.replaceScene(ChoiceScene(Datas_c,Datas));
          break;
        case 22:
          Datas = [52,0,false,0,0,false,0,0,1,2,0,S_name,"……………",false,false,Number,false,Number+1,false,0];
          core.replaceScene(MainScene(Datas,Return));
          break;
        case "タイトルに戻る":
          core.replaceScene(TitleScene());
          break;
        case "ゲームオーバー":
          //(背景,左,frame,中,frame,右,frame,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
          Datas = [0,false,0,false,0,false,0,"タイトルに戻る",false,false,false,"タイトルに戻る","セーブ読み込み",0,0,0,0,Number];
          if(window.localStorage.getItem("Save")=="マニュアル") Datas[8] = "セーブ読み込み";
          core.replaceScene(ChoiceScene(Datas));
          break;
        default:
          Datas[11] = "";//名前
          Datas[12] = "ここから先はできていません。";
          Datas[13] = false;//Backbutton1非表示
          Datas[14] = false;//Backbutton2非表示
          Datas[15] = false;//Settingbutton非表示
          Datas[16] = false;//Skipbutton非表示
          Datas[17] = "ゲームオーバー";//次のシーン
          core.replaceScene(MainScene(Datas,Return));
          break;
      }
    }
    var TitleScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Title = new Sprite(1600,900);
      Title.image = core.assets["image/Title.png"];
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

      Beginning.addEventListener('touchstart',function(e){
        Scene_loads(1);
      });

      Continuation.addEventListener('touchstart',function(e){
        if(Continuation.text == "▶ 説明") Scene_loads(-1);
        else Scene_loads("セーブ読み込み");
      });

      Explanation.addEventListener('touchstart',function(e){
        Scene_loads(-1);
      });

      return scene;
    };
    var MainScene = function(Datas,Return){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&&Datas[15]!=false&&Datas[15]!=1){
        console.log("オートセーブ");
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("datas",Datas);
      }

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      if(Datas[1]!=0){
        Background.opacity = 0;
        Background.tl.fadeIn(Datas[1]);
      }
      scene.addChild(Background);//背景

      if(Datas[2]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/キャラ/"+ Datas[2] +".png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[3];
        if(Datas[4]!=0&&Return!=true){
          Character1.opacity = 0;
          Character1.tl.fadeIn(Datas[4]);
        }
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[8]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/キャラ/"+ Datas[8] +".png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[9];
        if(Datas[10]!=0&&Return!=true){
          Character3.opacity = 0;
          Character3.tl.fadeIn(Datas[10]);
        }
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[5]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/キャラ/"+ Datas[5] +".png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[6];
        if(Datas[7]!=0&&Return!=true){
          Character2.opacity = 0;
          Character2.tl.fadeIn(Datas[7]);
        }
        scene.addChild(Character2);
      }//キャラ真ん中

      var C_name = new Label();
      C_name.font  = "60px monospace";
      C_name.color = 'black';
      C_name.x = 0;
      C_name.y = 960;
      C_name.width = 1600;
      C_name.height = 60;
      C_name.text = "【" + Datas[11] + "】";
      if(C_name.text == "【】") C_name.text = "";
      scene.addChild(C_name);//キャラ名

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = Datas[12];
      scene.addChild(Text);//テキスト

      if(Datas[13]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],Datas,true);
        });
      } //戻る1

      if(Datas[14]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[14],Datas,true);
        });
      }//戻る2

      if(Datas[15]!=false){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas,Flag));
        });
      }//設定

      if(Datas[16]!=false){
        var Enter1 = new Sprite(320,60);
        Enter1.image = core.assets["image/Buttons.png"];
        Enter1.x = 960;
        Enter1.y = height-65;
        Enter1.frame = 3;
        scene.addChild(Enter1);
        Enter1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[16],Datas);
        });
      }//スキップ

      var Enter2 = new Sprite(320,60);
      Enter2.image = core.assets["image/Buttons.png"];
      Enter2.x = 1280;
      Enter2.y = height-65;
      Enter2.frame = 4;
      scene.addChild(Enter2);//進む

      Enter2.addEventListener('touchstart',function(e){
        Scene_loads(Datas[17],Datas);
      });

      if(Datas[18]!=false){
        if(window.localStorage.getItem(Datas[18])==undefined){
          if(Datas[15]!=false) window.localStorage.setItem(Datas[18],"獲得！");
          var Time = 0;
          var Trophies = new Sprite(443,113);
          Trophies.image = core.assets["image/トロフィー/Trophies.png"];
          Trophies.x = width-463;
          Trophies.y = 20;
          Trophies.opacity = 0;
          Trophies.tl.fadeIn(5);
          scene.addChild(Trophies);
          var Trophies_image = new Sprite(88,85);
          Trophies_image.image = core.assets["image/トロフィー/Trophies_image.png"];
          Trophies_image.x = width-453;
          Trophies_image.y = 35;
          Trophies_image.frame = Datas[19];
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
          Trophies_text.text = Datas[18];
          scene.addChild(Trophies_text);
          core.assets["image/トロフィー/sound.wav"].play();
        }
        Trophies.addEventListener("enterframe",function(){
          Time++;
          if(Time==50){
            Trophies.tl.fadeOut(5);
            Trophies_image.tl.fadeOut(5);
            Trophies_text.tl.fadeOut(5);
          }
        })
      }//トロフィー*/
      return scene;
    };
    var ChoiceScene = function(Datas,Datas_M){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&Datas[17]!="ゲームオーバー"){
        console.log("オートセーブ");
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
        Character1.image = core.assets["image/キャラ/"+ Datas[1] +".png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[2];
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[5]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/キャラ/"+ Datas[5] +".png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[6];
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[3]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/キャラ/"+ Datas[3] +".png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[4];
        scene.addChild(Character2);
      }//キャラ真ん中

      if(Datas[7]!=false){
        var C1 = new Label();
        C1.font  = "60px monospace";
        C1.color = 'black';
        C1.x = 0;
        C1.y = 960;
        C1.width = 1600;
        C1.height = 60;
        C1.text = "▶ " + Datas[7];
        scene.addChild(C1);
        C1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[11]);
        });
      }

      if(Datas[8]!=false){
        var C2 = new Label();
        C2.font  = "60px monospace";
        C2.color = 'black';
        C2.x = 0;
        C2.y = 1060;
        C2.width = 1600;
        C2.height = 60;
        C2.text = "▶ " + Datas[8];
        scene.addChild(C2);
        C2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[12]);
        });
      }

      if(Datas[9]!=false){
        var C3 = new Label();
        C3.font  = "60px monospace";
        C3.color = 'black';
        C3.x = 0;
        C3.y = 1160;
        C3.width = 1600;
        C3.height = 60;
        C3.text = "▶ " + Datas[9];
        scene.addChild(C3);
        C3.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13]);
        });
      }

      if(Datas[10]!=false){
        var C4 = new Label();
        C4.font  = "60px monospace";
        C4.color = 'black';
        C4.x = 0;
        C4.y = 1260;
        C4.width = 1600;
        C4.height = 60;
        C4.text = "▶ " + Datas[10];
        scene.addChild(C4);
        C4.addEventListener('touchstart',function(e){
          Scene_loads(Datas[14]);
        });
      }

      if(Datas[15]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[15],Datas_M,true);
        });
      } //戻る1

      if(Datas[16]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[16],Datas_M,true);
        });
      }//戻る2

      if(Datas[17]!="ゲームオーバー"){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas));
        });
      }

      return scene;
    };
    var SettingScene = function(Datas,Flag){
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
        Scene_loads("タイトルに戻る");
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
          console.log("セーブ");
          window.localStorage.setItem("flag",Flag);
          window.localStorage.setItem("datas",Datas);
          core.assets["image/トロフィー/sound.wav"].play();
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
        core.assets["image/トロフィー/sound.wav"].play();
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
      Text2.y = 300;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "即決！";
      if(window.localStorage.getItem("即決！")!=undefined) scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 400;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "カレン強奪事件";
      if(window.localStorage.getItem("カレン強奪事件")!=undefined) scene.addChild(Text3);

      Text.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      return scene;
    };
    core.replaceScene(TitleScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
