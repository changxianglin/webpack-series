<template>
  <a-upload name="file" :multiple="true" :customRequest="upload">
    <a-button>
      <upload-outlined></upload-outlined>Click to Upload
    </a-button>
  </a-upload>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);

    const upload = (data) => {
      console.log('上传文件', data);
      const formData = new FormData();
      formData.append('file', data.file);
      axios({
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          category: 'COMM',
          epid: '12D3868F-A44F-1AB3-0276-036A07F3F231',
        },
        url: 'http://120.79.93.109:9010/upload/uploadImageFile',
        data: formData,
      });
    };

    return { count, upload };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
