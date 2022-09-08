// ? para almacenar en el localStorage el id del post seleccionado
export function PostCardSelect() {
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card p a")) return false;

    console.log(e.target.dataset.id);
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });
}
