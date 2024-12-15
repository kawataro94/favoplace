import { Button } from "@mantine/core";
import { useCounter, useDisclosure, useTimeout } from "@mantine/hooks";

export function PlaceCounter({
  name,
  visitCount,
}: {
  name: string;
  visitCount: number;
}) {
  const [loading, { open, close }] = useDisclosure();
  const { start, clear } = useTimeout(() => close(), 5000);
  const [count, { increment, decrement }] = useCounter(visitCount);

  function countUp() {
    open();
    increment();
    start();
  }

  function cancel() {
    close();
    decrement();
    clear();
  }

  return (
    <>
      {loading ? (
        <Button variant="filled" color="red" onClick={cancel}>
          取り消す
        </Button>
      ) : (
        <Button variant="gradient" onClick={countUp}>
          {name} ({count})
        </Button>
      )}
    </>
  );
}
