import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Events for events.',
};

export default async function EventsPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Configurar o ambiente
        </h2>

        {/* Nível do ambiente */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            Nível do ambiente
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            O Amazon Elastic Beanstalk tem dois tipos de níveis do ambiente para
            oferecer suporte a diferentes tipos de aplicações Web.
          </p>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="environment"
                value="web"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Ambiente de servidor Web</span>
            </label>
            <p className="text-sm text-gray-600 ml-6">
              Execute um site, uma aplicação Web ou uma API da Web que atenda a
              solicitações HTTP.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="environment"
                value="worker"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Ambiente de operador</span>
            </label>
            <p className="text-sm text-gray-600 ml-6">
              Execute uma aplicação de operador que processe workloads de
              execução prolongada sob demanda ou execute tarefas de acordo com
              uma programação.
            </p>
          </div>
        </div>

        {/* Informações da aplicação */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            Informações da aplicação
          </h3>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="appName"
            >
              Nome da aplicação
            </label>
            <input
              type="text"
              id="appName"
              name="appName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              maxLength={100}
            />
            <p className="text-sm text-gray-600">
              Tamanho máximo de 100 caracteres.
            </p>
          </div>
        </div>

        {/* Informações do ambiente */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            Informações do ambiente
          </h3>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="envName"
            >
              Nome do ambiente
            </label>
            <input
              type="text"
              id="envName"
              name="envName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
              required
            />
            <p className="text-sm text-red-600 mt-1">
              O nome do ambiente é obrigatório.
            </p>
            <p className="text-sm text-gray-600">
              Deve ter de 4 a 40 caracteres. O nome pode conter somente letras,
              números e hifens. Não pode começar ou terminar com um hífen.
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="domain"
            >
              Domínio
            </label>
            <div className="flex">
              <input
                type="text"
                id="domain"
                name="domain"
                className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500"
                placeholder="Deixar em branco para obter o valor gerado automaticamente"
              />
              <span className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg">
                .sa-east-1.elasticbeanstalk.com
              </span>
            </div>
            <button className="mt-2 text-blue-500 hover:underline">
              Verificar disponibilidade
            </button>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="description"
            >
              Descrição do ambiente
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
