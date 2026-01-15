const SPACE_ID = "YOUR_SPACE_ID";
const ACCESS_TOKEN = "YOUR_DELIVERY_API_KEY";
const CONTENT_TYPE = "blogPost";

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
