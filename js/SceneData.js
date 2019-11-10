
var Rewind = 0;
var Skip = 0;
var Before = 0;
var After = 0;
var Datas = [];
var Flag = ["俛人","若辻","男",1,1,21,10,"0,0",true,false];//3早戻し,4本線,5先送り,6体力,7ページ,8オートセーブ,9選択音
var Item_Flag = [];//所持アイテム
var Character_Flag = [];//人物
var Pages = 0;//アイテムのページ
var Pages2 = 0;//人物のページ
T_Name = "";
Text = "";
var Scene_type = "メイン";
var Scene_kazu = 1;
var Get = false;

function have(Item){
  for (var i = 0; i < Item_Flag.length; i++) {
    if(Item_Flag[i][0]==Item) return(true);
  }
  for (var i = 10; i < Flag.length; i++) {
    if(Flag[i]==Item) return(true);
  }
  return(false);
}

function Save(Number){
  Flag[7] = Pages+"乙"+Pages2;
  window.localStorage.setItem("Flag",Flag);
  window.localStorage.setItem("Datas",Datas);
  window.localStorage.setItem("Number",Number);
  var Item_Flag2 = [];
  for (var i = 0; i < Item_Flag.length; i++) {
    Item_Flag2[i] = Item_Flag[i] + "端";
  }
  if(Item_Flag2==[]) Item_Flag2 = [[]+"端"]
  window.localStorage.setItem("Item",Item_Flag2);
  var Character_Flag2 = [];
  for (var i = 0; i < Character_Flag.length; i++) {
    Character_Flag2[i] = Character_Flag[i] + "端";
  }
  if(Character_Flag2==[]) Character_Flag2 = [[]+"端"]
  window.localStorage.setItem("Character",Character_Flag2);
  window.localStorage.setItem("syoken",false);
  var Flag2 = [];
  var k = 0;
  for (var i = 10; i < Flag.length; i++) {
    Flag2[k] = Flag[i];
    k++;
  }
  console.log(Flag2);
}//セーブ

function rand(n) {
  return Math.floor(Math.random() * (n + 1));
}

function R_S(Number,skip){
  Flag[3] = Number;
  Flag[5] = skip;
  Rewind = 0;
  Skip = skip;
  Before = 0;
  return;
}

function Get_I_C_F(Get_Type,a,b,c,d,e){
  if(Get) return;
  if(Get_Type=="人物"){
    for (var i = 0; i < Character_Flag.length; i++) {
      if(Character_Flag[i][0]==a) break;
    }
    if(b=="消失"){
      Character_Flag[i] = false;
      var Character_Flag2 = [];
      k = 0;
      for (var i = 0; i < Character_Flag.length; i++){
        if(Character_Flag[i]){
          Character_Flag2[k] = Character_Flag[i];
          k++;
        }
      }
      Character_Flag = Character_Flag2;
      if(Pages2==Character_Flag.length) Pages2-=5;
    }
    else if(b=="書き換え") Character_Flag[i][0] = c;
    else Character_Flag[i] = [a,b,c];
  }
  else if(Get_Type=="フラグ"){
    for (var i = 0; i < Flag.length; i++){
      if(Flag[i]==a) return;
    }
    Flag[Flag.length] = a;
  }
  else{
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
    else if(b=="書き換え") Item_Flag[i][0] = c;
    else Item_Flag[i] = [a,b,c,d,e];
  }
  return;
}//アイテム関連

function Default(Item){
  T_Name = "";
  if(Item.substring(0,5)=="つきつける"){
    Text = "反応がない。";
  }
  else Text = "ここでは使えないようだ。";
  if(Scene_type == "メイン"){
    Datas[1] = 0;
    Datas[3] = 0;
    Datas[5] = 0;
    Datas[7] = 0;
    Datas[8] = "";
    Datas[9] = Text;
    Datas[10] = 0;
    Datas[11] = 0;
    Datas[12] = 0;
    Datas[13] = Flag[4];
    Datas[14] = 0;
  }
  if(Scene_type == "チョイス"){
    var Datas2 = [];
    Datas2[0] = Datas[0];
    Datas2[1] = 0;
    Datas2[2] = Datas[1];
    Datas2[3] = 0;
    Datas2[4] = Datas[2];
    Datas2[5] = 0;
    Datas2[6] = Datas[3];
    Datas2[7] = 0;
    Datas2[8] = "";
    Datas2[9] = Text;
    Datas2[10] = 0;
    Datas2[11] = 0;
    Datas2[12] = 0;
    Datas2[13] = Flag[4];
    Datas2[14] = 0;
    Datas = Datas2;
  }
  Scene_type = "メイン";
  return;
}

function Scene_loads2(Number,Item,get){
  var Name = Flag[0];
  var Gender = Flag[2];
  var Surname = Flag[1];
  if(Gender=="男"){
    var www = ["僕","俺"];
    var Person = www[rand(1)];
    var S_image = 1;
  }
  else{
    var Person = "私";
    var S_image = 2;
  }
  if(Item){
    switch (Item) {
      case "つきつける使い古された包丁":
      case "つきつける新品で強靭な包丁":
      case "つきつける折れた包丁":
      switch (Number) {
        case "調べる包丁2":
        T_Name = Name;
        Text = "いやいや…無理でしょ。";
        After = Flag[4];
        Datas = [Datas[0],0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0];
        Scene_type = "メイン";
        break;
      }
      break;
      case "つきつける学生証":
      case "つきつけるアイカツカード":
      switch (Number) {
        case "調べる包丁2":
        var Text = "流石に"+Item.substring(5)+"じゃ(改行)包丁は手入れできないか。(改行)何か他のカードを…。";
        Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,Flag[4],0];
        Scene_type = "メイン";
        break;
      }
      break;
      case "つきつける時の魔術師":
      switch (Number) {
        case "調べる包丁2":
          var Text = "よ～し。";
          Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理",0];
          Scene_type = "メイン";
          break;
      }
      break;
      case "使う使い古された包丁":
      case "使う新品で強靭な包丁":
      case "使う折れた包丁":
      switch (Number) {
        default:
        T_Name = Name;
        Text = "危ないわよ。";
        After = Flag[4];
        Datas = [Datas[0],0,0,0,2,0,0,0,T_Name,Text,0,0,0,After,0];
        Scene_type = "メイン";
        break;
      }
      break;
      case "使う時の魔術師":
      switch (Number) {
        default:
        T_Name = Name;
        Text = "時の魔術師を召喚！";
        Rewind = 0;
        Before = 0;
        Number = 0;
        After = "使う時の魔術師_2";
        Skip = Flag[4];
        Datas = [Datas[0],0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0600,0250,15",8];
        Scene_type = "アイテム";
        break;
      }
      break;
      case "使うプライド":
      switch (Number) {
        case 134.9:
          var T_Name = Name;
          var Text = "あ、そうだ。(改行)コレをなこちゃんに。";
          Datas = [27,0,1,0,0,0,2,0,T_Name,Text,0,0,135.1,135.2,135.5,"0600,0250,15",4];
          Scene_type = "アイテム";
          break;
        default:
          var Text = "(このCDは布教用だから使うといったら布教よね。)";
          Datas = [Datas[0],0,0,0,0,0,0,0,Name,Text,0,0,0,Flag[4],0];
          Scene_type = "アイテム";
          break;
      }
      break;
      case "使う学生証":
      switch (Number) {
        default:
        T_Name = Name;
        Text = "ここではつかえない。";
        After = Flag[4];
        if(have("あいねとフレンズを組む決意をした")) After = "決意";
        Datas = [Datas[0],0,0,0,2,0,0,0,T_Name,Text,0,0,0,After,0];
        Scene_type = "アイテム";
        break;
      }
      break;
      case "使う双眼鏡":
      switch (Number) {
        case 147:
       R_S(173,188);
        var T_Name = Name;
        var Text = "これって…。";
        Datas = [34,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,173,174,Skip];
        Scene_type = "アイテム";
        break;
        default:
        T_Name = Name;
        Text = "双眼鏡は近くに隠れるものがない時使うといいわ。(改行)公園とか。";
        Datas = [Datas[0],0,0,0,0,0,0,0,T_Name,Text,0,0,0,Flag[4],0];
        Scene_type = "アイテム";
        break;
      }
      break;
    default:
      Default(Item);
      break;
    }
    return;
  }
  Rewind = Flag[3];
  Skip = Flag[5];
  Before = Number-1;
  After = Number+1;
  if(Rewind==Before) Rewind = 0;
  if(Skip==After) Skip = 0;
  switch (Number) {
    case "タイトルに戻る":
      Scene_type = Number;
      break;
    case "使う反応なし":
      Scene_type = "メイン";
      break;
      case "決意":
      var Text = "……";
      Datas = [Datas[0],0,0,0,2,0,0,0,Name,Text,0,0,0,"決意2",0];
      Scene_type = "メイン";
      break;
      case "決意2":
      var Text = "……次これを使うのはフレンズ結成お披露目の時よ…。";
      Datas = [Datas[0],0,0,0,2,0,0,0,Name,Text,0,0,0,Flag[4],0];
      Scene_type = "メイン";
      break;
    case "ゲームオーバー":
      Datas = ["54",0,0,0,"タイトルに戻る","セーブ読み込み",0,0,"タイトルに戻る","セーブ読み込み",0,0,0,0,Number];
      if(Flag[8]) Datas[5] = 0;
      Scene_type = "チョイス";
      break;
      case -22:
        var Text = "説明は以上です。";
        Datas = [54,0,0,0,0,0,0,0,"",Text,-1,-21.1,0,"ゲームオーバー",0];
        Scene_type = "メイン";
        break;
      case -21.1:
        var Text = "芸能人はカードが命。(改行)そして、決闘者はカードが魂。(改行)画像が使いたかっただけなので深い意味はありません。";
        Datas = [54,0,1,0,0,0,7,0,"",Text,-1,-21,0,-22,0];
        Scene_type = "メイン";
        break;
      case -21:
        var Text = "芸能人はカードが命。(改行)そして、決闘者はカードが魂。";
        Datas = [54,0,1,0,0,0,6,15,"",Text,-1,After,0,-21.1,-22];
        Scene_type = "メイン";
        break;
      case -20:
        var Text = "芸能人はカードが命。";
        Datas = [54,0,1,15,0,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -19:
        var T_text = ["説明用","トロフィー","レッスン"];
        var Text = "こんなの。(これはテストなので獲得されません。)";
        Datas = [54,0,0,0,0,0,0,0,"",Text,-1,After,0,Before,-22,false,false,T_text[rand(2)],rand(2)];
        Scene_type = "メイン";
        break;
      case -18:
        var Text = "それと、無意味なトロフィー機能が存在します。";
        Datas = [54,0,0,0,0,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -17:
        var Text = "アニメ本編が正解ルートなので(改行)間違ったりするとすぐ終わっちゃったりします。";
        Datas = [54,0,17,0,0,0,18,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -16:
        var Text = "みおちゃんとなって選択肢を選んでいき、(改行)あいねちゃんとフレンズを組みましょう。(改行)みおちゃんの名前は後で変更できます。";
        Datas = [54,0,17,0,0,0,18,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -15:
        var Text = "このゲームはあいねちゃんとみおちゃんがフレンズ、(改行)要はユニットを組むまでのお話です。";
        Datas = [54,0,17,15,0,0,18,15,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -14:
        var Text = "名古屋らしくエビフライが好物で、(改行)頭と苗字にも海老が付いています。(改行)わかりやすいですね。(改行)(なんかそういうデュエリストいたような…)";
        Datas = [54,0,0,0,15,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -13:
        var Text = "あと、海老原なこちゃん。(改行)「名」古屋でアイカツしている女の「子」です。";
        Datas = [54,0,0,0,15,15,0,0,"",Text,-1,-12.1,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -12.1:
        var Text = "そういえば圏外でも使えるのはおかしいのでは…？(改行)(見た感じ電波は来ているがここは異世界だし…)";
        Datas = [57,0,0,0,0,0,0,0,"",Text,-1,-12,0,-13,-22];
        Scene_type = "メイン";
        break;
      case -12:
        var Text = "ポンコツでもワイはフレンズでは(改行)ココちゃんが一番好きやで…(改行)扱いがそれなりに悪いの悲しいんじゃァ…";
        Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,0,-12.1,-22];
        Scene_type = "メイン";
        break;
      case -11:
        var Text = "ちなみにこの回でかなりのポンコツだった事が露呈した。";
        Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -10:
        var Text = "ヒェッ…";
        Datas = [51,0,0,0,0,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -9:
        var Text = "ホントに一人しかいないのか…？";
        Datas = [54,0,0,0,19,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -8:
        var Text = "要はアイカツフレンズ!世界のSiriといったところです。(改行)";
            Text+= "AIのくせに一人しかいないらしく、(改行)";
            Text+= "忙しい時は呼んでも出でこなかったり、舌を噛んだり、(改行)";
            Text+= "自分にわからないことは人任せにして(改行)";
            Text+= "勝手に電話をかけるくらいの高性能AIです。";
        Datas = [54,0,0,0,19,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -7:
        var Text = "ついでに、アイカツ！ナビのココちゃん。(改行)アイカツ！モバイルに「ハロー、ココちゃん！」(改行)と呼びかけると出てきてくれるAIです。";
        Datas = [54,0,0,0,19,15,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -6:
        var Text = "盗撮しようとして気づかれたみたいな構図の写真だ。(改行)みおちゃんが写真を撮らせてもらえないのか、(改行)それとも恥ずかしくて撮らせてと言えないのか、(改行)盗撮行為が好きなのか。多分後者だろうね。(偏見です)";
        Datas = [54,0,0,0,17,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -5:
        var Text = "ちなみにこの写真は二人がフレンズを組んで(改行)一度解散し、再結成した後のみおちゃんの(改行)電話の呼び出し画面の画像です。";
        Datas = [54,0,0,0,17,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -4:
        var Text = "かわいいですね。(かわいいです)";
        Datas = [54,0,0,0,17,0,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -3:
        var Text = "この娘が友希あいねちゃん。(改行)ピュアパレットのピュアな方です。";
        Datas = [54,0,0,0,17,15,0,0,"",Text,-1,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -2:
        var Text = "この娘は湊みお。(改行)ピュアパレットのピュアじゃない方です。";
        Datas = [54,0,0,0,18,15,0,0,"",Text,0,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case -1:
        var Text = "とりあえずは登場人物の紹介をしましょう。";
        Datas = [54,0,0,0,0,0,0,0,"",Text,0,After,0,Before,-22];
        Scene_type = "メイン";
        break;
      case "調べる双眼鏡":
      var Text = "双眼鏡ね。尾行に使えるわ。";
      Datas = [58,0,0,0,0,0,0,0,Name,Text,0,0,0,"調べる",0];
      Scene_type = "メイン";
      break;
      case "調べる包丁":
      var Text = "手入れをしましょう。";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁2",0];
      if(have("使い古された包丁")) Datas[0] = 59;
      if(have("新品で強靭な包丁")) Datas[0] = 60;
      if(have("折れた包丁")) Datas[0] = 61;
      Scene_type = "メイン";
      break;
      case "調べる包丁2":
      var C1 = "つきつける";
      var C2 = "やめる";
      var C3 = 0;
      var C4 = 0;
      Flag[4] = Flag[4].split(",");
      Flag[4] = Flag[4][1]*1;
      Datas = [Datas[0],0,0,0,C1,C2,C3,C4,"つきつける",Flag[4],0,0,0,0,Number];
      if(have("使い古された包丁")) Datas[0] = 59;
      if(have("新品で強靭な包丁")) Datas[0] = 60;
      if(have("折れた包丁")) Datas[0] = 61;
      Scene_type = "チョイス";
      break;
      case "調べる包丁修理":
      var Text = "よ～し。(改行)時の魔術師を召喚！";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理2",0,"0290,0252,15",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理2":
      var Text = "時の魔術師の効果発動！";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理3",0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理3":
      var Text = "時の魔術師の効果発動！(改行)タイム・ルーレット！";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理4",0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理4":
      var Text = "……";
      Datas = [Datas[0],0,0,0,0,0,2,0,"",Text,0,0,0,"調べる包丁修理5",0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理5":
      var Text = "……成功！";
      After = "調べる包丁修理成功";
      if(rand(1)==1){
        Text = "……失敗！";
        After = "調べる包丁修理失敗";
      }
      Datas = [Datas[0],0,0,0,0,0,2,0,"",Text,0,0,0,After,0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理成功":
      var Text = "いっけー！";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理成功2",0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理成功2":
      var Text = "いっけー！(改行)タイム・マジック！";
      Datas = [Datas[0],0,0,0,0,0,2,0,Name,Text,0,0,0,"調べる包丁修理成功3",0,"0290,0252,0",8];
      Scene_type = "メイン";
      break;
      case "調べる包丁修理成功3":
      if(have("使い古された包丁")){
        Get_I_C_F("アイテム","使い古された包丁","書き換え","新品で強靭な包丁");
      }
      else if(have("折れた包丁")){
        Get_I_C_F("アイテム","折れた包丁","書き換え","新品で強靭な包丁");
      }
      Get_I_C_F("アイテム","新品で強靭な包丁","(改行)最強の包丁。(改行)どんな攻撃にも耐えられることだろう。",9);
      Scene_type = [9,"新品で強靭な包丁になった！",Flag[4]];
      break;
      case "調べる包丁修理失敗":
      if(have("使い古された包丁")){
        Get_I_C_F("アイテム","使い古された包丁","書き換え","折れた包丁");
        Get_I_C_F("アイテム","折れた包丁","無惨。(改行)これじゃ使えもしない。",10,"調べる");
      }
      Scene_type = [10,"包丁が折れてしまった！",Flag[4]];
      break;
      case "使う時の魔術師_1":
      T_Name = Name;
      Text = "時の魔術師を召喚！";
      Rewind = 0;
      Before = 0;
      Number = 0;
      After = "使う時の魔術師_2";
      Skip = Flag[4];
      Datas = [Datas[0],0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0600,0250,15",8];
      Scene_type = "メイン";
      break;
      case "使う時の魔術師_2":
      T_Name = Name;
      Text = "……";
      Rewind = 0;
      Before = "使う時の魔術師_1";
      Number = 0;
      After = "使う時の魔術師_3";
      Skip = Flag[4];
      Datas = [Datas[0],0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0600,0250,0",8];
      Scene_type = "メイン";
      break;
      case "使う時の魔術師_3":
      T_Name = Name;
      Text = "……意味はないけど結構楽しいわねコレ。";
      Rewind = "使う時の魔術師_1";
      Before = "使う時の魔術師_2";
      Number = 0;
      After = Flag[4];
      Skip = 0;
      Datas = [Datas[0],0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0600,0250,0",8];
      Scene_type = "メイン";
      break;
    case 1:
      Data = true;
      Item_Flag = [];
      Character_Flag = [];
      var Flag2 = [];
      Flag2[0] = Flag[0];
      Flag2[1] = Flag[1];
      Flag2[2] = Flag[2];
      Flag2[8] = Flag[8];
      Flag2[9] = Flag[9];
      Flag = Flag2;
      Flag[6] = 10;
      R_S(Number,21);
      Get_I_C_F("アイテム","学生証","ステージをする時に必要な、(改行)大切なカードだ。",1);
      Get_I_C_F("人物","友希 あいね","スターハーモニー学園に通うアイドル。(改行)私と出会ってアイドル科に転入した。(改行)可愛い。",1);
      var T_Name = "友希 あいね";
      var Text = "これまでの『アイカツフレンズ！』。";
      Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
      Scene_type = "メイン";
      break;
    case 2:
      var T_Name = "あいね";
      var Text = "私　友希あいね。";
      Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
      Scene_type = "メイン";
      break;
      case 3:
        var T_Name = "あいね";
        var Text = "スターハーモニー学園に通う中学２年生。";
        Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 4:
        var T_Name = "あいね";
        var Text = "学園のトップアイドル　" + Surname +" "+ Name + "ちゃんと出会って(改行)アイドル科に転入したんだ。";
        Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 5:
        var T_Name = "あいね";
        var Text = "ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で(改行)私たちを元気に引っ張ってくれるエマちゃん。";
        Datas = [1,0,10,15,0,0,9,15,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 6:
        var T_Name = "あいね";
        var Text = "凸凹だけどすっごく仲よしな２人は(改行)ついにフレンズになった。";
        Datas = [1,0,10,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 7:
        var T_Name = "あいね";
        var Text = "アイドルは　カードも友達　ファンも友達。(改行)目指せ　友達100万人！";
        Datas = [1,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 8:
        Get_I_C_F("人物","日向 エマ","スターハーモニー学園に通うアイドル。(改行)一つ上の先輩。(改行)語彙が古い。",3);
        var T_Name = "日向エマ";
        var Text = "プリティー！";
        Datas = [52,0,0,0,0,0,9,15,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 9:
        Get_I_C_F("人物","蝶乃 舞花","スターハーモニー学園に通うアイドル。(改行)エマちゃんとフレンズ(改行)「ハニーキャット」になった。",2);
        var T_Name = "蝶乃舞花";
        var Text = "セクシー！";
        Datas = [52,0,10,15,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 10:
        var T_Name = "二人";
        var Text = "ハニーキャット！";
        Datas = [2,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 11:
        var T_Name = "あいね";
        var Text = "うわ～！かっこいい！！";
        Datas = [52,0,1,15,0,0,9,15,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 12:
        var T_Name = Surname+Name;
        var Text = "ハニーキャット…２人にぴったりなフレンズ名ね。";
        Datas = [52,0,1,0,0,0,2,15,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 13:
        var T_Name = "あいね";
        var Text = "たしかに。舞花ちゃんもエマちゃんも(改行)猫っぽいイメージあるし。";
        Datas = [52,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 14:
        var T_Name = "エマ";
        var Text = "でしょでしょ。(改行)フレンズ組もうってなったら(改行)２人で盛り上がっちゃって。(改行)コンセプトとか一から作り上げてくのって(改行)ワクワクするよね。";
        Datas = [52,0,1,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 15:
        var T_Name = "舞花";
        var Text = "あのキメポーズはちょっと恥ずいんですけど…";
        Datas = [52,0,10,15,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 16:
        var T_Name = "エマ";
        var Text = "え～っ！？舞花だってノリノリで考えてたじゃん！";
        Datas = [52,0,10,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 17:
        var T_Name = "舞花";
        var Text = "あのときは…。(改行)エマとフレンズを組めたから(改行)テンション上がっちゃって…。";
        Datas = [52,0,10,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 18:
        var T_Name = "エマ";
        var Text = "うんうん。(改行)かわいいやつめ！";
        Datas = [52,0,10,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 19:
        var T_Name = "あいね";
        var Text = "二人ともすっごく楽しそう。(改行)フレンズっていいな〜。";
        Datas = [52,0,1,0,0,0,9,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 20:
        var T_Name = Name;
        var Text = "……………";
        Datas = [52,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
        Scene_type = "メイン";
        break;
      case 21:
        Get_I_C_F("人物","日向 エマ","スターハーモニー学園に通うアイドル。(改行)一つ上の先輩。(改行)語彙が古い。",3);
        Get_I_C_F("人物","蝶乃 舞花","スターハーモニー学園に通うアイドル。(改行)エマちゃんとフレンズ(改行)「ハニーキャット」になった。",2);
        var C1 = "……………";
        var C2 = "あいね！私達もフレンズを組みましょう！";
        var C3 = 0;
        var C4 = 0;
        Datas = [52,1,0,2,C1,C2,C3,C4,24,22,0,0,Rewind,Before,Number];
        Scene_type = "チョイス";
        break;
        case 22:
         R_S(Number,248);
          Get_I_C_F("フラグ","即決");
          var T_Name = Name;
          var Text = "あいね！私達もフレンズを組みましょう！";
          Datas = [52,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip,0,0,"即決！",1];
          Scene_type = "メイン";
          break;
        case 23:
          var T_Name = "あいね";
          var Text = "わ〜っ…　うん！！";
          Datas = [52,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,23.1,Skip];
          Scene_type = "メイン";
          break;
        case 23.1:
          var T_Name = Name;
          var Text = "あいね…。";
          Datas = [52,0,1,0,0,0,11,0,T_Name,Text,Rewind,23,Number,248,0];
          Scene_type = "メイン";
          break;
        case 24:
         R_S(Number,31);
          var T_Name = Name;
          var Text = "……………";
          Datas = [52,0,0,0,0,0,4,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 25:
          var T_Name = "";
          var Text = "その晩　" +Name+ "の自室";
          Datas = [3,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 26:
          var T_Name = Name;
          var Text = "あいね、私とフレンズになりましょう。";
          Datas = [4,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 27:
          var T_Name = Name;
          var Text = "フゥ…。";
          Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 28:
          var T_Name = Name;
          var Text = "古今東西あらゆる占いで(改行)私とあいねの相性はバッチリだってわかったし…。";
          Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 29:
          var T_Name = Name;
          var Text = "それに何より私の直感があいねとフレンズを組めば(改行)すごいことが起きるってビビっと訴えかけてる。";
          Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 30:
          var T_Name = Name;
          var Text = "あとは…。";
          Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
          Scene_type = "メイン";
          break;
        case 31:
          Get_I_C_F("人物","友希 あいね","スターハーモニー学園に通うアイドル。(改行)私と出会ってアイドル科に転入した。(改行)可愛い。ぜひフレンズになりたい。",1);
          Get_I_C_F("フラグ","あいねとフレンズを組む決意をした");
          var C1 = "ドラマチックな展開のフレンズ結成ね。";
          var C2 = "今すぐあいねに電話をかけましょう。";
          var C3 = 0;
          var C4 = 0;
          Datas = [5,0,0,2,C1,C2,C3,C4,32,31.1,0,0,Rewind,Before,Number];
          Scene_type = "チョイス";
          break;
          case 31.1:
           R_S(Number,248);
            Get_I_C_F("フラグ","電話をした");
            var T_Name = Name;
            var Text = "もしもし？"+Name+"ちゃん？";
            if(have("妥協した")){
              Rewind = 54.1;
              Before = 54.2;
            }
            Datas = [5,0,17,15,0,0,2,0,T_Name,Text,Rewind,Before,Number,31.2,Skip,0,0,"電話",0];
            Scene_type = "メイン";
            break;
          case 31.2:
            var T_Name = Name;
            var Text = "あいね、私とフレンズになりましょう。";
            if(have("妥協した")) Rewind = 54.1;
            else Rewind = 0;
            Datas = [5,0,17,0,0,0,2,0,T_Name,Text,Rewind,31.1,Number,31.3,Skip];
            Scene_type = "メイン";
            break;
          case 31.3:
            var T_Name = "あいね";
            var Text = "わ〜っ…　うん！！";
            Datas = [5,0,17,0,0,0,2,0,T_Name,Text,Rewind,31.2,Number,248,0];
            Scene_type = "メイン";
            break;
          case 32:
           R_S(Number,35);
            var T_Name = Name;
            var Text = "あとはドラマチックな展開あってのフレンズ結成ね。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 33:
            var T_Name = Name;
            var Text = "そう…ラブミーティアの二人みたいに。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 34:
            var T_Name = "";
            var Text = "ラブミーティアの結成について復習しておく？";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 35:
            var C1 = "はい";
            var C2 = "いいえ";
            var C3 = 0;
            var C4 = 0;
            Datas = [5,0,0,2,C1,C2,C3,C4,36,51,0,0,Rewind,Before,Number];
            Scene_type = "チョイス";
            break;
          case 36:
            Get_I_C_F("人物","神城 カレン","ダイヤモンドフレンズ、ラブミーティア。(改行)現在はアイカツ親善大使として全国を巡り(改行)アイカツを学ぶ学校作りに励んでいる。",4);
            Get_I_C_F("人物","明日香 ミライ","ダイヤモンドフレンズ、ラブミーティア。(改行)恐らくフレンズ次元では一番格上。(改行)スパイダーマンレベルの身体能力の持ち主。",5);
           R_S(Number,54);
            Get_I_C_F("フラグ","ラブミーティア結成を復習した");
            var T_Name = Name;
            var Text = "ラブミーティアのドラマチック極まりない(改行)結成エピソードはもはや伝説。";
            Datas = [6,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 37:
            var T_Name = Name;
            var Text = "いえ、アイカツ界における神話とすらなっている。";
            Datas = [6,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 38:
            var T_Name = Name;
            var Text = "スターハーモニー学園に入って(改行)トップアイドルに駆け上がった(改行)カレンさんとミライさん。";
            Datas = [27,15,12,15,0,0,13,15,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 39:
            var T_Name = Name;
            var Text = "二人は出会ってすぐに意気投合したのだけど(改行)フレンズ結成にはあと一歩踏み込めないでいた。";
            Datas = [27,0,12,0,0,0,13,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 40:
            var T_Name = Name;
            var Text = "そんなとき　二人を揺るがす大事件が！(迫真)";
            Datas = [7,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 41:
            var T_Name = Name;
            var Text = "カレンさんは世界的プロデューサーから(改行)アイドルとしてプロデュースしたいという(改行)オファーを受けてアメリカに旅立つことになったのだ。";
            Datas = [53,15,0,0,0,0,12,15,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 42:
            var T_Name = "明日香ミライ";
            var Text = "カレン！";
            Datas = [53,0,13,15,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 43:
            var T_Name = "ミライ";
            var Text = "ハァ…ハァ…ハァ…。";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 44:
            var T_Name = "神城カレン";
            var Text = "ミライさん…。";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 45:
            var T_Name = "ミライ";
            var Text = "アメリカになんて行かせない。(改行)カレンをいちばん輝かせることができるのは…。";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 46:
            var T_Name = "ミライ";
            var Text = "私なんだから！";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 47:
            var T_Name = "カレン";
            var Text = "…！";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 48:
            var T_Name = "カレン";
            var Text = "はい 知ってました。";
            Datas = [53,0,13,0,0,0,12,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 49:
            var T_Name = Name;
            var Text = "こうして二人はラブミーティアを結成したのであった…。";
            Datas = [8,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,false,false,"カレン強奪事件",1];
            Scene_type = "メイン";
            break;
          case 50:
            var T_Name = Name;
            var Text = "う～っ…ハァ！ 何度読んでもやっぱりいい！！(改行)ずっと憧れていた…。(改行)私もフレンズを組むなら(改行)こんなふうにドラマチックにって。";
            Datas = [9,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 51:
            if(have("ラブミーティア結成を復習した")!=true) R_S(Number,54);
            var T_Name = Name;
            var Text = "ドラマチックな告白か…。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 52:
            var T_Name = Name;
            var Text = "う〜ん…　考えてみると難しい。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 53:
            var T_Name = Name;
            var Text = "自分がやるとなると想像がつかないというか。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 54:
            var C1 = "ココちゃんに相談してみましょう。";
            var C2 = "妥協して一刻も早くあいねとフレンズになるべきよ。";
            var C3 = 0;
            var C4 = 0;
            Datas = [5,0,0,2,C1,C2,C3,C4,55,54.1,0,0,Rewind,Before,Number];
            Scene_type = "チョイス";
            break;
          case 54.1:
            Get_I_C_F("フラグ","妥協した");
            var T_Name = Name;
            var Text = "ここは妥協して(改行)一刻も早くあいねとフレンズになるべきね。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,Number,54.2,248];
            Scene_type = "メイン";
            break;
          case 54.2:
            var T_Name = Name;
            var Text = "そうと決まればさっそくあいねに電話しましょう。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,54.1,Number,31.1,248];
            Scene_type = "メイン";
            break;
          case 55:
           R_S(Number,57);
            Get_I_C_F("人物","ココ","なんとかAI。(改行)開発が遅くなる原因は8割りが(改行)ココちゃんが表情豊かなせいである。",6);
            var T_Name = Name;
            var Text = "ハロー　ココちゃん。";
            Datas = [5,0,0,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 56:
            var T_Name = "ココ";
            var Text = "ココだよ。";
            Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
            Scene_type = "メイン";
            break;
          case 57:
            var C1 = "フレンズの誘い方を教えて。";
            var C2 = "ドラマチックな告白について教えて。";
            var C3 = "あいねのアイカツモバイルを盗聴して。";
            var C4 = 0;
            Datas = [5,20,0,2,C1,C2,C3,C4,57.1,76,58,0,Rewind,Before,Number];
            Scene_type = "チョイス";
            break;
            case 57.1:
             R_S(Number,95);
              Get_I_C_F("フラグ","普通の聞き方");
              var T_Name = Name;
              var Text = "フレンズの誘い方を教えて。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,57.2,Skip];
              Scene_type = "メイン";
              break;
            case 57.2:
              var T_Name = "ココ";
              var Text = "ココろえました！";
              Datas = [5,0,21,0,0,0,2,0,T_Name,Text,0,57.1,Number,57.3,Skip];
              Scene_type = "メイン";
              break;
            case 57.3:
              var T_Name = "ココ";
              var Text = "フレンズの誘い方と言っても色々あるけど、(改行)どんな感じがいいかな？";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,57.2,Number,57.4,Skip];
              Scene_type = "メイン";
              break;
            case 57.4:
              var T_Name = Name;
              var Text = "なるべくドラマチックなのでお願い。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,57.3,Number,85,Skip];
              Scene_type = "メイン";
              break;
            case 58:
             R_S(Number,75);
              var T_Name = Name;
              var Text = "あいねのアイカツモバイルを盗聴して。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 59:
              var T_Name = "ココ";
              var Text = "ココろえ…";
              Datas = [5,0,21,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 60:
              var T_Name = "ココ";
              var Text = "え～っ！？アイカツモバイルを盗聴！？(改行)あいねちゃんの！？どうして！？";
              Datas = [5,0,22,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 61:
              var T_Name = Name;
              var Text = "あいねとフレンズになるための(改行)ドラマチックな告白を成功させるのに必要なの。";
              Datas = [5,0,22,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 62:
              var T_Name = "ココ";
              var Text = "う〜ん(改行)それでどうして盗聴が必要になるのかなぁ？";
              Datas = [5,0,23,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 63:
              var T_Name = Name;
              var Text = "あいねの趣味、生活を完璧に理解して(改行)あいねが喜ぶ完璧なエスコートをするためよ。";
              Datas = [5,0,23,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 64:
              var T_Name = "ココ";
              var Text = "えぇ…";
              Datas = [5,0,24,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 65:
              var T_Name = "ココ";
              var Text = "悪いけど、それはココが協力できることじゃないよ。";
              Datas = [5,0,24,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 66:
              var T_Name = "ココ";
              var Text = "ごめんなさい！";
              Datas = [5,0,25,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 67:
              var T_Name = Name;
              var Text = "う〜ん、それじゃあ盗聴機を仕込むしかないわね…(改行)何かいい方法は…";
              Datas = [5,0,25,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 68:
              var T_Name = "ココ";
              var Text = "…お友達どうしでアクセサリーを持つのが(改行)流行ってるみたいだよ。(改行)２つがそろうと１つになるデザインが人気みたいだね。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 69:
              var T_Name = Name;
              var Text = "なるほど、それに仕込めば…(改行)早速製作に取り掛かりましょう。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 70:
              var T_Name = "ココ";
              var Text = "…関係ないけど、ペットが迷子になった時のための(改行)首輪につけられる小さなGPS発信機っていうのも(改行)あるみたいだね。";
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 71:
              var T_Name = "ココ";
              var Text = "それがあれば、ココにも場所が表示できるよ。";
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 72:
              var T_Name = "ココ";
              var Text = "こんな風に。";
              Datas = [44,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip,false,false,"犯行の手口",2];
              Scene_type = "メイン";
              break;
            case 73:
              var T_Name = Name;
              var Text = "うん！　これよ！！";
              Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 74:
              var T_Name = "";
              var Text = "後日、アクセサリーを渡すことに成功した(改行)"+Name+"ちゃんはそれからしばらくして(改行)幸せなフレンズ生活をおくったのであった…。";
              Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,0];
              Scene_type = "メイン";
              break;
            case 75:
              var T_Name = "ストーカーエンド";
              var Text = "疑惑はあるけど実際はこんな事してないよ！(改行)…たぶん。";
              Datas = [45,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,"ゲームオーバー",0];
              Scene_type = "メイン";
              break;
            case 76:
             R_S(Number,81);
              var T_Name = Name;
              var Text = "ドラマチックな告白について教えて。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 77:
              var T_Name = "ココ";
              var Text = "ココろえ…";
              Datas = [5,0,21,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 78:
              var T_Name = "ココ";
              var Text = "え～っ！？ドラマチックな告白？";
              Datas = [5,0,26,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 79:
              var T_Name = "ココ";
              var Text = "そ…それって恋愛について知りたいってことだよね？";
              Datas = [5,0,27,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 80:
              var T_Name = "ココ";
              var Text = "さすが"+Name+"ちゃん大人だ！";
              Datas = [5,0,28,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 81:
              var C1 = "はい";
              var C2 = "いいえ";
              var C3 = 0;
              var C4 = 0;
              Datas = [5,28,0,2,C1,C2,C3,C4,81.1,82,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 81.1:
             R_S(Number,134);
              Get_I_C_F("フラグ","悪ノリ");
              var T_Name = Name;
              var Text = "まあ、私はそれなりに大人よね。";
              Datas = [5,0,28,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,81.2,Skip];
              Scene_type = "メイン";
              break;
            case 81.2:
              var T_Name = "ココ";
              var Text = "よ～し。ドラマチックな告白で検索。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,0,81.1,Number,81.3,Skip];
              Scene_type = "メイン";
              break;
            case 81.3:
              var T_Name = "ココ";
              var Text = "こんな結果が出たよ。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,81.2,Number,118,Skip];
              Scene_type = "メイン";
              break;
            case 82:
             R_S(Number,95);
              var T_Name = Name;
              var Text = "違う違う。フレンズになってくださいって(改行)ドラマチックに告白するにはってこと。";
              Datas = [5,0,28,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 83:
              var T_Name = "ココ";
              var Text = "あっ…";
              Datas = [5,0,29,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 84:
              var T_Name = "ココ";
              var Text = "そういうことか。";
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 85:
              if(have("普通の利き方")) Before = 57.4;
              var T_Name = "ココ";
              var Text = "ドラマチックな告白で検索。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 86:
              var T_Name = "ココ";
              var Text = "あっ。";
              Datas = [5,0,31,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 87:
              var T_Name = "ココ";
              var Text = "こんな結果が出たよ。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 88:
              var T_Name = Name;
              var Text = "映画館で　ドラマチックに…。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 89:
              var T_Name = "イメージ";
              var Text = "(なぜか他に客がいない映画館)";
              Datas = [10,15,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 90:
              var T_Name = "イメージ";
              var Text = "(多分ペンギンが二時間ほどかっこつけるだけの映画)";
              Datas = [11,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 91:
              var T_Name = "イメージ";
              var Text = "(突然途切れる映像)";
              Datas = [12,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 92:
              var T_Name = "映像　"+Name;
              var Text = "あいね　私とフレンズになりましょう。";
              Datas = [13,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 93:
              var T_Name = "イメージ　あいね";
              var Text = "わぁ…";
              Datas = [14,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 94:
              var T_Name = "イメージ　あいね";
              var Text = "うん！！";
              Datas = [15,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 95:
              var C1 = "うん！　これよ！！";
              var C2 = "いや…　ないわね。";
              var C3 = 0;
              var C4 = 0;
              Datas = [15,0,0,0,C1,C2,C3,C4,95.1,96,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 95.1:
             R_S(Number,0);
              var T_Name = Name;
              var Text = "うん！　これよ！！";
              Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,95.2,0];
              Scene_type = "メイン";
              break;
            case 95.2:
              var T_Name = "";
              var Text = "映画館を貸切るために"+Name+"ちゃんは(改行)バイトに明け暮れるのであった…。";
              Datas = ["Black",0,0,0,0,0,0,0,T_Name,Text,0,95.1,Number,"ゲームオーバー",0];
              Scene_type = "メイン";
              break;
            case 96:
             R_S(Number,110);
              var T_Name = Name;
              var Text = "いや…　ないわね。";
              Datas = [5,0,20,0,0,0,14,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 97:
              var T_Name = "ココ";
              var Text = "そっか。";
              Datas = [5,0,32,0,0,0,14,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 98:
              var T_Name = "ココ";
              var Text = "だったら…。";
              Datas = [5,0,33,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 99:
              var T_Name = "ココ";
              var Text = "う〜ん…。";
              Datas = [5,0,34,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 100:
              var T_Name = "ココ";
              var Text = "(ピコン)";
              Datas = [5,0,31,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 101:
              var T_Name = Name;
              var Text = "ゲーム感覚でドラマチックに…。";
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 102:
              var T_Name = "イメージ　あいね";
              var Text = "失礼しま〜す。";
              Datas = [16,15,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 103:
              var T_Name = "イメージ　あいね";
              var Text = "あっ…。";
              Datas = [17,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 104:
              var T_Name = "";
              var Text = "(中庭)";
              Datas = [18,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 105:
              var T_Name = "";
              var Text = "(レッスンルーム)";
              Datas = [19,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 106:
              var T_Name = "イメージ　あいね";
              var Text = "あっ…。";
              Datas = [20,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 107:
              var T_Name = "イメージ　あいね";
              var Text = "ん…。";
              Datas = [21,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 108:
              var T_Name = "イメージ　"+Name;
              var Text = "あいね　私と　フレンズになりましょう。";
              Datas = [22,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 109:
              var T_Name = "イメージ　あいね";
              var Text = "わ〜っ…　うん！！";
              Datas = [23,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 110:
              var C1 = "うん！　これよ！！";
              var C2 = "ドラマチックの意味をはき違えているような…";
              var C3 = 0;
              var C4 = 0;
              Datas = [23,0,0,0,C1,C2,C3,C4,110.1,111,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 110.1:
              Get_I_C_F("フラグ","ゲーム感覚");
              var T_Name = Name;
              var Text = "うん！　これよ！！";
              Datas = [26,0,0,0,0,0,0,0,T_Name,Text,0,0,Number,110.2,248];
              Scene_type = "メイン";
              break;
            case 110.2:
              var T_Name = "";
              var Text = "見事成功し、(改行)"+Name+"ちゃんとあいねちゃんはフレンズになった。";
              Datas = [22,0,0,0,0,0,0,0,T_Name,Text,0,110.1,Number,248,0];
              Scene_type = "メイン";
              break;
            case 111:
             R_S(Number,120);
              var T_Name = Name;
              var Text = "いや…　これって(改行)ドラマチックの意味をはき違えているような…";
              Datas = [5,0,0,0,0,0,14,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 112:
              var T_Name = "ココ";
              var Text = "う〜っ…　ココにも意地があるもん。";
              Datas = [5,0,35,0,0,0,14,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 113:
              var T_Name = "ココ";
              var Text = Name+"ちゃんが満足する答えを(改行)必ず見つけてみせるんだから！";
              Datas = [5,0,35,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 114:
              var T_Name = "ココ";
              var Text = "う〜ん…。";
              Datas = [5,0,36,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 115:
              var T_Name = "ココ";
              var Text = "°△°";
              Datas = [5,0,37,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 116:
              var T_Name = "ココ";
              var Text = "出た出た　出ました〜！";
              Datas = [5,0,38,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 117:
              var T_Name = "ココ";
              var Text = "最高にドラマチックな告白ができるスポットを(改行)見つけたよ！";
              Datas = [5,0,39,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 118:
              if(have("悪ノリ")) Before = 81.3;
              var T_Name = "ココ";
              var Text = "この観覧車でゴンドラが(改行)一番高くなったところで告白すると";
              Datas = [24,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 119:
              if(have("悪ノリ")){
                After = 121;
              }
              var T_Name = "ココ";
              var Text = "二人はず〜っと　幸せになれるんだって。";
              Datas = [25,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 120:
              var C1 = "うん！　これよ！！";
              var C2 = "これって男女の恋愛じゃない？";
              var C3 = 0;
              var C4 = 0;
              Datas = [25,0,0,0,C1,C2,C3,C4,121,121.1,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 121.1:
             R_S(Number,134);
              var T_Name = Name;
              Get_I_C_F("フラグ","疑惑");
              var Text = "これって男女の恋愛じゃない？";
              After = 121.2;
              Datas = [5,0,20,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 121.2:
              var T_Name = "ココ";
              var Text = "…？それがどうかした？";
              Rewind = 0;
              Before = 121.1;
              After = 121.3;
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 121.3:
              var T_Name = Name;
              var Text = "…そうね！たいした問題じゃないわ！";
              Before = 121.2;
              After = 121.4;
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 121.4:
              var T_Name = Name;
              var Text = "…そうね！たいした問題じゃないわ！(改行)ドラマチックだし！";
              Before = 121.3;
              After = 122;
              Datas = [5,0,30,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 121:
              if(have("悪ノリ")) Before = 119;
              else R_S(Number,134);
              var T_Name = Name;
              var Text = "うん！　これよ！！";
              Datas = [26,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 122:
              if(have("疑惑")) Before = 121.4;
              var T_Name = "後日";
              var Text = "学校の中庭";
              Datas = [27,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,122.9,Skip];
              Scene_type = "メイン";
              break;
            case 122.9:
              var T_Name = "あいね";
              var Text = "うわ〜っ　うれしい！(改行)"+Name+"ちゃんと　遊びにいけるなんて楽しみだな。";
              Datas = [27,0,1,15,0,0,2,15,T_Name,Text,Rewind,122,Number,123,Skip];
              Scene_type = "メイン";
              break;
            case 123:
              var T_Name = Name;
              var Text = "今度の土曜　休みが取れたから(改行)久しぶりに　あいねと…。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 124:
              var T_Name = "あいね";
              var Text = "今度の土曜…。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 125:
              var T_Name = Name;
              var Text = "もしかして　何か用事があった？(凄く悲しげな顔)";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 126:
              var T_Name = "あいね";
              var Text = "うん…　ブランド選びのときに　友達になった(改行)なこちゃんがこっちに来るから(改行)会おうって約束したの。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 127:
              var T_Name = Name;
              var Text = "なこちゃんって　名古屋で　アイカツしてる子ね？";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 128:
              var T_Name = "あいね";
              var Text = "うん！　友達になってから(改行)ずっと　やり取りしてたんだ。";
              Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 129:
              var T_Name = Name;
              var Text = "あいねと会って相談がしたい…。";
              Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 130:
              var T_Name = "あいね";
              var Text = "うん　何だろうね？";
              Datas = [28,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 131:
              var T_Name = Name;
              var Text = "あっ…。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 132:
              var T_Name = Name;
              var Text = "(相談って　まさか…)";
              Datas = [29,0,16,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 133:
              var T_Name = "あいね";
              var Text = "そうだ。　なこちゃんと私たち三人で遊びにいこうよ。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 134:
              Get_I_C_F("人物","海老原 なこ","名古屋でアイカツしてる女の子。",7);
              var C1 = "そうね。";
              var C2 = "私のあいねを誑かすなんて許せない。";
              var C3 = "相談があるなら二人の方がいいでしょう。";
              var C4 = 0;
              Datas = [27,1,0,2,C1,C2,C3,C4,147.1,134.1,135,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 134.1:
             R_S(Number,137);
              Get_I_C_F("人物","海老原 なこ","名古屋でアイカツしてる女の子。(改行)許せない。",7);
              Get_I_C_F("人物","友希 あいね","スターハーモニー学園に通うアイドル。(改行)私と出会ってアイドル科に転入した。(改行)可愛い。ぜひフレンズになりたい。(改行)なこちゃんには渡さない。",1);
              Get_I_C_F("フラグ","嫉妬");
              var T_Name = Name;
              After = 134.2;
              var Text = "(…私のあいねを誑かすなんて許せない。)";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 134.2:
              var T_Name = Name;
              Rewind = 0;
              Before = 134.1;
              After = 134.9;
              var Text = "いえ。私は遠慮しておくわ。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 134.9:
              Rewind = 0;
              Before = 135;
              After = 136;
              if(have("嫉妬")){
                Rewind = 134.1;
                Before = 134.2;
              }
              var T_Name = Name;
              var Text = "相談があるなら　二人の方がいいでしょう？";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 135:
             R_S(Number,137);
              var T_Name = Name;
              After = 134.9;
              var Text = "ううん。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 135.1:
              Get_I_C_F("フラグ","布教活動");
              var T_Name = Name;
              var Text = "あ、そうだ。(改行)コレをなこちゃんに。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,0,0,Number,135.2,135.5,"0600,0250,15",4];
              Scene_type = "メイン";
              break;
            case 135.2:
              var T_Name = "あいね";
              var Text = "ラブミーティアのCD…？ いいの？";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,0,135.1,Number,135.3,135.5,"0600,0250,0",4];
              Scene_type = "メイン";
              break;
            case 135.3:
              var T_Name = Name;
              var Text = "ええ。それは布教用だから。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,135.1,135.2,Number,135.4,135.5,"0600,0250,0",4];
              Scene_type = "メイン";
              break;
            case 135.4:
              var T_Name = "あいね";
              var Text = "…？ ありがとう、"+Name+"ちゃん。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,135.1,135.3,Number,135.5,0,"0600,0250,0",4];
              Scene_type = "メイン";
              break;
            case 135.5:
              Get_I_C_F("アイテム","プライド","消失");
              Scene_type = [4,"プライドを失った。",135.6];
              break;
            case 135.6:
              var T_Name = "あいね";
              var Text = "それじゃあまたね。";
              Datas = [27,0,1,0,0,0,2,0,T_Name,Text,0,0,Number,136,137,0,0,"気高さ刻み込め",1];
              Scene_type = "メイン";
              break;
            case 136:
              if(have("布教活動")){
                Rewind = 134.1;
                Before = 135.6;
              }
              else Rewind = 135;
              var T_Name = "";
              var Text = "土曜日";
              Datas = [5,0,0,0,0,0,2,30,T_Name,Text,Rewind,134.9,Number,After,Skip];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 137:
              if(have("アイカツカード")||have("使い古された包丁")||have("新品で強靭な包丁")||have("折れた包丁")||have("偶然、必然。")){
                Rewind = 0;
                Before = 0;
              }
              else{
                Rewind = 135;
                Before = 136;
                if(have("嫉妬")) Rewind = 134.1;
                if(have("布教活動")){
                  Rewind = 134.1;
                  Before = 135.6;
                }
              }
              var C1 = "(今日は計画を練りましょう。)";
              var C2 = "(気になるわ…。こっそり行動を監視しましょう。)";
              var C3 = "調べる";
              var C4 = 0;
              Datas = [5,0,0,2,C1,C2,C3,C4,12345,138,0,0,Rewind,Before,Number];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "チョイス";
              break;
            case 12345:
             R_S(Number,147);
              var Text = "…";
              Get_I_C_F("フラグ","落ち着き");
              Datas = [5,0,0,0,0,0,2,0,Name,Text,Rewind,Before,Number,After,Skip];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break
            case 12346:
              var Text = "…ダメ！";
              Datas = [5,0,0,0,0,0,2,0,Name,Text,Rewind,Before,Number,After,Skip];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break
            case 12347:
              var Text = "…ダメ！やっぱり気になる！";
              Datas = [5,0,0,0,0,0,2,0,Name,Text,Rewind,Before,Number,138,Skip];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break
            case 1138:
              var T_Name = Name;
              var Text = "あいねの為にデザインしたドレス…(改行)ピンクパートナーコーデのアイカツカードね。";
              if(have("双眼鏡")){
                Text = "やっぱり必要な気がする。";
                After = 1140;
              }
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0,"0290,0252,15",2];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1139:
              var T_Name = Name;
              var Text = "一応…持っておこうかな。";
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0,"0290,0252,00",2];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1140:
              if(have("双眼鏡")) After = 137;
              Get_I_C_F("アイテム","アイカツカード","あいねの為にデザインしたアイカツカード。(改行)ピンクパートナーコーデ。",2,"詳細",0);
              Scene_type = [2,"アイカツカードを手に入れた。",After];
              break;
            case 1141:
              var T_Name = Name;
              var Text = "あと、ついでに双眼鏡も。";
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1142:
              After = 137;
              Get_I_C_F("アイテム","双眼鏡","ストーカーの御供。",3,"調べる");
              if(have("嫉妬")) After = 1146;
              Scene_type = [3,"双眼鏡を手に入れた。",After];
              break;
              case 1142.1:
              Scene_type = "調べる";
              break;
            case 1143:
              Get_I_C_F("アイテム","アイカツカード","消失");
              var T_Name = Name;
              var Text = "やっぱり、アイカツカードは置いておきましょう。";
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,1142.1,0];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1144:
              var T_Name = Name;
              var Text = "ラブミーティアのCDがある。";
              if(have("プライド")) Text = "まだCDがある。";
              if(have("偶然、必然。")) Text = "更にもう一枚。";
              if(have("永遠の灯")){
                Text = "さすがにもうない。";
                After = 137;
                if(have("時の魔術師")==false&&have("使い古された包丁")){
                  Text = "あれ？これは…。";
                  After = 1148;
                }
              }
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1145:
              if(have("プライド")){
                if(have("偶然、必然。")){
                  Get_I_C_F("アイテム","永遠の灯","『アイカツ!』主題歌/挿入歌 2年目②(改行)STAR☆ANIS(改行)れみ･ふうり from STAR☆ANIS(改行)南田健吾",6,"再生");
                  Scene_type = [6,"永遠の灯のCDを手に入れた。",137];
                }
                else {
                  Get_I_C_F("アイテム","偶然、必然。","Third Color：PURPLE(改行)BEST FRIENDS！(改行)かぐや from BEST FRIENDS！(改行)片山将太,藤末 樹",5,"再生");
                  Scene_type = [5,"偶然、必然。のCDを手に入れた。","調べる"];
                }
              }
              else {
                Get_I_C_F("アイテム","プライド","そこにしかないもの／プライド(改行)BEST FRIENDS！(改行)カレン・ミライ from BEST FRIENDS！(改行)藤末 樹,片山将太",4,"再生");
                Scene_type = [4,"プライドのCDを手に入れた。","調べる"];
              }
              break;
            case 1146:
              var T_Name = Name;
              var Text = "…。";
              Datas = [5,0,0,0,0,0,2,0,T_Name,Text,0,0,0,After,0];
              if(have("アイカツカード")) Datas[0] = 55;
              Scene_type = "メイン";
              break;
            case 1147:
              Get_I_C_F("アイテム","使い古された包丁","包丁。(改行)手入れが必要だろう。",7,"調べる");
              After = 137;
              Scene_type =[7,"使い古された包丁をそっと鞄にしまった。",After];
              break;
            case 1148:
              Get_I_C_F("アイテム","時の魔術師","光属性(改行)レベル 2(改行)【魔法使い族/効果】(改行)攻撃力 500 守備力 400",8,"詳細",1);
              Scene_type =[8,"時の魔術師のカードを入手した。",137];
              break;
            case 138:
              if(have("落ち着き")) Before = 12347;
              else R_S(Number,147);
              var T_Name = "";
              var Text = "駅前";
              Datas = [30,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 139:
              var T_Name = "海老原なこ";
              var Text = "わぁ。";
              Datas = [30,0,0,0,15,15,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 140:
              var T_Name = "あいね";
              var Text = "お〜い！なこちゃん！";
              Datas = [30,0,1,15,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 141:
              var T_Name = "なこ";
              var Text = "あいねちゃん！";
              Datas = [30,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 142:
              var T_Name = "なこ";
              var Text = "久しぶり！ウフフ。";
              Datas = [30,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 143:
              var T_Name = Name;
              var Text = "(わざわざ　こっちに来てまで(改行) 相談したい事ってあいねと(改行) フレンズを組みたいって事なんじゃ…)";
              Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 144:
              var T_Name = Name;
              var Text = "あいね…。";
              Datas = [31,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 145:
              var T_Name = "なこ";
              var Text = "あいねちゃんちのカフェか。(改行)一度　来てみたかったんだよね。";
              Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 146:
              Get_I_C_F("人物","ペン様","あいねの実家「ペンギンカフェ」で(改行)働くペンギン、ぺんね。(改行)ちなみに、ペンギンカフェは(改行)兵庫県にも実在する。",8);
              var T_Name = "";
              var Text = "(～ペンギンの活躍シーンはカット～)";
              Datas = [32,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 147:
              var T_Name = "多分山下公園";
              var Text = "(その後も街を巡る二人。)";
              Skip = 172;
              Datas = [33,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 147.1:
              R_S(Number,172);
                Get_I_C_F("フラグ","一緒に行く");
                var T_Name = Name;
                var Text = "そうね。そうしましょう。";
                After = 147.2;
                Datas = [27,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
                Scene_type = "メイン";
                break;
            case 147.2:
              var T_Name = "土曜日";
              var Text = "(街を巡る三人。)";
              Rewind = 0;
              Before = 147.1;
              After = 154;
              Datas = [56,0,15,15,2,15,1,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 148:
             R_S(Number,172);
              var T_Name = "あいね";
              var Text = "あれ？"+Name+"ちゃん？";
              Datas = [56,0,15,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 149:
              var T_Name = "なこ";
              var Text = "えっ？";
              Datas = [56,0,15,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 150:
              var T_Name = Name;
              var Text = "あっ…";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 151:
              var T_Name = Name;
              var Text = "(しまった。近づきすぎた…)";
              if(have("諦める")) Text = "(しまった。つい気力がなくなって見つかった。)";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 152:
              var T_Name = Name;
              var Text = "あっ…えっと、やっぱり気になっちゃって。";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 153:
              var T_Name = "あいね";
              var Text = "そうなんだ。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 154:
              if(have("一緒に行く")) Before = 147.2;
              var T_Name = "なこ";
              var Text = "そうだ。"+Name+"ちゃんにも聞いて欲しいな。";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 155:
              var T_Name = Name;
              var Text = "え。";
              if(have("一緒に行く")) Text = "なに？";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 156:
              var T_Name = "なこ";
              var Text = "私ね、この間イベントで知り合った子と(改行)すっごく仲良くなって(改行)そのことフレンズを組みたいって思ってるんだけど…";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 157:
              var T_Name = "なこ";
              var Text = "私は中学を卒業するまで名古屋にいるつもりだから(改行)遠距離フレンズがうまくいくか不安で…";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 158:
              var T_Name = "なこ";
              var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 159:
              var T_Name = Name;
              var Text = "なれる！仲がいいなら絶対なれるわ！";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 160:
              var T_Name = "なこ";
              var Text = "ありがとう！そう言ってくれると勇気出てくるよ！";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 161:
              var T_Name = "なこ";
              var Text = "そういえば、今その子がこっちに来てるんだよね。";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 162:
              var T_Name = Name;
              var Text = "だったら、今から行って申し込んでみたら？";
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 163:
              var T_Name = "なこ";
              var Text = "うん！(改行)"+Name+"ちゃんのおかげで勇気出たし、(改行)フレンズ組もうって申し込んでみるよ。";
              if(have("諦める")) Datas[0] = 36;
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 164:
              var T_Name = "なこ";
              var Text = "また遊ぼうね、あいねちゃん！(改行)あいねちゃんも頑張ってね！";
              if(have("一緒に行く")) Text = "また遊ぼうね、"+Name+"ちゃん！(改行)それと、あいねちゃんも頑張ってね！";
              if(have("諦める")) Datas[0] = 36;
              Datas = [56,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 165:
              var T_Name = Name;
              var Text = "\"あいねちゃんも…？\"";
              Datas = [56,0,2,0,0,0,15,-15,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 166:
              var T_Name = "あいね";
              var Text = "うん！私も"+Name+"ちゃんと(改行)フレンズになる為の相談を…。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 167:
              var T_Name = "あいね";
              var Text = "あ。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 168:
              var T_Name = Name;
              var Text = "え。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 169:
              var T_Name = "あいね";
              var Text = "……私も、"+Name+"ちゃんと(改行)フレンズを組みたい！";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 170:
              var T_Name = Name;
              var Text = "あいね…。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 171:
              var T_Name = "あいね";
              var Text = "ダメ、かな…？";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 172:
              if(have("一緒に行く")){
                R_S(147.1,172);
                Rewind = 147.1;
              }
              else{
                R_S(148,172);
                Rewind = 148;
              }
              var T_Name = Name;
              Get_I_C_F("フラグ","あいねから誘う");
              var Text = "ううん。(改行)私も フレンズを組むなら(改行)あいねしかいないって思ってた。";
              Datas = [56,0,2,0,0,0,1,0,T_Name,Text,Rewind,171,Number,248,0];
              if(have("諦める")) Datas[0] = 36;
              Scene_type = "メイン";
              break;
            case 173:
             R_S(Number,188);
              var T_Name = Name;
              var Text = "これって…。";
              Datas = [34,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 174:
              var T_Name = Name;
              var Text = "フレンズ結成の流れにしか見えないんだけど。";
              Datas = [35,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 175:
              var T_Name = "どうみても赤レンガ倉庫";
              var Text = "";
              Datas = [36,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 176:
              var T_Name = "なこ";
              var Text = "うわ〜っ…。綺麗…。";
              Datas = [36,0,1,15,0,0,15,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 177:
              var T_Name = "あいね";
              var Text = "でしょう？(改行)なこちゃんにもこの景色を見せたかったんだ。";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 178:
              var T_Name = Name;
              var Text = "ここって…。";
              Datas = [36,0,2,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 179:
              var T_Name = Name;
              var Text = "(ココちゃんが言ってた観覧車…)";
              Datas = [36,0,2,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 180:
              var T_Name = Name;
              var Text = "(あいねとなこちゃんもそれを知ってて…)";
              Datas = [36,0,2,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 181:
              var T_Name = "なこ";
              var Text = "それでね、あいねちゃんに相談なんだけど。";
              Datas = [36,0,1,15,0,0,15,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 182:
              var T_Name = "あいね";
              var Text = "うん。";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 183:
              var T_Name = "なこ";
              var Text = "名古屋と東京で離れていてもフレンズになれるかな？";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 184:
              var T_Name = Name;
              var Text = "あっ…。";
              Datas = [36,0,2,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 185:
              var T_Name = "あいね";
              var Text = "うん！　気持ちがつながっていればきっとなれるよ。";
              Datas = [36,0,1,15,0,0,15,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 186:
              var T_Name = Name;
              var Text = "…。";
              Datas = [36,0,2,15,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 187:
              var T_Name = Name;
              var Text = "(本当に…それでいいの？)";
              Datas = [36,0,2,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 188:
              var C1 = "奪い取る";
              var C2 = "それでいい";
              var C3 = 0;
              if(have("新品で強靭な包丁")||have("使い古された包丁")) C3 = "殺してでも奪い取る";
              var C4 = 0;
              Datas = [36,2,0,0,C1,C2,C3,C4,189,188.1,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 188.1:
             R_S(Number,172);
              Get_I_C_F("フラグ","諦める");
              var T_Name = Name;
              After = 148;
              var Text = "(それでいいか…。もう帰ろう…。)";
              Datas = [36,0,2,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 189:
             R_S(Number,204);
              var T_Name = Name;
              var Text = "(私のフレンズはあいねしかいない。)";
              Datas = [36,0,2,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 190:
              var T_Name = Name;
              var Text = "(この気持ちに嘘はつけない！)";
              Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 191:
              var T_Name = "あいね";
              var Text = "えっ？　"+ Name.substring(0,1) +"…"+Name+"ちゃん？";
              Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 192:
              var T_Name = "なこ";
              var Text = "えっ？";
              Datas = [37,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 193:
              var T_Name = Name;
              var Text = "来て…　あいね！";
              Datas = [38,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 194:
              var T_Name = "あいね";
              var Text = "えっ？え〜！？";
              Datas = [39,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 195:
              var T_Name = "なこ";
              var Text = "…？";
              Datas = [36,0,15,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 196:
              var T_Name = "あいね";
              var Text = Name+"ちゃんどうしてここに？";
              Datas = [40,0,1,15,0,0,2,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 197:
              var T_Name = Name;
              var Text = "あいねにどうしても伝えたいことがあるの。";
              Datas = [40,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 198:
              var T_Name = "";
              var Text = "観覧車";
              Datas = [43,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 199:
              var T_Name = "あいね";
              var Text = "ねぇねぇ　伝えたいことって何？何？何？";
              Datas = [41,0,1,15,0,0,2,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 200:
              var T_Name = Name;
              var Text = "…！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 201:
              var T_Name = Name;
              var Text = "(勢いで連れて来ちゃったけど、(改行)観覧車ってこんなに遅いの？)";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 202:
              var T_Name = Name;
              var Text = "(一番上までどれくらいかかるのよ…)";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 203:
              var T_Name = "あいね";
              var Text = "早く聞かせてよ〜！"+Name+"ちゃん！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 204:
              var C1 = "もうちょっと待って";
              var C2 = "ドラマチックとかどうでもいい！";
              var C3 = 0;
              var C4 = 0;
              Datas = [41,1,0,2,C1,C2,C3,C4,205,216.1,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 205:
             R_S(Number,208);
              var T_Name = Name;
              var Text = "も…もうちょっと待って。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 206:
              var T_Name = "あいね";
              var Text = "え〜！もったいつけられると余計気になるよ〜！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 207:
              var T_Name = "あいね";
              var Text = "教えて教えてー！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 208:
              var T_Name = Name;
              var Text = "ちょっ…　";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,0];
              if(have("アイカツカード")!=true) Datas[13] = 208.1;
              Scene_type = "メイン";
              break;
            case 208.1:
             R_S(Number,208.9);
              var T_Name = Name;
              var Text = "ちょっ…　そんなに動いたら…";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,208.2,Skip];
              Scene_type = "メイン";
              break;
            case 208.2:
              var T_Name = "観覧車";
              var Text = "ガタン！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,0,208.1,Number,208.3,Skip];
              Scene_type = "メイン";
              break;
            case 208.3:
              var T_Name = "あいね";
              var Text = "あっ…止まっちゃった？";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,208.2,Number,208.4,Skip];
              Scene_type = "メイン";
              break;
            case 208.4:
              var T_Name = "アナウンス";
              var Text = "困りますよお客さん。(改行)危険なので緊急停止しました。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,208.3,Number,208.5,Skip];
              Scene_type = "メイン";
              break;
            case 208.5:
              var T_Name = "あいね "+Name;
              var Text = "あ…。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,208.4,Number,208.6,Skip];
              Scene_type = "メイン";
              break;
            case 208.6:
              var T_Name = "あいね";
              var Text = "ごめんなさい…。";
              Datas = [40,0,1,15,0,0,2,15,T_Name,Text,Rewind,208.5,Number,208.7,Skip];
              Scene_type = "メイン";
              break;
            case 208.7:
              var T_Name = Name;
              var Text = "(完全にタイミングを失ってしまった…。)";
              Datas = ["Black",10,16,0,0,0,2,0,T_Name,Text,Rewind,208.6,Number,208.8,0];
              Scene_type = "メイン";
              break;
            case 208.8:
              var T_Name = "お叱りエンド";
              var Text = "このエンドにたどり着くとはなかなかやりますね！";
              Datas = ["Black",0,16,0,0,0,2,0,T_Name,Text,Rewind,208.7,Number,208.9,0];
              Scene_type = "メイン";
              break;
            case 208.9:
              var T_Name = "お叱りエンド";
              var Text = "このエンドにたどり着くとはなかなかやりますね！(改行)ゲームオーバーですが。";
              Datas = ["Black",0,16,0,0,0,2,0,T_Name,Text,Rewind,208.8,Number,"ゲームオーバー",0,false,false,"やっぱり必要だった",0];
              Scene_type = "メイン";
              break;
            case 209:
             R_S(Number,212);
              Get_I_C_F("アイテム","アイカツカード","消失");
              var T_Name = Name;
              var Text = "ちょっ…　あっ！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0852,15",2];
              Scene_type = "メイン";
              break;
            case 210:
              var T_Name = "あいね";
              var Text = "…？";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0852,0",2];
              Scene_type = "メイン";
              break;
            case 211:
              var T_Name = "あいね";
              var Text = "アイカツカード…？(改行)これって"+Name+"ちゃんがデザインしたドレスだよね？";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip,"0450,0450,0",2];
              Scene_type = "メイン";
              break;
            case 212:
              var C1 = "…";
              var C2 = "そうよ…";
              var C3 = 0;
              var C4 = 0;
              Datas = [41,1,0,2,C1,C2,C3,C4,215.1,213,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 213:
             R_S(Number,215);
              var T_Name = Name;
              var Text = "そうよ…(改行)あいねのためにデザインしたの。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 214:
              var T_Name = "あいね";
              var Text = "私のため？";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 215:
              var C1 = "…";
              var C2 = "ドラマチックとかどうでもいい！";
              var C3 = 0;
              var C4 = 0;
              Datas = [41,1,0,2,C1,C2,C3,C4,215.1,216,0,0,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 215.1:
              R_S(Number,248);
              After = 216;
              Get_I_C_F("フラグ","沈黙");
              var T_Name = Name;
              var Text = "…";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 216:
              if(have("沈黙")){
                Before = 215.1;
                Rewind = 0;
              }
              else R_S(Number,248);
              var T_Name = Name;
              var Text = "あ〜！もう！(改行)こうなったらドラマチックとかどうでもいい！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 216.1:
              Number = 216;
              After = 217;
             R_S(Number,248);
              Get_I_C_F("フラグ","違うタイミング");
              var T_Name = Name;
              var Text = "あ〜！もう！(改行)こうなったらドラマチックとかどうでもいい！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 217:
              var T_Name = "あいね";
              var Text = Name + "ちゃん(改行)立つと危ないよ！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 218:
              var T_Name = Name;
              var Text = "あいね…。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 219:
              var T_Name = Name;
              var Text = "あいね…。(改行)私とフレンズになって。";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 220:
              var T_Name = "あいね";
              var Text = "え…";
              if(have("ラブミーティア結成を復習した")) After = 221;
              else After = 222;
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 221:
              var T_Name = "汽笛";
              var Text = "ボー";
              Datas = [42,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 222:
              var T_Name = "あいね";
              var Text = "…";
              if(have("ラブミーティア結成を復習した")){
                Before = 221;
                var a = 15;
              }
              else{
                Before = 220;
                var a = 0;
              }
              Datas = [41,0,1,a,0,0,2,a,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 223:
              var T_Name = Name;
              var Text = "(そっか…)";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 224:
              var T_Name = Name;
              var Text = "(そっか…(改行) そうよね。あいねはなこちゃんと…)";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 225:
              var T_Name = "あいね";
              var Text = "うわ〜っ！嬉しい！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 226:
              var T_Name = "あいね";
              var Text = "うわ〜っ！嬉しい！(改行)ありがとう！"+Name+"ちゃん！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 227:
              var T_Name = "あいね";
              var Text = "うわ〜っ！嬉しい！(改行)ありがとう！"+Name+"ちゃん！(改行)私も"+Name+"ちゃんとフレンズになりたいって(改行)すっごくすっごく思ってた！";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 228:
              var T_Name = Name;
              var Text = "あいね…";
              Datas = [41,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 229:
              var T_Name = "(ココ)";
              var Text = "(この観覧車でゴンドラが(改行) 一番高くなったところで告白すると(改行) 二人はず〜っと　幸せになれるんだって。)";
              Datas = [46,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 230:
              var T_Name = "なこ";
              var Text = "フレンズ結成おめでとう！(改行)あいねちゃん。";
              Datas = [36,0,1,15,0,0,15,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 231:
              var T_Name = "あいね";
              var Text = "うん！ありがとう。";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 232:
              var T_Name = "なこ";
              var Text = "ほんとよかったね、あいねちゃん(改行)"+Name+"ちゃんとフレンズになる為に(改行)すごく頑張ってたもんね。";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 233:
              var T_Name = Name;
              var Text = "え。";
              Datas = [36,0,2,15,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 234:
              var T_Name = "なこ";
              var Text = "目指せ　ランニング100万キロ！とか。";
              Datas = [36,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 235:
              var T_Name = "あいね";
              var Text = "わ〜っ　わ〜っ　わ〜っ！";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 236:
              var T_Name = "あいね";
              var Text = "わ〜っ　わ〜っ　わ〜っ！(改行)それ　"+Name+"ちゃんに言っちゃだめ！";
              Datas = [36,0,1,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 237:
              var T_Name = Name;
              var Text = "100万キロって地球何十周分よ？";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 238:
              var T_Name = Name;
              var Text = "ごめんね。なこちちゃんもあいねとフレンズを…。";
              Datas = [36,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 239:
              var T_Name = "着信音";
              var Text = "(ピロリ)";
              Datas = [36,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 240:
              var T_Name = "なこ";
              var Text = "あっ仕事終わったからこれから会おう。";
              Datas = [36,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 241:
              var T_Name = "なこ";
              var Text = "あっ仕事終わったからこれから会おう。(改行)よ〜し！　あいねちゃんのおかげで勇気出たし、(改行)私もフレンズ組もうって申し込んでみるよ。";
              Datas = [36,0,2,0,0,0,15,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 242:
              var T_Name = "なこ";
              var Text = "あっ仕事終わったからこれから会おう。(改行)よ〜し！　あいねちゃんのおかげで勇気出たし、(改行)私もフレンズ組もうって申し込んでみるよ。(改行)また遊ぼうね、あいねちゃん！";
              Datas = [36,0,2,0,0,0,15,-15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 243:
              var T_Name = Name;
              var Text = "えっと…　どういうこと？";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 244:
              var T_Name = "あいね";
              var Text = "なこちゃん　この間イベントで知り合った子と(改行)すっごく仲良くなって　そのことフレンズを組みたい(改行)って思ってたんだけど";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 245:
              var T_Name = "あいね";
              var Text = "なこちゃんは中学を卒業するまで(改行)名古屋にいるつもりだから(改行)遠距離フレンズがうまくいくか不安だった見たい。";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 246:
              var T_Name = Name;
              var Text = "…";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 247:
              var T_Name = Name;
              var Text = "…(改行)そういうことか。";
              Datas = [36,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 248:
             R_S(Number,254);
              var T_Name = "パシフィコ横浜";
              var Text = "(フレンズ結成お披露目ライブ)";
              Datas = [47,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 249:
              var T_Name = Name;
              var Text = "ここからだよ。";
              Datas = [48,0,1,15,0,0,2,15,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 250:
              var T_Name = "あいね";
              var Text = "うん。";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 251:
              var T_Name = Name;
              var Text = "ここから、私たちのアイカツの、(改行)新しい一歩がスタートする。";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 252:
              var T_Name = "あいね";
              var Text = "なんか緊張する…。でも…";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 253:
              var T_Name = "あいね";
              var Text = "なんか緊張する…。でも…(改行)"+Name+"ちゃんとフレンズを組めば(改行)きっとすごいことが起きるって(改行)すっごくドキドキしてるんだ。";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 254:
              var C1 = "ええ。";
              var C2 = "もちろん！";
              var C3 = "私もそう思う。";
              var C4 = 0;
              if(have("ラブミーティア結成を復習した")) C4 = "うん　知ってた。";
              Datas = [48,1,0,2,C1,C2,C3,C4,255,256,257,258,Rewind,Before,Number];
              Scene_type = "チョイス";
              break;
            case 255:
             R_S(Number,260);
              Get_I_C_F("フラグ","ええ。");
              var T_Name = Name;
              var Text = "ええ。";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,259,Skip];
              Scene_type = "メイン";
              break;
            case 256:
             R_S(Number,260);
              Get_I_C_F("フラグ","もちろん！");
              var T_Name = Name;
              var Text = "もちろん！私たちでビッグバンを起こすのよ！";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,259,Skip];
              Scene_type = "メイン";
              break;
            case 257:
             R_S(Number,260);
              Get_I_C_F("フラグ","私もそう思う。");
              var T_Name = Name;
              var Text = "私もそう思う。";
              Datas = [48,0,1,0,0,0,2,0,T_Name,Text,Rewind,Before,Number,259,Skip];
              Scene_type = "メイン";
              break;
            case 258:
             R_S(Number,260);
             Get_I_C_F("フラグ","うん　知ってた。");
              var T_Name = Name;
              var Text = "うん　知ってた。";
              Datas = [50,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
            case 259:
              Before = 0;
              if(have("ええ。")) Before = 255;
              if(have("もちろん！")) Before = 256;
              if(have("私もそう思う。")) Before = 257;
              if(have("うん　知ってた。")) Before = 258;
              var T_Name = "二人";
              var Text = "私たち　ピュアパレットです！";
              Datas = [49,0,0,0,0,0,0,0,T_Name,Text,0,Before,Number,After,Skip];
              Scene_type = "メイン";
              break;
    case 260:
      var Percent = 0;
      var T_Name = "クリア";
      var Text = "正解率"+Percent+"パーセント";
      var Flag2 = [];
      var k = 0;
      Datas = [49,0,0,0,0,0,0,0,T_Name,Text,Rewind,Before,Number,"ゲームオーバー",0];
      Scene_type = "メイン";
      break;
    case "調べる何もない":
      T_Name = "";
      Text = "特に気になるものはない。";
      var Datas2 = [Datas[0]];
      Datas2[1] = 0;
      Datas2[2] = 0;
      Datas2[3] = 0;
      Datas2[4] = 0;
      Datas2[5] = 0;
      Datas2[6] = 0;
      Datas2[7] = 0;
      Datas2[8] = "";
      Datas2[9] = Text;
      Datas2[10] = 0;
      Datas2[11] = 0;
      Datas2[12] = 0;
      Datas2[13] = "調べる";
      Datas2[14] = 0;
      Datas = Datas2;
      Scene_type = "メイン";
      break;
    case "調べる":
      Get_Datas();
      Scene_type = Number;
      break;
    default:
      Datas = ["Black",0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,"ゲームオーバー",0];
      Scene_type = "メイン";
      break;
  }
}

function Inspect_loads2(Number){
  console.log(Number);
  switch (Number) {
    default:
    Flag[4] = Number;
    if(Number.length>5){
      if(Number.substring(0,6)=="アイテム使用"){
        Number = Number.substring(6).split(",");
        if(Flag[4].replace(/\d/g,"").replace(/\./g,"")=="") Flag[4] = Flag[4]*1;
        Number = Number[0];
      }
    }
    break;
  }
  var Inspect = ["背景ナンバー","(幅,高さ,x座標,y座標,シーンナンバー)"];
  switch (Number) {
    case "双眼鏡":
      Inspect = [58,333,85,917,717,"調べる"+Number];
      break;
      case "使い古された包丁":
      case "新品で強靭な包丁":
      case "折れた包丁":
      Inspect = [Datas[0],333,85,917,717,"調べる"+"包丁"];
      if(have("使い古された包丁")) Inspect[0] = 59;
      if(have("新品で強靭な包丁")) Inspect[0] = 60;
      if(have("折れた包丁")) Inspect[0] = 61;
      break;
      case "調べる包丁2":
      Inspect = [59,333,85,917,717,"調べる"+"包丁3"];
      if(have("使い古された包丁")) Inspect[0] = 59;
      if(have("新品で強靭な包丁")) Inspect[0] = 60;
      if(have("折れた包丁")) Inspect[0] = 61;
      break;
    case 137:
      Inspect = [5,1173,269,401,597,1138,0,177,162,723,1144];
      if(have("アイカツカード")){
        Inspect[0] = 55;
        Inspect[5] = 1143;
      }
      break;
    default:
      Inspect = ["Black",0,0,1600,900];
      break;
  }
  return(Inspect);
}

function Get_Datas(){
  Get = true;
  Scene_loads2(Flag[4],false,true);
  Get = false;
  return;
}
