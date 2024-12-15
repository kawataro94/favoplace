import { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { Table } from "@mantine/core";
import { fetchPlace } from "@web/lib/fetchPlace";

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();

  const [place, setPlace] = useState<{
    name: string;
    description: string;
    visitCount: number;
  }>({
    name: "",
    description: "",
    visitCount: 0,
  });

  useEffect(() => {
    (async function () {
      const { place: _place } = await fetchPlace({ placeId });
      setPlace(_place);
    })();
  }, []);

  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160} {...stylex.props(styles.th)}>
            Place
          </Table.Th>
          <Table.Td>{place.name}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th {...stylex.props(styles.th)}>Description</Table.Th>
          <Table.Td>{place.description}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th {...stylex.props(styles.th)}>Visit Count</Table.Th>
          <Table.Td>{place.visitCount}</Table.Td>
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
