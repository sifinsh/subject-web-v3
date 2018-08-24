//防嵌帧
try {
  top.location.hostname;
  if (top.location.hostname != window.location.hostname) {
    top.location.href = window.location.href;
  }
}
catch (e) {
  top.location.href = window.location.href;
}
window.onload = function () {
  //头图操作
  var oClmnH = document.querySelector('.column_h'),
    oInfoH = oClmnH.querySelector('.info_h'),
    oTmpH = oClmnH.querySelector('.templates_h'),
    oOrderH = oClmnH.querySelector('.order_h'),
    oAssBtnH = oClmnH.querySelector(".assign_btn_h"),
    oCopyBtnH = oClmnH.querySelector(".copy_btn_h");
  function replaceH() {
    var str = oTmpH.querySelector('.temp-code').innerHTML;
    oInfoH_val = oInfoH.value || 0;
    rep_str1 = str.replace('nodeid="1"', 'nodeid="' + oInfoH_val + '"');
    oOrderH_val = oOrderH.value || 0;
    //console.log(oOrderH_val);
    if (oOrderH_val == 0) {
      rep_str2 = rep_str1.replace('End=1', 'End=1');
    }
    else {
      rep_str2 = rep_str1.replace('End=1', 'End=' + oOrderH_val + '');
    }
    oTmpH.querySelector('.temp-code').innerHTML = rep_str2;
  }
  function copyStrH() {
    var str = oTmpH.querySelector('.temp-code').innerHTML,
      textArea = document.createElement("textarea");
    textArea.value = str;
    document.querySelector("body").appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.querySelector("body").removeChild(textArea);
    alert("已复制");
    location.reload();
  }
  oAssBtnH.onclick = replaceH;
  oCopyBtnH.onclick = copyStrH;
  //头条操作
  var oClmnT = document.querySelector('.column_t'),
    oInfoT = oClmnT.querySelector('.info_t'),
    oCheckT = oClmnT.querySelector('.check_t'),
    oTmpT = oClmnT.querySelector('.templates_t'),
    oOrderT = oClmnT.querySelector('.order_t'),
    oAssBtnT = oClmnT.querySelector(".assign_btn_t"),
    oCopyBtnT = oClmnT.querySelector(".copy_btn_t");
  function replaceT() {
    var str = oTmpT.querySelector('.temp-code').innerHTML;
    oInfoT_val = oInfoT.value || 0;
    rep_str1 = str.replace('nodeid="1"', 'nodeid="' + oInfoT_val + '"');
    if (oCheckT.checked) {
      rep_str2 = rep_str1.replace('htmore', 'htmore');
    }
    else {
      rep_str2 = rep_str1.replace('htmore', 'htmore hidden');
    }
    oOrderT_val = oOrderT.value || 0;
    if (oOrderT_val == 0) {
      rep_str3 = rep_str2.replace('End=1', 'End=1');
    }
    else {
      rep_str3 = rep_str2.replace('End=1', 'End=' + oOrderT_val + '');
    }
    oTmpT.querySelector('.temp-code').innerHTML = rep_str3;
  }
  function copyStrT() {
    var str = oTmpT.querySelector('.temp-code').innerHTML,
      textArea = document.createElement("textarea");
    textArea.value = str;
    document.querySelector("body").appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.querySelector("body").removeChild(textArea);
    alert("已复制");
    location.reload();
  }
  oAssBtnT.onclick = replaceT;
  oCopyBtnT.onclick = copyStrT;
  //通用
  var aInfoN = document.querySelectorAll('.info_n'),
    aTmpN = document.querySelectorAll('.templates_n'),
    aOrderN = document.querySelectorAll('.order_n'),
    aAssBtnN = document.querySelectorAll(".assign_btn_n"),
    aCopyBtnN = document.querySelectorAll(".copy_btn_n");
  for (var i = 0; i < aCopyBtnN.length; i++) {
    aInfoN[i].index = i;
    aTmpN[i].index = i;
    aOrderN[i].index = i;
    aAssBtnN[i].index = i;
    aCopyBtnN[i].index = i;
    aAssBtnN[i].onclick = unFold;
    aCopyBtnN[i].onclick = copyStrN;
  }
  function unFold() {
    var _index = this.index;
    replaceN(_index);
  }
  function replaceN(_i) {
    var str = aTmpN[_i].querySelector('.temp-code').innerHTML;
    oInfoN_val = aInfoN[_i].value || 0;
    rep_str1 = str.replace('nodeid="1"', 'nodeid="' + oInfoN_val + '"');
    oOrderN_val = aOrderN[_i].value || 0;
    if (oOrderN_val == 0) {
      rep_str2 = rep_str1.replace('End=1', 'End=1');
    }
    else {
      rep_str2 = rep_str1.replace('End=1', 'End=' + oOrderN_val + '');
    }
    aTmpN[_i].querySelector('.temp-code').innerHTML = rep_str2;
  }
  function copyStrN() {
    var _index = this.index;
    var str = aTmpN[_index].querySelector('.temp-code').innerHTML;
    var textArea = document.createElement("textarea");
    textArea.value = str;
    document.querySelector("body").appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.querySelector("body").removeChild(textArea);
    alert("已复制");
    location.reload();
  }
}