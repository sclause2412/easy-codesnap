import type { WebViewConfigKey } from "../../../types";
import { LinkButtonUpdater, LockButtonUpdater } from "./ButtonsUpdater";
import { LineNumbersUpdater } from "./LineNumbersUpdater";
import { OneTimeConfigUpdater } from "./OneTimeConfigUpdater";
import { VarUpdater } from "./VarUpdater";
import { VisibilityUpdater } from "./VisibilityUpdater";
import { WatermarkUpdater } from "./WatermarkUpdater";
import { WindowUpdater } from "./WindowUpdater";
import { ZoomUpdater } from "./ZoomUpdater";

export * from "./ButtonsUpdater";
export * from "./CodeUpdater";
export * from "./LineNumbersUpdater";
export * from "./OneTimeConfigUpdater";
export * from "./UIUpdater";
export * from "./VarUpdater";
export * from "./VisibilityUpdater";
export * from "./ZoomUpdater";

export const updaters = [
    new LockButtonUpdater(),
    new LinkButtonUpdater(),
    new ZoomUpdater(),
    new VarUpdater(),
    new VisibilityUpdater(),
    new LineNumbersUpdater(),
    new OneTimeConfigUpdater(),
    new WindowUpdater(),
    new WatermarkUpdater(),
];

export function GenericUpdate(keys: WebViewConfigKey[]) {
    updaters
        .filter((updater) => {
            return updater.dependencies.some((dependency) =>
                keys.includes(dependency),
            );
        })
        .forEach((updater) => updater.update());
}
