import { createFileRoute, Link } from "@tanstack/react-router";
import { Table, Anchor } from "@mantine/core";

export const Route = createFileRoute("/places/")({
  component: PlaceComponent,
});

const places = [
  { id: "cm3awodu80000j5x78ekcbt43", name: "A Cafe", visitCount: 1 },
  { id: "cm3awomsk0000j5x7gvsofji1", name: "B Cafe", visitCount: 1 },
  { id: "cm3awope00000j5x7bzdaggu8", name: "C Cafe", visitCount: 1 },
  { id: "cm3awosei0000j5x7dzpl8zw6", name: "D Cafe", visitCount: 1 },
  { id: "cm3awovbt0000j5x7csp46odw", name: "E Cafe", visitCount: 1 },
];

function PlaceComponent() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Places</Table.Th>
          <Table.Th>Visit Count</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {places.map((place) => (
          <Table.Tr key={place.name}>
            <Table.Td>
              <Anchor
                component={Link}
                to="/places/$placeId"
                params={{ placeId: place.id }}
              >
                {place.name}
              </Anchor>
            </Table.Td>
            <Table.Td>{place.visitCount}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
