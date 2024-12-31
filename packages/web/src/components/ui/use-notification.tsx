import stylex from "@stylexjs/stylex";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

export function useNotification(): {
  notifySuccess: () => void;
  notifyFailure: () => void;
} {
  function notifySuccess() {
    notifications.show({
      message: "Success",
      icon: Check,
    });
  }

  function notifyFailure() {
    notifications.show({
      message: "Failure",
      icon: X,
      color: "red",
    });
  }

  return { notifySuccess, notifyFailure };
}

const styles = stylex.create({
  icon: {
    width: "20px",
    height: "20px",
  },
});

const Check = <IconCheck {...stylex.props(styles.icon)} />;
const X = <IconX {...stylex.props(styles.icon)} />;
