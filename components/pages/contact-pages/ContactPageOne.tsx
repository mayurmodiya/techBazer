import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Locate, Mail, Phone, Plane, PlaneTakeoff } from "lucide-react";
import React from "react";

const ContactPageOne = () => {
  return (
    <section className="max-w-screen-2xl mx-auto p-2 md:p-4">
      <h2 className="text-4xl my-2 font-bold text-center">Get In Touch</h2>
      <div className="flex flex-col md:flex-row  md:max-h-[50rem] gap-4 overflow-hidden bg-slate-200 dark:bg-slate-900 rounded-md shadow">
        
        {/* contact form */}
        <div className="p-2 lg:p-8 grow w-full">
          <h3 className="text-xl font-semibold text-center">Message Us</h3>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name :</Label>
              <Input className="p-6" id="name" placeholder="enter your name" />
            </div>
            <div>
              <Label htmlFor="email">Your Email :</Label>
              <Input className="p-6" id="name" placeholder="enter your email" />
            </div>
            <div>
              <Label htmlFor="name">Your Message :</Label>
              <textarea
                id="name"
                rows={10}
                cols={30}
                placeholder="enter your message"
                className="w-full p-2"
              ></textarea>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Button
                type="submit"
                className="p-4 flex items-center gap-2 text-lg"
              >
                <Plane /> Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* contect us information */}
        <div className=" bg-blue-600 w-full md:w-fit md:min-h-screen p-2 lg:p-8">
          <h3 className="text-xl font-semibold text-center mt-4">Contact Us</h3>
          <div className="flex items-center md:items-start w-full h-full justify-start mt-4 flex-col gap-6 md:text-xl">
            <div className="flex items-center gap-4">
              <Locate size={40} />
              <p className="whitespace-nowrap">gazipur, dhaka, bangladesh</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Phone size={40} />
              <p>+1 000 000 000</p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={40} />
              www.example@gmail.com{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageOne;
