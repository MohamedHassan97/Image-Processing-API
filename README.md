# Image-Processing-API

## to run the code you should follow the following steps

### to compile Typescript files to Javascript files 
```sh
npm run build
```

### to run tests
```sh
npm run jasmine
```
## to run the server 
```sh
node dist/index.js
```


| route | describtion |
| ------ | ------ |
| http://localhost:3000/images | home page that hava the source images which I can choose from |
| http://localhost:3000/images/encenadaport | selecting one of the given images without editing in width and height  |
| http://localhost:3000/images/encenadaport?width=200&height=200  | selecting one of the images with editing the width& height  |


##### Note 
if the image with same size requested again it will not processed again but you will find it already cached 
