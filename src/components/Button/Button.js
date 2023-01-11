import { Button } from 'antd';

const MyButton = ({onClick,name,styleButton})=>{
    
    return(
        <Button type="primary" size={'large'} onClick={onClick} htmlType="submit" className={styleButton}>
            {name}
          </Button>
    )
}

export default MyButton;