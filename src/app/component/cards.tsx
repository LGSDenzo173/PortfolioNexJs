export default function Card(props: any) {
  return (
    <>
      <div className="card h-52 mt-5 rounded-md content-between bg-gray-200 border-t-8 border-green-300 px-5 py-5">
        <h1 className="font-sans text-2xl font-black">{props.title}</h1>
        <p className="font-sans text-lg">{props.description}</p>
      </div>
    </>
  );
}
