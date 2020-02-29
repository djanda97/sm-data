require("dotenv").config();

const fs = require("fs");
const fetch = require("isomorphic-fetch");
const Dropbox = require("dropbox").Dropbox;

const listFolders = async (path, dropbox) => {
  try {
    const response = await dropbox.filesListFolder({ path });
    console.log(`response.entries.length: ${response.entries.length}`);
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async ({ filename, data }, dropbox) => {
  try {
    const response = await dropbox.filesUpload({
      path: "/" + filename,
      contents: data
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const readImages = path => {
  const images = [];
  const files = fs.readdirSync(path);

  files.forEach(file => {
    const filename = file.slice(file.lastIndexOf("/") + 1, file.length);
    const data = fs.readFileSync(path + filename);
    const image = { filename, data };
    images.push(image);
  });

  return images;
};

const main = () => {
  const dropbox = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch: fetch
  });

  listFolders("", dropbox);

  const path = __dirname + "/images/";
  const images = readImages(path);

  images.forEach(image => {
    console.log(`image.filename: ${image.filename}`);
    uploadImage(image, dropbox);
  });
};

main();

// const getThumbnail = async file => {
//   try {
//     const response = await dbx.filesGetThumbnail({
//       path: "/" + file
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
