import apiFetch from "@wordpress/api-fetch";
const wpData = window.wpData;
apiFetch.use(apiFetch.createRootURLMiddleware(wpData.rest.url));
apiFetch.use(apiFetch.createNonceMiddleware(wpData.rest.nonce));

async function getPost() {
  return apiFetch({
    path: "/wp/v2/posts"
  });
}

async function setPost(data) {
  return apiFetch({
    path: '/wp/v2/posts',
    method: 'POST',
    data: data,
  }).then(res => {
    console.log(res);
  });
}

export default {
  getPost: getPost,
  setPost: setPost,
}
