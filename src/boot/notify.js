
// https://v1.quasar.dev/quasar-plugins/notify

import { Notify } from 'quasar'

Notify.registerType('success', {
  icon: 'announcement',
  progress: true,
  color: 'yellow',
  textColor: 'white',
  classes: 'glossy'
})
// Optional type (that has been previously registered) or one of the out of the box ones
//  ('positive', 'negative', 'warning', 'info', 'ongoing')

 

// this.$q.notify({
//     type: 'negative',
//     message: `This notification is using a custom type.`
//   })