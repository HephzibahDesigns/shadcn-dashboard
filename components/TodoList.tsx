import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import DatePicker from "./DatePicker";
// import { Label } from "@/components/ui/label";

const TodoList = () => {
  return (
    <div className=" space-y-5">
      <DatePicker />
      <ScrollArea className="max-h-100 overflow-y-auto">
        <div className=" space-y-4">
          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>

          <Card className=" p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <label htmlFor="terms" className=" text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
