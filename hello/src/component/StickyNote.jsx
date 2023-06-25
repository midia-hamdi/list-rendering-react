import React from 'react';
import Note from './Note';

export default function StickyNote() {

    const NotsData = [
        {title:'title #1', content:'text content #1'},
        {title:'title #2', content:'text content #2'},
        {title:'title #3', content:'text content #3'},
        {title:'title #4', content:'text content #4'},
        {title:'title #5', content:'text content #5'},
        {title:'title #6', content:'text content #6'},
        {title:'title #7', content:'text content #7'},
        {title:'title #8', content:'text content #8'},

    ]

    const notes = NotsData.map((note, index) => <Note key={index} title={note.title} content={note.content}/>)

  return (<ul>
            {notes}
          </ul>
  )
}
