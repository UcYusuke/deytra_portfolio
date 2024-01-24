//ハンバーガーボタンとドロワー
//ボタンをクリックしたとき
$("#js-button-drawer").on("click", function(){
    //「is-checkd」クラスを付け外し
    $(this).toggleClass("is-checked");
    // ドロワー画面をスライドで表示・非表示を切り替え
    $("#js-drawer").slideToggle();
    //スクロール無効
    $('body,html').css('overflow-y', 'hidden');

});