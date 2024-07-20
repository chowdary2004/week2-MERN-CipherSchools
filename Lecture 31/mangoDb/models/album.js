const mangoose=require('mangoose');
const Schema=mangoose.Schema;

// Albums {name: tracks: songs: [{name: , artists: }]}

const SongListSchema= new Schema({
    artist: String,
    title: String
})

const AlbumSchema= new schema({
    name: String,
    tracks: Number,
    songs: [SongListSchema]
})

const Album=mangoose.model('Album',AlbumSchema);
module.exports=Album;