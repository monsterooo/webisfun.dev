export function Line() {
  return (
    <div className="fixed top-0 left-0 right-0 h-full w-screen -z-10">
      <div className="absolute w-[1px] h-full top-0 left-[15%] overflow-hidden bg-gray-100 after:content-[''] after:absolute after:block after:h-[15vh] after:w-full after:translate-y-[-50vh] after:left-0 after:bg-line after:animate-line-drop"></div>
      <div className="absolute w-[1px] h-full top-0 left-[calc(70%/3+15%)] overflow-hidden bg-gray-100 after:content-[''] after:absolute after:block after:h-[15vh] after:w-full after:translate-y-[-50vh] after:left-0 after:bg-line after:animate-line-drop after:delay-2000"></div>
      <div className="absolute w-[1px] h-full top-0 left-[calc(70%*2/3+15%)] overflow-hidden bg-gray-100 after:content-[''] after:absolute after:block after:h-[15vh] after:w-full after:translate-y-[-50vh] after:left-0 after:bg-line after:animate-line-drop after:delay-2500"></div>
      <div className="absolute w-[1px] h-full top-0 left-[calc(85%)] overflow-hidden bg-gray-100 after:content-[''] after:absolute after:block after:h-[15vh] after:w-full after:translate-y-[-50vh] after:left-0 after:bg-line after:animate-line-drop after:delay-1000"></div>
    </div>
  );
}
