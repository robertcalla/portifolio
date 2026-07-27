import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./Work.jsx";
import { BIO, STACK } from "./About.jsx";
import TypedLine from "./TypedLine.jsx";

const WELCOME = [
  "Bem-vindo ao terminal do Robert Zamora.",
  "Digite 'help' para ver os comandos disponíveis.",
];

const HELP = [
  "Comandos disponíveis:",
  "  whoami         — quem sou eu",
  "  ls projetos    — lista os projetos",
  "  cat sobre.txt  — um pouco sobre mim",
  "  cat stack.txt  — tecnologias que eu uso",
  "  contato        — como falar comigo",
  "  clear          — limpa o terminal",
];

function runCommand(raw) {
  const input = raw.trim();
  const cmd = input.toLowerCase();

  if (cmd === "") return [];
  if (cmd === "help") return HELP;
  if (cmd === "whoami") return ["Robert Zamora — Engenheiro de Software"];
  if (cmd === "ls" || cmd === "ls projetos" || cmd === "ls projects") {
    return PROJECTS.map((p) => `  ${p.name}`);
  }
  if (cmd === "cat sobre.txt" || cmd === "cat sobre") return [BIO];
  if (cmd === "cat stack.txt" || cmd === "stack") return [STACK.join(", ")];
  if (cmd === "contato" || cmd === "contact") {
    return [
      "robertrcmz@gmail.com",
      "github.com/robertcalla",
      "linkedin.com/in/robertronald8",
    ];
  }
  if (cmd === "sudo" || cmd.startsWith("sudo ")) {
    return ["Permissão negada. Boa tentativa kkkkk"];
  }
  if (cmd === "clear") return "__CLEAR__";

  return [
    `comando não encontrado: ${input}`,
    "Digite 'help' para ver os comandos disponíveis.",
  ];
}

export default function Terminal() {
  const [history, setHistory] = useState(() => [{ command: null, output: WELCOME }]);
  const [value, setValue] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = runCommand(value);
    if (result === "__CLEAR__") {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { command: value, output: result }]);
    }
    setValue("");
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span className="terminal-dot dot-red" aria-hidden="true"></span>
        <span className="terminal-dot dot-yellow" aria-hidden="true"></span>
        <span className="terminal-dot dot-green" aria-hidden="true"></span>
        <span className="terminal-title">guest@portfolio:~</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((entry, i) => (
          <div className="terminal-entry" key={i}>
            {entry.command !== null && (
              <p className="terminal-line">
                <span className="terminal-prompt">guest@portfolio:~$</span> {entry.command}
              </p>
            )}
            {entry.output.map((line, j) => (
              <p className="terminal-output" key={j}>
                <TypedLine text={line} />
              </p>
            ))}
          </div>
        ))}
        <form className="terminal-line terminal-form" onSubmit={handleSubmit}>
          <span className="terminal-prompt">guest@portfolio:~$</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal interativo — digite um comando, exemplo: help"
          />
        </form>
      </div>
    </div>
  );
}
