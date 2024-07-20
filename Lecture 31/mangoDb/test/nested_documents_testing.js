const assert=require('assert');
const Album=require('../models/albums');
const mangoose=require('mangoose');

describe('relational records', () =>{
    beforeEach( (done) => {
        mangoose.connection.collections.albums.drop(()=>{
            done();
        });
    })

    it('creates an album with sub-documents', (done) =>{
        let album_one=new Album({
           // _id: UUID.random(),
            name: 'Porcupine Tree',
            tracks: 2,
            songs:[
                {title:'Lazarus', artist:'Steven Wilson'},
                {title: 'Trains', artist: 'Steven Wilson'}
            ]
        })

        album_one.save().then( ()=>{
            Album.findOne({name:'Porcupine Tree'}).then((data)=>{
                assert(data.songs.length===2)
                done();
            })
        })
            
    })

    it('add a song to the album', (done)=>{
        let album_one=new Album({
            // _id: UUID.random(),
             name: 'Porcupine Tree',
             tracks: 2,
             songs:[
                 {title:'Lazarus', artist:'Steven Wilson'},
             ]
         })
 
         album_one.save().then(()=>{
            Album.findOne({name:'Porcupine Tree'}).then((data)=>{
            console.log(data.songs);
            //Just pushed to the array but not the database
            data.songs.push({title:'Trains',artist:'Steven Wilson'})
            data.save().then(()=>{
                Album.findOne({name:'Porcupine Tree'}).then((results)=>{
                console.log(results.songs.length);
                console.log(results.tracks);
                assert(results.songs.length===results.track)
                done();
                })
            })
            })
         })
    })
})