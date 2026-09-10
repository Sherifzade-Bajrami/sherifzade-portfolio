import { useEffect, useState } from "react";
import { motion } from "motion/react";

const tokens = [
  { text: "const", className: "text-violet-400" },
  { text: " developer", className: "text-zinc-100" },
  { text: " = ", className: "text-zinc-500" },
  { text: "{\n", className: "text-zinc-400" },

  { text: "  name", className: "text-sky-300" },
  { text: ": ", className: "text-zinc-500" },
  { text: '"Sherifzade Bajrami"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "  role", className: "text-sky-300" },
  { text: ": ", className: "text-zinc-500" },
  { text: '"Web Developer"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "  stack", className: "text-sky-300" },
  { text: ": ", className: "text-zinc-500" },
  { text: "[\n", className: "text-zinc-400" },

  { text: "    ", className: "" },
  { text: '"React"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "    ", className: "" },
  { text: '"JavaScript"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "    ", className: "" },
  { text: '"WordPress"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "    ", className: "" },
  { text: '"PHP"', className: "text-emerald-300" },
  { text: ",\n", className: "text-zinc-500" },

  { text: "    ", className: "" },
  { text: '"Tailwind CSS"', className: "text-emerald-300" },
  { text: "\n", className: "" },

  { text: "  ],\n", className: "text-zinc-400" },

  { text: "  mindset", className: "text-sky-300" },
  { text: ": ", className: "text-zinc-500" },
  { text: '"Build. Test. Improve."', className: "text-emerald-300" },
  { text: "\n", className: "" },

  { text: "};", className: "text-zinc-400" },
];

const totalCharacters = tokens.reduce(
  (total, token) => total + token.text.length,
  0,
);

function TypingCode({ start = true }) {
  const [characterCount, setCharacterCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!start) return;

    setCharacterCount(0);
    setFinished(false);

    let currentCharacter = 0;

    const typingInterval = setInterval(() => {
      currentCharacter += 1;
      setCharacterCount(currentCharacter);

      if (currentCharacter >= totalCharacters) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setFinished(true);
        }, 900);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [start]);

  let charactersRendered = 0;

  return (
    <div className="min-h-[320px] overflow-x-auto p-6 font-mono text-[13px] leading-7 sm:p-8">
      <pre className="whitespace-pre-wrap font-mono">
        {tokens.map((token, index) => {
          const tokenStart = charactersRendered;
          const tokenEnd = tokenStart + token.text.length;

          charactersRendered = tokenEnd;

          const visibleCharacters = Math.max(
            0,
            Math.min(token.text.length, characterCount - tokenStart),
          );

          if (visibleCharacters <= 0) {
            return null;
          }

          return (
            <span
              key={index}
              className={token.className}
            >
              {token.text.slice(0, visibleCharacters)}
            </span>
          );
        })}

        {!finished && start && (
          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="ml-[2px] text-violet-400"
          >
            |
          </motion.span>
        )}
      </pre>
    </div>
  );
}

export default TypingCode;