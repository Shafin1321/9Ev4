

document.getElementById('add-post').onclick = () => {
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;
  const author = document.getElementById('post-author').value;

  if(!title || !content || !author) return alert('Please fill all fields');

  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  posts.unshift({
    title,
    content,
    author,
    date: new Date().toLocaleString()
  });

  localStorage.setItem('posts', JSON.stringify(posts));
  displayPosts();

  // Clear inputs
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
  document.getElementById('post-author').value = '';
};

function displayPosts() {
  const postsContainer = document.getElementById('posts-container');
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  postsContainer.innerHTML = '';

  posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.content}</p>
      <small>${p.author} • ${p.date}</small>
    `;
    postsContainer.appendChild(div);
  });
}

// Initial load
displayPosts();
