import stylex from "@stylexjs/stylex";
import { IconHistory } from "@tabler/icons-react";
import {
  Card,
  Center,
  Group,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ md: 20 }}
      verticalSpacing={{ md: 20 }}
    >
      <ImageCard title={"Cafe A"} />
      <ImageCard title={"Cafe B"} />
      <ImageCard title={"Cafe C"} />
      <ImageCard title={"Cafe D"} />
      <ImageCard title={"Cafe E"} />
    </SimpleGrid>
  );
}

function ImageCard({ title }: { title: string }) {
  const theme = useMantineTheme();

  const hasImage = false;

  return (
    <Card
      p="lg"
      shadow="lg"
      {...stylex.props(styles.card)}
      radius="md"
      component="a"
    >
      <div
        {...stylex.props(styles.image)}
        style={{
          backgroundImage: "url(./no-image.jpeg)",
        }}
      />
      <div {...stylex.props(hasImage && styles.overlay)} />

      <div {...stylex.props(styles.content)}>
        <div>
          <Text size="lg" {...stylex.props(styles.title)} fw={500}>
            {title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" {...stylex.props(styles.category)}>
              Cafe
            </Text>

            <Group gap="lg">
              <Center>
                <IconHistory
                  size={16}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" {...stylex.props(styles.bodyText)}>
                  1
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
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
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    position: "absolute",
    top: "20%",
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
    color: "var(--mantine-color-black)",
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
