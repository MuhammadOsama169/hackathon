import React from 'react';

type Props = {
  className?: string;
  controls?: boolean;
  src: string;
  type: string;
};

const Video = ({ className, controls = false, src, type }: Props) => (
  <video className={className} controls={controls} muted autoPlay loop>
    <source src={src} type={type} />
  </video>
);

export default Video;
