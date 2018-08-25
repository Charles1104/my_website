function GaBqPlugin(tracker) {

    ga(function(tracker) {
        var originalSendHitTask = tracker.get('sendHitTask');
        tracker.set('sendHitTask', function(model) {
            var payLoad = model.get('hitPayload');
            originalSendHitTask(model);
            var gifRequest = new XMLHttpRequest();
            var gifPath = "http://training-190916/collect";
            gifRequest.open('get', gifPath + '?' + payLoad, true);
            gifRequest.send();
        });
    });

}
ga('provide', 'gabqplugin', GaBqPlugin);