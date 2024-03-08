import { TableCell, TableRow } from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { unAssignStudent, updateStudent } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

const IndividualStudent = ({ s, i }: { s: any; i: any }) => {
  const { toast } = useToast();
  const [mark, setMark] = useState({
    ideation: s?.marks[0].score,
    execution: s?.marks[1].score,
    pitch: s?.marks[2].score,
  });

  const editStudent = (studentId: any, mark: any) => {
    const data = {
      studentId: studentId,
      marks: [
        {
          parameter: "Ideation",
          score: mark.ideation,
        },
        {
          parameter: "Execution",
          score: mark.execution,
        },
        {
          parameter: "Pitch",
          score: mark.pitch,
        },
      ],
    };
    updateStudent(data)
      .then((res) => {
        console.log(res);
        toast({
          description: "Student marks updated successfully",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error updating student marks",
          description: err,
        });
      });
  };

  const removeStudent = (mentorId: any, studentId: any) => {
    unAssignStudent(mentorId, studentId)
      .then((res) => {
        console.log(res);
        toast({
          description: "Student removed successfully",
        });
      })
      .catch((err) => {
        toast({
          title: "Error removing student",
          description: err.message,
        });
      });
  };

  return (
    <TableRow key={i}>
      <TableCell className="font-medium">{i + 1}</TableCell>
      <TableCell>{s?.name || "John Doe"}</TableCell>
      <TableCell>{(s?.name).split(" ")[0]}@gmail.com</TableCell>
      <TableCell>{s?.marks[0]?.score}</TableCell>
      <TableCell>{s?.marks[1]?.score}</TableCell>
      <TableCell>{s?.marks[2]?.score}</TableCell>
      <TableCell>
        {parseInt(s.marks[0].score) +
          parseInt(s?.marks[1]?.score) +
          parseInt(s?.marks[2]?.score)}
      </TableCell>
      <TableCell className="space-x-4">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-blue-500 hover:bg-blue-600">Edit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={s?.name}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ideation" className="text-right">
                  Ideation
                </Label>
                <Input
                  id="ideation"
                  value={mark.ideation}
                  onChange={(e) =>
                    setMark({
                      ...mark,
                      ideation: parseInt(e.target.value),
                    })
                  }
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="execution" className="text-right">
                  Execution
                </Label>
                <Input
                  id="execution"
                  className="col-span-3"
                  value={mark.execution}
                  onChange={(e) =>
                    setMark({
                      ...mark,
                      execution: parseInt(e.target.value),
                    })
                  }
                  type="number"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pitch" className="text-right">
                  Pitch
                </Label>
                <Input
                  id="pitch"
                  className="col-span-3"
                  value={mark.pitch}
                  onChange={(e) =>
                    setMark({
                      ...mark,
                      pitch: parseInt(e.target.value),
                    })
                  }
                  type="number"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => editStudent(s?._id, mark)}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-red-500 hover:bg-red-600">Remove</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will unassign the student.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() =>
                  removeStudent("65ea13180923e9ef0175705f", s?._id)
                }
              >
                Remove
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default IndividualStudent;
