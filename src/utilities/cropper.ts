const sharp = require ("sharp");


const imgCropper: Function =async (src :string, dist:string, height:number =300,width:number=300 ):Promise<void> => {
 
await sharp(src)
.resize(width, height)
.toFile(dist);

}

export default imgCropper ;

