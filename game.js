export const logs = [
  'Пікачу пригадав щось важливе, але раптово Чармандер, не пам\'ятаючи себе від страху, ударив передпліччям ворога.',
  'Пікачу закашлявся, і через це Чармандер від страху наклав прямий удар коліном в лоба ворога.',
  'Пікачу забувся, але в цей час нахабний Чармандер, прийнявши рішуче рішення, тихо підійшов ззаду і ударив.',
  'Пікачу прийшов до тями, але раптово Чармандер випадково наніс потужний удар.',
  'Пікачу закашлявся, але в цей час Чармандер неохоче розтрощив кулаком череп суперника.',
  'Пікачу здивувався, а Чармандер, похитавшись, вдарив підступно.',
  'Пікачу вишморгався, але раптово Чармандер провів дроблячий удар.',
  'Пікачу пошатнувся, і раптово нахабний Чармандер безпричинно вдарив в ногу суперника.',
  'Пікачу розстроївся, як вдруге, раптово Чармандер випадково вдарив ногою в живіт суперника.',
  'Пікачу намагався щось сказати, але вдруге, раптово Чармандер з нудьги розбив брову суперникові.',
];

export function createClickCounter(button, maxClicks) {
  let clickCount = 0;

  function handleClick() {
    if (clickCount < maxClicks) {
      clickCount++;
      console.log(`Button "${button.innerText}" clicked: ${clickCount} clicks.`);
    } else {
      console.log(`Button "${button.innerText}" reached the maximum clicks (${maxClicks}).`);
      button.disabled = true;
    }
  }

  button.addEventListener("click", handleClick);

  return function setMaxClicks(newMaxClicks) {
    maxClicks = newMaxClicks;
    clickCount = 0;
    button.disabled = false;
    console.log(`Button "${button.innerText}" limit updated to ${newMaxClicks}.`);
  }
}
