
import { MoonIcon, SunIcon } from "@/app/customIcon";
import { useTheme } from "next-themes";
import style from "./toggleTheme.module.css"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => { setTheme(theme == "light" ? "dark" : "light") }} className={style.btn}>
            {theme == "light" ? <MoonIcon height="1.2rem" width="1.2rem"/> : <SunIcon height="1.2rem" width="1.2rem"/>}
        </button>
    )

}
