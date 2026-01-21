import { useState } from 'react'
import Lesson1 from './components/Lesson1'
import Lesson2 from './components/Lesson2'
import Lesson3 from './components/Lesson3'

function App() {
  const [lesson, setLesson] = useState('lesson1')

  const renderLesson = () => {
    switch (lesson) {
      case 'lesson1':
        return <Lesson1 />
      case 'lesson2':
        return <Lesson2 />

      case 'lesson3':
        return <Lesson3 />
      default:
        return null
    }
  }

  return (
    <div>
      <select value={lesson} onChange={(e) => setLesson(e.target.value)}>
        <option value="lesson1">Lección 1</option>
        <option value="lesson2">Lección 2</option>
        <option value="lesson3">Lección 3</option>
      </select>

      <hr />

      {renderLesson()}
    </div>
  )
}

export default App