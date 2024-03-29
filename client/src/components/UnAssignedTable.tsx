"use client";

import {
  Table,
  TableBody,
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

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { addMarks, assignStudent, getUnAssigned } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

const UnAssignedTable = ({ Id }: { Id: string }) => {
  const [student, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addStudent = (studentId: string, mentorId: string) => {
    assignStudent(mentorId, studentId)
      .then((res) => {
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
        };
        addMarks(data)
          .then((marks) => {
            console.log(marks);
            toast({
              description: "Student added successfully",
            });
          })
          .catch((err) => {
            console.error(err);
            toast({
              title: "Error adding student",
              description: err.message,
            });
          });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error adding student",
          description: err.message,
        });
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getUnAssigned().then((res) => {
      setStudent(res?.data);
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        {isLoading ? (
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableRow key={i}>
                {[1, 2, 3, 4, 5].map((j) => (
                  <TableCell key={j} className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ) : (
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
                      <Button className="bg-indigo-500 hover:bg-indigo-600">
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
                          onClick={() => addStudent(s?._id, Id)}
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
        )}
      </Table>
    </div>
  );
};

export default UnAssignedTable;
