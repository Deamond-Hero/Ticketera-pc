import { VscHome } from "react-icons/vsc";
import { BsChatLeftText } from "react-icons/bs";

export const SideBar = () => {
  return (
    <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-blue-ppal">
      <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
        <button className="mt-2 rounded-full bg-gray-100">
          <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
      <VscHome size={32} color="white" />
      <BsChatLeftText size={32} color="white" />
      </nav>
    </aside>
  );
};
