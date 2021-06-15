'use strict';

{
const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

// forEach for-of
tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    e.preventDefault();//aタグリンク移動を防ぐ

    tabLabels.forEach(label => {
      label.classList.remove('active');
    });//tablabels内のactiveの全て外す
    
    clickedLabel.classList.add('active');
    // clickされたdivタグにクラスactiveを加える
    tabContents.forEach(content => {
      content.classList.remove('active');
    });//tabcotent内のactiveの全て外す

  document.getElementById(clickedLabel.dataset.id).classList.add('active');//dataset.idでdata-idと同じもの取得している
   // clickされたdivタグにクラスactiveを加える

  })
});

}
