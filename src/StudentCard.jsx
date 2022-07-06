import ScoreList from "./ScoreList";


const StudentCard = ({student}) => {
  return ( 
    <div className="student-card">
      <h1>{student.name}</h1>
      <h1>{student.bio}</h1>
      <ScoreList scores={student.scores}/>
    </div>
  )
}

export default StudentCard;