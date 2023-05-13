import { Progress, Typography } from "@material-tailwind/react";

export default function Skill(props: any) {
  return (
    <>
    
      <div className="grid grid-cols-2 gap-12 p-8">
        <div>
        <div className="flex justify-between mt-7">
          <h1 className="">HTML</h1>
          <h1 className="">90%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-11/12"></div>
        </div>
        <div className="flex justify-between mt-7">
          <h1 className="">CSS</h1>
          <h1 className="">85%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-10/12"></div>
        </div>
        <div className="flex justify-between mt-7">
          <h1 className="">Bootstrap</h1>
          <h1 className="">80%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-4/5"></div>
        </div>
        </div>
        <div>
        <div className="flex justify-between mt-7">
          <h1 className="">Wordpress</h1>
          <h1 className="">95%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-full"></div>
        </div>
        <div className="flex justify-between mt-7">
          <h1 className="">Typescript</h1>
          <h1 className="">75%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-3/4"></div>
        </div>
        <div className="flex justify-between mt-7">
          <h1 className="">Tailwind CSS</h1>
          <h1 className="">60%</h1>
        </div>
        <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
          <div className="h-2 bg-blue-500 w-3/5"></div>
        </div>
        </div>
      </div>
    </>
  );
}
