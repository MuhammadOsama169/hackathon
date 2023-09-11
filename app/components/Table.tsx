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

import { events } from './seed';

export const TableLogs = () => {
  return (
    <main>
      <div className="z-100 flex justify-center mx-auto relative top-[468px] ">
        <Table className=" h-[150px] w-[600px] overflow-y-auto block">
          <TableHeader>
            <TableRow>
              <TableHead className=" text-[#fdd04a] font-bold ">
                Event
              </TableHead>
              <TableHead className=" text-[#FAE058] font-bold">Date</TableHead>
              <TableHead className=" text-[#FAE058] font-bold">
                Location
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((scenario) => (
              <TableRow key={scenario.id}>
                <TableCell className="font-medium">
                  <h1> {scenario.title}</h1>
                </TableCell>
                <TableCell>
                  {' '}
                  <h1>{scenario.date}</h1>
                </TableCell>
                <TableCell className="">
                  <h1>{scenario.location}</h1>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};
