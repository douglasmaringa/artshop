import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "artshop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
});

export async function getProductBySlug(slug) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { slug }
  );
}


export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image":image.asset->url,
      "slug": slug.current,
    }`
  );
}

export async function getUsers() {
    return client.fetch(
      groq`*[_type == "user"]{
        _id,
        createdAt,
        name,
        email
      }`
    );
  }
  
  export async function getUserByEmail(email) {
    return client.fetch(
      groq`*[_type == "user" && email == $email]{
        _id,
        createdAt,
        name,
        email
      }`,
      { email }
    );
  }

export async function createUser(userData) {
  const { name, email } = userData;
  

  // Add any additional validation or data preparation here

  // Create a new user document
  const newUser = await client.create({
    _type: "user",
    name,
    email,
    createdAt: new Date().toISOString(),
  });

  return newUser;
}
