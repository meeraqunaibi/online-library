import notFoundImg from '../../assets/images/404.svg';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <img src={notFoundImg} alt="chats" width={500} />
    </div>
  )
}

export default NotFound;