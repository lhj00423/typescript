
import React, { useState } from 'react';

type MyFormProps = {
    onFormSubmit:(form:{ name:string, desc:string }) => void;
}
const MyForm = ({onFormSubmit}:MyFormProps) => {
    const [formDate, setFormData] = useState({
        name:"",
        desc:""
    })
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formDate,
            [name]:value
        })
    }
    //submit 버튼 클릭시 실행
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        //연결된 이벤트 제거
        e.preventDefault();
        onFormSubmit(formDate);
        setFormData({
            name:"",
            desc:""
        })
    } 
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" value={formDate.name} onChange={onChange}/>
                <input name="desc" value={formDate.desc} onChange={onChange} />
                <button type='submit'>등록</button>
            </form>
        </div>
    );
};

export default MyForm;