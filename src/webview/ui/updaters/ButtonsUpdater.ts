import { SessionConfig } from "../../SessionConfig";
import { $ } from "../../util";
import { toggleLinkedButton, toggleLockedButton } from "../elements";

export function LockButtonUpdater() {
    const isLocked = SessionConfig.get("isLocked");

    const icon = $(".codicon", toggleLockedButton);

    icon.classList.remove("codicon-unlock");
    icon.classList.remove("codicon-lock");

    icon.classList.add(isLocked ? "codicon-lock" : "codicon-unlock");

    $(`[data-state="isLocked"]`, toggleLockedButton).innerText = isLocked
        ? "Unlock changes"
        : "Lock changes";
}

export function LinkButtonUpdater() {
    const isLinked = SessionConfig.get("isLinked");

    toggleLinkedButton.dataset.state = isLinked ? "linked" : "unlinked";

    $(`[data-state="isLinked"]`, toggleLinkedButton).innerText = isLinked
        ? "Broken editor conection"
        : "Connect to editor";
}
