const SPACE_ID = "wh2jduuotak5";
const ACCESS_TOKEN = "-LgprZeoLtz64wCTTjVdFx1RrWA5C11ZtEk4UdrNW7g";
const CONTENT_TYPE = "blogpost";

const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    data.items.slice(0, 3).forEach(post => {
      const title = post.fields.title;
      const slug = post.fields.slug;

      postsDiv.innerHTML += `
        <div class="post">
          <h3>${title}</h3>
          <a href="post.html?slug=${slug}">Read more →</a>
        </div>
      `;
    });
  })
  .catch(() => {
    document.getElementById("posts").innerText = "Failed to load updates.";
  });
