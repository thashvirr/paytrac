import Expenses from "@/components/Expenses";
import Income from "@/components/Income";
import NetIncome from "@/components/NetIncome";

export default function Home() {
  return (
    <div>
      {/* <h1>Component</h1>
      <h2>Component</h2>
      <h3>Component</h3>
      <h4>Component</h4>
      <h5>Component</h5>
      <p>Component</p> */}
      <div className="flex flex-col gap-4">
        <Income />
        <Expenses />
        <NetIncome />
      </div>
    </div>
  );
}
