<template>
  <div class="like-button-v2-state-table">
    <table>
      <caption><h1>State Table of the LikeCoin button</h1></caption>

      <tr>
        <th colspan="5">
          <h2>Like-able</h2>
          <p>For those who are <b>NOT</b> the creator of the content</p>
        </th>
      </tr>
      <tr>
        <td>
          <Initial />
          <caption>initial</caption>
        </td>
        <td>
          <Clapped1 />
          <caption>given 1 like</caption>
        </td>
        <td>
          <Clapped2 />
          <caption>given 2 likes</caption>
        </td>
        <td>
          <Clapped3 />
          <caption>given 3 likes</caption>
        </td>
        <td>
          <Clapped4 />
          <caption>given 4 likes</caption>
        </td>
      </tr>
      <tr>
        <td
          class="code-range"
          colspan="5"
        >
          <div><code>initial</code></div>
        </td>
      </tr>

      <tr>
        <th colspan="5">
          <h2>Un-Super-Like-able</h2>
          <p>For those who <b>CURRENTLY CANNOT</b> perform Super Like
            (i.e., not a Civic Liker)</p>
        </th>
      </tr>
      <tr>
        <td>
          <Maxed />
          <caption>never Super Liked before</caption>
        </td>
        <td>
          <MaxedButSuperLiked />
          <caption>Super Liked at least once</caption>
        </td>
      </tr>
      <tr>
        <td
          class="code-range"
          colspan="2"
        >
          <div><code>unsuperlikeable</code></div>
        </td>
      </tr>

      <tr>
        <th colspan="5">
          <h2>Super-Like-able</h2>
          <p>For those who <b>CURRENTLY</b> can perform Super Like</p>
        </th>
      </tr>
      <tr>
        <td>
          <SuperLikeable />
          <caption>never Super Liked before</caption>
        </td>
        <td>
          <SuperLiked />
          <caption>Super Liked at least once</caption>
        </td>
      </tr>
      <tr>
        <td
          class="code-range"
          colspan="2"
        >
          <div><code>superlikeable</code></div>
        </td>
      </tr>

      <tr>
        <th colspan="5">
          <h2>Cooldown</h2>
          <p>For those who have Super Liked recently and now waiting for the cooldown</p>
        </th>
      </tr>
      <tr>
        <td>
          <SuperLikeableCooldown />
          <caption>Super Liked other</caption>
        </td>
        <td>
          <Cooldown />
          <caption>Super Liked at least once</caption>
        </td>
        <td>
          <JustSuperLiked />
          <caption>just Super Liked this</caption>
        </td>
      </tr>
      <tr>
        <td
          class="code-range"
          colspan="2"
        >
          <div><code>cooldown</code></div>
        </td>
        <td class="code-range">
          <div><code>just-superliked</code></div>
        </td>
      </tr>

    </table>

    <table>
      <caption><h1>State Table of the Badge</h1></caption>

      <tr>
        <th colspan="5">
          <h2>Like count</h2>
        </th>
      </tr>
      <tr>
        <td>
          <Badge0 />
          <caption>Not yet liked</caption>
        </td>
        <td>
          <Badge1 />
          <caption>given 1 like</caption>
        </td>
        <td>
          <Badge2 />
          <caption>given 2 likes</caption>
        </td>
        <td>
          <Badge3 />
          <caption>given 3 likes</caption>
        </td>
        <td>
          <Badge4 />
          <caption>given 4 likes</caption>
        </td>
      </tr>
      <tr>
        <td
          class="code-range"
          colspan="1"
        >
          <div><code>hidden</code></div>
        </td>
        <td
          class="code-range"
          colspan="4"
        >
          <div><code>liked</code></div>
        </td>
      </tr>

      <tr>
        <th colspan="5">
          <h2>Super Like</h2>
        </th>
      </tr>
      <tr>
        <td>
          <BadgeShareable />
          <caption>Not yet Super Liked</caption>
        </td>
        <td>
          <BadgeShared />
          <caption>Super Liked</caption>
        </td>
      </tr>
      <tr>
        <td class="code-range">
          <div><code>shareable</code></div>
        </td>
        <td class="code-range">
          <div><code>shared</code></div>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
import LikeButton from './LikeButtonV2';
import LikeButtonBadge from './LikeButtonV2.badge';

const ButtonFactory = ({
  id,
  count = 0,
  cooldown = 0,
  hasSuperLiked = false,
  isJustSuperLiked = false,
  isSuperLikeEnabled = false,
  isCreator = false,
} = {}) => ({
  components: {
    LikeButton,
  },
  data() {
    return {
      id,
      count,
      cooldown,
      hasSuperLiked,
      isJustSuperLiked,
      isSuperLikeEnabled,
      isCreator,
    };
  },
  template: `
    <LikeButton
      v-bind="{
        id,
        count,
        cooldown,
        cooldownEndTime: 0,
        hasSuperLiked,
        isJustSuperLiked,
        isSuperLikeEnabled,
        isCreator,
      }"
    />
  `,
});

const BadgeFactory = ({
  count = 0,
  hasSuperLiked = false,
  isSuperLikeEnabled = false,
} = {}) => ({
  components: {
    LikeButtonBadge,
  },
  data() {
    return {
      count,
      hasSuperLiked,
      isSuperLikeEnabled,
    };
  },
  template: `
    <svg width="156" viewBox="0 0 156 156">
      <LikeButtonBadge
        x="60"
        y="0"
        v-bind="{
          count,
          hasSuperLiked,
          isSuperLikeEnabled,
        }"
      />
    </svg>
  `,
});

const components = {};
[
  { id: 'Initial' },
  { id: 'Clapped1', count: 1 },
  { id: 'Clapped2', count: 2 },
  { id: 'Clapped3', count: 3 },
  { id: 'Clapped4', count: 4 },
  { id: 'Maxed', count: 5 },

  {
    id: 'MaxedButSuperLiked',
    count: 5,
    hasSuperLiked: true,
  },
  {
    id: 'SuperLikeable',
    count: 5,
    isSuperLikeEnabled: true,
  },
  {
    id: 'SuperLikeableCooldown',
    count: 5,
    isSuperLikeEnabled: true,
    cooldown: 0.5,
  },
  {
    id: 'JustSuperLiked',
    count: 5,
    isSuperLikeEnabled: true,
    hasSuperLiked: true,
    isJustSuperLiked: true,
    cooldown: 0.95,
  },
  {
    id: 'Cooldown',
    count: 5,
    isSuperLikeEnabled: true,
    hasSuperLiked: true,
    cooldown: 0.5,
  },
  {
    id: 'SuperLiked',
    count: 5,
    isSuperLikeEnabled: true,
    hasSuperLiked: true,
  },
].forEach(({ id, ...restConfigs }) => {
  components[id] = ButtonFactory({
    id: id.toLowerCase(),
    ...restConfigs,
  });
});

[
  {
    id: 'Badge0',
  },
  {
    id: 'Badge1',
    count: 1,
  },
  {
    id: 'Badge2',
    count: 2,
  },
  {
    id: 'Badge3',
    count: 3,
  },
  {
    id: 'Badge4',
    count: 4,
  },

  {
    id: 'BadgeShareable',
    count: 5,
  },
  {
    id: 'BadgeShared',
    count: 5,
    hasSuperLiked: true,
  },
].forEach(({ id, ...restConfigs }) => {
  components[id] = BadgeFactory(restConfigs);
});

export default {
  name: 'state-table',
  components,
};
</script>

<style>
html {
  color: #4a4a4a;
  background: #f7f7f7;

  font-family: Helvetica, Arial, sans-serif;
}

table {
  margin: 0 auto 100px;
  padding: 10px;

  border-spacing: 10px;

  border-collapse: separate;
}

table th {
  padding-top: 1em;

  text-align: left;
}

table th p {
  color: #9b9b9b;

  font-weight: 400;
}
table td > caption {
  display: block;

  text-align: center;

  color: #9b9b9b;

  font-size: 0.8em;
}
table td > svg {
  border-radius: 12px;
  background-color: white;
}
.code-range {
  text-align: center;

  border: 1px solid #9b9b9b;
  border-top: none;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}
.code-range div {
  margin-bottom: -0.5em;
}
.code-range code {
  padding: 0 0.5em;

  color: #e35050;
  background: #f7f7f7;

  font-size: 0.75em;
  font-weight: bold;
}
</style>
