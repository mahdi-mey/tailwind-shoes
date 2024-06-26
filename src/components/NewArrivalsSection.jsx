import Card from "./Card";

export default function NewArrivalsSection({ items, onClickCard }) {
  return (
    <div className="mt-20">
      <div className='flex-center"'>
        <div className="bg-[url('./assets/lines.png')] dark:text-white bg-center text-center text-2xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-center gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
