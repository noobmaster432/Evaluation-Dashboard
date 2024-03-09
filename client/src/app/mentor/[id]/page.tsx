import Navbar from "@/components/Navbar";
import AssignedTable from "@/components/AssignedTable";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UnAssignedTable from "@/components/UnAssignedTable";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <div>
      <Navbar />
      <Tabs
        defaultValue="assigned"
        className="w-full px-2 sm:px-8 md:px-24 py-10"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assigned" className=" text-xs sm:text-sm">
            Assigned Students
          </TabsTrigger>
          <TabsTrigger value="unassigned" className=" text-xs sm:text-sm">
            UnAssigned Students
          </TabsTrigger>
        </TabsList>
        <TabsContent value="assigned">
          <AssignedTable Id={params.id} />
        </TabsContent>
        <TabsContent value="unassigned">
          <UnAssignedTable Id={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
