# Minecraft Loot Table Generator

This is a tool that let you easily generate a loot table file for your Minecraft datapack.

<h4>Options</h4>
<div id="gen-options-wrapper">
  <h5>Type</h5>
  <select name="type">
    <option value="generic">generic</option>
    <option value="entity">entity</option>
    <option value="block">block</option>
    <option value="chest">chest</option>
    <option value="fishing">fishing</option>
    <option value="gift">gift</option>
    <option value="advancement_reward">advancement_reward</option>
    <option value="barter">barter</option>
    <option value="command">command</option>
    <option value="selector">selector</option>
    <option value="advancement_entity">advancement_entity</option>
    <option value="empty">empty</option>
  </select>
  <h5>Pools</h5>
  <div id="loot-pools">
    <div class="loot-pool">
      <h5>Conditions</h5>
      <h5>Functions</h5>
      <h5>Rolls</h5>
      <div class="pool-settings-wrapper">
        <select oninput="loot_changeRoll()">
          <option name="value">An exact value</option>
          <option name="range">A range w/ min and max value</option>
        </select>
        <div><h6>Rolls</h6><input value="1"></div>
      </div>
      <h5>Bonus Rolls</h5>
      <div class="pool-settings-wrapper">
        <select oninput="loot_changeBonusRoll()">
          <option name="none">Don't use bonus rolls</option>
          <option name="value">An exact value</option>
          <option name="range">A range w/ min and max value</option>
        </select>
      </div>
      <h5>Entries</h5>
      <button onclick="loot_addPool()" class="add-pool">+ Add Pool</button>
    </div>
  </div>
</div>

<h4>JSON</h4>
<div id="loot-json-wrapper">
  <pre class="prettyprint"><code id="loot-json"></code></pre>
</div>
