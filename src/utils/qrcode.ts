import {queryOptions} from "@tanstack/react-query";
import {createServerFn, createServerOnlyFn} from "@tanstack/react-start";
import {createHash} from "node:crypto";
import {serverEnv} from "@/config/env.server.ts";


const QR_GUID = "TVR"
const QR_PREFIX = "GM2";


const generateHash = createServerOnlyFn(async (timestamp: number) => {
    const { CARD_NUMBER, DEVICE_ID } = serverEnv;

    const dataToHash = CARD_NUMBER + QR_GUID + timestamp + DEVICE_ID;
    const hash = createHash("sha256").update(dataToHash).digest("hex");

    // return hash last 8
    return hash.slice(-8).toUpperCase();
})


export const generateQrCodeData = createServerFn()
    .handler(async () => {
        const timestamp = Math.floor(Date.now() / 1000);

        const hash = await generateHash(timestamp);

        const { CARD_NUMBER } = serverEnv;

        return `${QR_PREFIX}:${CARD_NUMBER}:${QR_GUID}:${timestamp}:${hash}`;
    })


export const REFETCH_QR_INTERVAL_MS = 5_000;

export const qrCodeOptions = () => queryOptions({
    queryKey: ["QRCode"],
    queryFn: () => generateQrCodeData(),
    refetchInterval: REFETCH_QR_INTERVAL_MS,
    placeholderData: (previousData) => previousData
})