import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreditCard from "./CreditCard";
import TransactionInfo from "./TransactionInfo";
import BottomBar from "./BottomBar";

// https://dribbble.com/shots/16492237-Expense-Tracker-App
export default function Home() {
  return (
    <section className="px-6 py-8">
      <div className="flex justify-between">
        <div>
          <p className="text-sm tracking-tight text-muted-foreground">
            Good Morning!
          </p>
          <h4 className="text-lg font-bold">Rishabh</h4>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-8">
        <CreditCard />
      </div>
      <div className="space-y-4 mt-8 mb-16">
        <h4 className="text-2xl font-bold">Transactions</h4>
        <TransactionInfo />
      </div>
      <BottomBar />
    </section>
  );
}
