import ListItem from './ListItem.interface'
interface ShoppingListProps {
    items: ListItem[];
    deleteItem: (deleteId: string) => void;
  }
export default ShoppingListProps;