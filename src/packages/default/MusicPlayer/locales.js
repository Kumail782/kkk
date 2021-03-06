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
(function(Application, Window, GUI, Dialogs, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // LOCALES
  /////////////////////////////////////////////////////////////////////////////

  var _Locales = {
    no_NO : {
      'Playlist' : 'Spilleliste',
      'Playback aborted' : 'Avspilling avbrutt',
      'Network or communication error' : 'Nettverks- eller kommunikasjonsfeil',
      'Decoding failed. Corruption or unsupported media' : 'Dekoding feilet. Korrupt eller ust??ttet media',
      'Media source not supported' : 'Media-kilde ikke st??ttet',
      'Failed to play file' : 'Klarte ikke spille av fil',
      'Artist' : 'Artist',
      'Album' : 'Album',
      'Track' : 'L??t',
      'Time' : 'Tid',
      'Media information query failed' : 'Media-informasjon forespursel feil',
      'seek unavailable in format' : 'spoling utilgjenglig i format',
      'The audio type is not supported: {0}' : 'Denne lyd-typen er ikke st??ttet: {0}',
    },
    pl_PL : {
      'Playlist' : 'Playlista',
      'Playback aborted' : 'Odtwarzanie Przerwane',
      'Network or communication error' : 'B????d Sieci lub Komunikacji',
      'Decoding failed. Corruption or unsupported media' : 'Dekodowanie nie powiod??o si??. Uszkodzony lub nieobs??ugiwany plik',
      'Media source not supported' : 'Plik nie jest wspierany',
      'Failed to play file' : 'Nie mo??na odtworzy?? pliku',
      'Artist' : 'Artysta',
      'Album' : 'Album',
      'Track' : '??cie??ka',
      'Time' : 'Czas',
      'Media information query failed' : 'Brak informacji',
      'seek unavailable in format' : 'Przewijanie nie jest obs??ugiwane w tym formacie',
      'The audio type is not supported: {0}' : 'Ten typ audio nie jest obs??ugiwany: {0}',
    },
    de_DE : {
      'Playlist' : 'Wiedergabeliste',
      'Playback aborted' : 'Wiedergabe abgebrochen',
      'Network or communication error' : 'Netzwerk Kommunikationsfehler',
      'Decoding failed. Corruption or unsupported media' : 'Dekodierung gescheitert. Fehlerhafte oder nicht unterst??tzte Datei',
      'Media source not supported' : 'Medienquelle nicht unterst??tzt',
      'Failed to play file' : 'Wiedergabe der Datei gescheitert',
      'Artist' : 'K??nstler',
      'Album' : 'Album',
      'Track' : 'Titel',
      'Time' : 'Zeit',
      'Media information query failed' : 'Media Informationssuche gescheitert',
      'seek unavailable in format' : 'Spulen im Format nicht verf??gbar',
      'The audio type is not supported: {0}' : 'Der Audio-Typ {0} ist nicht unterst??tzt',
    },
    es_ES : {
      'Playlist' : 'Lista de reproducci??n',
      'Playback aborted' : 'Playback anulado',
      'Network or communication error' : 'Error de red o de comunicaci??n',
      'Decoding failed. Corruption or unsupported media' : 'Fallo en el desentrelazado. Medio corrupto o no soportado',
      'Media source not supported' : 'Medio no soportado',
      'Failed to play file' : 'Error reproduciendo archivo',
      'Artist' : 'Artista',
      'Album' : 'Album',
      'Track' : 'Pista',
      'Time' : 'Tiempo',
      'Media information query failed' : 'Error recupersqndo informaci??n del medio',
      'seek unavailable in format' : 'b??squeda no disponible en este formato',
      'The audio type is not supported: {0}' : 'El tipo de audio no est?? soportado: {0}',
    },
    fr_FR : {
    },
    ru_RU : {
      'Playlist' : '???????????? ??????????????????????????????',
      'Playback aborted' : '?????????????????????????????? ????????????????',
      'Network or communication error' : '???????????? ????????????????????',
      'Decoding failed. Corruption or unsupported media' : '???? ?????????????? ???????????????????????? ????????. ???????? ?????????????????? ?????? ???????????? ???????????? ???? ????????????????????????????',
      'Media source not supported' : '?????????? ?????????? ???????? ???? ????????????????????????????',
      'Failed to play file' : '???????????? ??????????????????????????????',
      'Artist' : '????????????',
      'Album' : '????????????',
      'Track' : '????????',
      'Time' : '??????????',
      'Media information query failed' : '???????????? ?? ?????????????? ??????????-????????????????????',
      'seek unavailable in format' : '?????????????????? ???????????????????? ?? ???????? ??????????????',
      'The audio type is not supported: {0}' : '?????? ?????????? ???? ????????????????????????????: {0}'
    },
    nl_NL : {
      'Playlist' : 'Afspeel lijst',
      'Playback aborted' : 'Spelen onderbroken',
      'Network or communication error' : 'Netwerk communicatie fout',
      'Decoding failed. Corruption or unsupported media' : 'Dekoderen lukt niet: bestandstype wordt niet ondersteund',
      'Media source not supported' : 'Media bron wordt niet ondersteund',
      'Failed to play file' : 'Afspelen lukt niet',
      'Artist' : 'Artiest',
      'Album' : 'Album',
      'Track' : 'Naam',
      'Time' : 'Tijd',
      'Media information query failed' : 'Zoeken naar media is niet gelukt',
      'seek unavailable in format' : 'Voor/acteruit spoelen is niet beschikbaar in dit formaat',
      'The audio type is not supported: {0}' : 'Audio type {0} wordt niet ondersteund',
    },
    vi_VN : {
      'Playlist' : 'Danh s??ch ph??t',
      'Playback aborted' : 'Ph??t l???i b??? h???y',
      'Network or communication error' : 'M???ng l?????i ho???c th??ng tin li??n l???c b??? l???i',
      'Decoding failed. Corruption or unsupported media' : 'Gi???i m?? th???t b???i. Ph????ng ti???n truy???n th??ng b??? h???ng ho???c kh??ng ???????c h??? tr???',
      'Media source not supported' : 'Ngu???n ph????ng ti???n kh??ng ???????c h??? tr???',
      'Failed to play file' : 'Kh??ng th??? ch??i t???p tin',
      'Artist' : 'Ca s??',
      'Album' : 'Album',
      'Track' : 'B??i h??t',
      'Time' : 'Th???i gian',
      'Media information query failed' : 'Truy v???n ph????ng ti???n th??ng tin th???t b???i',
      'seek unavailable in format' : 'kh??ng tua ???????c trong ?????nh d???ng n??y',
      'The audio type is not supported: {0}' : 'Lo???i ??m thanh {0} kh??ng ???????c h??? tr???',
    }
  };

  function _() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(_Locales);
    return OSjs.API.__.apply(this, args);
  }

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationMusicPlayer = OSjs.Applications.ApplicationMusicPlayer || {};
  OSjs.Applications.ApplicationMusicPlayer._ = _;

})(OSjs.Core.Application, OSjs.Core.Window, OSjs.GUI, OSjs.Dialogs, OSjs.VFS);
