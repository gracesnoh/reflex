import React, { Component } from 'react';
import styled from 'styled-components';
import Starburst from '../../Starburst'

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

const Example = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 12px 18px;
  margin-bottom: 18px;
  position: relative;
`;

const DarkExample = styled(Example)`
  background-color: #4F4F4F;
  color: white;
  padding: 12px 0 0 0;
  border: 1px solid #333333;
`;

const Title = styled.h4`
  font-size: 10px;
  font-weight: 700;
  color: #828282;
  text-transform: uppercase;
`;

const DarkTitle = styled(Title)`
  color: #BDBDBD;
  padding: 0 18px;
`;

const Playlist = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  font-size: 12px;

  :not(:last-child) {
    border-bottom: 1px solid #333333;
  }
`;

const Name = styled.div`
  flex: 1;
`;

const Favorite = styled.div`
  position: absolute;
  top: 3px;
  right: 2px;
`;

const Quote = styled.h3`
  font-weight: 400;
  color: #4F4F4F;
  font-style: italic;
  line-height: 150%;
  padding-top: 18px;
`;

const Author = styled.p`
  color: #828282;
`;


class StarburstExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <DarkExample>
          <DarkTitle>Playlists</DarkTitle>
          <Playlist>
            <Name>Road trip! 🚗</Name>
            <Starburst size="42px"></Starburst>
          </Playlist>
          <Playlist>
            <Name>Party time</Name>
            <Starburst size="42px"></Starburst>
          </Playlist>
          <Playlist>
            <Name>Study/focus playlist</Name>
            <Starburst size="42px"></Starburst>
          </Playlist>
        </DarkExample>
        <Example>
          <Title>Quote of the day</Title>
          <Favorite><Starburst size="42px"></Starburst></Favorite>
          <Quote>
            "Colorless green ideas sleep furiously."
          </Quote>
          <Author>by Noam Chomsky</Author>
        </Example>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Starburst',
  mainDemo: Starburst,
  examples: StarburstExamples
};