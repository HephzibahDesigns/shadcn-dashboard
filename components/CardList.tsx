import Image from "next/image";
import { popularContent, latestTransactions } from "./CardData";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <div className="text-lg font-medium mb-6">{title}</div>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden ml-5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex-1 px-4">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>

              <Badge
                variant="secondary"
                className="mt-1 inline-flex items-center gap-1 bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon className="h-3 w-3" />
                {item.badge}
              </Badge>
            </CardContent>

            <CardFooter className="pr-4 text-sm font-medium">
              {item.count / 1000}k
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
