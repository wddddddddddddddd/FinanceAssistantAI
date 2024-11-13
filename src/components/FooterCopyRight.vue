<template>
    <footer class="footer">
      <p class="copyright">
        <Typewriter text="Copyright &copy; 2024 极客大赛 - 财讯小灵通 | 团队：赢了冠军开派对" :speed="150" />
      </p>
      <p class="members">
        <Typewriter text="成员：康力、范、鲁、孙、刘、曹、金" :speed="150" />
      </p>
    </footer>
  </template>
  
  <script>
  import Typewriter from '../components/Typewriter.vue';
  export default {
    name: 'FooterCopyRight',
    components: {
    Typewriter
  }
  };
  </script>
  
  <style scoped>
    @font-face {
    font-family: 'ShouhuFont';
    src: url('/360shouhuType-Bold.otf') format('opentype');
    }

  .footer {
    font-family: 'ShouhuFont', monospace;
    background-color: #f8f8f8;
    opacity: 0.8;
    padding: 20px;
    text-align: center;
    font-size: 0.9em;
    color: #555;
  }
  
  .footer .copyright {
    margin-bottom: 5px;
  }
  
  .footer .members {
    font-family: 'ShouhuFont', monospace;
    margin-top: 5px;
    font-size: 0.8em;
    color: #777;
  }
  </style>
  