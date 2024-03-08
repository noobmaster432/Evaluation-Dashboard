import Navbar from "@/components/Navbar";
import AssignedTable from "@/components/AssignedTable";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UnAssignedTable from "@/components/UnAssignedTable";

export default function Home() {
  return (
    <div className="gap-4">
      <Navbar />
      <Tabs defaultValue="assigned" className="w-full px-24 py-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assigned">Assigned Students</TabsTrigger>
          <TabsTrigger value="unassigned">UnAssigned Students</TabsTrigger>
        </TabsList>
        <TabsContent value="assigned">
          <AssignedTable />
        </TabsContent>
        <TabsContent value="unassigned">
          <UnAssignedTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
