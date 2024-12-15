import { Table } from "@mantine/core";

export function VisitHistoryTable({
  histories,
}: {
  histories: {
    date: string;
  }[];
}) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {histories.map(({ date }) => (
          <Table.Tr key={date}>
            <Table.Td>{date}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
