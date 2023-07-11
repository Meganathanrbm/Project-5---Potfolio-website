import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client =  sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion:'2023-06-06',
  useCdn:true,
  token:process.env.REACT_APP_SANITY_TOKEN,
});
// to convert url into image and image into url
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);