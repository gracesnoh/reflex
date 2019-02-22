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

class TabSwitch extends Component {
  state = {
    children: [],
    currentIndex: null,
    to: 0,
    from: 0,
  };

  onSelect = (index) => {
    const elem = this.state.children[index];
    const elemBoundingClientRect = elem.getBoundingClientRect();
    const center = elemBoundingClientRect.left + elemBoundingClientRect.width/2;
    this.setState({
      currentIndex: index,
      from: this.state.to,
      to: center,
    });
  }

// TODO: Should be able to apply the TabSwitch animation even when children are wrapped with container div / Fragment. This is necessary to support the vertical version of this animation.
  render() {
    return (
      <Container>
       <TabContainer>
          {React.Children.map(this.props.children, (child, index) =>
            // Using index is bad. But, it is unlikely the user will use this animation on a list that will be mutated.
            React.cloneElement(child, {
              key: index,
              onClick: () => this.onSelect(index),
              // TODO: use innerRef for styled components? Shouldn't need to but there issomething weird with versioning
              ref: (node) => {
                this.state.children.push(node);
                // Call the original ref, if any
                const {ref} = child;
                if (typeof ref === 'function') {
                  ref(node);
                }
              }
            })
          )}
       </ TabContainer>
       <Spring from={{ left: this.state.from }} to={{ left: this.state.to }}>
          {({left}) => <Marker left={left} />}
        </Spring>
     </ Container>
    )
  }
}


export default TabSwitch;
