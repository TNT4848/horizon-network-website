function copyIP() {
    const ip = "mc.horizon-net.net";
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copied to clipboard: " + ip);
    });
}
