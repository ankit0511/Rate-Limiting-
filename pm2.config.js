{
    "apps"[
        {
            "name": "Node-API",
            "script": "app.js",
            "instances": 2,
            "exec_mode": "cluster",
            "watch": true
        },
        {
            "name": "Node-API2",
            "script": "app.js",
            "instances": 4,
            "exec_mode": "cluster",
            "watch": true
        }
    ]
}
