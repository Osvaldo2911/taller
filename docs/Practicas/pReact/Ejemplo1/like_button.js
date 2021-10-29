const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      numero: 1
    };
  }
    
  render() {
    if (this.state.liked) {
      return 'Te gusto el contenido';
    }

    /*if (this.state.liked) {
      return React.createElement(
        'input',
        {className: 'boton'}
      );
    }*/

    return React.createElement(
      'div',
      { onClick: () => this.setState({ liked: true }) },
        React.createElement(
          'button',
          {className: 'boton'},
          'Like'
        )
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);