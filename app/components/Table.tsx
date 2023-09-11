'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

export const TableLogs = () => {
  const handleSubmit = () => {
    // implement me
  };
  return (
    <main>
      <Sheet>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>You are about to change this event</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
            <Textarea
              onClick={handleSubmit}
              placeholder="Type your message here."
            />
          </SheetHeader>
        </SheetContent>
        <div className="z-100 flex justify-center mx-auto relative top-[468px] ">
          <Table className=" h-[150px] w-[600px] overflow-y-auto block">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-[#fdd04a] font-bold ">
                  Event
                </TableHead>
                <TableHead className=" text-[#FAE058] font-bold">
                  Date
                </TableHead>
                <TableHead className=" text-[#FAE058] font-bold">
                  Location
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <SheetTrigger> WW2- Germany Declares War</SheetTrigger>
                </TableCell>
                <TableCell>
                  {' '}
                  <SheetTrigger>1939-1945</SheetTrigger>
                </TableCell>
                <TableCell className="">
                  <SheetTrigger>Germany</SheetTrigger>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <SheetTrigger>
                    Atomic Bombings of Hiroshima and Nagasaki
                  </SheetTrigger>
                </TableCell>
                <TableCell>
                  {' '}
                  <SheetTrigger>1945</SheetTrigger>
                </TableCell>
                <TableCell className="">
                  {' '}
                  <SheetTrigger>Japan</SheetTrigger>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  WW2- Germany Declares War
                </TableCell>
                <TableCell>1992</TableCell>
                <TableCell className="">Germany</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Sheet>
    </main>
  );
};
