export default function NetIncome({ profit_loss }) {
  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h2>Net Income</h2>
        <h2>R {profit_loss}</h2>
      </div>
    </div>
  );
}
