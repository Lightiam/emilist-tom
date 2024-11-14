"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { reportLinks } from "@/constants";

type Props = {
  currentLink: number;
  setMonth?: any;
  setYear?: any;
  month?: number | undefined;
  year?: number;
};

const ReportHeader = ({
  currentLink,
  setMonth,
  setYear,
  month,
  year,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <h2 className="text-2xl font-bold max-sm:text-lg pt-6">Report</h2>
      <div className="my-4">
        <h6 className="text-[#5E625F] sm:text-lg font-medium text-sm">
          Select the report you want to see
        </h6>
        <div className="flex-c gap-4 my-2 flex-wrap">
          <div
            className={` flex-1 min-w-[280px]  max-w-[280px] rounded-lg  px-4 flex-c-b relative max-sm:h-[46px] h-[50px] bg-white `}
          >
            <div
              className="flex-c gap-3 flex-wrap flex-1 h-full cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <p className="flex-c gap-1 text-[#737774] max-sm:text-sm capitalize">
                {reportLinks[currentLink - 1].name}
              </p>
            </div>
            <div className="cursor-pointer">
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="arrow-down"
                width={20}
                height={20}
                className="object-contain w-6 h-6 max-sm:w-5 max-sm:h-5"
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            {open && (
              <ul className="absolute flex flex-col top-full left-0  max-sm:w-full bg-white shadow-md justify-center p-4 rounded-md w-full gap-4">
                {reportLinks.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    className="w-full max-sm:text-sm hover:text-primary-green"
                  >
                    <li
                      onClick={() => {
                        setOpen((prev) => !prev);
                      }}
                      className="  capitalize"
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className=" min-w-[137px] w-[137px]  max-w-[137px] rounded-lg h-[50px] px-4 bg-white focus:outline-none focus-within:border-primary-green focus-within:border-1 max-sm:h-[46px] ">
            <select
              className="bg-white outline-none  min-w-full w-full h-full max-w-full max-sm:text-sm text-[#002913]"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>Monthly</option>
              <option value={1}>Jan</option>
              <option value={2}>Feb</option>
              <option value={3}>Mar</option>
              <option value={4}>Apr</option>
              <option value={5}>May</option>
              <option value={6}>Jun</option>
              <option value={7}>Jul</option>
              <option value={8}>Aug</option>
              <option value={9}>Sep</option>
              <option value={10}>Oct</option>
              <option value={11}>Nov</option>
              <option value={12}>Dec</option>
            </select>
          </div>
          <div className=" min-w-[137px] w-[137px]  max-w-[137px] rounded-lg h-[50px] px-4 bg-white focus:outline-none focus-within:border-primary-green focus-within:border-1  max-sm:h-[46px] ">
            <select
              className="bg-white outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] text-[#002913]"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
