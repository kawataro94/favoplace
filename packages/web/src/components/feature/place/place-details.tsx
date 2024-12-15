import stylex from "@stylexjs/stylex";
import { Table } from "@mantine/core";

export function PlaceDetails({
  description,
  visitCount,
}: {
  description: string;
  visitCount: number;
}) {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th {...stylex.props(styles.th)}>Description</Table.Th>
          <Table.Td>{description}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th {...stylex.props(styles.th)}>Visit Count</Table.Th>
          <Table.Td>{visitCount}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}

const styles = stylex.create({
  th: {
    backgroundColor: "var(--mantine-color-gray-0)",
  },
});
