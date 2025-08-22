function showMessage(type) {
  const box = document.getElementById("infoBox");
  if (type === "世界观") {
    box.innerHTML = "<b>200X年，日本知名公司LooP社…</b><br>LoveLink，一款AI恋爱养成游戏，即将改变一切。";
  } else if (type === "角色图鉴") {
    box.innerHTML = "这里会展示虚拟恋人的立绘与档案。";
  } else if (type === "活动规则") {
    box.innerHTML = "企划分为四轮，每轮七天，录影机将记录你们的点滴。";
  }
}
