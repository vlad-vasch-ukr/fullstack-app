import { toast } from 'react-hot-toast';

export default function notification(message, type = 'success', settings) {
  toast[type](message, {
    duration: 3000,
    position: 'top-right',
    ...settings,
  });
}
