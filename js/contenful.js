const SPACE_ID = "wh2jduuotak5";
const ACCESS_TOKEN = "-LgprZeoLtz64wCTTjVdFx1RrWA5C11ZtEk4UdrNW7g";

const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

function extractText(richText) {
  if (!richText || !richText.content) return "";
  return richText.content
    .map(block =>
      block.content
        ? block.content.map(t => t.value || "").join("")
        : ""
    )
    .join(" ");
}

fetch(url)
  .then(res => res.json())
  .then(data => {
    const postsDiv = document.getElementById("posts");

    if (!postsDiv) return;

    postsDiv.innerHTML = "";

    data.items.forEach(item => {
      if (!item.fields || !item.fields.title) return;

      const title = item.fields.title;
      const body = extractText(item.fields.body).slice(0, 120);

      postsDiv.innerHTML += `
        <div class="card" style="margin-bottom:20px">
          <h3>${title}</h3>
          <p>${body || "Read more inside..."}</p>
        </div>
      `;
    });

    if (!postsDiv.innerHTML.trim()) {
      postsDiv.innerHTML = "No posts found.";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("posts").innerText =
      "Failed to load updates.";
  });
