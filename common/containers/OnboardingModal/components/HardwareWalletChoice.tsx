import React from 'react';

import './HardwareWalletChoice.scss';

interface Props {
  image: string;
  text: string;
  link: string;
}

export default function HardwareWalletChoice({ image, text, link }: Props) {
  return (
    <a href={link} className="HardwareWalletChoice">
      <section className="HardwareWalletChoice-image">
        <img src={image} alt={text} />
      </section>
      <section className="HardwareWalletChoice-text">
        <p>{text}</p>
      </section>
    </a>
  );
}
