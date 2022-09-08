
export function NoPost(error) {
  let html = `
          <p class="error">
          No exiten resultados de búsqueda para el término
          <mark>${error}</mark>
          </p>
          `;
  return html;
}