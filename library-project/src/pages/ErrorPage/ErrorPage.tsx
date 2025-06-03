export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Ops! Página não encontrada.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Voltar para a página inicial
      </a>
    </div>
  );
};