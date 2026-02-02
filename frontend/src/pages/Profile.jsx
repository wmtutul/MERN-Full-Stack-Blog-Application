import { Card } from "@/components/ui/card";
import userLogo from "../assets/user.jpg"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";




const Profile = () => {

  return (
    <div className='pt-20 md:ml-[320px] md:h-screen'>
      <div className='max-w-6xl mx-auto mt-8 '>
        <Card className=" flex md:flex-row flex-col gap-10 p-6 md:p-10 dark:bg-gray-800 mx-4 md:mx-0">
          {/* image section */}
          <div className='flex flex-col items-center justify-center md:w-[400px]'>
            <Avatar className="w-40 h-40 border-2">
              <AvatarImage src={userLogo} />
            </Avatar>
            <h1 className='text-center font-semibold text-xl text-gray-700 dark:text-gray-300 my-3'>Mern Stack Developer</h1>
            <div className='flex gap-4 items-center'>
              <Link ><FaFacebook className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
              <Link ><FaLinkedin className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
              <Link ><FaGithub className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
              <Link ><FaInstagram className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
            </div>
          </div>
          {/* info section */}
          <div>
            <h1 className='font-bold text-center md:text-start text-4xl mb-7'>Welcome User</h1>
            <p className=''><span className='font-semibold'>Email : </span>wmtutul@gmail.com</p>
            <div className='flex flex-col gap-2 items-start justify-start my-5'>
              <Label className="">About Me</Label>
              <p className='border dark:border-gray-600 p-6  rounded-lg'>"I'm a passionate web developer and content creator focused on frontend technologies. When I'm not coding, you can find me writing about tech, hiking, or experimenting with new recipes."</p>
            </div>

            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button >Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">Edit profile</DialogTitle>
                    <DialogDescription className="text-center">
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="flex gap-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1"> First Name</Label>
                        <Input 
                          id="name" 
                          name="firstName"
                          placeholder= "First Name"
                          type="text"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Last Name</Label>
                        <Input 
                          id="name" 
                          name="lastName"
                          placeholder= "Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Facebook</Label>
                        <Input 
                          id="facebook" 
                          name="facebook"
                          placeholder= "Enter a URL"
                          type="text"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Instagram</Label>
                        <Input 
                          id="instagram" 
                          name="instagram"
                          placeholder= "Enter a URL"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Linkedin</Label>
                        <Input 
                          id="linkedin" 
                          name="linkedin"
                          placeholder= "Enter a URL"
                          type="text"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Github</Label>
                        <Input 
                          id="github" 
                          name="github"
                          placeholder= "Enter a URL"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        placeholder="Enter a description"
                        className="mt-3"
                      />
                    </div>
                    <div>
                      <Label>Picture</Label>
                      <input
                        id="file"
                        type="file"
                        accept="image/*"
                        className="w-[277px] mt-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>

          </div>
        </Card>
      </div>

    </div>
  )
}

export default Profile


