import { Button } from "@mantine/core";
import { useCounter, useDisclosure, useTimeout } from "@mantine/hooks";
import { pushVisitHistory } from "@web/lib/push-visit-history";
import { now } from "@web/lib/date";
import { useUserContext } from "@web/lib/user-context";

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
  const { userId } = useUserContext();

  const { start, clear } = useTimeout(async ([userId]) => {
    await pushVisitHistory({
      userId,
      placeId: id,
      date: now(),
    });

    close();
  }, 5000);

  function countUp() {
    open();
    increment();
    start(userId);
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
