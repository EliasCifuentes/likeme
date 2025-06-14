# likeme

Profesora, No me cargaban bien las imagenes porque en el const post estaba: url: imgSrc, y yo en el backend lo tenia con img,
en el frontend lo cambie a img y funciono.

const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion }; // en esta linea estaba url: imgSrc
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
  };
