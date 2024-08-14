import './Score.scss';

const Score = ({ score }) => {
  return (
    <>
    <h2 className='score'>Your current score is {score}</h2>
    </>
  )
}
export default Score;