"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 mt-10 justify-center flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = i + 1;

        const params = new URLSearchParams(
          searchParams.toString()
        );
        params.set("page", pageNumber.toString());

        return (
          <Link
            key={pageNumber}
            href={`?${params.toString()}`}
            className={`px-4 py-2 rounded font-bold ${
              currentPage === pageNumber
                ? "bg-(--primary) text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}