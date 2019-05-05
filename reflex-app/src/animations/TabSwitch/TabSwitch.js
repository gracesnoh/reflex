import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Spring, Trail } from 'react-spring/renderprops';

// TODO: Follow the BEM format of FormInput when creating demos.
const Container = styled.div`
	 display: grid;
   grid-template-rows: auto auto;
`

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const slug = (from, to) => keyframes`
	  30% { 
	    width: ${1 + 3*Math.abs(from-to)/500}%; 
	  }
`;


// TODO: Take in custom styles.
const Marker = styled.div`
   border-radius: 6px;
   width: 6px;
   //right: 0;
   //display: inline-block;
   height: 6px;
   background-color: #4552E3;
   animation: ${({animate, from, to}) => animate && css`${slug(from, to)} 500ms ease-in-out 20ms`};
 `

const MarkerContainer = styled.div.attrs({
  style: ({ left }) => ({ left: left + 'px'})
})`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
`

const getCenter = (elem) => {
  const elemBoundingClientRect = elem.getBoundingClientRect();
  return elemBoundingClientRect.left + elemBoundingClientRect.width/2;
};

class TabSwitch extends Component {
  constructor(props) {
    super(props);
    this.childrenRefs = [];
  }

  state = {
    indexOfFocusedChildRef: 0,
    to: 0,
    from: 0,
  };

  componentDidMount() {
    // Set the marker to the correct initial position: this.state.indexOfFocusedChildRef
    const selectedElem = this.childrenRefs[this.state.indexOfFocusedChildRef];
    this.setState({
      to: getCenter(selectedElem),
    })
  }


  onSelect = (index) => {
    const selectedElem = this.childrenRefs[index];
    this.setState({
      indexOfFocusedChildRef: index,
      from: this.state.to,
      to: getCenter(selectedElem),
    });
  };

  // TODO: Should be able to apply the TabSwitch animation even when children are wrapped with container div / Fragment. This is necessary to support the vertical version of this animation.
  render() {
    const clonedChildren = React.Children.map(this.props.children, (child, index) =>
      // TODO: Is there a better alternative to cloning this every time the state changes? How slow is this?
      React.cloneElement(child, {
       // Using index is bad. But, it is unlikely the user will use this animation on a list that will be mutated.
        key: index,
        onClick: () => this.onSelect(index),
        // TODO: use innerRef for styled components? Shouldn't need to but there is something weird with versioning
        ref: (node) => {
         this.childrenRefs.push(node);
          // Call the original ref, if any.... but commenting out because I don't think we need
          // const {ref} = child;
          // if (typeof ref === 'function') {
          //   ref(node);
          // }
        }
      })
    );
    // MOVE THE CONTAINER AND THEN FLOAT THE MARKER RIGHT LEFT DEPENDING ON DIRECTION!
    console.log(this.state.from < this.state.to);

    return (
      <Container>
       <TabContainer>
          {clonedChildren}
       </ TabContainer>
       <Spring config={{precision: 5}}
               from={{ left: this.state.from }}
               to={{ left: this.state.to }}
               onStart={() => this.setState({animate: true})}
               onRest={() => this.setState({animate: false})}>
         {({left}) =>
                <MarkerContainer left={left}>
                <Marker animate={this.state.animate} from={this.state.from} to={this.state.to} />
                </MarkerContainer>}
        </Spring>
     </ Container>
    )
  }
}


export default TabSwitch;
