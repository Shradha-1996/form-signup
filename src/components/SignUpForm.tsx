"use client";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import React from 'react';
import styles from './s.module.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import createUser from "@/actions/create-user";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  dateOfBirth: z.string().min(10).max(10),
  phoneNumber: z.string().min(10).max(10),
  country: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
});

export function SignUpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      city: "",
      country: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    const res = await createUser(values)
    

  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to create your account.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                 <FormLabel><div style={{display:'flex'}}>Name<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /><br/>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><div style={{display:'flex'}} > Email ID <h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="Email ID" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /><br/>
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel><div style={{display:'flex'}}>Date Of Birth<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="Date of Birth" type="date" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />{" "}<br/>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel><div style={{display:'flex'}}>Phone Number<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="Phone Number" type="tel" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /><br/>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><div style={{display:'flex'}}>City<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="City" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /><br/>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><div style={{display:'flex'}}>Country<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} placeholder="Country" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /><br/>
            <FormField
            
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel><div style={{display:'flex'}}>Password<h1 style={{color:"#D70000"}}>*</h1></div></FormLabel>
                  <FormControl>
                    <Input className={styles.textbox} type="password" placeholder="Password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between ">
           
            <Button className={styles.submitbutton} type="submit">Submit</Button>
            <Button className={styles.cancelbutton}variant="outline">Cancel</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
