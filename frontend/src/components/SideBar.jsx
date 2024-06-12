import { VscHome } from "react-icons/vsc";
import { BsChatLeftText } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-blue-ppal">
      <div className="flex h-[4.5rem] w-full items-center justify-center p-2">
        <button className="mt-2 rounded-full bg-gray-100">
          <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <button onClick={goToHome}>
          <VscHome size={32} color="white" />
        </button>
        <button>
          <BsChatLeftText size={32} color="white" />
        </button>
      </nav>
    </aside>
  );
};
