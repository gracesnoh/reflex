import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring'

// TODO: Follow the BEM format of FormInput when creating demos.
const Container = styled.div`
	 display: grid;
   grid-template-rows: auto auto;
`

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`

// TODO: Take in custom styles.
const Marker = styled.div.attrs({
  style: ({ left }) => ({ left: left + 'px'})
})`
   position: absolute;
   border-radius: 6px;
   width: 6px;
   height: 6px;
   background-color: #4552E3;
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
          // Call the original ref, if any.... but commenting out because I don't think we need it.
          // const {ref} = child;
          // if (typeof ref === 'function') {
          //   ref(node);
          // }
        }
      })
    );
    return (
      <Container>
       <TabContainer>
          {clonedChildren}
       </ TabContainer>
       <Spring from={{ left: this.state.from }} to={{ left: this.state.to }}>
          {({left}) => <Marker left={left} />}
        </Spring>
     </ Container>
    )
  }
}


export default TabSwitch;
