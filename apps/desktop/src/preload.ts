import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("kairo", {});
