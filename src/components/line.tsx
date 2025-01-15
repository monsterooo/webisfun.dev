export function Line() {
  return (
    <div className="fixed top-0 left-0 right-0 h-full w-screen -z-10">
      <div className="absolute w-[1px] h-full top-0 left-[15%] overflow-hidden after:content-[''] after:block after:h-[15vh] after:w-full after:translate-y-[-50vh] after:left-0"></div>
    </div>
  );
}
