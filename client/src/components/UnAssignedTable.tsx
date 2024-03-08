"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { addMarks, assignStudent, getUnAssigned } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

const UnAssignedTable = () => {
    const [student, setStudent] = useState([]);
    const { toast } = useToast();

    const addStudent = (studentId: any, mentorId: any) => {
        assignStudent(mentorId, studentId).then((res) => {
            console.log(res);
            const data = {
                studentId: studentId,
                marks: [
                    {
                        parameter: "Ideation",
                        score: 0,
                    },
                    {
                        parameter: "Execution",
                        score: 0,
                    },
                    {
                        parameter: "Pitch",
                        score: 0,
                    },
                ],
            }
            addMarks(data).then((marks) => {
                console.log(marks);
                toast({
                  description: "Student added successfully",
                });
            }).catch((err) => {
                console.error(err);
                toast({
                    title: "Error adding student",
                    description: err.message,
                });
            })
        }).catch((err) => {
            console.error(err);
            toast({
                title: "Error adding student",
                description: err.message,
            });
        })
    }

    useEffect(() => {
      getUnAssigned().then((res) => {
        setStudent(res?.data);
      });
    }, [student]);

  return (
    <div>
      <Table>
        <TableCaption>A list of unassigned students.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {student.map((s: any, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{s?.name || "John Doe"}</TableCell>
              <TableCell>{(s?.name).split(" ")[0]}@gmail.com</TableCell>
              <TableCell>
                {" "}
                <p className="px-2 py-1 rounded-2xl bg-amber-500 cursor-pointer w-fit text-xs text-white">
                  UnAssigned
                </p>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <Button className="bg-green-500 hover:bg-green-600">
                      Add
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This will add the respective student to your assigned.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        type="submit"
                        onClick={() =>
                          addStudent(s?._id, "65ea13180923e9ef0175705f")
                        }
                      >
                        Add
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UnAssignedTable;
