"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

import { useEffect, useState } from "react";
import { getAssigned } from "@/lib/data";
import IndividualStudent from "./IndividualStudent";
import Topbar from "./Topbar";

const AssignedTable = ({ Id }: { Id: string }) => {
  const [student, setStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAssigned(Id)
      .then((res) => {
        setStudent(res?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [Id]);

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
        {isLoading ? (
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableRow key={i}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((j) => (
                  <TableCell key={j} className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {student?.map((s: any, i) => {
              return <IndividualStudent key={i} s={s} i={i} Id={Id} />;
            })}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default AssignedTable;
