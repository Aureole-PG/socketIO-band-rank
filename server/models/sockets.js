const BandList = require('./band-list')
class Sockets{
    
    constructor(io){
        this.io =io
        this.socketsEvents()
        this.bandList= new BandList()
    }

    socketsEvents(){
        this.io.on('connection', (socket) => {
            console.log(socket.id);

            socket.emit('bands-list',this.bandList.bands)
            socket.on('vote', (id) => {
                this.bandList.increaseVotes(id)
                this.io.emit('bands-list',this.bandList.bands)
            });
            socket.on('delete', (id) => {
                this.bandList.removeBand(id)
                this.io.emit('bands-list',this.bandList.bands)
            });
            socket.on('changeName', (id, name) => {
                this.bandList.changeName(id, name)
                this.io.emit('bands-list',this.bandList.bands)
            });
            socket.on('newBand', (name) => {
                this.bandList.addBand(name)
                this.io.emit('bands-list',this.bandList.bands)
            });
        });
    }
}

module.exports = Sockets