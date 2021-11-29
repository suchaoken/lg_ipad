import { WS_ADDRESS } from "../configs/index"
function useWebsocket(handleMessage) {
    const ws = new WebSocket(WS_ADDRESS);
    const init = () => {
        bindEvent()
    }
    function bindEvent() {
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws.addEventListener('error', handleError, false)
        ws.addEventListener('message', handleMessage, false)
    }
    function handleOpen(e) {
        console.log("Websocket open", e);
    };
    function handleClose(e) {
        console.log("Websocket close", e);

    };
    function handleError(e) {
        console.log("webscoket error", e);

    };
    init()
    return ws
}
export default useWebsocket