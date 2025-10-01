import { Sun, Moon } from "lucide-react";
type themetype = {
  theme: string;
  setTheme: (theme: string) => void;
};
const DarkTheme = ({ setTheme }: themetype) => {
  return (
    <div className="rounded-md flex items-center bg-gray-300 p-1 dark:bg-zinc-400">
      <button
        className="rounded-lg p-2 hover:bg-gray-200 cursor-pointer dark:bg-zinc-100/5  dark:text-white dark:hover:text-black"
        onClick={() => setTheme("")}
      >
        <Sun />
      </button>
      <button
        className="rounded-lg p-2 hover:bg-gray-200 cursor-pointer dark:bg-gray-100/5  dark:text-white dark:hover:text-black"
        onClick={() => setTheme("dark")}
      >
        <Moon />
      </button>
    </div>
  );
};

export default DarkTheme;
