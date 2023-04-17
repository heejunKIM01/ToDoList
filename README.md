## Addbutton 컴포넌트 분리(추가하기 버튼)
function Addbutton({clickAddButton}) {
    return (
        <button className='add-btn'
        onClick={clickAddButton}>추가하기</button>
    )
  }
  
  export default Addbutton




## todoDone 컴포넌트 분리(삭제하기 버튼)
function todoDone({b, deleteCard, unCompleteCard}) {
    return (
        <>
            <div className='working-card'>
                <div className='working-card-title'>{b.title}</div>
                <div className='working-card-comment'>{b.comment}</div>
                <div className='working-btn' key={b.id}>
                    <button className='delete-btn' onClick={() => deleteCard(b.id)}>삭제하기</button>
                    <button className='complete-btn' onClick={() => unCompleteCard(b.id)}>취소</button>
                </div>
            </div>
        </>
    )
}

export default todoDone;



## todoDone 컴포넌트 분리(완료 버튼)
function todoNotDone({b, deleteCard, completeCard}) {
    return (
      <>
        <div className='working-card'>
          <div className='working-card-title'>{b.title}</div>
          <div className='working-card-comment'>{b.comment}</div>
          <div className='working-btn' key={b.id}>
            <button className='delete-btn' onClick={() => deleteCard(b.id)}>삭제하기</button>
            <button className='complete-btn' onClick={() => completeCard(b.id)}>완료</button>
          </div>
        </div>
      </>
    )
  }
  
  export default todoNotDone;