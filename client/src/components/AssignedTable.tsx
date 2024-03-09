"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { getAssigned } from "@/lib/data";
import IndividualStudent from "./IndividualStudent";

const AssignedTable = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAssigned("65ea13180923e9ef0175705f").then((res) => {
      setStudent(res?.data);
    });
  }, [student]);

  return (
    <div>
      <Table>
        <TableCaption>A list of assigned students.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ideation</TableHead>
            <TableHead>Execution</TableHead>
            <TableHead>Pitch</TableHead>
            <TableHead>Total Marks</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {student?.map((s: any, i) => {
            return <IndividualStudent key={i} s={s} i={i} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignedTable;
