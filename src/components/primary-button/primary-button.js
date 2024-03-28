const PrimaryButton = ({ label }) => {
    const onClickHandler = () => {
        alert("Button Clicked");
    }
    return <button onClick={onClickHandler}>{label}</button>;
}

export default PrimaryButton;