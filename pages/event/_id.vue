<template>
  <div>
    <h1>Event # {{ event.title }}</h1>
  </div>
</template>
<script>
  import EventService from '~/services/EventService'

  export default {
    async asyncData({ error, params }) {
      try {
        const response = await EventService.getEvent(params.id)
        return {
          event: response.data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch events  ' + params.id + '  Please try later'
        })
      }
    },

    head() {
      return {
        title: 'Event #' + this.event.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Information about your event #' + this.id
          }
        ]
      }
    }
  }
</script>

<style scoped></style>
