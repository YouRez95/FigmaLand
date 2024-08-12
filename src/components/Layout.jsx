export default function Layout({ children }) {
  return (
    <div className=" py-32 px-10 flex flex-col items-center gap-7 container m-auto">
      {children}
    </div>
  );
}
