

function R_Click(p_janken_r) {
  let janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
  let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります

  let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。
   
  // 買った勝敗をカウント
  const win = document.getElementById("win");
  let winCount = 0;

      //勝ち負けの判定機プログラムです
      if (janken_r === p_janken_r) {
          Result_end = "あいこだ、やるじゃねえか！";
      } else if(p_janken_r === 0 && janken_r === 1) {
          Result_end = "じゃんけんに勝った！";
          $('#nyoibou-frame').append('<span class="bou">　　　　　　</span>');

      }else if(p_janken_r === 1 && janken_r === 2) {
          Result_end = "じゃんけんに勝った！";
          $('#nyoibou-frame').append('<span class="bou">　　　　　　</span>');

      }else if(p_janken_r === 2 && janken_r === 0) {
          Result_end = "じゃんけんに勝った！";
          $('#nyoibou-frame').append('<span class="bou">　　　　　　</span>');

      }else {
          Result_end = "あなたの負けだ！";
          $('#nyoibou-frame-enemy').append('<span class="pikkoro">　　　　　　</span>');
      }

      //自分の勝った数　nyoibou-frameの画像の数をカウントして、winタグの部分に表示
      let counttsuika = $("#nyoibou-frame").children().length;;
      $('#win').text(counttsuika);

         //相手の勝った数　nyoibou-frame-enemyの画像の数をカウントして、win-enemyタグの部分に表示
         let counttsuika_teki = $("#nyoibou-frame-enemy").children().length;;
         $('#win-enemy').text(counttsuika_teki);

      document.getElementById("jankenpon2").src="img/jan" + p_janken_r + ".png";
      document.getElementById("jankenpon").src="img/jan" + janken_r + ".png";

      $('#hyouji').text(Result_end); //テキストを書き換える

    //   自分が６回勝ったらピッコロのイラストを変える
      if(counttsuika === 6) {
        $('.character2').attr("src", "img/pikkoro2.png");
        $('#mainvisual').prepend('<img id="congrats" src="img/win.png" style="z-index:100" alt=""></img>');
      }

    //   敵が６回勝ったら悟空のイラストを変える
      if(counttsuika_teki === 6) {
        $('.character1').attr("src", "img/gokuu-2.png");
        $('#mainvisual').prepend('<img id="gameover" src="img/lose.png" style="z-index:100" alt=""></img>');
      }

    }