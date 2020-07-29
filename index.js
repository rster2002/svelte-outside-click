export default function clickOutside(node, onEventFunction) {
    const handleClick = event => {
        var { path } = event;

        if (!path.includes(node)) {
            onEventFunction();
        }
    }

    document.addEventListener("click", handleClick);

    return {
        destroy() {
            document.removeEventListener("click", handleClick);
        }
    }
}