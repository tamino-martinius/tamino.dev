import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
window.setTimeout(() => {
  document.querySelector('.loader').classList.add('hidden');
}, 1000);

OfflinePluginRuntime.install({
  onUpdateReady: function () {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function () {
    window.location.reload();
  }
});
