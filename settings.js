import 'dotenv/config';

const settings = {
/* ================= BOT IDENTITY ================= */

botName: process.env.BOT_NAME || 'SUBZERO-DYDY',
botOwner: process.env.BOT_OWNER || 'DYDY LE VIDE',
ownerNumber: process.env.OWNER_NUMBER || '50932028973',
author: process.env.AUTHOR || 'Mr Frank OFC',
packname: process.env.PACKNAME || 'Dydy Le Vide',
description: process.env.DESCRIPTION || 'Je suis Le Vide pas un roi, mais la fin',

/* ================= SESSION ================= */

sessionId: process.env.SESSION_ID || 'Ice~MGAjD1',
pairingNumber: process.env.PAIRING_NUMBER || '50932028973',

/* ================= CDN ================= */

CDN: "https://mrfrankk-cdn.hf.space" // Dont change this part
};

export default settings;
