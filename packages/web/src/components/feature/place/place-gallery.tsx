import { Fragment } from "react/jsx-runtime";
import stylex from "@stylexjs/stylex";
import { IconHistory } from "@tabler/icons-react";
import {
  Anchor,
  Card,
  Center,
  Group,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";

export function PlaceGallery({
  places,
}: {
  places: {
    id: string;
    name: string;
    visitCount: number;
    placePhotos: { pathname: string }[];
  }[];
}) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ base: 10, md: 20 }}
      verticalSpacing={{ base: 30, md: 20 }}
    >
      {places.map(({ id, name, visitCount, placePhotos }) => (
        <Fragment key={name}>
          <ImageCard
            id={id}
            title={name}
            visitCount={visitCount}
            placePhotos={placePhotos}
          />
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

function ImageCard({
  id,
  title,
  visitCount,
  placePhotos,
}: {
  id: string;
  title: string;
  visitCount: number;
  placePhotos: { pathname: string }[];
}) {
  const theme = useMantineTheme();
  const hasImage = !!placePhotos.length;

  return (
    <Card p="md" shadow="lg" {...stylex.props(styles.card)} radius="md">
      {hasImage ? (
        <>
          <div
            {...stylex.props(styles.image)}
            style={{
              backgroundImage: `url(${import.meta.env.PUBLIC_R2_URL}/${placePhotos[0].pathname})`,
            }}
          />
          <div {...stylex.props(styles.overlay)} />
        </>
      ) : (
        <div
          {...stylex.props(styles.image)}
          style={{
            backgroundImage: `url(./no-image.jpeg)`,
          }}
        />
      )}

      <Anchor
        component={Link}
        to="/places/$placeId"
        params={{ placeId: id }}
        underline="never"
        {...stylex.props(styles.content)}
      >
        <div>
          <Group justify="space-between" gap="xs">
            <Text size="sm" {...stylex.props(styles.category)}>
              {title}
            </Text>

            <Group gap="lg">
              <Center>
                <IconHistory
                  size={16}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" {...stylex.props(styles.bodyText)}>
                  {visitCount}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </Anchor>
    </Card>
  );
}

const styles = stylex.create({
  card: {
    position: "relative",
    height: "280px",
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
    ":hover": {
      cursor: "pointer",
      transform: "scale(1.03)",
    },
    transition: "transform 500ms ease",
  },
  image: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    position: "absolute",
    top: "80%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 90%)",
  },
  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  title: {
    color: "var(--mantine-color-dark-2)",
    marginBottom: "5px",
  },
  bodyText: {
    color: "var(--mantine-color-dark-2)",
    marginLeft: "7px",
  },
  category: {
    color: "var(--mantine-color-dark-2)",
  },
});
