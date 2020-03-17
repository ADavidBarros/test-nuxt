<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
  import EventCard from '~/components/EventCard'
  import EventService from '~/services/EventService'
  export default {
    components: { EventCard },
    async asyncData({ error }) {
      try {
        const response = await EventService.getEvents()
        return {
          events: response.data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time, Please try later'
        })
      }

      // .catch((e) => {
      //   error({
      //     statusCode: 503,
      //     message: 'Unable to fetch events at this time, Please try later'
      //   })
      // })
    },

    head() {
      return {
        title: 'Event Listing ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'All the Bros events'
          }
        ]
      }
    }
  }
</script>
