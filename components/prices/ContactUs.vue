<template>
  <div class="bg-blue-500 pt-7 pb-7">
    <h1 class="text-4xl text-center main-title font-display pt-color">
      Contact
    </h1>
    <div class="container mx-auto">
      <div
        class="max-w-2xl mx-auto my-10 bg-gray-50 bg-opacity-30 pt-5 pb-5 rounded-3xl shadow-sm"
      >
        <div class="m-7">
          <div class="mb-6">
            <InputField
              :tp="'text'"
              :nm="'name'"
              :i-d="'name'"
              :p-holder="'John Doe'"
              :req="true"
            />
          </div>

          <div class="mb-6" />

          <div class="mb-6" />
        </div>
      </div>
    </div>
  </div>
</template>
