require("dotenv").config();

const fs = require("fs");
const fetch = require("isomorphic-fetch");
const Dropbox = require("dropbox").Dropbox;

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
  fetch: fetch
});

const listFolders = async path => {
  try {
    const response = await dbx.filesListFolder({ path });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// listFolders("");

const path = __dirname + "/images/";

const uploadFile = async ({ filename, data }) => {
  try {
    const response = await dbx.filesUpload({
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
  listFolders("");

  const images = readImages(path);

  images.forEach(image => {
    console.log(`image.name: ${image.filename}`);
    // console.log(`image.file: ${image.file}`)
  });

  images.forEach(image => uploadFile(image));
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
