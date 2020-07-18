const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLInt} = require('graphql');
const Game = require('../models/game')
const Publisher = require('../models/publisher');

const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    rating: {type: GraphQLInt},
    genre: {type: GraphQLString},
    publisherID: {
      type: GraphQLID,
      async resolve(parent, args) {
        try {
          const pub = await Publisher.find({name: parent.publisher})
          return pub[0]._id;
        } catch(error) {
          console.log('error fetching publisher id')
        }
      }
    },
    publisher: {
      type: GraphQLString,
      async resolve(parent, {id}) {
        try {
          const pub = await Publisher.find({name: parent.publisher});
          return pub[0].name;
        } catch(error) {
          
        }
      }
    }
  })
});

const PublisherType = new GraphQLObjectType({
  name: 'Publisher',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    games: {
      type: new GraphQLList(GameType),
      async resolve(parent, args) {
        try {
          const games = await Game.find({publisherID: parent._id});
          return games;
        } catch(error) {
          
        }
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    game: {
      type: GameType,
      args: {id: {type: GraphQLID}},
      async resolve(parent, {id}) {
        try {
          const game = await Game.findById(id);
          return game;
        } catch(error) {
          console.log('error fetching game')
        }
      }
    },
    publisher: {
      type: PublisherType,
      args: {id: {type: GraphQLID}},
      async resolve(parent, {id}) {
        try {
          const pub = await Publisher.findById(id);
          return pub;
        } catch(error) {
          
        }
      }
    },
    games: {
      type: new GraphQLList(GameType),
      async resolve(parent, args) {
        try {
          const games = await Game.find({});
          return games;
        } catch (error) {
          console.log('error fetching games')
        }
      }
    },
    publishers: {
      type: new GraphQLList(PublisherType),
      resolve(parent, args) {

      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGame: {
      type: GameType,
      args: {
        title: {type: GraphQLString},
        rating: {type: GraphQLInt},
        genre: {type: GraphQLString},
        publisher: {type: GraphQLString},
      },
      async resolve(parent, {title, rating, genre, publisher}) {
        let pub = await Publisher.find({name: publisher})
        let game = new Game({
          title,
          rating,
          genre,
          publisher,
          publisherID: pub[0]._id
        })
        try {
          await game.save();
          console.log('game saved');
        } catch(error) {
            console.log('Error saving game: ' + error);
        }
        return game;
      }
    },
    removeGame: {
      type: GameType,
      args: {id: {type: GraphQLID}},
      async resolve(parent, {id}) {
        try {
          await Game.deleteOne({_id:id})
        } catch (error) {
          console.log(error)
        }
        
          
      }
    },
    addPublisher: {
      type: PublisherType,
      args: {
        name: {type: GraphQLString}
      },
      async resolve(parent, {name}) {
        try {
          const publisher = new Publisher({name});
          await publisher.save();
          return publisher;
        } catch(error) {
            console.log('error saving publisher');
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})