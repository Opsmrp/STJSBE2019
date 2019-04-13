import {mergeTypes} from 'merge-graphql-schemas';
import User from './user';
import Game from './game';

const types = [User, Game]

export default mergeTypes(types, {all:true});
