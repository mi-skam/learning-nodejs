function deleteAddress(addresses, id) {
  // Wandelt den String id in eine Dezimalzahl mit der Basis 10 um
  const parsedId = parseInt(id, 10);
  // iteriert durch addresses und überprüft, ob die geparste Id im addresses Array auffindbar ist und wenn das so ist, gib den Index in addresses zurück
  const index = addresses.findIndex((address) => address.id === parsedId);
  // lösche den Eintrag in addresses
  addresses.splice(index, 1);

  return addresses;
}

module.exports = deleteAddress;
