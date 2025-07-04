
export const About = () => {
  return (
    <section className="flex justify-center items-center bg-orange-100 p-10 flex-col lg:flex-row">
      <div className={`lg:w-1/2`}>
        <h2 className="title-h2 my-10" translate="no"> O que é a Open Library?</h2>
        <p className="italic">
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
      <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
        <img src="/svgs/woman-reading-animate.svg" alt="Imagem ilustrativa de uma mulher lendo livros embaixo de uma árvore" className="w-[80%]" />
      </div>
    </section>
  );
};
