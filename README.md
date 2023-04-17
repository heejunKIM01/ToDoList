## 과제 요구사항
1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성합니다. 

2. Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 합니다. 

3. Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.

4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬합니다. 


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