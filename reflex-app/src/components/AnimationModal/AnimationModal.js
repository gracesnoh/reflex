import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AnimationModal.css';
import copyLine from '../../images/copy-line.svg';

const propTypes = {
  animation: PropTypes.object, // TODO: Flow type! 
  handleCloseModal: PropTypes.func.isRequired,
};

class AnimationModal extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return; 
    }

    this.props.handleCloseModal();
  }

  render() {
    const { animation, handleCloseModal } = this.props;
    // TODO: do not use animationContainer 
    // TODO: Onblur or React Modal? 
    return (
      <div 
        className='animationModal__parentContainer'>
        <div 
          className='animationModal__animationContainer'
          ref={node => this.node = node}>
          <div className='animationContainer__animation'>
            <div 
              className='animationModal__closeButton' 
              onClick={this.handleClickOutside}>
              x
            </div>
            <div className='animationContainer__title'>
              {animation.title}
            </div> 
            <div className='animationContainer__animation'/>
            <button className='animationContainer__button'>
              > Animate
            </button>
          </div> 
          <div className='codeParentContainer'>
            <div className='codeContainer'>
              <button 
                className='codeContainer__button'
                onClick={() => {}}>
                <img 
                    className='codeContainer__button__img'
                    src={copyLine}/>
                <div 
                  className='codeContainer__button__txt'>
                  Copy HTML
                </div>
              </button>
              <div
                className='codeContainer__code codeContainer__code--html'>
                CODE
                {/* <div 
                  dangerouslySetInnerHTML={animation.getDangerousHtmlCode()} /> */}
              </div> 
            </div>
            <div className='codeContainer'>
              <button
                className='codeContainer__button'
                onClick={() => {}}>
                Copy HTML 
              </button> 
              <div
                className='codeContainer__code codeContainer__code--css'>
                some super cool code
              </div> 
            </div> 
            <div className='codeContainer'>
              <button
                className='codeContainer__button'
                onClick={() => {}}>
                Copy HTML 
              </button> 
              <div
                className='codeContainer__code codeContainer__code--js'>
                some super cool code
              </div> 
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

AnimationModal.propTypes = propTypes; // Why is this here?

export default AnimationModal;
