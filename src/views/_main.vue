<template>
  <section class="main">
    <div class="title">Game</div>
    <div class="card">
      <header>
        <em>
          <ul>
            <li>
              4.711
            </li>
            <li>
              42
            </li>
            <li>
              0
            </li>
          </ul>
        </em>
        <ul>
          <li>
            Played Seconds
          </li>
          <li>
            Turns
          </li>
          <li>
            Solved Levels
          </li>
        </ul>
      </header>
      <footer>
        <div @click="game.continue()" v-if="game.canContinue">
          Continue
        </div>
        <div @click="game.startLevel()">
          New Game
        </div>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: [
    'game'
  ],
};
</script>

<style lang="stylus">
.view--main {
  .main {
    z-index: 1;
  }
}

.view--select-level {
  .main {
    @media (orientation: portrait) {
      transform: translate3d(-80vw, 0, 0);
    }

    @media (orientation: landscape) {
      transform: translate3d(calc(-60vh + -20vw), 0, 0);
    }
    .title {
      @media (orientation: portrait) {
        transform: translate3d(10vw, 0, 0);
      }

      @media (orientation: landscape) {
        transform: translate3d(10vh, 0, 0);
      }
    }
  }
}

.view--options {
  .main {
    @media (orientation: portrait) {
      transform: translate3d(-99vw, 0, 0);
    }

    @media (orientation: landscape) {
      transform: translate3d(calc(-120vh + -40vw), 0, 0);
    }
  }
}

.main {
  header {
    display: flex;
    font-size: 0.5rem;
    em {
      flex-basis: 4rem;
      li {
        text-align: right;
      }
    }
    li {
      padding: 0.35em 0.2em;
    }
    margin-bottom: 0.25rem;
  }
  footer {
    div {
      color: #aaa;
      padding-top: 0.4rem;
      &:first-child {
        color: inherit;
      }
    }
  }
}
</style>
