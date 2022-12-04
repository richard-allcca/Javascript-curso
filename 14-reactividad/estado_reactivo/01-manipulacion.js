
const d = document,
  $formItem = d.getElementById("form-input"),
  $list = d.getElementById("content-list");

d.addEventListener("submit", (e) => {


  if (!e.target.matches("form")) return false;

  e.preventDefault();
  const $li = d.createElement("li");

  console.log($formItem.value);
  $li.insertAdjacentText("beforeend", $formItem.value)
  $list.insertAdjacentElement("beforeend", $li);

  //? metodó de Jon
  // $li.textContent = $formItem.value;
  // $list.appendChild($li);

  $formItem.value = "";
  $formItem.focus();

})