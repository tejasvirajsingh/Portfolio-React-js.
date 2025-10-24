import React from 'react';

const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="80"
      height="80"
      className="cursor-pointer"
    >
      <circle
        cx="128"
        cy="128"
        r="124"
        fill="none"
        stroke="red"
        strokeWidth="8"
      />
      <g
        className="x-shape"
        fill="red"
        fillRule="nonzero"
        transform="translate(16,16) scale(4.5)"
      >
        <path d="M13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"/>
      </g>
      <style>{`
        svg:hover .x-shape {
          fill: black;
        }
      `}</style>
    </svg>
  );
};

export default TwitterIcon;
