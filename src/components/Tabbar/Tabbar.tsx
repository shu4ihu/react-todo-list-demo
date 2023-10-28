import { FC, useState } from 'react'
import TabbarColorList from './components/TabbarColorList'
import TabbarLogoText from './components/TabbarLogoText'
import type { TaskModel } from '../Task/modules/modules'

const Tabbar:FC = ()=>{
    const [showColorList, setShowColorList] = useState(false)
    const [taskList, setTaskList] = useState([
        {
            content: "remember code",
            createdTime: new Date("2023-10-26"),
            isDone: false
        }
    ])
    const colorList: string[] = ['#f7d289','#f2aa85','#b99ff7','#63d6fa','#e9f1a4']

    const handleAddTaskClick = (): void => {
        setShowColorList(!showColorList)
    }
    
    const addTask = (): void => {
        const task: TaskModel = {
            content: "123",
            createdTime: new Date(),
            isDone: false
        } 
        setTaskList([...taskList,task])
    }

    return (
        <>
            <div className='flex h-full'>
                <div className="tabbar w-16vw h-full flex flex-col b-r-1">
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
                            <TabbarColorList colorList={colorList} clickItem={addTask}/>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabbar