chrome.history.onVisited.addListener(
    function(visit) {
        chrome.webRequest.onBeforeRequest.addListener(
            function(req) {
                console.log(visit.visitCount)
                if (visit.visitCount > 1) {
                    console.log("you've visited too much");
                    return {
                        cancel: true
                    };
                }
            }, {
                urls: [
                    "<all_urls>"
                ]
            }, ["blocking"]);

    });
