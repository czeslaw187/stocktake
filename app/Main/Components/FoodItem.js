import { ListGroupItem } from "reactstrap";

export default function FoodItem({el}) {
    return(
        <ListGroupItem>
            {el.name}
        </ListGroupItem>
    )
}