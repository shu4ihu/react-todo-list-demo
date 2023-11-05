import { FC, ReactNode, useState } from 'react'
import TabbarColorList from '@TabbarComp/TabbarColorList'
import TabbarLogoText from '@TabbarComp/TabbarLogoText'
import type { TaskModel } from '@Task/modules/modules'
import type { TabbarProps } from '@Tabbar/modules/modules'

const Tabbar:FC<TabbarProps> = ({ taskList, setTaskList}: TabbarProps): ReactNode=>{
    const [showColorList, setShowColorList] = useState(false)
    const colorList: string[] = ['#f7d289','#f2aa85','#b99ff7','#63d6fa','#e9f1a4']

    /**
     * @description 点击添加任务按钮，显示颜色列表
     */
    const handleAddTaskClick = (): void => {
        setShowColorList(!showColorList)
    }
    
    /**
     * @description 根据index决定任务卡颜色，然后添加任务
     * @param index 
     */
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
        <div className='md:h-full md:w-12vw flex items-center'>
            <div className="tabbar md:w-12vw w-full md:h-full flex flex-col md:b-r-1 md:fixed justify-between">
                <TabbarLogoText></TabbarLogoText>
                <div className="tabbar-content md:w-full h-full flex md:flex-col items-center md:pl-0 pl-8vw md:mt-0 mt-2vh">
                    <div className="tabbar-content-add md:w-12 md:h-12 md:mt-2 
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