var VideoList = ({videos, handleClick}) => (
  //es6 destructuring method {video} this is equal to 'the first object passed in as an argument has a property of video, set that property to a variable called video'
  <div className="video-list">
    {
      videos.map( (video)=> { // .map(function(item) {}) arrow goes to the right of parameter
        return (<VideoListEntry // return a new instance of VideoListEntry on each iteration
          video={video}
          handleClick={handleClick} // handleClick is a property on videoListEntry
        /> );                             // and props.handleClick is inherited from the props parameter      
      })
    }
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
