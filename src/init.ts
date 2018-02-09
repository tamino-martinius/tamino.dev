import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
document.querySelector('.loader').classList.add('hidden');

OfflinePluginRuntime.install({
  onUpdateReady: function () {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function () {
    window.location.reload();
  }
});
