import React, { useState } from 'react';

const datalist = [
  {id:1, name: 'chk1', txt: '전체 동의', isChk: true},
  {id:2, name: 'chk2', txt: '나이 확인', isChk: false},
  {id:3, name: 'chk3', txt: '정보 수집 확인', isChk: false},
  {id:4, name: 'chk4', txt: '혜택 확인', isChk: false},
]

function Checkbox() {
  const [data, setData] = useState(datalist);
  const changeInput = e => {
    const {checked, name} = e.target;
    if(name === 'all') {
      setData(data.map(item => {
        return {
          ...item,
          isChk: checked,
        }
      }));
    } else {
      setData(
        data.map(item => item.name === name ? {...item, isChk : checked} : item)
      )
    }
  }

  return (
    <>
      <input type="checkbox" name='all' onChange={changeInput} checked={data.filter(item => item.isChk !== true).length < 1}/>
      <label>전체 동의</label>
      <hr />
      {data.map(info => <p key={info.id}><input type="checkbox" checked={info.isChk} name={info.name} onChange={changeInput}/><label>{info.txt}</label></p>)}

      {/* <p>
        <input type="checkbox" />
        <label>나이 확인</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>약관 확인</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>정보 수집 확인</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>혜택 확인</label>
      </p> */}
    </>
  );
}

export default Checkbox;