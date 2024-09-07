"use client";

import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { init, send } from "@emailjs/browser";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export default function ContactMeForm() {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  (function () {
    init({
      publicKey: "LxJQOMLQ-8eeENh5P",
    });
  })();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const templateParams = {
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    send("contact_me", "contact_me_template", templateParams).then(
      (response) => {
        toast({
          title: "Email Sent!",
          description: response.text,
        });
        setEmailSent(true);
        form.reset();
      },
      (error) => {
        toast({
          title: "Failed to send",
          description: error,
        });
      }
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[460px] ">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Like what you see? Get in touch!</CardDescription>
        </CardHeader>
        <CardContent>
          {!emailSent ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-40 resize-none"
                          placeholder="Message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="items-end">
                  Send
                </Button>
              </form>
            </Form>
          ) : (
            <p className="text-xl">Thank you for getting in touch!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
