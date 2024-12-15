import { Link } from "@tanstack/react-router";
import { Table, Anchor } from "@mantine/core";

export function PlaceTable({
  places,
}: {
  places: {
    id: string;
    name: string;
    visitCount: number;
  }[];
}) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Place</Table.Th>
          <Table.Th>Visit Count</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {places.map(({ id, name, visitCount }) => (
          <Table.Tr key={name}>
            <Table.Td>
              <Anchor
                component={Link}
                to="/places/$placeId"
                params={{ placeId: id }}
              >
                {name}
              </Anchor>
            </Table.Td>
            <Table.Td>{visitCount}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
