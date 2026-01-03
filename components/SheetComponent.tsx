import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import EditUser from "./EditUser";

const SheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit User</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className=" mb-4">Edit User</SheetTitle>
          <SheetDescription asChild>
            <EditUser />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetComponent;
