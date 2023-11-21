import {getUserByEmail, createUser} from "@/sanity/sanity-utils";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
 
  if (!user) return <div>Not logged in</div>;

  // Check if the user with the current email already exists in Sanity
  const existingUser = await getUserByEmail(user?.emailAddresses[0]?.emailAddress);

  // If the user with the email doesn't exist, create the user in Sanity
  if (existingUser.length === 0) {
    const newUserResult = await createUser({
      name: user?.firstName,
      email: user?.emailAddresses[0]?.emailAddress,
      user:user
    });
  }
  
  return (
    <div>
       <Header/>

       <div className="flex flex-col items-center justify-center mt-10 space-y-4">
         <h1 className="text-4xl font-bold text-[#5B20B6] text-center">Get Artistic Prints!</h1>
         <p className="text-center text-xl text-gray-500">Elevate your space with stunning art prints, Transform your surroundings with captivating visuals. 🎨✨</p>
      </div>

      <div className='flex p-10'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </div>
      </div>

      <Footer/>

    </div>
  )
}
