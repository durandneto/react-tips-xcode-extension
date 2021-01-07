import React from "react";
import YoutubeVideo, { YoutubeVideoModel } from "../YoutubeVideo";
import Container, { Row, Column } from "../Grid";
import "../../style.css";

export interface CardModel {
  /**
   * @title The youtubeVideoModel model itself
   * @param youtubeVideoModel YoutubeVideoModel
   */
  youtubeVideoModel: YoutubeVideoModel;
  /**
   * @title The cardModel model itself
   * @param cardModel object
   */
  cardModel: {
    /**
     * @title The title of the video
     * @param title string
     */
    title: string;
    /**
     * @title The subTitle of the video
     * @param title string
     */
    subTitle: string;
    /**
     * @title The description of the video
     * @param description string
     */
    description: string;
    /**
     * @title The reference of the react.org
     * @param reference string
     */
    reference: string;
    /**
     * @title The Source Code on github
     * @param sourceCode string
     */
    sourceCode: string;
  };
  click: () => void;
}

const CardModel = ({ cardModel, youtubeVideoModel, click }: CardModel) => (
  <Container>
    <Row>
      <Column full>
        <h2>{cardModel.title}</h2>
      </Column>
      <Column full>
        <button onClick={click}>Try out</button>
      </Column>
    </Row>
    <Row>
      <Column full>
        <YoutubeVideo {...youtubeVideoModel} />
      </Column>
    </Row>
    <Row>
      <Column full>
        <p>{cardModel.subTitle}</p>
        <p>{cardModel.description}</p>
      </Column>
    </Row>
    <Row>
      <Column full>----------</Column>
    </Row>
  </Container>
);

export default CardModel;
