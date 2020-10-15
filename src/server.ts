import 'reflect-metadata';
import { ApolloSetup, EnvironmentSetup, TypeOrmSetup } from '@setup';

// setup all environment variables
EnvironmentSetup();

// establish DB connection
TypeOrmSetup.connect();

// setup the Apollo Server
ApolloSetup();
