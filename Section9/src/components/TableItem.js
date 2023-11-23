export default function TableItem(props) {


    return (
        <tr>
            <td>{props.item.year}</td>
            <td>{props.item.savingsEndOfYear}</td>
            <td>{props.item.yearlyInterest}</td>
            <td>{props.item.yearlyInterest * props.item.year}</td>
            <td>{props.item.yearlyContribution * props.item.year}</td>
        </tr>
    );
}

