import { NavBar } from "../../components/NavBar";

export const Credits = () => {
  return (
    <div>
      <NavBar/>
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Créditos</h1>

        <ul className="space-y-4 text-lg">
          <li>
            <strong>Desenvolvimento:</strong> Sabrina Souza
          </li>
          <li>
            <strong>Design:</strong> Sabrina Souza
          </li>
          <li>
            <strong>API / Dados:</strong>{" "}
            <a
              href="https://openlibrary.org/developers/api"
              className="credits-a"
            >
              Open Library
            </a>
          </li>
          <li>
            <strong>Imagens:</strong>{" "}
            <a href="https://pixabay.com" className="credits-a" target="_blank">
              Pixabay
            </a>
            ,{" "}
            <a
              href="https://storyset.com"
              className="credits-a"
              target="_blank"
            >
              Storyset
            </a>
            , e algumas imagens foram geradas com auxílio da IA do{" "}
            <a
              href="https://openai.com/chatgpt"
              className="credits-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatGPT (OpenAI)
            </a>
          </li>
          <li>
            <strong>Frameworks e libs:</strong> React, TailwindCSS, TypeScript,
            Axios, Vite, entre outras.
          </li>
        </ul>

        <p className="mt-8 text-gray-500">Obrigada por visitar!</p>
      </div>
    </div>
  );
};
