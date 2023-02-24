import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import { Date as SugarDate } from 'sugar';
const REMINDERS_KEY = 'yal-reminders';

type Reminder = {
  id: string;
  name: string;
  description: string;
  time: string; // Date string
};

type Reminders = Reminder[];

const getReminders = (): Reminders => {
  const reminders = localStorage.getItem(REMINDERS_KEY);
  if (reminders) {
    let res;
    try {
      res = JSON.parse(reminders);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
  return [];
};

const randomString = () => Math.random().toString(36).slice(2);

const removeReminder = (id: string) => {
  // Remove the timer from local storage
  const reminders = getReminders();
  const newReminders = reminders.filter((r) => r.id !== id);
  localStorage.setItem(REMINDERS_KEY, JSON.stringify(newReminders));
};

const setReminder = (reminder: Reminder) => {
  const reminders = getReminders();
  reminders.push(reminder);
  localStorage.setItem(REMINDERS_KEY, JSON.stringify(reminders));
  const TIME_TO_REMIND = new Date(reminder.time).getTime() - Date.now();
  setTimeout(() => {
    yal.notification.sendNotification({
      title: `Reminder: ${reminder.name} `,
      body: reminder.description,
    });
    removeReminder(reminder.id);
  }, TIME_TO_REMIND);
};

function setTimersForExistingReminders() {
  const reminders = getReminders();
  reminders.forEach((reminder) => {
    setReminder(reminder);
  });
}

// Set times for existing reminders on startup
setTimersForExistingReminders();

export const reminderPlugin: YalPlugin = async (args) => {
  const isNotificationGranted = await yal.notification.isPermissionGranted();
  if (!isNotificationGranted) {
    const res = await yal.notification.requestPermission();
    if (res === 'denied') {
      args.utils.setToast({
        type: 'error',
        message: 'Notifications are required for reminders',
      });
    }
  }

  const currentReminders: Reminders = getReminders();

  args.setState({
    heading: 'Reminders',
    action: ({ item }) => {
      if (item.metadata?.setReminderOption === true) {
        // Get time from text, in between a < and > character
        const timeStamp = args.text.match(/<(.*)>/)?.[1];

        if (!timeStamp) {
          args.utils.setToast({
            type: 'error',
            message: 'Could not find a time in your message',
          });
          return;
        }
        const dateInput = SugarDate.create(timeStamp);
        const reminder: Reminder = {
          id: item.metadata.id,
          name: item.metadata.name,
          description: `Reminder for ${dateInput}`,
          time: dateInput.toISOString(),
        };
        setReminder(reminder);
      } else {
        removeReminder(item.metadata.id);
      }
    },
    state: [
      {
        name: 'Set Reminder.',
        description:
          args.text == ''
            ? `Type a message and add a time in between < >`
            : `Set a reminder to ${args.text}`,
        metadata: {
          id: randomString(),
          name: args.text,
          description: '',
          setReminderOption: true,
        },
      },
      ...currentReminders.map((reminder) => {
        console.log({ reminder });
        return {
          name: reminder.name,
          description: reminder.description,
          metadata: {
            id: reminder.id,
            name: reminder.name,
            description: reminder.description,
            setReminderOption: false,
          },
        };
      }),
    ],
  });
};

export const config: YalPluginsConfig = {
  keywords: 'remind',
  filter: false,
  keepOpen: true,
};

export default reminderPlugin;
