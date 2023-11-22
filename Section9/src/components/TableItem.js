export default function TableItem(props) {


    return (
        <tr>
            <td>{props.item.year}</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>{props.item.yearlyInterest}</td>
            <td>{props.item.yearlyContribution}</td>
            <td>TOTAL INVESTED CAPITAL</td>
        </tr>
    );
}