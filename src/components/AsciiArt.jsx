import React from 'react';
import { myAsciiArt } from '../assets/strings';


const AsciiArt = ({
  className = '', 
  fontSize = '12px',
  color = '#e2e8f0', // Cor padrão clara para tema escuro
  backgroundColor = '#1e293b' // Fundo escuro padrão
}) => {
  return (
    <div className={`inline-block ${className}`}>
      <pre 
        className="font-mono whitespace-pre leading-none m-0 p-2"
        style={{
          fontFamily: 'JetBrains Mono, Courier New, monospace',
          fontSize,
          color,
          backgroundColor,
          lineHeight: '1.2',
          whiteSpace: 'pre',
          overflow: 'auto'
        }}
      >
        {myAsciiArt}
      </pre>
    </div>
  );
};

export default AsciiArt;
