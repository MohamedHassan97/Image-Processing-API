import express from 'express';
import imgCropper from '../utilities/cropper';
const path = require('path');
const fs = require('fs');
const img_router = express.Router();

const errMessage: string = `
      <h2>image not found, please enter a valid image </h2>
      `;


img_router.get(
  '/:imgName',
  async (req: express.Request, res: express.Response): Promise<void> => {
    // getting the input-data
    const img_name: string = req.params.imgName;
    const img_width: number = parseInt(req.query.width as string);
    const img_height: number = parseInt(req.query.height as string);

    // reading "images" folder
    const img_names: string[] = await fs.promises.readdir('images'); // array of the images names

    // source/distination paths
    const sourceIMG: string = path.join(
      __dirname,
      '../',
      '../',
      'images',
      `${img_name}.jpg`
    );

      console.log(sourceIMG)

    const distinationIMG: string = path.join(
      __dirname,
      '../',
      '../',
      'croppedImages',
      `${img_name}-${img_width}-${img_height}.jpg`
    );

    console.log(distinationIMG)

    //--------------error handling--------------//
    try {
      if (!img_names.includes(img_name + '.jpg')) throw new Error();
      // Displaying the image
      else if (!img_width && !img_height) {
        res.status(200).sendFile(sourceIMG);
      } else {
        await imgCropper(sourceIMG, distinationIMG, img_width, img_height);
        await res.status(200).sendFile(distinationIMG);
        // here must use "await" to make it wait for the cropping first
      }
    } catch (error) {
      res.status(404).send(errMessage);
    }});

    export default img_router ;