"use client";
import AppLineChart from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import HoverBadge from "@/components/HoverBadge";
import SheetComponent from "@/components/SheetComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/components/user-context";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

const userBadges = [
  {
    title: "Verified User",
    text: "This user has been verified by Admin",
    UserIcon: (
      <BadgeCheck
        size={36}
        className="rounded-full bg-blue-500/30 border border-blue-500 p-2"
      />
    ),
  },

  {
    title: "Awarded",
    text: "This User has been awarded for their contribution",
    UserIcon: (
      <Shield
        size={36}
        className="rounded-full bg-green-500/30 border border-green-500 p-2"
      />
    ),
  },

  {
    title: "Admin",
    text: "Admin users have access to all the features and can manage users.",
    UserIcon: (
      <Candy
        size={36}
        className="rounded-full bg-yellow-500/30 border border-yellow-500 p-2"
      />
    ),
  },

  {
    title: "Popular",
    text: "This User has been popular in the community",
    UserIcon: (
      <Citrus
        size={36}
        className="rounded-full bg-orange-500/30 border border-orange-500 p-2"
      />
    ),
  },
];

const SingleUserPage = () => {
  const { user } = useUser();
  return (
    <div>
      {/* container */}
      <div className=" mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges  */}
          <div className=" bg-primary-foreground p-4 rounded-lg">
            <h1 className=" text-xl font-semibold font-sans">Badges</h1>

            <div className="flex gap-4 mt-4 flex-row">
              {userBadges.map((user) => (
                <HoverBadge
                  key={user.title}
                  title={user.title}
                  text={user.text}
                  badge={user.UserIcon}
                />
              ))}
            </div>
          </div>

          {/* Information Details  */}
          <div className=" bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className=" text-xl font-semibold font-sans">User Info</h1>
              <SheetComponent />
            </div>

            <div className="space-y-4 mt-4">
              {/* Progress Bar */}
              <div className="flex flex-col gap-2 mb-8">
                <p className=" text-muted-foreground text-sm font-semibold">
                  Profile Completion
                </p>
                <Progress value={33} />
              </div>

              <div className="flex items-center gap-2">
                <span>Username: </span>
                <span>{user.username}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Email: </span>
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Phone: </span>
                <span>{user.phoneNumber}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Location: </span>
                <span>{user.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Role: </span>
                <Badge variant="outline">{user.role}</Badge>
              </div>
              <p className=" text-sm text-muted-foreground">
                Joined on 2025.12.24
              </p>
            </div>
          </div>

          {/* CardList  */}
          <div className=" bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* UserCard Details  */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/ProfilePics2.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className=" font-medium font-sans">Hephzibah Designs</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              We are a creative digital brand focused on crafting visually
              compelling and user-centered design solutions. With a strong eye
              for detail and a passion for clean aesthetics, Hephzibah Design
              specializes in transforming ideas into engaging digital
              experiences that balance beauty with functionality. The brand is
              driven by innovation, consistency, and a commitment to delivering
              designs that communicate clearly and leave a lasting impression.
            </p>
          </div>

          {/* Chart Container  */}
          <div className=" bg-primary-foreground p-4 rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
