const BackButton = ({ style }) => {
    return (
        <div style={{...style}} className="back-btn">
            <img src="/assets/icon-arrow-left.svg" />
            <p>Go back</p>
        </div>
    )
}

export default BackButton