import { Button } from 'antd'
import {HiOutlineSun, HiOutlineMoon} from 'react-icons/hi';

export default function ThemeToggle({toggleTheme, darkTheme}) {
  return (
    <div className='theme-btn'>
      <Button className='toggle-btn' onClick={toggleTheme}>{darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}</Button>
      
    </div>
  )
}
