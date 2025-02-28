import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
}

export const useTypewriter = ({ text, speed = 10 }: UseTypewriterProps): string => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);

    return () => clearInterval(typing);
  }, [text, speed]);

  return displayText;
};