"use client"

import * as React from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllMentors } from "@/lib/data";
import { useRouter } from "next/navigation";

const Home = () => {
  const [mentor, setMentor] = React.useState([]);
  const [id, setId] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    getAllMentors().then((res: any) => {
      setMentor(res.data);
    })
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Select Mentor</CardTitle>
          <CardDescription>
            Select Mentor whose Students Data you want to see
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="mentor">Mentor</Label>
                <Select defaultValue={id} onValueChange={(m) => setId(m)}>
                  <SelectTrigger id="mentor">
                    <SelectValue placeholder="Select mentor" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {mentor?.map((m: any, i: number) => {
                      return <SelectItem key={i} value={m._id}>{m.name}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => router.push(`/mentor/${id}`)}>Proceed</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
