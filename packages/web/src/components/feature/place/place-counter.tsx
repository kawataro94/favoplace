import { Button } from "@mantine/core";
import { useCounter, useDisclosure, useTimeout } from "@mantine/hooks";
import { pushVisitHistory } from "@web/lib/push-visit-history";
import { now } from "@web/lib/date";

export function PlaceCounter({
  id,
  name,
  visitCount,
}: {
  id: string;
  name: string;
  visitCount: number;
}) {
  const [loading, { open, close }] = useDisclosure();
  const [count, { increment, decrement }] = useCounter(visitCount);
  const { start, clear } = useTimeout(async () => {
    await pushVisitHistory({
      placeId: id,
      date: now(),
    });

    close();
  }, 5000);

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
