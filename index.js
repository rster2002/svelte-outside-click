export default function clickOutside(node, onEventFunction) {
    const isNestedChild = (parent, child) => {
        var currentNode = child;

        while (currentNode !== null) {
            if (currentNode.parentNode === parent) {
                return true;
            } else {
                currentNode = currentNode.parentNode;
            }
        }

        return false;
    }

    const handleClick = event => {
        var { target } = event;

        if (!node.isSameNode(target) && !isNestedChild(node, target)) {
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