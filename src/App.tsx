import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
})

function App() {

  useEffect(() => {
    client.query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    }).then((result) => console.log(result));
  }, []);

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>kissa q</h1>
        <p>kissa qへようこそ。眠る前にコーヒーの話をしていきませんか。</p>
      </div>
      <div>
        <ul>
          <li>記事１</li>
          <li>記事２</li>
          <li>記事３</li>
          <li>記事４</li>
          <li>記事５</li>
        </ul>
      </div>
    </ApolloProvider>
  );
}

export default App;
