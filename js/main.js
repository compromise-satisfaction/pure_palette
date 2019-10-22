enchant()
function Load(width,height){
  var core = new Core(width, height);
  core.preload("image/Round.png");
  core.preload("image/Title.png");
  core.preload("image/Buttons.png");
  core.preload("image/Background.png");
  core.preload("image/背景/title.png");
  for (var i = 0; i <= 2; i++){
    core.preload("image/トロフィー/"+i+".png");
  }
  core.preload("image/トロフィー/sound.wav");
  core.preload("image/トロフィー/Trophies.png");
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
    function Scene_loads(Number){
      var Surname = window.localStorage.getItem("surname");
      var S_name = window.localStorage.getItem("name");
      var Name = "？？？";
      var Line = "…";
      if(Number=="セーブ読み込み"){
        Number = window.localStorage.getItem("Scene")*1;
        Flag = window.localStorage.getItem("flag").split(",");
        for (var i = 0; i < Flag.length; i++){
          if(Flag[i]=="true") Flag[i] = true;
          else Flag[i] = false;
        }
      }
      switch (Number) {
        case -18:
        Name = S_name;
        Line = "あいね！私達もフレンズを組みましょう！";
        core.replaceScene(MainScene(52,2,1,false,true,1,1,false,true,0,0,false,false,Name,Line,false,true,Number+1,Number,Number-1,"即決！",0));
          break;
        case -17:
        Name = "";
        Line = "説明は以上です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",1,0,false,true,2,0,false,true,0,0,false,false,Name,Line,true,false,Number+1,Number,"ゲームオーバー"));
          break;
        case -16:
        Name = "";
        Line = "アニメ本編が正解ルートなので間違ったりするとすぐ終わっちゃったりします。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",1,0,false,true,2,0,false,true,0,0,false,false,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -15:
        Name = "";
        Line = "みおちゃんとなって選択肢を選んでいき、あいねちゃんとフレンズを組みましょう。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",1,0,false,true,2,0,false,true,0,0,false,false,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -14:
        Name = "";
        Line = "このゲームはあいねちゃんとみおちゃんがフレンズ     (要はユニット)を組むまでのお話です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",1,0,true,true,2,0,true,true,0,0,false,false,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -13:
        Name = "";
        Line = "名古屋らしくエビフライが好物で、頭と苗字にも海老が付いています。わかりやすいですね。          (なんかそういうデュエリストいたような…)";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,4,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -12:
        Name = "";
        Line = "あと、海老原なこちゃん。「名」古屋でアイカツしている女の「子」です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,4,0,true,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -11:
        Name = "";
        Line = "ポンコツでもワイはフレンズではココちゃんが一番好きやで…扱いがそれなりに悪いの悲しいんじゃァ…";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene(51,0,0,false,false,0,0,false,false,3,0,true,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -10:
        Name = "";
        Line = "ちなみにこの回でかなりのポンコツだった事が露呈した。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene(51,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -9:
        Name = "";
        Line = "ヒェッ…";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene(51,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -8:
        Name = "";
        Line = "ホントに一人しかいないのか…？";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,3,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -7:
        Name = "";
        Line = "要はアイカツフレンズ!世界のSiriといったところでしょうか。AIのくせに一人しかいないらしく、忙しい時は 呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,3,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -6:
        Name = "";
        Line = "ついでに、アイカツ！ナビのココちゃん。　アイカツ！モバイルに「ハロー、ココちゃん！」　と呼びかけると出てきてくれるAIです。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,3,0,true,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -5:
        Name = "";
        Line = "どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。(偏見です)";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,2,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -4:
        Name = "";
        Line = "ちなみにこの写真は二人がフレンズを組んで 一度解散し 再結成した後のみおちゃんの電話の呼び出し画面の画像です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,2,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -3:
        Name = "";
        Line = "かわいいですね。(かわいいです)";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,2,0,false,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -2:
        Name = "";
        Line = "この娘が友希あいねちゃん。ピュアパレットのピュアな方です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,2,0,true,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case -1:
        Name = "";
        Line = "この娘は湊みお。ピュアパレットのピュアじゃない方です。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,1,0,true,true,Name,Line,true,false,Number+1,Number,Number-1));
          break;
        case 0:
        Name = "";
        Line = "とりあえずは登場人物の紹介をしましょう。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene("title",0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,false,false,0,Number,Number-1));
          break;
        case 1:
        Data = true;
        Flag = [false,false];
        window.localStorage.setItem("syoken","false");
        Name = "友希あいね";
        Line = "これまでの『アイカツフレンズ！』。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene(1,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,false,true,0,Number,Number+1));
          break;
        case 2:
        Name = "あいね";
        Line = "私　友希あいね。";
        core.replaceScene(MainScene(1,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 3:
        Name = "あいね";
        Line = "スターハーモニー学園に通う中学２年生。";
        core.replaceScene(MainScene(1,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 4:
        Name = "あいね";
        Line = "学園のトップアイドル　" + Surname + S_name + "ちゃんと出会ってアイドル科に転入したんだ。";
        core.replaceScene(MainScene(1,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 5:
        Name = "あいね";
        Line = "ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。";
        core.replaceScene(MainScene(1,5,0,true,true,6,0,true,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 6:
        Name = "あいね";
        Line = "凸凹だけどすっごく仲よしな２人はついにフレンズになった。";
        core.replaceScene(MainScene(1,5,0,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 7:
        Name = "あいね";
        Line = "アイドルは　カードも友達　ファンも友達。         目指せ　友達100万人！";
        core.replaceScene(MainScene(1,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 8:
        Name = "日向エマ";
        Line = "プリティー！";
        core.replaceScene(MainScene(52,0,0,false,false,6,0,true,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 9:
        Name = "蝶乃舞花";
        Line = "セクシー！";
        core.replaceScene(MainScene(52,5,0,true,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 10:
        Name = "二人";
        Line = "ハニーキャット！";
        core.replaceScene(MainScene(2,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 11:
        Name = "あいね";
        Line = "うわ～！かっこいい！！";
        core.replaceScene(MainScene(52,2,1,true,true,6,0,true,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 12:
        Name = Surname+S_name;
        Line = "ハニーキャット…２人にぴったりなフレンズ名ね。";
        core.replaceScene(MainScene(52,2,1,false,true,1,1,true,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 13:
        Name = "あいね";
        Line = "たしかに。舞花ちゃんもエマちゃんも猫っぽいイメージあるし。";
        core.replaceScene(MainScene(52,2,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 14:
        Name = "エマ";
        Line = "でしょでしょ。フレンズ組もうってなったら２人で盛り上がっちゃって。コンセプトとか一から作り上げてくのってワクワクするよね。";
        core.replaceScene(MainScene(52,2,1,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 15:
        Name = "舞花";
        Line = "あのキメポーズはちょっと恥ずいんですけど…";
        core.replaceScene(MainScene(52,5,0,true,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 16:
        Name = "エマ";
        Line = "え～っ！？舞花だってノリノリで考えてたじゃん！";
        core.replaceScene(MainScene(52,5,0,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 17:
        Name = "舞花";
        Line = "あのときは…。エマとフレンズを組めたからテンション上がっちゃって…。";
        core.replaceScene(MainScene(52,5,0,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 18:
        Name = "エマ";
        Line = "うんうん。かわいいやつめ！";
        core.replaceScene(MainScene(52,5,0,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 19:
        Name = "あいね";
        Line = "二人ともすっごく楽しそう。フレンズっていいな〜。";
        core.replaceScene(MainScene(52,2,1,false,true,6,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 20:
        Name = S_name;
        Line = "……………";
        core.replaceScene(MainScene(52,2,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 21:
        var C1 = "……………";
        var C2 = "あいね！私達もフレンズを組みましょう！";
        core.replaceScene(ChoiceScene(52,2,1,true,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,22,-18,0,0,Number));
          break;
        case 22:
        Name = S_name;
        Line = "……………";
        core.replaceScene(MainScene(52,0,0,false,false,1,2,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
          break;
        case 23:
        Name = "";
        Line = "その晩　" +S_name+ "の自室";
        core.replaceScene(MainScene(3,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 24:
        Name = S_name;
        Line = "フレンズを組むのは、やっぱりあいねしかいない。まずは…";
        core.replaceScene(MainScene(3,0,0,false,false,0,0,false,false,1,1,true,true,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 25:
        var C1 = "告白の練習をしましょう。";
        var C2 = "相性を占いで確かめましょう。";
        var C3 = "両方やりましょう。";
        core.replaceScene(ChoiceScene(3,0,0,false,0,0,false,1,1,true,C1,true,C2,true,C3,true,"無し",false,"まだ","まだ",26,0,Number));
          break;
        case 26:
        Name = S_name;
        Line = "あいね、私とフレンズになりましょう。";
        core.replaceScene(MainScene(4,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
          break;
        case 27:
        Name = S_name;
        Line = "フゥ…。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 28:
        Name = S_name;
        Line = "古今東西あらゆる占いで私とあいねの相性はバッチリだってわかったし…。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 29:
        Name = S_name;
        Line = "それに何より私の直感があいねとフレンズを組めばすごいことが起きるってビビっと訴えかけてる。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 30:
        Name = S_name;
        Line = "あとは…。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 31:
        var C1 = "ドラマチックな展開のフレンズ結成ね。";
        var C2 = "今すぐあいねに電話をかけましょう。";
        core.replaceScene(ChoiceScene(5,0,0,false,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,32,"まだ",0,0,Number));
          break;
        case 32:
        Name = S_name;
        Line = "あとはドラマチックな展開あってのフレンズ結成ね。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
          break;
        case 33:
        Name = S_name;
        Line = "そう…ラブミーティアの二人みたいに。";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 34:
        Name = "";
        Line = "ラブミーティアの結成について復習しておく？";
        core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 35:
        var C1 = "はい";
        var C2 = "いいえ";
        core.replaceScene(ChoiceScene(5,0,0,false,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,36,51,0,0,Number));
          break;
        case 36:
        Flag[0] = true;
        Name = S_name;
        Line = "ラブミーティアのドラマチック極まりない結成エピソードは　もはや伝説。";
        core.replaceScene(MainScene(6,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1,"カレン強奪事件",1));
          break;
        case 37:
        Name = S_name;
        Line = "いえ、アイカツ界における神話とすらなっている。";
        core.replaceScene(MainScene(6,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 38:
        Name = S_name;
        Line = "スターハーモニー学園に入ってトップアイドルに駆け上がったカレンさんとミライさん。";
        core.replaceScene(MainScene(27,7,0,true,true,8,0,true,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 39:
        Name = S_name;
        Line = "二人は出会ってすぐに意気投合したのだけど　フレンズ結成にはあと一歩踏み込めないでいた。";
        core.replaceScene(MainScene(27,7,0,false,true,8,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 40:
        Name = S_name;
        Line = "そんなとき　二人を揺るがす大事件が！(迫真)";
        core.replaceScene(MainScene(7,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 41:
        Name = S_name;
        Line = "カレンさんは世界的プロデューサーからアイドルとしてプロデュースしたいというオファーを受けてアメリカに旅立つことになったのだ。";
        core.replaceScene(MainScene(53,0,0,false,false,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
        case 42:
        Name = "明日香ミライ";
        Line = "カレン！";
        core.replaceScene(MainScene(53,8,0,true,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 43:
        Name = "ミライ";
        Line = "ハァ…ハァ…ハァ…。";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 44:
        Name = "神城カレン";
        Line = "ミライさん…。";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 45:
        Name = "ミライ";
        Line = "アメリカになんて行かせない。カレンをいちばん輝かせることができるのは…。";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 46:
        Name = "ミライ";
        Line = "私なんだから！";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 47:
        Name = "カレン";
        Line = "…！";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 48:
        Name = "カレン";
        Line = "はい 知ってました。";
        core.replaceScene(MainScene(53,8,0,false,true,7,0,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 49:
          Name = S_name;
          Line = "こうして二人はラブミーティアを結成したのであった…。";
          core.replaceScene(MainScene(8,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 50:
          Name = S_name;
          Line = "う～っ…ハァ！何度読んでもやっぱりいい！！ずっと憧れていた…。私もフレンズを組むならこんなふうにドラマチックにって。";
          core.replaceScene(MainScene(9,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 51:
          Name = S_name;
          Line = "ドラマチックな告白か…。";
          core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,Flag[0],true,Number-1,Number,Number+1));
            break;
          case 52:
          Name = S_name;
          Line = "う〜ん…　考えてみると難しい。";
          core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 53:
          Name = S_name;
          Line = "自分がやるとなると想像がつかないというか。";
          core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 54:
          var C1 = "ココちゃんに相談してみましょう。";
          var C2 = "妥協して一刻も早くあいねとフレンズになるべきよ。";
          core.replaceScene(ChoiceScene(5,0,0,false,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,55,"まだ",0,0,Number));
            break;
          case 55:
          Name = S_name;
          Line = "ハロー　ココちゃん。";
          core.replaceScene(MainScene(5,0,0,false,false,1,1,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
            break;
          case 56:
          Name = "ココ";
          Line = "ココだよ。";
          core.replaceScene(MainScene(5,3,1,true,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 57:
          var C1 = "フレンズの誘い方を教えて。";
          var C2 = "ドラマチックな告白について教えて。";
          var C3 = "あいねのアイカツモバイルを盗聴して。";
          core.replaceScene(ChoiceScene(5,3,1,true,1,1,true,0,0,false,C1,true,C2,true,C3,true,"無し",false,"まだ",58,59,0,Number));
            break;
          case 58:
          Name = S_name;
          Line = "ドラマチックな告白について教えて。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,60));
            break;
          case 59:
          Flag[1] = true;
          Name = S_name;
          Line = "あいねのアイカツモバイルを盗聴して。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,60,"ストーキングのプロ",2));
            break;
          case 60:
          var Next = 78;
          var Before = 58;
          if(Flag[1]){
            Next = 61;
            Before = 59;
          }
          Name = "ココ";
          Line = "ココろえ…";
          core.replaceScene(MainScene(5,3,2,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Before,Number,Next));
            break;
          case 61:
          Name = "ココ";
          Line = "え～っ！？アイカツモバイルを盗聴！？あいねちゃんの！？どうして！？";
          core.replaceScene(MainScene(5,3,3,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 62:
          Name = S_name;
          Line = "あいねとフレンズになるためのドラマチックな告白を成功させるのに必要なの。";
          core.replaceScene(MainScene(5,3,3,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 63:
          Name = "ココ";
          Line = "う〜ん、それでどうして盗聴が必要になるのかなぁ？";
          core.replaceScene(MainScene(5,3,4,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 64:
          Name = S_name;
          Line = "あいねの趣味、生活を完璧に理解してあいねが喜ぶ完璧なエスコートをするためよ。";
          core.replaceScene(MainScene(5,3,4,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 65:
          Name = "ココ";
          Line = "えぇ…";
          core.replaceScene(MainScene(5,3,5,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 66:
          Name = "ココ";
          Line = "悪いけど、それはココが協力できることじゃないよ。";
          core.replaceScene(MainScene(5,3,5,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 67:
          Name = "ココ";
          Line = "ごめんなさい！";
          core.replaceScene(MainScene(5,3,6,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 68:
          Name = S_name;
          Line = "う〜ん、それじゃあ盗聴機を仕込むしかないわね…何かいい方法は…";
          core.replaceScene(MainScene(5,3,6,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 69:
          Name = "ココ";
          Line = "…お友達どうしでアクセサリーを持つのが流行ってるみたいだよ。２つがそろうと１つになるデザインが人気みたいだね。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 70:
          Name = S_name;
          Line = "なるほど、それに仕込めば…早速製作に取り掛かりましょう。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 71:
          Name = "ココ";
          Line = "…関係ないけど、ペットが迷子になった時のための首輪につけられる小さなGPS発信機っていうのもあるみたいだね。";
          core.replaceScene(MainScene(5,3,11,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
          break;
          case 72:
          Name = "ココ";
          Line = "それがあれば、ココにも場所が表示できるよ。";
          core.replaceScene(MainScene(5,3,11,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 73:
          Name = "ココ";
          Line = "こんな風に。";
          core.replaceScene(MainScene(44,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 74:
          var Next = 121;
          var Before = "無し";
          if(Flag[1]){
            Next = 75;
            Before = 73;
          }
          Name = S_name;
          Line = "うん！　これよ！！";
          core.replaceScene(MainScene(26,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,Flag[1],true,Before,Number,Next));
            break;
          case 75:
          Name = "";
          Line = "後日、アクセサリーを渡すことに成功した"+S_name+"ちゃんは、それからしばらくして幸せなフレンズ生活をおくったのであった…。";
          core.replaceScene(MainScene(45,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 76:
          Name = "";
          Line = "ストーカーエンド";
          core.replaceScene(MainScene(45,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Line));
            break;
          case 78:
          Name = "ココ";
          Line = "え～っ！？ドラマチックな告白？";
          core.replaceScene(MainScene(5,3,7,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,60,Number,Number+1));
            break;
          case 79:
          Name = "ココ";
          Line = "そ…それって恋愛について知りたいってことだよね？";
          core.replaceScene(MainScene(5,3,8,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 80:
          Name = "ココ";
          Line = "さすが"+S_name+"ちゃん大人だ！";
          core.replaceScene(MainScene(5,3,9,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 81:
          var C1 = "はい";
          var C2 = "いいえ";
          core.replaceScene(ChoiceScene(5,3,9,true,1,1,true,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",82,0,0,Number));
            break;
          case 82:
          Name = S_name;
          Line = "違う違う。フレンズになってくださいってドラマチックに告白するにはってこと。";
          core.replaceScene(MainScene(5,3,9,false,true,1,1,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
            break;
          case 83:
          Name = "ココ";
          Line = "あっ…";
          core.replaceScene(MainScene(5,3,10,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 84:
          Name = "ココ";
          Line = "そういうことか。";
          core.replaceScene(MainScene(5,3,11,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 85:
          Name = "ココ";
          Line = "ドラマチックな告白で検索。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 86:
          Name = "ココ";
          Line = "あっ。";
          core.replaceScene(MainScene(5,3,12,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 87:
          Name = "ココ";
          Line = "こんな結果が出たよ。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 88:
          Name = S_name;
          Line = "映画館で　ドラマチックに…。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 89:
          Name = "イメージ";
          Line = "(なぜか他に客がいない映画館)";
          core.replaceScene(MainScene(10,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1,undefined,true));
            break;
          case 90:
          Name = "イメージ";
          Line = "(多分ペンギンが二時間ほどかっこつけるだけの映画)";
          core.replaceScene(MainScene(11,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 91:
          Name = "イメージ";
          Line = "(突然途切れる映像)";
          core.replaceScene(MainScene(12,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 92:
          Name = "映像　"+S_name;
          Line = "あいね　私とフレンズになりましょう。";
          core.replaceScene(MainScene(13,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 93:
          Name = "イメージ　あいね";
          Line = "わぁ…";
          core.replaceScene(MainScene(14,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 94:
          Name = "イメージ　あいね";
          Line = "うん！！";
          core.replaceScene(MainScene(15,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 95:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　ないわね。";
          core.replaceScene(ChoiceScene(15,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",96,0,0,Number));
            break;
          case 96:
          Name = S_name;
          Line = "いや…　ないわね。";
          core.replaceScene(MainScene(5,3,1,false,true,1,3,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
            break;
          case 97:
          Name = "ココ";
          Line = "そっか。";
          core.replaceScene(MainScene(5,3,13,false,true,1,3,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 98:
          Name = "ココ";
          Line = "だったら…。";
          core.replaceScene(MainScene(5,3,14,false,true,1,3,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 99:
          Name = "ココ";
          Line = "う〜ん…。";
          core.replaceScene(MainScene(5,3,15,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 100:
          Name = "ココ";
          Line = "(ピコン)";
          core.replaceScene(MainScene(5,3,12,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 101:
          Name = S_name;
          Line = "ゲーム感覚でドラマチックに…。";
          core.replaceScene(MainScene(5,3,1,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 102:
          Name = "イメージ　あいね";
          Line = "失礼しま〜す。";
          core.replaceScene(MainScene(16,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1,undefined,true));
            break;
          case 103:
          Name = "イメージ　あいね";
          Line = "あっ…。";
          core.replaceScene(MainScene(17,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 104:
          Name = "";
          Line = "(中庭)";
          core.replaceScene(MainScene(18,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 105:
          Name = "";
          Line = "(レッスンルーム)";
          core.replaceScene(MainScene(19,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 106:
          Name = "イメージ　あいね";
          Line = "あっ…。";
          core.replaceScene(MainScene(20,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 107:
          Name = "イメージ　あいね";
          Line = "ん…。";
          core.replaceScene(MainScene(21,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 108:
          Name = "イメージ　"+S_name;
          Line = "あいね　私と　フレンズになりましょう。";
          core.replaceScene(MainScene(22,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 109:
          Name = "イメージ　あいね";
          Line = "わ〜っ…　うん！！";
          core.replaceScene(MainScene(23,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 110:
          var C1 = "うん！　これよ！！";
          var C2 = "ドラマチックの意味をはき違えているような…";
          core.replaceScene(ChoiceScene(23,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,"まだ",111,0,0,Number));
            break;
          case 111:
          Name = S_name;
          Line = "いや…　これって　ドラマチックの意味をはき違えているような…";
          core.replaceScene(MainScene(5,0,0,false,false,1,3,false,true,0,0,false,false,Name,Line,false,true,Number-1,Number,Number+1));
            break;
          case 112:
          Name = "ココ";
          Line = "う〜っ…　ココにも意地があるもん。";
          core.replaceScene(MainScene(5,3,16,true,true,1,3,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 113:
          Name = "ココ";
          Line = S_name+"ちゃんが満足する答えを　必ず見つけてみせるんだから！";
          core.replaceScene(MainScene(5,3,16,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 114:
          Name = "ココ";
          Line = "う〜ん…。";
          core.replaceScene(MainScene(5,3,17,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 115:
          Name = "ココ";
          Line = "°△°";
          core.replaceScene(MainScene(5,3,18,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 116:
          Name = "ココ";
          Line = "出た出た　出ました〜！";
          core.replaceScene(MainScene(5,3,19,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 117:
          Name = "ココ";
          Line = "最高にドラマチックな告白ができるスポットを見つけたよ！";
          core.replaceScene(MainScene(5,3,20,false,true,1,1,false,true,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 118:
          Name = "ココ";
          Line = "この観覧車でゴンドラが一番高くなったところで告白すると";
          core.replaceScene(MainScene(24,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 119:
          Name = "ココ";
          Line = "二人はず〜っと　幸せになれるんだって。";
          core.replaceScene(MainScene(25,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,Number-1,Number,Number+1));
            break;
          case 120:
          var C1 = "うん！　これよ！！";
          var C2 = "いや…　これって男女の恋愛じゃ？";
          core.replaceScene(ChoiceScene(25,0,0,false,0,0,false,0,0,false,C1,true,C2,true,"無し",false,"無し",false,74,"まだ",0,0,Number));
            break;
          case 121:
          Name = "後日";
          Line = "学校の中庭";
          core.replaceScene(MainScene(27,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,true,true,74,Number,Number+1));
            break;
        case "タイトルに戻る":
          core.replaceScene(TitleScene());
          break;
        case "ゲームオーバー":
        case "ストーカーエンド":
        var Image = "title";
        if(Number=="ストーカーエンド") Image = 45;
        var C1 = "タイトルに戻る";
        var C2 = "セーブ読み込み";
        if(window.localStorage.getItem("Save")=="マニュアル") var M = true;
        else var M = false;
        //背景 (キャラNumber キャラframe キャラ存在)*3 (選択肢テキスト 選択肢存在) *4 (移動先シーン) *4 現在のシーン
        core.replaceScene(ChoiceScene(Image,0,0,false,0,0,false,0,0,false,C1,true,C2,M,C1,false,C1,false,C1,C2,0,0,"ゲームオーバー"));
          break;
        default:
        var Name = "";
        var Line = "ここから先はできていません。";
        //背景 (キャラNumber キャラframe キャラフェードイン キャラ存在)*3 キャラネーム テキスト 戻れる 設定が出来る 前のシーン 今のシーン 次のシーン
        core.replaceScene(MainScene(0,0,0,false,false,0,0,false,false,0,0,false,false,Name,Line,false,false,0,0,"ゲームオーバー"));
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
        if(Continuation.text == "▶ 説明") Scene_loads(0);
        else Scene_loads("セーブ読み込み");
      });

      Explanation.addEventListener('touchstart',function(e){
        Scene_loads(0);
      });

      return scene;
    };
    var MainScene = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ a +".png"];
      Background.x = 0;
      Background.y = 0;
      if(v){
        Background.opacity = 0;
        Background.tl.fadeIn(15);
      }
      scene.addChild(Background);

      var Character1 = new Sprite(800,900);
      Character1.image = core.assets["image/キャラ/"+ b +".png"];
      Character1.x = 0;
      Character1.y = 0;
      Character1.frame = c;
      if(d){
        Character1.opacity = 0;
        Character1.tl.fadeIn(15);
      }
      if(e) scene.addChild(Character1);

      var Character2 = new Sprite(800,900);
      Character2.image = core.assets["image/キャラ/"+ f +".png"];
      Character2.x = 800;
      Character2.y = 0;
      Character2.frame = g;
      if(h){
        Character2.opacity = 0;
        Character2.tl.fadeIn(15);
      }
      if(i) scene.addChild(Character2);

      var Character3 = new Sprite(800,900);
      Character3.image = core.assets["image/キャラ/"+ j +".png"];
      Character3.x = 400;
      Character3.y = 0;
      Character3.frame = k;
      if(l){
        Character3.opacity = 0;
        Character3.tl.fadeIn(15);
      }
      if(m) scene.addChild(Character3);
      var Trophies = new Sprite(443,113);
      if(u!=undefined){
        if(window.localStorage.getItem(u)==undefined){
          window.localStorage.setItem(u,"獲得！");
          var Time = 0;
          Trophies.image = core.assets["image/トロフィー/Trophies.png"];
          Trophies.x = width-463;
          Trophies.y = 20;
          Trophies.opacity = 0;
          Trophies.tl.fadeIn(5);
          scene.addChild(Trophies);
          var Trophies_image = new Sprite(88,85);
          Trophies_image.image = core.assets["image/トロフィー/"+v+".png"];
          Trophies_image.x = width-453;
          Trophies_image.y = 35;
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
          Trophies_text.text = u;
          scene.addChild(Trophies_text);
          core.assets["image/トロフィー/sound.wav"].play();
        }
      }
      var C_name = new Label();
      C_name.font  = "60px monospace";
      C_name.color = 'black';
      C_name.x = 0;
      C_name.y = 960;
      C_name.width = 1600;
      C_name.height = 60;
      C_name.text = "【" + n + "】";
      if(C_name.text == "【】") C_name.text = "";
      scene.addChild(C_name);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = o;
      scene.addChild(Text);

      var Return = new Sprite(320,60);
      Return.image = core.assets["image/Buttons.png"];
      Return.x = 0;
      Return.y = height-65;
      Return.frame = 0;
      if(p) scene.addChild(Return);

      var Settings = new Sprite(320,60);
      Settings.image = core.assets["image/Buttons.png"];
      Settings.x = 640;
      Settings.y = height-65;
      Settings.frame = 1;
      if(q) scene.addChild(Settings);

      var Enter = new Sprite(320,60);
      Enter.image = core.assets["image/Buttons.png"];
      Enter.x = width-320;
      Enter.y = height-65;
      Enter.frame = 2;
      scene.addChild(Enter);

      Trophies.addEventListener("enterframe",function(){
        Time++;
        if(Time==50){
          Trophies.tl.fadeOut(5);
          Trophies_image.tl.fadeOut(5);
          Trophies_text.tl.fadeOut(5);
        }
      })

      Return.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&&q){
          window.localStorage.setItem("Scene",r);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(r);
      });

      Settings.addEventListener('touchstart',function(e){
        core.pushScene(SettingScene(s));
      });

      Enter.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&&q){
          window.localStorage.setItem("Scene",t);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(t);
      });

      return scene;
    };
    var ChoiceScene = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ a +".png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Character1 = new Sprite(800,900);
      Character1.image = core.assets["image/キャラ/"+ b +".png"];
      Character1.x = 0;
      Character1.y = 0;
      Character1.frame = c;
      if(d) scene.addChild(Character1);

      var Character2 = new Sprite(800,900);
      Character2.image = core.assets["image/キャラ/"+ e +".png"];
      Character2.x = 800;
      Character2.y = 0;
      Character2.frame = f;
      if(g) scene.addChild(Character2);

      var Character3 = new Sprite(800,900);
      Character3.image = core.assets["image/キャラ/"+ h +".png"];
      Character3.x = 400;
      Character3.y = 0;
      Character3.frame = i;
      if(j) scene.addChild(Character3);

      var C1 = new Label();
      C1.font  = "60px monospace";
      C1.color = 'black';
      C1.x = 0;
      C1.y = 960;
      C1.width = 1600;
      C1.height = 60;
      C1.text = "▶ " + k;
      if(l) scene.addChild(C1);

      var C2 = new Label();
      C2.font  = "60px monospace";
      C2.color = 'black';
      C2.x = 0;
      C2.y = 1060;
      C2.width = 1600;
      C2.height = 60;
      C2.text = "▶ " + m;
      if(n) scene.addChild(C2);

      var C3 = new Label();
      C3.font  = "60px monospace";
      C3.color = 'black';
      C3.x = 0;
      C3.y = 1160;
      C3.width = 1600;
      C3.height = 60;
      C3.text = "▶ " + o;
      if(p) scene.addChild(C3);

      var C4 = new Label();
      C4.font  = "60px monospace";
      C4.color = 'black';
      C4.x = 0;
      C4.y = 1260;
      C4.width = 1600;
      C4.height = 60;
      C4.text = "▶ " + q;
      if(r) scene.addChild(C4);

      var Settings = new Sprite(320,60);
      Settings.image = core.assets["image/Buttons.png"];
      Settings.x = 640;
      Settings.y = height-65;
      Settings.frame = 1;
      if(w!="ゲームオーバー") scene.addChild(Settings);

      C1.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&w!="ゲームオーバー"){
          window.localStorage.setItem("Scene",s);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(s);
      });

      C2.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&w!="ゲームオーバー"){
          window.localStorage.setItem("Scene",t);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(t);
      });

      C3.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&w!="ゲームオーバー"){
          window.localStorage.setItem("Scene",u);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(u);
      });

      C4.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")!="マニュアル"&w!="ゲームオーバー"){
          window.localStorage.setItem("Scene",v);
          window.localStorage.setItem("flag",Flag);
        }
        Scene_loads(v);
      });

      Settings.addEventListener('touchstart',function(e){
        core.pushScene(SettingScene(w));
      });

      return scene;
    };
    var SettingScene = function(a){
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
          window.localStorage.setItem("Scene",a);
          window.localStorage.setItem("flag",Flag);
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
    var TrophiesScene = function(a){
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
