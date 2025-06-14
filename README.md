# likeme

Profesora, Realice el cambio que me comento en la revision del desafio anterior y funciono perfecto, muchas gracias por la retroalimentacion.

const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion }; // en esta linea estaba url: imgSrc
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
  };
