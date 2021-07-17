'use strict';
{
  const characters = [
    "マリオ",
    "ドンキーコング",
    "リンク",
    "サムス",
    "ダークサムス",
    "ヨッシー",
    "カービィ",
    "フォックス",
    "ピカチュウ",
    "ルイージ",
    "ネス",
    "キャプテン・ファルコン",
    "プリン",
    "ピーチ",
    "デイジー",
    "クッパ",
    "アイスクライマー",
    "シーク",
    "ゼルダ",
    "ドクターマリオ",
    "ピチュー",
    "ファルコ",
    "マルス",
    "ルキナ",
    "こどもリンク",
    "ガノンドロフ",
    "ミュウツー",
    "ロイ",
    "クロム",
    "Mr.ゲーム&ウォッチ",
    "メタナイト",
    "ピット",
    "ブラックピット",
    "ゼロスーツサムス",
    "ワリオ",
    "スネーク",
    "アイク",
    "ポケモントレーナー",
    "ディディーコング",
    "リュカ",
    "ソニック",
    "デデデ",
    "ピクミン&オリマー",
    "ルカリオ",
    "ロボット",
    "トゥーンリンク",
    "ウルフ",
    "むらびと",
    "ロックマン",
    "Wii Fit トレーナー",
    "ロゼッタ&チコ",
    "リトル・マック",
    "ゲッコウガ",
    "Miiファイター（格闘）",
    "Miiファイター（剣術）",
    "Miiファイター（射撃）",
    "パルテナ",
    "パックマン",
    "ルフレ",
    "シュルク",
    "クッパ Jr.",
    "ダックハント",
    "リュウ",
    "ケン",
    "クラウド",
    "カムイ",
    "ベヨネッタ",
    "インクリング",
    "リドリー",
    "シモン",
    "リヒター",
    "キング・クルール",
    "しずえ",
    "ガオガエン",
    "パックンフラワー",
    "ジョーカー",
    "勇者",
    "バンジョー&カズーイ",
    "テリー",
    "ベレト/ベレス",]

  let charas =  document.querySelectorAll('.charas');
  const selMy = document.getElementById('selMy');
  const selYou = document.getElementById('selYou');

function list1() {
  for(let i = 0; i< characters.length; i ++) {
    let img = document.createElement('img');
    let pp = charas[0].appendChild(img)
    pp.classList.add('fiter1')
    // p.textContent = characters[i];
    img.setAttribute('src',"キャラ一覧/" + (i + 1) + ".png")
    console.log(i + 1);
  }
}
function list2() {
  for(let i = 0; i< characters.length; i ++) {
    let img = document.createElement('img');
    let pp = charas[1].appendChild(img)
    pp.classList.add('fiter2')
    img.setAttribute('src','キャラ一覧/' + (i +1) + '.png')
  }
}
// キャラ一覧を表示
list1();
list2();

const fiter1 = document.querySelectorAll('.fiter1')
const fiter2 = document.querySelectorAll('.fiter2')



  for(let i = 0; i < characters.length; i ++) {
    fiter1[i].addEventListener('click', () => {
    selMy.textContent = characters[i];
    for(let i = 0; i < characters.length; i ++) {
      fiter1[i].classList.remove('selchara');
    }
    fiter1[i].classList.add('selchara');
    })
  }

  for(let i = 0; i < characters.length; i ++) {
    fiter2[i].addEventListener('click', () => {
      selYou.textContent = characters[i];
      for(let i = 0; i < characters.length; i ++) {
        fiter2[i].classList.remove('selchara');
      }
      fiter2[i].classList.add('selchara');
    })
  }






}
