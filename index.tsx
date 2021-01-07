import React, { Component } from "react";
import { render } from "react-dom";
import Card from "./Components/Card";
import Container, { Row, Column } from "./Components/Grid";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Container sm>
        <Row>
          <Column full>
            <Card
              youtubeVideoModel={{
                title: "main video",
                width: "100%",
                height: "100%",
                source: "ZDr3LSaMAxw"
              }}
              cardModel={{
                title: "useState",
                subTitle: "Os React Hooks são uma nova adição no React 16.8.",
                description:
                  " Eles permitem que você use o state e outros recursos do React, sem escrever uma classe.",
                reference:
                  "https://reactjs.org/docs/hooks-reference.html#usecallback",
                sourceCode: "https://stackblitz.com/edit/react-tips-durand-neto"
              }}
              click={() => {}}
            />
          </Column>
        </Row>
        <Row>
          <Column full>
            <Card
              youtubeVideoModel={{
                title: "main video",
                width: "100%",
                height: "100%",
                source: "Kvs8M-_okqE"
              }}
              cardModel={{
                title: "useMemo",
                subTitle: "Os React Hooks são uma nova adição no React 16.8.",
                description:
                  " Eles permitem que você use o state e outros recursos do React, sem escrever uma classe.",
                reference:
                  "https://reactjs.org/docs/hooks-reference.html#usecallback",
                sourceCode: "https://stackblitz.com/edit/react-tips-durand-neto"
              }}
              click={() => {}}
            />
          </Column>
        </Row>
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
