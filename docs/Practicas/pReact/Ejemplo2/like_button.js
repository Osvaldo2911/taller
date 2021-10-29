const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Te gustó el número de comentario  ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }), className: 'boton' },
      'Like'
    );  
  }
}

// Encuentre todos los contenedores DOM y procese los botones Me gusta en ellos.
const array = document.querySelectorAll('.like_button_container')
array.forEach(domContainer => {
    // Leer el ID de comentario de un atributo data.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID }),
      domContainer
    );
  });