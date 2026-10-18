import { useEffect, useMemo, useState } from "react";

const tokens = [
  { text: "const", className: "text-violet-400" },
  { text: " developer ", className: "text-zinc-100" },
  { text: "=", className: "text-zinc-400" },
  { text: " {\n", className: "text-zinc-400" },

  { text: "  name", className: "text-sky-400" },
  { text: ": ", className: "text-zinc-400" },
  { text: '"Sherifzade Bajrami"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: "  role", className: "text-sky-400" },
  { text: ": ", className: "text-zinc-400" },
  { text: '"Full-Stack Engineer"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: "  stack", className: "text-sky-400" },
  { text: ": [\n", className: "text-zinc-400" },

  { text: '    "React"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "TypeScript"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "Node.js"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "PHP"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "MySQL"', className: "text-emerald-400" },

  { text: "\n  ],\n", className: "text-zinc-400" },

  { text: "  focus", className: "text-sky-400" },
  { text: ": [\n", className: "text-zinc-400" },

  { text: '    "Web Applications"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "REST APIs"', className: "text-emerald-400" },
  { text: ",\n", className: "text-zinc-400" },

  { text: '    "AI Integration"', className: "text-emerald-400" },

  { text: "\n  ],\n", className: "text-zinc-400" },

  { text: "  mindset", className: "text-sky-400" },
  { text: ": ", className: "text-zinc-400" },
  { text: '"Build. Test. Improve."', className: "text-emerald-400" },

  { text: "\n};", className: "text-zinc-400" },
];

function TypingCode({ start = true }) {
  const characters = useMemo(() => {
    return tokens.flatMap((token) =>
      [...token.text].map((character) => ({
        character,
        className: token.className,
      })),
    );
  }, []);

  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (!start) return;

    setVisibleCharacters(0);

    const interval = setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= characters.length) {
          clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [start, characters.length]);

  return (
    <div className="min-h-[430px] p-6 sm:p-7">
      <pre className="overflow-hidden whitespace-pre-wrap font-mono text-[13px] leading-7 sm:text-[14px]">
        {characters.slice(0, visibleCharacters).map((item, index) => (
          <span key={index} className={item.className}>
            {item.character}
          </span>
        ))}

        {start && visibleCharacters < characters.length && (
          <span className="ml-[1px] inline-block h-[17px] w-[2px] animate-pulse bg-violet-400 align-middle" />
        )}
      </pre>
    </div>
  );
}

export default TypingCode;