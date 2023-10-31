import { FC } from "react"
import type { TabbarColorListProps } from "@Tabbar/modules/modules"

const TabbarColorList: FC<TabbarColorListProps> = ({colorList, onAddTask}: TabbarColorListProps)=> {
    const handleClick = (index: number) =>{
        onAddTask(index)
    }
    const list = colorList.map((item: string, index: number):JSX.Element => {
        const key = `${item}-${index}`
        return (
            <li key={key} onClick={() => handleClick(index)}>
                <div className="w-5 h-5 rounded-50%" style={{backgroundColor:item}}></div>
            </li>
        )
    })
    return (
        <div className="tabbar-color-list md:mt-6 ml-6 md:ml-0">
            <ul className="flex md:flex-col gap-6">
                {list}
            </ul>
        </div>
    )
}

export default TabbarColorList