import { FC } from "react"

interface TabbarColorListProps {
    colorList: string[]
    clickItem: (index: number) => void 
}

const TabbarColorList: FC<TabbarColorListProps> = ({colorList, clickItem}: TabbarColorListProps)=> {
    const handleClick = (index: number) =>{
        clickItem(index)
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
        <>
            <div className="tabbar-color-list mt-6">
                <ul className="flex flex-col gap-6">
                    {list}
                </ul>
            </div>
        </>
    )
}

export default TabbarColorList