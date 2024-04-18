import { Checkbox, TableCell, TableRow } from "@mui/material";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

interface CustomRowProps<T extends RowWithId> {
  row: T;
  headCells: readonly HeadCell<T>[];
  isSelected: boolean;
  handleClick: (event: React.MouseEvent, id: number) => void;
}

export const CustomRow = <T extends RowWithId>({
  row,
  headCells,
  isSelected,
  handleClick,
}: CustomRowProps<T>) => {
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={row.id}
      selected={isSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isSelected}
          inputProps={{
            "aria-labelledby": `enhanced-table-checkbox-${row.id}`,
          }}
        />
      </TableCell>
      {headCells.map((cell) => (
        <TableCell
          key={cell.id}
          align={cell.numeric ? "center" : "left"}
          padding={cell.disablePadding ? "none" : "normal"}
        >
          {String(row[cell.id])}
        </TableCell>
      ))}
      <TableCell align="center">
        <button className="bg-transparent text-green-500 hover:border-none focus:outline-none hover:text-green-400 active:text-green-700">
          <PencilSquareIcon className="h-5 w-5"></PencilSquareIcon>
        </button>
        <button className="bg-transparent text-rose-500 hover:border-none focus:outline-none hover:text-rose-400 active:text-rose-700">
          <TrashIcon className="h-5 w-5"></TrashIcon>
        </button>
      </TableCell>
    </TableRow>
  );
};
