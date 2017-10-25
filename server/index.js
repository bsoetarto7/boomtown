import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './api/schema';
import cors from 'cors';
import createLoaders from './api/loaders';

import  initConfigs from './api/configs';
import  initPostgres from './api/pg-resource';

const app = express();
const GQL_PORT = process.env.PORT;

initConfigs(app);

export const database = initPostgres(app);

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ 
  schema, 
  context: { loaders: createLoaders() } 
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(GQL_PORT, () => console.log(
  `GraphQL is now running on http://localhost:${GQL_PORT}/graphiql`
));