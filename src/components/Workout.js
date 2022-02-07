
function Workout(props) {

    function NewLineText(text) {
        const newText = text.split("\n").map(str => <p>{str}</p>)
        return newText
    }

    const wodImage = require(`../Images/${props.workout.pstrImgSource}`)

    return (
        <div className="workout">
            <div className="workout--image">
                <img src={wodImage} />
            </div>
            <div className="workout--body">
                <h3>{props.workout.pdtmDate}</h3>
                <p>{props.workout.pstrWODHeader}</p>
                <div className="workout--indent">{NewLineText(props.workout.pstrWODBody)}</div>
                <h5>WOD Notes</h5>
                <p className="workout--indent">{props.workout.pstrWODNote}</p>
                <h5>Coach's Notes</h5>
                <p className="workout--indent">{props.workout.pstrCoachNote}</p>
            </div>
        </div>
    )
}

export default Workout;

