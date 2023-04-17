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