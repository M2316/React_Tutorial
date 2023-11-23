import Item from "./Item";

export default function ItemsComponent(props) {
  return (
    <div className="ItemGroup">
      {props.datas.map(data=><Item inputItem={data} key={Math.random.toString().substring(3,5)}></Item>)}
    </div>
  );
}
