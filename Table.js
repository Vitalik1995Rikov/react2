import React, {Component} from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import Toogle from './Toogle'

const Table = (props) => {
    
        const {characterData, removeCharacter} = props
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
				<Toogle/>
            </table>
        )
    }


export default Table