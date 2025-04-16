import woman from "../../../assets/svgs/woman-reading-animate.svg";

export const About = () => {
  return (
    <div className="flex justify-center items-center bg-wheat p-10">
      <div className="w-1/2 ">
        <h2 className="title-h2 my-10"> O que é a Open Library?</h2>
        <p className="italic ">
          A Open Library é um projeto incrível criado pela organização sem fins
          lucrativos Internet Archive. A missão deles é bem simples: criar uma
          página na web para cada livro já publicado. Com milhões de títulos
          disponíveis, a Open Library permite que você pesquise livros, autores,
          gêneros, veja capas, leia descrições, acesse edições digitais e até
          empreste livros em alguns casos. Tudo de forma gratuita, colaborativa
          e aberta para o mundo todo.<br /><br />
          Os dados do nosso site vêm diretamente da
          API pública da Open Library, e graças a esse projeto, podemos
          compartilhar esse acervo riquíssimo com você.
          Quer conhecer mais?
          Acesse diretamente em:{" "}<a className="font-bold underline" href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">openlibrary.org</a>
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={woman} alt="" className="w-[80%]" />
      </div>
    </div>
  );
};
