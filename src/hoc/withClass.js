import React, { Component }  from 'react';

// const withClass = (WrappedComppnent, className) => {
//   return props => <div className={className}>
//       <WrappedComppnent {...props}/>
//     </div>;
// }

const withClass = (WrappedComppnent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComppnent {...this.props}/>
        </div>
      );
    }
  }
}

export default withClass;
