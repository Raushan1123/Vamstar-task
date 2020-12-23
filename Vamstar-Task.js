//Extracting PUBLICATION-DATE values
var parent_node = document.querySelector('.js-view-dom-id-90e01343fd3a6abacf76dfe013c40f6ce7fe86dd58f5d3e08ccd06e322a992f6 .view-content-wrap .item');
let node = parent_node.querySelector('.item');
node = node.querySelector('.item .views-field-nothing').querySelector('.field-content').querySelector('.item .views-field-nothing');
node = node.querySelector('.field-content .lbl-licitacao').querySelector('.item .views-field-nothing');

let pub_date = node.querySelector('.lbl-licitacao');
pub_date.innerText;

//Extracting object-values
let object = parent_node.getElementsByTagName('p')[0]
object_text = object.innerText

//Extracting Biding-Date values
let biding_date = parent_node.querySelectorAll('.lbl-licitacao')[5]
biding_date.innerText

//Extracting Link values
let table = document.querySelector('.views-field-field-historico-da-licitacao');
let link = table.querySelector('.field-content').getElementsByTagName('td')[1].getElementsByTagName('a');
link[0].href