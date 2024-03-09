"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { getAssigned } from "@/lib/data";
import IndividualStudent from "./IndividualStudent";
import Topbar from "./Topbar";

const AssignedTable = ({ Id }: { Id: string }) => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAssigned(Id).then((res) => {
      setStudent(res?.data);
    });
  }, [student, Id]);

  return (
    <div>
      <Topbar students={student} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ideation</TableHead>
            <TableHead>Execution</TableHead>
            <TableHead>Pitch</TableHead>
            <TableHead>Total</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {student?.map((s: any, i) => {
            return <IndividualStudent key={i} s={s} i={i} Id={Id} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignedTable;
