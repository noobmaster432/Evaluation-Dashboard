import { useState } from "react";
import { CSVLink } from "react-csv";
import { Button } from "./ui/button";

interface CsvData {
  Name: string;
  Ideation: number;
  Execution: number;
  Pitch: number;
  Total: number;
}

const Topbar = ({ students }: { students: any }) => {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  
  return (
    <div className="py-2 px-4">
      <div className="flex gap-4 justify-end">
        <Button className="bg-indigo-600 hover:bg-indigo-700">
            <CSVLink
                data={csvData}
                asyncOnClick={true}
                onClick={() => {
                const data = students.map((student: any) => {
                    return {
                    Name: student.name,
                    Ideation: student.marks[0].score,
                    Execution: student.marks[1].score,
                    Pitch: student.marks[2].score,
                    Total:
                        student.marks[0].score +
                        student.marks[1].score +
                        student.marks[2].score,
                    };
                });
                setCsvData(data);
                }}
            >
                Download CSV
            </CSVLink>
        </Button>
        {/* <Button className="bg-green-600 hover:bg-green-500">Submit All</Button> */}
      </div>
    </div>
  );
};

export default Topbar;
