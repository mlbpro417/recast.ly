// TODO: Render the `App` component to the DOM


ReactDOM.render(<App searchYouTube={_.debounce(searchYouTube, 500)}/>, document.getElementById('app'));
