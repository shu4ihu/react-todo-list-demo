import { FC, ReactNode, useState } from 'react'
import TabbarColorList from '@TabbarComp/TabbarColorList'
import TabbarLogoText from '@TabbarComp/TabbarLogoText'
import type { TaskModel } from '@Task/modules/modules'
import type { TabbarProps } from '@Tabbar/modules/modules'

const Tabbar:FC<TabbarProps> = ({ taskList, setTaskList}: TabbarProps): ReactNode=>{
    const [showColorList, setShowColorList] = useState(false)
    const colorList: string[] = ['#f7d289','#f2aa85','#b99ff7','#63d6fa','#e9f1a4']

    const handleAddTaskClick = (): void => {
        setShowColorList(!showColorList)
    }
    
    const handleAddTask = (index: number): void => {
        const task: TaskModel = {
            id: Date.now(),
            content: "Note",
            createdTime: new Date(),
            cardColor: colorList[index],
            isDone: false
        } 
        setTaskList([...taskList,task])
    }

    return (
        <div className='h-full'>
            <div className="tabbar w-16vw h-full flex flex-col b-r-1 fixed">
                <TabbarLogoText></TabbarLogoText>
                <div className="tabbar-content w-full h-full flex flex-col items-center">
                    <div className="tabbar-content-add w-12 h-12 lh-12 mt-2
                        op-90 bg-black text-white flex justify-center items-center rounded-50%" 
                        onClick={() => {handleAddTaskClick()}}
                    >
                        <i className="i-carbon-add text-3xl op-90"></i>
                    </div>
                    {
                        showColorList ? 
                        <TabbarColorList colorList={colorList} onAddTask={handleAddTask}/>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Tabbar