import {VFC} from 'react'
import { ClassicalFetchA } from './ClassicalFetchA'
import { ContextA } from './ContextA'
import { ContextB } from './ContextB'

export const MainContext = () => {
    return (
        <div className="grid grid-cols-2 gap-40">
            <ClassicalFetchA />
            <ClassicalFetchA />
            <ContextA />
            <ContextB />
        </div>
    )
}
