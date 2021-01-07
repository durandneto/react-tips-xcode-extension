import React from "react";

export interface YoutubeVideoModel {
  /**
   * @title The title of the video
   * @param title string
   */
  title: string;
  /**
   * @title The size of the video
   * @param width string
   */
  width: string;
  /**
   * @title The height of the video
   * @param height string
   */
  height: string;
  /**
   * @src The source of the video
   * @param source string
   */
  source: string;
}
const YoutubeVideo = ({ title, width, height, source }: YoutubeVideoModel) => (
  <iframe
    title={title}
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${source}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default YoutubeVideo;
