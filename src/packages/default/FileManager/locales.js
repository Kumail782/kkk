/*!
 * OS.js - JavaScript Operating System
 *
 * Copyright (c) 2011-2015, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */
(function(Application, Window, GUI, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // LOCALES
  /////////////////////////////////////////////////////////////////////////////

  var _Locales = {
    no_NO : {
      'Show Sidebar' : 'Vis Sidebar',
      'Copying file...' : 'Kopierer fil...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "Kopierer <span>{0}</span> to <span>{1}</span>",
      "Refreshing..." : "Gjenoppfrisker...",
      "Loading..." : "Laster...",
      "Create a new file in <span>{0}</span>" : "Opprett ny fil i <span>{0}</span>",
      "Create a new directory in <span>{0}</span>" : "Opprett ny mappe i <span>{0}</span>",
      "Rename <span>{0}</span>" : "Navngi <span>{0}</span>",
      "Delete <span>{0}</span> ?" : "Slette <span>{0}</span> ?"
    },
    pl_PL : {
      'Show Sidebar' : 'Poka?? pasek',
      'Copying file...' : 'Kopiowanie pliku...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "Kopiowanie <span>{0}</span> do <span>{1}</span>",
      "Refreshing..." : "Od??wie??anie...",
      "Loading..." : "??adowanie...",
      "Create a new directory in <span>{0}</span>" : "Utw??rz nowy folder w <span>{0}</span>",
      "Rename <span>{0}</span>" : "Zmie?? nazwe <span>{0}</span>",
      "Delete <span>{0}</span> ?" : "Usun???? <span>{0}</span> ?"
    },
    de_DE : {
      'Show Sidebar' : 'Seitenleiste anzeigen',
      'Copying file...' : 'Kopiere Datei...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "Kopiere <span>{0}</span> nach <span>{1}</span>",
      "Refreshing..." : "Aktualisiere...",
      "Loading..." : "Lade...",
      "Create a new directory in <span>{0}</span>" : "Erstelle ein neues Verzeichnis in <span>{0}</span>",
      "Rename <span>{0}</span>" : "<span>{0}</span> umbenennen",
      "Delete <span>{0}</span> ?" : "<span>{0}</span> l??schen?"
    },
    fr_FR : {
    },
    ru_RU : {
      'Show Sidebar' : '???????????????????? ?????????????? ????????????',
      'Copying file...' : '?????????????????????? ??????????...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "?????????????????????? <span>{0}</span> ?? <span>{1}</span>",
      "Refreshing..." : "????????????????????...",
      "Loading..." : "????????????????...",
      "Create a new directory in <span>{0}</span>" : "?????????????? ?????????? ?????????????? ?? <span>{0}</span>",
      "Rename <span>{0}</span>" : "?????????????????????????? <span>{0}</span>",
      "Delete <span>{0}</span> ?" : "?????????????? <span>{0}</span> ?"
    },
    nl_NL : {
      'Show Sidebar' : 'Zijbar tonen',
      'Copying file...' : 'Bestand kopieren...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "Kopieer <span>{0}</span> naar <span>{1}</span>",
      "Refreshing..." : "Aktualiseren...",
      "Loading..." : "Laden...",
      "Create a new directory in <span>{0}</span>" : "Maak een neiuwe map in <span>{0}</span>",
      "Rename <span>{0}</span>" : "<span>{0}</span> hernoemen",
      "Delete <span>{0}</span> ?" : "<span>{0}</span> verwijderen?"
    },
    vi_VN : {
      'Show Sidebar' : 'Hi???n Sidebar',
      'Copying file...' : '??ang sao ch??p...',
      "Copying <span>{0}</span> to <span>{1}</span>" : "??ang ch??p <span>{0}</span> t???i <span>{1}</span>",
      "Refreshing..." : "??ang l??m m???i...",
      "Loading..." : "??ang t???i...",
      "Create a new directory in <span>{0}</span>" : "T???o m???t th?? m???c m???i trong <span>{0}</span>",
      "Rename <span>{0}</span>" : "?????i t??n <span>{0}</span>",
      "Delete <span>{0}</span> ?" : "X??a <span>{0}</span>?"
    }

  };

  function _() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(_Locales);
    return API.__.apply(this, args);
  }

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationFileManager = OSjs.Applications.ApplicationFileManager || {};
  OSjs.Applications.ApplicationFileManager._ = _;

})(OSjs.Core.Application, OSjs.Core.Window, OSjs.GUI, OSjs.Utils, OSjs.API, OSjs.VFS);
