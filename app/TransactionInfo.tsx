"use client";

import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { TTransaction } from "@/types/types";
import Transaction from "./Transaction";

export default function TransactionInfo() {
  const { data, isLoading } = useQuery<TTransaction[]>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/expenses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlciIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNzI3NDY2MjY3fQ.--EyeVUj7pR0wD3hw1sSyN7K5mguRHjcutbgY7x3IGI",
        },
      });
      return response.json();
    },
  });
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="rounded-xl h-24 w-full" />
        <Skeleton className="rounded-xl h-24 w-full" />
        <Skeleton className="rounded-xl h-24 w-full" />
        <Skeleton className="rounded-xl h-24 w-full" />
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        {data ? (
          data.map((transaction: TTransaction) => (
            <Transaction key={transaction.id} data={transaction} />
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    );
  }
}