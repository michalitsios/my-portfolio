import { useEffect, useState } from "react";

function TypingEffect({ segments }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState("");

  // Ενώνουμε όλα τα segments σαν raw text για typing
  useEffect(() => {
    const plainText = segments.map(seg => seg.text).join("");
    setFullText(plainText);
  }, [segments]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Εφαρμόζουμε styling στα segments
  const renderStyledText = () => {
    let current = 0;
    return segments.map((seg, i) => {
      const next = current + seg.text.length;
      const visible = displayText.slice(current, next);
      current = next;

      return (
        <span key={i} className={seg.className}>
          {visible}
        </span>
      );
    });
  };

  return (
    <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
      {renderStyledText()}
      <span className="text-white blink">|</span>
    </h1>
  );
}

export default TypingEffect;
