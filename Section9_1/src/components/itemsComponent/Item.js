export default function Item(props) {

  console.log(props + "< 넘어오면 잘한거~~")
  return (
    <div className="LabelGroup">
        <span>{props.inputItem.userName} ({props.inputItem.userAge} years old)</span>
      </div>
  );
}
