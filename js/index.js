// ハンバーガーメニューのクリックイベントを追加
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger");
    var sidebar = document.getElementById("sidebar");
    var body = document.getElementById("body");

    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("open"); // openクラスをトグルすることで表示・非表示を切り替える
        body.classList.toggle("open"); // メインコンテンツも左にずらす

        // ハンバーガーメニューのアニメーション
        hamburger.classList.toggle("open");
    });
});
