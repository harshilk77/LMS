import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleSignup = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
  };
return (
     <div className="flex items-center justify-center w-full mt-16">
          <Tabs defaultValue="account" className="w-[400px]">
               <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
               </TabsList>
               <TabsContent value="signup">
                    <Card>
                         <CardHeader>
                              <CardTitle>Signup</CardTitle>
                              <CardDescription>
                                   Create a new account and click signup when you're done.
                              </CardDescription>
                         </CardHeader>
                         <CardContent className="space-y-2">
                              <div className="space-y-1">
                                   <Label htmlFor="name">Name</Label>
                                   <Input
                                        type="text"
                                        name="name"
                                        value={signupInput.name}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="Enter your name"
                                        required
                                   />
                              </div>
                              <div className="space-y-1">
                                   <Label htmlFor="email">Email</Label>
                                   <Input
                                        type="email"
                                        name="email"
                                        value={signupInput.email}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="Enter your email"
                                        required
                                   />
                              </div>
                              <div className="space-y-1">
                                   <Label htmlFor="password">Password</Label>
                                   <Input
                                        type="password"
                                        name="password"
                                        value={signupInput.password}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="Enter your password"
                                        required
                                   />
                              </div>
                         </CardContent>
                         <CardFooter>
                              <Button onClick={() => handleSignup("signup")}>Signup</Button>
                         </CardFooter>
                    </Card>
               </TabsContent>
               <TabsContent value="login">
                    <Card>
                         <CardHeader>
                              <CardTitle>Login</CardTitle>
                              <CardDescription>
                                   Login with your email and password.
                              </CardDescription>
                         </CardHeader>
                         <CardContent className="space-y-2">
                              <div className="space-y-1">
                                   <Label htmlFor="email">Email</Label>
                                   <Input
                                        type="email"
                                        name="email"
                                        value={loginInput.email}
                                        onChange={(e) => changeInputHandler(e, "login")}
                                        placeholder="Enter your email"
                                        required
                                   />
                              </div>
                              <div className="space-y-1">
                                   <Label htmlFor="password">Password</Label>
                                   <Input
                                        type="password"
                                        name="password"
                                        value={loginInput.password}
                                        onChange={(e) => changeInputHandler(e, "login")}
                                        placeholder="Enter your password"
                                        required
                                   />
                              </div>
                         </CardContent>
                         <CardFooter>
                              <Button onClick={() => handleSignup("login")}>Login</Button>
                         </CardFooter>
                    </Card>
               </TabsContent>
          </Tabs>
     </div>
);
};

export default Login;
