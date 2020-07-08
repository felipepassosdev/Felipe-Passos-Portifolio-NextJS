import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Felipe Passos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Olá, eu sou <a href="https://nextjs.org">Felipe Passos</a>
        </h1>

        <p className="description">
          Aqui estão alguns dos projetos que participei ;)
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Ambev 🍺</h3>
            <p>Participei de diversos projetos da Cervejaria Ambev, um dos meus primeiros projetos foi a criação de API'S em NodeJS, utilizando o framework Express. O desafio era criar API's que pegassem todos os dados que a empresa tinha no excel e mandasse tudo para o sistema ServiceNow.(em uma semana). Participei de diversos projetos que engloba desenvolvimento de processos de reembolso, api's em NodeJS e widgets usando Angular / Bootstrap.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>SEM PARAR 🚗</h3>
            <p>Recebi o desafio de fazer um widget com integração a um processo do fluig, para a empresa “Sem parar” com um pouco mais de uma semana, o sistema era para cadastro de novos colaboradores que usariam o sistema para anexar Foto 3x4, RG, CPF e comprovante de residência, usei template de email, para poder mandar email automaticamente aos administradores do processo, quando o fluxo percorria, até chegar na aprovação.</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3> Net Promoter Score Online 😁</h3>
            <p>Desenvolvi um software de Net Promoter Score, que basicamente é usado para medir o grau de satisfação dos nossos clientes. Fiz o layout com Bootstrap e usei a linguagem JavaScript (Ecma 6+), nesse projeto fiz consumo de API, uso de templates de email e criptografia.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Monitoramento dos Apps 🖥️</h3>
            <p>Desenvolvi um sistema para monitorar o uso dos aplicativos da empresa, como última atualização, quantos clientes estão usando os aplicativo atualmente. O Desenvolvimento foi feito com as frameworks React JS no Front End, Node JS de Back end e uso do Mongodb (banco de dados não relacional) e mySQL (banco de dados relacional) para fazer as pesquisas no banco.
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        h3 {
          color: #fafafa;
        }

        p {
          color: #fafafa;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #141414;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          color: #fafafa;
        }

        .title a {
          color: #e50914;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #fafafa;
        }

        code {
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #e50914;
          border-color: #e50914;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
