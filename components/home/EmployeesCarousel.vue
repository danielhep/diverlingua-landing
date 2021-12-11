<template>
  <div class="bg-white">
    <div class="mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold font-header tracking-tight sm:text-4xl">
          Meet our teachers
        </h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" :src="require(`~/assets/${person.imageUrl}`)" alt="">
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ person.name }}</h3>
                    <p class="text-diverlingua-aqua">
                      {{ person.role }}
                    </p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">
                      {{ person.bio }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    const people = [
      {
        name: 'Miguel Frontado',
        role: 'English / Spanish',
        imageUrl: 'miguel-foto.jpg',
        bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.'
      },
      {
        name: 'Ana Simanca',
        role: 'French / Spanish',
        imageUrl: 'ana-foto.jpg',
        bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.'
      }
    ]
    return { people }
  }

}
</script>
